"""Génère audio/*.mp3 (voix neuronale française) et audio/map.json (texte -> fichier)."""
import asyncio, hashlib, json, os, subprocess, sys
import edge_tts
VOICE = "fr-FR-DeniseNeural"
js = open("data.js", encoding="utf-8").read() + """
const T=new Set();THEMES.forEach(t=>t.items.forEach(i=>T.add(i.fr)));
Object.values(PHR).forEach(a=>a.forEach(p=>T.add(p[0])));
PRON.forEach(p=>p.ex.forEach(e=>T.add(e[0])));
GRAM.forEach(g=>g.ex.forEach(e=>T.add(e[0].split(' / ')[0])));
console.log(JSON.stringify([...T]));"""
texts = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True, encoding="utf-8").stdout)
os.makedirs("audio", exist_ok=True)
mp = json.load(open("audio/map.json", encoding="utf-8")) if os.path.exists("audio/map.json") else {}
async def one(t, sem):
    name = hashlib.md5(t.encode()).hexdigest()[:12] + ".mp3"
    path = "audio/" + name
    if not os.path.exists(path):
        async with sem:
            for _ in range(3):
                try:
                    await edge_tts.Communicate(t.replace("…", "").replace("T-shirt", "tee-shirt"), VOICE, rate="-10%").save(path)
                    break
                except Exception as e:
                    print("retry", t, e)
    if os.path.exists(path) and os.path.getsize(path) > 500:
        mp[t] = name
async def main():
    sem = asyncio.Semaphore(6)
    await asyncio.gather(*[one(t, sem) for t in texts])
asyncio.run(main())
json.dump(mp, open("audio/map.json", "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(len(texts), "textes,", len(mp), "audios")
