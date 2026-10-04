"""Génère audio/*.mp3 (voix neuronale française) et audio/map.json (texte -> fichier)."""
import asyncio, hashlib, json, os, subprocess, sys
import edge_tts
VOICES = {"f": "fr-FR-VivienneMultilingualNeural", "m": "fr-FR-RemyMultilingualNeural"}
js = open("data.js", encoding="utf-8").read() + """
const T=new Set();THEMES.forEach(t=>t.items.forEach(i=>T.add(i.fr)));
Object.values(PHR).forEach(a=>a.forEach(p=>T.add(p[0])));
PRON.forEach(p=>p.ex.forEach(e=>T.add(e[0])));
GRAM.forEach(g=>g.ex.forEach(e=>T.add(e[0].split(' / ')[0])));
console.log(JSON.stringify([...T]));"""
texts = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True, encoding="utf-8").stdout)
def say_text(t):
    t = t.replace("…", "").replace("T-shirt", "tee-shirt").strip()
    return t if t[-1] in ".?!" else t + "."
async def one(t, sem, g, mp):
    name = hashlib.md5(t.encode()).hexdigest()[:12] + ".mp3"
    path = f"audio/{g}/{name}"
    if not os.path.exists(path):
        async with sem:
            for _ in range(3):
                try:
                    await edge_tts.Communicate(say_text(t), VOICES[g], rate="-5%").save(path)
                    break
                except Exception as e:
                    print("retry", t, e)
    if os.path.exists(path) and os.path.getsize(path) > 500:
        mp[t] = name
async def main():
    sem = asyncio.Semaphore(6)
    for g in VOICES:
        os.makedirs(f"audio/{g}", exist_ok=True)
        mp = {}
        await asyncio.gather(*[one(t, sem, g, mp) for t in texts])
        json.dump(mp, open(f"audio/map_{g}.json", "w", encoding="utf-8"), ensure_ascii=False, indent=0)
        print(g, len(mp), "audios")
asyncio.run(main())
