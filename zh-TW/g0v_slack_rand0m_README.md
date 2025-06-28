# [g0v Slack][3] CC0 corpus from #rand0m chatlog

## 釋出資料

https://github.com/moztw/cc0-sentences/blob/master/zh-TW/g0v_slack_rand0m.txt

## 整理方法

1. 把 [chatlog][1] 的句子拆開成一句一句
2. 編輯內容去識別化，移掉冷僻難句，隨機打散順序
3. 然後commit 到 [repo][2]，並更新 [README](https://github.com/moztw/cc0-sentences/blob/master/zh-TW/g0v_slack_rand0m_README.md) 檔案中的進度標示

整理的成果品質標準可參考目前的句子

[1]: https://g0v-slack-archive.g0v.ronny.tw/index/channel/CGU1SLHNH/
[2]: https://github.com/moztw/cc0-sentences/blob/master/zh-TW/g0v_slack_rand0m.txt
[3]: http://join.g0v.tw/

## 可用於 ChatGPT 協助處理的 prompt

```
接下來我要處理 slack 的 chatlog 備份下來的的原始文本。
請人工處理，把下面的 log 拆解成一行一句子。
不要無中生有，也不需要思考內容，只要按照規則處理，並把結果放到 canva。

- 將接下來的對話紀錄整理成一句一行
- 切斷將14字以上的句子成兩句
- 略過有ID與時間的行數
- 去除句中的英文
- 忽略所有符號、ID、emoji、空行
- 把數字改為中文大寫
- 句尾不需要句號
- 把所有的對話全部一次整理完
```

## 目前進度

整理至 [2020/07](https://g0v-slack-archive.g0v.ronny.tw/index/channel/CGU1SLHNH/2020-07) 完成
