# String matching
Testing string comparison with the Dice Coefficient

## Getting started

Install dependencies

```
yarn install
```

Run the script

```
node index.js
```

## Results

I ran a bunch of fictional company names against the term "Army of the Pure", these are the results:

**Army of the Pure:**  
    [direct]: 1  
    [filter]: 1
  
**Pure Cosmetics:**  
    [direct]: 0.2857142857142857  
    [filter]: 0.2857142857142857
  
**The Super Army Store:**  
    [direct]: 0.47058823529411764  
    [filter]: 0.47058823529411764
  
**Pure Hatred From The Army:**  
    [direct]: 0.5128205128205128  
    [filter]: 0.5128205128205128
  
**Pure Army:**  
    [direct]: 0.6086956521739131  
    [filter]: 0.6086956521739131
  
**Of the:**  
    [direct]: 0.5  
    [filter]: 0.5
  
**My Pure Army:**  
    [direct]: 0.6923076923076923  
    [filter]: 0.6923076923076923
  
**Led Of The Army:**  
    [direct]: 0.6896551724137931  
    [filter]: 0.6896551724137931
  
**Army in the Long Pure Way:**  
    [direct]: 0.6153846153846154  
    [filter]: 0.6153846153846154
  
**Amy Pur:**  
    [direct]: 0.47619047619047616  
    [filter]: 0.47619047619047616
  
**Pure Amy:**  
    [direct]: 0.45454545454545453  
    [filter]: 0.45454545454545453
  
**Amy of the Pur:**  
    [direct]: 0.8571428571428571  
    [filter]: 0.8571428571428571
  
**Pur My Amy:**  
    [direct]: 0.3333333333333333  
    [filter]: 0.3333333333333333
  
**Company of the Pure Armies:**  
    [direct]: 0.7  
    [filter]: 0.75
  
**Amy Pure:**  
    [direct]: 0.5454545454545454  
    [filter]: 0.5454545454545454
  
**Ary of the Pure:**  
    [direct]: 0.896551724137931  
    [filter]: 0.896551724137931
  
**Army van der Pure:**  
    [direct]: 0.5161290322580645  
    [filter]: 0.5161290322580645
  
**Army of the Pure BV:**  
    [direct]: 0.9090909090909091  
    [filter]: 1
  
**Company of Army of the Pure BV:**  
    [direct]: 0.6818181818181818  
    [filter]: 0.9090909090909091
  
**Army of the Pure Holding BV:**  
    [direct]: 0.7317073170731707  
    [filter]: 1
  
**Matched these strings with a treshold of 0.7 out of 1:**  
* Army of the Pure
* Amy of the Pur
* Company of the Pure Armies
* Ary of the Pure
* Army of the Pure BV
* Army of the Pure Holding BV
