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

const cards = {
  vowelSet: {
    a: {
      romaji: "A",
      hiragana: "あ",
      flipped: false,
    },
    i: {
      romaji: "I",
      hiragana: "い",
      flipped: false,
    },
    u: {
      romaji: "U",
      hiragana: "う",
      flipped: false,
    },
    e: {
      romaji: "E",
      hiragana: "え",
      flipped: false,
    },
    o: {
      romaji: "O",
      hiragana: "お",
      flipped: false,
    },
  },
  kSet: {
    ka: {
      romaji: "KA",
      hiragana: "か",
      flipped: false,
    },
    ki: {
      romaji: "KI",
      hiragana: "き",
      flipped: false,
    },
    ku: {
      romaji: "KU",
      hiragana: "く",
      flipped: false,
    },
    ke: {
      romaji: "KE",
      hiragana: "け",
      flipped: false,
    },
    ko: {
      romaji: "KO",
      hiragana: "こ",
      flipped: false,
    },
  },
  sSet: {
    sa: {
      romaji: "SA",
      hiragana: "さ",
      flipped: false,
    },
    shi: {
      romaji: "SHI",
      hiragana: "し",
      flipped: false,
    },
    su: {
      romaji: "SU",
      hiragana: "す",
      flipped: false,
    },
    se: {
      romaji: "SE",
      hiragana: "せ",
      flipped: false,
    },
    so: {
      romaji: "SO",
      hiragana: "そ",
      flipped: false,
    },
  },
  tSet: {
    ta: {
      romaji: "TA",
      hiragana: "た",
      flipped: false,
    },
    chi: {
      romaji: "CHI",
      hiragana: "ち",
      flipped: false,
    },
    tsu: {
      romaji: "TSU",
      hiragana: "つ",
      flipped: false,
    },
    te: {
      romaji: "TE",
      hiragana: "て",
      flipped: false,
    },
    to: {
      romaji: "TO",
      hiragana: "と",
      flipped: false,
    },
  },
  nSet: {
    na: {
      romaji: "NA",
      hiragana: "な",
      flipped: false,
    },
    ni: {
      romaji: "NI",
      hiragana: "に",
      flipped: false,
    },
    nu: {
      romaji: "NU",
      hiragana: "ぬ",
      flipped: false,
    },
    ne: {
      romaji: "NE",
      hiragana: "ね",
      flipped: false,
    },
    no: {
      romaji: "NO",
      hiragana: "の",
      flipped: false,
    },
  },
  hSet: {
    ha: {
      romaji: "HA",
      hiragana: "は",
      flipped: false,
    },
    hi: {
      romaji: "HI",
      hiragana: "ひ",
      flipped: false,
    },
    fu: {
      romaji: "FU",
      hiragana: "ふ",
      flipped: false,
    },
    he: {
      romaji: "HE",
      hiragana: "へ",
      flipped: false,
    },
    ho: {
      romaji: "HO",
      hiragana: "ほ",
      flipped: false,
    },
  },
  mSet: {
    ma: {
      romaji: "MA",
      hiragana: "ま",
      flipped: false,
    },
    mi: {
      romaji: "MI",
      hiragana: "み",
      flipped: false,
    },
    mu: {
      romaji: "MU",
      hiragana: "む",
      flipped: false,
    },
    me: {
      romaji: "ME",
      hiragana: "め",
      flipped: false,
    },
    mo: {
      romaji: "MO",
      hiragana: "も",
      flipped: false,
    },
  },
  rSet: {
    ra: {
      romaji: "RA",
      hiragana: "ら",
      flipped: false,
    },
    ri: {
      romaji: "RI",
      hiragana: "り",
      flipped: false,
    },
    ru: {
      romaji: "RU",
      hiragana: "る",
      flipped: false,
    },
    re: {
      romaji: "RE",
      hiragana: "れ",
      flipped: false,
    },
    ro: {
      romaji: "RO",
      hiragana: "ろ",
      flipped: false,
    },
  },
  ySet: {
    ya: {
      romaji: "YA",
      hiragana: "や",
      flipped: false,
    },
    yu: {
      romaji: "YU",
      hiragana: "ゆ",
      flipped: false,
    },
    yo: {
      romaji: "YO",
      hiragana: "よ",
      flipped: false,
    },
  },
  wSet: {
    wa: {
      romaji: "WA",
      hiragana: "わ",
      flipped: false,
    },
    wo: {
      romaji: "WO",
      hiragana: "を",
      flipped: false,
    },
  },
  nPhoneme: {
    n: {
      romaji: "N",
      hiragana: "ん",
      flipped: false,
    },
  },
};

// Select sets of cards

// Shuffle cards

// Check for a pair & update counter

// End game
