# CC0 centences

zh-tw sentences release under CC0 to Public Domain, gather from various sources. 
You can use it without any restriction.


## some sources

- archive of G0v Rand0m channel (chats to donate here) - https://g0v-slack-archive.g0v.ronny.tw/index/channel/CGU1SLHNH
- corpus at [Mozilla Common Voice](http://voice.mozilla.org/zh-TW/) Project - https://github.com/mozilla/voice-web/tree/master/server/data/zh-TW


## phonetic coverage 

### zh-TW

The coveraged rate of phonetic of current corpus, compared to CnsPhonetic2016-08v2.cin input table.

(calculate via [text tools](https://github.com/irvin/voice-text-tools) on [2022-02-23](https://github.com/irvin/cc0-sentences/commit/ee1f9c5462aa277ad23519303fb5ea7e890577c9) DB)
22301 sentences

```
✗ node text-tools.js -c all.txt CnsPhonetic2016-08v2.cin
Total numbers of phonetic in voice-text-tools&#x2F;CnsPhonetic2016-08v2.cin are 1567
Numbers of phonetic from 3435 characters in all.txt are 1035
We have cover 66.05% of the pronunciations.

```


## chars coverage

### zh-TW

The coveraged rate and missing chars from current text corpus to common chars table from MOE. 

(calculate via [text tools](https://github.com/irvin/voice-text-tools) on [2022-02-23](https://github.com/irvin/cc0-sentences/commit/ee1f9c5462aa277ad23519303fb5ea7e890577c9) DB)
22301 sentences

```
➜  voice-text-tools git:(master) ✗ node text-tools.js -o all.txt 教育部2015常用字99.75%\(3593字\).txt
Numbers of chars in all.txt are 3435
Numbers of chars in voice-text-tools&#x2F;教育部2015常用字99.75%(3593字).txt are 3593
--------------------
all.txt includes 2969 chars from voice-text-tools&#x2F;教育部2015常用字99.75%(3593字).txt (82.6%)
all.txt missing 624 chars from voice-text-tools&#x2F;教育部2015常用字99.75%(3593字).txt (17.4%):
[肪,蔬,埃,唇,扁,黏,蕭,輛,嚐,轟,娜,酥,暢,漿,膝,喚,礦,幽,娃,蓄,腎,鑽,襯,澱,豔,洩,泌,頒,拌,翰,銳,譬,墊,穆,漬,掀,桑,詮,牢,捏,玲,兆,刮,肇,摺,隙,醇,顛,瘤,烘,霜,琳,珊,潘,撼,燉,馮,穎,彥,夯,醃,歪,薇,吾,岳,勳,毅,臀,妮,衷,煥,捧,煌,鹼,韌,匠,謙,佐,釀,遶,睫,伽,遂,聆,焙,繽,萎,蔻,胰,諷,溢,捉,薰,犧,盯,胺,卅,敷,仗,削,濤,溯,矚,趾,萃,裹,狄,閩,灸,誒,繃,歇,巫,裔,鏽,笛,婷,煉,疹,齣,于,丑,髖,遣,梭,余,奕,紮,潢,祀,凶,吟,霾,廓,輻,疤,瑯,俐,俯,噢,挨,竊,睹,蕙,鈞,諺,迄,婭,弗,矯,撈,嬌,咱,瞄,詠,絃,雯,沫,曦,毯,簾,挽,犀,嘔,釵,穫,軒,庶,嗅,倆,箏,拇,阮,飼,蔓,芯,肆,琺,蕎,熙,頌,挾,梵,吋,贖,繡,慨,菱,磯,棗,絞,洶,芮,癥,曰,禎,茨,甕,瓣,敞,媚,攏,挪,崔,哮,湛,跪,踝,瞼,磷,誦,嘟,粄,耿,侍,溥,搓,硫,岱,寢,疵,噁,瀉,冥,綻,匿,奎,飢,伶,痘,鑾,悍,鮑,欖,垮,扒,炭,瞎,蕨,澀,窺,恬,怯,紳,庇,棧,眩,矣,顎,娟,豹,丼,儕,卿,閥,橄,崖,祇,阪,澈,幡,抉,塢,黛,抨,芊,喃,琢,綸,甫,仕,橢,釉,漾,淮,諦,戳,筷,瑚,鱗,濛,淳,僧,炯,戎,茸,婿,緝,裱,燻,嫡,烯,顴,劫,渺,丞,徽,眶,剎,顫,嘿,諱,斟,幟,卜,弧,櫥,縛,煞,鉀,晏,醣,烙,謬,咧,晝,啞,黴,懈,駿,喇,鍰,茜,亢,髦,鑲,嬉,駒,軻,羲,巿,厘,汞,刃,皰,駱,羹,蕪,苛,瀟,嫉,囑,弈,碁,撩,綽,娓,儼,崧,氯,醯,戈,炳,膳,筠,槳,鉉,鋰,晞,眸,弛,暮,鐸,笠,悼,瑣,歹,吶,璀,璨,魁,沁,粟,曖,冕,懊,忱,寇,咽,闡,疇,晤,侃,贅,滔,腥,柬,梶,豎,孰,韶,箔,劾,龔,妞,妍,苷,漓,痊,侷,癲,佼,拙,鯖,醞,咎,闌,釦,鍍,陋,瀚,迭,瞰,晒,穌,瀰,荊,皿,扳,鳶,圻,囍,疚,褪,蠕,儉,捆,慷,摻,驥,唉,拂,琵,琶,瞞,嗓,擄,蔽,熄,汲,諭,琦,咸,簧,耆,鞅,圭,閨,錘,拎,桓,寅,匡,麒,俞,顳,呎,苯,櫓,聶,槿,嫚,梆,簇,泄,矗,勺,剔,嘩,燜,迢,斐,忿,忡,粱,躬,痙,顱,羚,陲,頤,緋,緞,膛,摹,熾,棘,墅,鋅,鞦,韆,腑,帛,鎊,璞,晟,卯,甯,尹,徨,吏,柄,捩,茁,踵,涕,晦,囪,蹊,譁,鑣,嚥,懾,謐,閘,姪,喂,尢,悚,咦,繭,湘,筱,窒,鴿,膾,攣,鞘,曳,苞,兜,倪,嘶,唔,抿,吱,褶,妒,鞠,窖,銨,璇,醛,硝,暌,卉,賃,奘,頹,胱,灇,咻,篆,邃,饅,啓,媲,翊,臆,祂,諫,扔,懺,菠,苔,啃,閡,脯,剃,喳,岔,恣,瘡,澆,嘖,粕,曠,狽,鄙,醺,瘓,覷,遏,忐,忑,黝,鉗,棠,愴,丫,殲,濡,瀆,豁,輟,舶,亙,瘍,樊,呃,瞥,鼾,闔,瘀,狩,戮,云,檀,唾,硯,宥,鈦,穹,錡,誹,罄,壹,椪,蜿,蜒,蔦,岌,媛,衹]

```


## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the person who associated CC0 with this work has waived all copyright and related or neighboring rights to this work.
