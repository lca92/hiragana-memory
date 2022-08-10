// 0 - Vowels: A I U E O - あ い う え お
// 1 - K: KA KI KU KE KO - か き く け こ
// 2 - S: SA SHI SU SE SO - さ し す せ そ
// 3 - T: TA CHI TSU TE TO - た ち つ て と
// 4 - N: NA NI NU NE NO - な に ぬ ね の
// 5 - H: HA HI FU HE HO - は ひ ふ へ ほ
// 6 - M: MA MI MU ME MO - ま み む め も
// 7 - R: RA RI RU RE RO - ら り る れ ろ
// 8 - Y: YA YU YO - や ゆ よ
// 9 - W: WA WO - わ を
// 10 - N: N - ん

const pairsOfCards = [
  [
    {
      romaji: "A",
      hiragana: "あ",
    },
    {
      romaji: "I",
      hiragana: "い",
    },
    {
      romaji: "U",
      hiragana: "う",
    },
    {
      romaji: "E",
      hiragana: "え",
    },
    {
      romaji: "O",
      hiragana: "お",
    },
  ],
  [
    {
      romaji: "KA",
      hiragana: "か",
    },
    {
      romaji: "KI",
      hiragana: "き",
    },
    {
      romaji: "KU",
      hiragana: "く",
    },
    {
      romaji: "KE",
      hiragana: "け",
    },
    {
      romaji: "KO",
      hiragana: "こ",
    },
  ],
  [
    {
      romaji: "SA",
      hiragana: "さ",
    },
    {
      romaji: "SHI",
      hiragana: "し",
    },
    {
      romaji: "SU",
      hiragana: "す",
    },
    {
      romaji: "SE",
      hiragana: "せ",
    },
    {
      romaji: "SO",
      hiragana: "そ",
    },
  ],
  [
    {
      romaji: "TA",
      hiragana: "た",
    },
    {
      romaji: "CHI",
      hiragana: "ち",
    },
    {
      romaji: "TSU",
      hiragana: "つ",
    },
    {
      romaji: "TE",
      hiragana: "て",
    },
    {
      romaji: "TO",
      hiragana: "と",
    },
  ],
  [
    {
      romaji: "NA",
      hiragana: "な",
    },
    {
      romaji: "NI",
      hiragana: "に",
    },
    {
      romaji: "NU",
      hiragana: "ぬ",
    },
    {
      romaji: "NE",
      hiragana: "ね",
    },
    {
      romaji: "NO",
      hiragana: "の",
    },
  ],
  [
    {
      romaji: "HA",
      hiragana: "は",
    },
    {
      romaji: "HI",
      hiragana: "ひ",
    },
    {
      romaji: "FU",
      hiragana: "ふ",
    },
    {
      romaji: "HE",
      hiragana: "へ",
    },
    {
      romaji: "HO",
      hiragana: "ほ",
    },
  ],
  [
    {
      romaji: "MA",
      hiragana: "ま",
    },
    {
      romaji: "MI",
      hiragana: "み",
    },
    {
      romaji: "MU",
      hiragana: "む",
    },
    {
      romaji: "ME",
      hiragana: "め",
    },
    {
      romaji: "MO",
      hiragana: "も",
    },
  ],
  [
    {
      romaji: "RA",
      hiragana: "ら",
    },
    {
      romaji: "RI",
      hiragana: "り",
    },
    {
      romaji: "RU",
      hiragana: "る",
    },
    {
      romaji: "RE",
      hiragana: "れ",
    },
    {
      romaji: "RO",
      hiragana: "ろ",
    },
  ],
  [
    {
      romaji: "YA",
      hiragana: "や",
    },
    {
      romaji: "YU",
      hiragana: "ゆ",
    },
    {
      romaji: "YO",
      hiragana: "よ",
    },
  ],
  [
    {
      romaji: "WA",
      hiragana: "わ",
    },
    {
      romaji: "WO",
      hiragana: "を",
    },
  ],
  [
    {
      romaji: "N",
      hiragana: "ん",
    },
  ],
];
