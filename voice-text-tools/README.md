Tools to modify sentences data of Common Voice project
=========================

(MIT License)

### combine all txt files inside folders into all.txt
```
✗ node text-tools.js -a ./
file saved as all.txt
```

### remove duplicate sentences in txt file
```
✗ node text-tools.js -u all.txt
file saved as all_unique.txt
```

### sort sentences in txt file
```
✗ node text-tools.js -s all.txt
file saved as all_sort.txt
```

### shuffle sentences of txt file
```
✗ node text-tools.js -f all.txt
file saved as all_shuffle.txt
```

### calculate the phonetics coverage of sentences with input method table

Count total numbers of phonetics within the input method table `*.cin` file, and calculating coverage rate of sentences file.

```
✗ node text-tools.js -c all.txt CnsPhonetic2016-08v2.cin
Total numbers of phonetic in CnsPhonetic2016-08v2.cin are 1567
Numbers of phonetic from 2905 characters in all.txt are 993
We have cover 63.37% of the pronunciations.
```

### calculate the syllable coverage of sentences (and ignore specific keys)

Ignore some specific keys, eg., tones (ˇˋˊ˙) in Chinese Zhuyin (key 3,4,6,7) 

```
✗ node text-tools.js -c all.txt CnsPhonetic2016-08v2.cin -i 3,4,6,7 
Total numbers of phonetic in CnsPhonetic2016-08v2.cin are 483
Numbers of phonetic from 2015 characters in all.txt are 369
We have cover 76.4% of the pronunciations.
```


### calculate the coveraged rate of chars from first txt to second txt, and list all missing chars

```
✗ node text-tools.js -o all.txt 教育部2015常用字99.75%\(3593字\).txt
Numbers of chars in all.txt are 2905
Numbers of chars in 教育部2015常用字99.75%(3593字).txt are 3593
--------------------
all.txt includes 2603 chars from 教育部2015常用字99.75%(3593字).txt (72.4%)
all.txt missing 990 chars from 教育部2015常用字99.75%(3593字).txt (27.6%):
[蘇,脂,膚,瑞,妝,勒,宇,姿,挺,伍,肪,蔬,后,錦,膜,埃,忠,艾,唇,撐,炮,扁,櫻,臘,塵,黏,......]
```
