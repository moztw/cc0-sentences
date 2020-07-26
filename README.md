# CC0 centences

zh-tw sentences release under CC0 to Public Domain, gather from various sources. 
You can use it without any restriction.


## some sources

- archive of G0v Rand0m channel (chats to donate here) - https://g0v-slack-archive.g0v.ronny.tw/index/channel/CGU1SLHNH
- corpus at [Mozilla Common Voice](http://voice.mozilla.org/zh-TW/) Project - https://github.com/mozilla/voice-web/tree/master/server/data/zh-TW


## phonetic coverage 

### zh-TW

The coveraged rate of phonetic of current corpus, compared to CnsPhonetic2016-08v2.cin input table.

(calculate via [text tools](https://github.com/irvin/voice-text-tools) on [2020/6/18](https://github.com/irvin/cc0-sentences/commit/2f477284f61c7754e48704f02131aadd3b278625) DB)
10199 sentences

```
✗ node text-tools.js -c all.txt CnsPhonetic2016-08v2.cin
Total numbers of phonetic in CnsPhonetic2016-08v2.cin are 1567
Numbers of phonetic from 2905 characters in all.txt are 993
We have cover 63.37% of the pronunciations.
```


## chars coverage

### zh-TW

The coveraged rate and missing chars from current text corpus to common chars table from MOE. 

(calculate via [text tools](https://github.com/irvin/voice-text-tools) on [2020/6/21](https://github.com/irvin/cc0-sentences/commit/5f8b0d2fd2b2a07d4908f496eea7017b0a0dd05a) DB)
10489 sentences

```
➜  voice-text-tools git:(master) ✗ node text-tools.js -o all.txt 教育部2015常用字99.75%\(3593字\).txt
Numbers of chars in all.txt are 2905
Numbers of chars in 教育部2015常用字99.75%(3593字).txt are 3593
--------------------
all.txt includes 2603 chars from 教育部2015常用字99.75%(3593字).txt (72.4%)
all.txt missing 990 chars from 教育部2015常用字99.75%(3593字).txt (27.6%):
[蘇,脂,膚,瑞,妝,勒,宇,姿,挺,伍,肪,蔬,后,錦,膜,埃,忠,艾,唇,撐,炮,扁,櫻,臘,塵,黏,蕭,輛,蹈,孔,帕,嚐,轟,銅,輝,娜,酥,瓷,暢,漿,箭,斑,沾,懸,趙,膝,喚,郵,宏,鬱,礦,幽,娃,徐,爵,魅,玄,蝶,邱,宙,蓄,閣,腎,鑽,賄,吵,廉,襯,澱,恨,齒,豔,杰,洩,泌,悶,遮,赴,頒,拌,翰,醋,銳,譬,彭,吞,墊,廿,佩,軸,咪,窩,忌,穆,漬,掀,菊,逸,椎,臥,癒,崩,艇,礁,桑,痠,詮,淹,禪,麟,孟,燕,牢,弦,鼠,盧,捏,玲,兆,刮,欺,斗,弓,鑄,肇,摺,粽,隙,醇,顛,瘤,烘,霜,浩,兔,琳,勃,珊,蠣,釘,梁,潘,撼,燉,罕,馮,賈,穎,暨,蒲,錫,辰,艘,牲,彥,攔,娛,夯,醃,歪,薇,屍,埔,吾,蒜,岳,勳,屢,魏,划,毅,蕉,臀,囊,芝,妮,陵,衷,煥,捧,煌,鹼,韌,賀,匠,謙,撰,筍,佐,釀,濁,遶,崎,翔,嶺,丸,睫,伽,遂,聆,焙,繽,御,萎,桂,蔻,胰,諷,蠟,杉,溢,捉,薰,肘,犧,杏,匹,盯,昆,舖,胺,卅,敷,仗,削,濤,楓,坎,溯,廈,矚,趾,萃,裹,疆,憐,盃,窯,狄,閩,紗,灸,誒,瑕,繃,歇,賜,巫,砍,裔,鏽,笛,艙,婷,溜,煉,疹,攪,埕,塌,岡,齣,于,瀾,蝴,渦,矽,丑,髖,遣,乍,堤,梭,蕩,樟,甦,余,潰,奕,撕,紮,潢,祀,凶,吟,霾,腕,廓,輻,珈,奠,婉,疤,瑯,俐,枕,俯,噢,斬,挨,苑,竊,昭,瓊,睹,槽,甸,緬,蕙,鈔,鈞,炙,竄,囚,袍,滷,潭,糙,綴,窘,諺,汪,旱,迄,婭,寡,嚮,弗,亨,矯,撈,嬌,咱,瞄,兌,詠,絃,雯,睜,沫,笨,曦,毯,簾,挽,咚,犀,嘔,釵,穫,軒,庶,癢,蓬,嗅,倆,靖,箏,拇,坤,怡,阮,霖,飼,朴,蔓,虹,芯,肆,琺,蕎,珀,熙,頌,肖,匪,蓉,姜,挾,梵,吋,贖,繡,慨,崑,靴,菱,磯,棗,絞,洶,芮,沱,癥,曰,禎,霞,駝,茨,甕,瓣,敞,媚,攏,翠,浦,挪,俏,崔,圳,哮,杭,湛,跪,踝,艋,舺,瞼,磷,誦,嘟,粄,耿,妓,侍,溥,搓,硫,岱,庚,寢,疵,噁,瀉,冥,馳,綻,逮,伙,囂,匿,奎,飢,伶,瑤,痘,鑾,磅,悍,匆,篤,鮑,欖,垮,扒,炭,渣,瞎,饕,蕨,澀,窺,恬,狐,怯,紳,庇,峙,俠,棧,眩,矣,顎,檳,娟,豹,丼,芸,儕,卿,嘎,閥,葵,橄,崖,斂,祇,阪,偽,澈,幡,抉,瀏,塢,黛,抨,芊,樺,攬,噪,喃,胥,琢,皂,綸,甫,麩,仕,蛤,橢,囤,隍,釉,漾,淮,諦,戳,筷,瑚,鱗,濛,淳,僧,叭,焚,炯,壩,戎,茸,婿,緝,裱,倘,燻,棺,嫡,烯,臍,顴,劫,渺,丞,徽,眶,剎,顫,喀,柑,蚵,嘿,汶,僻,諱,斟,凳,幟,卜,弧,櫥,睞,嗡,縛,煞,轍,鉀,晏,醣,烙,窟,棍,謬,咧,晝,啞,茅,倖,咒,黴,懈,駿,喇,鍰,茜,亢,釁,髦,鑲,棕,彬,嬉,駒,軻,羲,哨,巿,佰,琉,厘,汞,刃,焉,皰,崙,駱,拐,羹,蕪,鑿,糯,苛,瀟,嫉,囑,弈,碁,撩,堃,綽,娓,儼,崗,繆,崧,氯,醯,戈,蒨,炳,膳,筠,槳,鉉,鋰,晞,眸,弛,暮,鐸,笠,滬,悼,瑣,歹,吶,桐,璀,璨,魁,芥,榻,沁,粟,籬,曖,冕,懊,忱,腱,寇,咽,鵬,闡,疇,謎,晤,侃,贅,滔,諜,腥,柬,梶,豎,惟,嵌,畸,禾,孰,韶,祠,蚋,荔,箔,劾,稽,龔,妞,娥,妍,苷,漓,隸,痊,榨,侷,癲,佼,輒,拙,鯖,邸,粿,嵐,狸,醞,咎,闌,釦,鍍,塘,陋,瀚,迭,瞰,晒,黯,啾,炊,穌,瀰,荊,肽,皿,扳,鳶,圻,囍,疚,褪,蠕,儉,捆,慷,灼,摻,驥,唉,琥,拂,琵,琶,瞞,嗓,擄,蔽,酌,熄,眨,汲,諭,琦,咸,簧,耆,鞅,薛,圭,閨,榔,錘,拎,桓,寅,匡,麒,俞,顳,呎,苯,櫓,厝,聶,塚,槿,嫚,梆,妊,偕,簇,泄,傢,楷,矗,勺,剔,嘩,燜,搔,祐,迢,殭,斐,瞪,忿,忡,僑,粱,躬,挹,痙,顱,羚,陲,頤,緋,綢,緞,膛,摹,熾,棘,郡,墅,蚯,蚓,酶,鋅,鞦,韆,腑,帛,馭,琅,酮,鎊,璞,晟,卯,甯,尹,氘,徨,吏,姦,柄,捩,茁,踵,涕,晦,乞,囪,蹊,壢,譁,鑣,嚥,懾,謐,閘,姪,喂,尢,汀,峇,悚,咦,繭,湘,筱,窒,鴿,膾,攣,鞘,曳,檜,苞,兜,倪,嘶,唔,抿,吱,褶,妒,鞠,莒,窖,銨,璇,醛,硝,埤,暌,卉,賃,奘,頹,茵,胱,灇,咻,篆,魍,魎,鰲,邃,饅,啓,媲,翊,娠,臆,祂,諫,扔,懺,螂,菠,苔,啃,嫂,閡,脯,剃,喳,岔,貂,恣,竇,瘡,澆,嘖,粕,曠,狽,菩,鄙,醺,萍,瘓,覷,遏,忐,忑,黝,齋,枋,鉗,棠,愴,丫,殲,濡,瀆,朕,豁,輟,舶,亙,瘍,樊,軾,呃,瞥,鼾,闔,瘀,狩,蹺,戮,云,夭,檀,胜,唾,硯,儂,宥,鈦,穹,錡,誹,粵,罄,壹,匣,栩,椪,碉,蜿,蜒,酋,蔦,鱷,巒,岌,媛,衹]
```


## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the person who associated CC0 with this work has waived all copyright and related or neighboring rights to this work.
