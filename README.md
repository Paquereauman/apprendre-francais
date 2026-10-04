<div align="center">

# 🇫🇷 Le français · 学法语

### 专为中国学生设计的法语 A1 学习应用 · A French A1 course for Chinese-speaking students

![level](https://img.shields.io/badge/niveau-A1-0055a4?style=for-the-badge)
![words](https://img.shields.io/badge/vocabulaire-302%20mots-ef4135?style=for-the-badge)
![audio](https://img.shields.io/badge/audio-774%20MP3%20(2%20voix)-2bb673?style=for-the-badge)
![deps](https://img.shields.io/badge/d%C3%A9pendances-0-457b9d?style=for-the-badge)

**单页网页应用，无需安装，电脑和手机都能用。**

### 👉 [打开应用 · Open the app](https://paquereauman.github.io/apprendre-francais/)

</div>

---

## ✨ 功能 · Features

| | |
|---|---|
| 📚 **14 个主题、302 个单词** | 问候、自我介绍、数字、颜色、家庭、食物、餐厅、交通、购物、身体与健康、时间、家与学校、常用动词、形容词与疑问词。每个词都有 IPA 音标、中文释义、表情图标和自然的神经网络语音（可切换女声 Vivienne / 男声 Rémy）。 |
| 🗣️ **发音指南** | 针对中国学生最难的音：**u / ou、eu、r（小舌音）、鼻元音、ch / j、词尾不发音的辅音、联诵、不发音的 h**，每个音都有对比和例词，点击即可听。 |
| 📘 **语法要点** | 10 个小节，用中文解释：名词阴阳性与冠词、être / avoir、否定、-er 动词变位、提问方式、形容词配合、物主形容词、au / du 缩合、近将来、il y a / c'est。 |
| ❓ **5 种题型** | 看词选义、看义选词、听音选词、选冠词（un / une，专攻阴阳性）、拼写（会检查重音符号）。 |
| 🔁 **间隔复习** | 答对后按 1、2、4、8、16、32 天复习；答错则次日重来。一个词需要在 **2 种不同题型**中答对才算“掌握”。 |
| 🃏 **卡片与单词表** | 翻转卡片、点击发音、可随时关闭 / 打开音标。 |
| 💬 **常用句子** | 每个主题配有实用句子（不计入进度）。 |
| 👤 **账号与云端进度** | 用户名 + 密码（密钥在浏览器中派生，不会明文发送），在任何设备上找回进度。 |
| 🎯 **学习激励** | 经验值、等级、连续学习天数、每日目标。 |

## 🚀 本地运行

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

没有服务器也可以直接打开 `index.html`，但录音文件和云端进度需要通过 http(s) 访问。

## 🗂️ 结构

```
index.html        应用（界面 + 逻辑）
data.js           全部内容：主题与单词、句子、发音指南、语法
audio/            audio/f、audio/m：两种声音的 MP3；map_f.json、map_m.json（法语文本 → 文件）
build_audio.py    用 edge-tts（fr-FR-VivienneMultilingualNeural + RemyMultilingualNeural）生成语音
```

重新生成语音：`pip install edge-tts` 后运行 `python build_audio.py`（需要 Node.js 来读取 `data.js`）。

## 🔗 姊妹项目

本项目的结构来自 [apprendre-chinois](https://github.com/Paquereauman/apprendre-chinois)（面向法语使用者的中文学习应用）。

> ⚠️ 内容在 AI 辅助下编写，建议由法语母语者审校句子与翻译。
