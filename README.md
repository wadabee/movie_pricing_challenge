# 映画料金計算チャレンジ
## overview
映画料金を計算を計算するプログラムを書いてみる。

## 仕様
* INPUTは以下の形式で与えられる。
  * screenTypeには、以下が設定される。
  
    | 値 | 意味 | 料金 |
    | ---- | --- | --- |
    | "1" | 通常スクリーン | +¥0 |
    | "2" | IMAX | +¥500 |
    | "3" | 4DX | +¥1200 |
  
  * watchDatetimeには、上映時間が設定され、一般と大学生の基本料金が以下の料金となる。 

    | 条件 | 料金 |
    | ---- | --- |
    | 毎月1日 | ¥1000 |
    | 毎週水曜日 | ¥1200 |
    | 毎日20時以降 | ¥1400 |
  
  * ticketsは、チケットの種類ごとにデータが設定される。
    * typeは以下の通り、チケットの種類が設定され、種類ごとに基本料金が異なる。

      | 値 | 意味 | 料金 |
      | ---- | --- | --- |
      | "1" | 一般 | ¥1800 |
      | "2" | 大学生 | ¥1500 |
      | "3" | 高校生 | ¥1300 |
      | "4" | 中/小学生 | ¥1100 |
      | "5" | 幼児 | ¥1000 |

    * amountには、数量が設定される
    * menbershipには、シネマ会員有無が設定され、会員である場合は料金から一律¥300引きされる

```json
{
  "screenType": "1",
  "watchDatetime": "2022-06-12T06:24:27.545Z", 
  "tickets": [
    {
      "type": "1",
      "amount": 1,
      "membership": true
    }
  ]
}
```

* 不正な値（規定値外、型エラー等）は、任意のエラーを発生させ、処理を失敗させること。
* 同時に注文できるチケット数は、合計30枚までとする。
