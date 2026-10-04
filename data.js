/* Contenu : thèmes A1 (français → chinois). Format d'un mot : "français|API|中文|emoji|genre(m/f, facultatif)" */
const P=s=>s.trim().split("\n").map(l=>{const a=l.split("|");return{fr:a[0],ipa:a[1],zh:a[2],e:a[3]||"🔹",g:a[4]||""}});
const THEMES=[
{id:"salut",zh:"问候与礼貌",fr:"Salutations",icon:"👋",color:"#f4a300",step:1,items:P(`
bonjour|bɔ̃.ʒuʁ|你好（白天）|👋
bonsoir|bɔ̃.swaʁ|晚上好|🌆
salut|sa.ly|嗨 / 再见（口语）|🙋
au revoir|o ʁə.vwaʁ|再见|👋
à bientôt|a bjɛ̃.to|回头见|🔜
à demain|a də.mɛ̃|明天见|📅
bonne nuit|bɔn nɥi|晚安|🌙
merci|mɛʁ.si|谢谢|🙏
merci beaucoup|mɛʁ.si bo.ku|非常感谢|🙏
de rien|də ʁjɛ̃|不客气|😊
s'il vous plaît|sil vu plɛ|请（对您）|🙏
s'il te plaît|sil tə plɛ|请（对你，熟人）|🙏
excusez-moi|ɛk.sky.ze mwa|打扰一下 / 不好意思|🙋
pardon|paʁ.dɔ̃|对不起|😅
oui|wi|是 / 对|✅
non|nɔ̃|不 / 不是|❌
ça va ?|sa va|你好吗？/ 还好吗？|🙂
très bien|tʁɛ bjɛ̃|很好|👍
enchanté|ɑ̃.ʃɑ̃.te|幸会|🤝
bienvenue|bjɛ̃.və.ny|欢迎|🎉
bonne journée|bɔn ʒuʁ.ne|祝你今天愉快|☀️`)},
{id:"pres",zh:"自我介绍",fr:"Se présenter",icon:"🤝",color:"#e63946",step:1,items:P(`
je m'appelle…|ʒə ma.pɛl|我叫……|🪪
je suis…|ʒə sɥi|我是……|🙋
j'ai vingt ans|ʒe vɛ̃.t‿ɑ̃|我二十岁|🎂
je viens de Chine|ʒə vjɛ̃ də ʃin|我来自中国|🇨🇳
j'habite à Paris|ʒa.bit a pa.ʁi|我住在巴黎|🏙️
je parle chinois|ʒə paʁl ʃi.nwa|我说中文|🗣️
je suis étudiant|ʒə sɥi e.ty.djɑ̃|我是学生（男）|🎓
je suis étudiante|ʒə sɥi e.ty.djɑ̃t|我是学生（女）|🎓
je ne comprends pas|ʒə nə kɔ̃.pʁɑ̃ pa|我不明白|❓
répétez, s'il vous plaît|ʁe.pe.te sil vu plɛ|请再说一遍|🔁
parlez lentement|paʁ.le lɑ̃t.mɑ̃|请说慢一点|🐢
le nom|lə nɔ̃|姓|🪪|m
le prénom|lə pʁe.nɔ̃|名|🪪|m
l'âge|laʒ|年龄|🎂|m
le pays|lə pe.i|国家|🌍|m
chinois|ʃi.nwa|中国的 / 中文|🇨🇳
français|fʁɑ̃.sɛ|法国的 / 法语|🇫🇷
vous|vu|您 / 你们|🧑‍🤝‍🧑
tu|ty|你（对熟人）|🧑`)},
{id:"nombres",zh:"数字",fr:"Les nombres",icon:"🔢",color:"#457b9d",step:1,items:P(`
zéro|ze.ʁo|0|0️⃣
un|œ̃|1|1️⃣
deux|dø|2|2️⃣
trois|tʁwa|3|3️⃣
quatre|katʁ|4|4️⃣
cinq|sɛ̃k|5|5️⃣
six|sis|6|6️⃣
sept|sɛt|7|7️⃣
huit|ɥit|8|8️⃣
neuf|nœf|9|9️⃣
dix|dis|10|🔟
onze|ɔ̃z|11|🔢
douze|duz|12|🔢
treize|tʁɛz|13|🔢
quatorze|ka.tɔʁz|14|🔢
quinze|kɛ̃z|15|🔢
seize|sɛz|16|🔢
dix-sept|di.sɛt|17（十＋七）|🔢
dix-huit|di.zɥit|18（十＋八）|🔢
dix-neuf|diz.nœf|19（十＋九）|🔢
vingt|vɛ̃|20|🔢
trente|tʁɑ̃t|30|🔢
quarante|ka.ʁɑ̃t|40|🔢
cinquante|sɛ̃.kɑ̃t|50|🔢
soixante|swa.sɑ̃t|60|🔢
soixante-dix|swa.sɑ̃t dis|70（60＋10）|🔢
quatre-vingts|ka.tʁə.vɛ̃|80（4个20）|🔢
cent|sɑ̃|100|💯
mille|mil|1000|🔢`)},
{id:"couleurs",zh:"颜色",fr:"Les couleurs",icon:"🎨",color:"#7b4fd1",step:1,items:P(`
rouge|ʁuʒ|红色|🔴
bleu|blø|蓝色|🔵
vert|vɛʁ|绿色|🟢
jaune|ʒon|黄色|🟡
noir|nwaʁ|黑色|⚫
blanc|blɑ̃|白色|⚪
gris|ɡʁi|灰色|🩶
rose|ʁoz|粉色|🌸
orange|ɔ.ʁɑ̃ʒ|橙色|🟠
violet|vjɔ.lɛ|紫色|🟣
marron|ma.ʁɔ̃|棕色|🟤`)},
{id:"famille",zh:"家庭",fr:"La famille",icon:"👨‍👩‍👧",color:"#2bb673",step:2,items:P(`
la famille|la fa.mij|家庭|👨‍👩‍👧
le père|lə pɛʁ|父亲|👨
la mère|la mɛʁ|母亲|👩
les parents|le pa.ʁɑ̃|父母|👫
le frère|lə fʁɛʁ|兄弟|👦
la sœur|la sœʁ|姐妹|👧
le fils|lə fis|儿子|👦
la fille|la fij|女儿 / 女孩|👧
le grand-père|lə ɡʁɑ̃.pɛʁ|祖父 / 外祖父|👴
la grand-mère|la ɡʁɑ̃.mɛʁ|祖母 / 外祖母|👵
l'oncle|lɔ̃kl|叔叔 / 舅舅|👨|m
la tante|la tɑ̃t|姑姑 / 阿姨|👩
le cousin|lə ku.zɛ̃|堂/表兄弟|🧑
la cousine|la ku.zin|堂/表姐妹|🧑
le mari|lə ma.ʁi|丈夫|🤵
la femme|la fam|妻子 / 女人|👰
l'enfant|lɑ̃.fɑ̃|孩子|🧒|m
l'ami|la.mi|朋友（男）|🧑‍🤝‍🧑|m
l'amie|la.mi|朋友（女）|🧑‍🤝‍🧑|f
le bébé|lə be.be|婴儿|👶`)},
{id:"food",zh:"食物与饮料",fr:"Manger et boire",icon:"🥖",color:"#f77f00",step:2,items:P(`
le pain|lə pɛ̃|面包|🥖
le fromage|lə fʁɔ.maʒ|奶酪|🧀
le beurre|lə bœʁ|黄油|🧈
l'œuf|lœf|鸡蛋|🥚|m
la viande|la vjɑ̃d|肉|🥩
le poulet|lə pu.lɛ|鸡肉|🍗
le poisson|lə pwa.sɔ̃|鱼|🐟
le riz|lə ʁi|米饭|🍚
les pâtes|le pɑt|意面 / 面条|🍝
la soupe|la sup|汤|🍲
la salade|la sa.lad|沙拉|🥗
le fruit|lə fʁɥi|水果|🍎
la pomme|la pɔm|苹果|🍎
la banane|la ba.nan|香蕉|🍌
l'orange|lɔ.ʁɑ̃ʒ|橙子|🍊|f
le légume|lə le.ɡym|蔬菜|🥕
la pomme de terre|la pɔm də tɛʁ|土豆|🥔
l'eau|lo|水|💧|f
le café|lə ka.fe|咖啡|☕
le thé|lə te|茶|🍵
le vin|lə vɛ̃|葡萄酒|🍷
la bière|la bjɛʁ|啤酒|🍺
le lait|lə lɛ|牛奶|🥛
le jus d'orange|lə ʒy dɔ.ʁɑ̃ʒ|橙汁|🧃
le sucre|lə sykʁ|糖|🍬
le sel|lə sɛl|盐|🧂
le gâteau|lə ɡɑ.to|蛋糕|🍰
le chocolat|lə ʃɔ.kɔ.la|巧克力|🍫`)},
{id:"resto",zh:"在餐厅",fr:"Au restaurant",icon:"🍽️",color:"#d62828",step:2,items:P(`
le restaurant|lə ʁɛs.to.ʁɑ̃|餐厅|🍽️
la table|la tabl|桌子|🪑
le menu|lə mə.ny|套餐 / 菜单|📋
la carte|la kaʁt|菜单（点菜用）|📜
le serveur|lə sɛʁ.vœʁ|服务员（男）|🤵
la serveuse|la sɛʁ.vøz|服务员（女）|💁‍♀️
l'entrée|lɑ̃.tʁe|前菜|🥗|f
le plat|lə pla|主菜|🍛
le dessert|lə de.sɛʁ|甜点|🍮
la boisson|la bwa.sɔ̃|饮料|🥤
réserver|ʁe.zɛʁ.ve|预订|📞
l'addition|la.di.sjɔ̃|账单|🧾|f
je voudrais…|ʒə vu.dʁɛ|我想要……（礼貌）|🙋
bon appétit|bɔ̃.na.pe.ti|祝你好胃口|😋
c'est délicieux|sɛ de.li.sjø|很好吃|😋
la fourchette|la fuʁ.ʃɛt|叉子|🍴
le couteau|lə ku.to|刀|🔪
la cuillère|la kɥi.jɛʁ|勺子|🥄
l'assiette|la.sjɛt|盘子|🍽️|f
le verre|lə vɛʁ|杯子|🥛
la bouteille|la bu.tɛj|瓶子|🍾
végétarien|ve.ʒe.ta.ʁjɛ̃|素食的|🥬
l'allergie|la.lɛʁ.ʒi|过敏|🤧|f`)},
{id:"transport",zh:"交通与城市",fr:"Se déplacer",icon:"🚆",color:"#0077b6",step:3,items:P(`
le train|lə tʁɛ̃|火车|🚆
le métro|lə me.tʁo|地铁|🚇
le bus|lə bys|公交车|🚌
la voiture|la vwa.tyʁ|汽车|🚗
le taxi|lə tak.si|出租车|🚕
l'avion|la.vjɔ̃|飞机|✈️|m
le vélo|lə ve.lo|自行车|🚲
la gare|la ɡaʁ|火车站|🚉
l'aéroport|la.e.ʁo.pɔʁ|机场|🛫|m
la station|la sta.sjɔ̃|站（地铁、公交）|🚏
le billet|lə bi.jɛ|票|🎫
la rue|la ʁy|街道|🛣️
la place|la plas|广场 / 座位|⛲
le plan|lə plɑ̃|地图 / 平面图|🗺️
la ville|la vil|城市|🏙️
le village|lə vi.laʒ|村庄|🏘️
tout droit|tu dʁwa|直走|⬆️
à gauche|a ɡoʃ|向左|⬅️
à droite|a dʁwat|向右|➡️
près|pʁɛ|近|📍
loin|lwɛ̃|远|🛤️
où est… ?|u ɛ|……在哪里？|❓
l'hôtel|lo.tɛl|酒店|🏨|m
la banque|la bɑ̃k|银行|🏦
la poste|la pɔst|邮局|📮
le musée|lə my.ze|博物馆|🏛️`)},
{id:"vetements",zh:"衣服与购物",fr:"Vêtements et achats",icon:"👗",color:"#c2479b",step:2,items:P(`
la chemise|la ʃə.miz|衬衫|👔
le pantalon|lə pɑ̃.ta.lɔ̃|裤子|👖
la robe|la ʁɔb|连衣裙|👗
la jupe|la ʒyp|短裙|👗
le manteau|lə mɑ̃.to|大衣|🧥
la veste|la vɛst|夹克|🧥
le pull|lə pyl|毛衣|🧶
le t-shirt|lə ti.ʃœʁt|T恤|👕
les chaussures|le ʃo.syʁ|鞋子|👟
les chaussettes|le ʃo.sɛt|袜子|🧦
le chapeau|lə ʃa.po|帽子|🎩
les lunettes|le ly.nɛt|眼镜|👓
le sac|lə sak|包|👜
la taille|la taj|尺码|📏
essayer|e.sɛ.je|试穿|🪞
trop cher|tʁo ʃɛʁ|太贵了|💸
combien ça coûte ?|kɔ̃.bjɛ̃ sa kut|多少钱？|💶`)},
{id:"corps",zh:"身体与健康",fr:"Le corps et la santé",icon:"🩺",color:"#6a4c93",step:3,items:P(`
la tête|la tɛt|头|🗣️
les yeux|le zjø|眼睛（复数）|👀
le nez|lə ne|鼻子|👃
la bouche|la buʃ|嘴|👄
l'oreille|lɔ.ʁɛj|耳朵|👂|f
la main|la mɛ̃|手|✋
le bras|lə bʁa|手臂|💪
la jambe|la ʒɑ̃b|腿|🦵
le pied|lə pje|脚|🦶
le ventre|lə vɑ̃tʁ|肚子|🤰
le dos|lə do|背|🔙
le cœur|lə kœʁ|心脏|❤️
le médecin|lə med.sɛ̃|医生|👨‍⚕️
l'hôpital|lo.pi.tal|医院|🏥|m
la pharmacie|la faʁ.ma.si|药店|💊
le médicament|lə me.di.ka.mɑ̃|药|💊
j'ai mal à la tête|ʒe mal a la tɛt|我头疼|🤕
la fièvre|la fjɛvʁ|发烧|🤒
malade|ma.lad|生病的|🤢
j'ai besoin d'un médecin|ʒe bə.zwɛ̃ dœ̃ med.sɛ̃|我需要看医生|🆘`)},
{id:"temps",zh:"时间与日期",fr:"Le temps",icon:"📅",color:"#264653",step:3,items:P(`
aujourd'hui|o.ʒuʁ.dɥi|今天|📆
demain|də.mɛ̃|明天|➡️
hier|jɛʁ|昨天|⬅️
maintenant|mɛ̃t.nɑ̃|现在|⏱️
le matin|lə ma.tɛ̃|早上|🌅
l'après-midi|la.pʁɛ.mi.di|下午|🌞|m
le soir|lə swaʁ|晚上|🌆
la nuit|la nɥi|夜里|🌙
la semaine|la sə.mɛn|星期 / 周|🗓️
le mois|lə mwa|月|📅
l'année|la.ne|年|🎆|f
lundi|lœ̃.di|星期一|1️⃣
mardi|maʁ.di|星期二|2️⃣
mercredi|mɛʁ.kʁə.di|星期三|3️⃣
jeudi|ʒø.di|星期四|4️⃣
vendredi|vɑ̃.dʁə.di|星期五|5️⃣
samedi|sam.di|星期六|6️⃣
dimanche|di.mɑ̃ʃ|星期日|7️⃣
le printemps|lə pʁɛ̃.tɑ̃|春天|🌸
l'été|le.te|夏天|☀️|m
l'automne|lo.tɔn|秋天|🍂|m
l'hiver|li.vɛʁ|冬天|❄️|m
quelle heure est-il ?|kɛl œʁ ɛ.til|现在几点？|🕐
il est trois heures|il ɛ tʁwa zœʁ|现在三点|🕒`)},
{id:"maison",zh:"家与学校",fr:"La maison et l'école",icon:"🏠",color:"#8d5524",step:2,items:P(`
la maison|la mɛ.zɔ̃|房子|🏠
l'appartement|la.paʁ.tə.mɑ̃|公寓|🏢|m
la chambre|la ʃɑ̃bʁ|卧室|🛏️
la cuisine|la kɥi.zin|厨房|🍳
la salle de bains|la sal də bɛ̃|浴室|🛁
la porte|la pɔʁt|门|🚪
la fenêtre|la fə.nɛtʁ|窗户|🪟
le lit|lə li|床|🛏️
le livre|lə livʁ|书|📘
le cahier|lə ka.je|笔记本|📓
le stylo|lə sti.lo|笔|🖊️
la classe|la klɑs|班级 / 教室|🏫
le professeur|lə pʁɔ.fɛ.sœʁ|老师|👩‍🏫
l'étudiant|le.ty.djɑ̃|大学生（男）|🎓|m
l'école|le.kɔl|学校|🏫|f
l'université|ly.ni.vɛʁ.si.te|大学|🎓|f
l'ordinateur|lɔʁ.di.na.tœʁ|电脑|💻|m
le téléphone|lə te.le.fɔn|电话 / 手机|📱
le travail|lə tʁa.vaj|工作|💼`)},
{id:"verbes",zh:"常用动词",fr:"Les verbes essentiels",icon:"🏃",color:"#0b7285",step:4,items:P(`
être|ɛtʁ|是|🔹
avoir|a.vwaʁ|有|🔹
aller|a.le|去|🚶
faire|fɛʁ|做|🛠️
manger|mɑ̃.ʒe|吃|🍽️
boire|bwaʁ|喝|🥤
parler|paʁ.le|说|🗣️
dire|diʁ|说（内容）|💬
aimer|e.me|喜欢 / 爱|❤️
vouloir|vu.lwaʁ|想要|🙋
pouvoir|pu.vwaʁ|能 / 可以|💪
savoir|sa.vwaʁ|知道 / 会|🧠
venir|və.niʁ|来|🚶
prendre|pʁɑ̃dʁ|拿 / 乘坐|🤲
voir|vwaʁ|看见|👀
regarder|ʁə.ɡaʁ.de|看|📺
écouter|e.ku.te|听|👂
habiter|a.bi.te|居住|🏠
travailler|tʁa.va.je|工作|💼
étudier|e.ty.dje|学习|📚
acheter|aʃ.te|买|🛒
comprendre|kɔ̃.pʁɑ̃dʁ|明白|💡
apprendre|a.pʁɑ̃dʁ|学|📖
donner|dɔ.ne|给|🎁`)},
{id:"adj",zh:"形容词与疑问词",fr:"Adjectifs et questions",icon:"❓",color:"#9d4edd",step:4,items:P(`
grand|ɡʁɑ̃|大 / 高|📏
petit|pə.ti|小 / 矮|🤏
beau|bo|美丽的|✨
bon|bɔ̃|好的|👍
mauvais|mo.vɛ|坏的|👎
nouveau|nu.vo|新的|🆕
vieux|vjø|旧的 / 老的|👴
chaud|ʃo|热|🔥
froid|fʁwa|冷|🥶
cher|ʃɛʁ|贵|💸
content|kɔ̃.tɑ̃|高兴|😀
fatigué|fa.ti.ɡe|累|😴
qui|ki|谁|🙋
que|kə|什么|❔
où|u|哪里|📍
quand|kɑ̃|什么时候|🕒
pourquoi|puʁ.kwa|为什么|🤔
comment|kɔ.mɑ̃|怎么 / 怎么样|🔧
combien|kɔ̃.bjɛ̃|多少|🔢
quel|kɛl|哪个 / 什么样的|👉
parce que|paʁs kə|因为|➡️`)}
];
const STEPS={1:"第一步 · 基础",2:"第二步 · 日常生活",3:"第三步 · 出行与健康",4:"第四步 · 语言核心"};
/* 有用的句子（不计入进度） */
const PHR={
pres:[["Bonjour, je m'appelle Li Mei.","你好，我叫李梅。"],["Je viens de Chine, j'habite à Lyon.","我来自中国，住在里昂。"],["Excusez-moi, je ne parle pas bien français.","不好意思，我法语说得不好。"]],
resto:[["Une table pour deux, s'il vous plaît.","请给我们一张两人的桌子。"],["Je voudrais un café, s'il vous plaît.","我想要一杯咖啡。"],["L'addition, s'il vous plaît.","请结账。"]],
transport:[["Où est la gare, s'il vous plaît ?","请问火车站在哪里？"],["Un billet pour Paris, s'il vous plaît.","请给我一张去巴黎的票。"],["Continuez tout droit, puis tournez à gauche.","一直走，然后向左转。"]],
vetements:[["Je cherche une chemise bleue.","我在找一件蓝色衬衫。"],["Je peux l'essayer ?","我可以试穿吗？"],["Vous avez la taille M ?","有M码吗？"]],
corps:[["J'ai mal à la gorge.","我喉咙痛。"],["Où est la pharmacie ?","药店在哪里？"],["Appelez un médecin, s'il vous plaît.","请叫医生。"]],
famille:[["Voici ma mère et mon frère.","这是我的母亲和哥哥。"],["Tu as des frères et sœurs ?","你有兄弟姐妹吗？"],["Mon père travaille à Shanghai.","我父亲在上海工作。"]]};
/* 发音指南 */
const PRON=[
{t:"u [y] —— 像“鱼”yú",tip:"嘴唇圆成发“乌”的样子，舌头却保持发“衣”的位置。汉语的 ü（鱼、女）就是这个音。最常见的错误是读成“乌”。",ex:[["tu","ty","你"],["rue","ʁy","街道"],["sur","syʁ","在……上"],["une","yn","一（阴性）"]]},
{t:"ou [u] —— 像“乌”wū",tip:"和 u 是两个不同的音！对比练习：tout [tu]（全部）和 tu [ty]（你）。",ex:[["tout","tu","全部"],["tu","ty","你"],["vous","vu","您"],["vu","vy","看见（过去分词）"]]},
{t:"eu [ø] / [œ]",tip:"嘴唇圆成发“u”的样子，舌头发“诶”的位置。汉语里没有这个音，不要读成“儿”或“欧”。",ex:[["deux","dø","2"],["bleu","blø","蓝色"],["peur","pœʁ","害怕"],["heure","œʁ","小时"]]},
{t:"鼻元音 an / en [ɑ̃]",tip:"气流同时从鼻子出来，结尾不要发出 n 或 ng。口型比汉语“昂”更开、更后。",ex:[["dans","dɑ̃","在……里"],["enfant","ɑ̃.fɑ̃","孩子"],["vent","vɑ̃","风"],["grand","ɡʁɑ̃","大"]]},
{t:"鼻元音 on [ɔ̃]",tip:"嘴唇圆，像“翁”但把结尾的鼻音变成鼻腔共鸣。",ex:[["bon","bɔ̃","好"],["non","nɔ̃","不"],["nom","nɔ̃","姓"],["bonjour","bɔ̃.ʒuʁ","你好"]]},
{t:"鼻元音 in / ain / ein [ɛ̃]",tip:"口型接近“诶”，鼻音共鸣，不要读成“因”或“恩”。",ex:[["vin","vɛ̃","葡萄酒"],["pain","pɛ̃","面包"],["main","mɛ̃","手"],["demain","də.mɛ̃","明天"]]},
{t:"r [ʁ] —— 小舌音",tip:"这是最难的音。舌头放平，后部靠近小舌，让气流摩擦发出轻微的“喉音”，像漱口。不要发成汉语的 r（日）或卷舌音，也不要用舌尖颤动。",ex:[["rouge","ʁuʒ","红色"],["merci","mɛʁ.si","谢谢"],["Paris","pa.ʁi","巴黎"],["très","tʁɛ","很"]]},
{t:"é / è / ê —— 重音符号",tip:"é [e] 嘴形较窄，像“诶”；è、ê [ɛ] 较开，像“爱”的前半部分。重音符号会改变发音，也是拼写的一部分，写的时候不能漏掉。",ex:[["été","e.te","夏天"],["mère","mɛʁ","母亲"],["fête","fɛt","节日"],["café","ka.fe","咖啡"]]},
{t:"ch [ʃ] 和 j [ʒ]",tip:"ch 像汉语“嘘”的 sh，但嘴唇略圆；j 是它的浊音版本，声带振动，像英语 measure 中的 s，不是汉语的“j（鸡）”。",ex:[["chat","ʃa","猫"],["chaud","ʃo","热"],["je","ʒə","我"],["jour","ʒuʁ","天"]]},
{t:"gn [ɲ]",tip:"类似“你”的开头 n，舌面抬高抵住上颚，发成一个音，不是 g + n。",ex:[["montagne","mɔ̃.taɲ","山"],["champagne","ʃɑ̃.paɲ","香槟"],["agneau","a.ɲo","羊羔"]]},
{t:"oi [wa] 和 ui [ɥi]",tip:"oi 读“瓦”wa；ui 读得很快，像“威”，但先把嘴唇圆起来。",ex:[["moi","mwa","我（重读）"],["trois","tʁwa","3"],["huit","ɥit","8"],["nuit","nɥi","夜晚"]]},
{t:"词尾辅音通常不发音",tip:"词尾的 -t, -d, -s, -x, -p, -z 多数不发音：petit [pə.ti]，grand [ɡʁɑ̃]，vous [vu]。例外：词尾 c, r, f, l 常常要发音（口诀：CaReFuL）：sac [sak]，bonjour [bɔ̃.ʒuʁ]，neuf [nœf]，sel [sɛl]。",ex:[["petit","pə.ti","小"],["vous","vu","您"],["beaucoup","bo.ku","很多"],["sac","sak","包"],["sel","sɛl","盐"]]},
{t:"联诵 (liaison)",tip:"前一个词不发音的词尾辅音，遇到后面以元音开头的词时会被读出来，并和后面的元音连在一起。",ex:[["vous avez","vu.za.ve","您有"],["les amis","le.za.mi","朋友们"],["un ami","œ̃.na.mi","一位朋友"],["ils ont","il.zɔ̃","他们有"]]},
{t:"不发音的 h",tip:"法语中的 h 几乎从不发音，也不要读成汉语的“h（喝）”。词首的 h 后面的元音可以和前一个词连读：l'hôtel，l'homme。",ex:[["l'hôtel","lo.tɛl","酒店"],["l'homme","lɔm","男人"],["l'hôpital","lo.pi.tal","医院"],["heureux","ø.ʁø","幸福的"]]}
];
/* 语法 */
const GRAM=[
{t:"名词的阴阳性和冠词",b:["汉语的名词没有性，而法语的名词不是<b>阳性 (masculin)</b>就是<b>阴性 (féminin)</b>，必须记住。最好的办法：<b>学单词时连冠词一起背</b>。",
"<b>定冠词</b>（特指）：阳性 <b>le</b>，阴性 <b>la</b>，复数 <b>les</b>；元音或不发音的 h 前面用 <b>l'</b>（阴阳都可以）。","<b>不定冠词</b>（泛指，相当于“一个”）：阳性 <b>un</b>，阴性 <b>une</b>，复数 <b>des</b>。"],ex:[["le livre / un livre","书（阳性）"],["la table / une table","桌子（阴性）"],["l'ami / l'amie","朋友（男 / 女）"],["les enfants","孩子们"]]},
{t:"être（是）和 avoir（有）",b:["这是最重要的两个动词，不规则，必须背熟。","<b>être</b>：je suis · tu es · il/elle est · nous sommes · vous êtes · ils/elles sont","<b>avoir</b>：j'ai · tu as · il/elle a · nous avons · vous avez · ils/elles ont","<b>tu</b> 用于熟人，<b>vous</b> 用于不熟的人、长辈，或表示“你们”。"],ex:[["Je suis chinois.","我是中国人。"],["Elle est étudiante.","她是大学生。"],["J'ai vingt ans.","我二十岁。"],["Nous avons un chat.","我们有一只猫。"]]},
{t:"否定：ne … pas",b:["把动词夹在 <b>ne</b> 和 <b>pas</b> 之间。元音前 ne 变成 n'。","口语中常常省略 ne，只说 pas，但书面语不能省。","否定句中 un / une / des 变成 <b>de</b>（d'）：Je n'ai pas <b>de</b> voiture。"],ex:[["Je ne parle pas anglais.","我不会说英语。"],["Il n'est pas là.","他不在这里。"],["Je n'ai pas de frère.","我没有兄弟。"]]},
{t:"-er 动词的变位",b:["大多数法语动词以 <b>-er</b> 结尾，规则变位：去掉 -er，加上词尾。","<b>parler</b>：je parle · tu parles · il parle · nous parlons · vous parlez · ils parlent","注意：parle / parles / parlent 的<b>发音完全相同</b> [paʁl]，只在写法上不同。"],ex:[["Je parle chinois.","我说中文。"],["Nous habitons à Paris.","我们住在巴黎。"],["Ils mangent du riz.","他们吃米饭。"]]},
{t:"提问的三种方式",b:["1）<b>升调</b>（最常用于口语）：Tu parles chinois ?","2）<b>Est-ce que</b> + 陈述句：Est-ce que tu parles chinois ?","3）<b>倒装</b>（较正式）：Parles-tu chinois ?","疑问词：<b>qui</b>（谁）、<b>que</b>（什么）、<b>où</b>（哪里）、<b>quand</b>（什么时候）、<b>pourquoi</b>（为什么）、<b>comment</b>（怎么）、<b>combien</b>（多少）。"],ex:[["Où habites-tu ?","你住在哪里？"],["Comment vous appelez-vous ?","您叫什么名字？"],["Combien ça coûte ?","多少钱？"],["Pourquoi tu étudies le français ?","你为什么学法语？"]]},
{t:"形容词的性数配合",b:["形容词要和名词的<b>性、数</b>保持一致。阴性通常加 <b>-e</b>，复数加 <b>-s</b>。","大多数形容词放在名词<b>后面</b>：une voiture rouge。少数常用形容词放在<b>前面</b>：beau, bon, grand, petit, nouveau, vieux, jeune…","注意发音：petit [pə.ti] → petite [pə.tit]，阴性时最后的辅音会被读出来。"],ex:[["un petit garçon / une petite fille","一个小男孩 / 一个小女孩"],["des livres intéressants","有趣的书"],["une robe rouge","一条红色的连衣裙"]]},
{t:"物主形容词：我的 / 你的 / 他的",b:["mon / ma / mes（我的）· ton / ta / tes（你的）· son / sa / ses（他的 / 她的）· notre / nos · votre / vos · leur / leurs","和汉语不同：要跟<b>被拥有的东西</b>的性别一致，而不是跟拥有者一致。","阴性名词以元音开头时，用 <b>mon / ton / son</b>：mon amie。"],ex:[["mon père / ma mère / mes parents","我的父亲 / 母亲 / 父母"],["son frère","他的 / 她的哥哥"],["mon amie","我的女性朋友"]]},
{t:"à 和 de 的缩合：au, du…",b:["à + le = <b>au</b> · à + les = <b>aux</b> · de + le = <b>du</b> · de + les = <b>des</b>","à la、à l'、de la、de l' 不变。"],ex:[["Je vais au restaurant.","我去餐厅。"],["Je viens de la gare.","我从火车站来。"],["Je parle du film.","我在谈论这部电影。"]]},
{t:"aller, vouloir, pouvoir 和近将来",b:["<b>aller</b>：je vais · tu vas · il va · nous allons · vous allez · ils vont","<b>vouloir</b>：je veux · tu veux · il veut · nous voulons · vous voulez · ils veulent","<b>pouvoir</b>：je peux · tu peux · il peut · nous pouvons · vous pouvez · ils peuvent","<b>近将来</b>：aller + 动词原形，表示“要做……”。"],ex:[["Je vais manger.","我要去吃饭了。"],["Je voudrais un café.","我想要一杯咖啡。"],["Vous pouvez répéter ?","您可以再说一遍吗？"]]},
{t:"il y a 和 c'est",b:["<b>il y a</b> = “有”（存在）；<b>c'est</b> = “这是”（指明身份、特点）。"],ex:[["Il y a un restaurant près d'ici.","这附近有一家餐厅。"],["C'est mon ami.","这是我的朋友。"],["C'est très bon !","非常好吃！"]]}
];
