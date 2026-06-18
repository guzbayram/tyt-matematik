/* TYT Matematik — 125 Konu Veri Tabanı
 * 8 konuda tam içerik (teori + örnek + 5 quiz)
 * 117 konuda başlık + zorluk + kısa özet
 */

window.UNITS = [
  { id: 1, name: 'Sayılar',          short: 'Sayılar',   color: '#FF6B6B', range: [1, 17],   icon: '◐' },
  { id: 2, name: 'Cebir',            short: 'Cebir',     color: '#7C77FF', range: [18, 87],  icon: '◑' },
  { id: 3, name: 'Veri ve Olasılık', short: 'Veri',      color: '#45B7D1', range: [88, 91],  icon: '◒' },
  { id: 4, name: 'Geometri',         short: 'Geometri',  color: '#5EE9B5', range: [92, 129], icon: '◓' }
];

// --- Yardımcı: kısa konu (sadece başlık + özet) ---
function S(id, unit, title, difficulty, mins, summary) {
  return { id, unit, title, difficulty, minutes: mins, summary, full: false };
}

function G(id, title, difficulty, mins, summary) {
  return {
    id,
    unit: 4,
    title,
    difficulty,
    minutes: mins,
    summary,
    full: false,
    cards: (window.GEOMETRY_CARDS && window.GEOMETRY_CARDS[id]) || []
  };
}

// --- Yardımcı: tam konu ---
function F(id, unit, title, difficulty, mins, data) {
  return { id, unit, title, difficulty, minutes: mins, full: true, ...data };
}

window.TOPICS = [
  // ───────── ÜNİTE 1: SAYILAR ─────────
  F(1, 1, 'Sayı Kümeleri', 1, 6, {
    summary: 'Rakamlar, doğal sayılar, tam sayılar, rasyonel sayılar, irrasyonel sayılar ve gerçek sayılar arasındaki ilişki.',
    interactive: {
      type: 'number-set-sim',
      title: 'Sayıyı Doğru Kümeye Yerleştir',
      intro: 'Karttaki sayıyı en dar ait olduğu kümeye yerleştir. Kök dışına tam çıkan sayıları sadeleştirerek düşün.',
      zones: [
        { id: 'N', label: 'Doğal Sayılar', symbol: 'N', hint: '0, 1, 2, 3, ...' },
        { id: 'Z', label: 'Tam Sayılar', symbol: 'Z', hint: '..., -2, -1, 0, 1, 2, ...' },
        { id: 'Q', label: 'Rasyonel Sayılar', symbol: 'Q', hint: 'a/b biçiminde yazılabilenler' },
        { id: 'I', label: 'İrrasyonel Sayılar', symbol: 'Q′', hint: 'a/b biçiminde yazılamayan gerçek sayılar' },
        { id: 'R', label: 'Gerçek Sayılar', symbol: 'R', hint: 'Q ve Q′ birleşimi' },
        { id: 'NR', label: 'Gerçek Sayı Değil', symbol: 'R dışı', hint: 'Gerçek sayı belirtmeyenler' }
      ],
      numbers: [
        { value: '7', target: 'N', note: '7 doğal sayıdır. Aynı zamanda tam, rasyonel ve gerçek sayıdır; en dar kümesi N’dir.' },
        { value: '-3', target: 'Z', note: '-3 tam sayıdır. Doğal değildir; en dar kümesi Z’dir.' },
        { value: '1/2', target: 'Q', note: '1/2 iki tam sayının oranı olarak yazıldığı için rasyoneldir.' },
        { value: '√2', target: 'I', note: '√2 kök dışına tam çıkamaz ve iki tam sayının oranı değildir; irrasyoneldir.' },
        { value: 'π', target: 'I', note: 'π virgülden sonrası tam olarak bilinmeyen irrasyonel bir gerçek sayıdır.' },
        { value: '√9', target: 'N', note: '√9 = 3 olduğu için doğal sayıdır.' },
        { value: '-√4', target: 'Z', note: '√4 = 2 ve -√4 = -2 olduğu için tam sayıdır.' },
        { value: '√-9', target: 'NR', note: '√-9 gerçek sayılar kümesinde tanımlı değildir; gerçek sayı belirtmez.' }
      ]
    },
    numberLineInteractive: {
      type: 'number-line-sim',
      title: 'Sayıyı Sayı Doğrusunda Doğru Aralığa Yerleştir',
      intro: 'Karttaki sayının sayı doğrusunda hangi aralıkta olduğunu seç. Kökleri yaklaşık değerleriyle düşün.',
      intervals: [
        { id: 'lt0', label: 'x < 0', hint: '0’ın solundaki sayılar' },
        { id: '0-1', label: '0 ≤ x < 1', hint: '0 ile 1 arası' },
        { id: '1-2', label: '1 ≤ x < 2', hint: '1 ile 2 arası' },
        { id: '2-3', label: '2 ≤ x < 3', hint: '2 ile 3 arası' },
        { id: 'gte3', label: 'x ≥ 3', hint: '3 ve daha büyük sayılar' },
        { id: 'nr', label: 'Sayı doğrusunda yok', hint: 'Gerçek sayı belirtmeyenler' }
      ],
      numbers: [
        { value: '-3', target: 'lt0', note: '-3 negatif olduğu için sayı doğrusunda 0’ın solundadır.' },
        { value: '1/2', target: '0-1', note: '1/2 = 0,5 olduğundan 0 ile 1 arasındadır.' },
        { value: '√2', target: '1-2', note: '√2 yaklaşık 1,41’dir; bu yüzden 1 ile 2 arasındadır.' },
        { value: '√5', target: '2-3', note: '√5 yaklaşık 2,23’tür; bu yüzden 2 ile 3 arasındadır.' },
        { value: '√9', target: 'gte3', note: '√9 = 3 olduğundan 3 ve daha büyük sayılar aralığındadır.' },
        { value: 'π', target: 'gte3', note: 'π yaklaşık 3,14’tür; bu yüzden 3 ve daha büyük sayılar aralığındadır.' },
        { value: '√-9', target: 'nr', note: '√-9 gerçek sayı belirtmediği için sayı doğrusunda bir noktası yoktur.' }
      ]
    },
    theory: {
      rules: [
        { title: 'Rakamlar',
          formula: '\\{0,1,2,3,4,5,6,7,8,9\\}',
          tip: 'Sayıları yazmak için kullanılan sembollere rakam denir. Rakamlar kümesi {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} dir.' },
        { title: 'Doğal ve Tam Sayılar',
          formula: '\\mathbb{N}=\\{0,1,2,3,\\ldots\\},\\quad \\mathbb{Z}=\\{\\ldots,-3,-2,-1,0,1,2,3,\\ldots\\}',
          tip: '0, 1, 2, 3, ... şeklindeki sayıların oluşturduğu kümeye doğal sayılar kümesi denir ve N ile gösterilir. N doğal sayılar kümesine -1, -2, -3, ... sayılarının eklenmesiyle oluşan sayı kümesine tam sayılar kümesi denir ve Z ile gösterilir.' },
        { title: 'Rasyonel ve İrrasyonel Sayılar',
          formula: 'a,b\\in\\mathbb{Z},\\; b\\neq 0 \\Rightarrow \\dfrac{a}{b}\\in\\mathbb{Q}',
          tip: 'a ve b tam sayılar, b sıfırdan farklı olmak üzere a/b şeklinde yazılabilen sayılara rasyonel sayılar denir. Bu şekilde yazılamayan sayılara irrasyonel sayılar denir ve irrasyonel sayılar kümesi Q′ simgesi ile gösterilir.' },
        { title: 'Gerçek Sayılar',
          formula: '\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R},\\quad \\mathbb{Q}\\cup\\mathbb{Q}^{\\prime}=\\mathbb{R}',
          tip: 'Rasyonel sayılar kümesi ile irrasyonel sayılar kümesinin birleşiminden oluşan kümeye gerçek (reel) sayılar kümesi denir ve R simgesi ile gösterilir.' }
      ],
      facts: [
        { text: 'İrrasyonel sayılara √2, √(3/5), π, ... sayıları örnek olarak verilebilir.' },
        { text: 'İrrasyonel sayılar; kök dışına tam olarak çıkamayan sayılardır.' },
        { text: 'İrrasyonel sayılar; virgülden sonraki kısmı tam olarak bilinmeyen sayılardır.' },
        { text: 'İrrasyonel sayılar; iki tam sayının oranı şeklinde yazılamayan sayılardır.' },
        { text: 'Gerçek sayılar kümesinin her elemanına sayı doğrusunda bir nokta karşılık gelir.' },
        { text: 'Sayı doğrusu gerçek sayıların bir gösterim şeklidir. Her gerçek sayı, sayı doğrusu üzerinde bir nokta belirtir.' }
      ],
      warning: '√-2, √-9 gibi içinde negatif sayı bulunan kareköklü sayılar gerçek sayı belirtmez.'
    },
    examples: [
      { question: '0, 4, -6, 3/5, √7 ve √-4 sayılarının hangi sayı kümelerine ait olduğunu belirleyelim.',
        steps: [
          { text: 'Önce doğal sayıları ayırırız: 0 ve 4 doğal sayıdır; çünkü N = {0, 1, 2, 3, ...} şeklindedir.' },
          { text: '-6 doğal sayı değildir ama tam sayıdır; çünkü Z kümesinde negatif tam sayılar da vardır.' },
          { text: '3/5 iki tam sayının oranı olarak yazıldığı için rasyonel sayıdır.' },
          { text: '√7 kök dışına tam çıkamaz ve iki tam sayının oranı olarak yazılamaz; bu yüzden irrasyonel sayıdır.' },
          { text: '√-4 gerçek sayılar kümesinde tanımlı değildir; bu yüzden gerçek sayı belirtmez.' }
        ],
        answer: '0\\in N;\\;4\\in N;\\;-6\\in Z;\\;3/5\\in Q;\\;\\sqrt7\\in Q^{\\prime}' },
      { question: '√9 sayısının en dar sayı kümesini bulalım.',
        steps: [
          { text: 'Köklü sayıların önce sadeleşip sadeleşmediğine bakarız.' },
          { text: '√9 = 3 olur; çünkü 3² = 9’dur.' },
          { text: '3 doğal sayıdır. Doğal sayılar aynı zamanda tam, rasyonel ve gerçek sayıdır.' },
          { text: 'En dar küme sorulduğu için √9 sayısını N kümesine yerleştiririz.' }
        ],
        answer: 'N' },
      { question: '-√16 sayısının en dar sayı kümesini bulalım.',
        steps: [
          { text: 'Önce kökün içindeki sayı sadeleştirilir: √16 = 4 olur.' },
          { text: 'Başta eksi işareti olduğu için -√16 = -4’tür.' },
          { text: '-4 tam sayıdır, fakat doğal sayı değildir.' },
          { text: 'Bu nedenle en dar kümesi tam sayılar kümesi Z’dir.' }
        ],
        answer: 'Z' },
      { question: '0,25 sayısının rasyonel olup olmadığını belirleyelim.',
        steps: [
          { text: 'Rasyonel sayı, iki tam sayının oranı biçiminde yazılabilen sayıdır.' },
          { text: '0,25 sayısı 25/100 olarak yazılabilir.' },
          { text: '25/100 sadeleşirse 1/4 olur.' },
          { text: '1/4 iki tam sayının oranı olduğundan 0,25 rasyonel sayıdır.' }
        ],
        answer: 'Q' },
      { question: '√2 sayısının sayı doğrusundaki yerini ve sayı kümesini belirleyelim.',
        steps: [
          { text: '√2 yaklaşık 1,41 değerindedir; bu yüzden sayı doğrusunda 1 ile 2 arasındadır.' },
          { text: '√2 kök dışına tam olarak çıkamaz.' },
          { text: 'İki tam sayının oranı biçiminde yazılamadığı için rasyonel değildir.' },
          { text: 'Sayı doğrusunda gösterilebildiği için gerçek sayıdır; en dar kümesi irrasyonel sayılar kümesidir.' }
        ],
        answer: 'Q^{\\prime}' },
      { question: '√2 sayısının sayı doğrusu üzerindeki yerini gösterelim.',
        steps: [
          { text: 'Sayı doğrusunda 0 ile 1 noktaları arasında dik bir kenar oluşturalım.' },
          { text: 'Kenar uzunlukları 1 ve 1 olan dik üçgende hipotenüs uzunluğu Pisagor teoremine göre √(1² + 1²) = √2 olur.' },
          { text: 'Pergel/yarıçap düşüncesiyle bu √2 uzunluğu sayı doğrusu üzerine taşındığında 1 ile 2 arasında bir nokta elde edilir.' },
          { text: '√2 rasyonel değildir; sayı doğrusunda gösterilebildiği için gerçek sayıdır.' }
        ],
        answer: '\\sqrt{2}\\in\\mathbb{R}\\setminus\\mathbb{Q}' }
    ],
    quiz: [
      { q: 'Sayıları yazmak için kullanılan sembollere ne denir?', opt: ['Rakam','Doğal sayı','Tam sayı','Gerçek sayı'], a: 0, e: 'PDF tanımına göre sayıları yazmak için kullanılan semboller rakamdır.' },
      { q: 'Rakamlar kümesi aşağıdakilerden hangisidir?', opt: ['{1, 2, 3, 4, 5, 6, 7, 8, 9}','{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}','{0, 1, 2, 3, ...}','{..., -2, -1, 0, 1, 2, ...}'], a: 1, e: 'Rakamlar kümesi {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} dir.' },
      { q: '0, 1, 2, 3, ... şeklindeki sayıların oluşturduğu kümeye ne denir?', opt: ['Tam sayılar kümesi','Rasyonel sayılar kümesi','Doğal sayılar kümesi','İrrasyonel sayılar kümesi'], a: 2, e: '0, 1, 2, 3, ... sayıları doğal sayılar kümesini oluşturur.' },
      { q: 'Doğal sayılar kümesi hangi sembolle gösterilir?', opt: ['N','Z','Q','R'], a: 0, e: 'Doğal sayılar kümesi N ile gösterilir.' },
      { q: 'Doğal sayılar kümesinin doğru yazımı hangisidir?', opt: ['N = {..., -2, -1, 0, 1, ...}','N = {0, 1, 2, 3, ...}','N = {1/2, 2/3, 3/4, ...}','N = {√2, π, ...}'], a: 1, e: 'Doğal sayılar kümesi N = {0, 1, 2, 3, ...} şeklindedir.' },
      { q: 'N doğal sayılar kümesine -1, -2, -3, ... sayıları eklenirse hangi küme oluşur?', opt: ['Tam sayılar kümesi','Rakamlar kümesi','İrrasyonel sayılar kümesi','Sadece pozitif sayılar'], a: 0, e: 'Negatif tam sayıların eklenmesiyle tam sayılar kümesi oluşur.' },
      { q: 'Tam sayılar kümesi hangi sembolle gösterilir?', opt: ['N','Z','Q′','R'], a: 1, e: 'Tam sayılar kümesi Z ile gösterilir.' },
      { q: 'Tam sayılar kümesinin doğru yazımı hangisidir?', opt: ['Z = {0, 1, 2, 3, ...}','Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}','Z = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}','Z = {√2, √3, π, ...}'], a: 1, e: 'Tam sayılar kümesi Z = {..., -3, -2, -1, 0, 1, 2, 3, ...} şeklindedir.' },
      { q: 'a ve b tam sayılar, b sıfırdan farklı iken a/b şeklinde yazılabilen sayılar hangisidir?', opt: ['İrrasyonel sayılar','Rasyonel sayılar','Sadece doğal sayılar','Sadece negatif sayılar'], a: 1, e: 'a/b biçiminde yazılabilen sayılar rasyonel sayılardır.' },
      { q: 'Rasyonel sayılar kümesi hangi sembolle gösterilir?', opt: ['N','Z','Q','Q′'], a: 2, e: 'Rasyonel sayılar kümesi Q simgesi ile gösterilir.' },
      { q: 'a/b şeklinde yazılamayan sayılar hangi sayı kümesine aittir?', opt: ['Doğal sayılar','Tam sayılar','Rasyonel sayılar','İrrasyonel sayılar'], a: 3, e: 'a/b şeklinde yazılamayan sayılar irrasyonel sayılardır.' },
      { q: 'İrrasyonel sayılar kümesi için kullanılan sembol hangisidir?', opt: ['Q','Q′','Z','N'], a: 1, e: 'İrrasyonel sayılar kümesi Q′ simgesi ile gösterilir.' },
      { q: 'Aşağıdakilerden hangisi irrasyonel sayılara örnek verilebilir?', opt: ['√2','5/2','-3','0'], a: 0, e: '√2, √(3/5), π gibi sayılar irrasyonel sayılara örnektir.' },
      { q: 'Kök dışına tam olarak çıkamayan sayılar genellikle hangi kümeye aittir?', opt: ['İrrasyonel sayılar','Rakamlar','Doğal sayılar','Tam sayılar'], a: 0, e: 'Dikkat kutusunda irrasyonel sayıların kök dışına tam olarak çıkamayan sayılar olduğu belirtilir.' },
      { q: 'Virgülden sonraki kısmı tam olarak bilinmeyen sayılar için hangi ifade doğrudur?', opt: ['Daima doğal sayıdır','İrrasyonel sayı olabilir','Daima rakamdır','Daima tam sayıdır'], a: 1, e: 'İrrasyonel sayılar virgülden sonraki kısmı tam olarak bilinmeyen sayılardır.' },
      { q: 'İki tam sayının oranı şeklinde yazılamayan sayılar nasıl adlandırılır?', opt: ['Rasyonel','İrrasyonel','Tam','Doğal'], a: 1, e: 'İki tam sayının oranı şeklinde yazılamayan sayılar irrasyoneldir.' },
      { q: 'Aşağıdakilerden hangisi gerçek sayı belirtmez?', opt: ['√2','π','√-9','8/3'], a: 2, e: 'İçinde negatif sayı bulunan kareköklü sayılar, örneğin √-9, gerçek sayı belirtmez.' },
      { q: 'Rasyonel sayılar kümesi ile irrasyonel sayılar kümesinin birleşiminden hangi küme oluşur?', opt: ['Doğal sayılar','Tam sayılar','Gerçek sayılar','Rakamlar'], a: 2, e: 'Rasyonel ve irrasyonel sayıların birleşimi gerçek (reel) sayılar kümesini oluşturur.' },
      { q: 'Gerçek sayılar kümesi hangi sembolle gösterilir?', opt: ['N','Z','Q','R'], a: 3, e: 'Gerçek sayılar kümesi R simgesi ile gösterilir.' },
      { q: 'Gerçek sayılar kümesinin her elemanına sayı doğrusunda ne karşılık gelir?', opt: ['Bir harf','Bir nokta','Bir açı','Bir işlem'], a: 1, e: 'Her gerçek sayıya sayı doğrusunda bir nokta karşılık gelir.' },
      { q: 'Sayı kümeleri arasındaki doğru kapsama ilişkisi hangisidir?', opt: ['N ⊂ Z ⊂ Q ⊂ R','R ⊂ Q ⊂ Z ⊂ N','Q′ ⊂ Q','Z ⊂ N ⊂ R'], a: 0, e: 'PDF’de verilen ilişki N ⊂ Z ⊂ Q ⊂ R şeklindedir.' },
      { q: 'Q ∪ Q′ ifadesi hangi kümeye eşittir?', opt: ['N','Z','R','Boş küme'], a: 2, e: 'Rasyonel sayılar ile irrasyonel sayıların birleşimi R kümesidir.' },
      { q: 'Sayı doğrusu gerçek sayılar için nasıl bir araçtır?', opt: ['Bir gösterim şekli','Bir işlem önceliği','Bir rakam kümesi','Bir denklem türü'], a: 0, e: 'Sayı doğrusu gerçek sayıların bir gösterim şeklidir.' },
      { q: 'Her gerçek sayı, sayı doğrusu üzerinde ne belirtir?', opt: ['Bir nokta','Bir çember','Bir üçgen','Bir basamak'], a: 0, e: 'Her gerçek sayı sayı doğrusu üzerinde bir nokta belirtir.' },
      { q: '√2 sayısı sayı doğrusunda yaklaşık hangi iki tam sayı arasındadır?', opt: ['0 ile 1','1 ile 2','2 ile 3','3 ile 4'], a: 1, e: '√2 yaklaşık 1,41 olduğundan sayı doğrusunda 1 ile 2 arasındadır.' }
    ]
  }),
  F(2, 1, 'Temel İşlemler', 1, 5, {
    summary: 'Gerçek sayılarda toplama ve çarpma işlemlerinin özellikleri, işaret kuralları ve işlem önceliği.',
    theory: {
      rules: [
        { title: 'Kapalılık Özelliği',
          formula: 'a,b\\in\\mathbb{R}\\Rightarrow a+b\\in\\mathbb{R},\\quad a\\cdot b\\in\\mathbb{R}',
          tip: 'Herhangi iki gerçek sayının toplamı ya da çarpımı yine bir gerçek sayıdır. Gerçek sayılar kümesinde toplama ve çarpma işlemlerinin kapalılık özelliği vardır.' },
        { title: 'Değişme Özelliği',
          formula: 'a+b=b+a,\\quad a\\cdot b=b\\cdot a',
          tip: 'Herhangi iki gerçek sayının toplamında ya da çarpımında sayıların yerlerinin değiştirilmesi sonucu değiştirmez. Gerçek sayılar kümesinde toplama ve çarpma işlemlerinin değişme özelliği vardır.' },
        { title: 'Birleşme Özelliği',
          formula: '(a+b)+c=a+(b+c),\\quad (a\\cdot b)\\cdot c=a\\cdot(b\\cdot c)',
          tip: 'Herhangi üç gerçek sayının toplamı ya da çarpımında işlem sırası için seçilen gruplamanın belirleniş şekli sonucu değiştirmez.' },
        { title: 'Birim Elemanlar',
          formula: 'a+0=0+a=a,\\quad a\\cdot1=1\\cdot a=a',
          tip: 'Herhangi bir gerçek sayıya 0 eklemek veya herhangi bir gerçek sayı ile 1’i çarpmak sonucu değiştirmez. Toplama işleminin birim elemanı 0, çarpma işleminin birim elemanı 1’dir.' },
        { title: 'Bir Sayının Tersi',
          formula: 'a+(-a)=0,\\quad a\\cdot\\dfrac{1}{a}=1\\;(a\\neq0)',
          tip: 'a’nın toplama işlemine göre tersi -a’dır. a sıfırdan farklı ise a’nın çarpma işlemine göre tersi 1/a’dır.' },
        { type: 'warning',
          text: 'Gerçek sayılar kümesinde 0’ın çarpmaya göre tersi yoktur.' },
        { title: 'Yutan Eleman',
          formula: 'a\\cdot0=0\\cdot a=0',
          tip: 'Herhangi bir gerçek sayı 0 ile çarpıldığında sonuç her zaman 0’dır. Bu yüzden 0, çarpma işleminin yutan elemanıdır.' },
        { title: 'Dağılma Özelliği',
          formula: 'a(b+c)=ab+ac,\\quad a(b-c)=ab-ac',
          tip: 'Çarpma işlemi, toplama ve çıkarma işlemi üzerine dağılır. Benzer biçimde (a+b)c=ac+bc ve (a-b)c=ac-bc olur.' },
        { title: 'Negatif ve Pozitif Sayılarda Çarpma ve Bölme İşlemleri',
          signTable: {
            headers: ['İşaret', 'İşaret', 'Çarpma / Bölme'],
            rows: [
              ['(+)', '(+)', '(+)'],
              ['(+)', '(-)', '(-)'],
              ['(-)', '(+)', '(-)'],
              ['(-)', '(-)', '(+)']
            ]
          },
          tip: 'Pozitif ve negatif sayılarda çarpma ve bölmede işaretler aynı ise sonuç pozitif, işaretler farklı ise sonuç negatiftir.' },
        { title: 'İşlem Önceliği',
          formula: '\\boxed{1}\\;2^n\\quad\\rightarrow\\quad\\boxed{2}\\;(\\ )\\quad\\rightarrow\\quad\\boxed{3}\\;\\times,\\div\\quad\\rightarrow\\quad\\boxed{4}\\;+,-',
          tip: 'Önce üs alınır, sonra parantez içi işlemler yapılır, ardından çarpma ve bölme, en son toplama ve çıkarma işlemleri yapılır.' }
      ],
      facts: [
        { text: 'Bir pozitif ve bir negatif gerçek sayının toplamının işareti mutlak değerce büyük olan sayının işareti ile aynı olur.' },
        { text: 'Art arda gelen toplama ve çıkarma işlemlerinden istenilen işlem önce yapılabilir.' },
        { text: 'Art arda gelen çarpma ve bölme işlemlerinden önce soldaki yapılır.' }
      ],
      warning: ''
    },
    examples: [
      { question: '7 + 12 ve 7 · 12 işlemlerinde kapalılık özelliğini görelim.',
        steps: [
          { text: 'Kapalılık için işlem sonucunun yine aynı kümede kalıp kalmadığına bakarız.' },
          { text: '7 ve 12 gerçek sayıdır. 7 + 12 = 19 olur ve 19 da gerçek sayıdır.' },
          { text: '7 · 12 = 84 olur ve 84 de gerçek sayıdır.' },
          { text: 'Bu yüzden gerçek sayılar kümesinde toplama ve çarpma işlemleri kapalıdır.' }
        ],
        answer: '19\\in R;\\;84\\in R' },
      { question: '8 + 5 = 5 + 8 ve 8 · 5 = 5 · 8 eşitlikleri hangi özelliği gösterir?',
        steps: [
          { text: 'Sayıların yerleri değiştiğinde sonucun değişip değişmediğine bakarız.' },
          { text: '8 + 5 = 13 ve 5 + 8 = 13 olur.' },
          { text: '8 · 5 = 40 ve 5 · 8 = 40 olur.' },
          { text: 'Toplama ve çarpmada sayıların yeri değişse de sonuç değişmediği için değişme özelliği vardır.' }
        ],
        answer: 'De\\breve{g}i\\c{s}me' },
      { question: '6 sayısının toplama ve çarpmaya göre terslerini bulalım.',
        steps: [
          { text: 'Toplamanın birim elemanı 0’dır. Bir sayının toplama göre tersi, o sayıyla toplandığında 0 veren sayıdır.' },
          { text: '6 + (-6) = 0 olduğundan 6’nın toplama işlemine göre tersi -6’dır.' },
          { text: 'Çarpmanın birim elemanı 1’dir. Bir sayının çarpmaya göre tersi, o sayıyla çarpıldığında 1 veren sayıdır.' },
          { text: '6 · (1/6) = 1 olduğundan 6’nın çarpmaya göre tersi 1/6’dır.' }
        ],
        answer: '-6;\\;1/6' },
      { question: '0’ın çarpmaya göre tersi neden yoktur?',
        steps: [
          { text: 'Çarpmaya göre ters, sayı ile çarpıldığında sonucu 1 yapan sayıdır.' },
          { text: '0 hangi gerçek sayı ile çarpılırsa çarpılsın sonuç 0 olur.' },
          { text: '0 · a = 1 eşitliğini sağlayan bir gerçek sayı yoktur.' },
          { text: 'Bu nedenle 0’ın çarpmaya göre tersi yoktur.' }
        ],
        answer: '\\varnothing' },
      { question: '3 · (4 + 7) ifadesini dağılma özelliği ile hesaplayalım.',
        steps: [
          { text: 'Çarpma işlemi toplama üzerine dağılır; yani dıştaki sayı parantez içindeki her terimle çarpılır.' },
          { text: '3 · (4 + 7) = 3 · 4 + 3 · 7 yazılır.' },
          { text: '3 · 4 = 12 ve 3 · 7 = 21 olur.' },
          { text: '12 + 21 = 33 bulunur. Parantez içi önce yapılsa da sonuç 3 · 11 = 33 olurdu.' }
        ],
        answer: '33' },
      { question: '(-4) · 3 : (-2) işleminin işaretini ve değerini bulalım.',
        steps: [
          { text: 'Çarpma ve bölmede işaretler aynıysa sonuç pozitif, farklıysa negatiftir.' },
          { text: 'Önce soldan başlayarak (-4) · 3 = -12 buluruz; çünkü işaretler farklıdır.' },
          { text: 'Sonra -12 : (-2) = 6 olur; çünkü iki negatif sayının bölümü pozitiftir.' },
          { text: 'Sonuç pozitiftir ve değeri 6’dır.' }
        ],
        answer: '6' },
      { question: '(2³ - 5) : 3 · 5 + 2 işlemini işlem önceliğine göre yapalım.',
        steps: [
          { text: 'Önce üs alınır: 2³ = 8.' },
          { text: 'Parantez içi işlem yapılır: (8 - 5) = 3.' },
          { text: 'Çarpma ve bölme aynı önceliktedir. Bu yüzden soldan sağa işlem yapılır.' },
          { text: '3 : 3 · 5 = 1 · 5' },
          { text: '1 · 5 = 5' },
          { text: 'Son olarak toplama yapılır: 5 + 2 = 7.' }
        ],
        answer: '7' }
    ],
    quiz: [
      { q: 'Herhangi iki gerçek sayının toplamı yine hangi kümeye aittir?', opt: ['Doğal sayılar','Gerçek sayılar','Sadece tam sayılar','Rakamlar'], a: 1, e: 'Kapalılık özelliğine göre iki gerçek sayının toplamı yine gerçek sayıdır.' },
      { q: 'Herhangi iki gerçek sayının çarpımı yine gerçek sayı oluyorsa bu hangi özelliktir?', opt: ['Değişme','Birleşme','Kapalılık','Yutan eleman'], a: 2, e: 'Toplama ve çarpma işlemlerinin sonucu küme dışına çıkmıyorsa kapalılık özelliği vardır.' },
      { q: 'a + b = b + a eşitliği hangi özelliği gösterir?', opt: ['Değişme özelliği','Birleşme özelliği','Yutan eleman','Dağılma özelliği'], a: 0, e: 'Sayıların yerleri değiştiğinde sonuç değişmiyorsa değişme özelliği kullanılır.' },
      { q: 'a · b = b · a eşitliği hangi işlem için değişme özelliğidir?', opt: ['Toplama','Çarpma','Çıkarma','Bölme'], a: 1, e: 'Çarpma işleminde çarpanların yerleri değişirse sonuç değişmez.' },
      { q: '(a + b) + c = a + (b + c) eşitliği hangi özelliğe aittir?', opt: ['Kapalılık','Birleşme','Yutan eleman','Ters eleman'], a: 1, e: 'Gruplama değiştiği halde sonuç değişmiyorsa birleşme özelliği vardır.' },
      { q: 'Toplama işleminin birim elemanı kaçtır?', opt: ['-1','0','1','a'], a: 1, e: 'Her a gerçek sayısı için a + 0 = a olduğundan toplamanın birim elemanı 0’dır.' },
      { q: 'Çarpma işleminin birim elemanı kaçtır?', opt: ['0','1','-1','a'], a: 1, e: 'Her a gerçek sayısı için a · 1 = a olduğundan çarpmanın birim elemanı 1’dir.' },
      { q: 'a sayısının toplama işlemine göre tersi hangisidir?', opt: ['a','1/a','-a','0'], a: 2, e: 'a + (-a) = 0 olduğundan a’nın toplama işlemine göre tersi -a’dır.' },
      { q: 'a sıfırdan farklı ise çarpma işlemine göre tersi hangisidir?', opt: ['-a','1/a','0','a + 1'], a: 1, e: 'a · (1/a) = 1 olduğundan a’nın çarpma işlemine göre tersi 1/a’dır.' },
      { q: 'Gerçek sayılar kümesinde hangi sayının çarpmaya göre tersi yoktur?', opt: ['0','1','-1','2'], a: 0, e: '0’ın çarpmaya göre tersi yoktur.' },
      { q: 'Herhangi bir gerçek sayı 0 ile çarpıldığında sonuç kaçtır?', opt: ['1','a','0','-a'], a: 2, e: 'a · 0 = 0 olduğundan sonuç her zaman 0’dır.' },
      { q: 'Çarpma işleminin yutan elemanı hangisidir?', opt: ['0','1','-1','10'], a: 0, e: '0 ile çarpılan her gerçek sayı 0 olduğu için 0 çarpmanın yutan elemanıdır.' },
      { q: 'a · (b + c) ifadesinin açılımı hangisidir?', opt: ['a · b + a · c','a + b · c','a · b - a · c','a + b + c'], a: 0, e: 'Çarpma işlemi toplama üzerine dağılır: a · (b + c) = a · b + a · c.' },
      { q: 'a · (b - c) ifadesinin açılımı hangisidir?', opt: ['a · b + a · c','a · b - a · c','a - b · c','a · b · c'], a: 1, e: 'Çarpma işlemi çıkarma üzerine dağılır: a · (b - c) = a · b - a · c.' },
      { q: '(+) · (-) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'Çarpma işleminde işaretler farklı ise sonuç negatiftir.' },
      { q: '(-) · (-) işleminin sonucu hangi işaretlidir?', opt: ['Negatif','Pozitif','Sıfır','Belirsiz'], a: 1, e: 'Çarpma işleminde işaretler aynı ise sonuç pozitiftir.' },
      { q: '(+) : (-) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'Bölme işleminde işaretler farklı ise sonuç negatiftir.' },
      { q: '(-) : (-) işleminin sonucu hangi işaretlidir?', opt: ['Negatif','Pozitif','Sıfır','Belirsiz'], a: 1, e: 'Bölme işleminde işaretler aynı ise sonuç pozitiftir.' },
      { q: 'Bir pozitif ve bir negatif gerçek sayının toplamında sonucun işaretini ne belirler?', opt: ['Küçük olan sayı','Mutlak değerce büyük olan sayı','Daima pozitif olur','Daima negatif olur'], a: 1, e: 'Toplamın işareti mutlak değerce büyük olan sayının işareti ile aynı olur.' },
      { q: 'İşlem önceliğinde ilk hangi işlem yapılır?', opt: ['Toplama','Çarpma','Üs alma','Çıkarma'], a: 2, e: 'PDF’de işlem önceliğinde ilk adım üs alınır şeklindedir.' },
      { q: 'Üsten sonra işlem önceliğinde hangi adım gelir?', opt: ['Parantez içi işlemler','Toplama','Çıkarma','Sonuç yazma'], a: 0, e: 'Üsten sonra parantez içi işlemler yapılır.' },
      { q: 'Parantezden sonra hangi işlemler yapılır?', opt: ['Toplama ve çıkarma','Çarpma ve bölme','Sadece toplama','Sadece çıkarma'], a: 1, e: 'Parantez içinden sonra çarpma ve bölme işlemleri yapılır.' },
      { q: 'İşlem önceliğinde en son hangi işlemler yapılır?', opt: ['Üs ve kök','Parantez','Çarpma ve bölme','Toplama ve çıkarma'], a: 3, e: 'İşlem önceliğinde en son toplama ve çıkarma işlemleri yapılır.' },
      { q: 'Art arda gelen çarpma ve bölme işlemlerinde önce hangisi yapılır?', opt: ['Sağdaki','Soldaki','Çarpma her zaman önce','Bölme her zaman önce'], a: 1, e: 'Art arda gelen çarpma ve bölme işlemlerinden önce soldaki yapılır.' },
      { q: '(2³ - 5) : 3 · 5 + 2 işleminin sonucu kaçtır?', opt: ['3','5','7','9'], a: 2, e: '2³ = 8, (8 - 5) = 3, 3 : 3 · 5 = 5 ve 5 + 2 = 7.' }
    ]
  }),
  F(3, 1, 'Tek ve Çift Sayılar', 1, 6, {
    summary: '2 ile bölünebilme durumuna göre tam sayılar tek ve çift olarak ayrılır.',
    theory: {
      rules: [
        { title: 'Çift Sayılar',
          formula: '2n\\quad (n\\in\\mathbb{Z})',
          tip: '2 ile kalansız bölünebilen sayılara çift sayılar denir. n ∈ Z olmak üzere çift sayılar 2n ile gösterilir. Çift tam sayılar kümesi {..., -4, -2, 0, 2, 4, ...} şeklindedir.' },
        { title: 'Tek Sayılar',
          formula: '2n-1\\;\\text{ veya }\\;2n+1\\quad (n\\in\\mathbb{Z})',
          tip: '2 ile bölündüğünde 1 kalanını veren sayılara tek sayılar denir. n ∈ Z olmak üzere tek sayılar 2n - 1 ya da 2n + 1 ile gösterilir. Tek tam sayılar kümesi {..., -3, -1, 1, 3, ...} şeklindedir.' },
        { title: 'Toplama ve Çıkarma',
          signTable: {
            headers: ['+', 'T', 'Ç'],
            rows: [
              ['T', 'Ç', 'T'],
              ['Ç', 'T', 'Ç']
            ]
          },
          tip: 'Tek ve çift sayılar ile yapılan toplama ya da çıkarma işlemlerinin sonucunun tek ya da çift sayı olma durumları tablodaki gibidir. Buna göre toplanan sayıların ikisi de çift sayı ya da ikisi de tek sayı ise sonuç çift sayı olur.' },
        { title: 'Çarpma',
          signTable: {
            headers: ['·', 'T', 'Ç'],
            rows: [
              ['T', 'T', 'Ç'],
              ['Ç', 'Ç', 'Ç']
            ]
          },
          tip: 'Tek ve çift sayılar ile yapılan çarpma işleminin sonucunun tek ya da çift sayı olma durumları tablodaki gibidir. Buna göre sadece çarpılan sayıların ikisi de tek sayı olduğunda sonuç tek sayı olur.' },
        { title: 'Pozitif Tam Kuvvetler',
          signTable: {
            headers: ['n ∈ Z+', 'Sonuç'],
            rows: [
              ['Tⁿ', 'T'],
              ['Çⁿ', 'Ç']
            ]
          },
          tip: 'n ∈ Z+ olmak üzere tek ve çift sayılarda üs alma işleminin sonucunun tek ya da çift olma durumları tablodaki gibidir. Tek sayının pozitif tam kuvveti tek, çift sayının pozitif tam kuvveti çifttir.' }
      ],
      facts: [
        { text: 'T = tek sayı, Ç = çift sayı anlamında kullanılır.' }
      ],
      warning: 'Sayı tek mi çift mi sorularında önce 2 ile bölündüğünde kalanına bakılır.'
    },
    examples: [
      { question: '18 ve 25 sayılarının tek mi çift mi olduğunu belirleyelim.',
        steps: [
          { text: 'Bir sayının çift olması için 2 ile kalansız bölünmesi gerekir.' },
          { text: '18 : 2 = 9 ve kalan 0’dır. Bu yüzden 18 çift sayıdır.' },
          { text: '25 : 2 işleminde kalan 1’dir. Bu yüzden 25 tek sayıdır.' },
          { text: 'Tek-çift sorularında ilk bakılacak şey 2 ile bölümden kalandır.' }
        ],
        answer: '18\\;cift;\\;25\\;tek' },
      { question: '2n ve 2n + 1 gösterimlerini n = 4 için yorumlayalım.',
        steps: [
          { text: 'Çift sayılar 2n biçiminde gösterilir.' },
          { text: 'n = 4 için 2n = 2 · 4 = 8 olur. 8 çift sayıdır.' },
          { text: 'Tek sayılar 2n + 1 veya 2n - 1 biçiminde gösterilir.' },
          { text: 'n = 4 için 2n + 1 = 9 olur. 9 tek sayıdır.' }
        ],
        answer: '8;\\;9' },
      { question: 'Tek + tek ve tek + çift toplamlarını örnekle inceleyelim.',
        steps: [
          { text: 'İki tek sayının toplamının çift olduğunu görmek için 7 + 9 işlemini yapalım.' },
          { text: '7 + 9 = 16 olur. 16 çift sayıdır.' },
          { text: 'Bir tek ve bir çift sayının toplamı için 7 + 10 işlemini yapalım.' },
          { text: '7 + 10 = 17 olur. 17 tek sayıdır.' }
        ],
        answer: '16;\\;17' },
      { question: 'Çarpımda en az bir çarpan çiftse sonuç neden çifttir?',
        steps: [
          { text: 'Örnek olarak 5 · 8 işlemini alalım.' },
          { text: '8 çift sayı olduğu için 8 = 2 · 4 şeklinde yazılabilir.' },
          { text: '5 · 8 = 5 · 2 · 4 = 2 · 20 olur.' },
          { text: 'Sonuç 2 ile çarpılan bir sayı olduğu için çifttir.' }
        ],
        answer: 'cift' },
      { question: 'Tek ve çift sayıların kuvvetlerini karşılaştıralım.',
        steps: [
          { text: 'Tek sayı örneği olarak 3² ve 3³ değerlerine bakalım.' },
          { text: '3² = 9 ve 3³ = 27 olur. İkisi de tektir.' },
          { text: 'Çift sayı örneği olarak 4² ve 4³ değerlerine bakalım.' },
          { text: '4² = 16 ve 4³ = 64 olur. İkisi de çifttir.' }
        ],
        answer: 'tek\\to tek,\\;cift\\to cift' },
      { question: '3a + 2b ifadesinde a tek, b çift ise sonucun tek mi çift mi olduğunu bulalım.',
        steps: [
          { text: 'a tek olduğundan 3a tek olur.' },
          { text: 'b çift olduğundan 2b çift olur.' },
          { text: 'Tek + çift = tek sonucunu verir.' }
        ],
        answer: '\\text{Sonuç tektir.}' }
    ],
    quiz: [
      { q: '2 ile kalansız bölünebilen sayılara ne denir?', opt: ['Tek sayı','Çift sayı','Asal sayı','Doğal sayı'], a: 1, e: 'Çift sayılar 2 ile kalansız bölünebilen sayılardır.' },
      { q: 'Tek sayılar genel olarak nasıl gösterilebilir?', opt: ['2n','2n + 1','n²','n/2'], a: 1, e: 'n tam sayı olmak üzere tek sayılar 2n + 1 veya 2n - 1 biçiminde gösterilir.' },
      { q: 'Çift tam sayılar kümesinde hangisi bulunmaz?', opt: ['-4','0','3','8'], a: 2, e: '3 tek sayıdır, çift tam sayılar kümesinde bulunmaz.' },
      { q: 'Tek + tek işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima negatif','Belirsiz'], a: 1, e: 'İki tek sayının toplamı çifttir.' },
      { q: 'Tek · çift işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Asal','Belirsiz'], a: 1, e: 'Çarpımda en az bir çarpan çift olduğu için sonuç çifttir.' },
      { q: 'Tek bir sayının pozitif tam kuvveti nasıldır?', opt: ['Daima tek','Daima çift','Daima sıfır','Belirsiz'], a: 0, e: 'Tek tabanın pozitif tam kuvvetleri tek kalır.' },
      { q: 'Çift bir sayının pozitif tam kuvveti nasıldır?', opt: ['Tek','Çift','Negatif','Asal'], a: 1, e: 'Çift tabanın pozitif tam kuvvetleri çifttir.' },
      { q: '5³ + 8 işleminin sonucu tek mi çifttir?', opt: ['Tek','Çift','Sıfır','Bulunamaz'], a: 0, e: '5³ tek, 8 çift; tek + çift = tek.' },
      { q: 'Aşağıdakilerden hangisi çift sayıların genel gösterimidir?', opt: ['2n','2n + 1','n + 1','n² + 1'], a: 0, e: 'n tam sayı olmak üzere çift sayılar 2n biçiminde gösterilir.' },
      { q: 'Aşağıdakilerden hangisi tek sayıların genel gösterimi olabilir?', opt: ['2n','4n','2n - 1','n/2'], a: 2, e: 'Tek sayılar 2n + 1 veya 2n - 1 biçiminde gösterilebilir.' },
      { q: '0 sayısı tek mi çifttir?', opt: ['Tektir','Çifttir','Asaldır','Hiçbiri'], a: 1, e: '0 = 2 · 0 olduğundan çift sayıdır.' },
      { q: '-12 sayısı hangi türdedir?', opt: ['Tek','Çift','Asal','Pozitif'], a: 1, e: '-12 sayısı 2 ile kalansız bölündüğü için çifttir.' },
      { q: '-7 sayısı hangi türdedir?', opt: ['Çift','Tek','Doğal','Sıfır'], a: 1, e: '-7 sayısı 2 ile kalansız bölünmez; tektir.' },
      { q: 'Çift + çift işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima 0','Belirsiz'], a: 1, e: 'İki çift sayının toplamı çifttir.' },
      { q: 'Tek + çift işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima negatif','Belirsiz'], a: 0, e: 'Tek sayı ile çift sayının toplamı tektir.' },
      { q: 'Tek - tek işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima pozitif','Belirsiz'], a: 1, e: 'İki tek sayının farkı çifttir.' },
      { q: 'Çift - tek işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima sıfır','Asal'], a: 0, e: 'Çift sayıdan tek sayı çıkarılırsa sonuç tektir.' },
      { q: 'Tek · tek işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima 1','Belirsiz'], a: 0, e: 'İki tek sayının çarpımı tektir.' },
      { q: 'Çift · çift işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Daima negatif','Belirsiz'], a: 1, e: 'Çift çarpan bulunduğu için çarpım çifttir.' },
      { q: 'Bir çarpımın çift olması için hangisi yeterlidir?', opt: ['Tüm çarpanlar tek olmalı','En az bir çarpan çift olmalı','Çarpanlar asal olmalı','Çarpanlar eşit olmalı'], a: 1, e: 'Çarpımda en az bir çarpan çiftse sonuç çifttir.' },
      { q: '3 · 5 · 8 işleminin sonucu hangi türdedir?', opt: ['Tek','Çift','Asal','Belirsiz'], a: 1, e: '8 çift çarpan olduğu için çarpım çifttir.' },
      { q: '9² sayısı tek mi çifttir?', opt: ['Tek','Çift','Sıfır','Bulunamaz'], a: 0, e: 'Tek sayının pozitif tam kuvveti tektir.' },
      { q: '6⁵ sayısı tek mi çifttir?', opt: ['Tek','Çift','Asal','Bulunamaz'], a: 1, e: 'Çift sayının pozitif tam kuvveti çifttir.' },
      { q: 'a tek sayı ise 2a + 1 ifadesi nasıldır?', opt: ['Tek','Çift','Daima 0','Belirsiz'], a: 0, e: '2a çift, çift + 1 tek olur.' },
      { q: 'a çift sayı ise a + 5 ifadesi nasıldır?', opt: ['Çift','Tek','Daima pozitif','Belirsiz'], a: 1, e: 'Çift + tek = tek sonucunu verir.' }
    ]
  }),

  F(4, 1, 'Pozitif ve Negatif Sayılar', 1, 7, {
    summary: 'Gerçek sayılar işaretlerine göre pozitif, negatif ve sıfır olarak yorumlanır.',
    theory: {
      rules: [
        { title: 'Pozitif Sayılar',
          formula: 'a>0\\Rightarrow a\\in\\mathbb{R}^{+}',
          tip: 'Sıfırdan büyük olan sayılara pozitif sayılar denir. Sayı doğrusunda sıfırın sağında pozitif sayılar yer alır.' },
        { title: 'Negatif Sayılar',
          formula: 'a<0\\Rightarrow a\\in\\mathbb{R}^{-}',
          tip: 'Sıfırdan küçük olan sayılara negatif sayılar denir. Sayı doğrusunda sıfırın solunda negatif sayılar yer alır.' },
        { type: 'warning',
          text: 'Bir sayının önünde bulunan ve sayının pozitif ya da negatif olduğunu gösteren sembole o sayının işareti denir. Sayının önünde bir işaret olmadığı durumda sayının pozitif olduğu anlaşılmalıdır.' },
        { type: 'warning',
          text: 'Sıfır sayısı ne pozitif ne de negatiftir. Sıfırın önüne yazılacak pozitif ya da negatif işareti sıfır sayısının değerini değiştirmez. -0 = +0 = 0’dır.' },
        { title: 'Gerçek Sayıların Ayrımı',
          formula: '\\mathbb{R}^{+}\\cup\\{0\\}\\cup\\mathbb{R}^{-}=\\mathbb{R}',
          tip: 'Pozitif gerçek sayılar kümesi, negatif gerçek sayılar kümesi ve sıfır sayısının birleşimi gerçek sayılar kümesine eşittir.' },
        { title: 'Toplama İşlemleri',
          signTable: {
            headers: ['a', 'b', 'a + b'],
            rows: [
              ['(+)', '(+)', '(+)'],
              ['(-)', '(-)', '(-)'],
              ['Ters işaretli', '|a| > |b|', 'a’nın işareti'],
              ['Ters işaretli', '|a| < |b|', 'b’nin işareti']
            ]
          },
          tip: 'İki pozitif sayının toplamı daima pozitif, iki negatif sayının toplamı daima negatiftir. Bir negatif ve bir pozitif sayının toplamında mutlak değerce büyük olan sayıdan küçük olan çıkarılır ve mutlak değerce büyük olan sayının işareti sonucun işareti olur.' },
        { type: 'warning',
          text: 'a + b > 0 ise a ve b sayılarının ikisi de pozitif olabilir ya da a ve b ters işaretli olup pozitif olan sayı negatif olan sayıdan mutlak değerce büyüktür.' },
        { type: 'warning',
          text: 'a + b = 0 ise a ve b sayılarının ikisi de sıfırdır ya da a ve b ters işaretlidir ve mutlak değerce eşittir.' },
        { title: 'Çarpma ve Bölme İşlemleri',
          signTable: {
            headers: ['a', 'b', 'a · b / a : b'],
            rows: [
              ['(+)', '(+)', '(+)'],
              ['(+)', '(-)', '(-)'],
              ['(-)', '(+)', '(-)'],
              ['(-)', '(-)', '(+)']
            ]
          },
          tip: 'Pozitif ve negatif sayıların birbiriyle çarpımının ya da bölümünün sonucunun pozitif ya da negatif olma durumları tablodaki gibidir. Sayıların işaretleri aynı ise sonuç pozitif, sayılar ters işaretli ise sonuç negatiftir.' },
        { title: 'Pozitif Sayıların Kuvvetleri',
          formula: 'a>0\\Rightarrow a^n>0\\quad(n\\in\\mathbb{Z}^{+})',
          tip: 'Pozitif sayıların bütün pozitif tam kuvvetleri pozitiftir.' },
        { title: 'Negatif Sayıların Kuvvetleri',
          signTable: {
            headers: ['n', '(-a)ⁿ'],
            rows: [
              ['n çift sayı', '(+)'],
              ['n tek sayı', '(-)']
            ]
          },
          tip: 'n ∈ Z+ olmak üzere negatif sayıların kuvvetlerinin sonucunun pozitif ya da negatif olma durumu tablodaki gibidir. Negatif sayının çift kuvveti pozitif, tek kuvveti negatiftir.' }
      ],
      facts: [
        { text: 'Sayı doğrusunda sağdaki sayı soldaki sayıdan büyüktür.' },
        { text: 'Pozitif sayılar sayı doğrusunda 0’ın sağında, negatif sayılar 0’ın solunda yer alır.' },
        { text: 'Önünde işaret bulunmayan sayı pozitif kabul edilir.' },
        { text: 'Ters işaretli sayılar toplanırken mutlak değerce büyük olandan küçük olan çıkarılır.' },
        { text: 'Sonucun işareti mutlak değerce büyük olan sayının işareti ile aynıdır.' },
        { text: 'Pozitif sayıların bütün kuvvetleri pozitiftir.' },
        { text: 'Negatif sayının çift kuvveti pozitif, tek kuvveti negatiftir. Genelleme: a < 0 ise n çiftken aⁿ > 0, n tekken aⁿ < 0 olur.' }
      ],
      warning: ''
    },
    examples: [
      { question: '-5, 0 ve 3 sayılarını sayı doğrusuna göre yorumlayalım.',
        steps: [
          { text: '-5 sayısı 0’dan küçüktür; sayı doğrusunda 0’ın solunda yer alır ve negatiftir.' },
          { text: '3 sayısı 0’dan büyüktür; sayı doğrusunda 0’ın sağında yer alır ve pozitiftir.' },
          { text: '0 ne pozitif ne negatiftir.' },
          { text: 'Bu yüzden sayılar işaretlerine göre -5 negatif, 0 nötr, 3 pozitif şeklinde ayrılır.' }
        ],
        answer: '-5<0<3' },
      { question: '-7 ve -2 sayılarından hangisi büyüktür?',
        steps: [
          { text: 'Sayı doğrusunda sağdaki sayı soldaki sayıdan büyüktür.' },
          { text: '-7 daha solda, -2 daha sağdadır.' },
          { text: 'Negatif sayılarda mutlak değeri küçük olan sayı daha büyüktür.' },
          { text: 'Bu nedenle -2, -7’den büyüktür.' }
        ],
        answer: '-2>-7' },
      { question: '-9 + 4 toplamının işaretini bulalım.',
        steps: [
          { text: 'Ters işaretli iki sayı toplanırken mutlak değerler karşılaştırılır.' },
          { text: '|-9| = 9 ve |4| = 4 olduğundan mutlak değerce büyük sayı -9’dur.' },
          { text: '9 - 4 = 5 bulunur.' },
          { text: 'Sonucun işareti mutlak değerce büyük olan sayının işaretiyle aynı olur; sonuç -5’tir.' }
        ],
        answer: '-5' },
      { question: '(-6) · (-3) ve (-12) : 4 işlemlerinin işaretlerini bulalım.',
        steps: [
          { text: 'Çarpma ve bölmede işaretler aynıysa sonuç pozitif, farklıysa sonuç negatiftir.' },
          { text: '(-6) · (-3) işleminde işaretler aynıdır; sonuç pozitiftir ve 18 olur.' },
          { text: '(-12) : 4 işleminde işaretler farklıdır; sonuç negatiftir ve -3 olur.' },
          { text: 'Bu örnek işaret tablosunun çarpma ve bölmede aynı şekilde çalıştığını gösterir.' }
        ],
        answer: '18;\\;-3' },
      { question: '(-2)² ve (-2)³ ifadelerinin işaretlerini karşılaştıralım.',
        steps: [
          { text: 'Negatif sayının çift kuvvetinde negatif çarpanlar ikişerli eşleşir ve sonuç pozitif olur.' },
          { text: '(-2)² = 4 olduğundan çift kuvvet pozitiftir.' },
          { text: 'Negatif sayının tek kuvvetinde bir negatif çarpan eşleşmeden kalır ve sonuç negatif olur.' },
          { text: '(-2)³ = -8 olduğundan tek kuvvet negatiftir.' }
        ],
        answer: '4;\\;-8' },
      { question: 'a² · b⁵ < 0 ve a⁷ · b⁸ > 0 ise a ve b işaretlerini bulalım.',
        steps: [
          { text: 'Çift kuvvetler işaret bilgisini pozitife çevirir. Bu yüzden a² pozitiftir.' },
          { text: 'a² · b⁵ < 0 olduğuna göre çarpımın negatif olması için b⁵ negatif olmalıdır. Tek kuvvet işareti koruduğu için b negatiftir.' },
          { text: 'b⁸ çift kuvvettir ve pozitiftir.' },
          { text: 'a⁷ · b⁸ > 0 olduğuna göre a⁷ pozitif olmalıdır. Tek kuvvet işareti koruduğu için a pozitiftir.' }
        ],
        answer: 'a>0,\\; b<0' }
      ,
      { question: 'a ve b sıfırdan farklı gerçek sayılar olsun. a⁶ > 0 ve b⁷ < 0 bilgilerine göre a ve b için ne söylenebilir?',
        steps: [
          { text: 'a⁶ ifadesinde üs çift sayıdır. Çift kuvvet, negatif tabanı da pozitif yapar.' },
          { text: 'Bu yüzden a⁶ > 0 bilgisi tek başına a’nın pozitif ya da negatif olduğunu kesin belirlemez; a sıfırdan farklı olduğu için sonuç pozitiftir.' },
          { text: 'b⁷ ifadesinde üs tek sayıdır. Tek kuvvet tabanın işaretini korur.' },
          { text: 'b⁷ < 0 olduğuna göre b negatiftir.' }
        ],
        answer: 'a\\neq0;\\;b<0' }
    ],
    quiz: [
      { q: 'Sıfırdan büyük sayılar hangi adla anılır?', opt: ['Negatif','Pozitif','İrrasyonel','Tek'], a: 1, e: 'Sıfırdan büyük sayılara pozitif sayılar denir.' },
      { q: 'Sıfırdan küçük sayılar hangi adla anılır?', opt: ['Pozitif','Negatif','Doğal','Çift'], a: 1, e: 'Sıfırdan küçük sayılara negatif sayılar denir.' },
      { q: '0 için hangisi doğrudur?', opt: ['Pozitiftir','Negatiftir','Hem pozitif hem negatiftir','Ne pozitif ne negatiftir'], a: 3, e: '0 ne pozitif ne negatiftir.' },
      { q: 'Sayı doğrusunda sağdaki sayı için hangisi söylenir?', opt: ['Daha küçüktür','Daha büyüktür','Daima negatiftir','Daima sıfırdır'], a: 1, e: 'Sayı doğrusunda sağdaki sayı soldakinden büyüktür.' },
      { q: '(-) · (-) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'İşaretler aynı olduğunda çarpım pozitiftir.' },
      { q: '(+) : (-) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'İşaretler farklı olduğunda bölüm negatiftir.' },
      { q: 'Negatif bir sayının çift kuvveti hangi işaretlidir?', opt: ['Pozitif','Negatif','Daima sıfır','Belirsiz'], a: 0, e: 'Negatif sayının çift kuvveti pozitiftir.' },
      { q: '-9 + 4 toplamının işareti nedir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'Mutlak değerce büyük olan sayı -9 olduğu için sonuç negatiftir.' },
      { q: 'Sayı doğrusunda 0’ın sağındaki sayılar nasıldır?', opt: ['Negatif','Pozitif','Daima tek','Daima çift'], a: 1, e: '0’ın sağındaki gerçek sayılar pozitiftir.' },
      { q: 'Sayı doğrusunda 0’ın solundaki sayılar nasıldır?', opt: ['Pozitif','Negatif','Doğal','Sıfır'], a: 1, e: '0’ın solundaki gerçek sayılar negatiftir.' },
      { q: 'Önünde işaret bulunmayan 7 sayısı nasıl kabul edilir?', opt: ['Negatif','Pozitif','Sıfır','Tanımsız'], a: 1, e: 'Önünde işaret bulunmayan sayı pozitif kabul edilir.' },
      { q: '-0 değeri aşağıdakilerden hangisine eşittir?', opt: ['-1','0','1','Tanımsız'], a: 1, e: '-0 = +0 = 0 kabul edilir.' },
      { q: 'İki pozitif sayının toplamı hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'İki pozitif sayının toplamı pozitiftir.' },
      { q: 'İki negatif sayının toplamı hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'İki negatif sayının toplamı negatiftir.' },
      { q: '-8 + (-3) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'İki negatif sayı toplandığı için sonuç negatiftir.' },
      { q: '-5 + 12 işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'Mutlak değerce büyük olan sayı 12 olduğu için sonuç pozitiftir.' },
      { q: '-15 + 6 işleminin sonucu kaçtır?', opt: ['-21','-9','9','21'], a: 1, e: 'Ters işaretli sayılarda 15 - 6 = 9 alınır ve büyük mutlak değerin işareti olan eksi yazılır.' },
      { q: '(-4) · 7 işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'Çarpanların işaretleri farklı olduğu için sonuç negatiftir.' },
      { q: '(-20) : (-5) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'Bölmede işaretler aynı olduğunda sonuç pozitiftir.' },
      { q: '(+) · (-) · (-) işleminin sonucu hangi işaretlidir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'İki negatif çarpan birbirini pozitife çevirir; sonuç pozitiftir.' },
      { q: '(-2)⁴ ifadesinin işareti nedir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 0, e: 'Negatif sayının çift kuvveti pozitiftir.' },
      { q: '(-3)⁵ ifadesinin işareti nedir?', opt: ['Pozitif','Negatif','Sıfır','Belirsiz'], a: 1, e: 'Negatif sayının tek kuvveti negatiftir.' },
      { q: 'a < 0 ve n çift ise aⁿ için hangisi doğrudur?', opt: ['aⁿ > 0','aⁿ < 0','aⁿ = 0','Tanımsız'], a: 0, e: 'Negatif tabanın çift kuvveti pozitiftir.' },
      { q: 'a < 0 ve n tek ise aⁿ için hangisi doğrudur?', opt: ['aⁿ > 0','aⁿ < 0','aⁿ = 0','Daima 1'], a: 1, e: 'Negatif tabanın tek kuvveti negatiftir.' },
      { q: '-7 ve -12 sayılarından hangisi büyüktür?', opt: ['-12','-7','İkisi eşit','Belirsiz'], a: 1, e: 'Sayı doğrusunda -7, -12’nin sağındadır; bu yüzden daha büyüktür.' }
    ]
  }),

  F(5, 1, 'Ardışık Sayılar', 2, 8, {
    summary: 'Belirli bir kurala göre art arda gelen ve farkları sabit olan sayılar ardışık sayılardır.',
    theory: {
      rules: [
        { title: 'Ardışık Sayılar',
          plainFormula: '..., -n - 1, -n, -n + 1, ..., -3, -2, -1, 0, 1, 2, 3, ..., n - 1, n, n + 1, ...',
          tip: 'Belirli bir kurala göre art arda gelen sayılara ardışık sayılar denir. Ardışık sayıların art arda gelen terimleri arasındaki farklar eşittir ve bu farka ortak fark denir.' },
        { title: 'Ardışık Çift Sayılar',
          plainFormula: '..., -2n - 2, -2n, -2n + 2, ..., -4, -2, 0, 2, 4, ..., 2n - 2, 2n, 2n + 2, ...',
          tip: 'Ardışık çift sayılar art arda gelen çift sayılardan oluşur ve ortak farkı 2’dir. n ∈ Z olmak üzere bu sayılar ardışık çift tam sayılardır.' },
        { title: 'Ardışık Tek Sayılar',
          plainFormula: '..., -2n - 1, -2n + 1, ..., -3, -1, 1, 3, ..., 2n - 1, 2n + 1, ...',
          tip: 'Ardışık tek sayılar art arda gelen tek sayılardan oluşur ve ortak farkı 2’dir. n ∈ Z olmak üzere bu sayılar ardışık tek tam sayılardır.' },
        { title: 'Terim Sayısı',
          formula: '\\scriptsize\\text{Terim Sayısı}=\\dfrac{\\text{Son Terim}-\\text{İlk Terim}}{\\text{Ortak Fark}}+1',
          tip: 'Belirli bir kurala göre artan ya da azalan ardışık sayı dizisindeki terim sayısı bu formülle bulunur. +1 eklemeyi unutma — son terim de sayılır.' },
        { title: 'Terimler Toplamı',
          formula: '\\scriptsize\\text{Terimlerin Toplamı}=\\dfrac{\\text{Son Terim}+\\text{İlk Terim}}{2}\\cdot\\text{Terim Sayısı}',
          tip: 'Belirli bir kurala göre artan ya da azalan ardışık sayı dizisindeki terimler toplamı bu formülle bulunur. Bu Gauss formülü olarak da bilinir.' },
        { title: 'Ortanca Terim',
          formula: '\\scriptsize\\text{Ortanca Terim}=\\dfrac{\\text{Son Terim}+\\text{İlk Terim}}{2}',
          tip: 'Tek sayıda terim içeren bir dizinin ortanca terimi bu bağıntı ile elde edilir.' }
      ],
      facts: [
        { text: '24, 26, 28, 30 sayıları dört tane ardışık çift tam sayıdır.' },
        { text: '-29, -27, -25 sayıları üç tane ardışık tek tam sayıdır.' },
        '1+2+\\ldots+n = \\dfrac{n(n+1)}{2}',
        '1+3+5+\\ldots+(2n-1) = n^2',
        '2+4+6+\\ldots+2n = n(n+1)'
      ],
      warning: 'Ardışık Sayılar’ın ortalaması daima dizinin ortadaki terimine eşittir.'
    },
    examples: [
      { question: '3, 7, 11, 15, … dizisinde 10. terim kaçtır?',
        steps: [
          { text: 'Önce dizinin başlangıcını belirleriz: ilk terim a₁ = 3’tür. Çünkü istenen terimi bulmak için başlangıç noktasına ihtiyacımız var.' },
          { text: 'Sonra ortak farkı buluruz: 7 - 3 = 4. Ardışık dizide her adımda aynı miktar artıldığı için bu fark kullanılacaktır.' },
          { text: '10. terime ulaşmak için ilk terimden sonra 9 kez ilerleriz. Bu yüzden aₙ = a₁ + (n - 1) · d bağıntısını kullanırız.' },
          { text: 'n = 10 yazınca a₁₀ = 3 + 9 · 4 = 39 olur. Yani 10. terim 39’dur.' }
        ],
        answer: '39' },
      { question: '5, 9, 13, …, 41 dizisinde kaç terim vardır?',
        steps: [
          { text: 'Önce verilen bilgileri ayırırız: ilk terim 5, son terim 41 ve ortak fark 9 - 5 = 4’tür.' },
          { text: 'Kaç adım ilerlediğimizi bulmak için son terimden ilk terimi çıkarırız. Bu fark, ortak farka bölününce kaç aralık olduğu bulunur.' },
          { text: 'Terim Sayısı = (41 - 5) / 4 + 1 yazılır. +1 eklenir çünkü aralık sayısı terim sayısından bir eksiktir; ilk terimi de saymamız gerekir.' },
          { text: '36 / 4 = 9 aralık vardır. İlk terim de dahil edilince 9 + 1 = 10 terim olur.' }
        ],
        answer: '10' },
      { question: '4, 8, 12, …, 40 ardışık sayı dizisinin terimleri toplamı kaçtır?',
        steps: [
          { text: 'Toplamı bulmak için önce dizide kaç terim olduğunu bilmemiz gerekir. İlk terim 4, son terim 40 ve ortak fark 4’tür.' },
          { text: 'Terim sayısı formülünü uygularız: (40 - 4) / 4 + 1 = 10. Böylece toplamda 10 terim olduğunu buluruz.' },
          { text: 'Ardışık dizilerde ilk ve son terimin ortalaması, dizinin ortalama terim değerini verir. Bu yüzden ((Son Terim + İlk Terim) / 2) · Terim Sayısı formülünü kullanırız.' },
          { text: '((40 + 4) / 2) · 10 = 22 · 10 = 220 olur. Yani tüm terimlerin toplamı 220’dir.' }
        ],
        answer: '220' },
      { question: '24, 26, 28, 30 sayıları kaç tane ardışık çift tam sayıdır?',
        steps: [
          { text: 'Önce sayıların türüne bakarız: 24, 26, 28 ve 30 sayılarının hepsi çifttir.' },
          { text: 'Ardışık çift sayı olup olmadığını anlamak için komşu terimler arasındaki farkı kontrol ederiz.' },
          { text: '26 - 24 = 2, 28 - 26 = 2 ve 30 - 28 = 2 olduğundan sayılar art arda gelen çift sayılardır.' },
          { text: 'Son olarak kaç tane olduklarını sayarız: 24, 26, 28, 30 olmak üzere 4 tane ardışık çift tam sayı vardır.' }
        ],
        answer: '4' },
      { question: '-29, -27, -25 ardışık tek tam sayılarının ortanca terimi kaçtır?',
        steps: [
          { text: 'Önce dizideki terim sayısına bakarız: -29, -27, -25 olmak üzere 3 terim vardır. Terim sayısı tek olduğu için ortanca terimden söz edebiliriz.' },
          { text: 'Ardışık dizide ortanca terim, ilk ve son terimin tam ortasındadır. Bu yüzden ilk ve son terimin ortalamasını alırız.' },
          { text: 'Formüle göre Ortanca Terim = (Son Terim + İlk Terim) / 2 olur.' },
          { text: 'Son terim -25, ilk terim -29 olduğundan (-25 + (-29)) / 2 = -54 / 2 = -27 bulunur.' }
        ],
        answer: '-27' }
      ,
      { question: '1 + 2 + 3 + ... + 20 toplamını kısa yoldan bulalım.',
        steps: [
          { text: 'Bu toplam 1’den n’ye kadar olan ardışık doğal sayıların toplamıdır.' },
          { text: 'Bu tür toplamda 1 + 2 + ... + n = n(n + 1) / 2 formülü kullanılır.' },
          { text: 'n = 20 yazılır: 20 · 21 / 2 = 10 · 21.' },
          { text: '10 · 21 = 210 olduğundan toplam 210’dur.' }
        ],
        answer: '210' },
      { question: '1 + 3 + 5 + ... + 19 toplamını bulalım.',
        steps: [
          { text: 'Bu toplam ilk n tek sayının toplamı tipindedir.' },
          { text: 'Son terim 19 olduğundan 19 = 2n - 1 eşitliği kurulur.' },
          { text: '2n - 1 = 19 ise 2n = 20 ve n = 10 olur. Yani 10 tane tek sayı vardır.' },
          { text: 'İlk n tek sayının toplamı n² olduğundan toplam 10² = 100’dür.' }
        ],
        answer: '100' },
      { question: '2 + 4 + 6 + ... + 30 toplamını bulalım.',
        steps: [
          { text: 'Bu toplam ilk n çift sayının toplamı tipindedir.' },
          { text: 'Son terim 30 olduğundan 2n = 30 eşitliği kurulur ve n = 15 bulunur.' },
          { text: 'İlk n çift sayının toplamı n(n + 1) formülüyle bulunur.' },
          { text: 'n = 15 yazılır: 15 · 16 = 240 olur.' }
        ],
        answer: '240' }
    ],
    quiz: [
      { q: '2, 5, 8, 11, … dizisinin 8. terimi nedir?', opt: ['21','23','25','27'], a: 1,
        e: 'd = 3, a_8 = 2 + 7\\cdot 3 = 23' },
      { q: '4, 8, 12, … dizisinin ilk 10 teriminin toplamı kaçtır?', opt: ['200','220','240','260'], a: 1,
        e: 'S_{10} = (4+40)/2 \\cdot 10 = 220' },
      { q: '10, 14, 18, … dizisinde 5. terim 26 ise 1. terim kaçtır?', opt: ['8','10','12','14'], a: 1,
        e: 'd = (26-x)/4 = 4, x = 10' },
      { q: '1 ile 100 arasındaki tek sayıların toplamı kaçtır?', opt: ['2.000','2.500','5.000','5.050'], a: 1,
        e: '50 tane tek sayı, S = 50^2 = 2500' },
      { q: '3, 6, 9, …, 99 dizisinde kaç terim vardır?', opt: ['30','32','33','35'], a: 2,
        e: 'n = (99-3)/3 + 1 = 33' },
      { q: 'Belirli bir kurala göre art arda gelen sayılara ne denir?', opt: ['Asal sayılar','Ardışık sayılar','Rasyonel sayılar','Basamak sayıları'], a: 1, e: 'Ardışık sayılar belirli bir kurala göre art arda gelir.' },
      { q: 'Ardışık sayıların art arda gelen terimleri arasındaki eşit farka ne denir?', opt: ['Ortak fark','Basamak değeri','Sayı değeri','Kalan'], a: 0, e: 'Bu sabit farka ortak fark denir.' },
      { q: 'Ardışık çift sayıların ortak farkı kaçtır?', opt: ['1','2','3','4'], a: 1, e: 'Ardışık çift sayılar 2’şer artar veya azalır.' },
      { q: 'Ardışık tek sayıların ortak farkı kaçtır?', opt: ['1','2','5','10'], a: 1, e: 'Ardışık tek sayılar arasında fark 2’dir.' },
      { q: '24, 26, 28, 30 dizisi hangi türdedir?', opt: ['Ardışık tek','Ardışık çift','Asal','Azalan'], a: 1, e: 'Sayılar çifttir ve aralarındaki fark 2’dir.' },
      { q: '-29, -27, -25 dizisi hangi türdedir?', opt: ['Ardışık çift','Ardışık tek','Doğal sayı','Basamak'], a: 1, e: 'Sayılar tektir ve aralarındaki fark 2’dir.' },
      { q: 'Ardışık çift tam sayılar genel olarak nasıl gösterilebilir?', opt: ['2n, 2n+2, 2n+4','n, n+1, n+2','2n+1, 2n+3','n², n²+1'], a: 0, e: 'Ardışık çift sayılar 2n, 2n+2, 2n+4 biçiminde yazılabilir.' },
      { q: 'Ardışık tek tam sayılar genel olarak nasıl gösterilebilir?', opt: ['2n, 2n+2','2n+1, 2n+3','n, n+2','10n, 10n+1'], a: 1, e: 'Ardışık tek sayılar 2n+1, 2n+3 biçiminde yazılabilir.' },
      { q: '5, 8, 11, 14 dizisinin ortak farkı kaçtır?', opt: ['2','3','4','5'], a: 1, e: '8 - 5 = 3 olduğundan ortak fark 3’tür.' },
      { q: '7, 12, 17, … dizisinin 6. terimi kaçtır?', opt: ['22','27','32','37'], a: 2, e: 'İlk terim 7, ortak fark 5’tir. 6. terim 7 + 5·5 = 32 olur.' },
      { q: '10, 13, 16, …, 31 dizisinde kaç terim vardır?', opt: ['7','8','9','10'], a: 1, e: 'Terim sayısı = (31 - 10) / 3 + 1 = 8.' },
      { q: '2, 6, 10, …, 34 dizisinde kaç terim vardır?', opt: ['8','9','10','11'], a: 1, e: 'Terim sayısı = (34 - 2) / 4 + 1 = 9.' },
      { q: 'Terim sayısı formülünde neden +1 eklenir?', opt: ['Ortak farkı büyütmek için','İlk terimi de saymak için','Son terimi çıkarmak için','Toplamı yarıya indirmek için'], a: 1, e: 'Aralık sayısı terim sayısından bir eksiktir; ilk terim de sayıldığı için +1 eklenir.' },
      { q: '1 + 2 + 3 + ... + 30 toplamı kaçtır?', opt: ['435','450','465','500'], a: 2, e: 'n(n+1)/2 = 30·31/2 = 465.' },
      { q: '1 + 3 + 5 + ... + 15 toplamı kaçtır?', opt: ['49','64','81','100'], a: 1, e: '15 = 2n - 1 ise n = 8. İlk 8 tek sayının toplamı 8² = 64’tür.' },
      { q: '2 + 4 + 6 + ... + 20 toplamı kaçtır?', opt: ['90','100','110','120'], a: 2, e: '20 = 2n ise n = 10. İlk 10 çift sayının toplamı n(n+1)=10·11=110 olur.' },
      { q: '4, 8, 12, …, 28 dizisinin terimleri toplamı kaçtır?', opt: ['96','108','112','120'], a: 2, e: 'Terim sayısı = (28 - 4)/4 + 1 = 7. Toplam = (28 + 4)/2 · 7 = 112.' },
      { q: '3, 7, 11, …, 35 dizisinin terimleri toplamı kaçtır?', opt: ['152','161','171','181'], a: 2, e: 'Terim sayısı = (35 - 3)/4 + 1 = 9. Toplam = (35 + 3)/2 · 9 = 171.' },
      { q: '5, 9, 13, 17, 21 dizisinin ortanca terimi kaçtır?', opt: ['9','13','17','21'], a: 1, e: 'Tek sayıda terim vardır; ortanca terim 13’tür.' },
      { q: '7, 11, 15, 19, 23 dizisinin ortanca terimi formülle kaç bulunur?', opt: ['11','15','19','23'], a: 1, e: '(Son terim + ilk terim) / 2 = (23 + 7) / 2 = 15.' }
    ]
  }),

  F(6, 1, 'Sayı Basamakları', 2, 7, {
    summary: 'Bir sayının rakamlarının bulunduğu yer basamak, rakamın kendisi sayı değeri, basamağa göre aldığı değer basamak değeridir.',
    theory: {
      rules: [
        { title: 'Basamak',
          formula: '\\text{Basamak}=\\text{rakamın sayı içindeki yeri}',
          tip: 'Bir sayıyı oluşturan rakamlardan her birinin o sayı içerisindeki yerine basamak denir.' },
        { title: 'Beş Basamaklı Sayının Basamakları',
          signTable: {
            headers: ['a', 'b', 'c', 'd', 'e'],
            rows: [
              ['On Binler Basamağı', 'Binler Basamağı', 'Yüzler Basamağı', 'Onlar Basamağı', 'Birler Basamağı']
            ]
          },
          tip: 'Beş basamaklı abcde sayısında a on binler, b binler, c yüzler, d onlar ve e birler basamağındadır.' },
        { title: 'Beş Basamaklı Sayı',
          formula: '\\overline{abcde}=10000a+1000b+100c+10d+e',
          tip: 'a on binler, b binler, c yüzler, d onlar, e birler basamağıdır.' },
        { title: 'Sayı Değeri',
          formula: '\\text{Sayı değeri}=\\text{rakamın kendisi}',
          tip: 'Bir sayının basamaklarında bulunan rakamların kendisi o rakamın sayı değeridir.' },
        { title: 'Basamak Değeri',
          formula: '\\text{Basamak değeri}=\\text{rakam}\\times\\text{basamak değeri}',
          tip: 'Bir sayının basamaklarında bulunan rakamın bulunduğu basamak ile çarpımı o rakamın basamak değeridir.' },
        { title: 'Sayı ve Basamak Değeri',
          signTable: {
            headers: ['Basamak', 'On Binler', 'Binler', 'Yüzler', 'Onlar', 'Birler'],
            rows: [
              ['Sayı değeri', 'a', 'b', 'c', 'd', 'e'],
              ['Basamak değeri', 'a · 10000', 'b · 1000', 'c · 100', 'd · 10', 'e · 1']
            ]
          },
          tip: 'Sayı değeri rakamın kendisidir; basamak değeri rakamın bulunduğu basamağa göre aldığı değerdir.' },
        { title: 'Çözümleme',
          formula: '\\overline{abcde}=10000a+1000b+100c+10d+e',
          tip: 'Bir sayının basamak değerlerinin toplamı şeklinde yazılmasına çözümleme denir.' },
        { type: 'warning',
          text: '•  Bir tam sayının sonuna eklenen bir sıfır, sayının değerini 10 katına çıkarır.\n\n•  Basamak sayısı belli olan bir sayının ilk basamağındaki rakam 0 olamaz.\n\n•  AB + BA = 11 · (A + B)\n\n   AB - BA = 9 · (A - B)\n\n•  ABCDE beş basamaklı bir sayı olmak üzere;\n\n        ABCDE = AB000 + CDE = 1000 · AB + CDE\n\n              = ABC00 + DE = 100 · ABC + DE\n\n              = ABCD0 + E = 10 · ABCD + E\n\n   şeklinde yazılabilir.' }
      ]
    },
    examples: [
      { question: '4275 sayısını çözümleyelim.',
        steps: [
          '4275=4\\cdot1000+2\\cdot100+7\\cdot10+5',
          '4275=4000+200+70+5'
        ],
        answer: '4000+200+70+5' }
    ],
    quiz: [
      { q: '583 sayısında 5’in basamak değeri kaçtır?', opt: ['5','50','500','583'], a: 2, e: '5 yüzler basamağında olduğu için basamak değeri 500’dür.' },
      { q: '583 sayısında 5’in sayı değeri kaçtır?', opt: ['5','50','500','583'], a: 0, e: 'Sayı değeri rakamın kendisidir.' },
      { q: 'AB iki basamaklı sayısının çözümlemesi hangisidir?', opt: ['A + B','10A + B','A + 10B','100A + B'], a: 1, e: 'AB = 10A + B şeklinde çözümlenir.' },
      { q: 'Bir doğal sayının sonuna bir sıfır eklenirse değeri nasıl değişir?', opt: ['10 katına çıkar','2 katına çıkar','1 azalır','Değişmez'], a: 0, e: 'Sona eklenen sıfır sayı değerini 10 katına çıkarır.' },
      { q: 'Basamak sayısı belli olan doğal sayının ilk basamağı ne olamaz?', opt: ['1','5','9','0'], a: 3, e: 'İlk basamak 0 olursa sayı daha az basamaklı olur.' },
      { q: 'AB + BA toplamı neye eşittir?', opt: ['9(A+B)','10(A+B)','11(A+B)','A-B'], a: 2, e: 'AB + BA = 10A+B+10B+A = 11(A+B).' },
      { q: 'AB - BA farkı neye eşittir?', opt: ['9(A-B)','11(A-B)','A+B','10A-B'], a: 0, e: 'AB - BA = 10A+B-(10B+A)=9(A-B).' },
      { q: 'Bir rakamın bulunduğu yere ne denir?', opt: ['Basamak','Kalan','Bölüm','Ortak fark'], a: 0, e: 'Rakamın bulunduğu yer basamaktır.' },
      { q: 'Bir rakamın kendisine ne denir?', opt: ['Basamak değeri','Sayı değeri','Terim sayısı','Kalan'], a: 1, e: 'Sayı değeri rakamın kendisidir.' },
      { q: '438 sayısında 4’ün basamak değeri kaçtır?', opt: ['4','40','400','438'], a: 2, e: '4 yüzler basamağında olduğu için basamak değeri 400’dür.' },
      { q: '438 sayısında 3’ün basamak değeri kaçtır?', opt: ['3','30','300','400'], a: 1, e: '3 onlar basamağında olduğu için basamak değeri 30’dur.' },
      { q: '438 sayısında 8’in sayı değeri kaçtır?', opt: ['8','80','800','438'], a: 0, e: 'Sayı değeri rakamın kendisidir.' },
      { q: 'abc üç basamaklı sayısının çözümlemesi hangisidir?', opt: ['a + b + c','100a + 10b + c','10a + 100b + c','1000a + 100b + c'], a: 1, e: 'abc = 100a + 10b + c şeklinde çözümlenir.' },
      { q: 'abcd dört basamaklı sayısının çözümlemesi hangisidir?', opt: ['1000a + 100b + 10c + d','100a + 10b + c + d','10a + 100b + 1000c + d','a + b + c + d'], a: 0, e: 'abcd = 1000a + 100b + 10c + d olur.' },
      { q: 'abcde beş basamaklı sayısında c hangi basamaktadır?', opt: ['Birler','Onlar','Yüzler','Binler'], a: 2, e: 'abcde sayısında c yüzler basamağıdır.' },
      { q: 'abcde beş basamaklı sayısında b hangi basamaktadır?', opt: ['On binler','Binler','Yüzler','Onlar'], a: 1, e: 'abcde sayısında b binler basamağıdır.' },
      { q: 'abcde beş basamaklı sayısında a hangi basamaktadır?', opt: ['On binler','Binler','Yüzler','Birler'], a: 0, e: 'abcde sayısında a on binler basamağıdır.' },
      { q: 'Bir tam sayının sonuna iki sıfır eklenirse değeri kaç katına çıkar?', opt: ['10','20','100','1000'], a: 2, e: 'Her sıfır 10 kat yapar; iki sıfır 100 katına çıkarır.' },
      { q: 'Basamak sayısı belli olan üç basamaklı doğal sayının yüzler basamağı ne olamaz?', opt: ['0','1','5','9'], a: 0, e: 'İlk basamak 0 olursa sayı üç basamaklı olmaz.' },
      { q: '47 sayısının rakamları yer değiştirirse hangi sayı oluşur?', opt: ['47','74','11','40'], a: 1, e: '47 sayısında rakamlar yer değiştirince 74 oluşur.' },
      { q: '36 + 63 toplamı kaçtır?', opt: ['88','99','108','121'], a: 1, e: '36 + 63 = 99; ayrıca AB + BA = 11(A+B) = 11·9 = 99.' },
      { q: '47 + 74 toplamı kaçtır?', opt: ['101','111','121','131'], a: 2, e: '47 + 74 = 121; ayrıca AB + BA = 11(A+B) = 11·11 = 121.' },
      { q: '74 - 47 farkı kaçtır?', opt: ['18','27','36','45'], a: 1, e: '74 - 47 = 27; ayrıca AB - BA = 9(A-B) biçimi kullanılır.' },
      { q: 'ABCDE sayısı 1000·AB + CDE biçiminde ayrılırken AB hangi kısmı temsil eder?', opt: ['İlk iki basamağı','Son iki basamağı','Son üç basamağı','Yalnız birler basamağını'], a: 0, e: 'AB sayının ilk iki basamağını, CDE son üç basamağını temsil eder.' },
      { q: 'Sayı değeri ile basamak değeri için hangisi doğrudur?', opt: ['Her zaman aynıdır','Basamak değeri rakamın bulunduğu yere bağlıdır','Sayı değeri basamağa göre değişir','Basamak değeri yalnız birler için vardır'], a: 1, e: 'Basamak değeri rakamın bulunduğu basamağa göre değişir.' }
    ]
  }),

  F(7, 1, 'Asal ve Aralarında Asal Sayılar', 2, 7, {
    summary: 'Asal sayılar yalnızca 1 ve kendisine bölünür; aralarında asal sayılarda ortak pozitif bölen yalnızca 1’dir.',
    theory: {
      rules: [
        { title: 'Asal Sayılar',
          formula: 'p>1,\\quad \\text{pozitif bölenleri }1\\text{ ve }p',
          tip: '1 ve kendisinden başka pozitif böleni olmayan 1’den büyük tam sayılara asal sayılar denir. Asal sayılar 2, 3, 5, 7, 11, 13, ... şeklinde devam eder.\n• 2 sayısı en küçük asal sayıdır ve 2’den başka çift asal sayı yoktur.\n• Negatif asal sayı yoktur.\n• Ardışık tam sayı olan asal sayılar sadece 2 ve 3’tür.' },
        { title: 'Aralarında Asal Sayılar',
          formula: '\\text{EBOB}(a,b)=1',
          tip: '1’den başka pozitif ortak böleni olmayan pozitif tam sayılara aralarında asal sayılar denir.\n• 1 ile bütün pozitif tam sayılar aralarında asaldır.\n• Aralarında asal sayılar asal olmayabilirler.\n• Ardışık tam sayılar aralarında asaldır.\n• Ardışık tek tam sayılar aralarında asaldır.\n• Ardışık çift tam sayılar 2’ye bölündükleri için aralarında asal değillerdir.' }
      ]
    },
    examples: [
      { question: 'a, b ve c asal sayılardır. a^(2b-2c) = 121 eşitliği veriliyor. Buna göre a + b · c ifadesinin değerini bulunuz.',
        questionBlocks: [
          'a, b ve c asal sayılardır.',
          { tex: 'a^{2b-2c}=121' },
          'eşitliği veriliyor.',
          'Buna göre a + b · c ifadesinin değerini bulunuz.'
        ],
        steps: [
          'a^{2b-2c}=121',
          'a^{2b-2c}=11^2',
          'a=11\\;\\text{ ve }\\;2b-2c=2',
          'b-c=1',
          { text: 'Aralarındaki fark 1’e eşit olan asal sayılar sadece 2 ve 3’tür.' },
          'b=3\\;\\text{ ve }\\;c=2',
          'a+b\\cdot c=11+2\\cdot3=17'
        ],
        answer: '17' },
      { question: '2a + 3b ile 2a - 3b aralarında asal sayılar olmak üzere 22 · (2a - 3b) = 18 · (2a + 3b) eşitliği veriliyor. Buna göre a değerini bulunuz.',
        steps: [
          { text: '22 · (2a - 3b) = 18 · (2a + 3b)' },
          { text: '11 · (2a - 3b) = 9 · (2a + 3b)' },
          { text: 'Buradan 2a + 3b = 11 ve 2a - 3b = 9’dur.' },
          { text: '  2a + 3b = 11\n+ 2a - 3b = 9' },
          { text: '4a = 20' },
          { text: 'a = 5 bulunur.' }
        ],
        answer: 'a=5' }
    ],
    quiz: [
      { q: '1 ve kendisinden başka pozitif böleni olmayan 1’den büyük tam sayılara ne denir?', opt: ['Çift sayı','Asal sayı','Tam sayı','Rasyonel sayı'], a: 1, e: 'Bu tanım asal sayıya aittir.' },
      { q: 'En küçük asal sayı hangisidir?', opt: ['0','1','2','3'], a: 2, e: '2 en küçük asal sayıdır.' },
      { q: 'Tek çift asal sayı hangisidir?', opt: ['1','2','4','6'], a: 1, e: '2 hem çift hem asaldır.' },
      { q: 'Aşağıdakilerden hangisi asal değildir?', opt: ['3','5','9','11'], a: 2, e: '9 = 3 · 3 olduğu için asal değildir.' },
      { q: 'Aralarında asal iki sayının ortak pozitif böleni hangisidir?', opt: ['Yalnız 1','Yalnız 2','Yalnız 3','Sayıların toplamı'], a: 0, e: 'Aralarında asal sayıların ortak pozitif böleni yalnızca 1’dir.' },
      { q: '8 ve 9 için hangisi doğrudur?', opt: ['İkisi de asaldır','Aralarında asaldır','İkisi de çifttir','Ortak bölenleri 3’tür'], a: 1, e: '8 ve 9’un 1’den başka ortak pozitif böleni yoktur.' },
      { q: 'Ardışık çift tam sayılar neden aralarında asal değildir?', opt: ['İkisi de 2’ye bölünür','İkisi de asaldır','Toplamları tektir','Farkları 1’dir'], a: 0, e: 'Ardışık çift tam sayıların ortak böleni 2’dir.' },
      { q: 'Ardışık olup ikisi de asal olan sayılar hangileridir?', opt: ['1 ve 2','2 ve 3','3 ve 4','5 ve 6'], a: 1, e: '2 ve 3 ardışık ve asaldır.' },
      { q: '1 asal sayı mıdır?', opt: ['Evet','Hayır','Sadece pozitiftir','Sadece çifttir'], a: 1, e: '1’in pozitif bölenleri yalnız 1 olduğu için asal sayı değildir.' },
      { q: 'Negatif asal sayı var mıdır?', opt: ['Vardır','Yoktur','Yalnız -2 vardır','Yalnız -1 vardır'], a: 1, e: 'Asal sayılar pozitif tam sayılar içinde tanımlanır.' },
      { q: 'Aşağıdakilerden hangisi asal sayıdır?', opt: ['15','21','29','35'], a: 2, e: '29’un 1 ve 29 dışında pozitif böleni yoktur.' },
      { q: '25 sayısı neden asal değildir?', opt: ['Negatif olduğu için','1’den küçük olduğu için','5 · 5 şeklinde yazıldığı için','Çift olduğu için'], a: 2, e: '25’in 1 ve 25 dışında 5 böleni de vardır; bu yüzden asal değildir.' },
      { q: '2 sayısı için hangisi doğrudur?', opt: ['Tek asaldır','Çift asaldır','Asal değildir','Negatiftir'], a: 1, e: '2 tek çift asal sayıdır.' },
      { q: 'Aralarında asal iki sayı için EBOB değeri kaçtır?', opt: ['0','1','2','Sayıların çarpımı'], a: 1, e: 'Aralarında asal sayıların EBOB’u 1’dir.' },
      { q: '12 ve 25 sayıları için hangisi doğrudur?', opt: ['Aralarında asal değildir','Aralarında asaldır','İkisi de asaldır','Ortak bölenleri 5’tir'], a: 1, e: '12 ve 25’in 1’den başka ortak pozitif böleni yoktur.' },
      { q: '14 ve 21 sayıları aralarında asal mıdır?', opt: ['Evet','Hayır','Yalnız 14 asaldır','Yalnız 21 asaldır'], a: 1, e: '14 ve 21’in ortak böleni 7’dir.' },
      { q: '15 ve 16 sayıları neden aralarında asaldır?', opt: ['İkisi de asal olduğu için','Ardışık tam sayılar olduğu için','İkisi de tek olduğu için','İkisi de çift olduğu için'], a: 1, e: 'Ardışık tam sayılar aralarında asaldır.' },
      { q: '21 ve 23 ardışık tek sayıları için hangisi doğrudur?', opt: ['Aralarında asaldır','İkisi de asaldır','Ortak bölenleri 3’tür','Ortak bölenleri 7’dir'], a: 0, e: 'Ardışık tek tam sayılar aralarında asaldır.' },
      { q: '10 ve 12 ardışık çift sayıları neden aralarında asal değildir?', opt: ['İkisi de 2’ye bölünür','İkisi de asaldır','Farkları 2 olduğu için asaldır','Toplamları tektir'], a: 0, e: 'Her ikisi de 2’ye bölündüğünden ortak bölenleri 2’dir.' },
      { q: '1 ile 18 sayıları için hangisi doğrudur?', opt: ['Aralarında asaldır','Ortak bölenleri 18’dir','18 asal olmalıdır','Aralarında asal değildir'], a: 0, e: '1 ile tüm pozitif tam sayılar aralarında asaldır.' },
      { q: 'Aralarında asal sayılar için hangisi kesin değildir?', opt: ['EBOB’ları 1’dir','Ortak pozitif bölenleri yalnız 1’dir','İkisi de asal olmak zorundadır','8 ve 9 örnek olabilir'], a: 2, e: 'Aralarında asal sayıların ayrı ayrı asal olması gerekmez.' },
      { q: '6 ve 35 sayıları aralarında asal mıdır?', opt: ['Evet','Hayır','Yalnız 6 asaldır','Yalnız 35 asaldır'], a: 0, e: '6’nın asal bölenleri 2 ve 3, 35’in asal bölenleri 5 ve 7’dir; ortak bölen yoktur.' },
      { q: '18 ve 35 sayıları için hangisi doğrudur?', opt: ['Aralarında asaldır','Ortak bölenleri 5’tir','Ortak bölenleri 7’dir','İkisi de asaldır'], a: 0, e: '18 = 2·3², 35 = 5·7; ortak pozitif bölenleri yalnız 1’dir.' },
      { q: '27 ve 45 sayıları aralarında asal mıdır?', opt: ['Evet','Hayır','Yalnız 27 asaldır','Yalnız 45 asaldır'], a: 1, e: '27 ve 45’in ortak böleni 9’dur.' },
      { q: 'Ardışık tam sayılardan ikisi de asal olan tek çift hangisidir?', opt: ['2 ve 3','3 ve 4','5 ve 6','7 ve 8'], a: 0, e: 'Ardışık iki asal sayı yalnız 2 ve 3 olabilir.' }
    ]
  }),

  F(8, 1, 'Tam Sayılarda Kalanlı Bölme', 2, 7, {
    summary: 'Kalanlı bölmede bölünen, bölen, bölüm ve kalan arasında A = B · C + K bağıntısı vardır.',
    theory: {
      rules: [
        { title: 'Bölme Algoritması',
          divisionVisual: 'parts',
          tip: 'B ≠ 0 ve A, B, C, K ∈ N olmak üzere bölme işleminde A bölünen, B bölen, C bölüm ve K kalandır.' },
        { title: 'Bölme İşleminde',
          formula: 'A=B\\cdot C+K,\\quad 0\\leq K<B',
          tip: 'Bölünen = Bölen · Bölüm + Kalan (A = B · C + K)\nKalan sayı K olmak üzere; 0 ≤ K < B olmalıdır.\nKalan 0 ise A sayısı B sayısına tam bölünür.' },
        { type: 'warning',
          divisionVisual: 'swap',
          textBeforeVisual: '• Kalan sayı, bölümden küçük ise bölme işleminde bölen ile bölüm yer değiştirildiğinde kalan değişmez.\n\n• Bölünen sayı ile bölen sayı bir k pozitif tam sayısının katı ise kalan sayı da k sayısının katı olmalıdır.',
          textAfterVisual: '• x ≠ 0 ve M, N, m, n, a ∈ N olmak üzere şekildeki gibi birden fazla bölme işlemi verildiğinde bu bölme işlemleri denklem şeklinde yazılır.\n\nA = B · C + K\nB = D · E + F\n\nElde edilen denklem sisteminde yerine koyma yöntemi kullanılarak A’nın C cinsinden değeri elde edilir.' },
        { title: 'Kalan İşlemleri',
          plainFormula: 'M ve N pozitif tam sayılarının x pozitif tam sayısına bölümünden kalanlar sırasıyla m ve n olsun.\n• M + N ifadesinin x ile bölümünden kalan, m + n’nin x ile bölümünden kalana eşit olur.\n• M · N ifadesinin x ile bölümünden kalan, m · n’nin x ile bölümünden kalana eşit olur.\n• M - N ifadesinin x ile bölümünden kalan, m - n’nin x ile bölümünden kalana eşit olur.\n• Mᵃ ifadesinin x ile bölümünden kalan, mᵃ’nın x ile bölümünden kalana eşit olur.',
          tip: 'Büyük ifadelerde sayının kendisi yerine bölümden kalanıyla işlem yapmak yeterlidir.' }
      ]
    },
    examples: [
      { question: '57 sayısının 8 ile bölümünde bölüm ve kalan kaçtır?',
        steps: [
          '57=8\\cdot7+1',
          { text: 'Bu eşitlikte 57 bölünen, 8 bölen, 7 bölüm ve 1 kalandır.' },
          { text: 'Kalan 1, bölen 8’den küçüktür; bu yüzden bölme işlemi uygundur.' }
        ],
        answer: '\\text{Bölüm }7,\\;\\text{kalan }1' },
      { question: 'A sayısının 17 ile bölümünden kalan 4, B sayısının 17 ile bölümünden kalan 3’tür. Buna göre A² + AB - 2B ifadesinin 17 ile bölümünden kalanı bulunuz.',
        steps: [
          'A^2+A\\cdot B-2\\cdot B=4^2+4\\cdot3-2\\cdot3',
          '16+12-6=22',
          { text: '22’nin 17 ile bölümünden kalan 5 olur.' }
        ],
        answer: '5' },
      { question: '45 sayısı 12’ye bölündüğünde kalan neden 3’ün katıdır?',
        steps: [
          { text: '45 ve 12 sayıları 3’ün katıdır.' },
          '45=12\\cdot3+9',
          { text: 'Kalan 9’dur ve 9 da 3’ün katıdır.' },
          { text: 'Bölünen ve bölen k pozitif tam sayısının katı ise kalan da k’nin katı olmalıdır.' }
        ],
        answer: '9' },
      { question: 'A’nın 7 ile bölümünden kalan 4, B’nin 7 ile bölümünden kalan 3 ise A² + A · B - 2B ifadesinin 7 ile bölümünden kalanı bulalım.',
        steps: [
          'A\\equiv4\\pmod{7},\\quad B\\equiv3\\pmod{7}',
          'A^2+A\\cdot B-2B\\equiv4^2+4\\cdot3-2\\cdot3',
          '16+12-6=22',
          { text: '22’nin 7 ile bölümünden kalan 1’dir.' }
        ],
        answer: '1' }
    ],
    quiz: [
      { q: 'Kalanlı bölmede temel bağıntı hangisidir?', opt: ['A = B + C + K','A = B · C + K','K = A · B','C = A + B'], a: 1, e: 'Bölme algoritması A = B · C + K şeklindedir.' },
      { q: 'Kalan için hangi koşul doğrudur?', opt: ['K > B','K = B','0 ≤ K < B','K < 0'], a: 2, e: 'Kalan sıfırdan küçük olamaz ve bölen sayıdan küçük olmalıdır.' },
      { q: 'Kalan 0 ise ne söylenir?', opt: ['Tam bölünür','Bölünmez','Bölen sıfırdır','Bölüm sıfırdır'], a: 0, e: 'Kalan 0 olduğunda bölme kalansızdır.' },
      { q: '23 sayısının 5 ile bölümünden kalan kaçtır?', opt: ['1','2','3','4'], a: 2, e: '23 = 5 · 4 + 3 olduğu için kalan 3’tür.' },
      { q: 'A ≡ 2 mod 5 ve B ≡ 3 mod 5 ise A + B kalan kaçtır?', opt: ['0','1','2','3'], a: 0, e: '2 + 3 = 5 olduğundan 5 ile bölümünden kalan 0’dır.' },
      { q: 'A ≡ 4 mod 7 ise A²’nin 7 ile bölümünden kalan kaçtır?', opt: ['1','2','3','4'], a: 1, e: '4² = 16 ve 16’nın 7 ile bölümünden kalan 2’dir.' },
      { q: 'Bölünen ve bölen 3’ün katıysa kalan için ne söylenir?', opt: ['3’ün katı olmalıdır','Daima 1’dir','Daima 2’dir','Negatif olur'], a: 0, e: 'PDF’de bu durumda kalanın da aynı k sayısının katı olması gerektiği belirtilir.' },
      { q: 'A = B · C + K bağıntısında A neyi gösterir?', opt: ['Bölen','Bölüm','Bölünen','Kalan'], a: 2, e: 'Bölme algoritmasında A bölünendir.' },
      { q: 'A = B · C + K bağıntısında B neyi gösterir?', opt: ['Bölen','Bölüm','Bölünen','Kalan'], a: 0, e: 'Bölme algoritmasında B bölen sayıdır.' },
      { q: 'A = B · C + K bağıntısında C neyi gösterir?', opt: ['Bölen','Bölüm','Bölünen','Kalan'], a: 1, e: 'Bölme algoritmasında C bölümdür.' },
      { q: 'A = B · C + K bağıntısında K neyi gösterir?', opt: ['Bölen','Bölüm','Bölünen','Kalan'], a: 3, e: 'K kalan sayıdır.' },
      { q: 'Bir sayının 6 ile bölümünde kalan en fazla kaç olabilir?', opt: ['4','5','6','7'], a: 1, e: 'Kalan bölen sayıdan küçük olmalıdır; 6 için en büyük kalan 5’tir.' },
      { q: 'Bir sayının 9 ile bölümünde kalan aşağıdakilerden hangisi olamaz?', opt: ['0','4','8','9'], a: 3, e: 'Kalan 9 olamaz; kalan 0 ile 8 arasında olmalıdır.' },
      { q: '47 sayısının 6 ile bölümünden kalan kaçtır?', opt: ['3','4','5','6'], a: 2, e: '47 = 6 · 7 + 5 olduğundan kalan 5’tir.' },
      { q: '58 sayısının 7 ile bölümünden kalan kaçtır?', opt: ['1','2','3','4'], a: 1, e: '58 = 7 · 8 + 2 olduğundan kalan 2’dir.' },
      { q: 'A sayısının 5 ile bölümünden kalan 4 ise A + 3 için kalan kaçtır?', opt: ['0','1','2','3'], a: 2, e: '4 + 3 = 7 ve 7’nin 5 ile bölümünden kalan 2’dir.' },
      { q: 'A ≡ 3 mod 8 ise A + 5’in 8 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 0, e: '3 + 5 = 8 olduğundan kalan 0’dır.' },
      { q: 'A ≡ 6 mod 10 ise A - 4’ün 10 ile bölümünden kalan kaçtır?', opt: ['1','2','4','6'], a: 1, e: '6 - 4 = 2 olduğundan kalan 2’dir.' },
      { q: 'A ≡ 3 mod 7 ve B ≡ 5 mod 7 ise A · B kalan kaçtır?', opt: ['1','2','3','4'], a: 0, e: '3 · 5 = 15 ve 15’in 7 ile bölümünden kalan 1’dir.' },
      { q: 'A ≡ 2 mod 9 ise A³’ün 9 ile bölümünden kalan kaçtır?', opt: ['2','4','8','9'], a: 2, e: '2³ = 8 olduğundan kalan 8’dir.' },
      { q: 'A ≡ 5 mod 6 ise 2A’nın 6 ile bölümünden kalan kaçtır?', opt: ['2','3','4','5'], a: 2, e: '2 · 5 = 10 ve 10’un 6 ile bölümünden kalan 4’tür.' },
      { q: 'Kalan sayı bölümden küçükse bölen ile bölüm yer değiştirildiğinde ne olur?', opt: ['Kalan değişmez','Kalan daima 0 olur','Bölünen değişir','Bölme yapılamaz'], a: 0, e: 'Verilen özel bilgiye göre kalan değişmez.' },
      { q: 'Bölünen ve bölen 4’ün katıysa kalan için hangisi söylenebilir?', opt: ['4’ün katı olmalıdır','Daima 1 olmalıdır','Negatif olmalıdır','Bölenden büyük olmalıdır'], a: 0, e: 'Bölünen ve bölen k’nin katıysa kalan da k’nin katı olmalıdır.' },
      { q: 'Kalanlı bölmede kalan negatif olabilir mi?', opt: ['Evet','Hayır','Yalnız bölen negatifse','Yalnız bölüm sıfırsa'], a: 1, e: 'Kalan 0 ≤ K < B koşulunu sağlamalıdır.' },
      { q: 'A’nın 4 ile bölümünden kalan 3 ise A²’nin 4 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 1, e: '3² = 9 ve 9’un 4 ile bölümünden kalan 1’dir.' }
    ]
  }),

  F(9, 1, 'Bölünebilme Kuralları 1', 2, 8, {
    summary: '2, 3, 4, 5, 8, 9, 10 ve 11 ile bölünebilme basamaklara bakılarak hızlıca anlaşılır.',
    theory: {
      rules: [
        { title: '2 ile Bölünebilme',
          formula: '\\text{Birler basamağı çift}\\Rightarrow 2\\text{ ile tam bölünür}',
          tip: 'Bir doğal sayının birler basamağındaki rakam çift ise bu sayı 2 ile tam bölünür. Bir doğal sayı 2 ile tam bölünemiyor ise o sayının 2 ile bölümünden kalan 1 olur.' },
        { title: '3 ile Bölünebilme',
          formula: '\\text{Rakamlar toplamı }3\\text{ün katı}',
          tip: 'Bir doğal sayının rakamları toplamı 3’ün katı ise bu sayı 3 ile tam bölünür. Bir sayının 3 ile bölümünden kalan, rakamları toplamının 3 ile bölümünden kalana eşittir.' },
        { title: '4 ile Bölünebilme',
          formula: '\\text{Son iki basamak }4\\text{ün katı}',
          tip: 'Bir doğal sayının son iki basamağını oluşturan iki basamaklı sayı 4’ün bir katı ise bu sayı 4 ile tam bölünür. Bir sayının 4 ile bölümünden kalan, son iki basamağını oluşturan iki basamaklı sayının 4 ile bölümünden kalana eşittir.' },
        { title: '5 ile Bölünebilme',
          formula: '\\text{Birler basamağı }0\\text{ ya da }5',
          tip: 'Bir doğal sayının birler basamağındaki rakam 0 ya da 5 ise bu sayı 5 ile tam bölünür. Bir sayının 5 ile bölümünden kalan, son basamağındaki rakamın 5 ile bölümünden kalana eşittir.' },
        { title: '8 ile Bölünebilme',
          formula: '\\text{Son üç basamak }8\\text{in katı}',
          tip: 'Bir doğal sayının son üç basamağını oluşturan üç basamaklı sayı 8’in katı ise bu sayı 8 ile tam bölünür. Bir sayının 8 ile bölümünden kalan, son üç basamağını oluşturan üç basamaklı sayının 8 ile bölümünden kalana eşittir.' },
        { title: '9 ile Bölünebilme',
          formula: '\\text{Rakamlar toplamı }9\\text{un katı}',
          tip: 'Bir doğal sayının rakamları toplamı 9’un katı ise bu sayı 9 ile tam bölünür. Bir sayının 9 ile bölümünden kalan, rakamları toplamının 9 ile bölümünden kalana eşittir.' },
        { title: '10 ile Bölünebilme',
          formula: '\\text{Birler basamağı }0',
          tip: 'Bir doğal sayının birler basamağındaki rakam 0 ise bu sayı 10 ile tam bölünür. Sayının birler basamağındaki rakam 0’dan farklı ise sayının 10 ile bölümünden kalan o rakam olur.' },
        { title: '11 ile Bölünebilme',
          formula: '+\\;-\\;+\\;-\\;+',
          tip: 'Bir doğal sayının 11 ile tam bölünebilmesi için sayının rakamları sağdan sola doğru +, -, +, - ile işaretlenerek toplanır. Bu toplam 11’in katı ise sayı 11 ile tam bölünür.' },
        { title: 'Beş Basamaklı Sayıda 11 Kalanı',
          formula: '\\overline{abcde}:\\quad a+c+e-(b+d)',
          tip: 'Beş basamaklı abcde sayısının 11 ile kalanını bulmak için rakamlar + - + - + şeklinde işaretlenir. a + c + e - (b + d) işleminin sonucu 11’e bölünür, çıkan sonuç kalanı verir.' },
        { type: 'warning',
          text: '11 ile bölünebilme kuralı incelenirken sonuç negatif çıkarsa, çıkan sonuca 11’in katları eklenip kalan bulunur.' },
        { type: 'warning',
          text: 'Birden fazla bölünebilme kuralının uygulanması gereken sorularda önce varsa birler basamağı ile ilgili kurala, ardından son iki basamakla ilgili kurala, ardından son üç basamakla ilgili kurala, daha sonra da tüm basamaklarla ilgili kurala bakılır.' },
        { title: 'Bölenlerine Bölünebilme',
          plainFormula: '• A sayısı bir k sayısına bölünüyorsa, k’nin bütün bölenlerine de tam bölünür.\nÖrnek: 12’nin katı olan sayılar 2’nin, 3’ün, 4’ün ve 6’nın da katıdır.',
          tip: 'Bir sayının bölündüğü sayının pozitif bölenleri de o sayıyı böler.' }
      ]
    },
    examples: [
      { question: '34967 sayısının bölme kalanlarını bulalım.',
        steps: [
          { text: '2 ile bölümünden kalan: 7 tek sayı olduğundan 1’dir.' },
          { text: '3 ile bölümünden kalan: 3 + 4 + 9 + 6 + 7 = 29 ve 29’un 3 ile bölümünden kalan 2 olduğundan 2’dir.' },
          { text: '4 ile bölümünden kalan: son iki basamağı 67’nin 4 ile bölümünden kalan 3 olduğundan 3’tür.' },
          { text: '5 ile bölümünden kalan: birler basamağı 7’nin 5 ile bölümünden kalan 2 olduğundan 2’dir.' },
          { text: '8 ile bölümünden kalan: son üç basamağı 967’nin 8 ile bölümünden kalan 7 olduğundan 7’dir.' },
          { text: '9 ile bölümünden kalan: 3 + 4 + 9 + 6 + 7 = 29 ve 29’un 9 ile bölümünden kalan 2 olduğundan 2’dir.' },
          { text: '10 ile bölümünden kalan: birler basamağı 7 olduğundan 7’dir.' },
          { text: '11 ile bölümünden kalan: 34967 → (3 + 9 + 7) - (4 + 6) = 9 olduğundan 9’dur.' }
        ],
        answer: '\\text{Kalanlar: }2\\to1,\\;3\\to2,\\;4\\to3,\\;5\\to2,\\;8\\to7,\\;9\\to2,\\;10\\to7,\\;11\\to9' }
    ],
    quiz: [
      { q: 'Bir sayının 2 ile bölünebilmesi için ne gerekir?', opt: ['Rakamlar toplamı çift olmalı','Son basamağı çift olmalı','Son iki basamağı 2 olmalı','İlk basamağı çift olmalı'], a: 1, e: '2 ile bölünebilme son basamağın çift olmasına bağlıdır.' },
      { q: 'Bir sayının 3 ile bölünebilmesi için neye bakılır?', opt: ['Son basamağa','Son iki basamağa','Rakamlar toplamına','İlk basamağa'], a: 2, e: 'Rakamlar toplamı 3’ün katı ise sayı 3’e bölünür.' },
      { q: '4 ile bölünebilmede hangi basamaklar belirleyicidir?', opt: ['Son iki basamak','Son üç basamak','İlk iki basamak','Rakamlar toplamı'], a: 0, e: 'Son iki basamak 4’ün katıysa sayı 4’e bölünür.' },
      { q: '5 ile bölünebilen sayının son basamağı hangilerinden biri olmalıdır?', opt: ['0 veya 2','0 veya 5','5 veya 9','1 veya 5'], a: 1, e: '5 ile bölünebilme için son basamak 0 veya 5 olmalıdır.' },
      { q: '8 ile bölünebilmede neye bakılır?', opt: ['Son basamak','Son iki basamak','Son üç basamak','Rakamlar toplamı'], a: 2, e: 'Son üç basamak 8’in katıysa sayı 8’e bölünür.' },
      { q: '9 ile bölünebilme için hangi koşul gerekir?', opt: ['Son basamak 9 olmalı','Rakamlar toplamı 9’un katı olmalı','Sayı çift olmalı','Son iki basamak 09 olmalı'], a: 1, e: 'Rakamlar toplamı 9’un katı ise sayı 9’a bölünür.' },
      { q: '10 ile bölümünden kalan hangi bilgiyle bulunur?', opt: ['Son basamak','İlk basamak','Rakamlar toplamı','Son üç basamak'], a: 0, e: '10 ile bölüm kalanı son basamaktır.' },
      { q: '11 ile bölünebilmede hangi yöntem kullanılır?', opt: ['Son basamak','Son iki basamak','Almaşık toplam','Rakamların çarpımı'], a: 2, e: 'Sağdan sola +, -, +, - işaretleriyle almaşık toplam alınır.' },
      { q: '246 sayısı 2 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 3 ile','Yalnız 5 ile'], a: 0, e: 'Son basamağı 6 olduğu için 246 sayısı 2 ile bölünebilir.' },
      { q: '135 sayısı 5 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 2 ile','Yalnız 4 ile'], a: 0, e: 'Son basamağı 5 olduğu için 5 ile bölünebilir.' },
      { q: '720 sayısı 10 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 5 ile','Yalnız 9 ile'], a: 0, e: 'Son basamağı 0 olan sayılar 10 ile bölünebilir.' },
      { q: '347 sayısının 2 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 1, e: 'Son basamak 7 tek olduğu için 2 ile bölümünden kalan 1’dir.' },
      { q: '34967 sayısının 5 ile bölümünden kalan kaçtır?', opt: ['0','1','2','4'], a: 2, e: '5 ile bölüm kalanı son basamağın 5 ile bölümünden kalanıdır; 7 kalan 2 verir.' },
      { q: '123 sayısı 3 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 9 ile','Yalnız 4 ile'], a: 0, e: 'Rakamlar toplamı 1+2+3=6, 3’ün katıdır.' },
      { q: '124 sayısının 3 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 1, e: 'Rakamlar toplamı 7’dir; 7’nin 3 ile bölümünden kalan 1’dir.' },
      { q: '729 sayısı 9 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 3 ile','Yalnız 10 ile'], a: 0, e: 'Rakamlar toplamı 18 olduğundan 9 ile bölünebilir.' },
      { q: '728 sayısının 9 ile bölümünden kalan kaçtır?', opt: ['0','2','7','8'], a: 3, e: 'Rakamlar toplamı 17’dir; 17’nin 9 ile bölümünden kalan 8’dir.' },
      { q: '316 sayısı 4 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 8 ile','Yalnız 3 ile'], a: 0, e: 'Son iki basamak 16, 4’ün katıdır.' },
      { q: '318 sayısının 4 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 2, e: 'Son iki basamak 18’dir; 18’in 4 ile bölümünden kalan 2’dir.' },
      { q: '1000 sayısı 8 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 4 ile','Yalnız 9 ile'], a: 0, e: 'Son üç basamak 000 olduğundan 8 ile bölünebilir.' },
      { q: '1234 sayısının 8 ile bölümünden kalan için hangi kısma bakılır?', opt: ['Son basamak 4','Son iki basamak 34','Son üç basamak 234','Rakamlar toplamı'], a: 2, e: '8 ile bölüm kalanı son üç basamağa göre bulunur.' },
      { q: 'Bir sayı 10 ile bölünebiliyorsa hangi sayıyla kesin bölünebilir?', opt: ['2','3','9','11'], a: 0, e: '10 ile bölünebilen sayı, 10’un pozitif böleni olan 2 ile de bölünebilir.' },
      { q: '11 kuralında almaşık toplam negatif çıkarsa ne yapılır?', opt: ['Sonuç atılır','11’in katı eklenerek kalan bulunur','Sayı 11’e bölünmez denir','Son basamağa bakılır'], a: 1, e: 'Negatif sonuçta 11’in katı eklenerek pozitif kalan elde edilir.' },
      { q: '352 sayısı 11 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 3 ile','Yalnız 5 ile'], a: 0, e: 'Sağdan sola 2 - 5 + 3 = 0 olduğundan 11 ile bölünebilir.' },
      { q: '1267 sayısının 4 ile bölümünden kalan kaçtır?', opt: ['0','1','2','3'], a: 3, e: '4 ile bölüm kalanı son iki basamak olan 67’nin 4 ile bölümünden kalanıdır; kalan 3’tür.' }
    ]
  }),

  F(10, 1, 'Bölünebilme Kuralları 2', 3, 8, {
    summary: 'Aralarında asal bölenlere ayrı ayrı bölünebilen doğal sayı, bu bölenlerin çarpımına da bölünür.',
    theory: {
      rules: [
        { title: 'Aralarında Asal Sayıların Çarpımı ile Oluşan Sayıya Bölünebilme',
          formula: '\\text{EBOB}(a,b)=1,\\;a\\mid x,\\;b\\mid x\\Rightarrow ab\\mid x',
          tip: 'Aralarında asal sayıların her birine bölünebilen bir doğal sayı bu sayıların çarpımına da tam bölünür.\na ve b aralarında asal iki sayı olsun. Bir x doğal sayısı a ve b sayılarının her birine tam bölünüyor ise\nx sayısı a · b ile de tam bölünür.' },
        { title: 'Sık Kullanılan Çarpımlar',
          signTable: {
            headers: ['Tam bölünme koşulu', 'Sonuç'],
            rows: [
              ['2 ve 3 ile tam bölünür', '6 ile tam bölünür'],
              ['3 ve 4 ile tam bölünür', '12 ile tam bölünür'],
              ['3 ve 5 ile tam bölünür', '15 ile tam bölünür'],
              ['2 ve 9 ile tam bölünür', '18 ile tam bölünür'],
              ['3 ve 8 ile tam bölünür', '24 ile tam bölünür'],
              ['3 ve 10 ile tam bölünür', '30 ile tam bölünür'],
              ['4 ve 11 ile tam bölünür', '44 ile tam bölünür']
            ]
          },
          tip: 'PDF’te verilen bu çiftlerde sayılar aralarında asal olduğundan her iki koşulu sağlayan doğal sayı, çarpım olan sayıya da tam bölünür.' },
        { title: 'Aralarında Asal Bölenler ve 25 ile Bölünebilme',
          noRichText: true,
          plainFormula: 'a ve b aralarında asal iki sayı olsun.\n• Bir x doğal sayısı a ve b sayılarının her birine tam bölünüyor ise x sayısı C = a · b ile tam bölünür.\n• C = a · b olmak üzere bir x doğal sayısının C ile bölümünden kalan sayı a ve b sayılarından büyük olsun. Bu durumda kalan sayının a ve b sayılarına bölümünden kalanlara bakılır.\n• Bir sayı 25 sayısına tam bölünüyor ise bu sayının son iki basamağı 00, 25, 50 ya da 75 olmalıdır.' }
      ]
    },
    examples: [
      { question: 'Bir doğal sayı hem 3’e hem 8’e bölünüyorsa hangi sayıya kesin bölünür?',
        steps: [
          { text: '3 ve 8 aralarında asaldır.' },
          '3\\cdot8=24',
          { text: 'Bu nedenle sayı 24 ile bölünebilir.' }
        ],
        answer: '24' }
    ],
    quiz: [
      { q: '2 ve 3 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['5','6','8','9'], a: 1, e: '2 ve 3 aralarında asal olduğu için çarpımları 6’ya bölünür.' },
      { q: '3 ve 4 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['7','9','12','15'], a: 2, e: '3 · 4 = 12 ve 3 ile 4 aralarında asaldır.' },
      { q: '3 ve 5 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['8','10','12','15'], a: 3, e: '3 ve 5 aralarında asal olduğundan sayı 15’e bölünür.' },
      { q: '2 ve 9 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['11','12','18','27'], a: 2, e: '2 · 9 = 18 ve 2 ile 9 aralarında asaldır.' },
      { q: '3 ve 8 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['11','16','21','24'], a: 3, e: '3 · 8 = 24’tür.' },
      { q: '4 ve 11 ile bölünebilen sayı hangi sayıya kesin bölünür?', opt: ['15','22','33','44'], a: 3, e: '4 · 11 = 44 ve bu sayılar aralarında asaldır.' },
      { q: '25 ile bölünebilme için son iki basamak hangilerinden biri olabilir?', opt: ['00, 20, 50, 70','00, 25, 50, 75','10, 25, 60, 75','05, 25, 45, 75'], a: 1, e: '25 ile bölünebilmede son iki basamak 00, 25, 50 veya 75 olmalıdır.' },
      { q: 'Aralarında asal olmayan bölenlerde çarpım kuralı neden dikkat ister?', opt: ['Ortak bölen tekrar sayılabilir','Sayı daima negatiftir','Bölme yapılamaz','Kalan daima 0’dır'], a: 0, e: 'Bölenler aralarında asal değilse ortak bölen çarpımda tekrar sayılır.' },
      { q: 'Bir sayı aralarında asal a ve b sayılarına bölünüyorsa hangi sayıya bölünür?', opt: ['a + b','a - b','a · b','a / b'], a: 2, e: 'Aralarında asal bölenlerde sayı a · b çarpımına bölünür.' },
      { q: '6 ile bölünebilme için hangi iki kural birlikte kontrol edilir?', opt: ['2 ve 3','2 ve 5','3 ve 5','4 ve 5'], a: 0, e: '6 = 2 · 3 ve 2 ile 3 aralarında asaldır.' },
      { q: '12 ile bölünebilme için hangi iki kural birlikte kontrol edilir?', opt: ['2 ve 6','3 ve 4','5 ve 7','8 ve 9'], a: 1, e: '12 = 3 · 4 ve 3 ile 4 aralarında asaldır.' },
      { q: '15 ile bölünebilme için hangi iki kural birlikte kontrol edilir?', opt: ['2 ve 5','3 ve 5','4 ve 5','5 ve 9'], a: 1, e: '15 = 3 · 5 ve 3 ile 5 aralarında asaldır.' },
      { q: '18 ile bölünebilme için hangi iki kural birlikte kontrol edilir?', opt: ['2 ve 9','3 ve 6','4 ve 5','5 ve 9'], a: 0, e: '18 = 2 · 9 ve 2 ile 9 aralarında asaldır.' },
      { q: '24 ile bölünebilme için hangi iki kural birlikte kontrol edilebilir?', opt: ['2 ve 12','3 ve 8','4 ve 6','5 ve 8'], a: 1, e: '24 = 3 · 8 ve 3 ile 8 aralarında asaldır.' },
      { q: '44 ile bölünebilme için hangi iki kural birlikte kontrol edilir?', opt: ['4 ve 11','2 ve 22','3 ve 11','5 ve 9'], a: 0, e: '44 = 4 · 11 ve 4 ile 11 aralarında asaldır.' },
      { q: 'Bir sayı 2 ve 5 ile bölünüyorsa hangi sayıya kesin bölünür?', opt: ['7','8','10','12'], a: 2, e: '2 ve 5 aralarında asal olduğundan sayı 10’a bölünür.' },
      { q: 'Bir sayı 4 ve 9 ile bölünüyorsa hangi sayıya kesin bölünür?', opt: ['13','18','27','36'], a: 3, e: '4 ve 9 aralarında asal olduğundan sayı 36’ya bölünür.' },
      { q: 'Bir sayı 5 ve 9 ile bölünüyorsa hangi sayıya kesin bölünür?', opt: ['14','30','45','90'], a: 2, e: '5 ve 9 aralarında asal olduğundan sayı 45’e bölünür.' },
      { q: '300 sayısı 6 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 2 ile','Yalnız 3 ile'], a: 0, e: '300 hem 2’ye hem 3’e bölünür; bu yüzden 6’ya bölünür.' },
      { q: '156 sayısı 12 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 3 ile','Yalnız 4 ile'], a: 0, e: '156 hem 3’e hem 4’e bölünür; bu yüzden 12’ye bölünür.' },
      { q: '135 sayısı 15 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 3 ile','Yalnız 5 ile'], a: 0, e: '135 hem 3’e hem 5’e bölünür; bu yüzden 15’e bölünür.' },
      { q: '198 sayısı 18 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız 2 ile','Yalnız 9 ile'], a: 0, e: '198 hem 2’ye hem 9’a bölünür; bu yüzden 18’e bölünür.' },
      { q: 'Son iki basamağı 75 olan bir sayı hangi sayıya bölünebilir?', opt: ['12','18','25','44'], a: 2, e: '25 ile bölünebilme için son iki basamak 00, 25, 50 veya 75 olmalıdır.' },
      { q: 'Son iki basamağı 40 olan bir sayı 25 ile bölünebilir mi?', opt: ['Evet','Hayır','Yalnız çiftse','Yalnız rakamlar toplamı 9 ise'], a: 1, e: '40; 00, 25, 50, 75 seçeneklerinden biri değildir.' },
      { q: '3 ve 10 ile tam bölünen bir sayı hangi sayıya kesin tam bölünür?', opt: ['13','20','30','90'], a: 2, e: '3 ve 10 aralarında asal olduğundan sayı 3 · 10 = 30 ile tam bölünür.' }
    ]
  }),
  F(11, 1, 'Asal Çarpanlar', 2, 6, {
    summary: 'Bir tam sayının asal sayıların kuvvetleri çarpımı biçiminde yazılması ve bölen sayısını bulma.',
    theory: {
      rules: [
        { title: 'Bir Tam Sayının Asal Çarpanlara Ayrılması',
          formula: 'A=x^a\\cdot y^b\\cdot z^c',
          tip: 'A bir tam sayı; x, y, z asal sayı ve a, b, c doğal sayı olmak üzere A tam sayısının A = xᵃ · yᵇ · zᶜ şeklinde ifade edilmesine asal çarpanlara ayırma denir.' },
        { type: 'warning',
          text: 'A sayısının asal çarpanlarına ayrılmasında bölme algoritmasından yararlanılır.\nÖrnek:\n360 = 2³ · 3² · 5¹' },
        { type: 'warning',
          text: 'A = xᵃ · yᵇ · zᶜ şeklindeki gösterimde x, y ve z birbirinden farklı asal sayılardır.' },
        { title: 'Bir Tam Sayının Tam Sayı Bölenleri',
          plainFormula: 'A = xᵃ · yᵇ · zᶜ sayısının\n• Asal bölenleri = x, y, z\n• Pozitif bölenlerinin sayısı = (a + 1) · (b + 1) · (c + 1)\n• Negatif bölenlerinin sayısı = (a + 1) · (b + 1) · (c + 1)\n• Tam sayı bölenlerinin sayısı = 2 · (a + 1) · (b + 1) · (c + 1)\n• Tam sayı bölenlerinin toplamı = 0’dır.',
          tip: 'Pozitif ve negatif bölenler birbirinin ters işaretlisi olduğu için tam sayı bölenlerinin toplamı 0 olur.' },
        { type: 'warning',
          text: 'A sayısının asal olmayan tam sayı bölenlerinin toplamı - (x + y + z) dir.' }
      ]
    },
    examples: [
      { question: '360 sayısını asal çarpanlarına ayıralım.',
        steps: [
          '360=2\\cdot180',
          '180=2\\cdot90',
          '90=2\\cdot45',
          '45=3\\cdot15',
          '15=3\\cdot5',
          '360=2^3\\cdot3^2\\cdot5'
        ],
        answer: '2^3\\cdot3^2\\cdot5' },
      { question: 'A = 2³ · 3² · 5 sayısının pozitif bölen sayısını bulalım.',
        steps: [
          { text: 'Üsler 3, 2 ve 1’dir.' },
          '(3+1)(2+1)(1+1)=4\\cdot3\\cdot2',
          '4\\cdot3\\cdot2=24'
        ],
        answer: '24' }
    ],
    quiz: [
      { q: '360 sayısının asal çarpanlara ayrılmış hali hangisidir?', opt: ['2²·3²·5','2³·3²·5','2³·3·5²','2·3²·5'], a: 1, e: '360 = 8 · 9 · 5 = 2³ · 3² · 5.' },
      { q: 'A = xᵃ·yᵇ·zᶜ biçiminde x, y, z nasıl sayılardır?', opt: ['Doğal','Rasyonel','Birbirinden farklı asal','Ardışık çift'], a: 2, e: 'PDF uyarısına göre x, y, z birbirinden farklı asal sayılardır.' },
      { q: '2³·3² sayısının pozitif bölen sayısı kaçtır?', opt: ['6','8','12','18'], a: 2, e: '(3+1)(2+1)=12.' },
      { q: 'Bir sayının pozitif bölen sayısı 12 ise negatif bölen sayısı kaçtır?', opt: ['6','12','24','0'], a: 1, e: 'Pozitif ve negatif bölen sayıları eşittir.' },
      { q: 'Bir tam sayının tam sayı bölenlerinin toplamı kaçtır?', opt: ['0','1','Asal bölen toplamı','Pozitif bölen sayısı'], a: 0, e: 'Pozitif ve negatif bölenler birbirini götürür.' }
    ]
  }),

  F(12, 1, 'EBOB ve EKOK', 3, 10, {
    summary: 'EBOB pozitif ortak bölenlerin en büyüğü, EKOK pozitif ortak katların en küçüğüdür.',
    theory: {
      rules: [
        { title: 'Bölen ve Kat',
          plainFormula: 'Sıfırdan farklı bir x tam sayısı bir a tam sayısını kalansız bölüyor ise x sayısı a sayısının bir bölenidir.\nSıfırdan farklı bir a tam sayısı bir x tam sayısına kalansız bölünüyor ise a sayısı x sayısının bir katıdır.',
          tip: 'Bölen kalansız böler; kat ise verilen sayıya kalansız bölünür.' },
        { title: 'En Büyük Ortak Bölen - EBOB',
          formula: '\\text{EBOB}(a,b)=\\prod p^{\\min(\\alpha,\\beta)}',
          tip: 'En az biri sıfırdan farklı iki veya daha fazla tam sayının pozitif ortak bölenlerinin en büyüğüne EBOB denir. İki veya daha fazla sayının EBOB’u bulunurken tabanı aynı olan asal çarpanlardan üssü küçük olanların çarpımı alınır.' },
        { type: 'warning',
          text: 'Birbirinden farklı iki sayının ortak bölenleri aynı zamanda bu iki sayının EBOB’unun da bölenleridir.\nBir kesrin pay ve paydası bu iki sayının EBOB’una bölünerek kesrin en sade hali elde edilir.' },
        { title: 'En Küçük Ortak Kat - EKOK',
          formula: '\\text{EKOK}(a,b)=\\prod p^{\\max(\\alpha,\\beta)}',
          tip: 'En az biri sıfırdan farklı iki veya daha fazla tam sayının pozitif ortak katlarının en küçüğüne EKOK denir. EKOK bulunurken tabanı aynı olmayanlar ile tabanı aynı olanlardan üssü büyük olanların çarpımı alınır.' },
        { type: 'warning',
          text: 'Birbirinden farklı iki sayının ortak katları aynı zamanda bu iki sayının EKOK’unun da katlarıdır.\nKesirli sayılarda toplama ve çıkarma işlemleri yapılırken paydalar EKOK’larında eşitlenerek işlem yapılabilir.' },
        { title: 'EBOB - EKOK Özellikleri',
          plainFormula: '1. a ve b sayma sayılarının çarpımı bu sayıların EBOB’u ile EKOK’unun çarpımına eşittir.\na · b = EBOB(a,b) · EKOK(a,b)\n2. a ve b aralarında asal iki pozitif tam sayı ise EBOB(a,b) = 1 ve EKOK(a,b) = a · b olur.\n3. a ve b pozitif tam sayılarından biri diğerinin tam katı ise EBOB küçük sayıya, EKOK büyük sayıya eşittir.',
          tip: 'Bu üç özellik EBOB-EKOK sorularında hızlı kontrol sağlar.' }
      ]
    },
    examples: [
      { question: '24 ve 36 sayılarının EBOB ve EKOK’unu bulunuz.',
        steps: [
          '24=2^3\\cdot3',
          '36=2^2\\cdot3^2',
          '\\text{EBOB}=2^2\\cdot3=12',
          '\\text{EKOK}=2^3\\cdot3^2=72'
        ],
        answer: '\\text{EBOB}=12,\\;\\text{EKOK}=72' },
      { question: '18 ve 25 aralarında asal olduğuna göre EBOB ve EKOK değerlerini bulalım.',
        steps: [
          { text: '18 ve 25’in 1’den başka ortak pozitif böleni yoktur.' },
          '\\text{EBOB}(18,25)=1',
          '\\text{EKOK}(18,25)=18\\cdot25=450'
        ],
        answer: '1,\\;450' }
    ],
    quiz: [
      { q: 'EBOB neyi ifade eder?', opt: ['En küçük ortak kat','En büyük pozitif ortak bölen','Asal çarpan toplamı','Tam bölen sayısı'], a: 1, e: 'EBOB pozitif ortak bölenlerin en büyüğüdür.' },
      { q: 'EKOK neyi ifade eder?', opt: ['En küçük pozitif ortak kat','En büyük ortak bölen','Negatif bölen','Asal sayı'], a: 0, e: 'EKOK pozitif ortak katların en küçüğüdür.' },
      { q: '12 ve 20 sayılarının EBOB’u kaçtır?', opt: ['2','4','5','10'], a: 1, e: '12=2²·3, 20=2²·5; küçük üsler 2² verir.' },
      { q: '12 ve 20 sayılarının EKOK’u kaçtır?', opt: ['40','60','80','120'], a: 1, e: 'EKOK = 2²·3·5 = 60.' },
      { q: 'EBOB(a,b)=6 ve EKOK(a,b)=30 ise a·b kaçtır?', opt: ['120','150','180','240'], a: 2, e: 'a·b = EBOB · EKOK = 6·30 = 180.' }
    ]
  }),

  F(13, 1, 'EBOB-EKOK Problemleri', 3, 9, {
    summary: 'En büyük parçalara ayırma sorularında EBOB, en küçük ortak bütün oluşturma ve birlikte tekrar sorularında EKOK kullanılır.',
    theory: {
      rules: [
        { title: 'EBOB Kullanılan Problemler',
          plainFormula: '• Bir bütünü eş büyüklükte en büyük parçalara ayırarak en az sayıda parça elde edilmek istenen problemlerde EBOB kullanılır.\n• Bir tarla ya da bahçenin kare şeklinde ve en büyük alanlara bölünmesi sorularında EBOB kullanılır.\n• Bir deponun küp şeklinde ve en büyük hacimlere bölünmesi sorularında EBOB kullanılır.',
          tip: 'En büyük parça sorusu çoğunlukla EBOB ister.' },
        { title: 'EKOK Kullanılan Problemler',
          plainFormula: '• En az sayıda küçük parçaları birleştirerek büyük bir parça elde edilmek istenen problemlerde EKOK kullanılır.\n• Eş dikdörtgenlerin birleştirilerek kare şeklinde ve en küçük alan elde edilmesi sorularında EKOK kullanılır.\n• Eş dikdörtgenler prizmalarının birleştirilerek küp şeklinde en küçük hacim elde edilmesi sorularında EKOK kullanılır.',
          tip: 'En küçük ortak bütün sorusu çoğunlukla EKOK ister.' },
        { title: 'Periyodik Durumlarda EKOK',
          plainFormula: 'Periyodik durum içeren problemlerde tekrarlayan iki ya da daha fazla olayın, en kısa hangi periyotla aynı anda gerçekleşeceğinin hesaplanmasında EKOK kullanılır.\nÖrnek: Dairesel bir pisti üç atlet sırasıyla 6 dk, 8 dk ve 9 dk’da koşabiliyorsa tekrar başlangıçta karşılaşma süresi EKOK ile bulunur.',
          tip: 'Aynı anda tekrar etme zamanı EKOK ile bulunur.' }
      ]
    },
    examples: [
      { question: 'Üç makine bir ürünü 45, 50 ve 60 saniyede üretmektedir. İlk kez 06.30’da birlikte çalışmaya başladıklarına göre beşinci kez birlikte ürün verdiklerinde saat kaç olur?',
        steps: [
          { text: 'Makinenin tekrar aynı anda ürün vermesi için geçen süre 45, 50 ve 60 sayılarının ortak katı olmalıdır.' },
          '\\text{EKOK}(45,50,60)=900\\;\\text{saniye}',
          { text: '900 saniye = 15 dakikadır.' },
          { text: 'Beşinci kez için 5 tane 15 dakikalık süre alınır.' },
          '15\\cdot5=75\\;\\text{dakika}=1\\;\\text{saat }15\\;\\text{dakika}',
          { text: '06.30’dan 1 saat 15 dakika sonrası 07.45 olur.' }
        ],
        answer: '07.45' },
      { question: '18 m ve 24 m uzunluğundaki iki ip eşit ve en büyük parçalara ayrılacaktır. Parça uzunluğu kaç metre olur?',
        steps: [
          { text: 'Eş büyüklükte en büyük parça istendiği için EBOB kullanılır.' },
          '\\text{EBOB}(18,24)=6'
        ],
        answer: '6\\;\\text{m}' }
    ],
    quiz: [
      { q: 'En büyük eş parçalara ayırma probleminde hangi kavram kullanılır?', opt: ['EKOK','EBOB','Mod','Yüzde'], a: 1, e: 'En büyük parça EBOB ile bulunur.' },
      { q: 'En küçük ortak bütün oluşturma probleminde hangisi kullanılır?', opt: ['EBOB','EKOK','Asal sayı','Kalan'], a: 1, e: 'En küçük ortak bütün EKOK ile bulunur.' },
      { q: '6, 8 ve 9 dakikada tur atan atletler tekrar kaç dakikada birlikte başlangıca gelir?', opt: ['24','36','72','144'], a: 2, e: 'EKOK(6,8,9)=72.' },
      { q: '12 ve 18 cm çubuklar en büyük eş parçalara ayrılırsa parça kaç cm olur?', opt: ['3','6','9','12'], a: 1, e: 'EBOB(12,18)=6.' },
      { q: '15 ve 20 dakikada bir çalan iki alarm birlikte kaç dakikada bir çalar?', opt: ['30','45','60','90'], a: 2, e: 'EKOK(15,20)=60.' }
    ]
  }),

  F(14, 1, 'Periyodik Problemler', 3, 8, {
    summary: 'Belli zaman aralıklarında tekrar eden olaylarda tekrar sayısı ve haftanın günü kalanla bulunur.',
    theory: {
      rules: [
        { title: 'Periyodik Durum',
          plainFormula: 'Günlük hayatta bazı olaylar belli zaman aralıklarında tekrar eder. Bu tür olaylara periyodik durum denir.\nHaftanın günlerinin 7 günde bir tekrar etmesi; nöbet tutan bir askerin, hemşirenin ya da doktorun belirli zaman sonunda tekrar aynı gün nöbet tutması bu tür olaylara örnektir.',
          tip: 'Hafta günleri sorularında 7’ye bölümden kalan gün kaymasını verir.' },
        { title: 'İlk Kez Sayıldıysa',
          plainFormula: 'Bir olay ilk kez gerçekleşmişse n. kez için kalan tekrar sayısı n - 1 olur.\nGeçen süre = Periyot · (n - 1)',
          tip: 'Başlangıç günü zaten birinci kezdir.' },
        { title: 'Birlikte Tekrar Eden Olaylar',
          plainFormula: 'İki veya daha fazla olayın birlikte tekrar etme süresi periyotlarının EKOK’u ile bulunur.\nBirlikte ilk kez gerçekleşmişse n. birlikte gerçekleşme için EKOK · (n - 1) süre geçer.',
          tip: 'Birlikte tekrar, ortak periyot yani EKOK ister.' }
      ]
    },
    examples: [
      { question: 'Burak 4 günde bir tenis kursuna gitmektedir. Kursa pazartesi başlayan Burak 12. kez hangi gün kursa gider?',
        steps: [
          { text: 'İlk kurs pazartesi olduğu için 12 - 1 = 11 kez daha kursa gidecektir.' },
          '4\\cdot11=44\\;\\text{gün}',
          { text: '44 günün 7 ile bölümünden kalan 2’dir.' },
          { text: 'Pazartesi’den 2 gün sonrası çarşambadır.' }
        ],
        answer: 'Çarşamba' },
      { question: 'Biri 5 günde bir, diğeri 8 günde bir nöbet tutan iki asker ilk nöbetlerini salı günü tuttular. 6. kez birlikte hangi gün nöbet tutarlar?',
        steps: [
          '\\text{EKOK}(5,8)=40',
          { text: 'İlk birlikte nöbet sayıldığı için 6 - 1 = 5 nöbet kalır.' },
          '40\\cdot5=200\\;\\text{gün}',
          { text: '200 günün 7 ile bölümünden kalan 4’tür.' },
          { text: 'Salı’dan 4 gün sonrası cumartesidir.' }
        ],
        answer: 'Cumartesi' }
    ],
    quiz: [
      { q: 'Haftanın günleri kaç günde bir tekrar eder?', opt: ['5','6','7','8'], a: 2, e: 'Hafta 7 gündür.' },
      { q: 'Pazartesi’den 10 gün sonrası hangi gündür?', opt: ['Çarşamba','Perşembe','Cuma','Pazar'], a: 1, e: '10 mod 7 = 3; pazartesiden 3 gün sonrası perşembe.' },
      { q: '4 günde bir olan olayın 6. kez gerçekleşmesi için kaç gün geçer?', opt: ['20','24','25','28'], a: 0, e: 'İlk gerçekleşme sayıldığı için 4·(6-1)=20.' },
      { q: '5 ve 8 günde bir tekrar eden iki olay birlikte kaç günde bir tekrar eder?', opt: ['13','20','30','40'], a: 3, e: 'EKOK(5,8)=40.' },
      { q: 'İlk birlikte gerçekleşme sayıldıysa n. birlikte gerçekleşme için hangi sayı alınır?', opt: ['n','n+1','n-1','2n'], a: 2, e: 'İlk gerçekleşme birinci sayılır.' }
    ]
  }),

  F(15, 1, 'Rasyonel Sayılarda İşlemler', 2, 7, {
    summary: 'Rasyonel sayılarda toplama-çıkarma için paydalar eşitlenir; çarpma ve bölmede kesir kuralları uygulanır.',
    theory: {
      rules: [
        { title: 'Toplama ve Çıkarma',
          formula: '\\begin{gathered}\\underset{(d)}{\\frac{a}{b}}+\\underset{(b)}{\\frac{c}{d}}=\\frac{a\\cdot d+b\\cdot c}{b\\cdot d}\\\\[1.4em]\\underset{(d)}{\\frac{a}{b}}-\\underset{(b)}{\\frac{c}{d}}=\\frac{a\\cdot d-b\\cdot c}{b\\cdot d}\\end{gathered}',
          tip: 'Rasyonel sayılarda toplama ve çıkarma yapılırken paydalar eşit değilse önce eşitlenir. Paydalar eşitlendikten sonra paylar toplanır ya da çıkarılır, ortak payda sonucun paydası olarak yazılır.' },
        { type: 'warning',
          text: 'Rasyonel sayılarda toplama çıkarma işleminde paydalar EKOK’larında eşitlenir.' },
        { title: 'Çarpma',
          formula: '\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{a\\cdot c}{b\\cdot d}',
          tip: 'Çarpılan rasyonel sayılar tam sayılı kesir olmamalıdır. Tam sayılı kesir varsa önce bileşik kesre çevrilir. Sonra paylar çarpılıp paya, paydalar çarpılıp paydaya yazılır.' },
        { type: 'warning',
          text: 'Rasyonel sayılarda çarpma işlemi yapılırken pay ve paydadaki sayıların sadeleştirilmesi çarpma işlemini kolaylaştırır.' },
        { title: 'Bölme',
          formula: '\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}=\\frac{a\\cdot d}{b\\cdot c}',
          tip: 'Bölmede birinci kesir aynen yazılır, ikinci kesir ters çevrilir ve kesirler çarpılır. Tam sayılı kesir varsa önce bileşik kesre çevrilir.' }
      ]
    },
    examples: [
      { questionBlocks: [
          { tex: '\\left(\\frac{1}{3}-\\frac{1}{4}\\right)\\cdot\\frac{6}{7}:\\frac{5}{28}' },
          'işleminin sonucunu bulunuz.'
        ],
        steps: [
          '\\frac13-\\frac14=\\frac4{12}-\\frac3{12}=\\frac1{12}',
          '\\frac1{12}\\cdot\\frac67=\\frac1{14}',
          '\\frac1{14}:\\frac5{28}=\\frac1{14}\\cdot\\frac{28}{5}',
          '\\frac{28}{70}=\\frac25'
        ],
        answer: '\\frac25' },
      { questionBlocks: [
          { tex: '\\frac{1}{6}+\\frac{1}{4}' },
          'işlemini yapalım.'
        ],
        steps: [
          { text: '6 ve 4’ün EKOK’u 12’dir.' },
          '\\frac16+\\frac14=\\frac2{12}+\\frac3{12}=\\frac5{12}'
        ],
        answer: '\\frac5{12}' }
    ],
    quiz: [
      { q: 'Rasyonel sayılarda toplama için önce ne yapılır?', opt: ['Paylar çarpılır','Paydalar eşitlenir','İkinci kesir ters çevrilir','Virgül kaydırılır'], a: 1, e: 'Toplama ve çıkarmada paydalar eşitlenir.' },
      { q: 'Paydaları eşitlerken hangi kavram kullanılır?', opt: ['EBOB','EKOK','Medyan','Mod'], a: 1, e: 'Paydalar EKOK’ta eşitlenir.' },
      { q: '$\\frac{2}{3}\\cdot\\frac{3}{5}$ kaçtır?', opt: ['$\\frac{1}{5}$','$\\frac{2}{5}$','$\\frac{5}{6}$','$\\frac{6}{15}$'], a: 1, e: 'Sadeleşince sonuç $\\frac{2}{5}$ olur.' },
      { q: '$\\frac{1}{2}:\\frac{3}{4}$ işlemi nasıl yazılır?', opt: ['$\\frac{1}{2}\\cdot\\frac{4}{3}$','$\\frac{1}{2}\\cdot\\frac{3}{4}$','$\\frac{2}{1}\\cdot\\frac{3}{4}$','$\\frac{1}{2}+\\frac{4}{3}$'], a: 0, e: 'Bölmede ikinci kesir ters çevrilir.' },
      { q: 'Tam sayılı kesirle işlem yaparken önce ne yapılır?', opt: ['Ondalığa çevrilir','Bileşik kesre çevrilir','Payda atılır','İşaret değiştirilir'], a: 1, e: 'PDF’te önce bileşik kesre çevrilmesi gerektiği belirtilir.' }
    ]
  }),

  F(16, 1, 'Ondalıklı ve Devirli Sayılar', 2, 8, {
    summary: 'Ondalık kesirler, ondalık sayıya çevirme, işlem kuralları, devirli ondalık sayılar ve sıralama.',
    theory: {
      rules: [
        { title: 'Ondalık Kesir ve Ondalık Sayı',
          text: 'Paydası 10, 100, 1000, ... gibi 10’un kuvvetleri olan kesirlere ondalık kesirler, bu kesirlerin belirttiği sayılara ondalık sayılar denir.',
          formula: '\\frac{3}{10}=0{,}3',
          tip: 'Ondalık gösterimde Türkiye’de virgül kullanılır.' },
        { title: 'Rasyonel Sayıyı Ondalık Sayıya Çevirmek',
          plainFormula: 'Rasyonel sayı ondalık sayıya çevrilirken;\nRasyonel sayının payındaki sayı paydasındaki sayıya bölünür veya paydasındaki sayı 10’un kuvveti olarak yazıldıktan sonra sayı ondalık sayı olarak yazılır.',
          tip: 'Paydayı 10, 100, 1000 yapmak mümkünse işlem hızlanır.' },
        { title: 'Rasyonel Sayıyı Ondalık Sayıya Çevirme Örneği',
          formula: '\\frac{3}{5}=\\frac{3\\cdot2}{5\\cdot2}=\\frac{6}{10}=0{,}6',
          tip: 'Paydayı 10, 100, 1000 yapmak mümkünse işlem hızlanır.' },
        { title: 'Ondalık Sayılarda Toplama ve Çıkarma',
          plainFormula: 'Ondalık sayılar toplanırken, virgüller alt alta gelecek şekilde yazılır ve doğal sayılarda toplama ve çıkarma işleminde olduğu gibi toplama ve çıkarma işlemi yapılır. Sonuç, virgüllerin hizasından virgülle ayrılır.',
          tip: 'Virgül hizası korunmadan işlem yapılmaz.' },
        { title: 'Ondalık Sayılarda Çarpma',
          plainFormula: 'Ondalık sayıların çarpımı yapılırken virgül yokmuş gibi çarpılır.\nİşlem sonunda çarpılan sayıların virgülden sonraki basamak sayıları toplamı kadar sağdan sola doğru virgülle ayrılır.',
          tip: 'Virgülden sonraki toplam basamak sayısı sonucu belirler.' },
        { title: 'Bir Sayıyı 10, 100, 1000, ... ile Çarpma',
          plainFormula: 'Ondalık sayıları 10 ile çarparken virgül bir basamak sağa, 100 ile çarparken virgül iki basamak sağa kaydırılır. Yani sıfır sayısı kadar basamak soldan sağa doğru virgülle ayrılır.',
          tip: 'Çarpmada virgül sağa kayar.' },
        { title: 'Ondalık Sayılarda Bölme',
          plainFormula: 'Ondalık sayılarda bölme işlemi yaparken bölen virgülden kurtarılır.\nBöleni virgülden kurtarırken bölünen de aynı sayı ile çarpılarak normal bölme işlemi yapılır.',
          tip: 'Bölen tam sayı haline getirilir.' },
        { title: 'Bir Sayıyı 10, 100, 1000, ... ile Bölme',
          plainFormula: 'Ondalık sayıları 10’a bölerken virgül bir basamak sola, 100’e bölerken virgül iki basamak sola kaydırılır. Yani sıfır sayısı kadar basamak sağdan sola doğru virgülle ayrılır.',
          tip: 'Bölmede virgül sola kayar.' },
        { title: 'Devirli Ondalık Sayılar',
          text: 'Bir ondalık sayının virgülden sonraki kısmında belli bir düzende tekrar eden sayılar varsa bu sayılara devirli ondalık sayılar denir.',
          formula: '\\begin{aligned}a,bbb...&=a,\\overline{b}\\\\a,bcbc...&=a,\\overline{bc}\\\\a,bcdecde...&=a,b\\overline{cde}\\end{aligned}',
          tip: 'Tekrarlayan kısım devir çizgisiyle gösterilir.' },
        { title: 'Devirli Ondalık Sayıların Rasyonel Sayıya Dönüştürülmesi',
          className: 'rule-devirli-rasyonel',
          text: 'a, b, c, d ve e birer rakam olmak üzere,',
          formula: '\\begin{gathered}a,b\\overline{cde}=\\frac{abcde-ab}{9990}\\\\[2.8em]\\frac{\\text{Sayının tamamı}-\\text{Devretmeyen kısım}}{\\substack{\\text{Virgülden sonra devreden kadar }9\\\\\\text{devretmeyen kadar }0}}\\end{gathered}',
          tip: 'Virgülden sonra devreden kadar 9, devretmeyen kadar 0 yazılır.' },
        { title: 'Pozitif Rasyonel Sayılarda Sıralama',
          plainFormula: '1. Paydaları eşit olan kesirlerden payı büyük olan kesir diğerlerinden daha büyüktür.\n2. Payları eşit olan kesirlerden paydası küçük olan diğerlerinden daha büyüktür.\n3. Basit kesirlerde pay ile payda arasındaki farklar eşitse, payı veya paydası büyük olan sayı diğerlerinden büyüktür.\n4. Bileşik kesirlerde pay ile payda arasındaki farklar eşitse payı veya paydası küçük olan sayı diğerlerinden büyüktür.\n5. Rasyonel sayıların ondalık veya devirli ondalık açılımları karşılaştırılarak sayılar arasındaki sıralama yapılabilir.',
          tip: 'Pozitif rasyonel sayılarda karşılaştırma doğrudan yapılır.' },
        { title: 'Negatif Rasyonel Sayılarda Sıralama',
          plainFormula: 'Sayılar arasında pozitif sıralama yapılır, yapılan sıralamanın tersi alınır.',
          tip: 'Negatif sayılarda mutlak değeri büyük olan sayı daha küçüktür.' },
        { type: 'warning',
          textBeforeVisual: 'a, b, c, d pozitif ardışık sayılar ve a < b < c < d olmak üzere',
          textAfterVisual: 'olur.',
          formula: '\\frac{a}{b}<\\frac{b}{c}<\\frac{c}{d}' }
      ]
    },
    examples: [
      { question: '21,378 devirli ondalık sayısını rasyonel sayıya çeviriniz.',
        steps: [
          '21,\\overline{378}=\\frac{21378-21}{999}',
          '\\frac{21357}{999}=\\frac{2373}{111}=\\frac{791}{37}'
        ],
        answer: '\\frac{791}{37}' },
      { questionBlocks: [
          { tex: '\\frac{3}{5}' },
          'rasyonel sayısını ondalık sayıya çeviriniz.'
        ],
        steps: [
          '\\frac35=\\frac{3\\cdot2}{5\\cdot2}=\\frac6{10}',
          '\\frac6{10}=0,6'
        ],
        answer: '0,6' }
    ],
    quiz: [
      { q: 'Paydası 10, 100, 1000 olan kesirlere ne denir?', opt: ['Asal kesir','Ondalık kesir','Bileşik kesir','Devirli sayı'], a: 1, e: 'PDF tanımı ondalık kesirdir.' },
      { q: '$\\frac{3}{5}$ ondalık gösterimi nedir?', opt: ['0,3','0,5','0,6','1,6'], a: 2, e: '$\\frac{3}{5}=\\frac{6}{10}=0,6$.' },
      { q: 'Ondalık sayılarda toplama yaparken ne hizalanır?', opt: ['Paylar','Virgüller','Üsler','Kökler'], a: 1, e: 'Virgüller alt alta yazılır.' },
      { q: '0,24 · 10 sonucu nedir?', opt: ['0,024','2,4','24','240'], a: 1, e: '10 ile çarpınca virgül bir basamak sağa kayar.' },
      { q: '0,333... hangi tür sayıdır?', opt: ['Doğal','Devirli ondalık','İrrasyonel','Tam sayı'], a: 1, e: 'Virgülden sonra 3 rakamı sürekli tekrar ettiği için devirli ondalıktır.' },
      { q: '$\\frac{7}{10}$ kesrinin ondalık gösterimi hangisidir?', opt: ['0,7','7,10','0,07','70'], a: 0, e: 'Payda 10 olduğu için $\\frac{7}{10}=0,7$ olur.' },
      { q: '$\\frac{13}{100}$ kesrinin ondalık gösterimi hangisidir?', opt: ['1,3','0,13','0,013','13,100'], a: 1, e: 'Payda 100 olduğunda virgülden sonra iki basamak yazılır: 0,13.' },
      { q: '2,45 sayısında yüzde birler basamağındaki rakam kaçtır?', opt: ['2','4','5','45'], a: 2, e: '2,45 sayısında 4 onda birler, 5 yüzde birler basamağındadır.' },
      { q: '0,8 kesrinin rasyonel gösterimi hangisidir?', opt: ['$\\frac{8}{10}$','$\\frac{8}{100}$','$\\frac{10}{8}$','$\\frac{80}{10}$'], a: 0, e: '$0,8=\\frac{8}{10}$ olur ve sadeleşirse $\\frac{4}{5}$ bulunur.' },
      { q: '1,25 sayısının kesir gösterimi hangisidir?', opt: ['$\\frac{125}{10}$','$\\frac{125}{100}$','$\\frac{12}{5}$','$\\frac{25}{100}$'], a: 1, e: '$1,25=\\frac{125}{100}$ olur; sadeleşirse $\\frac{5}{4}$ olur.' },
      { q: '0,75 sayısı sadeleştirilmiş kesir olarak hangisidir?', opt: ['$\\frac{3}{4}$','$\\frac{7}{5}$','$\\frac{75}{10}$','$\\frac{4}{3}$'], a: 0, e: '$0,75=\\frac{75}{100}=\\frac{3}{4}$ olur.' },
      { q: '0,2 + 0,35 işleminin sonucu nedir?', opt: ['0,37','0,55','0,53','3,7'], a: 1, e: 'Virgüller hizalanır: 0,20 + 0,35 = 0,55.' },
      { q: '4,6 - 1,25 işleminin sonucu nedir?', opt: ['3,35','3,75','2,35','4,35'], a: 0, e: '4,60 - 1,25 = 3,35 olur.' },
      { q: '0,4 · 0,3 işleminin sonucu nedir?', opt: ['0,12','1,2','0,7','0,012'], a: 0, e: '4 · 3 = 12; toplam iki ondalık basamak olduğu için sonuç 0,12 olur.' },
      { q: '1,2 · 10 işleminin sonucu nedir?', opt: ['0,12','12','120','1,20'], a: 1, e: '10 ile çarpınca virgül bir basamak sağa kayar.' },
      { q: '3,45 · 100 işleminin sonucu nedir?', opt: ['34,5','345','0,0345','3450'], a: 1, e: '100 ile çarpınca virgül iki basamak sağa kayar.' },
      { q: '56,7 ÷ 10 işleminin sonucu nedir?', opt: ['567','5,67','0,567','56,07'], a: 1, e: '10’a bölerken virgül bir basamak sola kayar.' },
      { q: '4,8 ÷ 0,6 işlemi nasıl tam sayı bölenli hale getirilir?', opt: ['48 ÷ 6','4,8 ÷ 6','48 ÷ 0,6','0,48 ÷ 6'], a: 0, e: 'Böleni virgülden kurtarmak için iki sayı da 10 ile çarpılır: 48 ÷ 6.' },
      { q: '0,121212... sayısında devreden kısım hangisidir?', opt: ['0','1','12','121'], a: 2, e: 'Virgülden sonra 12 bloğu sürekli tekrar eder.' },
      { q: '2,555... sayısının devirli gösteriminde devreden rakam hangisidir?', opt: ['2','5','55','25'], a: 1, e: 'Virgülden sonra 5 rakamı sürekli tekrar eder.' },
      { q: '0,999... sayısı hangi sayıya eşittir?', opt: ['0,9','1','9/10','99/100'], a: 1, e: '0,999... devirli ondalığı 1’e eşittir.' },
      { q: '0,333... sayısının rasyonel karşılığı hangisidir?', opt: ['$\\frac{1}{3}$','$\\frac{3}{10}$','$\\frac{3}{100}$','$\\frac{10}{3}$'], a: 0, e: '$0,333...=\\frac{1}{3}$ olur.' },
      { q: '0,666... sayısının rasyonel karşılığı hangisidir?', opt: ['$\\frac{1}{6}$','$\\frac{2}{3}$','$\\frac{6}{10}$','$\\frac{3}{2}$'], a: 1, e: '$0,666...=\\frac{6}{9}=\\frac{2}{3}$ olur.' },
      { q: '$\\frac{1}{4}$ ile 0,3 sayılarından hangisi daha büyüktür?', opt: ['$\\frac{1}{4}$','0,3','Eşittir','Karşılaştırılamaz'], a: 1, e: '$\\frac{1}{4}=0,25$ olduğundan 0,3 daha büyüktür.' },
      { q: '$\\frac{2}{5}$ ile 0,45 sayılarından hangisi daha küçüktür?', opt: ['$\\frac{2}{5}$','0,45','Eşittir','İkisi de tam sayıdır'], a: 0, e: '$\\frac{2}{5}=0,4$ olduğundan 0,45’ten küçüktür.' }
    ]
  }),

  F(17, 1, 'Gerçek Sayılarda Aralıklar', 2, 6, {
    summary: 'Sayı doğrusunda iki nokta arasındaki gerçek sayı kümeleri; açık, kapalı ve yarı açık aralıklar.',
    theory: {
      rules: [
        { title: 'Aralık Kavramı',
          plainFormula: 'Sayı doğrusu üzerinde birbirinden farklı iki noktanın arasındaki tüm gerçek sayılardan oluşan alt kümeye aralık adı verilir.\nAralıklar, uç noktalarının dahil edilip edilmemesine bağlı olarak adlandırılır.',
          tip: 'a ve b gerçek sayıları aralığın uç noktalarıdır.' },
        { title: 'Kapalı Aralık',
          formula: '[a,b]=\\{x\\in\\mathbb{R}\\mid a\\le x\\le b\\}',
          intervalLines: [
            { label: '[a,b]', left: 'a', right: 'b', leftClosed: true, rightClosed: true }
          ],
          tip: 'Uç noktaların aralığa dahil edildiği kümelere kapalı aralık denir.' },
        { title: 'Açık Aralık',
          formula: '(a,b)=\\{x\\in\\mathbb{R}\\mid a<x<b\\}',
          intervalLines: [
            { label: '(a,b)', left: 'a', right: 'b', leftClosed: false, rightClosed: false }
          ],
          tip: 'Uç noktaların aralığa dahil edilmediği kümelere açık aralık denir.' },
        { title: 'Yarı Açık Yarı Kapalı Aralık',
          plainFormula: '[a,b) = {x ∈ R | a ≤ x < b}\n(a,b] = {x ∈ R | a < x ≤ b}',
          intervalLines: [
            { label: '[a,b)', left: 'a', right: 'b', leftClosed: true, rightClosed: false },
            { label: '(a,b]', left: 'a', right: 'b', leftClosed: false, rightClosed: true }
          ],
          tip: 'Uç noktalardan yalnız biri dahilse aralık yarı açık ya da yarı kapalı aralık olarak adlandırılır.' },
        { title: 'Sonsuz Aralıklar',
          plainFormula: '(a,∞) : a’dan büyük tüm gerçek sayılar\n[a,∞) : a’ya eşit veya a’dan büyük tüm gerçek sayılar\n(-∞,a) : a’dan küçük tüm gerçek sayılar\n(-∞,a] : a’ya eşit veya a’dan küçük tüm gerçek sayılar\n(-∞,∞) : R’nin kendisi',
          intervalLines: [
            { label: '(a,∞)', left: 'a', right: '', leftClosed: false, rightClosed: false, variant: 'right-ray' },
            { label: '[a,∞)', left: 'a', right: '', leftClosed: true, rightClosed: false, variant: 'right-ray' },
            { label: '(-∞,a)', left: '', right: 'a', leftClosed: false, rightClosed: false, variant: 'left-ray' },
            { label: '(-∞,a]', left: '', right: 'a', leftClosed: false, rightClosed: true, variant: 'left-ray' },
            { label: '(-∞,∞)', left: '', right: '', leftClosed: false, rightClosed: false, variant: 'all' }
          ],
          tip: 'Sonsuz uç noktalar parantezle gösterilir.' },
        { type: 'warning',
          text: 'Bir aralıktaki uç noktalardan biri kapalı, diğeri sonsuz ise bu aralık ışın olarak adlandırılır.\nAralıkların kesişim, birleşim ve fark işlemleri yapılırken aralıkları aynı sayı doğrusu üzerinde göstermek kolaylık sağlar.' }
      ]
    },
    examples: [
      { questionBlocks: [
          'A = {x | -4 ≤ x < 6, x ∈ R} ve B = {x | 2 < x ≤ 8, x ∈ R} olmak üzere aşağıdaki kümeleri aralık biçiminde ifade edip sayı doğrusu üzerinde gösteriniz.',
          'a) A ∪ B',
          'b) A ∩ B',
          'c) A / B'
        ],
        steps: [
          { text: 'A kümesi -4 dahil başlayıp 6 dahil olmadan biter; B kümesi 2 dahil olmadan başlayıp 8 dahil biter.' },
          { text: 'a) A ∪ B = [-4,8]\nSayı doğrusu:',
            intervalLine: { label: '[-4,8]', left: '-4', right: '8', leftClosed: true, rightClosed: true } },
          { text: 'b) A ∩ B = (2,6)\nSayı doğrusu:',
            intervalLine: { label: '(2,6)', left: '2', right: '6', leftClosed: false, rightClosed: false } },
          { text: 'c) A / B = [-4,2]\nSayı doğrusu:',
            intervalLine: { label: '[-4,2]', left: '-4', right: '2', leftClosed: true, rightClosed: true } }
        ],
        answer: 'A\\cup B=[-4,8],\\quad A\\cap B=(2,6),\\quad A/B=[-4,2]' },
      { question: '2 ≤ x < 7 eşitsizliğini aralık olarak yazınız.',
        steps: [
          { text: '2 dahil olduğu için sol uç köşeli parantezle yazılır.' },
          { text: '7 dahil olmadığı için sağ uç normal parantezle yazılır.' },
          '[2,7)'
        ],
        answer: '[2,7)' },
      { question: '(-∞, 5] aralığını eşitsizlikle gösteriniz.',
        steps: [
          { text: 'Sonsuzdan 5’e kadar gelir ve 5 dahildir.' },
          'x\\le5'
        ],
        answer: 'x\\le5' }
    ],
    quiz: [
      { q: 'Uç noktaları dahil olan aralık hangisidir?', opt: ['(a,b)','[a,b]','(a,b]','(a,∞)'], a: 1, e: 'Köşeli parantez dahil anlamındadır.' },
      { q: 'a < x < b hangi aralıktır?', opt: ['[a,b]','(a,b)','[a,b)','(a,b]'], a: 1, e: 'İki uç da dahil değildir.' },
      { q: 'a ≤ x < b hangi gösterimdir?', opt: ['[a,b)','(a,b]','(a,b)','[a,b]'], a: 0, e: 'a dahil, b dahil değildir.' },
      { q: 'x > 3 aralığı hangisidir?', opt: ['[3,∞)','(3,∞)','(-∞,3)','(-∞,3]'], a: 1, e: '3 dahil değildir.' },
      { q: 'R’nin tamamı hangi aralıkla gösterilir?', opt: ['(0,∞)','(-∞,∞)','[0,∞)','(-∞,0]'], a: 1, e: 'Tüm gerçek sayılar (-∞,∞) aralığıdır.' }
    ]
  }),

  // ───────── ÜNİTE 2: CEBİR ─────────
  S(18, 2, '1. Dereceden 1 Bilinmeyenli Denklemler', 1, 6, 'ax + b = 0 → x = -b/a. Eşitliğin her iki tarafına aynı işlem uygulanır.'),
  S(19, 2, 'Basit Eşitsizlikler', 2, 6, 'Eşitsizliğin yönü: negatif sayıyla çarpılır/bölünürse yön değişir.'),
  S(20, 2, '1. Dereceden 2 Bilinmeyenli Denklemler', 2, 7, 'ax + by = c — sonsuz çözüm. İki denklem birlikte → benzersiz çözüm.'),
  S(21, 2, '1. Derece 2 Bilinmeyenli Eşitsizlikler', 3, 7, 'Doğrunun bir tarafındaki yarı düzlem; ≤ veya ≥ için sınır dahil.'),
  S(22, 2, 'Eşitsizlik Sistemleri', 3, 8, 'Birden fazla eşitsizliğin ortak çözüm bölgesi — kesişim alanı.'),

  F(23, 2, 'Mutlak Değer', 3, 9, {
    summary: 'Bir gerçek sayının sayı doğrusu üzerindeki yerinin sıfır noktasına olan uzaklığı.',
    theory: {
      rules: [
        { title: 'Mutlak Değer Kavramı',
          formulaLines: [
            '|x|'
          ],
          tipLines: [
            'Bir gerçek sayının sayı doğrusu üzerindeki yerinin sıfır noktasına olan uzaklığına bu sayının mutlak değeri denir.',
            'x gerçek sayısının mutlak değeri |x| ile gösterilir.',
            '-4 sayısının mutlak değeri 4’tür. |-4| = 4 olur.',
            '4 sayısının mutlak değeri 4’tür. |4| = 4 olur.'
          ] },
        { title: 'Sayı Doğrusunda Uzaklık',
          formulaLines: [
            '|a-b|'
          ],
          tipLines: [
            'Sayı doğrusu üzerinde a ile b gerçek sayılarının birbirine uzaklığı |a - b| ile gösterilir.'
          ] },
        { title: 'Mutlak Değerin Parçalı Tanımı',
          formulaLines: [
            '|x|=\\begin{cases}x, & x>0\\\\0, & x=0\\\\-x, & x<0\\end{cases}'
          ],
          tipLines: [
            'Mutlak değer bu parçalı tanıma göre açılır.'
          ] },
        { title: 'İçerik Sıfır veya Pozitifse',
          formulaLines: [
            '|2|=2',
            'a>0\\Rightarrow |4a|=4a',
            'b<0\\Rightarrow |-3b|=-3b'
          ],
          tipLines: [
            'Mutlak değer içindeki ifadenin gerçek sayı değeri 0’a eşit ya da 0’dan büyük ise bu ifadenin mutlak değeri kendisine eşittir.'
          ] },
        { title: 'İçerik Negatifse',
          formulaLines: [
            '|-13|=13',
            'a>0\\Rightarrow |-7a|=7a',
            'b<0\\Rightarrow |5b|=-5b'
          ],
          tipLines: [
            'Mutlak değer içindeki ifadenin gerçek sayı değeri 0’dan küçükse bu ifadenin mutlak değeri ters işaretlisine eşittir.'
          ] },
        { title: 'Mutlak Değerin Temel Eşitsizliği',
          formulaLines: [
            '|x|\\ge x',
            '|x|=x\\Rightarrow x\\ge0',
            '|x|=-x\\Rightarrow x<0'
          ],
          tipLines: [
            'Bir gerçek sayının mutlak değeri daima kendisine eşit ya da kendisinden büyüktür.'
          ] },
        { title: 'Tanım ve Sınav Tüyosu',
          formulaLines: [
            'A\\ge0\\Rightarrow |A|=A',
            'A<0\\Rightarrow |A|=-A',
            '|a|\\ge0',
            '|a|=|-a|',
            '|a\\cdot b|=|a|\\cdot|b|',
            '|a^2|=a^2'
          ],
          tipLines: [
            'Bir sayının mutlak değeri, o sayının sayı doğrusunda sıfırdan uzaklığıdır. Her zaman sıfır veya pozitif çıkar.',
            'A ≥ 0 ise |A| = A olur; ifade olduğu gibi bırakılır.',
            'A < 0 ise |A| = -A olur; ifade ters işaretlisiyle alınır.',
            'Mutlak değer hiçbir zaman negatif olmaz.',
            'Sayı ve tersi aynı mutlak değere sahiptir.',
            'Çarpımın mutlak değeri, mutlak değerlerin çarpımına eşittir.',
            'Kare her zaman negatif olmayan değer verdiğinden |a²| = a² olur.',
            '|-3b| örneğinde işarete dikkat: b < 0 ise -3b pozitif olur ve |-3b| = -3b kalır.',
            'b > 0 ise -3b negatif olur ve |-3b| = 3b olur.',
            'Önündeki eksi işaretine bakıp hemen negatif deme; harfin işaretine bak, sonra karar ver.',
            'Mutlak değer “sayıyı pozitif yap” değil, “negatifse tersini al” demektir.',
            'Somut sayı koyarak test edebilirsin: b = -2 veya b = 3 gibi.'
          ] }
      ],
      facts: [],
      warning: ''
    },
    examples: [],
    quiz: [
      { q: '|x − 5| = 3 denkleminin çözüm kümesi nedir?', opt: ['{2}','{8}','{2, 8}','{−2, 8}'], a: 2, e: 'x-5=3 \\Rightarrow x=8 veya x-5=-3 \\Rightarrow x=2' },
      { q: '|3x + 6| ≤ 9 eşitsizliğinin çözüm aralığı?', opt: ['[−5, 1]','(−5, 1)','[−1, 5]','(−∞, 5]'], a: 0, e: '-9 \\leq 3x+6 \\leq 9 \\Rightarrow -5 \\leq x \\leq 1' },
      { q: '|x| + |x − 4| = 4 denkleminin çözümü hangi aralıktır?', opt: ['x = 2','[0, 4]','{0, 4}','(0, 4)'], a: 1, e: 'Sayı doğrusunda 0 ile 4 arası tüm noktaların uzaklıkları toplamı 4\'tür.' },
      { q: '|x − 1| > 2 eşitsizliğinin çözümü nedir?', opt: ['(−1, 3)','(−∞, −1) ∪ (3, ∞)','[−1, 3]','(3, ∞)'], a: 1, e: 'x-1>2 veya x-1<-2 \\Rightarrow x>3 veya x<-1' },
      { q: '|−7| + |3 − 10| ifadesinin değeri kaçtır?', opt: ['10','14','17','4'], a: 1, e: '|-7|+|3-10| = 7 + 7 = 14' }
    ]
  }),

  S(24, 2, 'Mutlak Değerli Denk./Eşitsizlikler (İleri)', 4, 9, 'İki mutlak değer barındıran denklemler, durum analizi yöntemi.'),

  F(25, 2, 'Üslü İfadeler', 2, 8, {
    summary: 'Gerçek sayıların tam sayı kuvvetleri, negatif kuvvet, üslü sayılarda işlemler ve üslü ifadeleri sıralama.',
    theory: {
      rules: [
        { title: 'Gerçek Sayıların Tam Sayı Kuvvetleri',
          formulaLines: [
            'a\\in\\mathbb{R},\\;n\\in\\mathbb{Z}^{+}',
            'a^n=\\underbrace{a\\cdot a\\cdot\\ldots\\cdot a}_{n\\text{ tane}}'
          ],
          tipLines: [
            'aⁿ ifadesine üslü ifade adı verilir.',
            'aⁿ ifadesinde a sayısına taban, n’ye üs veya kuvvet denir.'
          ] },
        { title: 'Kuvvetin İşareti',
          statementBlocks: [
            { text: '0’dan farklı sayıların çift sayı kuvvetlerinin sonucu daima 0’dan büyüktür.',
              mathLines: [
                '(-2)^4=16',
                '2^4=16'
              ] },
            { text: 'Tek kuvvetler tabanın işaretini etkilemez.',
              mathLines: [
                '(-2)^3=-8',
                '2^3=8'
              ] },
            { text: 'Pozitif sayıların bütün kuvvetleri pozitiftir.',
              mathLines: [
                '3^3=27',
                '3^4=81'
              ] },
            { text: '0 sayısının pozitif kuvvetleri 0’dır.',
              mathLines: [
                '0^8=0'
              ] }
          ] },
        { title: 'Bir Gerçek Sayının Negatif Kuvveti',
          formulaLines: [
            'x\\in\\mathbb{R}-\\{0\\},\\;n\\in\\mathbb{Z}^{+}',
            'x^{-n}=\\dfrac{1}{x^n}',
            'x^{-n}=\\left(\\dfrac{1}{x}\\right)^n'
          ],
          tipLines: [
            'Sıfır sayısının çarpma işlemine göre tersi olmadığından negatif kuvveti tanımsızdır.'
          ] },
        { title: 'Üslü Sayılarda Toplama ve Çıkarma İşlemi',
          formulaLines: [
            'a\\cdot x^n+b\\cdot x^n-c\\cdot x^n=(a+b-c)\\cdot x^n'
          ],
          tipLines: [
            'Hem tabanı hem de üssü aynı olan üslü sayılar, ortak paranteze alınarak toplanabilir veya çıkarılabilir.'
          ] },
        { title: 'Üslü Sayılarda Çarpma ve Bölme İşlemi',
          numberedItems: [
            { text: 'Tabanları aynı olan üslü sayılar çarpılabilir.', mathLines: ['x^a\\cdot x^b=x^{a+b}'] },
            { text: 'Üsleri aynı olan üslü sayılar çarpılabilir.', mathLines: ['x^a\\cdot y^a=(x\\cdot y)^a'] },
            { text: 'Tabanları aynı olan üslü sayılar bölünebilir.', mathLines: ['\\dfrac{x^a}{x^b}=x^{a-b}'] },
            { text: 'Üsleri aynı olan üslü sayılar bölünebilir.', mathLines: ['\\dfrac{x^a}{y^a}=\\left(\\dfrac{x}{y}\\right)^a'] }
          ] },
        { title: 'Üslü İfadeler ile İlgili Özellikler',
          numberedItems: [
            { text: 'x gerçek sayı ve x sıfırdan farklı olmak üzere x⁰ = 1’dir. 0⁰ belirsizdir.', mathLines: ['x^0=1,\\quad 0^0\\text{ belirsizdir}'] },
            { text: 'x gerçek sayı olmak üzere x¹ = x ve 1ˣ = 1’dir.', mathLines: ['x^1=x,\\quad 1^x=1'] },
            { text: 'Üssün üssünde üsler çarpılır.', mathLines: ['(x^a)^b=(x^b)^a=x^{a\\cdot b}'] }
          ] },
        { title: 'Üslü İfadeleri Sıralama',
          tipLines: [
            'İki üslü ifadeyi küçükten büyüğe sıralamak için tabanları eşitlemek ya da üsleri eşitlemek kullanılan yöntemlerden ikisidir.',
            'Üsler veya tabanlar eşitlenemiyorsa üslü sayıların sayı aralıklarına bakılarak karşılaştırma yapılabilir.'
          ] }
      ],
      facts: [],
      warning: ''
    },
    examples: [],
    quiz: [
      { q: '3^4 \\cdot 3^2 ifadesinin değeri kaçtır?', opt: ['3^6 = 729','3^8 = 6561','9^6','3^{4\\cdot 2}'], a: 0, e: 'a^m\\cdot a^n = a^{m+n} = 3^6 = 729' },
      { q: '(2^3)^2 ifadesinin değeri kaçtır?', opt: ['32','64','128','256'], a: 1, e: '(a^m)^n = a^{mn} = 2^6 = 64' },
      { q: '\\left(\\dfrac{1}{2}\\right)^{-3} ifadesinin değeri kaçtır?', opt: ['−8','1/8','8','−1/8'], a: 2, e: '(1/2)^{-3} = 2^3 = 8' },
      { q: '5^0 + 7^0 ifadesinin değeri kaçtır?', opt: ['0','1','2','12'], a: 2, e: 'Her sıfırdan farklı sayının 0. kuvveti 1\'dir. 1+1=2' },
      { q: '2^{x+1} = 32 ise x kaçtır?', opt: ['3','4','5','6'], a: 1, e: '32 = 2^5, x+1 = 5, x = 4' }
    ]
  }),

  S(26, 2, 'Üslü Denklemler/Eşitsizlikler', 3, 8, 'Aynı tabana getirme stratejisi; tabanı 1\'den büyükse yön korunur, küçükse yön değişir.'),
  S(27, 2, 'Köklü İfadeler', 2, 8, '\\sqrt[n]{a} = a^{1/n}. Çarpma/bölme dağılır; toplama/çıkarmada paydaları kaldırmak gerekir.'),
  S(28, 2, 'Köklü Denklemler', 3, 8, 'Her iki tarafın da kuvvetini almak — çözüm kontrolü zorunlu (yabancı kök riski).'),
  S(29, 2, 'Oran – Orantı', 2, 6, 'a/b = c/d ⇔ a·d = b·c. İçler-dışlar çarpımı.'),
  S(30, 2, 'Oran – Orantı Problemleri', 2, 7, 'Doğru orantı (k sabit, çarpım), ters orantı (çarpım sabit).'),
  S(31, 2, 'Sayı Problemleri', 2, 7, 'Bilinmeyene değişken atama, denklem kurma; iki sayının toplamı/farkı tipinde sorular.'),
  S(32, 2, 'Kesir Problemleri', 2, 7, 'Bir bütünün kesirleri; "1\'i" temsil eden büyüklüğe denklem kurma.'),
  S(33, 2, 'Yaş Problemleri', 2, 7, 'Yaş farkı sabittir, yaşlar toplamı her yıl 2 artar (2 kişi varsa).'),
  S(34, 2, 'İşçi Problemleri', 3, 8, 'Birim zamanda yapılan iş = 1/t. Birlikte çalışırken hızlar toplanır.'),

  F(35, 2, 'Yüzde Problemleri', 2, 8, {
    summary: 'Bir sayının yüzdesini bulma, yüzdeye göre tamamı bulma, bir sayının diğerinin yüzde kaçı olduğunu hesaplama ve artış-azalış problemleri.',
    theory: {
      rules: [
        { title: 'Bir Sayının Yüzdesi',
          formulaLines: [
            'A\\text{ sayısının }\\%x\\text{’i}=A\\cdot\\dfrac{x}{100}'
          ],
          tipLines: [
            'Yüzde problemlerinde “%x’i” ifadesi x/100 ile çarpmak anlamına gelir.'
          ] },
        { title: 'Bir Sayının Yüzdesinin Yüzdesi',
          formulaLines: [
            'A\\text{ sayısının }\\%x\\text{’inin }\\%y\\text{’si}=A\\cdot\\dfrac{x}{100}\\cdot\\dfrac{y}{100}'
          ],
          tipLines: [
            'Bir miktarın önce bir yüzdesi, sonra onun bir yüzdesi isteniyorsa yüzdeler art arda çarpılır.'
          ] },
        { title: 'Hangi Sayının %a’sı Y’dir?',
          formulaLines: [
            'X\\cdot\\dfrac{a}{100}=Y',
            'X=\\dfrac{100Y}{a}'
          ],
          tipLines: [
            'Tamamı bilinmeyen yüzde sorularında bilinmeyen X alınır ve yüzde denklemi kurulur.'
          ] },
        { title: 'A Sayısı B Sayısının Yüzde Kaçıdır?',
          formulaLines: [
            '\\dfrac{A}{B}\\cdot100'
          ],
          tipLines: [
            'Bir sayının diğerinin yüzde kaçı olduğunu bulmak için önce oran, sonra yüzde hesaplanır.'
          ] },
        { title: 'Yüzde Artış / Azalış',
          formulaLines: [
            '\\text{Artış sonrası}=X\\cdot\\left(1+\\dfrac{a}{100}\\right)',
            '\\text{Azalış sonrası}=X\\cdot\\left(1-\\dfrac{a}{100}\\right)'
          ],
          tipLines: [
            'Artışta yüzde oranı 1’e eklenir; azalışta 1’den çıkarılır.'
          ] },
        { title: 'Ardışık Değişim',
          formulaLines: [
            '\\text{Net çarpan}=\\left(1+\\dfrac{p}{100}\\right)\\left(1-\\dfrac{q}{100}\\right)'
          ],
          tipLines: [
            'Önce zamlanıp sonra aynı oranda indirilen ürün genellikle eski fiyatına dönmez.',
            '%20 artış ve %20 azalış için çarpan 1,20 · 0,80 = 0,96 olur; net %4 azalış vardır.'
          ] },
        { title: 'Dikkat',
          tipLines: [
            'Yüzde problemleri çözülürken başlangıç değişkeni 100x olarak seçildiğinde çözüm basamakları daha kolay hâle gelir.',
            'Yüzde problemleri, kesir problemlerini temel alarak kâr-zarar ve karışım problemlerine temel oluşturur.'
          ] }
      ],
      facts: [
        '\\dfrac{\\text{Artış}}{\\text{Eski}}\\cdot100=\\text{Yüzde artış}',
        '\\dfrac{\\text{Azalış}}{\\text{Eski}}\\cdot100=\\text{Yüzde azalış}',
        '%50 artış = 1,5 katı; %50 azalış = 0,5 katı'
      ],
      warning: 'Önce zamlanıp sonra aynı oranda iskonto yapılan ürün eski fiyatına gelmez.'
    },
    examples: [
      { question: '240 sayısının %35’i kaçtır?',
        steps: [
          '240\\cdot\\dfrac{35}{100}=84'
        ],
        answer: '84' },
      { question: '200 sayısının %40’ının %25’i kaçtır?',
        steps: [
          '200\\cdot\\dfrac{40}{100}\\cdot\\dfrac{25}{100}',
          '200\\cdot0{,}40\\cdot0{,}25=20'
        ],
        answer: '20' },
      { question: 'Hangi sayının %30’u 72’dir?',
        steps: [
          'X\\cdot\\dfrac{30}{100}=72',
          'X=\\dfrac{7200}{30}=240'
        ],
        answer: '240' },
      { question: '45 sayısı 180 sayısının yüzde kaçıdır?',
        steps: [
          '\\dfrac{45}{180}\\cdot100=25'
        ],
        answer: '%25' },
      { question: '500 TL’lik bir ürün %18 zamlanırsa yeni fiyat kaç TL olur?',
        steps: [
          '500\\cdot\\left(1+\\dfrac{18}{100}\\right)=500\\cdot1{,}18',
          '500\\cdot1{,}18=590'
        ],
        answer: '590 TL' },
      { question: '800 TL’lik bir ürün %15 indirilirse yeni fiyat kaç TL olur?',
        steps: [
          '800\\cdot\\left(1-\\dfrac{15}{100}\\right)=800\\cdot0{,}85',
          '800\\cdot0{,}85=680'
        ],
        answer: '680 TL' },
      { question: '600 TL\'lik bir ürün önce %20 zamlanıyor, sonra %25 indirim yapılıyor. Son fiyat?',
        steps: [
          'Zamlı fiyat: 600\\cdot 1{,}20 = 720',
          'İndirimli fiyat: 720\\cdot 0{,}75 = 540',
          'Veya: 600\\cdot 1{,}20\\cdot 0{,}75 = 540'
        ],
        answer: '540 TL' },
      { question: 'Bir ürünün fiyatı 250 TL’den 300 TL’ye çıkmıştır. Yüzde kaç zam yapılmıştır?',
        steps: [
          '\\text{Artış}=300-250=50',
          '\\dfrac{50}{250}\\cdot100=20'
        ],
        answer: '%20' },
      { question: 'Bir ürünün fiyatı 400 TL’den 340 TL’ye düşmüştür. Yüzde kaç indirim yapılmıştır?',
        steps: [
          '\\text{Azalış}=400-340=60',
          '\\dfrac{60}{400}\\cdot100=15'
        ],
        answer: '%15' },
      { question: 'Asiye, Begüm ve Cenk 720 TL’yi paylaşmıştır. Asiye’nin payı Begüm’ün payının 4 katıdır. Begüm ve Cenk’in toplamı Asiye’nin payının 3/2’si kadardır. Asiye paranın yüzde kaçını almıştır?',
        steps: [
          '\\text{Begüm}=x,\\;\\text{Asiye}=4x,\\;\\text{Cenk}=y',
          'x+y=\\dfrac{3}{2}\\cdot4x=6x',
          'y=5x',
          '4x+x+5x=720',
          '10x=720\\Rightarrow x=72',
          '\\text{Asiye}=4x=288',
          '\\dfrac{288}{720}\\cdot100=40'
        ],
        answer: '%40' }
    ],
    quiz: [
      { q: '240 sayısının %35’i kaçtır?', opt: ['72','84','96','105'], a: 1, e: '240·35/100=84.' },
      { q: '200 sayısının %40’ının %25’i kaçtır?', opt: ['10','20','30','40'], a: 1, e: '200·40/100·25/100=20.' },
      { q: 'Bir ürünün %25\'i 30 TL ise, ürünün tamamı kaç TL\'dir?', opt: ['90','100','120','150'], a: 2, e: '0,25·X = 30, X = 120.' },
      { q: 'Hangi sayının %30’u 72’dir?', opt: ['180','200','220','240'], a: 3, e: 'X·30/100=72, X=240.' },
      { q: '45 sayısı 180 sayısının yüzde kaçıdır?', opt: ['%20','%25','%30','%35'], a: 1, e: '45/180·100=%25.' },
      { q: '60 sayısı 240 sayısının yüzde kaçıdır?', opt: ['%15','%20','%25','%30'], a: 2, e: '60/240·100=%25.' },
      { q: '200 TL\'lik bir ürün %15 zamlanırsa yeni fiyatı kaç TL olur?', opt: ['215','220','225','230'], a: 3, e: '200·1,15=230.' },
      { q: '500 TL’lik bir ürün %18 zamlanırsa kaç TL olur?', opt: ['560','580','590','600'], a: 2, e: '500·1,18=590.' },
      { q: '800 TL’lik bir ürün %15 indirilirse kaç TL olur?', opt: ['650','660','680','700'], a: 2, e: '800·0,85=680.' },
      { q: 'Bir öğrenci 80 soru çözmüş, 60\'ını doğru yapmış. Başarı yüzdesi?', opt: ['%65','%70','%75','%80'], a: 2, e: '60/80 = 0,75 = %75.' },
      { q: 'Bir ürün önce %20 artırılıyor sonra aynı oranda azaltılıyor. Net değişim?', opt: ['%0 (aynı)','%2 azalış','%4 azalış','%5 artış'], a: 2, e: '1,2·0,8 = 0,96, yani %4 azalış.' },
      { q: 'Maaşı 4000 TL olan bir kişinin maaşı %15 artarsa yeni maaşı?', opt: ['4400','4500','4600','4750'], a: 2, e: '4000·1,15=4600.' },
      { q: 'Bir fiyat 250 TL’den 300 TL’ye çıkarsa yüzde kaç artmıştır?', opt: ['%15','%20','%25','%30'], a: 1, e: 'Artış 50, 50/250·100=%20.' },
      { q: 'Bir fiyat 400 TL’den 340 TL’ye düşerse yüzde kaç azalmıştır?', opt: ['%10','%12','%15','%20'], a: 2, e: 'Azalış 60, 60/400·100=%15.' },
      { q: 'Bir sayının %10’u 18 ise sayı kaçtır?', opt: ['120','150','180','200'], a: 2, e: 'X·10/100=18, X=180.' },
      { q: 'Bir sayının %5’i 12 ise sayı kaçtır?', opt: ['120','180','240','300'], a: 2, e: 'X·5/100=12, X=240.' },
      { q: '300 sayısının %12’si kaçtır?', opt: ['24','30','36','42'], a: 2, e: '300·12/100=36.' },
      { q: '150 sayısının %80’i kaçtır?', opt: ['100','110','120','130'], a: 2, e: '150·80/100=120.' },
      { q: 'Bir mal %25 indirimle 150 TL’ye satılıyorsa indirimsiz fiyat kaç TL’dir?', opt: ['180','190','200','225'], a: 2, e: 'İndirim sonrası fiyat %75’tir; 0,75X=150, X=200.' },
      { q: 'Bir ürün %20 zamla 360 TL oluyorsa eski fiyat kaç TL’dir?', opt: ['280','300','320','340'], a: 1, e: '1,20X=360, X=300.' },
      { q: 'Bir sayının %40’ı ile %10’unun toplamı sayının yüzde kaçıdır?', opt: ['%30','%40','%50','%60'], a: 2, e: '%40 + %10 = %50.' },
      { q: 'Bir ürün %10 zamlanıp sonra %10 indirilirse net değişim nedir?', opt: ['Aynı kalır','%1 azalış','%1 artış','%10 azalış'], a: 1, e: '1,10·0,90=0,99, net %1 azalış.' },
      { q: 'Bir ürün %25 zamlanıp sonra %20 indirilirse net sonuç nedir?', opt: ['Aynı kalır','%5 artış','%5 azalış','%10 artış'], a: 0, e: '1,25·0,80=1,00, aynı kalır.' },
      { q: 'Asiye 720 TL’nin 288 TL’sini alırsa paranın yüzde kaçını almıştır?', opt: ['%30','%35','%40','%45'], a: 2, e: '288/720·100=%40.' },
      { q: 'Yüzde problemlerinde başlangıç değişkenini nasıl seçmek çoğu zaman işlemi kolaylaştırır?', opt: ['x','10x','100x','1000x'], a: 2, e: 'PDF uyarısına göre başlangıç değişkeni 100x seçilirse işlemler kolaylaşır.' }
    ]
  }),

  S(36, 2, 'Kâr – Zarar Problemleri', 3, 8, 'Kâr = Satış - Maliyet. Yüzde kâr maliyet üzerinden hesaplanır.'),
  S(37, 2, 'Karışım Problemleri', 3, 9, 'C1V1 + C2V2 = C·V — konsantrasyon × hacim toplam korunur.'),
  S(38, 2, 'Hareket Problemleri', 3, 9, 'Yol = Hız × Zaman. Yaklaşırken hızlar toplanır, uzaklaşırken çıkarılır.'),
  S(39, 2, 'Rutin Olmayan Problemler', 4, 10, 'Hazır kalıpla çözülmeyen, mantıksal akıl yürütme isteyen sorular.'),
  S(40, 2, 'Önermeler', 1, 5, 'Doğru veya yanlış olduğu kesin yargılar — p, q gibi sembollerle.'),
  S(41, 2, 'Bileşik Önermeler', 2, 6, 've (∧), veya (∨), değil (¬) bağlaçlarıyla oluşturulan yapılar; doğruluk tabloları.'),
  S(42, 2, 'Koşullu Önerme', 2, 6, 'p ⇒ q. Sadece p doğru, q yanlış olduğunda yanlıştır.'),
  S(43, 2, 'İki Yönlü Koşullu', 2, 6, 'p ⇔ q. Aynı doğruluk değerine sahip olduklarında doğrudur.'),
  S(44, 2, 'Niceleyiciler', 2, 6, 'Her (∀), bazı (∃) — ifadelerin doğruluk değerini değiştirir.'),
  S(45, 2, 'Tanım, Aksiyom, Teorem, İspat', 1, 5, 'Matematiksel akıl yürütmenin temel taşları; ispat yöntemleri.'),
  S(46, 2, 'Kümelerde Temel Kavramlar', 1, 5, 'Eleman, alt küme, evrensel küme, boş küme; küme gösterim biçimleri.'),
  S(47, 2, 'Alt Küme', 2, 6, 'n elemanlı kümenin alt küme sayısı 2^n, öz alt küme sayısı 2^n - 1.'),
  S(48, 2, 'Kesişim ve Birleşim', 2, 6, 'A ∩ B ortak elemanlar; A ∪ B = tüm elemanlar (tekrarsız).'),
  S(49, 2, 'Fark ve Tümleme', 2, 6, 'A \\ B: A\'da olup B\'de olmayanlar. A\': A dışındakiler.'),
  S(50, 2, 'Küme Problemleri', 3, 8, 's(A∪B) = s(A) + s(B) - s(A∩B). Venn şeması ile görselleştirme.'),
  S(51, 2, 'Sıralı İkililer ve Kartezyen Çarpım', 2, 6, 'A × B = {(a,b) | a∈A, b∈B}. s(A×B) = s(A)·s(B).'),
  S(52, 2, 'Saymanın Temel İlkesi', 2, 6, 'Ardışık seçimler çarpılır (VE); ayrı durumlar toplanır (VEYA).'),
  S(53, 2, 'Faktöriyel', 1, 5, 'n! = 1·2·3·…·n. 0! = 1 tanımlıdır; 1! = 1.'),
  S(54, 2, 'Permütasyon', 3, 7, 'P(n,r) = n!/(n-r)!. Sıralı dizilişlerde kullanılır.'),
  S(55, 2, 'Tekrarlı Permütasyon', 3, 7, 'n elemanın bazıları aynı ise n!/(n1!·n2!·…) ile hesaplanır.'),
  S(56, 2, 'Kombinasyon', 3, 8, 'C(n,r) = n!/(r!·(n-r)!). Sırasız seçimlerde kullanılır.'),
  S(57, 2, 'Kombinasyon Problemleri', 3, 8, 'Komite, takım, kart seçme; "en az / en çok" durum analizi.'),
  S(58, 2, 'Kombinasyon ve Geometri', 4, 9, 'Doğru, üçgen, dörtgen sayısı kombinasyon ile bulunur.'),
  S(59, 2, 'Binom Açılımı', 4, 8, '(a+b)^n = Σ C(n,k)·a^(n-k)·b^k. Pascal üçgeni kullanışlıdır.'),
  S(60, 2, 'Olasılıkta Temel Kavramlar', 2, 6, 'Örnek uzay (E), olay (A); 0 ≤ P(A) ≤ 1.'),
  S(61, 2, 'Basit Olayların Olasılığı', 2, 6, 'P(A) = s(A)/s(E). Eş olası deneylerde kullanılır.'),
  S(62, 2, 'Fonksiyon Kavramı', 2, 6, 'A\'dan B\'ye fonksiyon: her elemana TEK karşılık. f: A → B.'),
  S(63, 2, 'Fonksiyon Soruları – Dikkat', 3, 7, 'Tanım kümesi, görüntü kümesi, eşleme kuralları arası bağ.'),
  S(64, 2, 'Fonksiyon Soruları – Detay', 3, 7, 'Tablolar ve şemalardan fonksiyon çıkarma.'),
  S(65, 2, 'İçine, Örten, Birebir, Eşit', 3, 7, 'Birebir: farklı x\'ler farklı y\'ler. Örten: B\'nin her elemanı kullanılır.'),
  S(66, 2, 'Birim ve Sabit Fonksiyon', 1, 5, 'f(x) = x birim; f(x) = c sabit. Grafik biçimleri.'),
  S(67, 2, 'Doğrusal ve Parçalı Fonksiyon', 2, 6, 'f(x) = ax + b doğrusaldır. Parçalı: koşullara göre farklı kurallar.'),
  S(68, 2, 'Çift ve Tek Fonksiyon', 2, 6, 'Çift: f(-x) = f(x), Tek: f(-x) = -f(x). Grafik simetrileri.'),
  S(69, 2, 'Fonksiyonlarda Dört İşlem', 3, 7, '(f+g)(x), (f·g)(x), (f/g)(x) ortak tanım kümesinde tanımlıdır.'),
  S(70, 2, 'Fonksiyon Grafiklerini Çizme', 3, 8, 'Tablo, kesişim noktaları, simetri analizi ile çizim teknikleri.'),
  S(71, 2, 'İki Fonksiyonun Bileşkesi', 3, 8, '(f ∘ g)(x) = f(g(x)). f ∘ g ile g ∘ f genelde farklıdır.'),
  S(72, 2, 'Bir Fonksiyonun Tersi', 3, 8, 'Birebir-örten fonksiyonun tersi vardır. f^(-1)(y) = x ⇔ f(x) = y.'),
  S(73, 2, 'Fonksiyon Grafikleri Uygulamaları', 3, 8, 'Öteleme, yansıma, esnetme; f(x±a), f(x)±b, -f(x), f(-x) etkileri.'),
  S(74, 2, 'Polinom Kavramı', 2, 6, 'P(x) = a_n·x^n + … + a_1·x + a_0. Derece = en büyük üs.'),
  S(75, 2, 'Polinomlarda Dört İşlem', 2, 6, 'Toplama/çıkarma: aynı dereceli terimler. Çarpma: dağılma kuralı.'),
  S(76, 2, 'Polinomlarda Bölme', 3, 8, 'P(x) ÷ Q(x): bölüm + kalan/Q(x). Polinom bölme algoritması.'),
  S(77, 2, 'Polinomlarda Kalan – Horner', 3, 7, 'P(x) ÷ (x-a) kalanı = P(a). Horner şeması ile hızlı hesap.'),
  S(78, 2, 'Ortak Çarpan Parantezi', 2, 5, 'En büyük ortak çarpanı paranteze alma — çarpanlara ayırmanın ilk adımı.'),
  S(79, 2, 'Tam Kare ve İki Kare Farkı', 2, 6, '(a±b)² = a² ± 2ab + b². a² - b² = (a+b)(a-b).'),
  S(80, 2, 'Tam Küp ve Küp Farkı/Toplamı', 3, 7, '(a±b)³ açılımları; a³±b³ = (a±b)(a²∓ab+b²).'),
  S(81, 2, 'Üç Terimli Çarpanlara Ayırma', 3, 7, 'ax² + bx + c = a(x - r1)(x - r2). Çarpanlar denenir.'),
  S(82, 2, 'Rasyonel İfade Sadeleştirme', 3, 7, 'Pay ve paydayı çarpanlara ayırıp ortak terimleri sadeleştir.'),

  F(83, 2, '2. Derece Denklemler', 4, 10, {
    summary: 'ax² + bx + c = 0 denkleminin kökleri ve diskriminantın anlamı.',
    theory: {
      rules: [
        { title: 'Çarpanlara Ayırma',
          formula: 'ax^2+bx+c = a(x-x_1)(x-x_2)',
          tip: 'Mümkünse en hızlı yol. Çarpımı c/a, toplamı -b/a olan iki sayı bul.' },
        { title: 'Diskriminant',
          formula: '\\Delta = b^2 - 4ac',
          tip: '\\Delta > 0: 2 reel kök, \\Delta = 0: çift kök, \\Delta < 0: reel kök yok.' },
        { title: 'Kök Formülü',
          formula: 'x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}',
          tip: 'Çarpanlara ayrılamayan tüm 2. derecede çalışır.' }
      ],
      facts: [
        'x_1 + x_2 = -\\dfrac{b}{a}',
        'x_1 \\cdot x_2 = \\dfrac{c}{a}',
        '\\Delta = 0 \\Rightarrow \\text{teğet — tek kök (çift katlı)}'
      ],
      warning: 'a = 0 ise denklem 2. dereceden değildir — 1. dereceye düşer. Önce kontrol et!'
    },
    examples: [
      { question: 'x² - 5x + 6 = 0 denkleminin köklerini bulun.',
        steps: [
          '\\text{Çarpımı 6, toplamı 5 olan iki sayı: 2 ve 3}',
          '(x-2)(x-3) = 0',
          'x_1 = 2,\\quad x_2 = 3',
          '\\text{Kontrol: } x_1+x_2 = 5,\\; x_1\\cdot x_2 = 6 \\checkmark'
        ],
        answer: 'x \\in \\{2, 3\\}' }
    ],
    quiz: [
      { q: 'x² - 7x + 12 = 0 denkleminin kökleri nedir?', opt: ['{2, 6}','{3, 4}','{−3, −4}','{1, 12}'], a: 1, e: '(x-3)(x-4)=0 \\Rightarrow x=3 veya 4' },
      { q: 'x² + 2x - 8 = 0 denkleminin köklerinin toplamı kaçtır?', opt: ['−2','2','−8','8'], a: 0, e: 'x_1+x_2 = -b/a = -2' },
      { q: '2x² - 3x + 5 = 0 denkleminin diskriminantı kaçtır?', opt: ['−31','−9','9','31'], a: 0, e: '\\Delta = 9 - 40 = -31 \\Rightarrow reel kök yok' },
      { q: 'x² - 6x + 9 = 0 denkleminin çözüm kümesi nedir?', opt: ['{3}','{−3}','{3, −3}','∅'], a: 0, e: '(x-3)^2 = 0 \\Rightarrow x = 3 (çift katlı)' },
      { q: 'Kökleri 4 ve −1 olan 2. derece denklem hangisidir?', opt: ['x²-3x-4=0','x²+3x-4=0','x²-3x+4=0','x²+3x+4=0'], a: 0, e: 'Toplam: 3, çarpım: -4 \\Rightarrow x² - 3x - 4 = 0' }
    ]
  }),

  S(84, 2, '2. Dereceden Denklemlerin Çözüm Kümesi', 3, 8, 'Diskriminanta göre çözüm kümesinin yapısı: 2, 1 veya 0 reel kök.'),
  S(85, 2, 'Diskriminant Kavramı', 3, 7, 'Δ değerinin işareti ve büyüklüğü, köklerin niteliği hakkında bilgi verir.'),
  S(86, 2, 'Karmaşık Sayılar', 3, 8, 'i² = -1, z = a + bi formatı. Toplama, çarpma; karmaşık eşlenik.'),
  S(87, 2, 'Kök – Katsayı İlişkisi (Vieta)', 3, 7, 'x1 + x2 = -b/a, x1·x2 = c/a. Köklerin değerini bilmeden ilişki kurulabilir.'),

  // ───────── ÜNİTE 3: VERİ ve OLASILIK ─────────
  S(88, 3, 'Veri', 1, 4, 'Sayısal/kategorik veri ayrımı; veri toplama yöntemleri.'),

  F(89, 3, 'Merkezi Yayılım Ölçüleri', 2, 8, {
    summary: 'Veri kümesini bir tek sayıyla özetleme: mod, medyan, aritmetik ortalama ve açıklık.',
    theory: {
      rules: [
        { title: 'Aritmetik Ortalama',
          formula: '\\bar{x} = \\dfrac{x_1 + x_2 + \\ldots + x_n}{n}',
          tip: 'Tüm değerlerin toplamı / sayısı.' },
        { title: 'Medyan (Ortanca)',
          formula: '\\text{Sıralı dizide ortadaki değer}',
          tip: 'n çift ise iki orta terimin ortalaması alınır.' },
        { title: 'Mod ve Açıklık',
          formula: '\\text{Mod} = \\text{en sık değer}, \\; R = \\text{Maks} - \\text{Min}',
          tip: 'Mod birden fazla olabilir, hiç olmayabilir (frekanslar eşitse).' }
      ],
      facts: [
        '\\text{Toplam} = \\text{Ortalama} \\times n',
        'Çarpıklık varsa medyan, ortalamadan daha güvenilirdir.'
      ],
      warning: 'Medyan için önce diziyi SIRALAMAYI unutma. Sıralanmamış dizide ortadaki sayı medyan DEĞİLDİR.'
    },
    examples: [
      { question: '4, 7, 2, 9, 8 dizisinin ortalama, medyan ve açıklığı?',
        steps: [
          '\\text{Toplam} = 4+7+2+9+8 = 30',
          '\\bar{x} = 30/5 = 6',
          '\\text{Sıralı: } 2, 4, 7, 8, 9 \\Rightarrow \\text{medyan} = 7',
          'R = 9 - 2 = 7'
        ],
        answer: '\\bar{x}=6, \\text{ medyan}=7, R=7' }
    ],
    quiz: [
      { q: '3, 5, 8, 5, 9 dizisinin modu kaçtır?', opt: ['3','5','6','8'], a: 1, e: '5 sayısı 2 kez geçiyor, en sık değer.' },
      { q: '10, 12, 14, 16, 18 dizisinin ortalaması kaçtır?', opt: ['12','13','14','15'], a: 2, e: '(10+12+14+16+18)/5 = 70/5 = 14' },
      { q: '6, 4, 9, 7, 5, 8 dizisinin medyanı kaçtır?', opt: ['6','6.5','7','7.5'], a: 1, e: 'Sıralı: 4,5,6,7,8,9. Orta iki: 6 ve 7. Medyan = 6.5' },
      { q: '2, 4, 6, 8, 10 dizisinin açıklığı kaçtır?', opt: ['6','8','10','12'], a: 1, e: 'R = 10 - 2 = 8' },
      { q: '5 sayının ortalaması 12 ise, toplamı kaçtır?', opt: ['50','55','60','65'], a: 2, e: 'Toplam = ortalama × n = 12·5 = 60' }
    ]
  }),

  S(90, 3, 'Histogram', 2, 6, 'Sürekli verinin sınıf aralıklarındaki frekansını gösteren sütun grafiği.'),
  S(91, 3, 'Grafik Çeşitleri', 1, 5, 'Sütun, çizgi, daire, nokta, sap-yaprak; hangi veride hangi grafik uygundur?'),

  // ───────── ÜNİTE 4: GEOMETRİ ─────────
  G(92, 'Açı Kavramı ve Çeşitleri', 2, 10, '13 konu kartı içerir.'),
  G(93, 'Paralel İki Doğrunun Bir Kesenle Yaptığı Açılar', 2, 7, '3 konu kartı içerir.'),
  G(94, 'Üçgende Açılar', 2, 7, '3 konu kartı içerir.'),
  G(95, 'İkizkenar ve Eşkenar Üçgende Açı Özellikleri', 2, 7, '3 konu kartı içerir.'),
  G(96, 'Üçgende Açı Kenar Bağıntıları', 2, 7, '3 konu kartı içerir.'),
  G(97, 'Üçgen Eşitsizliği', 2, 7, '3 konu kartı içerir.'),
  G(98, 'Üçgenlerde Eşlik', 2, 10, '6 konu kartı içerir.'),
  G(99, 'Üçgenlerde Benzerlik', 2, 9, '5 konu kartı içerir.'),
  G(100, 'Üçgenlerde Temel Benzerlik', 2, 7, '3 konu kartı içerir.'),
  G(101, 'Üçgenlerde Benzerlik Uygulamaları', 2, 6, '2 konu kartı içerir.'),
  G(102, 'Üçgende Yardımcı Elemanlar', 2, 10, '8 konu kartı içerir.'),
  G(103, 'Üçgende Açıortay', 2, 10, '6 konu kartı içerir.'),
  G(104, 'Üçgende Kenarortay', 2, 8, '4 konu kartı içerir.'),
  G(105, 'Üçgende Yükseklik', 2, 10, '6 konu kartı içerir.'),
  G(106, 'Üçgende Kenar Orta Dikme', 2, 7, '3 konu kartı içerir.'),
  G(107, 'Dik Üçgende Pisagor Teoremi', 2, 7, '3 konu kartı içerir.'),
  G(108, "Öklid'in Çalışmaları", 2, 7, '3 konu kartı içerir.'),
  G(109, 'Trigonometrik Oranlar', 2, 7, '3 konu kartı içerir.'),
  G(110, "30°, 45°, 60°'nin Trigonometrik Oranları", 2, 7, '3 konu kartı içerir.'),
  G(111, 'Birim Çember', 2, 8, '4 konu kartı içerir.'),
  G(112, 'Üçgende Alan', 2, 7, '3 konu kartı içerir.'),
  G(113, 'Üçgende Alan Uygulamaları', 2, 9, '5 konu kartı içerir.'),
  G(114, 'Çokgenler', 2, 8, '4 konu kartı içerir.'),
  G(115, 'Dörtgenler ve Özellikleri', 2, 9, '5 konu kartı içerir.'),
  G(116, 'Özel Dörtgenler', 2, 8, '4 konu kartı içerir.'),
  G(117, 'Yamuğun Alanı', 2, 8, '4 konu kartı içerir.'),
  G(118, 'İkizkenar ve Dik Yamuk', 2, 6, '2 konu kartı içerir.'),
  G(119, 'Paralelkenarda Açı ve Uzunluk', 2, 9, '5 konu kartı içerir.'),
  G(120, 'Paralelkenarda Alan', 2, 10, '9 konu kartı içerir.'),
  G(121, 'Eşkenar Dörtgen', 2, 8, '4 konu kartı içerir.'),
  G(122, 'Dikdörtgende Açı ve Uzunluk', 2, 7, '3 konu kartı içerir.'),
  G(123, 'Dikdörtgende Alan', 2, 8, '4 konu kartı içerir.'),
  G(124, 'Kare', 2, 8, '4 konu kartı içerir.'),
  G(125, 'Deltoid', 2, 7, '3 konu kartı içerir.'),
  G(126, 'Dik Prizmalar', 2, 10, '6 konu kartı içerir.'),
  G(127, 'Küp', 2, 6, '2 konu kartı içerir.'),
  G(128, 'Dik Piramit', 2, 6, '2 konu kartı içerir.'),
  G(129, 'Düzgün Dörtyüzlü', 2, 7, '3 konu kartı içerir.')
];

// 11-17. konular: alt başlıkları pekiştiren ek örnekler ve 25 soruluk quiz setleri.
// PDF sırasındaki ana bilgi korunur; bu blok pratik yoğunluğunu artırır.
function extendTopicPractice(id, data) {
  const topic = window.TOPICS.find(t => t.id === id);
  if (!topic) return;
  if (data.summary) topic.summary = data.summary;
  if (data.theory) topic.theory = data.theory;
  if (data.minutes) topic.minutes = data.minutes;
  if (data.difficulty) topic.difficulty = data.difficulty;
  if (data.theory || data.examples || data.quiz) topic.full = true;
  if (Array.isArray(data.examples)) topic.examples = [...(topic.examples || []), ...data.examples];
  if (Array.isArray(data.quiz)) topic.quiz = data.quiz;
}

function quizRows(rows) {
  return rows.map(([q, opt, a, e]) => ({ q, opt, a, e }));
}

// 36-40. konular: problem ve mantık konuları.
// PDF'teki ana sıra korunur; her konuda özet kartları, çözümlü örnekler ve 25 quiz vardır.
extendTopicPractice(36, {
  summary: 'Maliyet, satış, kâr, zarar, zam ve indirim ilişkilerini yüzde hesabıyla modelleme.',
  theory: {
    rules: [
      { title: 'Kâr ve Zarar',
        formulaLines: [
          '\\text{Kâr}=\\text{Satış fiyatı}-\\text{Maliyet fiyatı}',
          '\\text{Zarar}=\\text{Maliyet fiyatı}-\\text{Satış fiyatı}'
        ],
        tipLines: ['Satış fiyatı maliyetten büyükse kâr, küçükse zarar oluşur.'] },
      { title: 'Kâr Yüzdesi',
        formulaLines: ['\\text{Kâr yüzdesi}=\\dfrac{\\text{Kâr}}{\\text{Maliyet fiyatı}}\\cdot100'],
        tipLines: ['Kâr ve zarar yüzdesi maliyet fiyatı üzerinden hesaplanır.'] },
      { title: 'İndirimli Satış Fiyatı',
        formulaLines: [
          'A\\text{ TL’lik ürüne }\\%x\\text{ indirim yapılırsa}',
          '\\text{Yeni fiyat}=A-A\\cdot\\dfrac{x}{100}=A\\cdot\\dfrac{100-x}{100}'
        ],
        tipLines: ['İndirim, etiket fiyatı üzerinden yapılan değer düşümüdür.'] },
      { title: 'Zamlı Satış Fiyatı',
        formulaLines: [
          'A\\text{ TL’lik ürüne }\\%x\\text{ zam yapılırsa}',
          '\\text{Yeni fiyat}=A+A\\cdot\\dfrac{x}{100}=A\\cdot\\dfrac{100+x}{100}'
        ],
        tipLines: ['Zam, etiket fiyatının artırılmasıdır.'] },
      { title: 'Dikkat',
        tipLines: [
          'Kâr ve zarar maliyet fiyatı üzerinden hesaplanır.',
          'Kâr ve zarar işlemlerinde kolaylık sağlamak için genellikle maliyet fiyatına 100x denir.',
          'İndirim ve zam satış fiyatı üzerinden hesaplanır.',
          'İndirim ve zam işlemlerinde kolaylık sağlamak için genellikle satış fiyatına 100x denir.'
        ] }
    ],
    facts: ['Satış = Maliyet + Kâr', 'Satış = Maliyet - Zarar', 'Ne kâr ne zarar varsa satış fiyatı maliyet fiyatına eşittir.'],
    warning: 'Kâr oranı ile indirim oranının hangi fiyat üzerinden hesaplandığı mutlaka kontrol edilmelidir.'
  },
  examples: [
    { question: 'Maliyeti 400 TL olan ürün 500 TL’ye satılırsa kâr ve kâr yüzdesi kaçtır?', steps: ['\\text{Kâr}=500-400=100', '\\dfrac{100}{400}\\cdot100=25'], answer: '100 TL kâr, %25 kâr' },
    { question: 'Maliyeti 600 TL olan ürün 510 TL’ye satılırsa zarar yüzdesi kaçtır?', steps: ['\\text{Zarar}=600-510=90', '\\dfrac{90}{600}\\cdot100=15'], answer: '%15 zarar' },
    { question: 'Etiket fiyatı 800 TL olan ürüne %20 indirim yapılırsa satış fiyatı kaç TL olur?', steps: ['800\\cdot\\dfrac{80}{100}=640'], answer: '640 TL' },
    { question: '500 TL’lik ürün %30 zamlanırsa yeni fiyat kaç TL olur?', steps: ['500\\cdot\\dfrac{130}{100}=650'], answer: '650 TL' },
    { question: 'Bir ürün %25 kârla 750 TL’ye satılıyorsa maliyeti kaç TL’dir?', steps: ['\\text{Maliyet}=100x,\\;\\text{Satış}=125x', '125x=750', 'x=6', '\\text{Maliyet}=600'], answer: '600 TL' },
    { question: 'Bir ürün %20 zararla 480 TL’ye satılıyorsa maliyeti kaç TL’dir?', steps: ['\\text{Maliyet}=100x,\\;\\text{Satış}=80x', '80x=480', 'x=6', '\\text{Maliyet}=600'], answer: '600 TL' },
    { question: 'Maliyeti 300 TL olan ürüne önce %40 kâr eklenip sonra satış fiyatı üzerinden %10 indirim yapılırsa son fiyat kaç TL olur?', steps: ['300\\cdot1{,}40=420', '420\\cdot0{,}90=378'], answer: '378 TL' },
    { question: 'Etiket fiyatı 900 TL olan ürün %15 indirimle satılıyor. İndirim tutarı kaç TL’dir?', steps: ['900\\cdot\\dfrac{15}{100}=135'], answer: '135 TL' },
    { question: 'Maliyeti 250 TL olan ürün 250 TL’ye satılırsa durum nedir?', steps: ['\\text{Satış}=\\text{Maliyet}', '\\text{Kâr}=0,\\;\\text{Zarar}=0'], answer: 'Ne kâr ne zarar' },
    { question: 'Maliyeti 100x olan ürün %35 kârla satılıp satış fiyatı üzerinden %20 indirilirse son fiyat kaç x olur?', steps: ['\\text{Kârlı satış}=135x', '135x\\cdot0{,}80=108x'], answer: '108x' }
  ],
  quiz: quizRows([
    ['Maliyeti 200 TL olan ürün 260 TL’ye satılırsa kâr kaç TL’dir?', ['40','50','60','70'], 2, '260-200=60 TL.'],
    ['Maliyeti 500 TL olan ürün 425 TL’ye satılırsa zarar kaç TL’dir?', ['50','75','85','100'], 1, '500-425=75 TL.'],
    ['400 TL maliyetli ürün 500 TL’ye satılırsa kâr yüzdesi kaçtır?', ['%20','%25','%30','%40'], 1, 'Kâr 100, 100/400·100=%25.'],
    ['600 TL maliyetli ürün 510 TL’ye satılırsa zarar yüzdesi kaçtır?', ['%10','%12','%15','%18'], 2, 'Zarar 90, 90/600·100=%15.'],
    ['800 TL’lik ürüne %20 indirim yapılırsa fiyat kaç TL olur?', ['600','620','640','660'], 2, '800·0,80=640.'],
    ['500 TL’lik ürüne %30 zam yapılırsa fiyat kaç TL olur?', ['600','625','650','700'], 2, '500·1,30=650.'],
    ['Bir ürün %25 kârla 750 TL’ye satılıyorsa maliyeti kaç TL’dir?', ['550','600','625','650'], 1, '125x=750 ise 100x=600.'],
    ['Bir ürün %20 zararla 480 TL’ye satılıyorsa maliyeti kaç TL’dir?', ['560','580','600','640'], 2, '80x=480 ise 100x=600.'],
    ['300 TL maliyetli ürün %40 kârla kaça satılır?', ['400','410','420','440'], 2, '300·1,40=420.'],
    ['900 TL etiketli ürün %15 indirilirse indirim tutarı kaç TL olur?', ['115','125','135','145'], 2, '900·15/100=135.'],
    ['250 TL maliyetli ürün 250 TL’ye satılırsa durum nedir?', ['%10 kâr','%10 zarar','Ne kâr ne zarar','%25 kâr'], 2, 'Satış = maliyet.'],
    ['Maliyet 100x iken %35 kârla satış fiyatı kaç x olur?', ['120x','125x','135x','140x'], 2, '100x + 35x = 135x.'],
    ['Etiket fiyatı 100x olan ürüne %18 indirim yapılırsa yeni fiyat kaç x olur?', ['72x','80x','82x','118x'], 2, '100x·0,82=82x.'],
    ['Satış fiyatı 1200 TL olan ürün %25 indirimle satıldıysa etiket fiyatı kaç TL’dir?', ['1400','1500','1600','1800'], 2, '0,75E=1200, E=1600.'],
    ['Maliyeti 700 TL olan ürün %10 zararla satılırsa satış fiyatı kaç TL olur?', ['600','620','630','650'], 2, '700·0,90=630.'],
    ['Maliyeti 240 TL olan üründen 60 TL kâr edilirse kâr yüzdesi kaçtır?', ['%20','%25','%30','%35'], 1, '60/240·100=%25.'],
    ['Maliyeti 360 TL olan üründen 72 TL zarar edilirse zarar yüzdesi kaçtır?', ['%15','%18','%20','%25'], 2, '72/360·100=%20.'],
    ['Bir ürün %50 kârla 900 TL’ye satılırsa maliyeti kaç TL’dir?', ['500','550','600','650'], 2, '150x=900, 100x=600.'],
    ['Bir ürün %40 indirimle 300 TL’ye satılırsa indirimden önceki fiyat kaç TL’dir?', ['450','480','500','540'], 2, '0,60E=300, E=500.'],
    ['Bir ürün önce %20 zamlanıp sonra %20 indirilirse net değişim nedir?', ['Değişmez','%2 azalır','%4 azalır','%4 artar'], 2, '1,20·0,80=0,96, net %4 azalış.'],
    ['Kâr ve zarar yüzdesi hangi fiyat üzerinden hesaplanır?', ['Etiket','Satış','Maliyet','İndirim'], 2, 'Kâr ve zarar maliyet üzerinden hesaplanır.'],
    ['Zam ve indirim hangi fiyat üzerinden hesaplanır?', ['Satış/etiket fiyatı','Maliyet','Kâr','Zarar'], 0, 'Zam ve indirim satış ya da etiket fiyatı üzerinden hesaplanır.'],
    ['Maliyeti 100 TL olan ürün %20 kârla satılıp satış fiyatı üzerinden %10 indirilirse son fiyat kaç TL olur?', ['108','110','112','120'], 0, '100·1,20·0,90=108.'],
    ['Bir ürün 80 TL zarar ile 320 TL’ye satılırsa maliyeti kaç TL’dir?', ['360','380','400','420'], 2, 'Maliyet = satış + zarar = 400.'],
    ['Bir ürün 90 TL kâr ile 390 TL’ye satılırsa maliyeti kaç TL’dir?', ['280','300','320','340'], 1, 'Maliyet = satış - kâr = 300.']
  ])
});

extendTopicPractice(37, {
  summary: 'Karışımdaki saf madde miktarı, oran, yüzde ve yeni karışım oranını hesaplama.',
  theory: {
    rules: [
      { title: 'Saf Madde Oranı', formulaLines: ['\\text{Saf madde oranı}=\\dfrac{\\text{Saf madde miktarı}}{\\text{Karışım miktarı}}'], tipLines: ['Oran, karışımın ne kadarının istenen maddeden oluştuğunu gösterir.'] },
      { title: 'Saf Madde Yüzdesi', formulaLines: ['\\text{Saf madde yüzdesi}=\\dfrac{\\text{Saf madde miktarı}}{\\text{Karışım miktarı}}\\cdot100'], tipLines: ['Yüzde, saf madde oranının 100 ile çarpılmış hâlidir.'] },
      { title: 'İki Karışımı Birleştirme', formulaLines: ['A\\cdot x+B\\cdot y=z\\cdot(A+B)'], tipLines: ['Toplam saf madde miktarı, yeni karışımdaki saf madde miktarına eşittir.'] },
      { title: 'Dikkat', tipLines: ['Herhangi bir karışımın bir miktarının dökülmesi, karışımı oluşturan maddelerin oranlarını değiştirmez.', 'Karışıma su ekleme veya karışımdan su buharlaştırma problemlerinde istenilen yüzde suya ait değilse su yüzdesi 0 alınır.', 'İstenilen yüzde suya ait ise su yüzdesi 100 alınır.'] }
    ],
    facts: ['Saf madde = Karışım miktarı · oran', 'Yeni oran = Toplam saf madde / Toplam karışım', '%20 = 0,20'],
    warning: 'Karışımdan dökülen miktar oranı değiştirmez; su ekleme ya da buharlaştırma oranı değiştirir.'
  },
  examples: [
    { question: '80 gramlık %25 tuzlu su karışımında kaç gram tuz vardır?', steps: ['80\\cdot\\dfrac{25}{100}=20'], answer: '20 gram' },
    { question: '30 gram tuz içeren 150 gramlık karışımın tuz yüzdesi kaçtır?', steps: ['\\dfrac{30}{150}\\cdot100=20'], answer: '%20' },
    { question: '%20 tuzlu 100 gram karışım ile %40 tuzlu 200 gram karışım karıştırılırsa yeni tuz yüzdesi kaç olur?', steps: ['100\\cdot0{,}20+200\\cdot0{,}40=100', '\\text{Toplam}=300', '\\dfrac{100}{300}\\cdot100=\\dfrac{100}{3}'], answer: '%33\\dfrac{1}{3}' },
    { question: '%30 şekerli 200 gram karışıma 100 gram su eklenirse yeni şeker yüzdesi kaç olur?', steps: ['\\text{Şeker}=200\\cdot0{,}30=60', '\\text{Yeni toplam}=300', '\\dfrac{60}{300}\\cdot100=20'], answer: '%20' },
    { question: '%10 tuzlu 400 gram karışımdan 100 gram su buharlaştırılırsa yeni tuz yüzdesi kaç olur?', steps: ['\\text{Tuz}=40', '\\text{Yeni toplam}=300', '\\dfrac{40}{300}\\cdot100=\\dfrac{40}{3}'], answer: '%13\\dfrac{1}{3}' },
    { question: '%25 tuzlu 120 gram karışımdan 30 gram dökülürse kalan karışımın tuz yüzdesi kaçtır?', steps: ['Dökülme oranı değiştirmez.'], answer: '%25' },
    { question: '%15 tuzlu 200 gram karışımı %25 yapmak için kaç gram tuz eklenmelidir?', steps: ['\\text{Başlangıç tuz}=30', '\\dfrac{30+x}{200+x}=\\dfrac{25}{100}', '120+4x=200+x', '3x=80'], answer: '\\dfrac{80}{3}\\text{ gram}' },
    { question: '%40 tuzlu 300 gram karışımı %30 yapmak için kaç gram su eklenmelidir?', steps: ['\\text{Tuz}=120', '\\dfrac{120}{300+x}=\\dfrac{30}{100}', '1200=900+3x', 'x=100'], answer: '100 gram' },
    { question: '%20 tuzlu kaç gram karışım ile %50 tuzlu 100 gram karışım karıştırılırsa %30 tuzlu karışım elde edilir?', steps: ['\\dfrac{0{,}20x+50}{x+100}=0{,}30', '0{,}20x+50=0{,}30x+30', 'x=200'], answer: '200 gram' },
    { question: '200 gram %60 alkollü karışımdan kaç gram alkol buharlaştırılırsa karışım %50 alkollü olur?', steps: ['\\text{Alkol}=120', '\\dfrac{120-x}{200-x}=\\dfrac{50}{100}', '240-2x=200-x', 'x=40'], answer: '40 gram' }
  ],
  quiz: quizRows([
    ['80 gram %25 tuzlu suda kaç gram tuz vardır?', ['15','20','25','30'], 1, '80·25/100=20.'],
    ['30 gram tuz, 150 gram karışımda yüzde kaçtır?', ['%15','%20','%25','%30'], 1, '30/150·100=%20.'],
    ['%20 tuzlu 100 g ve %40 tuzlu 200 g karışırsa tuz miktarı kaç gram olur?', ['80','90','100','120'], 2, '20+80=100 g.'],
    ['%20 tuzlu 100 g ve %40 tuzlu 200 g karışırsa yeni karışım kaç gram olur?', ['200','250','300','350'], 2, '100+200=300 g.'],
    ['%30 şekerli 200 g karışımda kaç gram şeker vardır?', ['50','60','70','80'], 1, '200·0,30=60.'],
    ['%30 şekerli 200 g karışıma 100 g su eklenirse şeker yüzdesi kaç olur?', ['%15','%20','%25','%30'], 1, 'Şeker 60 g, toplam 300 g, oran %20.'],
    ['%10 tuzlu 400 g karışımdan 100 g su buharlaşırsa tuz miktarı kaç gram kalır?', ['30','40','50','60'], 1, 'Tuz buharlaşmaz, 400·0,10=40 g.'],
    ['%25 tuzlu karışımdan bir miktar dökülürse tuz yüzdesi ne olur?', ['Azalır','Artar','%25 kalır','Sıfırlanır'], 2, 'Dökülme oranı değiştirmez.'],
    ['%40 tuzlu 300 g karışımda kaç gram tuz vardır?', ['100','110','120','130'], 2, '300·0,40=120.'],
    ['%40 tuzlu 300 g karışımı %30 yapmak için 100 g su eklenirse yeni toplam kaç gram olur?', ['300','350','400','450'], 2, '300+100=400 g.'],
    ['%50 tuzlu 100 g karışımda kaç gram tuz vardır?', ['25','40','50','60'], 2, '100·0,50=50.'],
    ['%20 tuzlu x g ve %50 tuzlu 100 g karışımı %30 ise x kaçtır?', ['100','150','200','250'], 2, '0,20x+50=0,30(x+100), x=200.'],
    ['Karışıma su eklenirse tuz yüzdesi genellikle ne olur?', ['Artar','Azalır','Değişmez','100 olur'], 1, 'Tuz miktarı sabit, toplam artar.'],
    ['Karışımdan su buharlaştırılırsa tuz yüzdesi genellikle ne olur?', ['Artar','Azalır','Değişmez','0 olur'], 0, 'Tuz sabit, toplam azalır.'],
    ['Saf madde oranı nasıl bulunur?', ['Karışım/saf madde','Saf madde/karışım','Yüzde/100','Karışım·100'], 1, 'Saf madde oranı = saf madde miktarı / karışım miktarı.'],
    ['Saf madde yüzdesi için oran kaç ile çarpılır?', ['10','50','100','1000'], 2, 'Yüzde için oran 100 ile çarpılır.'],
    ['A miktarlı %x ve B miktarlı %y karışımın denkleminde sol taraf neyi verir?', ['Toplam su','Toplam saf madde','Toplam karışım','Buharlaşan miktar'], 1, 'A·x + B·y toplam saf maddeyi temsil eder.'],
    ['%15 tuzlu 200 g karışımda tuz miktarı kaç gramdır?', ['20','25','30','35'], 2, '200·0,15=30.'],
    ['%15 tuzlu 200 g karışıma tuz eklenirse tuz yüzdesi ne olur?', ['Azalır','Artar','Değişmez','Sıfır olur'], 1, 'Saf madde eklendiği için oran artar.'],
    ['%60 alkollü 200 g karışımda alkol miktarı kaç gramdır?', ['100','110','120','130'], 2, '200·0,60=120.'],
    ['%60 alkollü 200 g karışımdan 40 g alkol buharlaşırsa alkol miktarı kaç gram kalır?', ['60','70','80','90'], 2, '120-40=80.'],
    ['%60 alkollü 200 g karışımdan 40 g alkol buharlaşırsa toplam karışım kaç gram olur?', ['140','150','160','180'], 2, '200-40=160.'],
    ['%20 tuzlu 300 g karışıma 100 g %60 tuzlu karışım eklenirse toplam tuz kaç gram olur?', ['100','110','120','130'], 2, '60+60=120.'],
    ['%20 tuzlu 300 g ile %60 tuzlu 100 g karışırsa yeni yüzde kaçtır?', ['%25','%30','%35','%40'], 1, 'Toplam tuz 120, toplam 400, yüzde %30.'],
    ['Su ekleme sorularında suyun istenen madde oranı değilse su oranı kaç alınır?', ['0','1','50','100'], 0, 'İstenen madde su değilse eklenen suyun o madde oranı 0’dır.']
  ])
});

extendTopicPractice(38, {
  summary: 'Yol, hız, zaman ilişkisi; karşılaşma, yetişme, ortalama hız ve birim dönüşümleri.',
  theory: {
    rules: [
      { title: 'Temel Bağıntı', formulaLines: ['\\text{Yol}=\\text{Hız}\\cdot\\text{Zaman}'], tipLines: ['Sabit hızla t sürede alınan yol, hız ile zamanın çarpımıdır.'] },
      { title: 'Birim Dönüşümleri', tipLines: ['Hız birimleri km/sa., m/dk. ve m/sn. şeklindedir.', '1 km = 1000 m, 1 saat = 60 dk., 1 dk. = 60 sn.'] },
      { title: 'Orantılar', tipLines: ['Hız sabitken yol ve zaman doğru orantılıdır.', 'Yol sabitken hız ve zaman ters orantılıdır.', 'Zaman sabitken yol ve hız doğru orantılıdır.'] },
      { title: 'Karşılaşma', formulaLines: ['\\text{Toplam yol}=(V_1+V_2)\\cdot t'], tipLines: ['İki araç birbirine doğru hareket ediyorsa hızları toplanır.'] },
      { title: 'Yetişme', formulaLines: ['\\text{Aradaki yol}=(V_1-V_2)\\cdot t\\quad(V_1>V_2)'], tipLines: ['Aynı yönde hareket edip hızlı olan yavaşa yetişiyorsa hız farkı kullanılır.'] },
      { title: 'Ortalama Hız', formulaLines: ['V_{ort}=\\dfrac{\\text{Toplam yol}}{\\text{Toplam zaman}}', 'V_{ort}=\\dfrac{2\\cdot V_1\\cdot V_2}{V_1+V_2}\\quad\\text{(aynı yolu gidip dönme)}'], tipLines: ['Ortalama hız, hızların aritmetik ortalaması değildir.'] }
    ],
    facts: ['Zaman = Yol / Hız', 'Hız = Yol / Zaman', 'm/sn → km/sa. için 3,6 ile çarpılır.'],
    warning: 'Birimler aynı değilse işlemden önce mutlaka aynı birime çevrilmelidir.'
  },
  examples: [
    { question: 'Saatte 80 km hızla giden araç 3 saatte kaç km yol alır?', steps: ['\\text{Yol}=80\\cdot3=240'], answer: '240 km' },
    { question: '360 km yolu 4 saatte alan aracın hızı kaç km/saattir?', steps: ['\\text{Hız}=\\dfrac{360}{4}=90'], answer: '90 km/sa.' },
    { question: '120 km/sa. hızla giden araç 30 dakikada kaç km gider?', steps: ['30\\text{ dk}=\\dfrac{1}{2}\\text{ saat}', '120\\cdot\\dfrac{1}{2}=60'], answer: '60 km' },
    { question: 'Hızları 60 ve 80 km/sa. olan iki araç aralarında 420 km varken birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?', steps: ['(60+80)t=420', '140t=420', 't=3'], answer: '3 saat' },
    { question: 'Aynı yönde giden 90 km/sa. hızlı araç, 60 km/sa. hızlı aracın 150 km gerisindedir. Kaç saatte yetişir?', steps: ['(90-60)t=150', '30t=150', 't=5'], answer: '5 saat' },
    { question: 'Bir araç bir yolu 60 km/sa. hızla gidip aynı yolu 90 km/sa. hızla dönüyor. Ortalama hızı kaçtır?', steps: ['V_{ort}=\\dfrac{2\\cdot60\\cdot90}{60+90}', 'V_{ort}=72'], answer: '72 km/sa.' },
    { question: '20 m/sn hız kaç km/saattir?', steps: ['20\\cdot3{,}6=72'], answer: '72 km/sa.' },
    { question: '72 km/sa. hız kaç m/sn’dir?', steps: ['72\\div3{,}6=20'], answer: '20 m/sn' },
    { question: 'Bir araç 2 saatte 150 km, sonraki 3 saatte 210 km yol alıyor. Ortalama hızı kaçtır?', steps: ['\\text{Toplam yol}=360', '\\text{Toplam zaman}=5', 'V_{ort}=72'], answer: '72 km/sa.' },
    { question: 'Hızı sabit olan araç 5 saatte 300 km gidiyorsa 8 saatte kaç km gider?', steps: ['\\text{Hız}=300/5=60', '60\\cdot8=480'], answer: '480 km' }
  ],
  quiz: quizRows([
    ['80 km/sa. hızla 3 saatte kaç km gidilir?', ['180','220','240','260'], 2, 'Yol=80·3=240.'],
    ['360 km yol 4 saatte alınırsa hız kaç km/sa. olur?', ['80','90','100','120'], 1, '360/4=90.'],
    ['120 km/sa. hızla 30 dakikada kaç km gidilir?', ['40','50','60','70'], 2, '30 dk yarım saattir; 120·1/2=60.'],
    ['60 ve 80 km/sa. hızla birbirine gelen araçların yaklaşma hızı kaçtır?', ['20','60','80','140'], 3, 'Karşılaşmada hızlar toplanır.'],
    ['Aralarında 420 km olan, hızları 60 ve 80 km/sa. iki araç kaç saatte karşılaşır?', ['2','3','4','5'], 1, '420/(60+80)=3.'],
    ['90 km/sa. hızlı araç, 60 km/sa. hızlı aracı aynı yönde takip ederse bağıl hız kaçtır?', ['20','30','60','150'], 1, '90-60=30.'],
    ['150 km farkı 30 km/sa. bağıl hızla kapatan araç kaç saatte yetişir?', ['3','4','5','6'], 2, '150/30=5.'],
    ['Bir yolu 60 ile gidip 90 ile dönen aracın ortalama hızı kaçtır?', ['70','72','75','80'], 1, '2·60·90/(60+90)=72.'],
    ['20 m/sn kaç km/saattir?', ['36','54','72','90'], 2, '20·3,6=72.'],
    ['72 km/sa. kaç m/sn’dir?', ['10','15','20','25'], 2, '72/3,6=20.'],
    ['2 saatte 150 km ve 3 saatte 210 km giden aracın ortalama hızı kaçtır?', ['70','72','75','80'], 1, 'Toplam yol 360, toplam zaman 5; 360/5=72.'],
    ['Hız sabitken yol ile zaman arasında nasıl orantı vardır?', ['Ters','Doğru','Yok','Kareli'], 1, 'Yol = hız·zaman.'],
    ['Yol sabitken hız ile zaman arasında nasıl orantı vardır?', ['Doğru','Ters','Eşit','Bağımsız'], 1, 'Aynı yol daha hızlı gidilirse süre azalır.'],
    ['1 saat kaç dakikadır?', ['30','45','60','100'], 2, '1 saat = 60 dk.'],
    ['1 km kaç metredir?', ['10','100','1000','10000'], 2, '1 km = 1000 m.'],
    ['Bir araç 5 saatte 300 km gidiyorsa hızı kaçtır?', ['50','55','60','65'], 2, '300/5=60.'],
    ['60 km/sa. hızla 8 saatte kaç km gidilir?', ['420','460','480','520'], 2, '60·8=480.'],
    ['100 km/sa. hızla 15 dakikada kaç km gidilir?', ['20','25','30','40'], 1, '15 dk = 1/4 saat; 100/4=25.'],
    ['Aynı yönde 70 ve 50 km/sa. hızlarla giden araçların hız farkı kaçtır?', ['10','20','50','120'], 1, '70-50=20.'],
    ['Zıt yönde 70 ve 50 km/sa. hızlarla giden araçların aralarındaki uzaklığın değişim hızı kaçtır?', ['20','50','70','120'], 3, 'Zıt yönde hızlar toplanır: 120.'],
    ['Toplam yol 500 km, toplam zaman 10 saat ise ortalama hız kaçtır?', ['40','45','50','60'], 2, '500/10=50.'],
    ['Bir bisikletli 15 km/sa. hızla 4 saatte kaç km gider?', ['45','50','60','75'], 2, '15·4=60.'],
    ['240 km yolu 80 km/sa. hızla almak kaç saat sürer?', ['2','3','4','5'], 1, '240/80=3.'],
    ['10 m/sn kaç km/saattir?', ['18','24','36','40'], 2, '10·3,6=36.'],
    ['108 km/sa. kaç m/sn’dir?', ['20','25','30','36'], 2, '108/3,6=30.']
  ])
});

extendTopicPractice(39, {
  summary: 'Hazır formülle çözülemeyen; verileri analiz etme, strateji kurma, tablo, liste ve akıl yürütme gerektiren problemler.',
  theory: {
    rules: [
      { title: 'Tanım', tipLines: ['Bilinen bir yöntem veya formül ile çözülemeyen problemlerdir.', 'Çözümünde verilerin dikkatli analiz edilmesi ve yaratıcı bir girişimde bulunulması gerekir.', 'Bir veya daha fazla strateji kullanılabilir.'] },
      { title: 'Kullanılan Bilgiler', tipLines: ['Rutin olmayan problemler çözülürken sayısal, görsel, mantık, örüntü, sayma ve geometri bilgilerine sıkça başvurulur.'] },
      { title: 'Problem Çözme Adımları', tipLines: ['Verileri belirleme', 'İstenileni anlama', 'Gerektiğinde şekil çizme, liste ve tablo yapma', 'Sistematik düşünme', 'Akıl yürütme'] }
    ],
    facts: ['Deneme-yanılma sistematik yapılırsa güçlü bir stratejidir.', 'En büyük/en küçük isteniyorsa değişkenlerin sınır değerleri aranır.', 'Zaman ve sıra problemlerinde liste ya da tablo hatayı azaltır.'],
    warning: 'Rutin olmayan sorularda ilk bulunan desen her zaman doğru olmayabilir; verilerle kontrol edilmelidir.'
  },
  examples: [
    { question: 'Bir köyde 3 ve daha az bireyli ailelere 2 paket, 3’ten fazla bireyli ailelere 3 paket yardım yapılacaktır. Her ailede en çok 8 kişi vardır. 79 paket dağıtıldığına göre köy nüfusu en fazla kaç olabilir?', steps: ['x:\\;3\\text{ ve daha az bireyli aile sayısı}', 'y:\\;3\\text{ten fazla bireyli aile sayısı}', '2x+3y=79', 'y\\text{ büyük olsun diye }x\\text{ en küçük uygun değer seçilir.}', 'x=2\\Rightarrow y=25', '2\\cdot3+25\\cdot8=206'], answer: '206' },
    { question: 'Aslı 14.45’te başlayıp 15.03’te bitirdiği 24 egzersize eşit süre ayırıyor. Kaç egzersiz dakika başında başlamıştır?', steps: ['18\\text{ dk}=1080\\text{ sn}', '1080/24=45\\text{ sn}', 'Her 4 egzersizde bir dakika başına denk gelir.', '1,5,9,13,17,21'], answer: '6' },
    { question: '1, 4, 9, 16, ... örüntüsünün 8. terimi kaçtır?', steps: ['Terimler kare sayılardır.', '8^2=64'], answer: '64' },
    { question: '10 kişi birbiriyle bir kez tokalaşırsa kaç tokalaşma olur?', steps: ['\\binom{10}{2}=\\dfrac{10\\cdot9}{2}=45'], answer: '45' },
    { question: '3, 6, 12, 24, ... dizisinin 7. terimi kaçtır?', steps: ['Her terim öncekinin 2 katıdır.', '3,6,12,24,48,96,192'], answer: '192' },
    { question: 'Bir kutuda 5 kırmızı, 4 mavi top vardır. Kesinlikle aynı renkten iki top almak için en az kaç top çekilmelidir?', steps: ['En kötü durumda önce bir kırmızı ve bir mavi çekilir.', 'Üçüncü top mutlaka aynı renkten ikinci topu verir.'], answer: '3' },
    { question: '1’den 100’e kadar kaç tane 5’in katı vardır?', steps: ['5,10,15,\\ldots,100', '100/5=20'], answer: '20' },
    { question: 'Bir merdivenin basamakları 2’şer ya da 3’er çıkıldığında 1 basamak artıyor. Basamak sayısı 30’dan küçükse kaç olabilir?', steps: ['Sayı 2’ye ve 3’e bölününce 1 kalan verir.', 'Yani 6’ya bölününce 1 kalan verir.', '1,7,13,19,25'], answer: '1, 7, 13, 19, 25' },
    { question: 'Bir masada 6 kişi yuvarlak oturacaktır. Dönmeler aynı kabul edilirse kaç farklı oturma düzeni vardır?', steps: ['Yuvarlak dizilişte bir kişi sabitlenir.', '(6-1)!=5!=120'], answer: '120' },
    { question: '1’den 60’a kadar hem 3 hem 5’e bölünen kaç sayı vardır?', steps: ['3\\text{ ve }5\\text{ aralarında asal, ortak kat }15', '15,30,45,60'], answer: '4' }
  ],
  quiz: quizRows([
    ['Rutin olmayan problemlerde ilk adım genellikle nedir?', ['Formül ezberlemek','Verileri belirlemek','Cevabı tahmin etmek','Grafik çizmek'], 1, 'İlk adım verileri belirlemedir.'],
    ['Rutin olmayan problemlerde hangi strateji sık kullanılır?', ['Liste/tablo yapmak','Sadece çarpma yapmak','Her zaman denklem kurmak','Tahminle bitirmek'], 0, 'Liste ve tablo sistematik düşünmeyi sağlar.'],
    ['1,4,9,16 örüntüsünün 6. terimi kaçtır?', ['25','30','36','49'], 2, '6²=36.'],
    ['2,5,8,11 örüntüsünün 10. terimi kaçtır?', ['26','27','28','29'], 3, '2+9·3=29.'],
    ['8 kişi birbiriyle bir kez tokalaşırsa kaç tokalaşma olur?', ['24','28','32','36'], 1, 'C(8,2)=28.'],
    ['Kesin aynı renkten iki çorap almak için siyah ve beyaz çoraplardan en az kaç çekilir?', ['2','3','4','5'], 1, 'En kötü iki farklı renk, üçüncü aynı renktir.'],
    ['1’den 60’a kadar 4’ün katı kaç sayı vardır?', ['12','14','15','16'], 2, '60/4=15.'],
    ['1’den 100’e kadar hem 3 hem 5’e bölünen kaç sayı vardır?', ['5','6','7','8'], 1, '15’in katları 6 tanedir.'],
    ['3,6,12,24 dizisinin 6. terimi kaçtır?', ['48','72','96','120'], 2, '3,6,12,24,48,96.'],
    ['Bir sayının 2’ye ve 3’e bölümünden kalan 1 ise bu sayı 6’ya bölümünden hangi kalanı verir?', ['0','1','2','3'], 1, 'Sayı 6k+1 biçimindedir.'],
    ['30’dan küçük, 6’ya bölümünden 1 kalanını veren en büyük sayı hangisidir?', ['19','23','25','29'], 2, '1,7,13,19,25.'],
    ['Yuvarlak masada 5 kişi kaç farklı şekilde oturur?', ['24','60','120','720'], 0, '(5-1)!=24.'],
    ['Bir problemi çözerken şekil çizmek hangi tür sorularda özellikle yararlıdır?', ['Görsel/geometri','Sadece yüzde','Sadece asal sayı','Sadece üs'], 0, 'Görsel/geometri sorularında şekil yararlıdır.'],
    ['24 egzersiz 18 dakikada bitiyorsa her egzersiz kaç saniyedir?', ['30','40','45','60'], 2, '1080/24=45.'],
    ['45 saniyelik egzersizlerde kaç egzersizde bir dakika başına denk gelinir?', ['2','3','4','5'], 2, '4·45=180 saniye, tam dakika.'],
    ['2x+3y=79 denkleminde y’yi en büyük yapmak için x nasıl seçilmelidir?', ['En büyük','En küçük uygun','Çift olmayan','Negatif'], 1, 'y büyük olsun diye x en küçük uygun seçilir.'],
    ['2x+3y=79 için x=2 ise y kaçtır?', ['23','24','25','26'], 2, '4+3y=79, y=25.'],
    ['x=2, y=25 ve en çok bireyler 3 ile 8 ise nüfus kaçtır?', ['200','204','206','210'], 2, '2·3+25·8=206.'],
    ['Sistematik düşünme ne işe yarar?', ['Verileri karıştırır','Olasılıkları düzenli kontrol eder','Sadece sonucu büyütür','İşlemi gereksiz yapar'], 1, 'Olasılıkları kaçırmamayı sağlar.'],
    ['Bir sayı dizisinde ortak fark sabitse hangi strateji uygundur?', ['Aritmetik örüntü kurmak','Mutlak değer almak','Kök almak','Grafiği boyamak'], 0, 'Ortak fark aritmetik örüntüdür.'],
    ['Bir kutuda 3 renk top varsa kesin aynı renkten iki top için en az kaç top çekilir?', ['2','3','4','5'], 2, 'En kötü 3 farklı renk, 4. top eşleşir.'],
    ['1’den 50’ye kadar 7’nin katı kaç sayı vardır?', ['6','7','8','9'], 1, '7,14,21,28,35,42,49.'],
    ['En büyük değer isteniyorsa ne yapılır?', ['Sınır değerler incelenir','Tüm değerler silinir','Her zaman 0 alınır','Cevap tahmin edilir'], 0, 'Koşullara uygun sınırlar aranır.'],
    ['Tablo yapmak hangi hatayı azaltır?', ['Sıralama ve sayma hatası','Bölme hatası','Yüzde hatası','Kök hatası'], 0, 'Tablo, adımları düzenler.'],
    ['Birden fazla strateji kullanmak mümkün müdür?', ['Hayır','Sadece geometride','Evet','Sadece yüzde sorularında'], 2, 'Rutin olmayan problemlerde birden fazla strateji kullanılabilir.']
  ])
});

extendTopicPractice(40, {
  summary: 'Doğru ya da yanlış kesin hüküm bildiren ifadeler, doğruluk değeri, denk önerme, doğruluk tablosu ve değilleme.',
  theory: {
    rules: [
      { title: 'Önerme', tipLines: ['Doğru ya da yanlış kesin bir hüküm bildiren ifadelere önerme adı verilir.', 'Matematikte önermeler genellikle p, q, r, s gibi küçük harflerle gösterilir.'] },
      { title: 'Önerme Olan ve Olmayan İfadeler', tipLines: ['“Asal olan her sayı tek sayıdır.” önermedir.', '“Bugün sinemaya gidelim mi?” önerme değildir.', '“Adana, Akdeniz Bölgesi’ne ait bir ilimizdir.” önermedir.', '“Sevgi, başarılı bir öğrenci değildir.” önerme değildir.', '“Dünyanın en lezzetli meyvesi çilektir.” önerme değildir.', '“13 + 5 = 16 olur.” önermedir.'] },
      { title: 'Doğruluk Değeri', tipLines: ['Bir önermenin iki farklı doğruluk değeri vardır.', 'p önermesi doğru ise D veya 1, yanlış ise Y veya 0 ile gösterilir.', 'p önermesi doğru ise p ≡ 1, yanlış ise p ≡ 0 şeklinde yazılır.'] },
      { title: 'Denk Önermeler', tipLines: ['Doğruluk değerleri aynı olan iki önermeye denk önermeler denir.', 'p önermesi q önermesine denk ise p ≡ q ile gösterilir.', 'p önermesi q önermesine denk değil ise p ≠ q biçiminde gösterilir.'] },
      { title: 'Doğruluk Tablosu', tipLines: ['Önermelerin doğruluk değerlerinin gösterildiği tabloya doğruluk tablosu denir.', 'Bir önermenin 2 farklı doğruluk durumu vardır.', 'İki bağımsız önermenin 4 farklı doğruluk durumu vardır.', 'Üç bağımsız önermenin 8 farklı doğruluk durumu vardır.', 'n bağımsız önermenin 2^n tane doğruluk değeri vardır.'] },
      { title: 'Bir Önermenin Değili', tipLines: ['Bir önermenin hükmünün değiştirilip yerine olumsuzunun kullanılması ile elde edilen önermeye ilk önermenin değili denir.', 'p önermesinin değili p′ veya ~p ile gösterilir.', 'p doğru ise p′ yanlış; p yanlış ise p′ doğrudur.', 'Bir önermenin değilinin değili önermenin kendisine denktir: (p′)′ ≡ p.'] }
    ],
    facts: ['Soru cümleleri önerme değildir.', 'Kişisel beğeni bildiren kesin olmayan ifadeler önerme değildir.', 'Yanlış hüküm bildiren cümle de önermedir; doğruluk değeri 0’dır.'],
    warning: 'Bir ifadenin önerme olması için doğru olması gerekmez; doğru ya da yanlış olduğunun kesin belirlenebilmesi yeterlidir.'
  },
  examples: [
    { question: '“13 + 5 = 16 olur.” ifadesi önerme midir? Doğruluk değeri nedir?', steps: ['Kesin hüküm bildirir.', '13+5=18 olduğundan ifade yanlıştır.'], answer: 'Önermedir, doğruluk değeri 0’dır.' },
    { question: '“Bugün sinemaya gidelim mi?” ifadesi önerme midir?', steps: ['Soru cümlesidir.', 'Doğru ya da yanlış kesin hüküm bildirmez.'], answer: 'Önerme değildir.' },
    { question: 'p doğru ise p′ önermesinin doğruluk değeri nedir?', steps: ['p\\equiv1', 'p\\text{ doğruysa değili yanlıştır.}'], answer: '0' },
    { question: '3 bağımsız önerme için kaç doğruluk durumu vardır?', steps: ['2^n\\text{ kuralı kullanılır.}', '2^3=8'], answer: '8' },
    { question: 'p ≡ 1 ve q ≡ 1 ise p ile q denk midir?', steps: ['İki önermenin doğruluk değerleri aynıdır.', 'Aynı doğruluk değerli önermeler denktir.'], answer: 'Denk önermelerdir.' },
    { question: '“Dünyanın en lezzetli meyvesi çilektir.” neden önerme değildir?', steps: ['Kişisel beğeni içerir.', 'Doğru ya da yanlışlığı kesin değildir.'], answer: 'Önerme değildir.' },
    { question: 'p yanlış ise (p′)′ önermesinin doğruluk değeri nedir?', steps: ['p\\equiv0', 'p′\\equiv1', '(p′)′\\equiv0'], answer: '0' },
    { question: '4 bağımsız önerme için doğruluk tablosunda kaç satır vardır?', steps: ['2^n=2^4=16'], answer: '16' },
    { question: '“Asal olan her sayı tek sayıdır.” önermesinin doğruluk değeri nedir?', steps: ['2 asal sayıdır fakat tek değildir.', 'Bu yüzden ifade yanlıştır.'], answer: '0' },
    { question: '“Adana, Akdeniz Bölgesi’ne ait bir ilimizdir.” ifadesi önerme midir?', steps: ['Kesin hüküm bildirir.', 'Doğru ya da yanlışlığı değerlendirilebilir.'], answer: 'Önermedir.' }
  ],
  quiz: quizRows([
    ['Doğru ya da yanlış kesin hüküm bildiren ifadelere ne denir?', ['Küme','Önerme','Denklem','Fonksiyon'], 1, 'Bu, önermenin tanımıdır.'],
    ['“Bugün sinemaya gidelim mi?” ifadesi nedir?', ['Doğru önerme','Yanlış önerme','Önerme değildir','Denk önerme'], 2, 'Soru cümlesi kesin hüküm bildirmez.'],
    ['“13 + 5 = 16 olur.” ifadesi için ne söylenir?', ['Önerme değildir','Doğru önermedir','Yanlış önermedir','Soru cümlesidir'], 2, 'Kesin hüküm bildirir ama yanlıştır.'],
    ['Yanlış bir önerme hangi doğruluk değeriyle gösterilir?', ['1','0','D','2'], 1, 'Yanlış = Y = 0.'],
    ['Doğru bir önerme hangi doğruluk değeriyle gösterilir?', ['0','1','Y','-1'], 1, 'Doğru = D = 1.'],
    ['Matematikte önermeler genellikle hangi harflerle gösterilir?', ['a,b,c','x,y,z','p,q,r,s','A,B,C'], 2, 'p, q, r, s küçük harfleri kullanılır.'],
    ['Doğruluk değerleri aynı olan iki önermeye ne denir?', ['Zıt','Denk','Boş','Bileşik'], 1, 'Denk önermeler aynı doğruluk değerine sahiptir.'],
    ['Bir önermenin değili nasıl gösterilebilir?', ['p²','p′ veya ~p','p+q','p/q'], 1, 'p′ veya ~p gösterimi kullanılır.'],
    ['p doğru ise p′ doğruluk değeri nedir?', ['1','0','D','Belirsiz'], 1, 'Doğrunun değili yanlıştır.'],
    ['p yanlış ise p′ doğruluk değeri nedir?', ['1','0','Y','Belirsiz'], 0, 'Yanlışın değili doğrudur.'],
    ['(p′)′ hangi önermeye denktir?', ['p','p′','0','1'], 0, 'Değilin değili önermenin kendisidir.'],
    ['1 bağımsız önerme için kaç doğruluk durumu vardır?', ['1','2','3','4'], 1, '2¹=2.'],
    ['2 bağımsız önerme için kaç doğruluk durumu vardır?', ['2','3','4','8'], 2, '2²=4.'],
    ['3 bağımsız önerme için kaç doğruluk durumu vardır?', ['4','6','8','9'], 2, '2³=8.'],
    ['n bağımsız önerme için kaç doğruluk durumu vardır?', ['n²','2n','2^n','n+2'], 2, 'Genel kural 2^n.'],
    ['Önermelerin doğruluk değerlerinin gösterildiği tabloya ne denir?', ['Sayı tablosu','Doğruluk tablosu','Oran tablosu','Kök tablosu'], 1, 'Adı doğruluk tablosudur.'],
    ['“Dünyanın en lezzetli meyvesi çilektir.” neden önerme değildir?', ['Sayı yok','Kişisel beğeni','Uzun cümle','Olumsuz'], 1, 'Kişisel beğeni kesin hüküm değildir.'],
    ['“Asal olan her sayı tek sayıdır.” ifadesi önerme midir?', ['Evet','Hayır','Soru olduğu için hayır','Beğeni olduğu için hayır'], 0, 'Kesin hüküm bildirir.'],
    ['“Asal olan her sayı tek sayıdır.” doğruluk değeri nedir?', ['1','0','D','Belirsiz'], 1, '2 asal ama çift olduğu için ifade yanlıştır.'],
    ['p ≡ 1 ve q ≡ 1 ise p ve q için ne söylenir?', ['Denk değildir','Denk önermelerdir','Biri yanlıştır','Önerme değildir'], 1, 'Doğruluk değerleri aynıdır.'],
    ['p ≡ 1 ve q ≡ 0 ise p ve q için ne söylenir?', ['Denk','Denk değil','İkisi de doğru','İkisi de yanlış'], 1, 'Doğruluk değerleri farklıdır.'],
    ['“Sevgi, başarılı bir öğrenci değildir.” PDF örneğine göre neden önerme değildir?', ['Kesin ölçüt verilmemiştir','Olumsuzdur','Kısadır','Sayı içermez'], 0, 'Başarılı olma ölçütü kesin verilmediği için doğruluk değeri belirlenmez.'],
    ['p yanlış ise (p′)′ doğruluk değeri kaçtır?', ['0','1','2','Belirsiz'], 0, '(p′)′ ≡ p, p yanlışsa 0.'],
    ['4 bağımsız önerme için kaç doğruluk durumu vardır?', ['8','12','16','32'], 2, '2⁴=16.'],
    ['Bir ifadenin önerme olması için hangi koşul gerekir?', ['Mutlaka doğru olması','Soru olması','Doğru ya da yanlışlığının kesin olması','İçinde sayı olması'], 2, 'Önerme için kesin doğruluk değeri gerekir.']
  ])
});

// 51-60. konular: sayma, kombinatorik ve olasılığa giriş.
extendTopicPractice(51, {
  summary: 'Sıralı ikili, bileşenlerin sırasının önemi, kartezyen çarpım ve kartezyen çarpımın eleman sayısı.',
  theory: {
    rules: [
      { title: 'Sıralı İkili',
        formulaLines: ['(a,b)'],
        tipLines: ['A kümesinden a, B kümesinden b elemanı alınarak elde edilen ifadeye sıralı ikili denir.', 'a birinci bileşen, b ikinci bileşendir.', 'a ve b farklı ise (a,b) ile (b,a) farklı sıralı ikililerdir.'] },
      { title: 'Sıralı İkililerin Eşitliği',
        formulaLines: ['(a,b)=(c,d)\\Rightarrow a=c\\;\\text{ve}\\;b=d'],
        tipLines: ['Sıralı ikililerde bileşenler aynı sırada eşit olmalıdır.'] },
      { title: 'Kartezyen Çarpım',
        formulaLines: ['A\\times B=\\{(a,b)\\mid a\\in A\\;\\text{ve}\\;b\\in B\\}'],
        tipLines: ['Birinci bileşen A’dan, ikinci bileşen B’den seçilir.'] },
      { title: 'Eleman Sayısı',
        formulaLines: ['s(A)=m,\\;s(B)=n\\Rightarrow s(A\\times B)=m\\cdot n'],
        tipLines: ['A veya B boş küme ise kartezyen çarpım boş kümedir.'] },
      { title: 'Dikkat',
        tipLines: ['A ve B farklı kümeler ise A×B genellikle B×A’ya eşit değildir.', 'Kartezyen çarpım grafiğinde birinci bileşen x ekseninde, ikinci bileşen y ekseninde gösterilir.'] }
    ],
    facts: ['Bileşenlerin yazılış sırası önemlidir.', 'A×∅ = ∅ ve ∅×A = ∅.', 'A×B elemanları sıralı ikilidir.'],
    warning: '(a,b) ile {a,b} aynı şey değildir; sıralı ikilide sıra önemlidir.'
  },
  examples: [
    { question: 'A={1,2} ve B={a,b,c} ise s(A×B) kaçtır?', steps: ['s(A)=2,\\;s(B)=3', 's(A\\times B)=2\\cdot3=6'], answer: '6' },
    { question: '(2x-1, y+3) = (7, 10) ise x+y kaçtır?', steps: ['2x-1=7\\Rightarrow2x=8\\Rightarrow x=4', 'y+3=10\\Rightarrow y=7', 'x+y=11'], answer: '11' },
    { question: 'A={2,3} ve B={5} ise A×B kümesini yazınız.', steps: ['A\\times B=\\{(2,5),(3,5)\\}'], answer: '\\{(2,5),(3,5)\\}' },
    { question: 's(A)=4 ve s(A×B)=20 ise s(B) kaçtır?', steps: ['4\\cdot s(B)=20', 's(B)=5'], answer: '5' },
    { question: 'A boş küme ise A×B nedir?', steps: [{ text: 'Boş kümeden birinci bileşen seçilemez.' }], answer: '\\varnothing' }
  ],
  quiz: quizRows([
    ['(3,5) sıralı ikilisinde birinci bileşen kaçtır?', ['3','5','8','2'], 0, 'Birinci bileşen ilk yazılan değerdir.'],
    ['(3,5) sıralı ikilisinde ikinci bileşen kaçtır?', ['3','5','8','2'], 1, 'İkinci bileşen ikinci yazılan değerdir.'],
    ['(a,b)=(4,7) ise a kaçtır?', ['3','4','7','11'], 1, 'Birinci bileşenler eşittir.'],
    ['(a,b)=(4,7) ise b kaçtır?', ['3','4','7','11'], 2, 'İkinci bileşenler eşittir.'],
    ['(x+2,3)=(8,3) ise x kaçtır?', ['4','5','6','8'], 2, 'x+2=8, x=6.'],
    ['(2x-1,5)=(9,5) ise x kaçtır?', ['4','5','6','7'], 1, '2x-1=9, x=5.'],
    ['A={1,2}, B={3,4} ise s(A×B) kaçtır?', ['2','3','4','5'], 2, '2·2=4.'],
    ['s(A)=3 ve s(B)=5 ise s(A×B) kaçtır?', ['8','12','15','20'], 2, '3·5=15.'],
    ['s(A)=4 ve s(A×B)=28 ise s(B) kaçtır?', ['5','6','7','8'], 2, '4·s(B)=28.'],
    ['A×∅ hangi kümeye eşittir?', ['A','∅','B','A×A'], 1, 'Boş kümeden bileşen seçilemez.'],
    ['A={a}, B={1,2} ise A×B hangisidir?', ['{(a,1),(a,2)}','{(1,a),(2,a)}','{a,1,2}','∅'], 0, 'Birinci bileşen A’dan gelir.'],
    ['A={a}, B={1,2} ise B×A hangisidir?', ['{(a,1),(a,2)}','{(1,a),(2,a)}','{a,1,2}','∅'], 1, 'Birinci bileşen B’den gelir.'],
    ['Genellikle A×B ile B×A için hangisi doğrudur?', ['Her zaman eşit','Genellikle farklı','Her zaman boş','Eleman sayısı farklı'], 1, 'Sıralı ikililerde sıra önemlidir.'],
    ['A×B grafiğinde birinci bileşen hangi eksendedir?', ['x','y','z','Hiçbiri'], 0, 'Birinci bileşen x ekseninde gösterilir.'],
    ['A×B grafiğinde ikinci bileşen hangi eksendedir?', ['x','y','z','Hiçbiri'], 1, 'İkinci bileşen y ekseninde gösterilir.'],
    ['(1,2) ile (2,1) için hangisi doğrudur?', ['Daima eşit','Farklıdır','Boş kümedir','Aynı noktadır'], 1, 'Bileşen sırası farklıdır.'],
    ['A={1,2,3}, B={4} ise A×B kaç elemanlıdır?', ['1','2','3','4'], 2, '3·1=3.'],
    ['A={1}, B={2,3,4,5} ise s(A×B) kaçtır?', ['1','2','3','4'], 3, '1·4=4.'],
    ['s(A)=2 ve s(B)=n, s(A×B)=18 ise n kaçtır?', ['6','7','8','9'], 3, '2n=18, n=9.'],
    ['(x,y)=(y,x) ise kesin olan nedir?', ['x=y','x=0','y=1','x+y=0'], 0, 'Bileşenler eşit olmalıdır.'],
    ['A×B elemanları hangi biçimdedir?', ['Sayı','Sıralı ikili','Üçgen','Fonksiyon'], 1, 'Kartezyen çarpım sıralı ikililerden oluşur.'],
    ['A={0,1}, B={0,1,2} ise A×B kaç elemanlıdır?', ['4','5','6','8'], 2, '2·3=6.'],
    ['(2,3) hangi kartezyen çarpımda olabilir?', ['{2}×{3}','{3}×{2}','{2}×∅','∅×{3}'], 0, '2 birinci, 3 ikinci bileşendir.'],
    ['s(A×B)=0 ise aşağıdakilerden hangisi olabilir?', ['A veya B boş','A ve B eşit','A tek elemanlı','B iki elemanlı'], 0, 'Çarpımın boş olması için kümelerden biri boş olabilir.'],
    ['A={1,2}, B={a,b} için (a,1) hangi çarpımın elemanıdır?', ['A×B','B×A','A×A','B×B'], 1, 'Birinci bileşen B’den, ikinci bileşen A’dan gelir.']
  ])
});

extendTopicPractice(52, {
  summary: 'Toplama yoluyla sayma, çarpma yoluyla sayma ve saymanın temel ilkesi.',
  theory: {
    rules: [
      { title: 'Sayma', tipLines: ['Bir kümenin elemanlarını pozitif tam sayılarla sıralı olarak bire bir eşleyerek bulma işlemine sayma denir.'] },
      { title: 'Toplama Yoluyla Sayma', formulaLines: ['A\\cap B=\\varnothing\\Rightarrow s(A\\cup B)=s(A)+s(B)'], tipLines: ['Ayrık durumlar varsa seçenek sayıları toplanır.'] },
      { title: 'Çarpma Yoluyla Sayma', formulaLines: ['s(A)=m,\\;s(B)=n\\Rightarrow s(A\\times B)=m\\cdot n'], tipLines: ['Birden fazla seçim art arda yapılacaksa seçenek sayıları çarpılır.'] },
      { title: 'Saymanın Temel İlkesi', formulaLines: ['n_1\\cdot n_2\\cdot n_3\\cdots n_k'], tipLines: ['k olay art arda gerçekleşiyorsa toplam durum sayısı olayların seçenek sayılarının çarpımıdır.'] }
    ],
    facts: ['Ayrık “veya” durumlarında toplama kullanılır.', 'Ardışık “ve” durumlarında çarpma kullanılır.', 'Koşul varsa her adımdaki seçenek sayısı değişebilir.'],
    warning: 'Aynı anda hem seçilecek hem sıralanacak durumlarda sadece toplama yapmak eksik saydırır.'
  },
  examples: [
    { question: '4 gömlek ve 3 pantolon ile kaç farklı kıyafet seçilebilir?', steps: ['4\\cdot3=12'], answer: '12' },
    { question: '3 farklı çorba veya 5 farklı tatlıdan biri seçilecekse kaç seçim vardır?', steps: ['3+5=8'], answer: '8' },
    { question: '4 mektup 3 posta kutusuna, her mektup herhangi bir kutuya atılacaksa kaç farklı dağıtım vardır?', steps: ['3\\cdot3\\cdot3\\cdot3=3^4=81'], answer: '81' },
    { question: '4 mektup 4 kutuya, her kutuya en fazla bir mektup gelecekse kaç dağıtım vardır?', steps: ['4\\cdot3\\cdot2\\cdot1=24'], answer: '24' },
    { question: 'Rakamları farklı üç basamaklı kaç sayı yazılır?', steps: [{ text: 'Yüzler basamağı için 9 seçenek vardır.' }, { text: 'Onlar basamağı için 9 seçenek kalır.' }, { text: 'Birler basamağı için 8 seçenek kalır.' }, '9\\cdot9\\cdot8=648'], answer: '648' }
  ],
  quiz: quizRows([
    ['3 gömlek ve 4 pantolonla kaç kombin yapılır?', ['7','10','12','24'], 2, '3·4=12.'],
    ['5 çorba veya 6 tatlıdan biri seçilecekse kaç seçim vardır?', ['11','20','30','56'], 0, 'Ayrık seçenekler toplanır.'],
    ['2 şapka, 3 gömlek, 4 pantolon kaç farklı kıyafet verir?', ['9','12','18','24'], 3, '2·3·4=24.'],
    ['4 basamaklı şifrede her basamak 0-9 olabilir. Kaç şifre vardır?', ['100','1000','10000','9999'], 2, '10^4=10000.'],
    ['4 basamaklı şifrede rakamlar farklı ve ilk basamak 0 olabilir. Kaç şifre vardır?', ['5040','4536','10000','9000'], 0, '10·9·8·7=5040.'],
    ['Rakamları farklı iki basamaklı kaç sayı vardır?', ['81','90','100','72'], 0, 'Onlar 9, birler 9: 81.'],
    ['Rakamları farklı üç basamaklı kaç sayı vardır?', ['648','720','729','900'], 0, '9·9·8=648.'],
    ['3 mektup 2 kutuya kaç şekilde atılır?', ['6','8','9','12'], 1, '2^3=8.'],
    ['3 mektup 3 kutuya, her kutuya en fazla bir mektup kaç şekilde atılır?', ['3','6','9','27'], 1, '3·2·1=6.'],
    ['Ayrık iki kümenin eleman sayıları 7 ve 5 ise birleşimleri kaç elemanlıdır?', ['2','12','35','75'], 1, '7+5=12.'],
    ['s(A)=4, s(B)=6 ise A×B kaç elemanlıdır?', ['10','20','24','30'], 2, '4·6=24.'],
    ['Bir lokantada 3 ana yemek, 2 içecek, 4 tatlı varsa bir menü kaç şekilde seçilir?', ['9','12','18','24'], 3, '3·2·4=24.'],
    ['4 kişiden başkan ve yardımcısı kaç şekilde seçilir?', ['6','8','12','16'], 2, '4·3=12.'],
    ['4 kişiden yalnız bir temsilci kaç şekilde seçilir?', ['4','8','12','16'], 0, 'Tek seçim: 4.'],
    ['2 farklı yol A’dan B’ye, 3 farklı yol B’den C’ye varsa A’dan C’ye kaç yol vardır?', ['5','6','8','9'], 1, '2·3=6.'],
    ['2 farklı yol A’dan C’ye doğrudan, 6 farklı yol aktarmalıysa toplam kaç yol vardır?', ['8','12','4','6'], 0, 'Ayrık yollar toplanır.'],
    ['5 kişiden bir başkan kaç şekilde seçilir?', ['5','10','20','25'], 0, '5 seçenek.'],
    ['5 kişiden başkan ve sekreter kaç şekilde seçilir?', ['10','15','20','25'], 2, '5·4=20.'],
    ['Bir zar ve bir para birlikte atılırsa kaç çıktı vardır?', ['6','8','12','36'], 2, '6·2=12.'],
    ['İki zar birlikte atılırsa kaç çıktı vardır?', ['6','12','18','36'], 3, '6·6=36.'],
    ['Üç para birlikte atılırsa kaç çıktı vardır?', ['3','6','8','9'], 2, '2^3=8.'],
    ['Toplama yoluyla sayma hangi durumda kullanılır?', ['Ayrık seçeneklerde','Ardışık seçimlerde','Sadece şifrede','Sadece geometride'], 0, 'Ayrık veya durumları toplanır.'],
    ['Çarpma yoluyla sayma hangi durumda kullanılır?', ['Ayrık seçeneklerde','Ardışık seçimlerde','Sadece toplamda','Sadece farkta'], 1, 'Art arda seçimlerde çarpılır.'],
    ['3 farklı kitap ve 5 farklı defterden biri alınacaksa kaç seçim vardır?', ['8','15','20','35'], 0, 'Kitap veya defter: 3+5=8.'],
    ['3 farklı kitap ve 5 farklı defterden bir kitap ve bir defter alınacaksa kaç seçim vardır?', ['8','15','20','35'], 1, 'Kitap ve defter: 3·5=15.']
  ])
});

extendTopicPractice(53, {
  summary: 'n! tanımı, 0! ve 1!, faktöriyel sadeleştirme ve asal çarpan kuvveti bulma.',
  theory: {
    rules: [
      { title: 'Faktöriyel', formulaLines: ['n!=1\\cdot2\\cdot3\\cdots(n-1)\\cdot n'], tipLines: ['1’den n’ye kadar ardışık pozitif tam sayıların çarpımına n faktöriyel denir.'] },
      { title: 'Özel Değerler', formulaLines: ['0!=1', '1!=1'], tipLines: ['0! değeri tanım gereği 1 kabul edilir.'] },
      { title: 'Açılım', formulaLines: ['n!=n\\cdot(n-1)!', 'n!=(n)(n-1)(n-2)!'], tipLines: ['Sadeleştirme yaparken büyük faktöriyel küçük faktöriyele göre açılır.'] },
      { title: 'Asal Çarpan Kuvveti', tipLines: ['n! içindeki bir asal sayının kuvvetini bulmak için n sayısı o asala bölünür; bölüm tam sayı kısımları toplanır.'] }
    ],
    facts: ['Birbirinden farklı n nesne yan yana n! farklı şekilde sıralanır.', 'Toplama ve çıkarma içeren faktöriyellerde küçük faktöriyel ortak çarpan alınır.', 'n! çok hızlı büyür.'],
    warning: '9!+10! ifadesinde faktöriyeller doğrudan toplanmaz; ortak faktöriyel alınır.'
  },
  examples: [
    { question: '5! kaçtır?', steps: ['5!=1\\cdot2\\cdot3\\cdot4\\cdot5=120'], answer: '120' },
    { question: '\\dfrac{8!}{6!} işleminin sonucu kaçtır?', steps: ['\\dfrac{8\\cdot7\\cdot6!}{6!}=8\\cdot7=56'], answer: '56' },
    { question: '\\dfrac{9!+10!}{9!-8!} işleminin sonucu kaçtır?', steps: ['9!+10!=9!(1+10)=11\\cdot9!', '9!-8!=9\\cdot8!-8!=8\\cdot8!', '\\dfrac{11\\cdot9\\cdot8!}{8\\cdot8!}=\\dfrac{99}{8}'], answer: '\\dfrac{99}{8}' },
    { question: '29! içinde 3 asal çarpanı en fazla kaç kez bulunur?', steps: ['\\left\\lfloor\\dfrac{29}{3}\\right\\rfloor=9', '\\left\\lfloor\\dfrac{29}{9}\\right\\rfloor=3', '\\left\\lfloor\\dfrac{29}{27}\\right\\rfloor=1', '9+3+1=13'], answer: '13' },
    { question: 'n! = 720 ise n kaçtır?', steps: ['6!=720'], answer: '6' }
  ],
  quiz: quizRows([
    ['0! kaçtır?', ['0','1','2','Tanımsız'], 1, '0!=1 kabul edilir.'],
    ['1! kaçtır?', ['0','1','2','Tanımsız'], 1, '1!=1.'],
    ['4! kaçtır?', ['12','18','24','36'], 2, '4·3·2·1=24.'],
    ['5! kaçtır?', ['60','100','120','240'], 2, '5!=120.'],
    ['6! kaçtır?', ['360','480','720','840'], 2, '6!=720.'],
    ['7!/5! kaçtır?', ['12','21','42','56'], 2, '7·6=42.'],
    ['8!/6! kaçtır?', ['14','28','48','56'], 3, '8·7=56.'],
    ['10!/9! kaçtır?', ['9','10','19','90'], 1, '10!/9!=10.'],
    ['n! = n· hangi ifadeye eşittir?', ['(n-1)!','(n+1)!','n!','0!'], 0, 'n!=n·(n-1)!'],
    ['5! + 5! kaçtır?', ['120','180','240','360'], 2, '2·5!=240.'],
    ['6! / 3! kaçtır?', ['60','90','120','180'], 2, '720/6=120.'],
    ['4!·3! kaçtır?', ['72','96','120','144'], 3, '24·6=144.'],
    ['Birbirinden farklı 5 nesne yan yana kaç şekilde sıralanır?', ['25','60','100','120'], 3, '5!=120.'],
    ['Birbirinden farklı 4 kitap kaç şekilde sıralanır?', ['12','16','24','32'], 2, '4!=24.'],
    ['n! = 24 ise n kaçtır?', ['3','4','5','6'], 1, '4!=24.'],
    ['n! = 120 ise n kaçtır?', ['4','5','6','7'], 1, '5!=120.'],
    ['8! içinde 2 çarpanı en fazla kaç kez vardır?', ['4','5','6','7'], 3, '⌊8/2⌋+⌊8/4⌋+⌊8/8⌋=4+2+1=7.'],
    ['10! içinde 5 çarpanı en fazla kaç kez vardır?', ['1','2','3','4'], 1, '⌊10/5⌋=2.'],
    ['12! içinde 3 çarpanı en fazla kaç kez vardır?', ['4','5','6','7'], 1, '⌊12/3⌋+⌊12/9⌋=4+1=5.'],
    ['9!+10! ifadesinde hangi faktöriyel ortak alınabilir?', ['8!','9!','10!','11!'], 1, '10!=10·9!, ortak 9! alınır.'],
    ['9!-8! ifadesinde hangi faktöriyel ortak alınabilir?', ['7!','8!','9!','10!'], 1, '9!=9·8!, ortak 8! alınır.'],
    ['3! + 4! kaçtır?', ['24','30','36','42'], 1, '6+24=30.'],
    ['5! - 4! kaçtır?', ['72','84','96','100'], 2, '120-24=96.'],
    ['2!·5! / 4! kaçtır?', ['5','10','15','20'], 1, '2·120/24=10.'],
    ['(n+1)! / n! ifadesi neye eşittir?', ['n','n+1','n!','1'], 1, '(n+1)!=(n+1)n!.']
  ])
});

extendTopicPractice(54, {
  summary: 'n elemanlı kümeden r eleman seçilip sıralanması: permütasyon.',
  theory: {
    rules: [
      { title: 'Permütasyon',
        tipLines: ['n elemanlı bir kümenin birbirinden farklı r elemanından oluşan dizilişlerin her birine permütasyon denir.', 'Permütasyonda sıralama önemlidir.'] },
      { title: 'Permütasyon Sayısı',
        formulaLines: ['P(n,r)=\\dfrac{n!}{(n-r)!}'],
        tipLines: ['n ve r doğal sayı, r≤n olmalıdır.'] },
      { title: 'Özel Durumlar',
        formulaLines: ['P(n,0)=1', 'P(n,1)=n', 'P(n,n)=n!'],
        tipLines: ['Tüm elemanları sıralamak n! farklı diziliş verir.'] }
    ],
    facts: ['Başkan-sekreter gibi görevler farklıysa permütasyon kullanılır.', 'Sıralı dizilişlerde AB ile BA farklıdır.', 'P(n,r)=C(n,r)·r!'],
    warning: 'Sadece grup seçiliyorsa permütasyon değil kombinasyon kullanılır.'
  },
  examples: [
    { question: 'P(8,3) kaçtır?', steps: ['P(8,3)=\\dfrac{8!}{5!}=8\\cdot7\\cdot6=336'], answer: '336' },
    { question: '5 kişi yan yana kaç farklı şekilde sıralanır?', steps: ['5!=120'], answer: '120' },
    { question: '6 kişiden başkan, başkan yardımcısı ve sekreter kaç şekilde seçilir?', steps: ['P(6,3)=6\\cdot5\\cdot4=120'], answer: '120' },
    { question: 'A={a,b,c} kümesinin ikili permütasyonları kaç tanedir?', steps: ['P(3,2)=3\\cdot2=6'], answer: '6' },
    { question: 'P(n,2)=30 ise n kaçtır?', steps: ['n(n-1)=30', '6\\cdot5=30'], answer: '6' }
  ],
  quiz: quizRows([
    ['P(5,2) kaçtır?', ['10','15','20','25'], 2, '5·4=20.'],
    ['P(6,2) kaçtır?', ['20','24','30','36'], 2, '6·5=30.'],
    ['P(7,3) kaçtır?', ['120','180','210','240'], 2, '7·6·5=210.'],
    ['P(8,3) kaçtır?', ['240','300','336','420'], 2, '8·7·6=336.'],
    ['P(n,1) neye eşittir?', ['1','n','n!','0'], 1, 'P(n,1)=n.'],
    ['P(n,0) neye eşittir?', ['0','1','n','n!'], 1, 'P(n,0)=1.'],
    ['P(n,n) neye eşittir?', ['0','1','n','n!'], 3, 'P(n,n)=n!.'],
    ['5 farklı kitap rafa kaç şekilde dizilir?', ['60','100','120','240'], 2, '5!=120.'],
    ['4 kişiden başkan ve sekreter kaç şekilde seçilir?', ['6','8','12','16'], 2, 'P(4,2)=12.'],
    ['6 kişiden 3 farklı görevli kaç şekilde seçilir?', ['60','90','120','180'], 2, 'P(6,3)=120.'],
    ['Permütasyonda sıra önemli midir?', ['Evet','Hayır','Sadece sayılarda','Sadece kümelerde'], 0, 'Diziliş olduğu için sıra önemlidir.'],
    ['AB ve BA permütasyon olarak nasıldır?', ['Aynı','Farklı','Boş','Tanımsız'], 1, 'Sıralama farklıdır.'],
    ['P(4,4) kaçtır?', ['12','16','24','32'], 2, '4!=24.'],
    ['P(3,2) kaçtır?', ['3','4','5','6'], 3, '3·2=6.'],
    ['P(10,2) kaçtır?', ['45','90','100','120'], 1, '10·9=90.'],
    ['P(9,1) kaçtır?', ['1','8','9','10'], 2, 'P(n,1)=n.'],
    ['P(6,0) kaçtır?', ['0','1','5','6'], 1, 'P(n,0)=1.'],
    ['n(n-1)=42 ise P(n,2)=42 için n kaçtır?', ['6','7','8','9'], 1, '7·6=42.'],
    ['P(n,2)=20 ise n kaçtır?', ['4','5','6','7'], 1, '5·4=20.'],
    ['7 yarışmacıdan ilk üç derece kaç şekilde oluşur?', ['35','105','210','343'], 2, 'P(7,3)=210.'],
    ['5 kişilik sıraya 3 kişi kaç şekilde oturur?', ['30','45','60','90'], 2, 'P(5,3)=60.'],
    ['Bir şifre 4 farklı harften 2’si sıralanarak oluşturulursa kaç şifre vardır?', ['6','8','12','16'], 2, 'P(4,2)=12.'],
    ['8 öğrenciden sınıf başkanı ve yardımcısı kaç şekilde seçilir?', ['28','40','56','64'], 2, '8·7=56.'],
    ['Permütasyon formülü hangisidir?', ['n!/(n-r)!','n!/(r!(n-r)!)','n+r','n-r'], 0, 'P(n,r)=n!/(n-r)!.'],
    ['Sadece 3 kişilik komite seçiliyorsa hangi konu daha uygundur?', ['Permütasyon','Kombinasyon','Faktöriyel değil','Kartezyen'], 1, 'Komitede sıra yoktur.']
  ])
});

extendTopicPractice(55, {
  summary: 'Aynı türden nesneler içeren dizilişlerde tekrarlı permütasyon.',
  theory: {
    rules: [
      { title: 'Tekrarlı Permütasyon',
        formulaLines: ['\\dfrac{n!}{n_1!\\cdot n_2!\\cdots n_r!}'],
        tipLines: ['n nesnenin n1 tanesi özdeş, n2 tanesi özdeş, ... ise farklı diziliş sayısı bu formülle bulunur.'] },
      { title: 'Özdeş Nesneler',
        tipLines: ['Aynı harflerin yer değiştirmesi yeni bir diziliş oluşturmaz.', 'Bu yüzden toplam diziliş sayısı tekrar eden harflerin faktöriyellerine bölünür.'] }
    ],
    facts: ['ANNE kelimesinde N harfi 2 kez tekrar eder.', 'MATEMATIK gibi kelimelerde her tekrar eden harf ayrı ayrı dikkate alınır.', 'Seçilen harf sayısı değişiyorsa durumlar ayrı incelenir.'],
    warning: 'Tekrarlı harfleri bölmeyi unutmak sonucu fazla saydırır.'
  },
  examples: [
    { question: 'ANNE kelimesinin harfleri kaç farklı şekilde sıralanır?', steps: [{ text: '4 harf var, N iki kez tekrar eder.' }, '\\dfrac{4!}{2!}=12'], answer: '12' },
    { question: 'KALABALIK kelimesindeki harfler kaç farklı şekilde sıralanır?', steps: [{ text: '9 harf vardır.' }, 'A:3,\\;K:2,\\;L:2', '\\dfrac{9!}{3!\\cdot2!\\cdot2!}=15120'], answer: '15120' },
    { question: 'AAB harfleri kaç farklı şekilde sıralanır?', steps: ['\\dfrac{3!}{2!}=3'], answer: '3' },
    { question: 'MASSA kelimesinin harfleri kaç farklı şekilde sıralanır?', steps: [{ text: '5 harf vardır.' }, 'A:2,\\;S:2', '\\dfrac{5!}{2!\\cdot2!}=30'], answer: '30' },
    { question: 'EŞEK kelimesinden herhangi 3 harf seçilerek kaç farklı sıralanış elde edilir?', steps: [{ text: 'E harflerinden biri kullanılmazsa Ş,E,K ile 3!=6 diziliş.' }, { text: 'Ş kullanılmazsa E,E,K ile 3!/2!=3 diziliş.' }, { text: 'K kullanılmazsa E,Ş,E ile 3!/2!=3 diziliş.' }, '6+3+3=12'], answer: '12' }
  ],
  quiz: quizRows([
    ['AAB harfleri kaç farklı sıralanır?', ['2','3','4','6'], 1, '3!/2!=3.'],
    ['ANNE kelimesi kaç farklı sıralanır?', ['6','12','18','24'], 1, '4!/2!=12.'],
    ['MAMA kelimesi kaç farklı sıralanır?', ['4','6','12','24'], 1, '4!/(2!2!)=6.'],
    ['ATA kelimesi kaç farklı sıralanır?', ['2','3','4','6'], 1, '3!/2!=3.'],
    ['KALE kelimesi kaç farklı sıralanır?', ['12','18','24','36'], 2, 'Tüm harfler farklı: 4!=24.'],
    ['BABA kelimesi kaç farklı sıralanır?', ['4','6','8','12'], 1, '4!/(2!2!)=6.'],
    ['KİTAP kelimesi kaç farklı sıralanır?', ['60','100','120','240'], 2, '5 farklı harf: 5!=120.'],
    ['AABB kaç farklı sıralanır?', ['4','6','8','12'], 1, '4!/(2!2!)=6.'],
    ['AAAB kaç farklı sıralanır?', ['3','4','6','12'], 1, '4!/3!=4.'],
    ['AAAAB kaç farklı sıralanır?', ['4','5','6','10'], 1, '5!/4!=5.'],
    ['MAT kelimesi kaç farklı sıralanır?', ['3','6','9','12'], 1, '3!=6.'],
    ['TEPE kelimesi kaç farklı sıralanır?', ['6','8','12','24'], 2, '4!/2!=12.'],
    ['DADA kelimesi kaç farklı sıralanır?', ['4','6','8','12'], 1, '4!/(2!2!)=6.'],
    ['ABCA kaç farklı sıralanır?', ['6','8','12','24'], 2, '4!/2!=12.'],
    ['AABC kaç farklı sıralanır?', ['6','8','12','24'], 2, '4!/2!=12.'],
    ['AABBC kaç farklı sıralanır?', ['20','30','40','60'], 1, '5!/(2!2!)=30.'],
    ['AAAA kaç farklı sıralanır?', ['1','2','4','24'], 0, 'Tüm harfler aynı: 1.'],
    ['ABCDEF kaç farklı sıralanır?', ['120','360','720','5040'], 2, '6!=720.'],
    ['AABBCC kaç farklı sıralanır?', ['60','90','120','180'], 1, '6!/(2!2!2!)=90.'],
    ['Tekrarlı permütasyonda tekrar eden nesneler için ne yapılır?', ['Çarpılır','Bölünür','Toplanır','Silinir'], 1, 'Tekrar faktöriyellerine bölünür.'],
    ['5 nesnenin 2’si özdeşse farklı diziliş sayısı nedir?', ['5!/2!','5!·2!','5!-2!','2!/5!'], 0, 'Özdeş iki nesne için 2! ile bölünür.'],
    ['6 nesnenin 3’ü bir tür, 2’si bir tür özdeşse formül nedir?', ['6!/(3!2!)','6!·3!·2!','6!/5!','3!2!'], 0, 'Tekrar eden gruplara bölünür.'],
    ['KAL kelimesinde tekrar var mı?', ['Evet','Hayır','İki tane','Üç tane'], 1, 'K, A, L farklıdır.'],
    ['KAKA kelimesi kaç farklı sıralanır?', ['4','6','8','12'], 1, '4!/(2!2!)=6.'],
    ['EŞEK örneğinde toplam kaç farklı 3 harfli sıralanış bulunur?', ['9','10','12','18'], 2, '6+3+3=12.']
  ])
});

extendTopicPractice(56, {
  summary: 'Sırasız seçim: kombinasyon kavramı, özellikleri ve permütasyonla ilişkisi.',
  theory: {
    rules: [
      { title: 'Kombinasyon', tipLines: ['n elemanlı bir kümenin r elemanlı alt kümelerinin her birine kombinasyon denir.', 'Kombinasyonda seçim önemlidir, sıralama önemli değildir.'] },
      { title: 'Kombinasyon Sayısı', formulaLines: ['C(n,r)=\\binom{n}{r}=\\dfrac{n!}{r!\\cdot(n-r)!}'], tipLines: ['n ve r doğal sayı, r≤n olmalıdır.'] },
      { title: 'Permütasyon İlişkisi', formulaLines: ['P(n,r)=C(n,r)\\cdot r!'], tipLines: ['Önce grup seçilir, sonra seçilen grup sıralanır.'] },
      { title: 'Özellikler', formulaLines: ['\\binom{n}{0}=1', '\\binom{n}{1}=n', '\\binom{n}{n}=1', '\\binom{n}{r}=\\binom{n}{n-r}', '\\binom{n}{0}+\\binom{n}{1}+\\cdots+\\binom{n}{n}=2^n'], tipLines: ['Tamamlayıcı seçimler aynı sayıda yapılır.'] }
    ],
    facts: ['Komite seçimi kombinasyon örneğidir.', 'Sıra varsa permütasyon, sıra yoksa kombinasyon kullanılır.', 'Alt küme sayısı kombinasyon toplamıdır.'],
    warning: 'Başkan-sekreter gibi görevler farklıysa kombinasyon değil permütasyon gerekir.'
  },
  examples: [
    { question: 'C(7,3) kaçtır?', steps: ['\\binom{7}{3}=\\dfrac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}=35'], answer: '35' },
    { question: '8 kişiden 3 kişilik komite kaç şekilde seçilir?', steps: ['\\binom{8}{3}=56'], answer: '56' },
    { question: 'C(n,2)=21 ise n kaçtır?', steps: ['\\dfrac{n(n-1)}{2}=21', 'n(n-1)=42', 'n=7'], answer: '7' },
    { question: 'C(10,8) kaçtır?', steps: ['\\binom{10}{8}=\\binom{10}{2}', '\\dfrac{10\\cdot9}{2}=45'], answer: '45' },
    { question: '6 elemanlı kümenin tüm alt küme sayısı kaçtır?', steps: ['2^6=64'], answer: '64' }
  ],
  quiz: quizRows([
    ['C(5,2) kaçtır?', ['5','10','15','20'], 1, '5·4/2=10.'],
    ['C(6,2) kaçtır?', ['12','15','18','30'], 1, '6·5/2=15.'],
    ['C(7,3) kaçtır?', ['21','28','35','42'], 2, '7·6·5/(3·2·1)=35.'],
    ['C(8,3) kaçtır?', ['36','48','56','64'], 2, '8·7·6/6=56.'],
    ['C(10,2) kaçtır?', ['40','45','50','55'], 1, '10·9/2=45.'],
    ['C(10,8) kaçtır?', ['36','45','56','90'], 1, 'C(10,8)=C(10,2)=45.'],
    ['C(n,0) kaçtır?', ['0','1','n','n!'], 1, 'Boş alt küme 1 tanedir.'],
    ['C(n,n) kaçtır?', ['0','1','n','n!'], 1, 'Kümenin kendisi 1 tanedir.'],
    ['C(n,1) kaçtır?', ['0','1','n','n!'], 2, 'Tek eleman seçimi n yoldur.'],
    ['Kombinasyonda sıra önemli midir?', ['Evet','Hayır','Sadece r=2 ise','Sadece n=0 ise'], 1, 'Kombinasyonda sıralama dikkate alınmaz.'],
    ['6 kişiden 2 kişi kaç şekilde seçilir?', ['12','15','30','36'], 1, 'C(6,2)=15.'],
    ['8 kişiden 3 kişi kaç şekilde seçilir?', ['48','56','64','72'], 1, 'C(8,3)=56.'],
    ['5 elemanlı kümenin 2 elemanlı alt küme sayısı kaçtır?', ['5','10','15','20'], 1, 'C(5,2)=10.'],
    ['7 elemanlı kümenin tüm alt küme sayısı kaçtır?', ['49','64','128','256'], 2, '2^7=128.'],
    ['6 elemanlı kümenin öz alt küme sayısı kaçtır?', ['31','32','63','64'], 2, '2^6-1=63.'],
    ['P(n,r)=C(n,r)· hangi ifadeye eşittir?', ['r!','n!','(n-r)!','n+r'], 0, 'Seçilen r eleman r! şekilde sıralanır.'],
    ['C(9,7) kaçtır?', ['21','28','36','45'], 2, 'C(9,7)=C(9,2)=36.'],
    ['C(12,1) kaçtır?', ['1','11','12','24'], 2, 'C(n,1)=n.'],
    ['C(12,11) kaçtır?', ['1','11','12','24'], 2, 'C(12,11)=C(12,1)=12.'],
    ['3 kişilik komitede görev yoksa hangi konu kullanılır?', ['Permütasyon','Kombinasyon','Kartezyen','Faktöriyel değil'], 1, 'Sıra/görev yoksa kombinasyon.'],
    ['Başkan ve yardımcısı seçiliyorsa hangi konu daha uygundur?', ['Kombinasyon','Permütasyon','Alt küme','Olasılık'], 1, 'Görevler farklıdır, sıra önemlidir.'],
    ['C(n,2)=15 ise n kaçtır?', ['5','6','7','8'], 1, 'n(n-1)/2=15, n=6.'],
    ['C(n,2)=28 ise n kaçtır?', ['7','8','9','10'], 1, '8·7/2=28.'],
    ['C(6,4) kaçtır?', ['10','15','20','30'], 1, 'C(6,4)=C(6,2)=15.'],
    ['C(5,0)+C(5,1)+...+C(5,5) kaçtır?', ['10','16','25','32'], 3, 'Toplam 2^5=32.']
  ])
});

extendTopicPractice(57, {
  summary: 'Kombinasyon problemlerinde en az, en çok, içeren/içermeyen ve gruplu seçim durumları.',
  theory: {
    rules: [
      { title: 'Problemlerde Kombinasyon', tipLines: ['Kombinasyon sayısı ile farklı gruplamaların sayısı kastedilir.', 'Hesaplamada sıralama değil seçilebilme sayısı önemlidir.'] },
      { title: 'En Fazla / En Az', tipLines: ['Koşula uyan durumlar ayrı ayrı yazılır ve toplanır.', '“En fazla 2” ifadesi 0, 1 veya 2 olabilir.'] },
      { title: 'İçeren / İçermeyen', tipLines: ['Belirli bir eleman kesin seçilecekse önce o eleman alınır, kalan seçim diğerlerinden yapılır.', 'Belirli bir eleman seçilmeyecekse o eleman kümeden çıkarılır.'] }
    ],
    facts: ['Ayrık durumlar toplanır.', 'Aynı anda seçilecek gruplar çarpılır.', 'Tüm durumdan istenmeyen durum çıkarma çoğu soruda hızlıdır.'],
    warning: '“En az” ve “en fazla” ifadelerinde bütün uygun durumları yazmadan işlem yapmak eksik saydırır.'
  },
  examples: [
    { question: '6 matematik, 4 fizik öğretmeni arasından en fazla 2 fizik öğretmeninin bulunduğu 4 kişilik komisyon kaç şekilde seçilir?', steps: ['2\\text{ fizik}:\\binom{4}{2}\\binom{6}{2}=6\\cdot15=90', '1\\text{ fizik}:\\binom{4}{1}\\binom{6}{3}=4\\cdot20=80', '0\\text{ fizik}:\\binom{4}{0}\\binom{6}{4}=1\\cdot15=15', '90+80+15=185'], answer: '185' },
    { question: '8 kişiden Ali’nin bulunduğu 3 kişilik ekip kaç şekilde seçilir?', steps: ['Ali seçildi.', 'Kalan 2 kişi diğer 7 kişiden seçilir.', '\\binom{7}{2}=21'], answer: '21' },
    { question: '8 kişiden Ali’nin bulunmadığı 3 kişilik ekip kaç şekilde seçilir?', steps: ['Ali çıkarılır, 7 kişi kalır.', '\\binom{7}{3}=35'], answer: '35' },
    { question: '5 kız, 4 erkek arasından 2 kız 1 erkek kaç şekilde seçilir?', steps: ['\\binom{5}{2}\\binom{4}{1}=10\\cdot4=40'], answer: '40' },
    { question: '10 kişiden en az biri Ali olmak üzere 4 kişi kaç şekilde seçilir?', steps: ['Ali kesin seçilir.', 'Kalan 3 kişi diğer 9 kişiden seçilir.', '\\binom{9}{3}=84'], answer: '84' }
  ],
  quiz: quizRows([
    ['6 matematik, 4 fizik arasından 2 fizik 2 matematik kaç şekilde seçilir?', ['60','75','90','120'], 2, 'C(4,2)C(6,2)=6·15=90.'],
    ['6 matematik, 4 fizik arasından 1 fizik 3 matematik kaç şekilde seçilir?', ['60','80','90','120'], 1, 'C(4,1)C(6,3)=4·20=80.'],
    ['6 matematik, 4 fizik arasından 0 fizik 4 matematik kaç şekilde seçilir?', ['10','15','20','30'], 1, 'C(6,4)=15.'],
    ['En fazla 2 fizik bulunan komisyon örneğinde toplam kaçtır?', ['175','180','185','190'], 2, '90+80+15=185.'],
    ['8 kişiden Ali’nin olduğu 3 kişilik ekip kaçtır?', ['21','28','35','56'], 0, 'C(7,2)=21.'],
    ['8 kişiden Ali’nin olmadığı 3 kişilik ekip kaçtır?', ['21','28','35','56'], 2, 'C(7,3)=35.'],
    ['5 kız, 4 erkekten 2 kız 1 erkek kaç şekilde seçilir?', ['20','30','40','50'], 2, 'C(5,2)C(4,1)=40.'],
    ['5 kız, 4 erkekten 1 kız 2 erkek kaç şekilde seçilir?', ['20','30','40','50'], 1, 'C(5,1)C(4,2)=5·6=30.'],
    ['10 kişiden Ali kesin olacak şekilde 4 kişi kaç seçilir?', ['56','72','84','90'], 2, 'C(9,3)=84.'],
    ['10 kişiden Ali olmayacak şekilde 4 kişi kaç seçilir?', ['84','126','210','252'], 1, 'C(9,4)=126.'],
    ['7 kişiden en az biri Ayşe olacak 3 kişilik ekip kaçtır?', ['10','15','20','35'], 1, 'Ayşe seçilir, C(6,2)=15.'],
    ['7 kişiden Ayşe ve Ali birlikte olacak 4 kişilik ekip kaçtır?', ['10','15','20','35'], 0, 'İkisi seçili, C(5,2)=10.'],
    ['7 kişiden Ayşe ve Ali’nin ikisinin de olmadığı 3 kişilik ekip kaçtır?', ['5','10','15','20'], 1, 'Ayşe ve Ali çıkarılır; kalan 5 kişiden C(5,3)=10.'], 
    ['7 kişiden Ayşe veya Ali’den en az biri olacak 3 kişilik ekip kaçtır?', ['20','25','30','35'], 1, 'Tüm 35, ikisi de yok 10, 35-10=25.'],
    ['9 kişiden 4 kişi seçilecekse toplam kaç seçim vardır?', ['84','126','210','302'], 1, 'C(9,4)=126.'],
    ['9 kişiden belirli 2 kişi seçilmeyecekse 4 kişi kaç şekilde seçilir?', ['21','35','70','126'], 1, 'Kalan 7 kişiden C(7,4)=35.'],
    ['4 doktor, 5 mühendis arasından 2 doktor 2 mühendis kaç seçilir?', ['30','40','50','60'], 3, 'C(4,2)C(5,2)=6·10=60.'],
    ['4 doktor, 5 mühendis arasından hiç doktor olmayan 3 kişi kaç seçilir?', ['5','10','15','20'], 1, 'Yalnız mühendis seçilir: C(5,3)=10.'],
    ['4 doktor, 5 mühendis arasından en az 1 doktorlu 3 kişi kaç seçilir?', ['64','70','74','80'], 2, '84-10=74.'],
    ['Bir gruptan 3 kişilik komite seçerken sıra önemli midir?', ['Evet','Hayır','Sadece başkan varsa','Sadece küçük grupta'], 1, 'Komitede görev yoksa sıra yoktur.'],
    ['En fazla 1 erkek demek hangi durumları içerir?', ['Sadece 1','0 veya 1','1 veya 2','Hepsi'], 1, 'En fazla 1: 0 ya da 1.'],
    ['En az 2 kız demek hangi durumları içerir?', ['0 veya 1','Sadece 2','2 ve üzeri','Sadece 3'], 2, 'En az 2: 2, 3, ...'],
    ['Belirli bir kişi kesin seçilecekse önce ne yapılır?', ['O kişi çıkarılır','O kişi seçilmiş kabul edilir','Tüm durum silinir','Sıra yapılır'], 1, 'Kesin kişi sabitlenir.'],
    ['Belirli bir kişi seçilmeyecekse ne yapılır?', ['Kümeden çıkarılır','Kesin seçilir','İki kez sayılır','Faktöriyel alınır'], 0, 'O kişi aday kümeden çıkarılır.'],
    ['Tüm durumdan istenmeyeni çıkarma hangi sorularda yararlı olur?', ['En az sorularında','Sadece faktöriyelde','Sadece kartezyende','Hiçbirinde'], 0, 'En az bir gibi sorularda hızlıdır.']
  ])
});

extendTopicPractice(58, {
  summary: 'Kombinasyonun geometride doğru, üçgen, dörtgen, çokgen ve kesişim noktası sayılarında kullanılması.',
  theory: {
    rules: [
      { title: 'Noktalardan Doğru', formulaLines: ['\\binom{n}{2}'], tipLines: ['Herhangi üçü doğrusal olmayan n noktadan iki nokta seçilerek doğru oluşur.'] },
      { title: 'Noktalardan Üçgen', formulaLines: ['\\binom{n}{3}'], tipLines: ['Herhangi üçü doğrusal olmayan n noktadan üç nokta seçilerek üçgen oluşur.'] },
      { title: 'Noktalardan Dörtgen ve r-gen', formulaLines: ['\\binom{n}{4}', '\\binom{n}{r}'], tipLines: ['Dörtgen için 4 nokta, r-gen için r nokta seçilir.'] },
      { title: 'Doğruların Kesişimi', formulaLines: ['\\binom{n}{2}'], tipLines: ['Aynı düzlemde farklı ve çakışık olmayan n doğru en çok C(n,2) noktada kesişir.'] },
      { title: 'Çemberlerin Kesişimi', formulaLines: ['2\\binom{n}{2}'], tipLines: ['İki çember en çok iki noktada kesişir.'] }
    ],
    facts: ['Paralel doğrular kesişmez.', 'Çakışık doğrular sonsuz noktada kesişir.', 'İki üçgen en çok 6 noktada kesişebilir.'],
    warning: 'Aynı doğru üzerinde üç nokta varsa üçgen sayısında bu doğrusal üçlüler çıkarılmalıdır.'
  },
  examples: [
    { question: 'Herhangi üçü doğrusal olmayan 7 noktadan kaç doğru geçer?', steps: ['\\binom{7}{2}=21'], answer: '21' },
    { question: 'Herhangi üçü doğrusal olmayan 7 noktadan kaç üçgen oluşur?', steps: ['\\binom{7}{3}=35'], answer: '35' },
    { question: '6 nokta ile kaç dörtgen oluşturulur?', steps: ['\\binom{6}{4}=15'], answer: '15' },
    { question: '5 doğru en çok kaç noktada kesişir?', steps: ['\\binom{5}{2}=10'], answer: '10' },
    { question: '4 çember en çok kaç noktada kesişir?', steps: ['2\\binom{4}{2}=2\\cdot6=12'], answer: '12' }
  ],
  quiz: quizRows([
    ['6 noktadan en çok kaç doğru geçer?', ['12','15','18','20'], 1, 'C(6,2)=15.'],
    ['7 noktadan en çok kaç doğru geçer?', ['21','28','35','42'], 0, 'C(7,2)=21.'],
    ['8 noktadan en çok kaç doğru geçer?', ['28','35','42','56'], 0, 'C(8,2)=28.'],
    ['6 noktadan en çok kaç üçgen oluşur?', ['15','18','20','30'], 2, 'C(6,3)=20.'],
    ['7 noktadan en çok kaç üçgen oluşur?', ['21','28','35','42'], 2, 'C(7,3)=35.'],
    ['8 noktadan en çok kaç üçgen oluşur?', ['35','48','56','70'], 2, 'C(8,3)=56.'],
    ['6 noktadan kaç dörtgen oluşur?', ['10','15','20','30'], 1, 'C(6,4)=15.'],
    ['7 noktadan kaç dörtgen oluşur?', ['21','28','35','42'], 2, 'C(7,4)=35.'],
    ['8 noktadan kaç dörtgen oluşur?', ['56','64','70','84'], 2, 'C(8,4)=70.'],
    ['5 doğru en çok kaç noktada kesişir?', ['5','10','15','20'], 1, 'C(5,2)=10.'],
    ['6 doğru en çok kaç noktada kesişir?', ['12','15','18','30'], 1, 'C(6,2)=15.'],
    ['10 doğru en çok kaç noktada kesişir?', ['40','45','50','55'], 1, 'C(10,2)=45.'],
    ['4 çember en çok kaç noktada kesişir?', ['6','8','10','12'], 3, '2C(4,2)=12.'],
    ['5 çember en çok kaç noktada kesişir?', ['10','15','20','25'], 2, '2C(5,2)=20.'],
    ['İki doğru paralelse kaç noktada kesişir?', ['0','1','2','Sonsuz'], 0, 'Paralel doğrular kesişmez.'],
    ['İki doğru çakışıksa kaç noktada kesişir?', ['0','1','2','Sonsuz'], 3, 'Çakışık doğrular sonsuz noktada ortaktır.'],
    ['Paralel veya çakışık olmayan iki doğru kaç noktada kesişir?', ['0','1','2','Sonsuz'], 1, 'İki farklı doğru bir noktada kesişir.'],
    ['İki çember en çok kaç noktada kesişir?', ['0','1','2','3'], 2, 'İki çember en çok 2 noktada kesişir.'],
    ['İki üçgen en çok kaç noktada kesişir?', ['2','4','6','8'], 2, 'İki üçgen en çok 6 noktada kesişebilir.'],
    ['n noktadan r-gen sayısı hangi kombinasyonla bulunur?', ['C(n,2)','C(n,3)','C(n,r)','P(n,r)'], 2, 'r nokta seçilir.'],
    ['9 noktadan beşgen sayısı kaçtır?', ['84','126','210','302'], 1, 'C(9,5)=126.'],
    ['5 noktadan üçgen sayısı kaçtır?', ['5','10','15','20'], 1, 'C(5,3)=10.'],
    ['5 noktadan doğru sayısı kaçtır?', ['5','10','15','20'], 1, 'C(5,2)=10.'],
    ['Aynı doğru üzerinde üç nokta varsa üçgen sayısında ne yapılır?', ['Eklenir','Çıkarılır','Çarpılır','Değişmez'], 1, 'Doğrusal üç nokta üçgen oluşturmaz.'],
    ['4 doğru en çok kaç noktada kesişir?', ['4','5','6','8'], 2, 'C(4,2)=6.']
  ])
});

extendTopicPractice(59, {
  summary: 'Pascal üçgeni, binom açılımı, genel terim, katsayılar toplamı ve sabit terim.',
  theory: {
    rules: [
      { title: 'Pascal Üçgeni', tipLines: ['Her satır 1 ile başlar ve 1 ile biter.', 'Diğer sayılar üst satırdaki komşu iki sayının toplamıdır.'] },
      { title: 'Binom Açılımı', formulaLines: ['(x+y)^n=\\sum_{r=0}^{n}\\binom{n}{r}x^{n-r}y^r'], tipLines: ['Açılımda n+1 terim vardır.'] },
      { title: 'Baştan r+1. Terim', formulaLines: ['T_{r+1}=\\binom{n}{r}x^{n-r}y^r'], tipLines: ['x’in azalan kuvvetlerine göre açılımda kullanılır.'] },
      { title: 'Katsayılar Toplamı ve Sabit Terim', tipLines: ['Katsayılar toplamı için değişkenler yerine 1 yazılır.', 'Sabit terim için değişkenler yerine 0 yazılır.'] }
    ],
    facts: ['Açılımdaki her terimde üsler toplamı n’dir.', 'n çiftse ortadaki terim için r=n/2 alınır.', 'n tekse tek bir ortadaki terim yoktur.'],
    warning: '(x-2y)^n açılımında y yerine -2y alındığı için işaretlere dikkat edilir.'
  },
  examples: [
    { question: '(x+y)^4 açılımındaki katsayıları yazınız.', steps: ['Pascal satırı: 1,4,6,4,1'], answer: '1,4,6,4,1' },
    { question: '(x-2y)^4 açılımının ilk üç terimini yazınız.', steps: ['x^4', '4x^3(-2y)=-8x^3y', '6x^2(-2y)^2=24x^2y^2'], answer: 'x^4-8x^3y+24x^2y^2' },
    { question: '(2x-3y+4)^7 ifadesinde katsayılar toplamı kaçtır?', steps: ['x=1,\\;y=1', '(2-3+4)^7=3^7'], answer: '3^7' },
    { question: '(2x-3y+4)^7 ifadesinde sabit terim kaçtır?', steps: ['x=0,\\;y=0', '4^7'], answer: '4^7' },
    { question: '(x+y)^6 açılımında baştan 3. terim nedir?', steps: [{ text: 'Baştan 3. terim için r = 2 alınır.' }, '\\binom{6}{2}x^4y^2=15x^4y^2'], answer: '15x^4y^2' }
  ],
  quiz: quizRows([
    ['(x+y)^4 açılımında kaç terim vardır?', ['4','5','6','7'], 1, 'n+1=5.'],
    ['(x+y)^7 açılımında kaç terim vardır?', ['7','8','9','14'], 1, 'n+1=8.'],
    ['(x+y)^4 katsayıları hangisidir?', ['1,3,3,1','1,4,6,4,1','1,5,10,10,5,1','1,2,1'], 1, 'Pascal 4. satırı.'],
    ['(x+y)^3 katsayıları hangisidir?', ['1,2,1','1,3,3,1','1,4,6,4,1','1,1'], 1, 'Pascal 3. satırı.'],
    ['(x+y)^5 açılımındaki katsayılar toplamı kaçtır?', ['16','25','32','64'], 2, 'x=y=1, 2^5=32.'],
    ['(2x+y)^4 katsayılar toplamı kaçtır?', ['16','27','64','81'], 3, 'x=y=1, (2+1)^4=81.'],
    ['(x-2)^5 sabit terimi kaçtır?', ['-32','-16','16','32'], 0, 'x=0, (-2)^5=-32.'],
    ['(x+3)^4 sabit terimi kaçtır?', ['27','64','81','243'], 2, '3^4=81.'],
    ['(x+y)^6 baştan 2. terim nedir?', ['6x^5y','15x^4y^2','x^6','y^6'], 0, 'r=1: C(6,1)x^5y.'],
    ['(x+y)^6 baştan 3. terim nedir?', ['6x^5y','15x^4y^2','20x^3y^3','y^6'], 1, 'r=2: C(6,2)x^4y^2.'],
    ['(x+y)^n açılımında terim sayısı nedir?', ['n','n+1','2n','n!'], 1, 'Terim sayısı n+1.'],
    ['Her terimde üsler toplamı kaçtır?', ['r','n','n+1','0'], 1, 'Üsler toplamı n’dir.'],
    ['Baştan r+1. terimde x’in üssü nedir?', ['r','n-r','n+r','0'], 1, 'x üssü n-r.'],
    ['Baştan r+1. terimde y’nin üssü nedir?', ['r','n-r','n+r','0'], 0, 'y üssü r.'],
    ['Pascal üçgeninde satırlar hangi sayı ile başlar?', ['0','1','2','n'], 1, 'Her satır 1 ile başlar.'],
    ['Pascal üçgeninde içteki sayılar nasıl bulunur?', ['Alt satırdan','Komşu iki üst sayının toplamından','Çarpımdan','Farktan'], 1, 'İki komşu üst sayı toplanır.'],
    ['n çift ise ortadaki terim için r nedir?', ['n','n/2','n+1','2n'], 1, 'r=n/2.'],
    ['n tek ise tek bir ortadaki terim var mıdır?', ['Evet','Hayır','Her zaman','Sadece n=1'], 1, 'n+1 çift olduğundan tek ortadaki terim yoktur.'],
    ['(x-2y)^4 açılımında ikinci terim nedir?', ['8x^3y','-8x^3y','4x^3y','-4x^3y'], 1, '4x^3(-2y)=-8x^3y.'],
    ['(x-2y)^4 açılımında üçüncü terim nedir?', ['12x^2y^2','16x^2y^2','24x^2y^2','-24x^2y^2'], 2, '6x^2(4y^2)=24x^2y^2.'],
    ['(x+y)^2 açılımı hangisidir?', ['x^2+y^2','x^2+2xy+y^2','x^2-2xy+y^2','2x+2y'], 1, 'Temel açılım.'],
    ['(x-y)^2 açılımı hangisidir?', ['x^2+y^2','x^2+2xy+y^2','x^2-2xy+y^2','2x-2y'], 2, 'y yerine -y yazılır.'],
    ['(3x+2)^3 katsayılar toplamı kaçtır?', ['25','64','125','216'], 2, 'x=1, (3+2)^3=125.'],
    ['(3x+2)^3 sabit terimi kaçtır?', ['6','8','9','27'], 1, 'x=0, 2^3=8.'],
    ['(x+y)^8 açılımında baştan 1. terim nedir?', ['x^8','8x^7y','y^8','1'], 0, 'r=0: x^8.']
  ])
});

extendTopicPractice(60, {
  summary: 'Deney, çıktı, örnek uzay, olay, ayrık olay, tümleyen, imkânsız ve kesin olay kavramları.',
  theory: {
    rules: [
      { title: 'Deney ve Çıktı', tipLines: ['Tekrarlanabilen ve farklı tekrarında farklı sonuçlar elde edilebilen süreçlere deney denir.', 'Bir deneyde elde edilen sonuçların her birine çıktı denir.'] },
      { title: 'Örnek Uzay ve Olay', formulaLines: ['E=\\text{örnek uzay}'], tipLines: ['Bir deneyin bütün çıktılarının kümesine örnek uzay denir.', 'Örnek uzayın her bir alt kümesine olay denir.'] },
      { title: 'Para ve Zar Örnek Uzayı', formulaLines: ['n\\text{ para}\\Rightarrow 2^n', 'n\\text{ zar}\\Rightarrow 6^n'], tipLines: ['n para birlikte atılması ile bir paranın n defa atılması aynı sayıda çıktı verir.'] },
      { title: 'Ayrık ve Ayrık Olmayan Olaylar', formulaLines: ['A\\cap B=\\varnothing', 'A\\cap B\\neq\\varnothing'], tipLines: ['Ortak elemanı olmayan olaylar ayrık; ortak elemanı olan olaylar ayrık olmayan olaylardır.'] },
      { title: 'Tümleyen, İmkânsız, Kesin', tipLines: ['A olayının dışında kalan örnek uzay çıktıları A′ ile gösterilir.', 'Gerçekleşmesi mümkün olmayan olay imkânsız olaydır.', 'Gerçekleşmesi kesin olan olay kesin olaydır.'] }
    ],
    facts: ['Bir para atma deneyinde E={Y,T}.', 'İki para için örnek uzay 4 elemanlıdır.', 'Bir zar için örnek uzay 6 elemanlıdır.'],
    warning: 'Olasılık hesabına geçmeden önce örnek uzay ve olay doğru belirlenmelidir.'
  },
  examples: [
    { question: 'Bir maden para atıldığında örnek uzay kaç elemanlıdır?', steps: ['E=\\{Y,T\\}', 's(E)=2'], answer: '2' },
    { question: 'İki maden para atıldığında örnek uzay kaç elemanlıdır?', steps: ['2^2=4'], answer: '4' },
    { question: 'Üç maden para atıldığında örnek uzay kaç elemanlıdır?', steps: ['2^3=8'], answer: '8' },
    { question: 'İki zar atıldığında örnek uzay kaç elemanlıdır?', steps: ['6^2=36'], answer: '36' },
    { question: 'Bir zar atıldığında çift sayı gelme olayı nedir?', steps: ['E=\\{1,2,3,4,5,6\\}', 'A=\\{2,4,6\\}'], answer: '\\{2,4,6\\}' }
  ],
  quiz: quizRows([
    ['Tekrarlanabilen ve farklı sonuçlar verebilen sürece ne denir?', ['Olay','Deney','Çıktı','Tümleyen'], 1, 'Bu, deney tanımıdır.'],
    ['Bir deneyde elde edilen her sonuca ne denir?', ['Çıktı','Küme','Tümleyen','Kesin olay'], 0, 'Her sonuç çıktıdır.'],
    ['Bir deneyin bütün çıktılarının kümesine ne denir?', ['Olay','Örnek uzay','Ayrık olay','İmkânsız olay'], 1, 'Bütün çıktılar örnek uzayı oluşturur.'],
    ['Örnek uzay genellikle hangi harfle gösterilir?', ['A','B','E','P'], 2, 'Örnek uzay E ile gösterilir.'],
    ['Örnek uzayın her alt kümesine ne denir?', ['Deney','Çıktı','Olay','Faktöriyel'], 2, 'Olay örnek uzayın alt kümesidir.'],
    ['Bir para atıldığında örnek uzay kaç elemanlıdır?', ['1','2','3','4'], 1, 'Yazı ve tura.'],
    ['İki para atıldığında örnek uzay kaç elemanlıdır?', ['2','4','6','8'], 1, '2^2=4.'],
    ['Üç para atıldığında örnek uzay kaç elemanlıdır?', ['4','6','8','12'], 2, '2^3=8.'],
    ['n para için örnek uzay kaç elemanlıdır?', ['n','2n','2^n','n^2'], 2, 'Her para 2 sonuç verir.'],
    ['Bir zar atıldığında örnek uzay kaç elemanlıdır?', ['2','4','6','8'], 2, '1,2,3,4,5,6.'],
    ['İki zar atıldığında örnek uzay kaç elemanlıdır?', ['12','24','36','42'], 2, '6^2=36.'],
    ['n zar için örnek uzay kaç elemanlıdır?', ['6n','6^n','n^6','2^n'], 1, 'Her zar 6 sonuç verir.'],
    ['Ortak elemanı olmayan olaylara ne denir?', ['Ayrık','Ayrık olmayan','Kesin','Tümleyen'], 0, 'A∩B=∅ ise ayrık.'],
    ['A∩B=∅ ise A ve B nasıl olaylardır?', ['Ayrık','Ayrık olmayan','Kesin','Eşit'], 0, 'Kesişim boşsa ayrık.'],
    ['A∩B≠∅ ise A ve B nasıl olaylardır?', ['Ayrık','Ayrık olmayan','İmkânsız','Boş'], 1, 'Ortak çıktı vardır.'],
    ['A olayının dışındaki tüm çıktılar hangi olaydır?', ['Ayrık','A’nın tümleyeni','Kesin','Deney'], 1, 'A′ tümleyen olaydır.'],
    ['Gerçekleşmesi mümkün olmayan olaya ne denir?', ['Kesin','İmkânsız','Ayrık olmayan','Çıktı'], 1, 'İmkânsız olay.'],
    ['Gerçekleşmesi kesin olan olaya ne denir?', ['Kesin','İmkânsız','Ayrık','Tümleyen'], 0, 'Kesin olay.'],
    ['Bir zar atıldığında 7 gelmesi nasıl olaydır?', ['Kesin','İmkânsız','Ayrık olmayan','Normal çıktı'], 1, 'Zarda 7 yoktur.'],
    ['Bir zar atıldığında 1 ile 6 arasında sayı gelmesi nasıl olaydır?', ['İmkânsız','Kesin','Ayrık','Boş'], 1, 'Tüm çıktıları kapsar.'],
    ['Bir zar atıldığında çift sayı gelme olayı hangisidir?', ['{1,3,5}','{2,4,6}','{1,2,3}','{6}'], 1, 'Çift yüzler 2,4,6.'],
    ['Bir zar atıldığında tek sayı gelme olayı hangisidir?', ['{1,3,5}','{2,4,6}','{1,2,3}','{6}'], 0, 'Tek yüzler 1,3,5.'],
    ['Bir zar atıldığında çift ve tek gelme olayları nasıldır?', ['Ayrık','Ayrık olmayan','Eşit','Kesin'], 0, 'Ortak elemanları yoktur.'],
    ['Bir zar atıldığında çift ve 3’ten büyük gelme olayları nasıldır?', ['Ayrık','Ayrık olmayan','Boş','İmkânsız'], 1, 'Ortak eleman 4 ve 6’dır.'],
    ['Olasılık hesabından önce hangisi doğru belirlenmelidir?', ['Örnek uzay ve olay','Faktöriyel','Kâr','Kök'], 0, 'Önce örnek uzay ve olay gerekir.']
  ])
});

// 92-96. konular: Geometri ilk konuları.
// Görsel konu kartları korunur; örnek ve quiz sekmeleri etkileşimli pratik için eklenir.
extendTopicPractice(92, {
  summary: 'Açının oluşumu, ölçüsü, açı çeşitleri, komşu, ters, tümler, bütünler ve açıortay ilişkileri.',
  theory: { rules: [], facts: [], warning: '' },
  examples: [
    { question: 'Ölçüsü 35° olan açı hangi açı türüdür?', steps: ['0°<35°<90°', { text: 'Bu aralık dar açıyı verir.' }], answer: '\\text{Dar aci}' },
    { question: 'Bir açının tümleri 28° ise açı kaç derecedir?', steps: ['x+28=90', 'x=62'], answer: '62^\\circ' },
    { question: 'Bir açının bütünleri 115° ise açı kaç derecedir?', steps: ['x+115=180', 'x=65'], answer: '65^\\circ' },
    { question: 'Ters açılardan biri 74° ise diğeri kaç derecedir?', steps: [{ text: 'Ters açıların ölçüleri eşittir.' }], answer: '74^\\circ' },
    { question: 'Açıortay bir 84° açıyı iki eş parçaya ayırırsa her parça kaç derecedir?', steps: ['84\\div2=42'], answer: '42^\\circ' },
    { question: 'Komşu bütünler iki açıdan biri diğerinin 2 katıdır. Küçük açı kaç derecedir?', steps: ['x+2x=180', '3x=180', 'x=60'], answer: '60^\\circ' }
  ],
  quiz: quizRows([
    ['Ölçüsü 40° olan açı hangi türdedir?', ['Dar','Dik','Geniş','Doğru'], 0, '0° ile 90° arasındaki açılar dar açıdır.'],
    ['Ölçüsü 90° olan açı hangi türdedir?', ['Dar','Dik','Geniş','Tam'], 1, '90° dik açıdır.'],
    ['Ölçüsü 120° olan açı hangi türdedir?', ['Dar','Dik','Geniş','Tam'], 2, '90° ile 180° arası geniş açıdır.'],
    ['Ölçüsü 180° olan açı hangi türdedir?', ['Doğru','Tam','Dar','Dik'], 0, '180° doğru açıdır.'],
    ['Ölçüsü 360° olan açı hangi türdedir?', ['Dik','Doğru','Tam','Geniş'], 2, '360° tam açıdır.'],
    ['Tümler iki açının ölçüleri toplamı kaç derecedir?', ['45','90','180','360'], 1, 'Tümler açılar toplamı 90°dir.'],
    ['Bütünler iki açının ölçüleri toplamı kaç derecedir?', ['90','120','180','360'], 2, 'Bütünler açılar toplamı 180°dir.'],
    ['Ters açılar için hangisi doğrudur?', ['Toplamları 90°','Toplamları 180°','Ölçüleri eşittir','Biri daima dardır'], 2, 'Ters açıların ölçüleri eşittir.'],
    ['Bir açının tümleri 37° ise açı kaç derecedir?', ['43','53','63','143'], 1, '90-37=53.'],
    ['Bir açının bütünleri 128° ise açı kaç derecedir?', ['42','52','62','72'], 1, '180-128=52.'],
    ['Açıortay ne yapar?', ['Açıyı iki eş parçaya ayırır','Açıyı 90° yapar','Açıyı 180° yapar','Açıyı siler'], 0, 'Açıortay açıyı iki eş açıya ayırır.'],
    ['Açıortay 70° açıyı iki parçaya ayırırsa her parça kaç derecedir?', ['25','30','35','40'], 2, '70/2=35.'],
    ['Komşu tümler iki açıdan biri 25° ise diğeri kaç derecedir?', ['55','65','75','155'], 1, '90-25=65.'],
    ['Komşu bütünler iki açıdan biri 40° ise diğeri kaç derecedir?', ['50','90','120','140'], 3, '180-40=140.'],
    ['x ve 2x tümler ise x kaçtır?', ['20','25','30','45'], 2, '3x=90, x=30.'],
    ['x ve 3x bütünler ise x kaçtır?', ['30','45','60','90'], 1, '4x=180, x=45.'],
    ['Bir açının ölçüsü 0° ile 90° arasında ise hangi açı olur?', ['Dar','Dik','Geniş','Doğru'], 0, 'Tanım gereği dar açıdır.'],
    ['Bir açının ölçüsü 90° ile 180° arasında ise hangi açı olur?', ['Dar','Dik','Geniş','Tam'], 2, 'Tanım gereği geniş açıdır.'],
    ['Komşu açılar için hangisi gerekir?', ['Köşe ve bir kol ortak olmalıdır','Ölçüleri eşit olmalıdır','Toplam 360° olmalıdır','Mutlaka dik olmalıdır'], 0, 'Komşu açılarda köşe ve bir kol ortaktır.'],
    ['Ters açılardan biri 110° ise diğeri kaç derecedir?', ['70','90','110','180'], 2, 'Ters açılar eşittir.'],
    ['Bir doğru açı kaç dik açıdan oluşur?', ['1','2','3','4'], 1, '180° = 2·90°.'],
    ['Bir tam açı kaç dik açıdan oluşur?', ['2','3','4','5'], 2, '360° = 4·90°.'],
    ['Bir açının bütünleri kendisinin 2 katı ise açı kaçtır?', ['45','60','75','90'], 1, 'x+2x=180, x=60.'],
    ['Bir açının tümleri kendisinin 2 katı ise açı kaçtır?', ['20','25','30','40'], 2, 'x+2x=90, x=30.'],
    ['Doğru açı ile dik açı arasındaki fark kaç derecedir?', ['45','60','90','180'], 2, '180-90=90.']
  ])
});

extendTopicPractice(93, {
  summary: 'Paralel iki doğrunun bir kesenle oluşturduğu yöndeş, iç ters, dış ters ve karşı durumlu açı ilişkileri.',
  theory: { rules: [], facts: [], warning: '' },
  examples: [
    { question: 'Paralel doğrularda yöndeş açılardan biri 68° ise diğeri kaç derecedir?', steps: [{ text: 'Yöndeş açıların ölçüleri eşittir.' }], answer: '68^\\circ' },
    { question: 'Paralel doğrularda iç ters açılardan biri 112° ise diğeri kaç derecedir?', steps: [{ text: 'İç ters açıların ölçüleri eşittir.' }], answer: '112^\\circ' },
    { question: 'Paralel doğrularda aynı yandaki iç açılardan biri 75° ise diğeri kaç derecedir?', steps: [{ text: 'Aynı yandaki iç açılar bütünlerdir.' }, '180-75=105'], answer: '105^\\circ' },
    { question: 'Paralel doğrularda karşı durumlu açılardan biri 125° ise diğeri kaç derecedir?', steps: [{ text: 'Karşı durumlu açıların ölçüleri toplamı 180°dir.' }, '180-125=55'], answer: '55^\\circ' },
    { question: 'Yöndeş açılar x+20 ve 3x-40 ise x kaçtır?', steps: ['x+20=3x-40', '60=2x', 'x=30'], answer: '30' }
  ],
  quiz: quizRows([
    ['Paralel doğrularda yöndeş açılar için hangisi doğrudur?', ['Eşittir','Toplamları 90°','Toplamları 180°','Daima dardır'], 0, 'Yöndeş açılar eşittir.'],
    ['Paralel doğrularda iç ters açılar için hangisi doğrudur?', ['Eşittir','Toplamları 90°','Toplamları 360°','Daima geniştir'], 0, 'İç ters açılar eşittir.'],
    ['Paralel doğrularda dış ters açılar için hangisi doğrudur?', ['Eşittir','Toplamları 90°','Toplamları 180°','Komşudur'], 0, 'Dış ters açılar eşittir.'],
    ['Aynı yandaki iç açılar toplamı kaç derecedir?', ['90','120','180','360'], 2, 'Paralel doğrularda aynı yandaki iç açılar bütünlerdir.'],
    ['Yöndeş açılardan biri 73° ise diğeri kaç derecedir?', ['37','73','107','180'], 1, 'Yöndeş açılar eşittir.'],
    ['İç ters açılardan biri 118° ise diğeri kaç derecedir?', ['62','72','118','180'], 2, 'İç ters açılar eşittir.'],
    ['Dış ters açılardan biri 41° ise diğeri kaç derecedir?', ['41','49','139','180'], 0, 'Dış ters açılar eşittir.'],
    ['Aynı yandaki iç açılardan biri 65° ise diğeri kaç derecedir?', ['65','105','115','125'], 2, '180-65=115.'],
    ['Karşı durumlu açılardan biri 130° ise diğeri kaç derecedir?', ['40','50','60','130'], 1, '180-130=50.'],
    ['Yöndeş açılar x+10 ve 70 ise x kaçtır?', ['50','60','70','80'], 1, 'x+10=70, x=60.'],
    ['İç ters açılar 2x ve 80 ise x kaçtır?', ['20','30','40','50'], 2, '2x=80, x=40.'],
    ['Aynı yandaki iç açılar x ve 3x ise x kaçtır?', ['30','45','60','90'], 1, '4x=180, x=45.'],
    ['Bir kesen, paralel doğrularla kaç ayrı açı oluşturur?', ['4','6','8','10'], 2, 'İki kesişim noktasında toplam 8 açı oluşur.'],
    ['Paralellik yoksa yöndeş açıların eşitliği kesin midir?', ['Evet','Hayır','Her zaman 90°dir','Her zaman 180°dir'], 1, 'Eşitlik paralel doğrularda kesinleşir.'],
    ['Paralel doğrularda bir açı 100° ise ona komşu bütünler açı kaçtır?', ['70','80','90','100'], 1, '180-100=80.'],
    ['Yöndeş açılar 4x-15 ve 2x+25 ise x kaçtır?', ['10','15','20','25'], 2, '4x-15=2x+25, x=20.'],
    ['İç ters açılar 5x ve 2x+54 ise x kaçtır?', ['12','15','18','20'], 2, '5x=2x+54, x=18.'],
    ['Aynı yandaki iç açılar 2x+10 ve x+20 ise x kaçtır?', ['40','45','50','55'], 2, '3x+30=180, x=50.'],
    ['Karşı durumlu açılar 3x ve x+60 ise x kaçtır?', ['20','30','40','45'], 1, '3x+x+60=180, x=30.'],
    ['Paralel doğrularda eş olan açı çifti hangisidir?', ['İç ters','Aynı yandaki iç','Komşu bütünler','Karşı durumlu'], 0, 'İç ters açılar eşittir.'],
    ['Paralel doğrularda bütünler olan açı çifti hangisidir?', ['Yöndeş','İç ters','Aynı yandaki iç','Dış ters'], 2, 'Aynı yandaki iç açılar bütünlerdir.'],
    ['Bir yöndeş açı dar ise eş açısı nasıl olur?', ['Dar','Dik','Geniş','Tam'], 0, 'Eş olduğundan dar kalır.'],
    ['Bir aynı yandaki iç açı genişse diğeri nasıl olur?', ['Geniş','Dar','Tam','360°'], 1, 'Toplam 180° olduğundan diğeri dar olur.'],
    ['Paralel iki doğrunun kesenle oluşturduğu eş açı ilişkileri hangi bilgiye dayanır?', ['Paralellik','Uzunluk eşitliği','Alan','Çevre'], 0, 'Açı ilişkileri paralellikten gelir.'],
    ['x ve 120 aynı yandaki iç açı ise x kaçtır?', ['50','60','70','120'], 1, 'x+120=180, x=60.']
  ])
});

extendTopicPractice(94, {
  summary: 'Üçgenin iç açıları, dış açıları ve üçgende açı toplamı ilişkileri.',
  theory: { rules: [], facts: [], warning: '' },
  examples: [
    { question: 'Bir üçgende iki iç açı 50° ve 60° ise üçüncü açı kaç derecedir?', steps: ['50+60+x=180', 'x=70'], answer: '70^\\circ' },
    { question: 'Bir üçgende bir dış açı 120°, uzak iç açılardan biri 45° ise diğeri kaç derecedir?', steps: [{ text: 'Dış açı uzak iki iç açının toplamıdır.' }, '120=45+x', 'x=75'], answer: '75^\\circ' },
    { question: 'Üçgenin iç açıları x, 2x ve 3x ise en büyük açı kaç derecedir?', steps: ['x+2x+3x=180', '6x=180', 'x=30', '3x=90'], answer: '90^\\circ' },
    { question: 'Bir üçgende bir iç açı 110° ise bu açının komşu dış açısı kaçtır?', steps: [{ text: 'İç açı ile komşu dış açı bütünlerdir.' }, '180-110=70'], answer: '70^\\circ' },
    { question: 'Bir üçgende dış açılar toplamı kaç derecedir?', steps: [{ text: 'Her köşeden birer dış açı alınırsa toplam 360°dir.' }], answer: '360^\\circ' }
  ],
  quiz: quizRows([
    ['Üçgenin iç açıları toplamı kaç derecedir?', ['90','120','180','360'], 2, 'Üçgende iç açılar toplamı 180°dir.'],
    ['Bir üçgende iki açı 40° ve 70° ise üçüncü açı kaçtır?', ['60','70','80','90'], 1, '180-110=70.'],
    ['Bir üçgende iki açı 35° ve 85° ise üçüncü açı kaçtır?', ['50','60','70','80'], 1, '180-120=60.'],
    ['Bir dış açı, kendisine komşu olmayan iki iç açının neye eşittir?', ['Farkına','Toplamına','Çarpımına','Yarısına'], 1, 'Dış açı uzak iç açıların toplamıdır.'],
    ['Dış açı 130°, uzak iç açılardan biri 50° ise diğeri kaçtır?', ['70','80','90','100'], 1, '130-50=80.'],
    ['Bir iç açı 100° ise komşu dış açı kaçtır?', ['60','70','80','100'], 2, '180-100=80.'],
    ['Üçgenin dış açıları toplamı kaç derecedir?', ['180','270','300','360'], 3, 'Birer dış açı toplamı 360°dir.'],
    ['Üçgenin açıları x, x, 80 ise x kaçtır?', ['40','50','60','70'], 1, '2x+80=180, x=50.'],
    ['Üçgenin açıları x, 2x, 3x ise x kaçtır?', ['20','25','30','35'], 2, '6x=180, x=30.'],
    ['Bir üçgende 90° açı varsa üçgen hangi türdür?', ['Dar açılı','Dik açılı','Geniş açılı','Eşkenar'], 1, '90° açı dik üçgen oluşturur.'],
    ['Bir üçgende 120° açı varsa üçgen hangi türdür?', ['Dar açılı','Dik açılı','Geniş açılı','Eşkenar'], 2, '90°den büyük açı geniştir.'],
    ['Bir üçgende tüm açılar 60° ise üçgen hangi türdür?', ['Eşkenar','Dik','Geniş','Çeşitkenar'], 0, 'Eşkenar üçgende açılar 60°dir.'],
    ['Dış açı 100°, uzak iç açılar x ve 40 ise x kaçtır?', ['50','60','70','80'], 1, 'x+40=100.'],
    ['İç açılar 2x, 3x, 4x ise x kaçtır?', ['15','20','25','30'], 1, '9x=180, x=20.'],
    ['İç açılar x+10, x+20, x+30 ise x kaçtır?', ['30','35','40','45'], 2, '3x+60=180, x=40.'],
    ['Bir üçgende en fazla kaç geniş açı olabilir?', ['0','1','2','3'], 1, 'İki geniş açı toplamı 180°yi aşar.'],
    ['Bir üçgende en fazla kaç dik açı olabilir?', ['0','1','2','3'], 1, 'İki dik açı 180° olur, üçüncü açı kalmaz.'],
    ['Dar açılı üçgende tüm açılar hangi aralıktadır?', ['0-90','90-180','180-360','Sadece 90'], 0, 'Tüm iç açılar 90°den küçüktür.'],
    ['Bir dış açı 140° ise komşu iç açı kaçtır?', ['30','40','50','60'], 1, '180-140=40.'],
    ['Üçgende iki dış açı 110° ve 130° ise üçüncü dış açı kaçtır?', ['90','100','110','120'], 3, '360-240=120.'],
    ['Üçgende iki iç açı eşitse bu açıların karşısındaki kenarlar nasıldır?', ['Eşit','Farklı','Dik','Paralel'], 0, 'Eş açılar karşısında eş kenarlar bulunur.'],
    ['Bir üçgende 30° ve 60° varsa üçüncü açı kaçtır?', ['60','80','90','100'], 2, '180-90=90.'],
    ['Bir üçgende 45° ve 45° varsa üçüncü açı kaçtır?', ['45','60','90','100'], 2, '180-90=90.'],
    ['Dış açı uzak iç açılardan küçük olabilir mi?', ['Evet','Hayır','Sadece eşkenarda','Sadece dik üçgende'], 1, 'Dış açı iki pozitif uzak iç açının toplamıdır.'],
    ['Üçgenin iç açıları 70, 55, x ise x kaçtır?', ['45','50','55','60'], 2, 'x=180-125=55.']
  ])
});

extendTopicPractice(95, {
  summary: 'İkizkenar ve eşkenar üçgenlerde taban açıları, tepe açısı, yükseklik, açıortay ve kenarortay ilişkileri.',
  theory: { rules: [], facts: [], warning: '' },
  examples: [
    { question: 'İkizkenar üçgende tepe açısı 40° ise taban açılarından biri kaç derecedir?', steps: [{ text: 'Taban açıları eşittir.' }, '2x+40=180', 'x=70'], answer: '70^\\circ' },
    { question: 'İkizkenar üçgende taban açısı 55° ise tepe açısı kaçtır?', steps: ['55+55+x=180', 'x=70'], answer: '70^\\circ' },
    { question: 'Eşkenar üçgende bir iç açı kaç derecedir?', steps: [{ text: 'Tüm açılar eşittir.' }, '180\\div3=60'], answer: '60^\\circ' },
    { question: 'İkizkenar üçgende tepe açısından tabana indirilen yükseklik tabanı 6 ve 6 olarak ayırıyorsa taban kaçtır?', steps: [{ text: 'Yükseklik aynı zamanda kenarortaydır.' }, '6+6=12'], answer: '12' },
    { question: 'Eşkenar üçgenin bir açısı 60° olduğuna göre tüm açıları toplamı kaçtır?', steps: [{ text: 'Üçgende iç açılar toplamı 180°dir.' }], answer: '180^\\circ' }
  ],
  quiz: quizRows([
    ['İkizkenar üçgende eş kenarların karşısındaki açılar nasıldır?', ['Eşit','Bütünler','Tümler','Dik'], 0, 'İkizkenarda taban açıları eşittir.'],
    ['İkizkenar üçgende tepe açısı 40° ise taban açısı kaçtır?', ['60','70','80','90'], 1, '(180-40)/2=70.'],
    ['İkizkenar üçgende tepe açısı 80° ise taban açısı kaçtır?', ['40','50','60','70'], 1, '(180-80)/2=50.'],
    ['İkizkenar üçgende taban açısı 65° ise tepe açısı kaçtır?', ['40','50','60','70'], 1, '180-130=50.'],
    ['Eşkenar üçgende bir iç açı kaç derecedir?', ['30','45','60','90'], 2, 'Eşkenar üçgende açılar 60°dir.'],
    ['Eşkenar üçgende tüm kenarlar nasıldır?', ['Eşit','Farklı','Paralel','Dik'], 0, 'Tanım gereği tüm kenarlar eşittir.'],
    ['Eşkenar üçgen aynı zamanda hangi üçgendir?', ['İkizkenar','Dik','Geniş','Çeşitkenar'], 0, 'En az iki kenarı eşit olduğu için ikizkenardır.'],
    ['İkizkenar üçgende tepe açısından tabana inen yükseklik aynı zamanda nedir?', ['Açıortay ve kenarortay','Sadece dış açı','Sadece paralel','Çap'], 0, 'Tepe yüksekliği tabanı ve açıyı iki eş parçaya ayırır.'],
    ['Taban açıları 50° ve 50° olan ikizkenarda tepe açısı kaçtır?', ['70','80','90','100'], 1, '180-100=80.'],
    ['Tepe açısı 100° olan ikizkenar üçgende taban açısı kaçtır?', ['30','40','50','60'], 1, '(180-100)/2=40.'],
    ['Eşkenar üçgende yükseklik aynı zamanda nedir?', ['Açıortay ve kenarortay','Kesen','Çap','Kiriş'], 0, 'Eşkenar üçgende yardımcı elemanlar çakışır.'],
    ['İkizkenar üçgende taban açıları x ve x, tepe açısı 30 ise x kaçtır?', ['65','70','75','80'], 2, '2x+30=180, x=75.'],
    ['İkizkenar üçgende taban açısı x, tepe açısı 2x ise x kaçtır?', ['30','40','45','50'], 2, 'x+x+2x=180, x=45.'],
    ['İkizkenar üçgende eş kenarlar 8 ve 8 ise bu kenarların karşısındaki açılar nasıldır?', ['Eşit','Toplam 90','Toplam 360','Farklı'], 0, 'Eş kenar karşısında eş açı vardır.'],
    ['Eşkenar üçgende dış açılardan biri kaç derecedir?', ['60','90','120','180'], 2, '180-60=120.'],
    ['İkizkenar üçgende tepe açısı dar ise taban açıları eşit midir?', ['Evet','Hayır','Sadece eşkenarda','Belirsiz'], 0, 'İkizkenarda taban açıları her durumda eşittir.'],
    ['Eşkenar üçgenin çevresi 18 ise bir kenarı kaçtır?', ['5','6','7','9'], 1, '18/3=6.'],
    ['İkizkenar üçgende eş kenarlar 10, taban 12 ise çevre kaçtır?', ['22','30','32','34'], 2, '10+10+12=32.'],
    ['Eşkenar üçgende bir kenar 9 ise çevre kaçtır?', ['18','24','27','36'], 2, '3·9=27.'],
    ['İkizkenar üçgende tepe yüksekliği tabanı 5 ve 5 ayırıyorsa taban kaçtır?', ['5','10','15','20'], 1, '5+5=10.'],
    ['Eşkenar üçgende iki açı toplamı kaçtır?', ['60','90','120','180'], 2, '60+60=120.'],
    ['İkizkenar üçgende taban açıları birbirinden farklı olabilir mi?', ['Evet','Hayır','Sadece geniş üçgende','Sadece dik üçgende'], 1, 'Taban açıları eşittir.'],
    ['Eşkenar üçgen dar açılı mıdır?', ['Evet','Hayır','Sadece bazen','Belirsiz'], 0, 'Tüm açıları 60°dir.'],
    ['İkizkenar üçgende taban açıları 45° ise tepe açısı kaçtır?', ['45','60','90','120'], 2, '180-90=90.'],
    ['Eşkenar üçgende açıortay bir açıyı kaçar dereceye böler?', ['20 ve 40','30 ve 30','45 ve 15','60 ve 60'], 1, '60° açı ikiye bölünür: 30° ve 30°.']
  ])
});

extendTopicPractice(96, {
  summary: 'Üçgende büyük açı karşısında büyük kenar, küçük açı karşısında küçük kenar bulunur; açı ve kenar sıralaması birlikte yapılır.',
  theory: { rules: [], facts: [], warning: '' },
  examples: [
    { question: 'Bir üçgende açılar 40°, 60°, 80° ise en uzun kenar hangi açının karşısındadır?', steps: [{ text: 'En büyük açı 80°dir.' }, { text: 'En uzun kenar en büyük açının karşısındadır.' }], answer: '80^\\circ\\;\\text{karsisi}' },
    { question: 'ABC üçgeninde AB < AC < BC ise açıları küçükten büyüğe sıralayınız.', steps: [{ text: 'Küçük kenar karşısında küçük açı vardır.' }, 'AB\\;\\text{karsisi}\\;C,\\; AC\\;\\text{karsisi}\\;B,\\; BC\\;\\text{karsisi}\\;A'], answer: 'C<B<A' },
    { question: 'Açıları 30°, 70°, 80° olan üçgende en kısa kenar hangi açının karşısındadır?', steps: [{ text: 'En küçük açı 30°dir.' }, { text: 'En kısa kenar 30° karşısındadır.' }], answer: '30^\\circ\\;\\text{karsisi}' },
    { question: 'Bir üçgende iki açı eşitse karşılarındaki kenarlar nasıldır?', steps: [{ text: 'Eş açılar karşısında eş kenarlar bulunur.' }], answer: '\\text{Esittir}' },
    { question: 'ABC üçgeninde A>B>C ise kenarları büyükten küçüğe sıralayınız.', steps: [{ text: 'Büyük açı karşısında büyük kenar vardır.' }, 'A\\;\\text{karsisi}\\;BC,\\;B\\;\\text{karsisi}\\;AC,\\;C\\;\\text{karsisi}\\;AB'], answer: 'BC>AC>AB' }
  ],
  quiz: quizRows([
    ['Üçgende en büyük açı karşısında hangi kenar bulunur?', ['En küçük','En büyük','Eşit','Dik'], 1, 'Büyük açı karşısında büyük kenar vardır.'],
    ['Üçgende en küçük açı karşısında hangi kenar bulunur?', ['En küçük','En büyük','Orta','Dik'], 0, 'Küçük açı karşısında küçük kenar vardır.'],
    ['Açılar 40, 60, 80 ise en uzun kenar hangi açının karşısındadır?', ['40','60','80','100'], 2, 'En büyük açı 80°dir.'],
    ['Açılar 50, 50, 80 ise eş kenarlar hangi açıların karşısındadır?', ['50 ve 50','50 ve 80','80 ve 80','Yok'], 0, 'Eş açılar karşısındaki kenarlar eşittir.'],
    ['Açılar 30, 70, 80 ise en kısa kenar hangi açının karşısındadır?', ['30','70','80','180'], 0, 'En küçük açı 30°dir.'],
    ['ABC üçgeninde A>B>C ise en uzun kenar hangisidir?', ['AB','AC','BC','Hepsi'], 2, 'A açısının karşısı BC’dir.'],
    ['ABC üçgeninde A>B>C ise en kısa kenar hangisidir?', ['AB','AC','BC','Hepsi'], 0, 'C açısının karşısı AB’dir.'],
    ['ABC üçgeninde AB<AC<BC ise en büyük açı hangisidir?', ['A','B','C','Eşit'], 0, 'En büyük kenar BC, karşısı A’dır.'],
    ['ABC üçgeninde AB<AC<BC ise en küçük açı hangisidir?', ['A','B','C','Eşit'], 2, 'En küçük kenar AB, karşısı C’dir.'],
    ['İki kenarı eşit olan üçgende karşılarındaki açılar nasıldır?', ['Eşit','Farklı','Bütünler','Tümler'], 0, 'Eş kenar karşısında eş açı vardır.'],
    ['İki açısı eşit olan üçgende karşılarındaki kenarlar nasıldır?', ['Eşit','Farklı','Biri sıfır','Paralel'], 0, 'Eş açı karşısında eş kenar vardır.'],
    ['Bir üçgende açı büyüdükçe karşısındaki kenar ne olur?', ['Küçülür','Büyür','Değişmez','Sıfır olur'], 1, 'Açı-kenar bağıntısı böyledir.'],
    ['Açıları 45, 60, 75 olan üçgende en uzun kenar hangi açının karşısında?', ['45','60','75','180'], 2, 'En büyük açı 75°dir.'],
    ['Açıları 45, 60, 75 olan üçgende en kısa kenar hangi açının karşısında?', ['45','60','75','180'], 0, 'En küçük açı 45°dir.'],
    ['ABC üçgeninde AB=AC ise hangi açılar eşittir?', ['A ve B','B ve C','A ve C','Hiçbiri'], 1, 'AB karşısı C, AC karşısı B; B=C.'],
    ['ABC üçgeninde B=C ise hangi kenarlar eşittir?', ['AB=AC','AB=BC','AC=BC','Hepsi'], 0, 'B karşısı AC, C karşısı AB; AB=AC.'],
    ['ABC üçgeninde BC en büyük kenarsa en büyük açı hangisidir?', ['A','B','C','Belirsiz'], 0, 'BC kenarı A açısının karşısındadır.'],
    ['ABC üçgeninde AB en küçük kenarsa en küçük açı hangisidir?', ['A','B','C','Belirsiz'], 2, 'AB kenarı C açısının karşısındadır.'],
    ['Dar açılı üçgende en büyük açı 90°den nasıl olur?', ['Küçük','Eşit','Büyük','360°'], 0, 'Dar açılı üçgende tüm açılar 90°den küçüktür.'],
    ['Geniş açılı üçgende en uzun kenar hangi açının karşısındadır?', ['Geniş açı','En küçük açı','Dik açı','Herhangi biri'], 0, 'Geniş açı en büyük açıdır.'],
    ['Dik üçgende en uzun kenar hangisidir?', ['Dik açının karşısı','Kısa dik kenar','Uzun dik kenar','Herhangi biri'], 0, '90° en büyük açı olduğundan karşısı en uzun kenardır.'],
    ['Açıları 20, 70, 90 olan üçgende en uzun kenar hangi açının karşısındadır?', ['20','70','90','180'], 2, '90° en büyük açıdır.'],
    ['Açıları 20, 70, 90 olan üçgende en kısa kenar hangi açının karşısındadır?', ['20','70','90','180'], 0, '20° en küçük açıdır.'],
    ['Kenarları eşit olmayan üçgende açılar için ne söylenir?', ['Hepsi eşit','Karşı kenarlara göre farklı sıralanır','Hepsi 60','Hepsi 90'], 1, 'Kenar sırası açı sırasını belirler.'],
    ['ABC üçgeninde AC>AB ise hangi açı daha büyüktür?', ['B>C','C>B','A>B','A=C'], 0, 'AC karşısı B, AB karşısı C; AC büyükse B>C.']
  ])
});

// 18-27. konular: Cebir ünitesinin ilk 10 konusu.
// Kart sırası konu akışını izler; örnekler alt başlıkları sayısal işlemlerle pekiştirir.
extendTopicPractice(18, {
  summary: 'Birinci dereceden bir bilinmeyenli denklemlerde eşitliğin iki tarafına aynı işlem uygulanır ve bilinmeyen yalnız bırakılır.',
  theory: {
    rules: [
      { title: 'Birinci Dereceden Bir Bilinmeyenli Denklemlerin Tanımı',
        formula: 'a,b\\in\\mathbb{R},\\;a\\neq0\\quad\\Rightarrow\\quad ax+b=0',
        tipLines: [
          'İçinde en az bir tane değişken bulunduran iki niceliğin birbirine eşitliğini ifade eden bağıntılara denklem adı verilir.',
          '-4x + 16 = 0 ve 2m - n = 24 ifadeleri denklemdir.',
          '2a + 8 ve 5x - 12 ifadeleri denklem değildir.',
          'a, b gerçek sayı ve a sıfırdan farklı olmak üzere ax + b = 0 genel gösterimi ile ifade edilebilen denklemlere birinci dereceden bir bilinmeyenli denklemler denir.',
          'a ve b’ye denklemin katsayıları, x’e değişken adı verilir.',
          'Denklemin derecesi değişkeninin kuvvetine göre değişir.',
          'Örneğin 2y - 6 = 0 denkleminde değişken y’dir ve denklemin derecesi 1’dir.',
          'm² - 9 = 0 denkleminde değişken m’dir ve denklemin derecesi 2’dir.'
        ] },
      { title: 'Birinci Dereceden Bir Bilinmeyenli Denklemlerin Çözümü',
        formula: '\\begin{array}{ll}a\\neq0 & \\Rightarrow\\; \\text{ÇK}=\\left\\{-\\dfrac{b}{a}\\right\\} \\\\[4pt] a=0,\\;b=0 & \\Rightarrow\\; \\text{ÇK}=\\mathbb{R} \\\\[4pt] a=0,\\;b\\neq0 & \\Rightarrow\\; \\text{ÇK}=\\varnothing\\end{array}',
        tipLines: [
          'a, b gerçek sayılar olmak üzere a · x + b = 0 şeklindeki bir denklemde x değerine denklemin kökü adı verilir.',
          'Kökün kümesine çözüm kümesi denir ve ÇK ile gösterilir.',
          'a sıfırdan farklı ise denklemi sağlayan yalnız bir tane x değeri vardır.',
          'a = 0 ve b = 0 ise denklem 0 · x + 0 = 0 durumuna dönüşür.',
          'Bu durumda x değişkenine hangi gerçek sayı değeri verilirse verilsin eşitlik sağlanır. Yani çözüm kümesi gerçek sayılardır.',
          'a = 0 ve b sıfırdan farklı ise denklem 0 · x + b = 0 durumuna dönüşür.',
          'Bu durumda x değişkenine hangi gerçek sayı değeri verilirse verilsin bu eşitlik doğru olmaz. Çözüm kümesi boş kümedir.'
        ] },
      { type: 'warning',
        items: [
          'Bir eşitlikte, eşitliğin her iki tarafına aynı gerçek sayı eklenir veya çıkarılırsa eşitlik değişmez.',
          'Bir eşitlikte, eşitliğin her iki tarafını sıfırdan farklı aynı gerçek sayı ile çarpmak veya bölmek eşitliği değiştirmez.',
          '“Denklemin her iki tarafı” ifadesinden denklemin sol ve sağ olmak üzere iki tarafının olduğu anlaşılmalıdır. Eşittir işareti iki tarafı birbirinden ayırır.',
          'Bir denklemin çözümünden elde edilen kök ya da kökler denklemin ilk halinde yerine yazıldığında denklemi doğrulamalıdır. Bu işleme sağlama adı verilir. Denklemi sağlamayan sayılar çözüm kümesine alınmaz.',
          'Bir denklemin değişkeni herhangi bir sembol olarak verilebilir. Bu durumda diğer semboller birer sabit sayı olarak düşünülür.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { question: '3x - 7 = 11 denklemini çözünüz.',
      steps: [{ text: 'Bilinmeyenli terimi yalnız bırakmak için iki tarafa 7 ekleriz.' }, '3x=18', { text: 'Katsayıyı kaldırmak için iki tarafı 3’e böleriz.' }, 'x=6'],
      answer: '6' },
    { question: '2(x - 3) + 5 = 15 denklemini çözünüz.',
      steps: ['2x-6+5=15', '2x-1=15', '2x=16', 'x=8'],
      answer: '8' },
    { question: '$\\frac{x}{3}+2=7$ denklemini çözünüz.',
      steps: ['\\frac{x}{3}=5', { text: 'Paydadaki 3’ü kaldırmak için iki tarafı 3 ile çarparız.' }, 'x=15'],
      answer: '15' },
    { question: '4x - 2 = 2x + 10 denklemini çözünüz.',
      steps: [{ text: 'Bilinmeyenli terimleri bir tarafa, sabitleri diğer tarafa toplarız.' }, '4x-2x=10+2', '2x=12', 'x=6'],
      answer: '6' }
  ],
  quiz: quizRows([
    ['2x + 5 = 13 denkleminin çözümü kaçtır?', ['3','4','5','6'], 1, '2x=8 olduğundan x=4 olur.'],
    ['5x - 9 = 16 denkleminin çözümü kaçtır?', ['3','4','5','6'], 2, '5x=25 ve x=5.'],
    ['3x + 7 = x + 15 denkleminde x kaçtır?', ['2','3','4','5'], 2, '2x=8 olduğundan x=4.'],
    ['4(x - 2)=20 ise x kaçtır?', ['5','6','7','8'], 2, 'x-2=5, x=7.'],
    ['$\\frac{x}{4}=6$ ise x kaçtır?', ['10','18','20','24'], 3, 'İki taraf 4 ile çarpılır: x=24.'],
    ['$\\frac{x}{5}+3=9$ ise x kaçtır?', ['20','25','30','35'], 2, 'x/5=6, x=30.'],
    ['2x - 3 = 17 denklemini sağlayan x kaçtır?', ['7','8','9','10'], 3, '2x=20 ve x=10.'],
    ['7 - x = 2 ise x kaçtır?', ['3','4','5','6'], 2, '-x=-5 olduğundan x=5.'],
    ['6x = 0 denkleminin çözümü kaçtır?', ['0','1','6','Çözüm yok'], 0, '6 sıfırdan farklı olduğu için x=0.'],
    ['x + 8 = 8 denkleminin çözümü kaçtır?', ['0','1','8','16'], 0, 'x=0 olur.'],
    ['3(x + 1)=2x + 9 ise x kaçtır?', ['3','4','5','6'], 3, '3x+3=2x+9, x=6.'],
    ['2(x + 4)-x=13 ise x kaçtır?', ['3','4','5','6'], 2, '2x+8-x=13, x=5.'],
    ['$\\frac{x-1}{2}=4$ ise x kaçtır?', ['7','8','9','10'], 2, 'x-1=8, x=9.'],
    ['$\\frac{x+3}{5}=2$ ise x kaçtır?', ['5','6','7','8'], 2, 'x+3=10, x=7.'],
    ['9x - 4 = 5x + 12 ise x kaçtır?', ['2','3','4','5'], 2, '4x=16, x=4.'],
    ['Denklem çözümünde eşitliğin iki tarafına ne yapılmalıdır?', ['Aynı işlem','Farklı işlem','Sadece toplama','Sadece bölme'], 0, 'Eşitliği korumak için iki tarafa aynı işlem uygulanır.'],
    ['Birinci dereceden denklemde bilinmeyenin en büyük kuvveti kaçtır?', ['0','1','2','3'], 1, 'Birinci derece demek bilinmeyenin kuvvetinin 1 olmasıdır.'],
    ['Paydalı denklemlerde paydaları kaldırmak için ne kullanılabilir?', ['Paydaların EKOK’u','Payların toplamı','Bilinmeyenin karesi','Mutlak değer'], 0, 'Her terim paydaların EKOK’u ile çarpılabilir.'],
    ['x yerine bulunan değeri denklemde denemek ne işe yarar?', ['Kontrol eder','Derece artırır','Paydayı siler','İşareti değiştirir'], 0, 'Çözümün denklemi sağlayıp sağlamadığı kontrol edilir.'],
    ['0 · x = 5 denklemi için hangisi doğrudur?', ['x=0','x=5','Her x sağlar','Çözüm yok'], 3, '0·x her zaman 0’dır, 5 olamaz.'],
    ['0 · x = 0 denklemi için hangisi doğrudur?', ['Sadece x=0','Sadece x=1','Her gerçek sayı','Çözüm yok'], 2, 'Her x değeri 0·x=0 eşitliğini sağlar.'],
    ['2x + 1 = 2x + 5 denklemi için hangisi doğrudur?', ['x=2','x=4','Her x sağlar','Çözüm yok'], 3, '1=5 çelişkisi oluşur.'],
    ['2x + 1 = 2x + 1 denklemi için hangisi doğrudur?', ['x=0','x=1','Her gerçek sayı','Çözüm yok'], 2, 'Eşitlik özdeşliktir.'],
    ['5 - 2x = 11 ise x kaçtır?', ['-3','-2','2','3'], 0, '-2x=6, x=-3.'],
    ['4x + 6 = 2x - 8 ise x kaçtır?', ['-9','-8','-7','7'], 2, '2x=-14, x=-7.']
  ])
});

extendTopicPractice(19, {
  summary: '>, ≥, <, ≤ sembolleriyle kurulan basit eşitsizlikler ve birinci dereceden bir bilinmeyenli eşitsizliklerin temel özellikleri.',
  theory: {
    rules: [
      { title: 'Basit Eşitsizlikler',
        formulaLabelLines: [
          { tex: 'a<b', label: 'a, b’den küçüktür. Sembol: küçüktür (<).' },
          { tex: 'a\\le b', label: 'a, b’den küçük veya b’ye eşittir. Sembol: küçük eşittir (≤).' },
          { tex: 'a>b', label: 'a, b’den büyüktür. Sembol: büyüktür (>).' },
          { tex: 'a\\ge b', label: 'a, b’den büyük veya b’ye eşittir. Sembol: büyük eşittir (≥).' }
        ],
        tipLines: [
          '>, ≥, <, ≤ gibi sembollerin kullanıldığı ifadelere eşitsizlik denir.',
          'a ve b gerçek sayılar olmak üzere a < b, a ≤ b, a > b, a ≥ b şeklindeki ifadeler birer basit eşitsizliktir.'
        ] },
      { title: 'Basit Eşitsizliklerin Özellikleri',
        numberedItems: [
          {
            text: 'Bir eşitsizliğin her iki tarafına aynı sayı eklenip çıkarıldığında eşitsizliğin yönü değişmez.',
            mathLines: ['a<b\\;\\text{ iken her iki tarafa }c\\text{ sayısını eklersek }a+c<b+c\\text{ olur.}']
          },
          {
            text: 'Eşitsizliğin her iki tarafı pozitif bir sayı ile çarpılırsa veya bölünürse, eşitsizlik yön değiştirmez.',
            mathLines: ['a>b\\;\\text{ ve }c>0\\;\\text{ iken }a\\cdot c>b\\cdot c\\text{ dir.}']
          },
          {
            text: 'Bir eşitsizliğin her iki tarafı negatif bir sayıyla çarpılır veya bölünürse, eşitsizlik yön değiştirir.',
            mathLines: ['a<b\\;\\text{ ve }c<0\\;\\text{ iken }a\\cdot c>b\\cdot c\\text{ dir.}']
          },
          {
            text: 'Yönü aynı olan eşitsizlikler taraf tarafa toplanabilir.',
            mathLines: ['a<b\\;\\text{ ve }c<d\\;\\text{ iken }a+c<b+d\\text{ olur.}']
          },
          {
            text: 'Pozitif sayılardan oluşan eşitsizliklerin çarpma işlemine göre tersi alındığında eşitsizlik yön değiştirir.',
            mathLines: ['0<a<b\\;\\text{ iken }\\dfrac{1}{a}>\\dfrac{1}{b}\\text{ olur.}']
          },
          {
            text: 'Zıt işaretli sayılardan oluşan eşitsizliklerin çarpma işlemine göre tersi alındığında eşitsizlik yön değiştirmez.',
            mathLines: ['a<0<b\\;\\text{ iken }\\dfrac{1}{a}<\\dfrac{1}{b}\\text{ olur.}']
          },
          {
            text: 'a ve b birer pozitif gerçek sayı ve x pozitif tam sayı olmak üzere;',
            mathLines: ['0<a<b\\;\\text{ iken }a^x<b^x\\text{ olur.}']
          },
          {
            text: 'a ve b negatif birer sayı ve x pozitif tam sayı olduğunda;',
            mathLines: [
              'a<b<0,\\;x\\text{ tek ise, }a^x<b^x',
              'x\\text{ çift ise, }a^x>b^x\\text{ olur.}'
            ]
          }
        ] },
      { title: 'Birinci Dereceden Bir Bilinmeyenli Eşitsizlikler',
        formulaLines: [
          'a,b\\in\\mathbb{R},\\quad a\\neq0',
          'ax+b<0',
          'ax+b>0',
          'ax+b\\le0',
          'ax+b\\ge0'
        ],
        tipLines: [
          'a, b gerçek sayı ve a sıfırdan farklı olmak üzere;',
          'ax + b < 0, ax + b > 0, ax + b ≤ 0, ax + b ≥ 0 şeklindeki eşitsizliklere birinci dereceden bir bilinmeyenli eşitsizlikler adı verilir.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { question: '2x + 3 < 11 eşitsizliğini çözünüz.',
      steps: ['2x<8', 'x<4', { text: 'Çözüm 4’ten küçük tüm gerçek sayılardır.' }],
      answer: 'x<4' },
    { question: '-3x + 6 ≤ 15 eşitsizliğini çözünüz.',
      steps: ['-3x\\le9', { text: 'İki taraf -3’e bölünürken yön değişir.' }, 'x\\ge-3'],
      answer: 'x\\ge-3' },
    { question: '5 ≤ 2x + 1 < 13 bileşik eşitsizliğini çözünüz.',
      steps: ['4\\le2x<12', '2\\le x<6'],
      answer: '[2,6)' },
    { question: '3x - 4 ≥ x + 8 eşitsizliğini çözünüz.',
      steps: ['2x\\ge12', 'x\\ge6'],
      answer: 'x\\ge6' }
  ],
  quiz: quizRows([
    ['x + 4 < 9 eşitsizliğinin çözümü nedir?', ['x<5','x>5','x≤5','x≥5'], 0, 'İki taraftan 4 çıkarılır.'],
    ['2x ≤ 10 eşitsizliğinin çözümü nedir?', ['x≤5','x≥5','x<5','x>5'], 0, 'Pozitif 2’ye bölünür, yön değişmez.'],
    ['-2x < 8 eşitsizliğinin çözümü nedir?', ['x< -4','x> -4','x<4','x>4'], 1, 'Negatif sayıya bölünürken yön değişir.'],
    ['3x - 1 > 8 eşitsizliğinin çözümü nedir?', ['x>2','x>3','x<3','x≥3'], 1, '3x>9, x>3.'],
    ['5 - x ≥ 2 eşitsizliğinin çözümü nedir?', ['x≤3','x≥3','x< -3','x>3'], 0, '-x≥-3, x≤3.'],
    ['4x + 2 ≤ 18 eşitsizliğinin çözümü nedir?', ['x≤4','x≥4','x<4','x>4'], 0, '4x≤16, x≤4.'],
    ['-5x ≥ 20 eşitsizliğinin çözümü nedir?', ['x≥-4','x≤-4','x≥4','x≤4'], 1, 'Negatif 5’e bölünür, yön değişir.'],
    ['x - 7 > -2 eşitsizliğinin çözümü nedir?', ['x>5','x<5','x≥5','x>-9'], 0, 'İki tarafa 7 eklenir.'],
    ['2x + 1 ≥ x + 6 eşitsizliği için çözüm nedir?', ['x≥5','x≤5','x>5','x<5'], 0, 'x≥5.'],
    ['3x - 2 < x + 4 eşitsizliği için çözüm nedir?', ['x<3','x>3','x≤3','x≥3'], 0, '2x<6, x<3.'],
    ['-x ≤ 6 eşitsizliği için çözüm nedir?', ['x≤-6','x≥-6','x≤6','x≥6'], 1, 'Negatif 1’e bölünür, yön değişir.'],
    ['x/3 > 4 eşitsizliği için çözüm nedir?', ['x>12','x<12','x≥12','x>1'], 0, 'İki taraf 3 ile çarpılır.'],
    ['x/(-2) ≥ 5 eşitsizliği için çözüm nedir?', ['x≥-10','x≤-10','x≥10','x≤10'], 1, 'Negatif 2 ile çarpılırken yön değişir.'],
    ['1 < x < 5 aralığı hangi gösterimdir?', ['(1,5)','[1,5]','(1,5]','[1,5)'], 0, 'İki uç dahil değildir.'],
    ['1 ≤ x < 5 aralığı hangi gösterimdir?', ['(1,5)','[1,5]','[1,5)','(1,5]'], 2, 'Sol uç dahil, sağ uç dahil değildir.'],
    ['Negatif sayıyla çarpma eşitsizlik yönünü nasıl etkiler?', ['Değiştirir','Korur','Sıfırlar','Çözümü yok eder'], 0, 'Negatif çarpan yön değiştirir.'],
    ['Pozitif sayıyla bölme eşitsizlik yönünü nasıl etkiler?', ['Değiştirir','Korur','Ters çevirir','Yok eder'], 1, 'Pozitif bölmede yön korunur.'],
    ['x ≥ -2 aralığı hangisidir?', ['[-2,∞)','(-2,∞)','(-∞,-2]','(-∞,-2)'], 0, '-2 dahil ve sağa sonsuzdur.'],
    ['x < 4 aralığı hangisidir?', ['(-∞,4)','(-∞,4]','(4,∞)','[4,∞)'], 0, '4 dahil değildir.'],
    ['2 ≤ x ≤ 7 aralığı hangisidir?', ['[2,7]','(2,7)','[2,7)','(2,7]'], 0, 'İki uç da dahildir.'],
    ['-1 < 2x + 1 ≤ 9 için ilk sadeleşmiş aralık hangisidir?', ['-2<2x≤8','0<2x≤10','-1<2x≤9','-2≤2x<8'], 0, 'Her taraftan 1 çıkarılır.'],
    ['-1 < 2x + 1 ≤ 9 çözümü nedir?', ['-1<x≤4','x<4','x≤4','-2<x≤8'], 0, '-2<2x≤8, -1<x≤4.'],
    ['3 - 2x < 7 çözümü nedir?', ['x>-2','x<-2','x>2','x<2'], 0, '-2x<4, x>-2.'],
    ['7x ≥ 0 çözümü nedir?', ['x≥0','x≤0','x>0','x<0'], 0, 'Pozitif 7’ye bölünür.'],
    ['0x < 3 eşitsizliği için hangisi doğrudur?', ['Her gerçek sayı','Çözüm yok','Sadece 0','Sadece 3'], 0, '0<3 her zaman doğrudur.']
  ])
});

extendTopicPractice(20, {
  summary: 'Birinci dereceden iki bilinmeyenli denklemler ax + by = c biçimindedir; çözüm sıralı ikililerden oluşur ve denklem sistemleri yok etme, yerine koyma veya grafikle çözülür.',
  theory: {
    rules: [
      { title: 'Birinci Dereceden İki Bilinmeyenli Denklemlerin Tanımı',
        formulaLines: [
          'a,b,c\\in\\mathbb{R},\\quad (a,b)\\neq(0,0)',
          'ax+by=c'
        ],
        tipLines: [
          'a ve b aynı anda sıfır olmamak ve a, b, c gerçek sayılar olmak üzere; x ile y değişkenler olmak üzere ax + by = c şeklindeki denklemlere birinci dereceden iki bilinmeyenli denklemler adı verilir.',
          'Bu denklemi sağlayan (doğrulayan) x ve y gerçek sayıları ise (x, y) olarak yazılır ve bu sıralı ikiliye denklemin çözüm kümesinin bir elemanı denir.',
          'Birinci dereceden iki bilinmeyenli denklemlerin grafikleri doğru belirtir.'
        ] },
      { title: 'Birinci Dereceden İki Bilinmeyenli Denklem Sistemi',
        formulaLines: [
          'ax+by=m',
          'cx+dy=n'
        ],
        tipLines: [
          'a, b, c, d, m ve n gerçek sayılar olmak üzere;',
          'aynı değişkenlerden oluşan ve birden fazla denklem bulunduran ifadelere birinci dereceden iki bilinmeyenli denklem sistemi adı verilir.'
        ] },
      { title: 'Birinci Dereceden İki Bilinmeyenli Denklemlerin Çözüm Yöntemleri',
        plainFormula: 'Yok etme yöntemi\nYerine koyma yöntemi\nGrafik çizimi',
        tipLines: [
          'Birinci dereceden iki bilinmeyenli denklem sistemlerinin çözüm kümesini bulmak için yok etme, yerine koyma ve grafik çizimi gibi yöntemler kullanılır.'
        ] },
      { title: 'Yok Etme Yöntemi',
        formulaLines: [
          'ax+by=m',
          'cx+dy=n'
        ],
        tipLines: [
          'Denklem sisteminde bilinmeyenlerden herhangi birinin katsayısı diğer denklemdeki aynı bilinmeyenin katsayısıyla mutlak değerce eşit, işaret bakımından ters olacak şekilde düzenlenir.',
          'Taraf tarafa toplama yoluyla seçilen değişken yok edilir.'
        ] },
      { title: 'Yerine Koyma Yöntemi',
        plainFormula: 'Bir değişken yalnız bırakılır.\nDiğer denklemde yerine yazılır.',
        tipLines: [
          'Denklem sistemindeki denklemlerin herhangi birinden herhangi bir değişken eşitliğin bir tarafında yalnız bırakılır.',
          'Yalnız bırakılan değişken diğer denklemde yerine yazılır.'
        ] },
      { title: 'Grafik Yorumu',
        formulaLines: [
          'ax+by+c=0',
          'dx+ey+f=0'
        ],
        tipLines: [
          'Birinci dereceden iki bilinmeyenli bir denklemin çözüm kümesini oluşturan sıralı ikililer analitik düzlemde bir doğru belirtir.',
          'Denklem sistemini oluşturan denklemlerin belirttiği doğruların kesişim noktası ya da noktaları bu denklem sisteminin çözüm kümesini oluşturur.',
          'ax + by + c = 0 ve dx + ey + f = 0 denklem sisteminde her bir denklem bir doğru belirtir.'
        ] },
      { title: 'Doğruların Durumu',
        numberedItems: [
          {
            text: 'Oranlar eşit ise doğrular çakışıktır ve çözüm kümesi sonsuz elemanlıdır.',
            mathLines: ['\\dfrac{a}{d}=\\dfrac{b}{e}=\\dfrac{c}{f}']
          },
          {
            text: 'İlk iki oran eşit, sabit terim oranı farklı ise doğrular paraleldir ve çözüm kümesi boş kümedir.',
            mathLines: ['\\dfrac{a}{d}=\\dfrac{b}{e}\\neq\\dfrac{c}{f}']
          },
          {
            text: 'İlk iki oran farklı ise doğrular tek noktada kesişir.',
            mathLines: ['\\dfrac{a}{d}\\neq\\dfrac{b}{e}']
          }
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { question: '2x + y = 9 denkleminde x = 3 ise y kaçtır?',
      steps: ['2\\cdot3+y=9', '6+y=9', 'y=3'],
      answer: '3' },
    { question: '(2, 1) sıralı ikilisi 3x + 2y = 8 denklemini sağlar mı?',
      steps: ['3\\cdot2+2\\cdot1=6+2=8', { text: 'Eşitlik sağlandığı için sıralı ikili çözümdür.' }],
      answer: 'Sağlar' },
    { question: '$\\begin{cases}x+y=7\\\\x-y=1\\end{cases}$ sistemini çözünüz.',
      steps: [{ text: 'Denklemleri taraf tarafa toplarız.' }, '2x=8', 'x=4', '4+y=7\\Rightarrow y=3'],
      answer: '(4,3)' },
    { question: '$\\begin{cases}2x+y=11\\\\x-y=1\\end{cases}$ sistemini çözünüz.',
      steps: [{ text: 'İkinci denklemden x = y + 1 bulunur.' }, '2(y+1)+y=11', '3y=9', 'y=3,\\;x=4'],
      answer: '(4,3)' }
  ],
  quiz: quizRows([
    ['2x + y = 10 denkleminde x=4 ise y kaçtır?', ['1','2','3','4'], 1, '8+y=10, y=2.'],
    ['x - y = 5 denkleminde x=8 ise y kaçtır?', ['2','3','4','5'], 1, '8-y=5, y=3.'],
    ['(1,3) ikilisi x + y = 4 denklemini sağlar mı?', ['Evet','Hayır','Sadece x sağlar','Sadece y sağlar'], 0, '1+3=4.'],
    ['(2,5) ikilisi 2x + y = 9 denklemini sağlar mı?', ['Evet','Hayır','Her zaman','Belirsiz'], 0, '4+5=9.'],
    ['(3,1) ikilisi x + 2y = 7 denklemini sağlar mı?', ['Evet','Hayır','Sadece y=1','Çözüm yok'], 1, '3+2=5, 7 değildir.'],
    ['$\\begin{cases}x+y=6\\\\x-y=2\\end{cases}$ sisteminde x kaçtır?', ['2','3','4','5'], 2, 'Toplanırsa 2x=8, x=4.'],
    ['$\\begin{cases}x+y=6\\\\x-y=2\\end{cases}$ sisteminde y kaçtır?', ['1','2','3','4'], 1, 'x=4 olduğundan y=2.'],
    ['$\\begin{cases}2x+y=8\\\\x+y=5\\end{cases}$ sisteminde x kaçtır?', ['1','2','3','4'], 2, 'Denklemler çıkarılırsa x=3.'],
    ['$\\begin{cases}2x+y=8\\\\x+y=5\\end{cases}$ sisteminde y kaçtır?', ['1','2','3','4'], 1, 'x=3, y=2.'],
    ['Tek bir ax+by=c denklemi genellikle kaç çözüme sahiptir?', ['Yok','Bir','Sonsuz','İki'], 2, 'Doğru üzerindeki birçok sıralı ikili denklemi sağlar.'],
    ['Sıralı ikili (x,y) için ilk bileşen nedir?', ['x','y','x+y','x-y'], 0, 'İlk bileşen x değeridir.'],
    ['Sıralı ikili (x,y) için ikinci bileşen nedir?', ['x','y','x+y','x-y'], 1, 'İkinci bileşen y değeridir.'],
    ['Yok etme yönteminde amaç nedir?', ['Bir bilinmeyeni yok etmek','İki bilinmeyen eklemek','Denklemi bozmak','Payda oluşturmak'], 0, 'Uygun toplama/çıkarma ile bir bilinmeyen yok edilir.'],
    ['Yerine koyma yönteminde ilk adım genellikle nedir?', ['Bir bilinmeyeni yalnız bırakmak','İki tarafı silmek','Karekök almak','Mutlak değer almak'], 0, 'Bir bilinmeyen diğerinin cinsinden yazılır.'],
    ['x + y = 9 denkleminde y = 2 ise x kaçtır?', ['5','6','7','8'], 2, 'x+2=9, x=7.'],
    ['3x - y = 4 denkleminde x = 2 ise y kaçtır?', ['1','2','3','4'], 1, '6-y=4, y=2.'],
    ['x + 2y = 11 denkleminde y = 4 ise x kaçtır?', ['1','2','3','4'], 2, 'x+8=11, x=3.'],
    ['2x - 3y = 1 denkleminde (5,3) çözüm müdür?', ['Evet','Hayır','Yalnız x','Yalnız y'], 0, '10-9=1.'],
    ['$\\begin{cases}x+y=10\\\\y=3\\end{cases}$ sisteminde x kaçtır?', ['5','6','7','8'], 2, 'x+3=10, x=7.'],
    ['$\\begin{cases}x=2y\\\\x+y=9\\end{cases}$ sisteminde y kaçtır?', ['2','3','4','5'], 1, '2y+y=9, y=3.'],
    ['$\\begin{cases}x=2y\\\\x+y=9\\end{cases}$ sisteminde x kaçtır?', ['3','4','5','6'], 3, 'y=3, x=6.'],
    ['İki denklem sisteminde çözüm neyi sağlamalıdır?', ['Sadece ilk denklemi','Sadece ikinci denklemi','Her iki denklemi','Hiçbirini'], 2, 'Ortak çözüm iki denklemi de sağlar.'],
    ['ax+by=c denkleminde a ve b için hangisi doğrudur?', ['İkisi aynı anda 0 olamaz','İkisi de 0 olmalı','Sadece a=0','Sadece b=0'], 0, 'Aksi halde birinci dereceden denklem oluşmaz.'],
    ['x + y = 5 ve x + y = 7 sistemi için hangisi doğrudur?', ['Tek çözüm','Sonsuz çözüm','Çözüm yok','x=0'], 2, 'Aynı ifade iki farklı sayıya eşit olamaz.'],
    ['x + y = 5 ve 2x + 2y = 10 sistemi için hangisi doğrudur?', ['Çözüm yok','Sonsuz çözüm','Tek çözüm','yok etme imkansız'], 1, 'İkinci denklem ilkinin 2 katıdır.']
  ])
});

extendTopicPractice(21, {
  summary: 'Birinci dereceden iki bilinmeyenli eşitsizliklerin çözüm kümesi sıralı ikililerden oluşur ve analitik düzlemde boyalı bölgeyle gösterilir.',
  theory: {
    rules: [
      { title: 'Birinci Dereceden İki Bilinmeyenli Eşitsizliklerin Tanımı',
        formulaLines: [
          'a,b,c\\in\\mathbb{R}',
          'a\\neq0,\\quad b\\neq0',
          'ax+by\\le c',
          'ax+by<c',
          'ax+by\\ge c',
          'ax+by>c'
        ],
        tipLines: [
          'a, b, c birer gerçek sayı, a ve b sıfırdan farklı olmak üzere;',
          'ax + by ≤ c, ax + by < c, ax + by ≥ c, ax + by > c şeklindeki ifadelere birinci dereceden iki bilinmeyenli eşitsizlikler denir.',
          'Birinci dereceden iki bilinmeyenli denklemlerde olduğu gibi bu eşitsizliğin çözüm kümesi de (x, y) şeklindeki sıralı ikililerden oluşur.',
          'Eşitsizliği doğru yapan sonsuz sayıda sıralı ikili bulunacağından çözüm kümesi analitik düzlemde boyalı bölgeler çizilerek gösterilir.'
        ] },
      { title: 'Birinci Dereceden İki Bilinmeyenli Eşitsizliklerin Çözümü',
        formulaLines: [
          'ax+by\\le c',
          'ax+by=c',
          'y=-\\dfrac{a}{b}x+\\dfrac{c}{b}',
          'm=-\\dfrac{a}{b},\\quad n=\\dfrac{c}{b}',
          'y=mx+n'
        ],
        tipLines: [
          'ax + by ≤ c ifadesinde önce ax + by = c alınır.',
          'Denklemde y değişkeni yalnız bırakılarak y = -(a/b)x + c/b denklemi elde edilir.',
          'Bu denklemde m = -a/b ve n = c/b düzenlemeleri yapılarak y = mx + n doğru denklemi elde edilir.',
          'y = mx + n denkleminin çözüm kümesi, doğru üzerindeki noktaları gösterir.'
        ] },
      { title: 'Doğrunun Üst ve Alt Bölgesi',
        formulaLines: [
          'y=mx+n',
          'y>mx+n',
          'y<mx+n'
        ],
        tipLines: [
          'y > mx + n eşitsizliğinin çözüm kümesi, y = mx + n doğrusunun üst bölgesidir.',
          'y < mx + n eşitsizliğinin çözüm kümesi, y = mx + n doğrusunun alt bölgesidir.'
        ] },
      { title: 'Düz ve Kesikli Doğru',
        formulaLines: [
          '\\le\\;\\text{ veya }\\;\\ge\\Rightarrow\\text{düz çizgi}',
          '<\\;\\text{ veya }\\;>\\Rightarrow\\text{kesikli çizgi}'
        ],
        tipLines: [
          '≤ veya ≥ durumunda doğru üzerindeki noktalar çözüm kümesine ait olduğundan doğru, düz çizgi şeklinde çizilir.',
          '< veya > durumunda doğru üzerindeki noktalar çözüm kümesine ait olmadığından doğru, kesikli çizgi şeklinde çizilir.'
        ] },
      { title: 'Eşitsizlik Bölgesi Nasıl Bulunur?',
        text: 'Denklemde çözüm kümesi bir doğru üzerindeki noktalardır. Eşitsizlikte ise çözüm kümesi doğrunun ayırdığı bölgelerden biridir.',
        numberedItems: [
          {
            text: 'Eşitsizliği denkleme çevir.',
            lines: [
              'Eşitsizlik işaretini eşittir yap ve sınır doğrusunu çiz.'
            ],
            mathLines: [
              '2x+3y\\le12\\Rightarrow2x+3y=12'
            ]
          },
          {
            text: 'Doğrunun düz mü kesikli mi çizileceğine karar ver.',
            lines: [
              '≤ veya ≥ varsa doğru üzerindeki noktalar da çözüme dahildir; doğru düz çizilir.',
              '< veya > varsa doğru üzerindeki noktalar çözüme dahil değildir; doğru kesikli çizilir.'
            ]
          },
          {
            text: 'Hangi tarafın boyanacağını test noktasıyla bul.',
            lines: [
              'Genellikle orijin (0, 0) denenir. Orijin doğrunun üzerindeyse başka bir nokta, örneğin (1, 1), seçilir.'
            ],
            mathLines: [
              '2\\cdot0+3\\cdot0\\le12\\Rightarrow0\\le12'
            ]
          },
          {
            text: 'Akılda kalsın.',
            mathLines: [
              'y>mx+n\\Rightarrow\\text{üst bölge, kesikli çizgi}',
              'y<mx+n\\Rightarrow\\text{alt bölge, kesikli çizgi}',
              'y\\ge mx+n\\Rightarrow\\text{üst bölge, düz çizgi}',
              'y\\le mx+n\\Rightarrow\\text{alt bölge, düz çizgi}'
            ]
          },
          {
            text: 'Somut örnek: x + 2y < 6 eşitsizliğinin çözüm bölgesini bulalım.',
            lines: [
              'Önce x + 2y = 6 doğrusu çizilir.',
              'x = 0 için y = 3 olduğundan (0, 3) noktası bulunur.',
              'y = 0 için x = 6 olduğundan (6, 0) noktası bulunur.',
              'İşaret < olduğu için doğru kesikli çizilir.',
              'Orijin denenir; 0 + 2·0 < 6 doğru olduğundan orijinin bulunduğu taraf boyanır.'
            ],
            mathLines: [
              'x+2y=6',
              'x=0\\Rightarrow y=3\\Rightarrow(0,3)',
              'y=0\\Rightarrow x=6\\Rightarrow(6,0)',
              '0+2\\cdot0<6\\Rightarrow0<6'
            ]
          }
        ],
        tipLines: [
          'Sınav sorularında en sık hata eşitsizlik işaretini yanlış okumaktır.',
          '< ile ≤ arasındaki farkı ayırmak için önce doğrunun kesikli mi düz mü çizileceğine bak.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { question: 'x + y ≤ 6 eşitsizliğinin çözüm bölgesini yorumlayınız.', steps: ['x+y=6', { text: '≤ olduğu için sınır doğrusu dahildir.' }, { text: '(0,0) denenir: 0≤6 doğru olduğundan orijinin bulunduğu taraf alınır.' }], answer: 'Orijin tarafı ve sınır dahil' },
    { question: 'y > 2x - 1 eşitsizliğinde sınır doğru dahil midir?', steps: [{ text: '> sembolünde eşitlik yoktur.' }, { text: 'Bu yüzden y = 2x - 1 doğrusu çözüm kümesine dahil değildir.' }], answer: 'Dahil değildir' },
    { question: 'x ≥ 3 eşitsizliği hangi bölgeyi belirtir?', steps: [{ text: 'Sınır x = 3 düşey doğrusudur.' }, { text: 'x değerleri 3 ve 3’ten büyük olduğundan doğrunun sağ tarafı alınır.' }], answer: 'x=3 dahil sağ taraf' },
    { question: '2x - y < 4 eşitsizliğinde (0,0) çözüm müdür?', steps: ['2\\cdot0-0<4', '0<4', { text: 'Eşitsizlik doğru olduğu için (0,0) çözüm bölgesindedir.' }], answer: 'Evet' }
  ],
  quiz: quizRows([
    ['x + y < 5 eşitsizliğinde sınır doğrusu nedir?', ['x+y=5','x-y=5','x=5','y=5'], 0, 'Eşitsizlik eşitliğe çevrilir.'],
    ['x + y ≤ 5 eşitsizliğinde sınır dahil midir?', ['Evet','Hayır','Sadece x','Sadece y'], 0, '≤ sınırı dahil eder.'],
    ['x + y < 5 eşitsizliğinde sınır nasıl çizilir?', ['Sürekli','Kesikli','Kalın','Çizilmez'], 1, '< sınırın dahil olmadığını gösterir.'],
    ['x + y ≥ 5 eşitsizliğinde sınır nasıl çizilir?', ['Kesikli','Sürekli','Noktasız','Çizilmez'], 1, '≥ sınırı dahil eder.'],
    ['y > x eşitsizliği hangi tarafı belirtir?', ['y=x doğrusunun üstü','Altı','Sadece doğru','Boş küme'], 0, 'y değeri x’ten büyük olan bölge üst taraftır.'],
    ['y < x eşitsizliği hangi tarafı belirtir?', ['Üst','Alt','Sadece doğru','Tüm düzlem'], 1, 'y değeri x’ten küçük olan bölgedir.'],
    ['x ≥ 0 hangi bölgedir?', ['Sağ yarı düzlem','Sol yarı düzlem','Üst yarı düzlem','Alt yarı düzlem'], 0, 'x koordinatı negatif olmayan noktalar sağ taraftadır.'],
    ['y ≥ 0 hangi bölgedir?', ['Sağ','Sol','Üst','Alt'], 2, 'y koordinatı negatif olmayan noktalar üst taraftadır.'],
    ['x ≤ 2 eşitsizliğinde hangi taraf alınır?', ['Sağ','Sol','Üst','Alt'], 1, 'x değerleri 2 ve daha küçüktür.'],
    ['y ≤ -1 eşitsizliğinde hangi taraf alınır?', ['Üst','Alt','Sağ','Sol'], 1, 'y değerleri -1 ve daha küçüktür.'],
    ['Deneme noktası ne için kullanılır?', ['Taraf seçmek','Payda eşitlemek','Kök almak','Skor bulmak'], 0, 'Nokta eşitsizliği sağlarsa o taraf çözüm olur.'],
    ['Deneme noktası sınır doğrusu üzerinde olabilir mi?', ['Olabilir','Olmamalıdır','Her zaman olmalı','Sadece orijin'], 1, 'Doğru üzerindeyse taraf bilgisi vermez.'],
    ['2x + y < 4 için (0,0) çözüm müdür?', ['Evet','Hayır','Sınırda','Belirsiz'], 0, '0<4 doğrudur.'],
    ['2x + y > 4 için (0,0) çözüm müdür?', ['Evet','Hayır','Sınırda','Her zaman'], 1, '0>4 yanlıştır.'],
    ['x + y = 6 doğrusu hangi eşitsizliğin sınırı olabilir?', ['x+y≤6','x-y≤6','x≤6','y≤6'], 0, 'Aynı sol taraf ve sabit olmalıdır.'],
    ['< sembolünde sınır noktası çözümde midir?', ['Dahil','Dahil değil','Her zaman','Sadece orijin'], 1, '< eşitlik içermez.'],
    ['≥ sembolünde sınır noktası çözümde midir?', ['Dahil','Dahil değil','Belirsiz','Yok'], 0, '≥ eşitlik içerir.'],
    ['x + y ≤ 3 için (1,1) çözüm müdür?', ['Evet','Hayır','Sınır değil','Boş'], 0, '1+1=2≤3.'],
    ['x + y ≤ 3 için (2,2) çözüm müdür?', ['Evet','Hayır','Sınırda','Her zaman'], 1, '2+2=4≤3 değildir.'],
    ['3x - y ≥ 0 için (1,2) çözüm müdür?', ['Evet','Hayır','Belirsiz','Sınırda değil'], 0, '3-2=1≥0.'],
    ['3x - y ≥ 0 için (0,1) çözüm müdür?', ['Evet','Hayır','Sınırda','Her zaman'], 1, '-1≥0 yanlıştır.'],
    ['y = 2 doğrusu hangi tip doğrudur?', ['Yatay','Düşey','Eğik','Nokta'], 0, 'y sabit olan doğrular yataydır.'],
    ['x = -3 doğrusu hangi tip doğrudur?', ['Yatay','Düşey','Eğik','Parabol'], 1, 'x sabit olan doğrular düşeydir.'],
    ['Bir doğru düzlemi kaç yarı düzleme ayırır?', ['1','2','3','Sonsuz'], 1, 'Doğru düzlemi iki yarı düzleme ayırır.'],
    ['Çözüm bölgesi ne demektir?', ['Eşitsizliği sağlayan noktalar','Sadece eksenler','Sadece orijin','Paydalar kümesi'], 0, 'Eşitsizliği sağlayan tüm noktalar çözüm bölgesidir.']
  ])
});

extendTopicPractice(22, {
  summary: 'En az iki birinci dereceden iki bilinmeyenli eşitsizlikten oluşan sistemin çözümü, eşitsizliklerin çözüm kümelerinin kesişimidir.',
  theory: {
    rules: [
      { title: 'Birinci Dereceden İki Bilinmeyenli Eşitsizlik Sistemi',
        formula: '\\begin{cases} ax+by\\le c \\\\ dx+ey\\ge f \\end{cases}',
        tipLines: [
          'En az iki tane birinci dereceden iki bilinmeyenli eşitsizliğin oluşturduğu sisteme birinci dereceden iki bilinmeyenli eşitsizlik sistemi denir.',
          'Eşitsizlik sisteminin çözümü, sistemi oluşturan eşitsizliklerin çözüm kümelerinin kesişimidir.'
        ] },
      { title: 'Örnek Sistem',
        formula: '\\begin{cases}2x-3y\\ge -6\\\\6x-9y\\le54\\end{cases}',
        tipLines: [
          '2x - 3y ≥ -6 için x = 0 ise y = 2 → (0, 2) bulunur.',
          '2x - 3y ≥ -6 için y = 0 ise x = -3 → (-3, 0) bulunur.',
          '6x - 9y ≤ 54 için x = 0 ise y = -6 → (0, -6) bulunur.',
          '6x - 9y ≤ 54 için y = 0 ise x = 9 → (9, 0) bulunur.',
          'Bu noktalarla doğrular aynı analitik düzlemde gösterilir.'
        ] },
      { title: 'Ortak Boyalı Bölge',
        formula: 'Çözüm=Ç_1\\cap Ç_2',
        tipLines: [
          'Mavi ve sarı renkli bölgelerin kesiştikleri bölge eşitsizlik sisteminin çözüm kümesidir.',
          'Her eşitsizliğin doğruyu ve hangi tarafın boyanacağını belirlediği unutulmamalıdır.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { question: '$\\begin{cases}x+y\\le6\\\\x\\ge0\\\\y\\ge0\\end{cases}$ sisteminin bölgesini yorumlayınız.', steps: [{ text: 'x ≥ 0 ve y ≥ 0 birinci bölgeyi verir.' }, { text: 'x + y ≤ 6 doğrusu altında kalan bölge alınır.' }, { text: 'Ortak bölge eksenler ve x+y=6 doğrusu ile sınırlı üçgendir.' }], answer: 'Birinci bölgede sınırlı üçgen' },
    { question: '$\\begin{cases}x>2\\\\x<5\\end{cases}$ sisteminin çözümü nedir?', steps: [{ text: 'İki koşul aynı anda sağlanmalıdır.' }, '2<x<5'], answer: '(2,5)' },
    { question: '$\\begin{cases}y\\ge x\\\\y\\le4\\end{cases}$ sisteminde (2,3) çözüm müdür?', steps: ['3\\ge2\\;\\text{doğru}', '3\\le4\\;\\text{doğru}', { text: 'İki eşitsizlik de sağlandığı için çözüm noktasıdır.' }], answer: 'Evet' },
    { question: '$\\begin{cases}x+y\\le4\\\\x+y\\ge6\\end{cases}$ sistemi için ne söylenir?', steps: [{ text: 'Bir noktanın x+y değeri aynı anda hem 4’ten küçük eşit hem 6’dan büyük eşit olamaz.' }], answer: 'Çözüm yok' }
  ],
  quiz: quizRows([
    ['Eşitsizlik sisteminde çözüm nasıl bulunur?', ['Bölgelerin kesişimi','Bölgelerin toplamı','Sadece ilk eşitsizlik','Sadece eksen'], 0, 'Tüm koşulları sağlayan ortak bölge alınır.'],
    ['x>1 ve x<4 sisteminin çözümü nedir?', ['(1,4)','[1,4]','(-∞,1)','(4,∞)'], 0, 'İki koşul aynı anda 1<x<4 verir.'],
    ['x≥1 ve x≤4 sisteminin çözümü nedir?', ['(1,4)','[1,4]','[1,4)','(1,4]'], 1, 'İki uç dahil.'],
    ['x<1 ve x>4 sistemi için hangisi doğrudur?', ['Çözüm yok','Tüm gerçekler','[1,4]','(1,4)'], 0, 'Aynı anda sağlanamaz.'],
    ['x≥0 ve y≥0 hangi bölgeyi verir?', ['Birinci bölge','İkinci bölge','Üçüncü bölge','Dördüncü bölge'], 0, 'İki koordinat da negatif değildir.'],
    ['x+y≤5 ve x≥0, y≥0 ortak bölgesi nasıldır?', ['Üçgen','Boş','Sadece doğru','Parabol'], 0, 'Eksenler ve doğru sınırlı üçgen oluşturur.'],
    ['Sistemdeki bir nokta çözümse neyi sağlamalıdır?', ['Tüm eşitsizlikleri','Sadece birini','Hiçbirini','Sadece sınırı'], 0, 'Sistem çözümü tüm koşulları sağlar.'],
    ['y≥x ve y≤x sistemi neyi verir?', ['y=x doğrusu','Boş küme','Tüm düzlem','Sadece orijin'], 0, 'İki koşul birlikte y=x demektir.'],
    ['x+y≤4 için (1,2) uygun mudur?', ['Evet','Hayır','Sınır dışı','Belirsiz'], 0, '1+2=3≤4.'],
    ['x+y≤4 için (3,3) uygun mudur?', ['Evet','Hayır','Sınırda','Her zaman'], 1, '3+3=6≤4 değildir.'],
    ['x≥0, y≥0, x+y≤6 sisteminde (2,3) çözüm müdür?', ['Evet','Hayır','Sadece sınır','Boş'], 0, '2+3=5≤6 ve koordinatlar uygundur.'],
    ['x≥0, y≥0, x+y≤6 sisteminde (-1,2) çözüm müdür?', ['Evet','Hayır','Sınırda','Belirsiz'], 1, 'x≥0 koşulunu sağlamaz.'],
    ['Sınırlı çözüm bölgesi ne demektir?', ['Kapalı bir alanla sınırlı bölge','Sonsuza giden bölge','Boş küme','Sadece doğru'], 0, 'Bölge sonlu bir alanla çevrilidir.'],
    ['Sınırsız çözüm bölgesi ne demektir?', ['Sonsuza uzanabilir','Daima boş','Tek nokta','Sadece üçgen'], 0, 'Bölge bir yönde sonsuza gider.'],
    ['Köşe noktası nasıl oluşabilir?', ['Sınır doğrularının kesişmesiyle','Paydaların eşitlenmesiyle','Kök alınmasıyla','Sadece orijinle'], 0, 'Sınırlar kesişirse köşe noktası oluşabilir.'],
    ['x+y≤3 ve x+y≥3 birlikte neyi verir?', ['x+y=3 doğrusu','Boş küme','Tüm düzlem','x=3'], 0, 'İki koşul eşitliği zorlar.'],
    ['x≤2 ve x≥2 birlikte neyi verir?', ['x=2 doğrusu','x<2','x>2','Boş'], 0, 'x tam olarak 2 olur.'],
    ['y<1 ve y≤5 sisteminde daha sınırlayıcı koşul hangisidir?', ['y<1','y≤5','İkisi de aynı','Boş'], 0, 'y<1 zaten y≤5’i sağlar.'],
    ['x>3 ve x>7 sisteminde çözüm nedir?', ['x>7','x>3','3<x<7','Boş'], 0, 'Daha güçlü koşul x>7’dir.'],
    ['x<3 ve x<7 sisteminde çözüm nedir?', ['x<3','x<7','3<x<7','Boş'], 0, 'Daha güçlü koşul x<3’tür.'],
    ['y≥0 ve y≤0 birlikte neyi verir?', ['y=0 ekseni','x=0 ekseni','Tüm düzlem','Boş'], 0, 'y tam olarak 0 olur.'],
    ['x≥0 ve x≤0 birlikte neyi verir?', ['x=0 ekseni','y=0 ekseni','Tüm düzlem','Boş'], 0, 'x tam olarak 0 olur.'],
    ['Bir sistemin çözüm bölgesi boş olabilir mi?', ['Evet','Hayır','Sadece doğrularda','Sadece üçgende'], 0, 'Çelişen koşullar boş küme verebilir.'],
    ['Eşitsizlik sisteminde grafik yöntemi ne sağlar?', ['Ortak bölgeyi görmeyi','Üs almayı','Kök sadeleştirmeyi','Payda silmeyi'], 0, 'Grafik ortak bölgeyi görselleştirir.'],
    ['x+y≤5 ve x+y≥7 sistemi için hangisi doğrudur?', ['Çözüm yok','Sonsuz çözüm','x=0','y=0'], 0, 'Aynı toplam iki aralığı birden sağlayamaz.']
  ])
});

extendTopicPractice(23, {
  examples: [
    { questionBlocks: [
        'SORU 1 — Temel Hesap (Kolay)',
        { tex: '|-8|+|3|-|-5|=?' }
      ],
      steps: [
        { text: '|−8| = 8; negatif sayı mutlak değerden ters işaretlisiyle çıkar.' },
        { text: '|3| = 3; pozitif sayı olduğu gibi kalır.' },
        { text: '|−5| = 5; negatif sayı mutlak değerden ters işaretlisiyle çıkar.' },
        '8+3-5=6'
      ],
      answer: '6' },
    { questionBlocks: [
        'SORU 2 — Değişkenli İfade (Orta)',
        { tex: 'a<0\\;\\text{ ise }\\;|5a|=?' }
      ],
      steps: [
        { text: 'İçerideki ifade 5a’dır.' },
        { text: 'a < 0 olduğundan 5a = 5 · negatif = negatif olur.' },
        { text: 'İçerisi negatif olduğunda mutlak değer tersini alır.' },
        '|5a|=-(5a)',
        '|5a|=-5a'
      ],
      answer: '-5a' },
    { questionBlocks: [
        'SORU 3 — Denklem Çözümü (Orta)',
        { tex: '|x-3|=5\\;\\Rightarrow\\;x=?' }
      ],
      steps: [
        { text: 'Mutlak değer 5 ise içerisi ya 5 ya da -5 olabilir.' },
        'x-3=5\\Rightarrow x=8',
        'x-3=-5\\Rightarrow x=-2'
      ],
      answer: 'x=8\\;\\text{ veya }\\;x=-2' },
    { questionBlocks: [
        'SORU 4 — Eşitsizlik (Zor)',
        { tex: '|2x+1|<7\\;\\Rightarrow\\;x=?' }
      ],
      steps: [
        { text: '|A| < 7 ise -7 < A < 7 yazılır.' },
        '-7<2x+1<7',
        '-8<2x<6',
        '-4<x<3'
      ],
      answer: 'x\\in(-4,3)' },
    { questionBlocks: [
        'SORU 5 — Klasik Sınav Sorusu (Zor)',
        { tex: 'a>0,\\;b<0\\;\\text{ ise }\\;|a-b|-|b-a|=?' }
      ],
      steps: [
        { text: 'a > 0 ve b < 0 olduğundan a - b = pozitif - negatif = pozitif olur.' },
        '|a-b|=a-b',
        { text: 'b - a = negatif - pozitif = negatif olur.' },
        '|b-a|=-(b-a)=a-b',
        '(a-b)-(a-b)=0'
      ],
      answer: '0' },
    { question: '|2x − 4| = 6 denklemini çözün.',
      steps: [
        '2x-4=6\\quad\\text{veya}\\quad2x-4=-6',
        '\\text{Durum 1: }2x=10\\Rightarrow x=5',
        '\\text{Durum 2: }2x=-2\\Rightarrow x=-1'
      ],
      answer: 'x\\in\\{-1,5\\}' },
    { question: '|x - 4| < 3 eşitsizliğini çözünüz.', steps: ['-3<x-4<3', '1<x<7'], answer: '(1,7)' },
    { question: '|2x + 1| ≥ 5 eşitsizliğini çözünüz.', steps: ['2x+1\\le-5\\quad\\text{veya}\\quad2x+1\\ge5', 'x\\le-3\\quad\\text{veya}\\quad x\\ge2'], answer: '(-\\infty,-3]\\cup[2,\\infty)' },
    { question: '|x - 2| + |x - 6| ifadesinin en küçük değerini bulunuz.', steps: [{ text: 'İfade x’in 2 ve 6 noktalarına uzaklıkları toplamıdır.' }, { text: '2 ile 6 arasındaki her noktada toplam uzaklık 4 olur.' }], answer: '4' },
    { questionBlocks: [
        'SORU 1 — İç İçe Mutlak Değer (Zor)',
        { tex: '||x-2|-3|=1\\;\\Rightarrow\\;x=?' }
      ],
      steps: [
        { text: 'Dış mutlak değer 1 olduğundan içerisi 1 veya -1 olabilir.' },
        '|x-2|-3=1\\quad\\text{veya}\\quad |x-2|-3=-1',
        '|x-2|=4\\Rightarrow x-2=4\\;\\text{veya}\\;x-2=-4',
        'x=6\\quad\\text{veya}\\quad x=-2',
        '|x-2|=2\\Rightarrow x-2=2\\;\\text{veya}\\;x-2=-2',
        'x=4\\quad\\text{veya}\\quad x=0'
      ],
      answer: 'x=-2,\\;0,\\;4,\\;6' },
    { questionBlocks: [
        'SORU 2 — Mutlak Değerli Eşitsizlik (Büyüktür)',
        { tex: '|3x-6|\\ge9\\;\\Rightarrow\\;x=?' }
      ],
      steps: [
        { text: '|A| ≥ 9 ise A ≥ 9 veya A ≤ -9 yazılır; çözüm iki parçanın birleşimidir.' },
        '3x-6\\ge9\\Rightarrow3x\\ge15\\Rightarrow x\\ge5',
        '3x-6\\le-9\\Rightarrow3x\\le-3\\Rightarrow x\\le-1',
        { text: 'Küçüktür türü eşitsizliklerde genellikle tek parça aralık, büyüktür türünde iki ayrı parça oluşur.' }
      ],
      answer: 'x\\le-1\\;\\text{ veya }\\;x\\ge5' },
    { questionBlocks: [
        'SORU 3 — İki Mutlak Değerli Denklem (Çok Zor)',
        { tex: '|x+1|=|x-3|\\;\\Rightarrow\\;x=?' }
      ],
      steps: [
        { text: 'İki mutlak değer eşitse içerikler eşit veya zıt işaretli olabilir.' },
        'x+1=x-3\\Rightarrow1=-3',
        { text: 'Bu durum çelişki verdiği için çözüm üretmez.' },
        'x+1=-(x-3)\\Rightarrow x+1=-x+3',
        '2x=2\\Rightarrow x=1',
        { text: 'Geometrik yorum: x, sayı doğrusunda -1 ve 3 noktalarına eşit uzaklıktadır; bu noktaların orta noktası 1’dir.' }
      ],
      answer: 'x=1' },
    { questionBlocks: [
        'SORU 4 — Köklü İfade (Çok Zor)',
        { tex: '\\sqrt{x^2-6x+9}\\;\\text{ ifadesini sadeleştiriniz.}' }
      ],
      steps: [
        'x^2-6x+9=(x-3)^2',
        '\\sqrt{(x-3)^2}=|x-3|',
        { text: 'Kök altındaki kare dışarı mutlak değer olarak çıkar.' },
        'x\\ge3\\Rightarrow |x-3|=x-3',
        'x<3\\Rightarrow |x-3|=-(x-3)=3-x',
        { text: 'Altın kural: √(A²) = |A| her zaman. √(A²) = A demek her durumda doğru değildir.' }
      ],
      answer: '|x-3|' }
  ],
  quiz: quizRows([
    ['|-8| kaçtır?', ['-8','0','8','16'], 2, 'Mutlak değer uzaklık verdiği için sonuç 8’dir.'],
    ['|5| kaçtır?', ['-5','0','5','10'], 2, 'Pozitif sayının mutlak değeri kendisidir.'],
    ['|0| kaçtır?', ['-1','0','1','Tanımsız'], 1, '0’ın 0’a uzaklığı 0’dır.'],
    ['|-3| + |2| kaçtır?', ['1','3','5','6'], 2, '3+2=5.'],
    ['|x| = 4 denkleminin çözüm kümesi nedir?', ['{4}','{-4}','{-4,4}','Çözüm yok'], 2, 'x=4 veya x=-4.'],
    ['|x| = -2 denklemi için hangisi doğrudur?', ['x=-2','x=2','Çözüm yok','Her x'], 2, 'Mutlak değer negatif olamaz.'],
    ['|x - 3| = 5 çözüm kümesi nedir?', ['{-2,8}','{2,8}','{-8,2}','{3,5}'], 0, 'x-3=5 veya x-3=-5.'],
    ['|x + 1| = 6 çözüm kümesi nedir?', ['{-7,5}','{-5,7}','{5,7}','{-7,-5}'], 0, 'x+1=6 veya x+1=-6.'],
    ['|2x| = 10 ise x kaç olabilir?', ['Sadece 5','Sadece -5','-5 veya 5','0'], 2, '2x=10 veya 2x=-10.'],
    ['|x| < 3 çözümü nedir?', ['-3<x<3','x<-3 veya x>3','x≤3','x≥3'], 0, 'Küçük eşitsizlik iki taraflı aralık verir.'],
    ['|x| ≤ 2 çözümü nedir?', ['[-2,2]','(-2,2)','(-∞,-2]∪[2,∞)','Çözüm yok'], 0, 'Uçlar dahildir.'],
    ['|x| > 5 çözümü nedir?', ['(-5,5)','[-5,5]','x<-5 veya x>5','x=5'], 2, 'Büyük eşitsizlik dış bölgeleri verir.'],
    ['|x - 1| < 4 çözümü nedir?', ['-3<x<5','-4<x<4','x<-3 veya x>5','[ -3,5]'], 0, '-4<x-1<4.'],
    ['|x + 2| ≤ 3 çözümü nedir?', ['[-5,1]','(-5,1)','[-1,5]','x≤-5'], 0, '-3≤x+2≤3.'],
    ['|x - 2| ≥ 6 çözümü nedir?', ['x≤-4 veya x≥8','-4≤x≤8','x≤4 veya x≥6','Çözüm yok'], 0, 'x-2≤-6 veya x-2≥6.'],
    ['|ab| için doğru eşitlik hangisidir?', ['|a|+|b|','|a|-|b|','|a|·|b|','a+b'], 2, 'Çarpımın mutlak değeri mutlak değerlerin çarpımıdır.'],
    ['$\\left|\\frac{a}{b}\\right|$ için doğru ifade hangisidir?', ['$\\frac{|a|}{|b|}$','$|a|+|b|$','$|a|-|b|$','$ab$'], 0, 'Bölümde mutlak değer pay ve paydaya dağılır.'],
    ['|x - 7| ifadesi neyi gösterir?', ['x’in 7’ye uzaklığı','x’in 0’a uzaklığı','7’nin karesi','x+7'], 0, 'Mutlak değer sayı doğrusunda uzaklıktır.'],
    ['|x| mutlak değeri her zaman nasıldır?', ['Negatif','Pozitif veya 0','Daima pozitif','Tanımsız'], 1, 'Mutlak değer negatif olamaz; 0 olabilir.'],
    ['|x| = 0 ise x kaçtır?', ['-1','0','1','Her x'], 1, 'Yalnız 0’ın mutlak değeri 0’dır.'],
    ['|x-2|+|x-5| en küçük kaç olabilir?', ['1','2','3','7'], 2, '2 ile 5 arası toplam uzaklık 3’tür.'],
    ['|x-4| = |x+2| denklemi neyi anlatır?', ['x, 4 ve -2’ye eşit uzaklıkta','x=4','x=-2','Çözüm yok'], 0, 'İki noktaya uzaklık eşittir.'],
    ['|x-4| = |x+2| çözümü kaçtır?', ['-1','0','1','3'], 2, '4 ve -2’nin orta noktası 1’dir.'],
    ['|3 - x| ifadesi hangisine eşittir?', ['|x-3|','x-3','3+x','-|x|'], 0, 'Uzaklık simetriktir.'],
    ['|x| < -1 için hangisi doğrudur?', ['Her x','x=0','Çözüm yok','x<1'], 2, 'Mutlak değer negatif sayıdan küçük olamaz.']
  ])
});

extendTopicPractice(24, {
  summary: 'Mutlak değerli denklemlerde sonuçların denklemi sağlayıp sağlamadığı kontrol edilir; eşitsizliklerde küçük/büyük durumuna göre aralık veya birleşim yazılır.',
  theory: {
    rules: [
      { title: 'Mutlak Değerli Denklemlerin Çözümü',
        formulaLines: [
          'a\\ge0,\\;|x|=a\\Rightarrow x=a\\;\\text{ veya }\\;x=-a',
          'a<0,\\;|x|=a\\Rightarrow ÇK=\\varnothing',
          '|ax+b|=c,\\;c<0\\Rightarrow ÇK=\\varnothing'
        ],
        tipLines: [
          'x ve a gerçek sayılar olmak üzere a ≥ 0 için |x| = a ise x = a veya x = -a olur.',
          'a < 0 için |x| = a ise denklemin çözüm kümesi boş kümedir ve ÇK = ∅ olarak yazılır.',
          '|ax + b| = c denkleminde c < 0 ise denklemin çözüm kümesi boş kümedir.'
        ] },
      { title: 'Uzaklık ve Sıfır Toplam',
        formulaLines: [
          '|a-b|=k',
          '|a|+|b|=0\\Rightarrow a=0\\;\\text{ ve }\\;b=0'
        ],
        tipLines: [
          'a ve b gerçek sayıları arasındaki uzaklık k birim ise bu durum |a - b| = k ile gösterilir.',
          'a ve b gerçek sayılar olmak üzere |a| + |b| = 0 ise a = 0 ve b = 0 olur.'
        ] },
      { title: 'Kontrol Gerektiren Durum',
        formulaLines: [
          '|f(x)|=g(x)'
        ],
        tipLines: [
          'Bir değişken hem mutlak değerin içinde hem de dışında kullanılmışsa bulunan değerler, ilk denklemde yerine yazılarak değerlerin denklemi sağlayıp sağlamadığı kontrol edilir.'
        ] },
      { title: 'Mutlak Değerli Eşitsizlikler: Küçüktür',
        formulaLines: [
          'x\\in\\mathbb{R},\\;a\\in\\mathbb{R}^{+}',
          '|x|\\le a\\Rightarrow -a\\le x\\le a',
          '|x|<0\\Rightarrow ÇK=\\varnothing',
          '|x|\\le0\\Rightarrow ÇK=\\{0\\}'
        ],
        tipLines: [
          '|x| ≤ a türü eşitsizliklerde çözüm, -a ile a arasındaki kapalı aralıktır.',
          '|x| < 0 eşitsizliğinin çözüm kümesi boş kümedir.',
          '|x| ≤ 0 eşitsizliğinin çözüm kümesi yalnızca {0} olur.'
        ] },
      { title: 'Mutlak Değerli Eşitsizlikler: Büyüktür',
        formulaLines: [
          'x\\in\\mathbb{R},\\;a\\in\\mathbb{R}^{+}',
          '|x|\\ge a\\Rightarrow x\\le-a\\;\\text{ veya }\\;x\\ge a',
          '|x|\\ge0\\Rightarrow ÇK=\\mathbb{R}',
          '|x|>0\\Rightarrow ÇK=\\mathbb{R}-\\{0\\}'
        ],
        tipLines: [
          '|x| ≥ a türü eşitsizliklerde çözüm dış bölgelerdir.',
          '|x| ≥ 0 eşitsizliği bütün gerçek sayılar için doğrudur.',
          '|x| > 0 eşitsizliğinde 0 hariç bütün gerçek sayılar çözümdür.'
        ] },
      { title: 'İki Taraflı Mutlak Değer Aralığı',
        formulaLines: [
          'x\\in\\mathbb{R},\\;a,b\\in\\mathbb{R}^{+}',
          'a\\le |x|\\le b',
          'a\\le x\\le b\\;\\text{ veya }\\;-b\\le x\\le-a'
        ],
        tipLines: [
          'a ≤ |x| ≤ b biçimindeki eşitsizliklerde çözüm, sayı doğrusunda iki simetrik aralık olarak yazılır.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { questionBlocks: [
        'Örnek: x gerçek sayı olmak üzere |2x − 9| = −4x + 3 denkleminin çözüm kümesini bulunuz.',
        { tex: '|2x-9|=-4x+3' }
      ],
      steps: [
        '2x-9=-4x+3\\Rightarrow6x=12\\Rightarrow x=2',
        '2x-9=4x-3\\Rightarrow-2x=6\\Rightarrow x=-3',
        { text: 'Değişken hem mutlak değerin içinde hem dışında olduğundan bulunan değerler ilk denklemde kontrol edilir.' },
        'x=2\\Rightarrow |2\\cdot2-9|=-4\\cdot2+3',
        '|-5|=-5\\Rightarrow5=-5',
        { text: 'x = 2 yanlış eşitlik verdiği için çözüm kümesine alınmaz.' },
        'x=-3\\Rightarrow |2\\cdot(-3)-9|=-4\\cdot(-3)+3',
        '|-15|=15\\Rightarrow15=15'
      ],
      answer: 'ÇK=\\{-3\\}' },
    { question: '|x - 1| + |x - 5| = 4 denklemini çözünüz.', steps: [{ text: '1 ile 5 arasındaki her noktanın bu iki noktaya uzaklıkları toplamı 4’tür.' }], answer: '[1,5]' },
    { question: '|x - 2| + |x - 6| = 10 denklemini çözünüz.', steps: [{ text: '2 ile 6 arası toplam uzaklık 4’tür; 10 için dış bölgeler gerekir.' }, { text: 'x≤2 için 2-x+6-x=10, x=-1.' }, { text: 'x≥6 için x-2+x-6=10, x=9.' }], answer: '\\{-1,9\\}' },
    { question: '|x - 3| < |x + 1| eşitsizliğini çözünüz.', steps: [{ text: 'x’in 3’e uzaklığı, -1’e uzaklığından küçük olmalıdır.' }, { text: '3 ile -1’in orta noktası 1’dir; 3’e daha yakın olan taraf x>1’dir.' }], answer: 'x>1' },
    { question: '|2x - 4| = |x + 1| denklemini çözünüz.', steps: ['2x-4=x+1\\Rightarrow x=5', '2x-4=-(x+1)\\Rightarrow3x=3\\Rightarrow x=1'], answer: '\\{1,5\\}' }
  ],
  quiz: quizRows([
    ['|x-2| + |x-5| = 3 çözümü nedir?', ['[2,5]','{2,5}','(2,5)','Çözüm yok'], 0, '2 ile 5 arası toplam uzaklık 3’tür.'],
    ['|x-2| + |x-5| = 1 için hangisi doğrudur?', ['[2,5]','Çözüm yok','x=3','x=4'], 1, 'En küçük toplam uzaklık 3’tür.'],
    ['|x-1| = |x-7| çözümü kaçtır?', ['3','4','5','6'], 1, '1 ve 7’nin orta noktası 4’tür.'],
    ['|x+2| = |x-6| çözümü kaçtır?', ['1','2','3','4'], 1, '-2 ve 6’nın orta noktası 2’dir.'],
    ['|x-3| < |x-9| çözümü nedir?', ['x<6','x>6','x≤6','x≥6'], 0, '3’e daha yakın olan taraf x<6’dır.'],
    ['|x-3| > |x-9| çözümü nedir?', ['x<6','x>6','x≤6','x≥6'], 1, '9’a daha yakın olan taraf x>6’dır.'],
    ['|2x-6| kritik noktası kaçtır?', ['2','3','4','6'], 1, '2x-6=0, x=3.'],
    ['|x+4| kritik noktası kaçtır?', ['-4','4','0','1'], 0, 'x+4=0.'],
    ['|x-1|+|x-4| ifadesinin en küçük değeri kaçtır?', ['1','2','3','4'], 2, 'İki nokta arası uzaklık 3’tür.'],
    ['|x+3|+|x-5| en küçük kaçtır?', ['5','6','7','8'], 3, '-3 ile 5 arası uzaklık 8’dir.'],
    ['|x-2|+|x-6|=8 çözüm kümesi nedir?', ['{-1,9}','{0,8}','[2,6]','Çözüm yok'], 1, 'Dış bölgelerde x=0 ve x=8 bulunur.'],
    ['|x|+|x-4|=4 çözümü nedir?', ['[0,4]','{0,4}','(0,4)','Çözüm yok'], 0, '0 ile 4 arası toplam uzaklık 4’tür.'],
    ['|x|+|x-4|=2 için hangisi doğrudur?', ['[0,4]','Çözüm yok','x=2','x=0'], 1, 'En küçük toplam uzaklık 4’tür.'],
    ['|x-1|=3 denkleminden hangi değerler gelir?', ['-2 ve 4','2 ve 4','-4 ve 2','1 ve 3'], 0, 'x-1=±3.'],
    ['|2x+1|=7 çözüm kümesi nedir?', ['{-4,3}','{-3,4}','{3,4}','{-4,-3}'], 0, '2x+1=7 veya -7.'],
    ['|x-2|≤|x+4| çözümü nedir?', ['x≥-1','x≤-1','x>2','x<-4'], 0, '2’ye en az -4 kadar yakın olan taraf orta noktanın sağındadır.'],
    ['|x-2|≥|x+4| çözümü nedir?', ['x≥-1','x≤-1','x>2','x<-4'], 1, '-4’e yakın veya eşit uzaklıkta olan taraf.'],
    ['Mutlak değer içini sıfır yapan değerlere ne denir?', ['Kritik nokta','Payda','Üs','Taban'], 0, 'Durum analizi bu noktalara göre yapılır.'],
    ['Durum analizinde her çözüm için ne kontrol edilir?', ['Aralığa uygunluk','Basamak sayısı','Renk','Sıralama'], 0, 'Çözüm bulunduğu aralıkta olmalıdır.'],
    ['|x-a| neyi gösterir?', ['x ile a arası uzaklık','x+a','x-a','a’nın karesi'], 0, 'Mutlak değer uzaklık verir.'],
    ['|x-5|<2 çözümü nedir?', ['3<x<7','x<3 veya x>7','[3,7]','x=5'], 0, '-2<x-5<2.'],
    ['|x-5|>2 çözümü nedir?', ['3<x<7','x<3 veya x>7','[3,7]','x=5'], 1, 'Dış bölgeler alınır.'],
    ['|x+1|≤4 çözümü nedir?', ['[-5,3]','(-5,3)','x≤-5 veya x≥3','[ -3,5]'], 0, '-4≤x+1≤4.'],
    ['|x+1|≥4 çözümü nedir?', ['[-5,3]','x≤-5 veya x≥3','(-5,3)','Çözüm yok'], 1, 'Dış bölgeler alınır.'],
    ['|x-2|+|x-6| ifadesi 2 ile 6 arasında kaçtır?', ['2','4','6','8'], 1, 'İki nokta arasındaki uzaklık 4’tür.']
  ])
});

extendTopicPractice(25, {
  examples: [
    { questionBlocks: [
        'Örnek: a = 27⁵, b = 81⁴ ve c = 243² sayılarını sıralayınız.',
        { tex: 'a=27^5,\\quad b=81^4,\\quad c=243^2' }
      ],
      steps: [
        'a=(3^3)^5=3^{15}',
        'b=(3^4)^4=3^{16}',
        'c=(3^5)^2=3^{10}',
        '10<15<16\\;\\text{olduğundan}\\;c<a<b'
      ],
      answer: 'c<a<b' },
    { questionBlocks: [
        'Örnek: 2ˣ = 17, 3ʸ = 29 ve 5ᶻ = 55 sayıları veriliyor. Buna göre x, y, z sayılarını sıralayınız.',
        { tex: '2^x=17,\\quad 3^y=29,\\quad 5^z=55' }
      ],
      steps: [
        '16<17<32\\Rightarrow2^4<2^x<2^5\\Rightarrow4<x<5',
        '27<29<81\\Rightarrow3^3<3^y<3^4\\Rightarrow3<y<4',
        '25<55<125\\Rightarrow5^2<5^z<5^3\\Rightarrow2<z<3',
        'z<y<x'
      ],
      answer: 'z<y<x' },
    { questionBlocks: [
        'Aşağıdaki ifadenin değeri kaçtır?',
        { tex: '\\dfrac{2^5\\cdot2^3}{2^4}' }
      ],
      steps: [
        '2^5 \\cdot 2^3 = 2^{5+3} = 2^8',
        '\\dfrac{2^8}{2^4} = 2^{8-4} = 2^4',
        '2^4 = 16'
      ],
      answer: '16' },
    { questionBlocks: [
        'Aşağıdaki değerleri karşılaştırınız.',
        { tex: '(-2)^4\\;\\text{ ve }\\;-2^4' }
      ],
      steps: ['(-2)^4=16', '-2^4=-(2^4)=-16', { text: 'Parantez sonucu değiştirir.' }],
      answer: '16\\;\\text{ve}\\;-16' },
    { questionBlocks: [
        'Aşağıdaki ifadeyi sadeleştiriniz.',
        { tex: '\\dfrac{3^5\\cdot3^{-2}}{3}' }
      ],
      steps: ['\\dfrac{3^5\\cdot3^{-2}}{3^1}=3^{5-2-1}', '3^2=9'],
      answer: '9' },
    { questionBlocks: [
        'Aşağıdaki ifadeyi 2 tabanında hesaplayınız.',
        { tex: '8^2\\cdot4^{-1}' }
      ],
      steps: ['8^2=(2^3)^2=2^6', '4^{-1}=(2^2)^{-1}=2^{-2}', '2^6\\cdot2^{-2}=2^4=16'],
      answer: '16' }
  ],
  quiz: quizRows([
    ['2³ kaçtır?', ['6','8','9','12'], 1, '2·2·2=8.'],
    ['5⁰ kaçtır?', ['0','1','5','Tanımsız'], 1, 'Sıfırdan farklı her sayının 0. kuvveti 1’dir.'],
    ['2⁴ · 2³ nedir?', ['2⁷','2¹²','4⁷','2'], 0, 'Aynı tabanda üsler toplanır.'],
    ['3⁶ / 3² nedir?', ['3³','3⁴','3⁸','1'], 1, 'Aynı tabanda üsler çıkarılır.'],
    ['(2³)⁴ nedir?', ['2⁷','2¹²','2¹','8⁴'], 1, 'Üssün üssünde üsler çarpılır.'],
    ['(ab)³ nedir?', ['a³b³','ab³','a³b','3ab'], 0, 'Çarpımın kuvveti çarpanlara dağılır.'],
    ['(a/b)² nedir?', ['a²/b²','a/b²','a²/b','2a/b'], 0, 'Bölümün kuvveti pay ve paydaya dağılır.'],
    ['2⁻³ nedir?', ['8','-8','1/8','-1/8'], 2, 'Negatif üs ters çevirir.'],
    ['(1/3)⁻² nedir?', ['1/9','9','-9','3'], 1, 'Ters çevrilir: 3²=9.'],
    ['(-2)⁴ kaçtır?', ['-16','16','8','-8'], 1, 'Negatif sayının çift kuvveti pozitiftir.'],
    ['(-2)³ kaçtır?', ['-8','8','-6','6'], 0, 'Negatif sayının tek kuvveti negatiftir.'],
    ['-2⁴ kaçtır?', ['16','-16','8','-8'], 1, 'Parantez olmadığı için üs sadece 2’ye aittir.'],
    ['(-1)²⁰²⁴ kaçtır?', ['-1','0','1','2024'], 2, 'Çift kuvvet 1 verir.'],
    ['(-1)²⁰²⁵ kaçtır?', ['-1','0','1','2025'], 0, 'Tek kuvvet -1 verir.'],
    ['4³ sayısı 2 tabanında nedir?', ['2⁶','2⁷','2⁸','2¹²'], 0, '(2²)³=2⁶.'],
    ['8² sayısı 2 tabanında nedir?', ['2⁴','2⁵','2⁶','2⁸'], 2, '(2³)²=2⁶.'],
    ['2ˣ = 32 ise x kaçtır?', ['3','4','5','6'], 2, '32=2⁵.'],
    ['3ˣ⁺¹ = 81 ise x kaçtır?', ['2','3','4','5'], 1, '81=3⁴, x+1=4.'],
    ['10³ kaçtır?', ['100','1000','10000','30'], 1, '10·10·10=1000.'],
    ['aᵐ · aⁿ kuralı nedir?', ['aᵐ⁺ⁿ','aᵐ⁻ⁿ','aᵐⁿ','aᵐ/ⁿ'], 0, 'Aynı tabanda çarpmada üsler toplanır.'],
    ['aᵐ / aⁿ kuralı nedir?', ['aᵐ⁺ⁿ','aᵐ⁻ⁿ','aᵐⁿ','aⁿ⁻ᵐ'], 1, 'Aynı tabanda bölmede üsler çıkarılır.'],
    ['a⁻ⁿ neye eşittir?', ['1/aⁿ','aⁿ','-aⁿ','0'], 0, 'Negatif üs tersini aldırır.'],
    ['0⁰ için hangisi doğrudur?', ['1','0','Tanımsız','Her zaman 0'], 2, '0’ın 0. kuvveti tanımsız kabul edilir.'],
    ['(2·3)² kaçtır?', ['12','24','36','72'], 2, '6²=36 veya 2²·3²=36.'],
    ['2⁵·4 işlemi 2 tabanında nedir?', ['2⁶','2⁷','2⁸','2⁹'], 1, '4=2², toplam üs 7.']
  ])
});

extendTopicPractice(26, {
  summary: 'Üslü denklemlerde ifadeler ortak tabana getirilir; üslü eşitsizliklerde tabanın 1’den büyük veya 0 ile 1 arasında oluşuna göre yön yorumlanır.',
  theory: {
    rules: [
      { title: 'Üslü İfade İçeren Denklemler',
        numberedItems: [
          { text: 'x gerçek sayı; x, -1, 0 ve 1’den farklı; m ve n gerçek sayılar olmak üzere xᵐ = xⁿ ise m = n olur.', mathLines: ['x\\in\\mathbb{R}-\\{-1,0,1\\},\\quad x^m=x^n\\Rightarrow m=n'] },
          { text: 'x ve y gerçek sayı; -1, 0 ve 1’den farklı; n sıfırdan farklı tam sayı olmak üzere xⁿ = yⁿ denkleminde n tek ise x = y olur.', mathLines: ['n\\text{ tek}\\Rightarrow x=y'] },
          { text: 'xⁿ = yⁿ denkleminde n çift ise |x| = |y| olur.', mathLines: ['n\\text{ çift}\\Rightarrow |x|=|y|'] }
        ] },
      { title: 'aᵇ = 1 Denklemi',
        numberedItems: [
          { text: 'b = 0 iken taban sıfırdan farklı olmalıdır.', mathLines: ['a^0=1,\\quad a\\ne0'] },
          { text: 'a = 1 iken b gerçek sayı olabilir.', mathLines: ['1^b=1'] },
          { text: 'a = -1 iken b’nin bir çift sayı olması gerekir.', mathLines: ['(-1)^b=1\\Rightarrow b\\text{ çift sayı}'] }
        ] },
      { title: 'Üslü İfade İçeren Eşitsizlikler',
        formulaLines: [
          'a\\in\\mathbb{R},\\;m,n\\in\\mathbb{R}-\\{0\\}',
          '0<a<1\\;\\text{ ve }\\;a^n<a^m\\Rightarrow n>m',
          'a>1\\;\\text{ ve }\\;a^n<a^m\\Rightarrow n<m'
        ],
        tipLines: [
          'Taban 0 ile 1 arasında ise üs büyüdükçe değer küçülür; bu yüzden karşılaştırma yönü ters yorumlanır.',
          'Taban 1’den büyükse üs büyüdükçe değer büyür; karşılaştırma yönü korunur.'
        ] }
    ],
    facts: [
      { text: 'Tabandaki sayının -1, 0 ya da 1 olmadığı üslü denklemlerde eşitliğin her iki tarafındaki tabanlar eşit ise üsler de eşittir.' },
      { text: 'Eşitsizliklerde tabanın 0 ile 1 arasında mı, yoksa 1’den büyük mü olduğu mutlaka kontrol edilir.' }
    ],
    warning: '0 < a < 1 durumunda üs karşılaştırması yapılırken yön tersine döner.'
  },
  examples: [
    { questionBlocks: [
        'Örnek: Aşağıdaki eşitsizliğin çözüm kümesini bulunuz.',
        { tex: '\\left(\\dfrac{1}{5}\\right)^{x-1}<\\left(\\dfrac{1}{5}\\right)^{-2x+8}' }
      ],
      steps: [
        { text: 'Taban 0 ile 1 arasında olduğundan üsler karşılaştırılırken yön ters döner.' },
        'x-1>-2x+8',
        '3x>9',
        'x>3'
      ],
      answer: 'ÇK=(3,\\infty)' },
    { questionBlocks: [
        'Aşağıdaki denklemi çözünüz.',
        { tex: '2^{x+1}=16' }
      ],
      steps: ['16=2^4', 'x+1=4', 'x=3'],
      answer: '3' },
    { questionBlocks: [
        'Aşağıdaki denklemi çözünüz.',
        { tex: '3^{2x-1}=27' }
      ],
      steps: ['27=3^3', '2x-1=3', 'x=2'],
      answer: '2' },
    { questionBlocks: [
        'Aşağıdaki denklemi çözünüz.',
        { tex: '4^x=32' }
      ],
      steps: ['4^x=(2^2)^x=2^{2x}', '32=2^5', '2x=5', 'x=\\frac{5}{2}'],
      answer: '\\frac{5}{2}' },
    { questionBlocks: [
        'Aşağıdaki eşitsizliği çözünüz.',
        { tex: '\\left(\\dfrac{1}{2}\\right)^x<\\left(\\dfrac{1}{2}\\right)^3' }
      ],
      steps: [{ text: 'Taban 0 ile 1 arasında olduğu için yön ters yorumlanır.' }, 'x>3'],
      answer: 'x>3' }
  ],
  quiz: quizRows([
    ['2ˣ = 16 ise x kaçtır?', ['2','3','4','5'], 2, '16=2⁴.'],
    ['3ˣ = 81 ise x kaçtır?', ['2','3','4','5'], 2, '81=3⁴.'],
    ['5ˣ⁻¹ = 25 ise x kaçtır?', ['1','2','3','4'], 2, '25=5², x-1=2.'],
    ['2ˣ⁺² = 32 ise x kaçtır?', ['2','3','4','5'], 1, '32=2⁵, x+2=5.'],
    ['4ˣ = 64 ise x kaçtır?', ['2','3','4','6'], 1, '4ˣ=2²ˣ, 64=2⁶.'],
    ['9ˣ = 27 ise x kaçtır?', ['1/2','3/2','2','3'], 1, '3²ˣ=3³, x=3/2.'],
    ['8ˣ = 16 ise x kaçtır?', ['2/3','3/2','4/3','1/2'], 2, '2³ˣ=2⁴.'],
    ['2ˣ < 2⁵ çözümü nedir?', ['x<5','x>5','x≤5','x≥5'], 0, 'Taban 1’den büyük, yön korunur.'],
    ['3ˣ⁺¹ ≥ 3⁴ çözümü nedir?', ['x≥3','x≤3','x>3','x<3'], 0, 'x+1≥4.'],
    ['(1/2)ˣ < (1/2)⁴ çözümü nedir?', ['x<4','x>4','x≤4','x≥4'], 1, 'Taban 0 ile 1 arasında, yön ters döner.'],
    ['(1/3)ˣ ≥ (1/3)² çözümü nedir?', ['x≤2','x≥2','x<2','x>2'], 0, 'Kesirli tabanda yön ters yorumlanır.'],
    ['2²ˣ = 64 ise x kaçtır?', ['2','3','4','6'], 1, '64=2⁶, 2x=6.'],
    ['5²ˣ⁻¹ = 125 ise x kaçtır?', ['1','2','3','4'], 1, '125=5³, 2x-1=3 ve x=2 olur.'], 
    ['2ˣ + 2ˣ = 16 ise 2ˣ kaçtır?', ['4','8','16','32'], 1, '2·2ˣ=16, 2ˣ=8.'],
    ['2ˣ + 2ˣ = 16 ise x kaçtır?', ['2','3','4','5'], 1, '2ˣ=8, x=3.'],
    ['3ˣ · 3² = 3⁷ ise x kaçtır?', ['3','4','5','6'], 2, 'x+2=7.'],
    ['2ˣ / 2³ = 2⁴ ise x kaçtır?', ['5','6','7','8'], 2, 'x-3=4.'],
    ['(2ˣ)³ = 2¹² ise x kaçtır?', ['3','4','5','6'], 1, '3x=12.'],
    ['4ˣ⁻¹ = 2⁶ ise x kaçtır?', ['3','4','5','6'], 1, '2²ˣ⁻²=2⁶, x=4.'],
    ['Taban 1’den büyükse üs artınca değer nasıl değişir?', ['Artar','Azalır','Değişmez','Tanımsız'], 0, 'a>1 için artan fonksiyondur.'],
    ['Taban 0 ile 1 arasındaysa üs artınca değer nasıl değişir?', ['Artar','Azalır','Değişmez','Sıfır olur'], 1, 'Kesirli tabanda değer azalır.'],
    ['aᵐ = aⁿ için üsleri eşitlemek için a hakkında hangisi gerekir?', ['a>0 ve a≠1','a=1','a=0','a<0 her zaman'], 0, 'Pozitif ve 1’den farklı tabanda üsler eşitlenir.'],
    ['27ˣ = 9 denklemi için ortak taban hangisidir?', ['2','3','5','9'], 1, '27=3³ ve 9=3².'],
    ['16ˣ = 8 denklemi için x kaçtır?', ['1/4','3/4','4/3','2'], 1, '2⁴ˣ=2³, x=3/4.'],
    ['2ˣ⁺¹ = 2³ˣ⁻⁵ ise x kaçtır?', ['2','3','4','5'], 1, 'x+1=3x-5, x=3.']
  ])
});

extendTopicPractice(27, {
  summary: 'Köklü ifadelerde n. dereceden kök, tanımlılık, kök dışına çıkarma, dört işlem, eşlenik ve özel köklü ifadeler.',
  theory: {
    rules: [
      { title: 'Köklü İfadeler',
        formulaLines: [
          'n\\in\\mathbb{Z}^{+},\\;n\\ge2,\\;a,x\\in\\mathbb{R}',
          'x^n=a\\Rightarrow x=\\sqrt[n]{a}'
        ],
        tipLines: [
          'xⁿ = a eşitliğini sağlayan x değerlerine a’nın n. kuvvetten kökü denir ve x = ⁿ√a ile gösterilir.',
          'xⁿ = a denkleminin çözümü üç farklı durumda incelenir.'
        ] },
      { title: 'xⁿ = a Denkleminin Durumları',
        statementBlocks: [
          { text: 'a > 0 için n tek ise bir gerçek kök vardır; n çift ise iki gerçek kök vardır.',
            mathLines: ['n\\text{ tek}\\Rightarrow x=\\sqrt[n]{a}', 'n\\text{ çift}\\Rightarrow x=\\sqrt[n]{a}\\;\\text{ veya }\\;x=-\\sqrt[n]{a}'] },
          { text: 'a < 0 için n tek ise bir gerçek kök vardır; n çift ise denklemin gerçek kökü yoktur.',
            mathLines: ['n\\text{ tek}\\Rightarrow x=\\sqrt[n]{a}', 'n\\text{ çift}\\Rightarrow ÇK=\\varnothing'] },
          { text: 'a = 0 ise kök değeri 0 olur.',
            mathLines: ['\\sqrt[n]{0}=0'] }
        ] },
      { title: 'Tanımlılık',
        formulaLines: [
          '\\sqrt[2n+1]{a}\\;\\text{ ifadesinin tanımlı olması için }\\;a\\in\\mathbb{R}\\;\\text{ olmalıdır}',
          '\\sqrt[2n]{a}\\;\\text{ ifadesinin tanımlı olması için }\\;a\\ge0\\;\\text{ olmalıdır}'
        ],
        tipLines: [
          'Tek dereceli kökte kök içi her gerçek sayı olabilir.',
          'Çift dereceli kökte kök içi negatif olamaz.'
        ] },
      { title: 'Kök Dışına Çıkarma',
        formulaLines: [
          'n\\in\\mathbb{Z}^{+},\\;n\\ge2,\\;x\\in\\mathbb{R}',
          'n\\text{ tek ise }\\sqrt[n]{x^n}=x',
          'n\\text{ çift ise }\\sqrt[n]{x^n}=|x|'
        ],
        tipLines: [
          'Kök derecesi çift olduğunda kök dışına çıkan ifade negatif olamayacağı için mutlak değerle çıkar.'
        ] },
      { title: 'Köklü Sayılarda Toplama ve Çıkarma',
        formulaLines: [
          'n\\in\\mathbb{Z}^{+},\\;n\\ge2,\\;x\\in\\mathbb{R}^{+},\\;a,b\\in\\mathbb{R}',
          'a\\sqrt[n]{x}+b\\sqrt[n]{x}=(a+b)\\sqrt[n]{x}'
        ],
        tipLines: [
          'Toplama ve çıkarma işlemi yalnızca kök derecesi ve kök içi aynı olan benzer köklü ifadeler arasında yapılır.'
        ] },
      { title: 'Köklü Sayılarda Çarpma ve Bölme',
        formulaLines: [
          '\\sqrt[n]{a}\\cdot\\sqrt[n]{b}=\\sqrt[n]{a\\cdot b}',
          '\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}=\\sqrt[n]{\\dfrac{a}{b}}\\quad(b\\ne0)'
        ],
        tipLines: [
          'Köklü sayılar arasında dört işlem yapabilmek için önce kök derecelerinin eşit olup olmadığına bakılır.',
          'Dereceler farklıysa eşit hâle getirildikten sonra işleme başlanır.'
        ] },
      { title: 'Kök Derecesini Eşitleme',
        formulaLines: [
          'x\\in\\mathbb{R}^{+},\\;m\\in\\mathbb{R},\\;n,k\\in\\mathbb{Z}^{+},\\;n\\ge2',
          '\\sqrt[n]{x^m}=\\sqrt[n\\cdot k]{x^{m\\cdot k}}'
        ],
        tipLines: [
          'Farklı dereceli köklerde ortak kök derecesine geçmek için kök derecesi ve kök içindeki üs aynı sayı ile çarpılır.'
        ] },
      { title: 'Köklü İfadeler ile İlgili Özellikler',
        numberedItems: [
          { text: 'x pozitif tam sayı, n gerçek sayı ve n ≥ 2 olmak üzere köklü ifadenin kuvveti kök içine alınabilir.', mathLines: ['\\left(\\sqrt[n]{x}\\right)^m=\\sqrt[n]{x^m}'] },
          { text: 'Çarpım, aynı dereceli köklerde tek kök altında yazılabilir.', mathLines: ['\\sqrt[n]{x}\\cdot\\sqrt[n]{y}=\\sqrt[n]{x\\cdot y}'] },
          { text: 'Bir katsayı kök içine uygun kuvvetle alınabilir.', mathLines: ['x\\sqrt[n]{y}=\\sqrt[n]{x^n\\cdot y}'] },
          { text: 'Kökün kökü alınırken dereceler çarpılır.', mathLines: ['\\sqrt[m]{\\sqrt[n]{x}}=\\sqrt[m\\cdot n]{x}'] }
        ] },
      { title: 'Köklü İfadelerin Eşleniği',
        statementBlocks: [
          { text: 'Çarpımları rasyonel olan iki irrasyonel sayıdan her biri diğerinin eşleniği olarak tanımlanır.',
            mathLines: ['\\sqrt{a}\\;\\text{ eşleniği }\\;\\sqrt{a}'] },
          { text: 'Paydada iki terimli köklü ifade varsa eşlenik ile genişletilir.',
            mathLines: ['\\sqrt{a}+\\sqrt{b}\\;\\text{ eşleniği }\\;\\sqrt{a}-\\sqrt{b}', '\\sqrt{a}-\\sqrt{b}\\;\\text{ eşleniği }\\;\\sqrt{a}+\\sqrt{b}'] },
          { text: 'Sayı ile eşleniğinin çarpımı rasyonel sonuç verir.',
            mathLines: ['(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})=a-b'] }
        ],
        tipLines: [
          'Köklü rasyonel ifadelerde paydayı kökten kurtarmak için paydadaki sayının eşleniği ile pay ve payda çarpılır.'
        ] },
      { title: 'Özel Köklü İfadeler',
        formulaLines: [
          'a=m+n,\\quad b=m\\cdot n',
          '\\sqrt{a+2\\sqrt{b}}=\\sqrt{m}+\\sqrt{n}',
          '\\sqrt{a-2\\sqrt{b}}=\\sqrt{m}-\\sqrt{n}\\quad(m>n)'
        ],
        tipLines: [
          '√(a ± 2√b) biçimindeki ifadelerde a toplam, b çarpım olacak şekilde m ve n sayıları aranır.'
        ] }
    ],
    facts: [],
    warning: 'Bir köklü ifadede kökün derecesi çift ve kök içindeki sayı sıfırdan küçükse bu köklü ifade gerçek sayı belirtmez. Kök dereceleri çift olan köklü ifadelerin içleri negatif olamayacağından, içindeki sayılar kök dışına 0 ya da 0’dan büyük çıkarılır. Köklü ifadelerde elde edilen her özellik üslü ifadeler yardımıyla ispatlanabilir.'
  },
  examples: [
    { questionBlocks: ['Aşağıdaki ifadeyi sadeleştiriniz.', { tex: '\\sqrt{72}' }],
      steps: ['\\sqrt{72}=\\sqrt{36\\cdot2}', '\\sqrt{36\\cdot2}=6\\sqrt2'],
      answer: '6\\sqrt2' },
    { questionBlocks: ['Aşağıdaki işlemi yapınız.', { tex: '3\\sqrt5+2\\sqrt5-\\sqrt5' }],
      steps: [{ text: 'Benzer köklü ifadelerin katsayıları toplanır.' }, '(3+2-1)\\sqrt5=4\\sqrt5'],
      answer: '4\\sqrt5' },
    { questionBlocks: ['Aşağıdaki işlemi yapınız.', { tex: '\\sqrt{12}\\cdot\\sqrt3' }],
      steps: ['\\sqrt{12}\\cdot\\sqrt3=\\sqrt{36}', '\\sqrt{36}=6'],
      answer: '6' },
    { questionBlocks: ['Aşağıdaki ifadenin paydasını rasyonel yapınız.', { tex: '\\dfrac{5}{\\sqrt5}' }],
      steps: ['\\dfrac{5}{\\sqrt5}\\cdot\\dfrac{\\sqrt5}{\\sqrt5}=\\dfrac{5\\sqrt5}{5}', '\\sqrt5'],
      answer: '\\sqrt5' },
    { questionBlocks: ['Aşağıdaki ifadenin eşleniğini kullanarak çarpımı bulunuz.', { tex: '(\\sqrt7+\\sqrt2)(\\sqrt7-\\sqrt2)' }],
      steps: ['(\\sqrt7)^2-(\\sqrt2)^2=7-2', '7-2=5'],
      answer: '5' },
    { questionBlocks: ['Aşağıdaki özel köklü ifadeyi sadeleştiriniz.', { tex: '\\sqrt{11+2\\sqrt{30}}' }],
      steps: [{ text: 'm + n = 11 ve m · n = 30 olacak sayılar 5 ve 6’dır.' }, '\\sqrt{11+2\\sqrt{30}}=\\sqrt6+\\sqrt5'],
      answer: '\\sqrt6+\\sqrt5' }
  ],
  quiz: quizRows([
    ['√25 kaçtır?', ['-5','5','±5','0'], 1, 'Karekökün esas değeri pozitiftir.'],
    ['³√-8 kaçtır?', ['-2','2','Tanımsız','±2'], 0, 'Tek dereceli kökte negatif sayı olabilir.'],
    ['√-4 gerçek sayılarda tanımlı mıdır?', ['Evet','Hayır','Sadece -2','Sadece 2'], 1, 'Çift dereceli kökte negatif kök içi gerçek değildir.'],
    ['√72 sade hali nedir?', ['6√2','3√8','2√18','12√2'], 0, '72=36·2.'],
    ['√a · √b neye eşittir?', ['√(ab)','√a+√b','a√b','ab'], 0, 'Aynı dereceli köklerde çarpma kök içinde yapılır.'],
    ['3√2 + 5√2 kaçtır?', ['8√2','15√2','√10','8√4'], 0, 'Benzer köklerde katsayılar toplanır.'],
    ['√(x²) neye eşittir?', ['x','|x|','-x','x²'], 1, 'Çift dereceli kökten çıkan ifade mutlak değerli olur.'],
    ['√a + √b genel olarak neye eşittir?', ['√(a+b)','√a+√b','a+b','√ab'], 1, 'Kök toplama üzerine dağılmaz.'],
    ['√a ifadesinin eşleniği nedir?', ['√a','-√a','a','1/√a'], 0, 'Tek terimli köklü ifadenin eşleniği kendisidir.'],
    ['√a + √b ifadesinin eşleniği nedir?', ['√a + √b','√a - √b','a-b','√ab'], 1, 'İki terimde işaret değiştirilir.'],
    ['√a - √b ifadesinin eşleniği nedir?', ['√a - √b','√a + √b','a+b','√(a-b)'], 1, 'İki terimli köklü ifadede işaret değiştirilir.'],
    ['(√5 + √2)(√5 - √2) kaçtır?', ['3','7','√10','5+2'], 0, 'Eşlenik çarpımı 5-2=3 olur.'],
    ['√50 sade hali nedir?', ['5√2','2√5','10√5','25√2'], 0, '50=25·2.'],
    ['√12 sade hali nedir?', ['2√3','3√2','4√3','6√2'], 0, '12=4·3.'],
    ['√8 sade hali nedir?', ['2√2','4√2','√4','8√2'], 0, '8=4·2.'],
    ['√18 · √2 kaçtır?', ['6','12','√20','4'], 0, '√18·√2=√36=6.'],
    ['√75 / √3 kaçtır?', ['5','25','√25','15'], 0, '√(75/3)=√25=5.'],
    ['4√3 - √3 kaçtır?', ['3√3','4','√3','3'], 0, '4√3-1√3=3√3.'],
    ['√9 + √16 kaçtır?', ['5','7','25','√25'], 1, '√9=3 ve √16=4, toplam 7.'],
    ['√((-3)²) kaçtır?', ['-3','3','9','±3'], 1, '√9=3 olur.'],
    ['⁴√16 kaçtır?', ['2','4','8','±2'], 0, '2⁴=16.'],
    ['√(11 + 2√30) ifadesi hangi biçimde yazılır?', ['√6 + √5','√6 - √5','√30 + 1','11√30'], 0, '6+5=11 ve 6·5=30.'],
    ['√(9 - 2√20) ifadesi hangi biçimde yazılır?', ['√5 - 2','√5 + 2','5 - √2','√20 - 9'], 0, '5+4=9 ve 5·4=20 olduğundan √5-2.'],
    ['Kök derecesi çift olan ifadede kök içi nasıl olmalıdır?', ['Negatif','Sıfır veya pozitif','Daima tek','Daima asal'], 1, 'Çift dereceli kökte kök içi negatif olamaz.'],
    ['Kök derecesi tek olan ifadede kök içi için hangisi doğrudur?', ['Her gerçek sayı olabilir','Sadece pozitif olabilir','Sadece tam kare olabilir','Daima sıfır olur'], 0, 'Tek dereceli kökte negatif değerler de gerçek sayı verir.']
  ])
});

extendTopicPractice(28, {
  summary: 'Köklü denklemlerde kök içindeki bilinmeyen çözülür ve bulunan değer mutlaka başlangıç denklemini sağlamalıdır; köklü ifadeler sıralamada derece, kök içi ve yaklaşık değerle karşılaştırılır.',
  theory: {
    rules: [
      { title: 'Köklü İfadeleri İçeren Denklemler',
        tipLines: [
          'Bilinmeyenin kök içinde olduğu denklemlere köklü denklemler denir.',
          'Köklü ifade içeren denklemlerin çözümünden elde edilen sonucun başlangıçtaki denklemi sağlayıp sağlamadığı kontrol edilmelidir.'
        ] },
      { title: 'Köklü Denklemlerde Sağlama',
        statementBlocks: [
          { text: 'Kök yalnız bırakılır.',
            mathLines: ['\\sqrt{x}+4=11\\Rightarrow\\sqrt{x}=7'] },
          { text: 'Her iki taraf uygun kuvvete yükseltilir.',
            mathLines: ['(\\sqrt{x})^2=7^2\\Rightarrow x=49'] },
          { text: 'Bulunan değer ilk denklemde kontrol edilir.',
            mathLines: ['\\sqrt{49}+4=11\\Rightarrow7+4=11'] }
        ] },
      { title: 'Köklü İfadeleri İçeren Eşitsizlikler: Sıralama',
        statementBlocks: [
          { text: 'Kök dereceleri eşit olan köklü ifadelerden kökün içindeki sayısı büyük olan daha büyüktür.',
            mathLines: ['a=5\\sqrt3=\\sqrt{75}', 'b=2\\sqrt{20}=\\sqrt{80}', 'c=7\\sqrt2=\\sqrt{98}', 'a<b<c'] },
          { text: 'Kök içindeki sayıları eşit olan köklü ifadelerden derecesi küçük olan daha büyüktür.',
            mathLines: ['\\sqrt[3]{64}=4', '\\sqrt[2]{64}=8', '\\sqrt[6]{64}=2'] },
          { text: 'Köklü ifadenin hangi iki tam sayı arasında olduğu bulunarak sıralama yapılabilir.',
            mathLines: ['4<\\sqrt[3]{123}<5', '8<\\sqrt{79}<9', '3<\\sqrt[4]{234}<4'] }
        ] },
      { title: 'Karekökün Yaklaşık Değeri',
        formulaLines: [
          '\\sqrt{a}\\approx\\sqrt{x}+\\dfrac{a-x}{\\sqrt{y}+\\sqrt{x}}',
          'x\\le a\\le y'
        ],
        tipLines: [
          '√a sayısının yaklaşık değeri bulunurken a sayısından küçük en büyük tam kare sayı x, a sayısından büyük en küçük tam kare sayı y alınır.'
        ] }
    ],
    facts: [],
    warning: 'Köklü denklemlerde kare alma işlemi yabancı kök üretebilir. Bu yüzden bulunan her değer ilk denklemde yerine yazılarak kontrol edilir.'
  },
  examples: [
    { questionBlocks: ['Örnek: Aşağıdaki denkleme göre x kaçtır?', { tex: '\\sqrt{x}+4=11' }],
      steps: ['\\sqrt{x}=11-4', '\\sqrt{x}=7', '(\\sqrt{x})^2=7^2', 'x=49', { text: 'Sağlama yapılır.' }, '\\sqrt{49}+4=11', '7+4=11'],
      answer: '49' },
    { questionBlocks: ['Örnek: Aşağıdaki denklem için x değerini inceleyiniz.', { tex: '\\sqrt{x}+13=8' }],
      steps: ['\\sqrt{x}=8-13', '\\sqrt{x}=-5', 'x=25', { text: 'Sağlama yapılır.' }, '\\sqrt{25}+13=8', '5+13=8', '18\\ne8', { text: 'Eşitliği sağlayan x değeri yoktur.' }],
      answer: 'ÇK=\\varnothing' },
    { questionBlocks: ['Örnek: a = 5√3, b = 2√20, c = 7√2 sayılarını sıralayınız.', { tex: 'a=5\\sqrt3,\\quad b=2\\sqrt{20},\\quad c=7\\sqrt2' }],
      steps: ['a=\\sqrt{25\\cdot3}=\\sqrt{75}', 'b=\\sqrt{4\\cdot20}=\\sqrt{80}', 'c=\\sqrt{49\\cdot2}=\\sqrt{98}', '75<80<98\\Rightarrow a<b<c'],
      answer: 'a<b<c' },
    { questionBlocks: ['Örnek: Aşağıdaki köklü ifadeleri sıralayınız.', { tex: 'a=\\sqrt[3]{123},\\quad b=\\sqrt{79},\\quad c=\\sqrt[4]{234}' }],
      steps: ['\\sqrt[3]{64}<a<\\sqrt[3]{125}\\Rightarrow4<a<5', '\\sqrt{64}<b<\\sqrt{81}\\Rightarrow8<b<9', '\\sqrt[4]{81}<c<\\sqrt[4]{256}\\Rightarrow3<c<4', 'c<a<b'],
      answer: 'c<a<b' }
  ],
  quiz: quizRows([
    ['√x + 4 = 11 denkleminin çözümü kaçtır?', ['7','49','121','Çözüm yok'], 1, '√x=7, x=49.'],
    ['√x + 13 = 8 denklemi için hangisi doğrudur?', ['x=25','x=5','Çözüm yok','x=-5'], 2, '√x negatif olamaz; sağlama 18≠8 verir.'],
    ['Köklü denklemlerde bulunan değer neden kontrol edilir?', ['Yabancı kök olabilir','Üs küçük olabilir','Payda sıfırdır','Her zaman gerekmez'], 0, 'Kare alma yabancı kök üretebilir.'],
    ['5√3 hangi tek kök altında yazılır?', ['√15','√75','√45','√8'], 1, '5√3 = √25·√3 = √75.'],
    ['2√20 hangi tek kök altında yazılır?', ['√40','√80','√22','√400'], 1, '2√20 = √4·√20 = √80.'],
    ['7√2 hangi tek kök altında yazılır?', ['√14','√49','√98','√72'], 2, '7√2 = √49·√2 = √98.'],
    ['Kök dereceleri eşitse hangi köklü ifade daha büyüktür?', ['Kök içi büyük olan','Kök içi küçük olan','Katsayısı olmayan','Daima ilki'], 0, 'Aynı derecede kök içi büyüdükçe ifade büyür.'],
    ['Kök içleri eşitse derece küçüldükçe değer nasıl değişir?', ['Büyür','Küçülür','Değişmez','Tanımsız olur'], 0, 'Pozitif kök içinde derece küçük olan daha büyüktür.'],
    ['√79 hangi iki tam sayı arasındadır?', ['7 ile 8','8 ile 9','9 ile 10','3 ile 4'], 1, '64<79<81 olduğundan 8<√79<9.'],
    ['³√123 hangi iki tam sayı arasındadır?', ['3 ile 4','4 ile 5','5 ile 6','8 ile 9'], 1, '64<123<125 olduğundan 4<³√123<5.'],
    ['√x = 6 denkleminin çözümü kaçtır?', ['3','6','12','36'], 3, 'Her iki tarafın karesi alınır: x=36.'],
    ['√x = -4 denklemi için hangisi doğrudur?', ['x=16','x=-16','Çözüm yok','x=4'], 2, 'Karekök sonucu negatif olamaz.'],
    ['√(x+1)=5 ise x kaçtır?', ['4','24','25','26'], 1, 'x+1=25, x=24.'],
    ['√(2x-1)=3 ise x kaçtır?', ['3','4','5','6'], 2, '2x-1=9, x=5.'],
    ['√(x-2)+1=6 ise x kaçtır?', ['23','25','27','35'], 2, '√(x-2)=5, x-2=25, x=27.'],
    ['√(x+4)=2 denkleminde x kaçtır?', ['0','2','4','8'], 0, 'x+4=4, x=0.'],
    ['√(x+9)=0 ise x kaçtır?', ['-9','0','9','Çözüm yok'], 0, 'Karekök 0 ise içi 0’dır.'],
    ['√(x-5)=√4 ise x kaçtır?', ['7','8','9','10'], 2, '√4=2, x-5=4, x=9.'],
    ['√81, ³√64, ⁶√64 sıralaması nasıldır?', ['⁶√64 < ³√64 < √81','√81 < ³√64 < ⁶√64','³√64 < √81 < ⁶√64','Hepsi eşit'], 0, 'Değerler 2, 4 ve 9’dur.'],
    ['5√3, 2√20, 7√2 sıralamasında en büyük hangisidir?', ['5√3','2√20','7√2','Hepsi eşit'], 2, 'Kök içine alınır: √75, √80, √98.'],
    ['√50 hangi iki tam sayı arasındadır?', ['5 ile 6','6 ile 7','7 ile 8','8 ile 9'], 2, '49<50<64 olduğundan 7<√50<8.'],
    ['√20 yaklaşık olarak hangi iki tam sayı arasındadır?', ['3 ile 4','4 ile 5','5 ile 6','6 ile 7'], 1, '16<20<25.'],
    ['Köklü denklemlerde kare alma sonrası ne yapılmalıdır?', ['Sağlama','Payda eşitleme','Oran kurma','Sıralama'], 0, 'Bulunan kök başlangıç denkleminde kontrol edilir.'],
    ['√(x+5)=x-1 denkleminde çözüm adayları için neden kontrol gerekir?', ['Sağ taraf negatif olabilir','Kök içi her zaman negatiftir','Denklem lineerdir','Kontrol gerekmez'], 0, 'Karekök tarafı negatif olamayacağı için adaylar kontrol edilir.'],
    ['Karekök yaklaşık değerinde a’dan küçük en büyük tam kare ve büyük en küçük tam kare neden alınır?', ['Aralığı belirlemek için','Kökü yok etmek için','İşareti değiştirmek için','Paydayı sıfırlamak için'], 0, '√a’nın hangi iki tam sayı arasında olduğu bu karelerle bulunur.']
  ])
});

extendTopicPractice(29, {
  summary: 'Aynı türden çoklukların oranla karşılaştırılması, oranların eşitliği olan orantı ve orantının temel özellikleri.',
  theory: {
    rules: [
      { title: 'Oran',
        formulaLines: [
          '\\dfrac{a}{b}\\;\\text{ veya }\\;a:b'
        ],
        tipLines: [
          'Aynı türden iki çokluğun bölme yoluyla karşılaştırılmasına oran denir.',
          'Oran a/b veya a : b şeklinde gösterilir.'
        ] },
      { title: 'Orantı',
        formulaLines: [
          '\\dfrac{a}{b}=\\dfrac{c}{d}'
        ],
        tipLines: [
          'İki ya da daha fazla oranın birbirine eşitlenmesine orantı denir.',
          'a/b = c/d eşitliği bir orantı belirtir.'
        ] },
      { title: 'Orantı Sabiti ve İçler-Dışlar',
        formulaLines: [
          '\\dfrac{a}{b}=\\dfrac{c}{d}=k',
          '\\dfrac{a}{b}=\\dfrac{c}{d}\\Rightarrow a:b=c:d'
        ],
        tipLines: [
          'Sabit bir k değeri için a/b = c/d = k eşitliğindeki k değerine orantı sabiti denir.',
          'a/b = c/d eşitliği a : b = c : d şeklinde de yazılabilir.',
          'Bu eşitlikte b ve c değerleri içler, a ve d değerleri dışlar olarak adlandırılır.'
        ] },
      { title: 'Orantının Özellikleri',
        formulaLines: [
          '\\dfrac{a}{b}=\\dfrac{c}{d}=k'
        ],
        numberedItems: [
          { text: 'İçler çarpımı ile dışlar çarpımı birbirine eşittir.', mathLines: ['a\\cdot d=b\\cdot c'] },
          { text: 'İçteki veya dıştaki terimler yer değiştirebilir.', mathLines: ['\\dfrac{a}{b}=\\dfrac{c}{d}\\Rightarrow\\dfrac{d}{b}=\\dfrac{c}{a}', '\\dfrac{a}{b}=\\dfrac{c}{d}\\Rightarrow\\dfrac{a}{c}=\\dfrac{b}{d}'] },
          { text: 'Oranların paylarının toplamı, paydalarının toplamına bölünürse orantı sabiti değişmez.', mathLines: ['\\dfrac{a}{b}=\\dfrac{c}{d}=k\\Rightarrow\\dfrac{a+c}{b+d}=k'] },
          { text: 'm ≠ 0 ve n ≠ 0 olmak üzere oranlar m ve n sabit sayılarıyla genişletilip pay ve paydalar kendi aralarında toplanırsa orantı sabiti değişmez.', mathLines: ['\\dfrac{a}{b}=\\dfrac{c}{d}=k\\Rightarrow\\dfrac{m\\cdot a+n\\cdot c}{m\\cdot b+n\\cdot d}=k'] },
          { text: 'Oranlar çarpılırsa orantı sabitinin karesi elde edilir.', mathLines: ['\\dfrac{a}{b}=\\dfrac{c}{d}=k\\Rightarrow\\dfrac{a\\cdot c}{b\\cdot d}=k^2'] }
        ] },
      { title: 'Doğru Orantı',
        formulaLines: [
          '\\dfrac{a}{b}=k'
        ],
        tipLines: [
          'İki çokluktan biri artarken diğeri de aynı oranda artıyorsa ya da biri azalırken diğeri de aynı oranda azalıyorsa bu çokluklara doğru orantılıdır denir.',
          'a ve b doğru orantılı ise a/b = k şeklinde gösterilir.'
        ] },
      { title: 'Ters Orantı',
        formulaLines: [
          'a\\cdot b=k'
        ],
        tipLines: [
          'İki çokluktan biri artarken diğeri aynı oranda azalıyor ya da biri azalırken diğeri aynı oranda artıyor ise bu çokluklara ters orantılıdır denir.',
          'a ve b ters orantılı ise a · b = k şeklinde gösterilir.'
        ] }
    ],
    facts: [],
    warning: ''
  },
  examples: [
    { questionBlocks: ['Aşağıdaki oranın değerini bulunuz.', { tex: '18:24' }],
      steps: ['18:24=\\dfrac{18}{24}', '\\dfrac{18}{24}=\\dfrac{3}{4}'],
      answer: '\\dfrac{3}{4}' },
    { questionBlocks: ['Aşağıdaki orantıda x değerini bulunuz.', { tex: '\\dfrac{3}{5}=\\dfrac{x}{20}' }],
      steps: ['3\\cdot20=5\\cdot x', '60=5x', 'x=12'],
      answer: '12' },
    { questionBlocks: ['Aşağıdaki orantıda orantı sabitini bulunuz.', { tex: '\\dfrac{6}{9}=\\dfrac{10}{15}=k' }],
      steps: ['\\dfrac{6}{9}=\\dfrac{2}{3}', '\\dfrac{10}{15}=\\dfrac{2}{3}', 'k=\\dfrac{2}{3}'],
      answer: '\\dfrac{2}{3}' },
    { questionBlocks: ['a ve b doğru orantılıdır. a = 12 iken b = 4 ise a = 21 iken b kaçtır?', { tex: '\\dfrac{a}{b}=k' }],
      steps: ['\\dfrac{12}{4}=3', '\\dfrac{21}{b}=3', '21=3b', 'b=7'],
      answer: '7' },
    { questionBlocks: ['a ve b ters orantılıdır. a = 6 iken b = 10 ise a = 15 iken b kaçtır?', { tex: 'a\\cdot b=k' }],
      steps: ['6\\cdot10=60', '15\\cdot b=60', 'b=4'],
      answer: '4' }
  ],
  quiz: quizRows([
    ['Aynı türden iki çokluğun bölme yoluyla karşılaştırılmasına ne denir?', ['Oran','Orantı','Eşlenik','Denklem'], 0, 'Bu karşılaştırmaya oran denir.'],
    ['İki ya da daha fazla oranın birbirine eşitlenmesine ne denir?', ['Oran','Orantı','Kök','Kuvvet'], 1, 'Oranların eşitliği orantıdır.'],
    ['a/b = c/d orantısında içler hangileridir?', ['a ve d','b ve c','a ve b','c ve d'], 1, 'b ve c içlerdir.'],
    ['a/b = c/d orantısında dışlar hangileridir?', ['a ve d','b ve c','a ve b','c ve d'], 0, 'a ve d dışlardır.'],
    ['a/b = c/d ise içler-dışlar çarpımı hangisidir?', ['a·b=c·d','a·d=b·c','a·c=b·d','a+c=b+d'], 1, 'Dışlar çarpımı içler çarpımına eşittir.'],
    ['a/b = c/d = k ise (a+c)/(b+d) neye eşittir?', ['k','2k','k²','1/k'], 0, 'Paylar ve paydalar toplanınca orantı sabiti değişmez.'],
    ['Oranlar çarpılırsa ne elde edilir?', ['k','2k','k²','1'], 2, 'Oranların çarpımı orantı sabitinin karesidir.'],
    ['Doğru orantıda iki çokluktan biri artarken diğeri nasıl değişir?', ['Aynı oranda artar','Azalır','Sabit kalır','Tanımsız olur'], 0, 'Doğru orantıda değişim aynı yöndedir.'],
    ['Ters orantıda iki çokluktan biri artarken diğeri nasıl değişir?', ['Aynı oranda artar','Aynı oranda azalır','Sabit kalır','Daima artar'], 1, 'Ters orantıda değişim zıt yöndedir.'],
    ['a ve b ters orantılı ise hangi ifade sabittir?', ['a/b','a+b','a·b','a-b'], 2, 'Ters orantıda çarpım sabittir.'],
    ['a ve b doğru orantılı ise hangi ifade sabittir?', ['a/b','a·b','a+b','a-b'], 0, 'Doğru orantıda oran sabittir.'],
    ['12 ile 18 sayılarının oranı sadeleşirse hangisi olur?', ['2/3','3/2','6/9','12/18'], 0, '12/18 = 2/3 olur.'],
    ['4 : 7 oranı kesir biçiminde nasıl yazılır?', ['7/4','4/7','4+7','4·7'], 1, 'a : b oranı a/b olarak yazılır.'],
    ['3/5 = x/20 orantısında x kaçtır?', ['8','10','12','15'], 2, '3·20 = 5x, x = 12.'],
    ['x/6 = 10/15 orantısında x kaçtır?', ['2','3','4','5'], 2, '10/15 = 2/3 olduğundan x/6 = 2/3 ve x = 4.'],
    ['2/7 = 6/x orantısında x kaçtır?', ['14','18','21','24'], 2, '2x = 42, x = 21.'],
    ['a/b = c/d orantısında içteki terimler yer değiştirirse hangisi elde edilir?', ['a/c = b/d','a/d = b/c','a/b = d/c','d/b = c/a'], 3, 'İçler b ve c yer değiştirirse d/b = c/a biçimi kullanılabilir.'],
    ['a/b = c/d orantısında dıştaki terimler yer değiştirirse hangisi elde edilir?', ['d/b = c/a','a/c = b/d','b/a = c/d','a/d = c/b'], 1, 'Dışlar a ve d yer değiştirirse a/c = b/d biçimi elde edilir.'],
    ['a/b = c/d = 3 ise (a+c)/(b+d) kaçtır?', ['1','2','3','6'], 2, 'Paylar ve paydalar toplanınca oran sabiti yine 3 olur.'],
    ['a/b = c/d = 2 ise (a·c)/(b·d) kaçtır?', ['2','3','4','8'], 2, 'Oranlar çarpılırsa k² elde edilir; 2² = 4.'],
    ['6/9 = 10/15 oranlarının ortak oran sabiti kaçtır?', ['1/2','2/3','3/2','5/3'], 1, 'İki oran da 2/3’e sadeleşir.'],
    ['Bir orantıda a ve d terimleri nasıl adlandırılır?', ['İçler','Dışlar','Paydalar','Sabitler'], 1, 'a/b = c/d orantısında a ve d dışlardır.'],
    ['Bir orantıda b ve c terimleri nasıl adlandırılır?', ['Dışlar','Katsayılar','İçler','Üsler'], 2, 'a/b = c/d orantısında b ve c içlerdir.'],
    ['Doğru orantılı iki çokluk için biri yarıya inerse diğeri ne olur?', ['İkiye katlanır','Yarıya iner','Sabit kalır','Sıfır olur'], 1, 'Doğru orantıda değişim aynı yöndedir.'],
    ['Ters orantılı iki çokluk için biri iki katına çıkarsa diğeri ne olur?', ['İki katına çıkar','Yarıya iner','Sabit kalır','Dört katına çıkar'], 1, 'Ters orantıda çarpım sabit kalır; biri iki katına çıkarsa diğeri yarıya iner.']
  ])
});

extendTopicPractice(30, {
  summary: 'Oran-orantı problemlerinde verilen çoklukların doğru mu ters mi orantılı olduğu belirlenir ve buna göre denklem kurulur.',
  theory: {
    rules: [
      { title: 'Doğru Orantı Problemi Kurma',
        formulaLines: [
          'a,b,c,x\\in\\mathbb{R}',
          'a\\;\\text{ ile }\\;b\\;\\text{ ve }\\;c\\;\\text{ ile }\\;x\\;\\text{ arasında doğru orantı varsa}',
          'a\\cdot x=b\\cdot c'
        ],
        tipLines: [
          'Doğru orantıda iki çokluk aynı yönde değişir.',
          'Satın alınan ürün ile ödenmesi gereken para, işçi sayısı ile yapılan iş miktarı, hız ile alınan yol, yapılan iş miktarı ile harcanan süre doğru orantı örnekleridir.'
        ] },
      { title: 'Ters Orantı Problemi Kurma',
        formulaLines: [
          'a,b,c,x\\in\\mathbb{R}',
          'a\\;\\text{ ile }\\;b\\;\\text{ ve }\\;c\\;\\text{ ile }\\;x\\;\\text{ arasında ters orantı varsa}',
          'a\\cdot b=c\\cdot x'
        ],
        tipLines: [
          'Ters orantıda iki çokluk zıt yönde değişir.',
          'Hız ile zaman, işçi sayısı ile işin bitirilme süresi, kişi sayısı ile yiyeceğin yetme süresi ters orantı örnekleridir.'
        ] },
      { title: 'Oran-Orantı Problem Türleri',
        statementBlocks: [
          { text: 'Doğru orantı örnekleri',
            mathLines: [
              '\\text{Ürün miktarı}\\uparrow\\Rightarrow\\text{ödenecek para}\\uparrow',
              '\\text{Hız}\\uparrow\\Rightarrow\\text{alınan yol}\\uparrow',
              '\\text{İş miktarı}\\uparrow\\Rightarrow\\text{süre}\\uparrow'
            ] },
          { text: 'Ters orantı örnekleri',
            mathLines: [
              '\\text{Hız}\\uparrow\\Rightarrow\\text{zaman}\\downarrow',
              '\\text{İşçi sayısı}\\uparrow\\Rightarrow\\text{işin bitirilme süresi}\\downarrow',
              '\\text{Kişi sayısı}\\uparrow\\Rightarrow\\text{yiyeceğin yetme süresi}\\downarrow'
            ] }
        ] },
      { title: 'Ters Orantılı Paylaştırma',
        formulaLines: [
          'x\\cdot3=k\\Rightarrow x=\\dfrac{k}{3}',
          'y\\cdot4=k\\Rightarrow y=\\dfrac{k}{4}',
          'z\\cdot6=k\\Rightarrow z=\\dfrac{k}{6}'
        ],
        tipLines: [
          'Bir miktar 3, 4 ve 6 sayıları ile ters orantılı paylaştırılıyorsa paylar k/3, k/4 ve k/6 biçiminde yazılır.'
        ] }
    ],
    facts: [],
    warning: 'Problemde çoklukların aynı yönde mi zıt yönde mi değiştiğini belirlemek denklemi doğru kurmanın ana adımıdır.'
  },
  examples: [
    { questionBlocks: [
        'Örnek: Furkan, Fatih ve Feyza isimli üç arkadaş 144 adet cevizi sırasıyla 3, 4 ve 6 sayıları ile ters orantılı olarak paylaşacaklardır. En az ceviz alan kişiyi ve bu kişinin kaç ceviz alacağını bulunuz.',
        { tex: 'x\\cdot3=y\\cdot4=z\\cdot6=k' }
      ],
      steps: [
        { text: 'Furkan x, Fatih y ve Feyza z tane ceviz alsın.' },
        'x\\cdot3=k\\Rightarrow x=\\dfrac{k}{3}',
        'y\\cdot4=k\\Rightarrow y=\\dfrac{k}{4}',
        'z\\cdot6=k\\Rightarrow z=\\dfrac{k}{6}',
        'x+y+z=144\\Rightarrow\\dfrac{k}{3}+\\dfrac{k}{4}+\\dfrac{k}{6}=144',
        '\\dfrac{9k}{12}=144',
        'k=192',
        { text: 'k/3, k/4 ve k/6 ifadelerinden en küçük olan k/6’dır. Bu yüzden en az ceviz alan kişi Feyza’dır.' },
        'z=\\dfrac{k}{6}=\\dfrac{192}{6}=32'
      ],
      answer: 'Feyza, 32 ceviz' },
    { questionBlocks: ['6 kg elma 90 TL ise 10 kg elma kaç TL olur?', { tex: '6\\cdot x=10\\cdot90' }],
      steps: [{ text: 'Ürün miktarı ve fiyat doğru orantılıdır.' }, '6x=900', 'x=150'],
      answer: '150\\text{ TL}' },
    { questionBlocks: ['Saatte 60 km hızla 4 saatte gidilen yol, saatte 80 km hızla kaç saatte gidilir?', { tex: '60\\cdot4=80\\cdot x' }],
      steps: [{ text: 'Aynı yol için hız ve zaman ters orantılıdır.' }, '240=80x', 'x=3'],
      answer: '3\\text{ saat}' },
    { questionBlocks: ['8 işçi bir işi 15 günde bitirirse 12 işçi aynı işi kaç günde bitirir?', { tex: '8\\cdot15=12\\cdot x' }],
      steps: [{ text: 'İşçi sayısı artarsa işin bitme süresi azalır; ters orantı kurulur.' }, '120=12x', 'x=10'],
      answer: '10\\text{ gün}' },
    { questionBlocks: ['3 usta 5 günde 60 m² duvar örerse aynı hızla 4 usta 5 günde kaç m² duvar örer?', { tex: '3\\cdot x=4\\cdot60' }],
      steps: [{ text: 'Süre aynı olduğundan işçi sayısı ile yapılan iş miktarı doğru orantılıdır.' }, '3x=240', 'x=80'],
      answer: '80\\text{ m}^2' }
  ],
  quiz: quizRows([
    ['Satın alınan ürün ile ödenmesi gereken para nasıl orantılıdır?', ['Doğru','Ters','Orantısız','Eşlenik'], 0, 'Ürün artarsa ödenecek para da artar.'],
    ['Hız ve zaman aynı yol için nasıl orantılıdır?', ['Doğru','Ters','Aynı','Yok'], 1, 'Hız artarsa süre azalır.'],
    ['İşçi sayısı ve işin bitirilme süresi nasıl orantılıdır?', ['Doğru','Ters','Eşit','Karesel'], 1, 'İşçi artarsa süre azalır.'],
    ['Kişi sayısı ve yiyeceğin yetme süresi nasıl orantılıdır?', ['Doğru','Ters','Eşit','Oransız'], 1, 'Kişi artarsa yiyeceğin yetme süresi azalır.'],
    ['6 kg ürün 90 TL ise 2 kg ürün kaç TL olur?', ['15','30','45','60'], 1, 'Doğru orantı: 90/3=30.'],
    ['4 işçi bir işi 12 günde bitirirse 8 işçi kaç günde bitirir?', ['3','6','12','24'], 1, 'Ters orantı: 4·12=8·x, x=6.'],
    ['60 km/s hızla 3 saatte gidilen yol 90 km/s hızla kaç saatte gidilir?', ['1','2','3','4'], 1, '60·3=90·x, x=2.'],
    ['x, 5 ile ters orantılı ise x nasıl yazılır?', ['5k','k/5','x/5','5/x'], 1, 'Ters orantıda x·5=k, x=k/5.'],
    ['x, 5 ile doğru orantılı ise x nasıl yazılabilir?', ['5k','k/5','5/x','x+5'], 0, 'Doğru orantıda x/5=k, x=5k.'],
    ['144 sayısı 3, 4, 6 ile ters orantılı paylaştırıldığında en küçük pay hangi sayıya karşılık gelir?', ['3','4','6','Hepsi'], 2, 'Ters orantıda büyük sayı daha küçük pay alır.'],
    ['5 kg ürün 120 TL ise 8 kg ürün kaç TL olur?', ['160','180','192','200'], 2, 'Doğru orantı: 120/5 = 24, 8·24 = 192.'],
    ['12 defter 300 TL ise 4 defter kaç TL olur?', ['75','90','100','120'], 2, 'Doğru orantı: 300/12 = 25, 4·25 = 100.'],
    ['3 işçi bir işi 20 günde bitirirse 5 işçi kaç günde bitirir?', ['8','10','12','15'], 2, 'Ters orantı: 3·20 = 5·x, x = 12.'],
    ['6 işçi bir işi 18 günde bitirirse 9 işçi kaç günde bitirir?', ['9','10','12','15'], 2, 'Ters orantı: 6·18 = 9·x, x = 12.'],
    ['Saatte 50 km hızla 6 saatte gidilen yol, saatte 75 km hızla kaç saatte gidilir?', ['3','4','5','6'], 1, 'Aynı yol için hız-zaman ters orantılıdır: 50·6 = 75·x, x = 4.'],
    ['Bir araç 80 km/s hızla 5 saatte yol alıyor. Aynı yolu 100 km/s hızla kaç saatte alır?', ['3','4','5','6'], 1, '80·5 = 100·x, x = 4.'],
    ['4 musluk bir havuzu 15 saatte doldurursa 10 musluk kaç saatte doldurur?', ['4','5','6','8'], 2, 'Musluk sayısı ile süre ters orantılıdır: 4·15 = 10·x, x = 6.'],
    ['3 usta 7 günde 84 m² iş yaparsa 5 usta 7 günde kaç m² iş yapar?', ['120','130','140','150'], 2, 'Süre aynıysa usta sayısı ve iş miktarı doğru orantılıdır: 84/3 = 28, 5·28 = 140.'],
    ['Bir yiyecek 6 kişiye 20 gün yetiyorsa 10 kişiye kaç gün yeter?', ['8','10','12','15'], 2, 'Kişi sayısı ve süre ters orantılıdır: 6·20 = 10·x, x = 12.'],
    ['Bir harita ölçeğinde 3 cm gerçek hayatta 18 km ise 7 cm kaç km gösterir?', ['36','40','42','48'], 2, 'Doğru orantı: 18/3 = 6, 7·6 = 42.'],
    ['Bir miktar para 2, 3 ve 5 ile doğru orantılı paylaştırılırsa en büyük pay hangi sayıya karşılık gelir?', ['2','3','5','Hepsi'], 2, 'Doğru orantıda büyük sayı daha büyük pay alır.'],
    ['Bir miktar para 2, 3 ve 5 ile ters orantılı paylaştırılırsa en büyük pay hangi sayıya karşılık gelir?', ['2','3','5','Hepsi'], 0, 'Ters orantıda küçük sayı daha büyük pay alır.'],
    ['120 sayısı 2 ve 3 ile doğru orantılı paylaştırılırsa büyük pay kaçtır?', ['48','60','72','80'], 2, 'Paylar 2k ve 3k olur; 5k=120, k=24, büyük pay 72.'],
    ['120 sayısı 2 ve 3 ile ters orantılı paylaştırılırsa büyük pay kaçtır?', ['48','60','72','80'], 2, 'Paylar k/2 ve k/3 olur; toplam 5k/6=120, k=144, büyük pay 72.'],
    ['Bir problemde ürün miktarı artınca ödenecek para da aynı oranda artıyorsa hangi denklem tipi seçilir?', ['Doğru orantı','Ters orantı','Mutlak değer','Köklü denklem'], 0, 'Aynı yönde değişim doğru orantıdır.']
  ])
});

extendTopicPractice(31, {
  summary: 'Sözel ifadeleri değişkene dönüştürerek denklem veya eşitsizlik kurma; sayı problemlerinde temel modelleme adımları.',
  theory: {
    rules: [
      { title: 'Problem Çözme Adımları',
        tipLines: [
          'Bir problemi çözebilmek için sözel olarak belirtilen ifadeler matematiksel değişkenlere dönüştürülerek bir denklem kurulmalıdır.',
          'Denklemin çözümü, problemin çözümünü verir.',
          'Problemler kendi içinde sayı, kesir, yaş, yüzde, karışım, hareket, işçi ve havuz gibi alt başlıklara ayrılır.'
        ],
        numberedItems: [
          { text: 'Problemde kullanılan veri veya veriler belirlenir.' },
          { text: 'Problemde istenen veri veya veriler belirlenir.' },
          { text: 'İstenen veriye uygun bir değişken atanır.' },
          { text: 'Verilere göre denklem veya eşitsizlik yazılır.' },
          { text: 'Yazılan denklem veya eşitsizlik çözülür.' }
        ] },
      { title: 'Sayı Problemlerinde Cebirsel İfadeler',
        statementBlocks: [
          { text: 'Bir sayının 5 fazlası', mathLines: ['x+5'] },
          { text: 'Bir miktar paranın 5 katının 14 eksiği', mathLines: ['5x-14'] },
          { text: 'Bir sınıftaki öğrencilerin yarısının 7 fazlası', mathLines: ['\\dfrac{x}{2}+7'] },
          { text: 'Karesi ile kendisinin toplamı 30 olan sayılar', mathLines: ['x^2+x=30'] },
          { text: 'İki katı ile yarısının toplamı 15’ten küçük olan sayılar', mathLines: ['2x+\\dfrac{x}{2}<15'] },
          { text: 'Kalemlerinin sayılarının farkı 8 olan iki öğrencinin kalemlerinin toplam sayısı', mathLines: ['x+(x-8)'] }
        ] },
      { title: 'Masa Problemi Modeli',
        formulaLines: [
          'x:\\;\\text{iki kişilik masa sayısı}',
          '46-x:\\;\\text{üç kişilik masa sayısı}',
          '2x+3(46-x)=117'
        ],
        tipLines: [
          'Bir kafedeki 46 masanın bir kısmı üç kişilik, diğerleri iki kişiliktir.',
          'Toplam kişi sayısı verildiğinde masa sayıları değişkenle modellenir.'
        ] }
    ],
    facts: [],
    warning: 'Sayı problemlerinde en kritik adım, bilinmeyeni doğru seçip sözel ifadeyi cebirsel ifadeye çevirmektir.'
  },
  examples: [
    { question: 'Bir sayının 5 fazlası 18 ise sayı kaçtır?', steps: ['x+5=18', 'x=13'], answer: '13' },
    { question: 'Bir sayının 3 katının 4 eksiği 20 ise sayı kaçtır?', steps: ['3x-4=20', '3x=24', 'x=8'], answer: '8' },
    { question: 'Karesi ile kendisinin toplamı 30 olan pozitif sayı kaçtır?', steps: ['x^2+x=30', 'x^2+x-30=0', '(x+6)(x-5)=0', 'x=5'], answer: '5' },
    { question: 'Bir kafedeki 46 masanın bir kısmı üç kişilik, diğerleri iki kişiliktir. Toplam 117 kişi oturabiliyorsa iki kişilik masa sayısı kaçtır?', steps: ['x:\\;\\text{iki kişilik masa}', '46-x:\\;\\text{üç kişilik masa}', '2x+3(46-x)=117', '2x+138-3x=117', 'x=21'], answer: '21' },
    { question: 'Kalem sayıları farkı 8 olan iki öğrencinin toplam 34 kalemi vardır. Az kalemi olan kaç kaleme sahiptir?', steps: ['x+(x+8)=34', '2x=26', 'x=13'], answer: '13' }
  ],
  quiz: quizRows([
    ['Bir sayının 5 fazlası nasıl yazılır?', ['x+5','5x','x-5','x/5'], 0, 'Bir sayı x alınırsa 5 fazlası x+5’tir.'],
    ['Bir sayının 3 katı nasıl yazılır?', ['x+3','3x','x/3','x-3'], 1, 'Kat ifadesi çarpma belirtir.'],
    ['Bir sayının yarısının 7 fazlası hangisidir?', ['x/2+7','2x+7','x+14','7x/2'], 0, 'Yarısı x/2, 7 fazlası x/2+7.'],
    ['Bir sayının karesi ile kendisinin toplamı hangisidir?', ['x²-x','x²+x','2x²','x+2'], 1, 'Karesi x², kendisi x.'],
    ['Bir sayının iki katı ile yarısının toplamı hangisidir?', ['2x+x/2','2x-x/2','x²+x','2+x/2'], 0, 'İki katı 2x, yarısı x/2.'],
    ['x+5=18 denkleminde x kaçtır?', ['11','12','13','14'], 2, 'x=13.'],
    ['3x-4=20 denkleminde x kaçtır?', ['6','7','8','9'], 2, '3x=24, x=8.'],
    ['2x+7=31 denkleminde x kaçtır?', ['10','11','12','13'], 2, '2x=24, x=12.'],
    ['Bir sayının 4 eksiği 15 ise sayı kaçtır?', ['11','15','19','21'], 2, 'x-4=15, x=19.'],
    ['Bir sayının 2 katının 3 fazlası 17 ise sayı kaçtır?', ['5','6','7','8'], 2, '2x+3=17, x=7.'],
    ['Ardışık iki sayının toplamı 41 ise küçük sayı kaçtır?', ['19','20','21','22'], 1, 'x+x+1=41, x=20.'],
    ['Ardışık üç sayının toplamı 60 ise ortanca sayı kaçtır?', ['19','20','21','22'], 1, 'x-1+x+x+1=60, x=20.'],
    ['İki sayının farkı 8, toplamı 34 ise küçük sayı kaçtır?', ['11','12','13','14'], 2, 'x+x+8=34, x=13.'],
    ['Bir sayının 5 katının 14 eksiği nasıl yazılır?', ['5x+14','5x-14','x/5-14','14x-5'], 1, '5 katı 5x, 14 eksiği 5x-14.'],
    ['Problem çözmede ilk adım hangisidir?', ['Verileri belirlemek','Sonucu tahmin etmek','Şıkları silmek','Grafik çizmek'], 0, 'Önce verilen veriler belirlenir.'],
    ['Problemde istenene uygun ne atanır?', ['Değişken','Üs','Kök','Oran sabiti'], 0, 'İstenen veriye değişken atanır.'],
    ['46 masanın x tanesi iki kişilikse üç kişilik masa sayısı nedir?', ['x-46','46-x','46+x','3x'], 1, 'Toplamdan iki kişilikler çıkarılır.'],
    ['2 kişilik x masa ve 3 kişilik 46-x masa için kişi sayısı ifadesi nedir?', ['2x+3(46-x)','3x+2(46-x)','46x','5x'], 0, 'Her masa türü kapasitesiyle çarpılır.'],
    ['2x+3(46-x)=117 denkleminde x kaçtır?', ['19','20','21','22'], 2, '2x+138-3x=117, x=21.'],
    ['Karesi ile kendisinin toplamı 30 olan pozitif sayı kaçtır?', ['4','5','6','7'], 1, '5²+5=30.'],
    ['Bir sayının yarısı 9 ise sayı kaçtır?', ['9','12','18','27'], 2, 'x/2=9, x=18.'],
    ['Bir sayının üçte biri 7 ise sayı kaçtır?', ['14','18','21','24'], 2, 'x/3=7, x=21.'],
    ['Bir sayının 2 katı ile 5 katının toplamı 49 ise sayı kaçtır?', ['5','6','7','8'], 2, '7x=49, x=7.'],
    ['Toplamı 54 olan iki sayıdan biri diğerinin 2 katı ise küçük sayı kaçtır?', ['12','15','18','20'], 2, 'x+2x=54, x=18.'],
    ['Bir sayının 4 fazlasının 3 katı 30 ise sayı kaçtır?', ['4','5','6','7'], 2, '3(x+4)=30, x=6.']
  ])
});

extendTopicPractice(32, {
  summary: 'Kesir problemlerinde sözel ifadeler kesirli cebirsel ifadelere çevrilir; uygun ortak kat seçimi çözümü kolaylaştırır.',
  theory: {
    rules: [
      { title: 'Kesirli İfadeleri Cebire Çevirme',
        statementBlocks: [
          { text: '60 sayısının 2/5’i', mathLines: ['60\\cdot\\dfrac{2}{5}'] },
          { text: '90 sayısının 1/3’ünün 2/5’i', mathLines: ['90\\cdot\\dfrac{1}{3}\\cdot\\dfrac{2}{5}'] },
          { text: 'Bir sayının 1/4’ünün 5/6’sı', mathLines: ['x\\cdot\\dfrac{1}{4}\\cdot\\dfrac{5}{6}'] }
        ] },
      { title: 'Dikkat: Uygun Sayı Seçimi',
        tipLines: [
          '“Bir sayının 1/a’sının 1/b’si kaçtır?” şeklindeki ifadelerde kesirlerin paydalarının en küçük ortak katı alınarak bulunan sayı kadar x yazılır.',
          'Örneğin EKOK(a,b)=k ise bu durumda istenen sayı k·x alınarak işlem daha kolay yapılabilir.'
        ],
        formulaLines: [
          'EKOK(a,b)=k\\Rightarrow\\text{sayı}=k\\cdot x'
        ] },
      { title: 'Soru Çözme Modeli',
        formulaLines: [
          '\\text{Toplam soru}=3x',
          '\\text{İlk kısım}=x',
          '\\text{Kalan}=2x',
          '\\dfrac{x}{25}+\\dfrac{2x}{20}=14'
        ],
        tipLines: [
          'Bir bütünün 1/3’ü alındığında kalan 2/3 olur; toplamı 3x seçmek kesirleri yok eder.'
        ] }
    ],
    facts: [],
    warning: 'Kesir problemlerinde “kalan” ifadesi varsa önce bütün miktarı, sonra kullanılan veya kalan parçayı doğru ayırmak gerekir.'
  },
  examples: [
    { question: '60 sayısının 2/5’i kaçtır?', steps: ['60\\cdot\\dfrac{2}{5}=24'], answer: '24' },
    { question: '90 sayısının 1/3’ünün 2/5’i kaçtır?', steps: ['90\\cdot\\dfrac{1}{3}\\cdot\\dfrac{2}{5}=12'], answer: '12' },
    { question: 'Bir sayının 1/4’ünün 5/6’sı 10 ise sayı kaçtır?', steps: ['x\\cdot\\dfrac{1}{4}\\cdot\\dfrac{5}{6}=10', '\\dfrac{5x}{24}=10', 'x=48'], answer: '48' },
    { question: 'Göktuğ, soruların 1/3’ünü günde 25 soru, kalanını günde 20 soru çözerek toplam 14 günde bitiriyor. Toplam soru sayısı kaçtır?', steps: ['\\text{Toplam}=3x', '\\dfrac{x}{25}+\\dfrac{2x}{20}=14', '\\dfrac{4x+10x}{100}=14', '14x=1400', 'x=100', '3x=300'], answer: '300' },
    { question: 'Bir telin bir ucundan 1/6’sı kesilirse orta noktası 15 cm yer değiştiriyor. Telin boyu kaç cm’dir?', steps: ['\\text{Kesilen miktar}=\\dfrac{x}{6}', '\\text{Orta nokta değişimi}=\\dfrac{x}{12}', '\\dfrac{x}{12}=15', 'x=180'], answer: '180\\text{ cm}' },
    { question: 'Bir paranın 2/5’i harcanınca 90 TL kalıyor. Başlangıçta kaç TL vardır?', steps: ['\\text{Harcanan}=\\dfrac{2x}{5}', '\\text{Kalan}=x-\\dfrac{2x}{5}=\\dfrac{3x}{5}', '\\dfrac{3x}{5}=90', 'x=150'], answer: '150\\text{ TL}' },
    { question: 'Bir kitabın 1/4’ü okununca 60 sayfa kalıyor. Kitap kaç sayfadır?', steps: ['\\text{Okunan}=\\dfrac{x}{4}', '\\text{Kalan}=\\dfrac{3x}{4}', '\\dfrac{3x}{4}=60', 'x=80'], answer: '80' },
    { question: 'Bir sayının 1/2’si ile 1/3’ünün toplamı 25 ise sayı kaçtır?', steps: ['\\dfrac{x}{2}+\\dfrac{x}{3}=25', '\\dfrac{5x}{6}=25', 'x=30'], answer: '30' },
    { question: 'Bir sayının 1/2’si ile 1/4’ünün farkı 8 ise sayı kaçtır?', steps: ['\\dfrac{x}{2}-\\dfrac{x}{4}=8', '\\dfrac{x}{4}=8', 'x=32'], answer: '32' },
    { question: 'Bir sayının 2/3’ünün 3/4’ü 18 ise sayı kaçtır?', steps: ['x\\cdot\\dfrac{2}{3}\\cdot\\dfrac{3}{4}=18', '\\dfrac{x}{2}=18', 'x=36'], answer: '36' }
  ],
  quiz: quizRows([
    ['60 sayısının 2/5’i kaçtır?', ['12','18','24','30'], 2, '60·2/5=24.'],
    ['90 sayısının 1/3’ü kaçtır?', ['20','25','30','35'], 2, '90/3=30.'],
    ['90 sayısının 1/3’ünün 2/5’i kaçtır?', ['10','12','15','18'], 1, '90·1/3·2/5=12.'],
    ['Bir sayının 1/4’ünün 5/6’sı nasıl yazılır?', ['x·1/4·5/6','x+1/4+5/6','x/(4+6)','x·4·6'], 0, 'Kesir ifadeleri çarpılır.'],
    ['x·1/4·5/6 = 10 ise x kaçtır?', ['24','36','48','60'], 2, '5x/24=10, x=48.'],
    ['Bir bütünün 1/3’ü x ise bütün kaç x’tir?', ['x','2x','3x','4x'], 2, '1/3’ü x olan bütün 3x’tir.'],
    ['Bir bütünün 1/3’ü kullanılırsa kalan kaçta kaçtır?', ['1/3','1/2','2/3','3/4'], 2, '1-1/3=2/3.'],
    ['Toplam soru 3x ise 1/3’ü kaçtır?', ['x','2x','3x','x/3'], 0, '3x·1/3=x.'],
    ['Toplam soru 3x ise kalan 2/3’ü kaçtır?', ['x','2x','3x','x/2'], 1, '3x·2/3=2x.'],
    ['x/25 + 2x/20 = 14 denkleminde ortak payda kaç alınabilir?', ['20','25','50','100'], 3, '25 ve 20’nin EKOK’u 100’dür.'],
    ['x/25 + 2x/20 = 14 denkleminde x kaçtır?', ['50','80','100','120'], 2, '4x/100+10x/100=14, x=100.'],
    ['Bu durumda toplam 3x ise toplam soru kaçtır?', ['100','200','300','400'], 2, 'x=100, 3x=300.'],
    ['Bir telin 1/6’sı kesilirse kesilen miktar nedir?', ['x/3','x/6','6x','x-6'], 1, 'Tel boyu x ise 1/6’sı x/6’dır.'],
    ['Bir ucundan kesilen telde orta nokta kesilen miktarın ne kadarı kadar yer değiştirir?', ['Tamamı','Yarısı','İki katı','Üçte biri'], 1, 'Orta nokta kesilen miktarın yarısı kadar kayar.'],
    ['x/12 = 15 ise x kaçtır?', ['120','150','180','210'], 2, 'x=180.'],
    ['Bir sayının 3/4’ü 24 ise sayı kaçtır?', ['18','24','30','32'], 3, '3x/4=24, x=32.'],
    ['Bir sayının 2/7’si 10 ise sayı kaçtır?', ['25','30','35','40'], 2, '2x/7=10, x=35.'],
    ['Bir miktarın 1/5’i 12 ise tamamı kaçtır?', ['48','50','60','72'], 2, 'x/5=12, x=60.'],
    ['Bir sayının 2/3’ünün 3/4’ü 18 ise sayı kaçtır?', ['24','30','36','42'], 2, 'x·2/3·3/4=x/2=18.'],
    ['Bir paranın 1/4’ü harcanırsa kalan kaçta kaçtır?', ['1/4','1/2','3/4','4/5'], 2, '1-1/4=3/4.'],
    ['Bir paranın 2/5’i harcanırsa kalan 90 TL ise para kaç TL’dir?', ['120','135','150','180'], 2, 'Kalan 3/5’tir; 3x/5=90, x=150.'],
    ['Bir kitabın 1/4’ü okunup 60 sayfa kalıyorsa kitap kaç sayfadır?', ['70','75','80','90'], 2, 'Kalan 3/4; 3x/4=60, x=80.'],
    ['Bir sayının 1/2’si ile 1/3’ünün toplamı 25 ise sayı kaçtır?', ['20','25','30','35'], 2, '5x/6=25, x=30.'],
    ['Bir sayının 1/2’si ile 1/4’ünün farkı 8 ise sayı kaçtır?', ['24','28','32','36'], 2, 'x/4=8, x=32.'],
    ['Kesir probleminde paydaları 4 ve 6 ise kolay seçim için EKOK kaçtır?', ['8','10','12','24'], 2, 'EKOK(4,6)=12.']
  ])
});

extendTopicPractice(33, {
  summary: 'Yaş problemlerinde geçmiş, şimdi ve gelecek yaş tabloları kurulur; iki kişi arasındaki yaş farkı daima sabittir.',
  theory: {
    rules: [
      { title: 'Yaş Tablosu',
        statementBlocks: [
          { text: 'a yıl önce', mathLines: ['\\text{Kişi 1}:x-a', '\\text{Kişi 2}:y-a', '\\text{Kişi 3}:z-a', '\\text{Toplam}:x+y+z-3a'] },
          { text: 'Şimdi', mathLines: ['\\text{Kişi 1}:x', '\\text{Kişi 2}:y', '\\text{Kişi 3}:z', '\\text{Toplam}:x+y+z'] },
          { text: 'b yıl sonra', mathLines: ['\\text{Kişi 1}:x+b', '\\text{Kişi 2}:y+b', '\\text{Kişi 3}:z+b', '\\text{Toplam}:x+y+z+3b'] }
        ] },
      { title: 'Doğma Zamanına Göre Yaş',
        statementBlocks: [
          { text: 'Şimdiki yaşı x olan kişi a yıl önce doğsaydı şimdiki yaşı artardı.', mathLines: ['x+a'] },
          { text: 'Şimdiki yaşı x olan kişi b yıl sonra doğsaydı şimdiki yaşı azalırdı.', mathLines: ['x-b'] }
        ] },
      { title: 'İki Kişinin Yaş Değişimi',
        formulaLines: [
          'x>y',
          '\\text{Kişi 1, Kişi 2’nin yaşında iken: }\\;y\\;\\text{ ve }\\;2y-x',
          '\\text{Kişi 2, Kişi 1’in yaşına geldiğinde: }\\;2x-y\\;\\text{ ve }\\;x'
        ],
        tipLines: [
          'İki kişi arasındaki yaş farkı daima sabittir, değişmez.'
        ] }
    ],
    facts: [],
    warning: 'Yaş problemlerinde herkes aynı süre kadar yaşlanır; bu yüzden yaş farkı değişmez, yaş toplamı kişi sayısı kadar artar veya azalır.'
  },
  examples: [
    { question: 'Ali 12, Veli 8 yaşındadır. 5 yıl sonra yaşları toplamı kaç olur?', steps: ['12+5=17', '8+5=13', '17+13=30'], answer: '30' },
    { question: 'Üç kişinin yaşları toplamı şimdi 42 ise 4 yıl sonra toplam kaç olur?', steps: ['42+3\\cdot4=54'], answer: '54' },
    { question: 'İki kişinin yaş farkı 7 ise 10 yıl sonra yaş farkı kaç olur?', steps: [{ text: 'Yaş farkı değişmez.' }], answer: '7' },
    { question: 'Kardeşi doğduğunda Efe 8 yaşındadır. Kardeşi Efe’nin yaşına geldiğinde Efe ile kardeşinin yaşları toplamı annelerinin yaşının yarısına eşittir. Efe doğduğunda annesi kaç yaşındadır?', steps: [{ text: 'İki kardeşin yaş farkı 8’dir.' }, { text: 'Kardeşi Efe’nin yaşına geldiğinde kardeş 8, Efe 16 yaşında olur.' }, '8+16=24', '\\text{Anne yaşı}=2\\cdot24=48', '\\text{Efe doğduğunda anne}=48-16=32'], answer: '32' },
    { question: 'Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra baba oğlunun 3 katı yaşında olacağına göre oğul şimdi kaç yaşındadır?', steps: ['\\text{Oğul}=x,\\;\\text{Baba}=4x', '4x+6=3(x+6)', '4x+6=3x+18', 'x=12'], answer: '12' }
  ],
  quiz: quizRows([
    ['Şimdiki yaşı x olan kişinin a yıl önceki yaşı nedir?', ['x+a','x-a','a-x','x·a'], 1, 'Geçmiş yaş x-a’dır.'],
    ['Şimdiki yaşı x olan kişinin b yıl sonraki yaşı nedir?', ['x-b','b-x','x+b','xb'], 2, 'Gelecek yaş x+b’dir.'],
    ['3 kişinin yaşları toplamı 60 ise 5 yıl sonra toplam kaç olur?', ['65','70','75','80'], 2, '3 kişi için toplam 15 artar.'],
    ['2 kişinin yaşları toplamı 40 ise 6 yıl önce toplam kaçtı?', ['24','28','30','34'], 1, 'Toplam 2·6=12 azalır.'],
    ['İki kişi arasındaki yaş farkı için hangisi doğrudur?', ['Artar','Azalır','Sabit kalır','Sıfır olur'], 2, 'Yaş farkı değişmez.'],
    ['Ali 15, Ayşe 9 yaşındadır. 10 yıl sonra yaş farkı kaç olur?', ['4','5','6','10'], 2, 'Fark 15-9=6 ve sabittir.'],
    ['Bir kişinin yaşı 12 ise 5 yıl önce doğsaydı şimdiki yaşı kaç olurdu?', ['7','12','17','20'], 2, 'Daha önce doğsaydı 5 yaş büyük olurdu.'],
    ['Bir kişinin yaşı 20 ise 4 yıl sonra doğsaydı şimdiki yaşı kaç olurdu?', ['16','20','24','28'], 0, 'Daha sonra doğsaydı 4 yaş küçük olurdu.'],
    ['Kişi 1 yaşı x, Kişi 2 yaşı y ise toplam yaş a yıl sonra nasıl olur?', ['x+y+a','x+y+2a','x+y-a','x+y-2a'], 1, 'İki kişi olduğundan toplam 2a artar.'],
    ['3 kişinin yaşları toplamı x+y+z ise a yıl önce toplam nedir?', ['x+y+z-a','x+y+z-2a','x+y+z-3a','x+y+z+a'], 2, 'Üç kişi için toplam 3a azalır.'],
    ['Baba 40, çocuk 10 yaşında. Kaç yıl sonra baba çocuğun 3 katı olur?', ['3','5','7','10'], 1, '40+t=3(10+t), t=5.'],
    ['Anne 36, çocuk 12 yaşında. Kaç yıl önce anne çocuğun 4 katıydı?', ['2','4','6','8'], 1, '36-t=4(12-t), t=4.'],
    ['Ali’nin yaşı Veli’nin yaşının 2 katı, toplamları 36 ise Veli kaç yaşındadır?', ['10','12','14','18'], 1, '2x+x=36, x=12.'],
    ['İki kardeşin yaş farkı 8 ise küçük büyük kardeşin yaşına geldiğinde büyük kaç yaş artar?', ['4','8','12','16'], 1, 'Aradan yaş farkı kadar süre geçer.'],
    ['Kardeş doğduğunda Efe 8 yaşındaysa yaş farkı kaçtır?', ['4','6','8','16'], 2, 'Doğum anındaki fark sabit kalır.'],
    ['Kardeşi 8 yaşına geldiğinde Efe kaç yaşında olur?', ['8','12','16','24'], 2, 'Yaş farkı 8 olduğundan Efe 16 olur.'],
    ['Efe 16, kardeşi 8 ise toplamları kaçtır?', ['16','20','24','32'], 2, '16+8=24.'],
    ['Bu toplam annenin yaşının yarısı ise anne kaç yaşındadır?', ['24','36','48','56'], 2, 'Anne yaşı 2·24=48.'],
    ['Efe 16 iken anne 48 ise Efe doğduğunda anne kaç yaşındaydı?', ['24','28','32','40'], 2, '48-16=32.'],
    ['Yaş problemlerinde tablo kurmanın amacı nedir?', ['Zaman değişimini düzenlemek','Payda eşitlemek','Kök almak','Sayıyı asal çarpanlarına ayırmak'], 0, 'Geçmiş-şimdi-gelecek ilişkisi tabloyla netleşir.'],
    ['Bir kişinin yaşı x ise 3 yıl önce doğsaydı yaşı ne olurdu?', ['x-3','x+3','3x','x/3'], 1, 'Daha erken doğmak yaşı artırır.'],
    ['Bir kişinin yaşı x ise 3 yıl sonra doğsaydı yaşı ne olurdu?', ['x-3','x+3','3x','x/3'], 0, 'Daha geç doğmak yaşı azaltır.'],
    ['Yaş toplamı 2 kişi için her yıl kaç artar?', ['1','2','3','4'], 1, 'İki kişi birer yaş alır.'],
    ['Yaş toplamı 4 kişi için 5 yılda kaç artar?', ['5','10','15','20'], 3, '4·5=20.'],
    ['x>y olmak üzere Kişi 2, Kişi 1’in yaşına geldiğinde Kişi 1’in yaşı nedir?', ['x','y','2x-y','2y-x'], 2, 'Kişi 2’nin x yaşına gelmesi için x-y yıl geçer; Kişi 1: x+(x-y)=2x-y.']
  ])
});

extendTopicPractice(34, {
  summary: 'İşçi problemlerinde birim zamanda yapılan iş kullanılır; birlikte çalışma hızları toplanır, işçi sayısı ve süre çoğunlukla ters orantılıdır.',
  theory: {
    rules: [
      { title: 'Birim İş Mantığı',
        formulaLines: [
          '\\text{Bir işçi işi }x\\text{ günde bitirirse}',
          '\\text{1 günde }\\dfrac{1}{x}\\text{’ini yapar}',
          '\\text{a günde }\\dfrac{a}{x}\\text{’ini yapar}'
        ],
        tipLines: [
          'İşçi problemlerinde işlemler, birim zamanda yapılan iş üzerinden gerçekleştirilir.'
        ] },
      { title: 'Birlikte Çalışma',
        formulaLines: [
          '\\dfrac{1}{a}+\\dfrac{1}{b}=\\dfrac{1}{x}'
        ],
        tipLines: [
          'Birinci işçinin a günde, ikinci işçinin b günde bitirdiği bir işi bu iki işçi birlikte x günde bitiriyorsa hızlar toplanır.'
        ] },
      { title: 'İşçi Sayısı ve Süre',
        formulaLines: [
          '8\\text{ işçi}\\Rightarrow12\\text{ gün}',
          '6\\text{ işçi}\\Rightarrow x\\text{ gün}',
          '8\\cdot12=6\\cdot x'
        ],
        tipLines: [
          'İşçi sayısı azaldıkça işin yapılma süresi artacağından ters orantı vardır.'
        ] },
      { title: 'Parçalı Çalışma',
        formulaLines: [
          'EKOK(4,6)=12',
          '\\text{Cem’in günlük işi}=3k',
          '\\text{Caner’in günlük işi}=2k'
        ],
        tipLines: [
          'Farklı hızlarla çalışılan sorularda toplam işi EKOK yardımıyla seçmek işlemleri kolaylaştırır.'
        ] }
    ],
    facts: [],
    warning: 'Birlikte çalışma sorularında “iş miktarı” ile “süre” karıştırılmamalıdır; önce günlük iş hızını bulmak çoğu soruyu çözer.'
  },
  examples: [
    { question: 'Bir işçi bir işi 10 günde bitirirse 1 günde işin kaçta kaçını yapar?', steps: ['\\dfrac{1}{10}'], answer: '\\dfrac{1}{10}' },
    { question: 'Bir işçi bir işi 10 günde bitirirse 3 günde işin kaçta kaçını yapar?', steps: ['\\dfrac{3}{10}'], answer: '\\dfrac{3}{10}' },
    { question: 'Bir işi biri 4 günde, diğeri 6 günde bitiriyor. Birlikte kaç günde bitirirler?', steps: ['\\dfrac{1}{4}+\\dfrac{1}{6}=\\dfrac{1}{x}', '\\dfrac{5}{12}=\\dfrac{1}{x}', 'x=\\dfrac{12}{5}'], answer: '\\dfrac{12}{5}\\text{ gün}' },
    { question: '8 işçi bir duvarı 12 günde boyarsa 6 işçi kaç günde boyar?', steps: ['8\\cdot12=6\\cdot x', '96=6x', 'x=16'], answer: '16\\text{ gün}' },
    { question: 'Cem bir işi 4 günde, Caner 6 günde bitirir. İkisi birlikte başladıktan 2 gün sonra Cem işi bırakıyor. Kalan işi Caner kaç günde bitirir?', steps: ['EKOK(4,6)=12\\Rightarrow\\text{toplam iş}=12k', '\\text{Cem günlük}=3k', '\\text{Caner günlük}=2k', '2\\text{ günde yapılan}=2(3k+2k)=10k', '\\text{kalan}=2k', '\\text{Caner 1 günde }2k\\text{ yapar}'], answer: '1\\text{ gün}' }
  ],
  quiz: quizRows([
    ['Bir işçi işi x günde bitirirse 1 günde işin kaçını yapar?', ['x','1/x','x/2','2x'], 1, 'Günlük iş hızı 1/x’tir.'],
    ['Bir işçi işi x günde bitirirse a günde işin kaçını yapar?', ['a/x','x/a','a+x','a·x'], 0, 'a günde a/x kadar iş yapar.'],
    ['4 günde biten işin günlük hızı nedir?', ['1/2','1/3','1/4','4'], 2, '1 günde 1/4’ü yapılır.'],
    ['6 günde biten işin günlük hızı nedir?', ['1/6','1/5','1/4','6'], 0, '1 günde 1/6’sı yapılır.'],
    ['4 ve 6 günde bitiren iki işçi birlikte günlük işin kaçını yapar?', ['1/10','5/12','12/5','1/24'], 1, '1/4+1/6=5/12.'],
    ['Biri 4, diğeri 6 günde bitirirse birlikte kaç günde bitirirler?', ['2','12/5','3','5'], 1, '1/x=5/12, x=12/5.'],
    ['İşçi sayısı azalırsa süre nasıl değişir?', ['Azalır','Artar','Değişmez','Sıfır olur'], 1, 'İşçi sayısı ile süre ters orantılıdır.'],
    ['8 işçi 12 günde bitirirse 6 işçi kaç günde bitirir?', ['12','14','16','18'], 2, '8·12=6·x, x=16.'],
    ['10 işçi 6 günde bitirirse 5 işçi kaç günde bitirir?', ['6','8','10','12'], 3, '10·6=5·x, x=12.'],
    ['3 işçi 20 günde bitirirse 5 işçi kaç günde bitirir?', ['8','10','12','15'], 2, '3·20=5·x, x=12.'],
    ['Bir işi A 5 günde, B 10 günde bitirirse birlikte kaç günde bitirirler?', ['5/3','10/3','4','5'], 1, '1/5+1/10=3/10, x=10/3.'],
    ['Bir işi A 6 günde, B 12 günde bitirirse birlikte kaç günde bitirirler?', ['3','4','5','6'], 1, '1/6+1/12=1/4, x=4.'],
    ['Bir işin 1/3’ü 2 günde yapılırsa tamamı kaç günde yapılır?', ['4','5','6','8'], 2, '1/3 iş 2 günse tamamı 6 gün.'],
    ['Bir işçi 3 günde işin 1/2’sini yaparsa tamamını kaç günde bitirir?', ['4','5','6','8'], 2, 'Yarım iş 3 günse tam iş 6 gün.'],
    ['Toplam iş 12k, işçi günlük 3k yapıyorsa işi kaç günde bitirir?', ['2','3','4','6'], 2, '12k/3k=4.'],
    ['Toplam iş 12k, işçi günlük 2k yapıyorsa işi kaç günde bitirir?', ['4','5','6','8'], 2, '12k/2k=6.'],
    ['Cem günlük 3k, Caner günlük 2k yaparsa birlikte 2 günde ne kadar iş yaparlar?', ['5k','6k','10k','12k'], 2, '2·(3k+2k)=10k.'],
    ['Toplam 12k işten 10k yapılırsa kaç k iş kalır?', ['1k','2k','3k','4k'], 1, '12k-10k=2k.'],
    ['Caner günlük 2k yaparsa 2k kalan işi kaç günde bitirir?', ['1','2','3','4'], 0, '2k/2k=1 gün.'],
    ['İki işçi birlikte çalışırken hızlar nasıl işlem görür?', ['Toplanır','Çıkarılır','Çarpılır','Bölünür'], 0, 'Günlük iş hızları toplanır.'],
    ['İşçi problemlerinde EKOK seçmenin amacı nedir?', ['İşi parçasız göstermek','Süreyi artırmak','Yaşı bulmak','Oranı ters çevirmek'], 0, 'Toplam işi ortak kat seçmek kesirleri azaltır.'],
    ['4 ve 6 gün için uygun toplam iş kaç k seçilebilir?', ['6k','10k','12k','24k'], 2, 'EKOK(4,6)=12.'],
    ['Bir işi A tek başına 8 günde, B tek başına 8 günde bitirirse birlikte kaç günde bitirirler?', ['2','3','4','8'], 2, '1/8+1/8=1/4.'],
    ['Bir işi A 9 günde, B 18 günde bitirirse birlikte kaç günde bitirirler?', ['3','4','5','6'], 3, '1/9+1/18=1/6.'],
    ['Bir işçi sayısı iki katına çıkarsa süre genellikle ne olur?', ['İki katına çıkar','Yarıya iner','Aynı kalır','Dört katına çıkar'], 1, 'Aynı iş için ters orantı vardır.']
  ])
});

extendTopicPractice(11, {
  examples: [
    { question: '540 sayısını asal çarpanlarına ayırınız.',
      steps: ['540=54\\cdot10', '54=2\\cdot3^3', '10=2\\cdot5', '540=2^2\\cdot3^3\\cdot5'],
      answer: '2^2\\cdot3^3\\cdot5' },
    { question: 'N = 2⁴ · 3 · 7² sayısının tam sayı bölen sayısını bulunuz.',
      steps: [{ text: 'Pozitif bölen sayısı üslerin bir fazlasının çarpımıdır.' }, '(4+1)(1+1)(2+1)=30', { text: 'Tam sayı bölenleri pozitif ve negatif olduğundan iki katı alınır.' }, '2\\cdot30=60'],
      answer: '60' },
    { question: 'A = 2² · 3 · 5 sayısının asal olmayan tam sayı bölenlerinin toplamını bulunuz.',
      steps: [{ text: 'Tam sayı bölenlerinin toplamı 0’dır.' }, { text: 'Asal bölenler 2, 3 ve 5’tir.' }, '0-(2+3+5)=-10'],
      answer: '-10' }
  ],
  quiz: [
    { q: '72 sayısının asal çarpanlara ayrılmış hali hangisidir?', opt: ['2³·3²','2²·3³','2⁴·3','2·3²'], a: 0, e: '72 = 8 · 9 = 2³ · 3².' },
    { q: '120 sayısının asal çarpanlara ayrılmış hali hangisidir?', opt: ['2²·3·5','2³·3·5','2³·5²','2·3·5'], a: 1, e: '120 = 8 · 15 = 2³ · 3 · 5.' },
    { q: 'A = 2³·5² ise A sayısının pozitif bölen sayısı kaçtır?', opt: ['6','8','12','24'], a: 2, e: '(3+1)(2+1)=12.' },
    { q: 'A = 3²·7 sayısının pozitif bölen sayısı kaçtır?', opt: ['4','6','8','12'], a: 1, e: '(2+1)(1+1)=6.' },
    { q: 'Pozitif bölen sayısı 18 olan bir sayının negatif bölen sayısı kaçtır?', opt: ['9','18','36','0'], a: 1, e: 'Pozitif ve negatif bölen sayıları eşittir.' },
    { q: 'Pozitif bölen sayısı 10 olan bir sayının tam sayı bölen sayısı kaçtır?', opt: ['10','20','30','40'], a: 1, e: 'Tam sayı bölen sayısı pozitif bölen sayısının iki katıdır.' },
    { q: 'A = 2²·3³·5 sayısının asal bölenleri hangileridir?', opt: ['2 ve 3','3 ve 5','2, 3 ve 5','2, 5 ve 7'], a: 2, e: 'Tabanlar asal bölenlerdir: 2, 3, 5.' },
    { q: 'Bir tam sayının tam sayı bölenlerinin toplamı kaçtır?', opt: ['0','1','Asal bölen toplamı','Pozitif bölen sayısı'], a: 0, e: 'Pozitif ve negatif bölenler toplamda birbirini götürür.' },
    { q: 'A = 2³·3²·5 biçiminde 2’nin üssü kaçtır?', opt: ['1','2','3','5'], a: 2, e: '2 tabanının üssü 3’tür.' },
    { q: 'A = xᵃ·yᵇ·zᶜ gösteriminde x, y, z için hangisi doğrudur?', opt: ['Rasyoneldir','Birbirinden farklı asal sayılardır','Negatif sayıdır','Ardışık çift sayıdır'], a: 1, e: 'PDF uyarısına göre tabanlar birbirinden farklı asal sayılardır.' },
    { q: 'Asal çarpanlara ayırmada hangi yöntemden yararlanılabilir?', opt: ['Bölme algoritması','Açıortay','Ortalama','Yüzde'], a: 0, e: 'PDF’te bölme algoritmasından yararlanıldığı belirtilir.' },
    { q: '90 sayısının asal çarpanları hangileridir?', opt: ['2 ve 3','3 ve 5','2, 3 ve 5','2, 5 ve 7'], a: 2, e: '90 = 2 · 3² · 5.' },
    { q: '96 sayısının asal çarpanlara ayrılmış hali hangisidir?', opt: ['2⁴·3','2⁵·3','2³·3²','2·3⁵'], a: 1, e: '96 = 32 · 3 = 2⁵ · 3.' },
    { q: 'A = 2·3·7 sayısının pozitif bölen sayısı kaçtır?', opt: ['4','6','8','10'], a: 2, e: '(1+1)(1+1)(1+1)=8.' },
    { q: 'A = 5³ sayısının pozitif bölen sayısı kaçtır?', opt: ['3','4','5','6'], a: 1, e: 'Üs 3 olduğundan pozitif bölen sayısı 3+1=4.' },
    { q: '360 = 2³·3²·5 ise pozitif bölen sayısı kaçtır?', opt: ['12','18','24','36'], a: 2, e: '(3+1)(2+1)(1+1)=24.' },
    { q: '360 sayısının tam sayı bölen sayısı kaçtır?', opt: ['24','36','48','72'], a: 2, e: 'Pozitif bölen sayısı 24, tam sayı bölen sayısı 48’dir.' },
    { q: 'A = 2²·3·5 sayısının asal olmayan tam sayı bölenlerinin toplamı kaçtır?', opt: ['-10','0','10','30'], a: 0, e: '0-(2+3+5)=-10.' },
    { q: 'A = 3·5·7 sayısının asal olmayan tam sayı bölenleri toplamı kaçtır?', opt: ['-15','-35','-105','0'], a: 0, e: 'Asal bölen toplamı 3+5+7=15; sonuç -15.' },
    { q: 'Bir sayının asal bölenleri hangi bilgilerden okunur?', opt: ['Üslerden','Tabanlardan','Katsayıdan','Bölen sayısından'], a: 1, e: 'Asal çarpanlara ayrılmış biçimde tabanlar asal bölenlerdir.' },
    { q: '144 sayısının asal çarpanlara ayrılmış hali hangisidir?', opt: ['2³·3²','2⁴·3²','2²·3⁴','2⁴·3'], a: 1, e: '144 = 16 · 9 = 2⁴ · 3².' },
    { q: 'A = 2⁴·3² sayısının pozitif bölen sayısı kaçtır?', opt: ['10','12','15','18'], a: 2, e: '(4+1)(2+1)=15.' },
    { q: 'A = 2⁴·3² sayısının negatif bölen sayısı kaçtır?', opt: ['15','30','45','60'], a: 0, e: 'Negatif bölen sayısı pozitif bölen sayısına eşittir.' },
    { q: 'Asal çarpanlara ayırma sonucunda üsler neyi etkiler?', opt: ['Bölen sayısını','Sayının işaretini','Sıfır olup olmadığını','Basamak sayısını'], a: 0, e: 'Bölen sayısı üslerin bir fazlası ile bulunur.' },
    { q: 'A = p²·q³ ise pozitif bölen sayısı kaçtır?', opt: ['6','8','10','12'], a: 3, e: '(2+1)(3+1)=12.' }
  ]
});

extendTopicPractice(12, {
  examples: [
    { question: '48 ve 60 sayılarının ortak bölenlerini EBOB üzerinden yorumlayınız.',
      steps: ['\\text{EBOB}(48,60)=12', { text: 'Ortak bölenler 12’nin bölenleridir.' }, { text: '1, 2, 3, 4, 6 ve 12 ortak bölenlerdir.' }],
      answer: '1,2,3,4,6,12' },
    { question: '$\\frac{84}{126}$ kesrini EBOB yardımıyla sadeleştiriniz.',
      steps: ['\\text{EBOB}(84,126)=42', '\\frac{84}{126}=\\frac{84:42}{126:42}=\\frac{2}{3}'],
      answer: '\\frac{2}{3}' },
    { question: '18 ve 24 sayılarının ortak katlarını EKOK üzerinden yorumlayınız.',
      steps: ['\\text{EKOK}(18,24)=72', { text: 'Ortak katlar 72’nin katlarıdır.' }, '72,144,216,...'],
      answer: '72\\text{ ve katları}' },
    { question: 'a · b = 420 ve EBOB(a,b)=6 ise EKOK(a,b) kaçtır?',
      steps: ['a\\cdot b=\\text{EBOB}\\cdot\\text{EKOK}', '420=6\\cdot\\text{EKOK}', '\\text{EKOK}=70'],
      answer: '70' }
  ],
  quiz: [
    { q: '24 ve 36 sayılarının EBOB’u kaçtır?', opt: ['6','8','12','18'], a: 2, e: 'Ortak bölenlerin en büyüğü 12’dir.' },
    { q: '24 ve 36 sayılarının EKOK’u kaçtır?', opt: ['48','72','96','108'], a: 1, e: 'EKOK(24,36)=72.' },
    { q: '18 ve 25 aralarında asal ise EBOB kaçtır?', opt: ['1','5','18','25'], a: 0, e: 'Aralarında asal sayıların EBOB’u 1’dir.' },
    { q: '18 ve 25 aralarında asal ise EKOK kaçtır?', opt: ['25','100','225','450'], a: 3, e: 'Aralarında asal ise EKOK çarpıma eşittir: 18·25=450.' },
    { q: 'Bir sayı diğerinin tam katıysa EBOB neye eşittir?', opt: ['Büyük sayıya','Küçük sayıya','Toplama','1’e'], a: 1, e: 'Biri diğerinin katıysa EBOB küçük sayıdır.' },
    { q: 'Bir sayı diğerinin tam katıysa EKOK neye eşittir?', opt: ['Büyük sayıya','Küçük sayıya','1’e','Farka'], a: 0, e: 'Biri diğerinin katıysa EKOK büyük sayıdır.' },
    { q: 'a·b = EBOB(a,b) · EKOK(a,b) özelliği hangi sayılar için kullanılır?', opt: ['İki sayma sayısı','Sadece asal sayılar','Sadece negatifler','Ondalık sayılar'], a: 0, e: 'PDF’te a ve b sayma sayıları için verilir.' },
    { q: '36 ve 48 sayılarının ortak bölenleri hangi sayının bölenleridir?', opt: ['EBOB’un','EKOK’un','Toplamın','Çarpımın'], a: 0, e: 'Ortak bölenler EBOB’un bölenleridir.' },
    { q: '12 ve 18 sayılarının ortak katları hangi sayının katlarıdır?', opt: ['EBOB’un','EKOK’un','Farkın','Toplamın'], a: 1, e: 'Ortak katlar EKOK’un katlarıdır.' },
    { q: 'EBOB(14,21) kaçtır?', opt: ['3','5','7','14'], a: 2, e: '14 ve 21’in en büyük ortak böleni 7’dir.' },
    { q: 'EKOK(14,21) kaçtır?', opt: ['21','28','42','84'], a: 2, e: '14=2·7, 21=3·7; EKOK=2·3·7=42.' },
    { q: 'EBOB(16,40) kaçtır?', opt: ['4','8','16','40'], a: 1, e: '16 ve 40’ın EBOB’u 8’dir.' },
    { q: 'EKOK(16,40) kaçtır?', opt: ['40','60','80','160'], a: 2, e: 'EKOK(16,40)=80.' },
    { q: 'EBOB(9,10) kaçtır?', opt: ['1','2','9','10'], a: 0, e: '9 ve 10 aralarında asaldır.' },
    { q: 'EKOK(9,10) kaçtır?', opt: ['19','45','90','100'], a: 2, e: 'Aralarında asal olduklarından EKOK=9·10=90.' },
    { q: '$\\frac{45}{60}$ kesrini sadeleştirmek için hangi sayı ile bölmek uygundur?', opt: ['5','10','15','20'], a: 2, e: 'EBOB(45,60)=15.' },
    { q: '$\\frac{45}{60}$ sadeleşmiş hali nedir?', opt: ['$\\frac{2}{3}$','$\\frac{3}{4}$','$\\frac{4}{5}$','$\\frac{5}{6}$'], a: 1, e: '45:15=3 ve 60:15=4.' },
    { q: 'Paydaları 6 ve 8 olan kesirleri toplarken ortak payda en küçük kaç alınabilir?', opt: ['12','18','24','48'], a: 2, e: 'EKOK(6,8)=24.' },
    { q: 'EBOB(30,45)=15 ve EKOK(30,45)=90 ise çarpımları kaçtır?', opt: ['900','1350','1800','2700'], a: 1, e: '30·45=1350 ve 15·90=1350.' },
    { q: 'EBOB’u 1 olan pozitif tam sayılara ne denir?', opt: ['Aralarında asal','Çift','Bileşik','Devirli'], a: 0, e: '1’den başka ortak bölenleri yoksa aralarında asaldır.' },
    { q: 'EBOB(27,36) kaçtır?', opt: ['3','6','9','12'], a: 2, e: '27=3³, 36=2²·3²; EBOB=3²=9.' },
    { q: 'EKOK(27,36) kaçtır?', opt: ['72','81','108','144'], a: 2, e: 'EKOK=2²·3³=108.' },
    { q: 'EBOB(20,100) kaçtır?', opt: ['5','10','20','100'], a: 2, e: '100, 20’nin katıdır; EBOB küçük sayı 20’dir.' },
    { q: 'EKOK(20,100) kaçtır?', opt: ['20','50','100','200'], a: 2, e: '100, 20’nin katıdır; EKOK büyük sayı 100’dür.' },
    { q: 'EBOB ve EKOK için asal çarpanlarda EBOB hangi üsleri alır?', opt: ['Büyük üsleri','Küçük üsleri','Üslerin toplamını','Üslerin farkını'], a: 1, e: 'EBOB’da ortak tabanların küçük üsleri alınır.' }
  ]
});

extendTopicPractice(13, {
  examples: [
    { question: '24 m ve 36 m kenarlı dikdörtgen biçimindeki bahçe en büyük eş karelere ayrılacaktır. Bir karenin kenarı kaç metre olur?',
      steps: [{ text: 'En büyük eş kare istendiği için EBOB kullanılır.' }, '\\text{EBOB}(24,36)=12'],
      answer: '12\\text{ m}' },
    { question: '6 cm × 10 cm dikdörtgenler yan yana getirilerek en küçük kare oluşturulacaktır. Karenin kenarı kaç cm olur?',
      steps: [{ text: 'En küçük ortak kare için EKOK kullanılır.' }, '\\text{EKOK}(6,10)=30'],
      answer: '30\\text{ cm}' },
    { question: '8, 12 ve 15 dakikada bir çalan üç zil birlikte çaldıktan sonra tekrar en erken kaç dakika sonra birlikte çalar?',
      steps: [{ text: 'Birlikte tekrar etme sorusu EKOK ister.' }, '\\text{EKOK}(8,12,15)=120'],
      answer: '120\\text{ dakika}' }
  ],
  quiz: [
    { q: 'En büyük eş parça sorularında hangi kavram kullanılır?', opt: ['EKOK','EBOB','Ortalama','Yüzde'], a: 1, e: 'En büyük eş parça EBOB ile bulunur.' },
    { q: 'En küçük ortak bütün sorularında hangi kavram kullanılır?', opt: ['EBOB','EKOK','Mod','Medyan'], a: 1, e: 'En küçük ortak bütün EKOK ile bulunur.' },
    { q: '18 m ve 24 m ipler en büyük eş parçalara ayrılırsa parça kaç m olur?', opt: ['3','6','9','12'], a: 1, e: 'EBOB(18,24)=6.' },
    { q: '30 ve 45 cm çubuklar en büyük eş parçalara ayrılırsa parça kaç cm olur?', opt: ['5','10','15','30'], a: 2, e: 'EBOB(30,45)=15.' },
    { q: '12 m ve 20 m kenarlı dikdörtgen bahçe en büyük eş karelere ayrılırsa kare kenarı kaç m olur?', opt: ['2','4','6','8'], a: 1, e: 'EBOB(12,20)=4.' },
    { q: '8 cm ve 12 cm dikdörtgenlerle en küçük kare yapılırsa kenar kaç cm olur?', opt: ['12','18','24','36'], a: 2, e: 'EKOK(8,12)=24.' },
    { q: '4 cm × 6 cm dikdörtgenlerle en küçük kare yapılırsa kenar kaç cm olur?', opt: ['8','10','12','24'], a: 2, e: 'EKOK(4,6)=12.' },
    { q: '5 ve 8 dakikada bir tekrarlayan iki olay birlikte kaç dakikada bir tekrar eder?', opt: ['13','20','30','40'], a: 3, e: 'EKOK(5,8)=40.' },
    { q: '6 ve 9 dakikada bir tekrarlayan iki olay birlikte kaç dakikada bir tekrar eder?', opt: ['9','12','18','54'], a: 2, e: 'EKOK(6,9)=18.' },
    { q: '12, 15 ve 20 dakikada bir tekrarlayan olaylar birlikte kaç dakikada bir tekrar eder?', opt: ['30','45','60','120'], a: 2, e: 'EKOK(12,15,20)=60.' },
    { q: 'Bir deponun en büyük eş küplere ayrılması hangi kavramla ilgilidir?', opt: ['EBOB','EKOK','Yüzde','Kalan'], a: 0, e: 'En büyük eş hacim EBOB sorusudur.' },
    { q: 'Eş dikdörtgen prizmalarla en küçük küp oluşturma hangi kavramla ilgilidir?', opt: ['EBOB','EKOK','Asal sayı','Ortalama'], a: 1, e: 'En küçük ortak hacim EKOK ile bulunur.' },
    { q: '20, 30 ve 40 cm ayrıtlı kutular en büyük eş küplere ayrılırsa küp ayrıtı kaç cm olur?', opt: ['5','10','20','40'], a: 1, e: 'EBOB(20,30,40)=10.' },
    { q: '9 cm × 12 cm dikdörtgenlerle en küçük kare yapılırsa kenar kaç cm olur?', opt: ['18','24','36','48'], a: 2, e: 'EKOK(9,12)=36.' },
    { q: '48 ve 60 sayıları en büyük hangi eş parçaya bölünebilir?', opt: ['6','8','12','24'], a: 2, e: 'EBOB(48,60)=12.' },
    { q: '21 ve 28 dakikada bir gelen iki otobüs birlikte kaç dakikada bir gelir?', opt: ['28','42','56','84'], a: 3, e: 'EKOK(21,28)=84.' },
    { q: '15 ve 25 kg paketler eşit ve en büyük kaplara konacaksa kap kaç kg olur?', opt: ['3','5','10','15'], a: 1, e: 'EBOB(15,25)=5.' },
    { q: '14 ve 35 cm çubuklarla en küçük ortak uzunluk kaç cm olur?', opt: ['35','49','70','140'], a: 2, e: 'EKOK(14,35)=70.' },
    { q: 'En az sayıda küçük parçayı birleştirerek büyük parça elde etmek hangi kavramdır?', opt: ['EBOB','EKOK','Kök','Mutlak değer'], a: 1, e: 'En küçük ortak bütün EKOK’tur.' },
    { q: 'En az sayıda parça elde etmek için parçalar nasıl seçilir?', opt: ['En küçük','En büyük','Rastgele','Eşit olmayan'], a: 1, e: 'En az parça için en büyük parça seçilir, EBOB kullanılır.' },
    { q: 'Bir pistte 6, 8 ve 10 dakikada tur atan koşucular tekrar kaç dakikada birlikte başlangıçta olur?', opt: ['30','60','120','240'], a: 2, e: 'EKOK(6,8,10)=120.' },
    { q: '32 ve 48 m kumaşlar en büyük eş parçalara ayrılırsa parça kaç m olur?', opt: ['8','12','16','24'], a: 2, e: 'EBOB(32,48)=16.' },
    { q: '10 cm × 15 cm dikdörtgenlerle en küçük kare yapılırsa kenar kaç cm olur?', opt: ['15','20','30','60'], a: 2, e: 'EKOK(10,15)=30.' },
    { q: 'Periyodik olayların aynı anda tekrarı için ne bulunur?', opt: ['EBOB','EKOK','Ortalama','Asal bölen'], a: 1, e: 'Aynı anda tekrar için ortak periyot, yani EKOK bulunur.' },
    { q: 'Büyük bir alanı en büyük eş karelere ayırmak ne tür problemdir?', opt: ['EBOB','EKOK','Yüzde','Fonksiyon'], a: 0, e: 'En büyük eş kare EBOB problemidir.' }
  ]
});

extendTopicPractice(14, {
  examples: [
    { question: 'Bugün cuma ise 100 gün sonra hangi gündür?',
      steps: ['100=14\\cdot7+2', { text: 'Kalan 2 olduğu için cuma gününden 2 gün ilerlenir.' }],
      answer: 'Pazar' },
    { question: 'Bir ilaç 6 saatte bir alınmaktadır. İlk doz saat 08.00’de alındıysa 10. doz saat kaçta alınır?',
      steps: [{ text: 'İlk doz sayıldığı için 10 - 1 = 9 aralık vardır.' }, '9\\cdot6=54\\text{ saat}', { text: '54 saat = 2 gün 6 saat; 08.00’den 6 saat sonrası 14.00’tür.' }],
      answer: '14.00' },
    { question: '12 günde bir ve 18 günde bir yapılan iki etkinlik bugün birlikte yapıldı. 4. kez birlikte yapılmaları için kaç gün geçer?',
      steps: ['\\text{EKOK}(12,18)=36', { text: 'Bugün birinci kezdir; 4. kez için 4-1=3 aralık geçer.' }, '36\\cdot3=108'],
      answer: '108\\text{ gün}' }
  ],
  quiz: [
    { q: 'Haftanın günleri kaç günlük periyotla tekrar eder?', opt: ['5','6','7','8'], a: 2, e: 'Hafta 7 gündür.' },
    { q: 'Bugün pazartesi ise 15 gün sonra hangi gündür?', opt: ['Salı','Çarşamba','Perşembe','Cuma'], a: 0, e: '15’in 7 ile bölümünden kalan 1’dir.' },
    { q: 'Bugün çarşamba ise 20 gün sonra hangi gündür?', opt: ['Pazar','Pazartesi','Salı','Çarşamba'], a: 1, e: '20 mod 7 = 6; çarşambadan 6 gün sonrası pazartesidir.' },
    { q: 'Bugün cuma ise 100 gün sonra hangi gündür?', opt: ['Cumartesi','Pazar','Pazartesi','Salı'], a: 1, e: '100 mod 7 = 2.' },
    { q: 'İlk gerçekleşme sayıldıysa n. kez için kaç aralık alınır?', opt: ['n','n+1','n-1','2n'], a: 2, e: 'Başlangıç birinci kezdir.' },
    { q: '4 günde bir olan olayın 9. kez gerçekleşmesi için kaç gün geçer?', opt: ['28','32','36','40'], a: 1, e: '(9-1)·4=32.' },
    { q: '5 günde bir olan olayın 1. kez gerçekleşmesi için kaç gün geçer?', opt: ['0','5','10','1'], a: 0, e: 'İlk gerçekleşme başlangıç anıdır.' },
    { q: '3 günde bir yapılan nöbet 7. kez kaç gün sonra olur?', opt: ['18','21','24','27'], a: 0, e: '(7-1)·3=18.' },
    { q: '6 ve 8 günde bir tekrarlayan iki olay birlikte kaç günde bir olur?', opt: ['12','18','24','48'], a: 2, e: 'EKOK(6,8)=24.' },
    { q: '10 ve 15 günde bir tekrarlayan olaylar birlikte kaç günde bir olur?', opt: ['15','20','30','60'], a: 2, e: 'EKOK(10,15)=30.' },
    { q: 'Birlikte ilk gerçekleşme sayıldıysa 5. birlikte gerçekleşme için kaç EKOK aralığı geçer?', opt: ['3','4','5','6'], a: 1, e: '5 - 1 = 4 aralık geçer.' },
    { q: '8 ve 12 günde bir gerçekleşen iki olay bugün birlikte olduysa 3. birlikte oluş kaç gün sonra olur?', opt: ['24','48','72','96'], a: 1, e: 'EKOK=24, 3. kez için 2 aralık: 48.' },
    { q: 'Periyodik durum ne demektir?', opt: ['Rastgele olay','Belirli aralıklarla tekrar eden olay','Bir kez olan olay','Asal sayı'], a: 1, e: 'Periyodik olay belli zaman aralıklarında tekrar eder.' },
    { q: 'Saat 09.00’da başlayan 4 saatte bir alarmın 6. çalışı saat kaçta olur?', opt: ['17.00','21.00','01.00','05.00'], a: 3, e: '5 aralık · 4 = 20 saat; 09.00 + 20 saat = 05.00.' },
    { q: 'Bugün salı ise 44 gün sonra hangi gündür?', opt: ['Perşembe','Cuma','Cumartesi','Pazar'], a: 0, e: '44 mod 7 = 2; salıdan 2 gün sonrası perşembe.' },
    { q: 'Bugün pazar ise 31 gün sonra hangi gündür?', opt: ['Pazartesi','Salı','Çarşamba','Perşembe'], a: 2, e: '31 mod 7 = 3.' },
    { q: '12 saatte bir alınan ilaç ilk kez 07.00’de alındıysa 4. doz saat kaçta alınır?', opt: ['19.00','07.00','31.00','13.00'], a: 0, e: '3 aralık · 12 = 36 saat; 07.00 + 36 saat = 19.00.' },
    { q: '7 günde bir olan olay 10. kez kaç gün sonra olur?', opt: ['63','70','77','56'], a: 0, e: '(10-1)·7=63.' },
    { q: '9 ve 12 günde bir olan iki olay birlikte kaç günde bir olur?', opt: ['18','24','36','108'], a: 2, e: 'EKOK(9,12)=36.' },
    { q: '4, 6 ve 9 günde bir olan üç olay birlikte kaç günde bir olur?', opt: ['18','24','36','72'], a: 2, e: 'EKOK(4,6,9)=36.' },
    { q: 'Bugün pazartesi ise 365 gün sonra hangi gündür?', opt: ['Pazartesi','Salı','Çarşamba','Perşembe'], a: 1, e: '365 mod 7 = 1.' },
    { q: 'İlk kez sayılmayan bir tekrarda 6. gerçekleşme için kaç periyot alınır?', opt: ['5','6','7','0'], a: 1, e: 'Başlangıç sayılmıyorsa 6 periyot geçer.' },
    { q: 'Birlikte tekrar eden olaylarda ortak periyot nasıl bulunur?', opt: ['EBOB','EKOK','Fark','Toplam'], a: 1, e: 'Ortak tekrar zamanı EKOK’tur.' },
    { q: '5 ve 7 günde bir tekrarlayan olaylar bugün birlikte oldu. 2. kez kaç gün sonra birlikte olur?', opt: ['12','25','35','70'], a: 2, e: 'EKOK(5,7)=35.' },
    { q: 'Bugün cumartesi ise 9 gün sonra hangi gündür?', opt: ['Pazar','Pazartesi','Salı','Çarşamba'], a: 1, e: '9 mod 7 = 2; cumartesiden 2 gün sonrası pazartesidir.' }
  ]
});

extendTopicPractice(15, {
  examples: [
    { questionBlocks: [{ tex: '\\frac{5}{12}-\\frac{1}{8}' }, 'işlemini yapınız.'],
      steps: ['\\text{EKOK}(12,8)=24', '\\frac{5}{12}-\\frac{1}{8}=\\frac{10}{24}-\\frac{3}{24}=\\frac{7}{24}'],
      answer: '\\frac{7}{24}' },
    { questionBlocks: [{ tex: '\\frac{3}{4}\\cdot\\frac{8}{9}' }, 'işlemini sadeleştirerek yapınız.'],
      steps: ['\\frac{3}{4}\\cdot\\frac{8}{9}', { text: '3 ile 9, 4 ile 8 sadeleştirilebilir.' }, '\\frac{1}{1}\\cdot\\frac{2}{3}=\\frac{2}{3}'],
      answer: '\\frac{2}{3}' },
    { questionBlocks: [{ tex: '1\\frac{1}{2}:\\frac{3}{5}' }, 'işlemini yapınız.'],
      steps: [{ text: 'Tam sayılı kesir önce bileşik kesre çevrilir.' }, '1\\frac{1}{2}=\\frac{3}{2}', '\\frac{3}{2}:\\frac{3}{5}=\\frac{3}{2}\\cdot\\frac{5}{3}=\\frac{5}{2}'],
      answer: '\\frac{5}{2}' }
  ],
  quiz: [
    { q: 'Rasyonel sayılarda toplama ve çıkarmada ilk adım nedir?', opt: ['Payları çarpmak','Paydaları eşitlemek','İkinci kesri ters çevirmek','Ondalığa çevirmek'], a: 1, e: 'Toplama ve çıkarmada paydalar eşitlenir.' },
    { q: 'Paydalar hangi sayıda eşitlenir?', opt: ['EBOB','EKOK','Toplam','Fark'], a: 1, e: 'Paydalar EKOK’larında eşitlenir.' },
    { q: '$\\frac{1}{2}+\\frac{1}{3}$ kaçtır?', opt: ['$\\frac{2}{5}$','$\\frac{5}{6}$','$\\frac{1}{6}$','$\\frac{3}{6}$'], a: 1, e: '$\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$.' },
    { q: '$\\frac{3}{4}-\\frac{1}{6}$ kaçtır?', opt: ['$\\frac{7}{12}$','$\\frac{1}{2}$','$\\frac{5}{10}$','$\\frac{2}{3}$'], a: 0, e: '$\\frac{9}{12}-\\frac{2}{12}=\\frac{7}{12}$.' },
    { q: '$\\frac{2}{5}+\\frac{3}{10}$ kaçtır?', opt: ['$\\frac{1}{2}$','$\\frac{7}{10}$','$\\frac{5}{15}$','$\\frac{1}{10}$'], a: 1, e: '$\\frac{4}{10}+\\frac{3}{10}=\\frac{7}{10}$.' },
    { q: '$\\frac{5}{6}-\\frac{1}{4}$ kaçtır?', opt: ['$\\frac{1}{2}$','$\\frac{7}{12}$','$\\frac{5}{24}$','$\\frac{3}{10}$'], a: 1, e: '$\\frac{10}{12}-\\frac{3}{12}=\\frac{7}{12}$.' },
    { q: '$\\frac{2}{3}\\cdot\\frac{9}{10}$ kaçtır?', opt: ['$\\frac{3}{5}$','$\\frac{1}{5}$','$\\frac{18}{13}$','$\\frac{5}{3}$'], a: 0, e: 'Sadeleşince $\\frac{3}{5}$ olur.' },
    { q: '$\\frac{4}{7}\\cdot\\frac{14}{3}$ kaçtır?', opt: ['$\\frac{8}{3}$','$\\frac{2}{3}$','$\\frac{4}{3}$','$\\frac{7}{3}$'], a: 0, e: '14 ile 7 sadeleşir: $\\frac{4\\cdot2}{3}=\\frac{8}{3}$.' },
    { q: '$\\frac{5}{8}:\\frac{15}{16}$ kaçtır?', opt: ['$\\frac{2}{3}$','$\\frac{3}{2}$','$\\frac{1}{3}$','$\\frac{5}{16}$'], a: 0, e: '$\\frac{5}{8}\\cdot\\frac{16}{15}=\\frac{2}{3}$.' },
    { q: '$\\frac{3}{5}:\\frac{9}{10}$ kaçtır?', opt: ['$\\frac{1}{3}$','$\\frac{2}{3}$','$\\frac{3}{2}$','$\\frac{5}{6}$'], a: 1, e: '$\\frac{3}{5}\\cdot\\frac{10}{9}=\\frac{2}{3}$.' },
    { q: 'Bölme işleminde ikinci kesre ne yapılır?', opt: ['Aynen yazılır','Ters çevrilir','Paydası atılır','Payı sıfırlanır'], a: 1, e: 'Bölmede ikinci kesir ters çevrilip çarpılır.' },
    { q: 'Tam sayılı kesirle işlemden önce ne yapılır?', opt: ['Bileşik kesre çevrilir','Payda silinir','Virgül kaydırılır','Kök alınır'], a: 0, e: 'Tam sayılı kesir önce bileşik kesre çevrilir.' },
    { q: '$1\\frac{1}{3}$ bileşik kesir olarak hangisidir?', opt: ['$\\frac{3}{4}$','$\\frac{4}{3}$','$\\frac{5}{3}$','$\\frac{2}{3}$'], a: 1, e: '$1\\frac{1}{3}=\\frac{4}{3}$.' },
    { q: '$2\\frac{1}{2}$ bileşik kesir olarak hangisidir?', opt: ['$\\frac{3}{2}$','$\\frac{4}{2}$','$\\frac{5}{2}$','$\\frac{2}{5}$'], a: 2, e: '$2\\frac{1}{2}=\\frac{5}{2}$.' },
    { q: '$\\frac{1}{6}+\\frac{1}{4}$ kaçtır?', opt: ['$\\frac{5}{12}$','$\\frac{1}{10}$','$\\frac{2}{10}$','$\\frac{1}{12}$'], a: 0, e: 'Ortak payda 12: $\\frac{2}{12}+\\frac{3}{12}=\\frac{5}{12}$.' },
    { q: '$\\frac{7}{9}-\\frac{2}{3}$ kaçtır?', opt: ['$\\frac{1}{9}$','$\\frac{2}{9}$','$\\frac{3}{9}$','$\\frac{5}{6}$'], a: 0, e: '$\\frac{7}{9}-\\frac{6}{9}=\\frac{1}{9}$.' },
    { q: '$\\frac{3}{8}+\\frac{1}{2}$ kaçtır?', opt: ['$\\frac{4}{10}$','$\\frac{5}{8}$','$\\frac{7}{8}$','$\\frac{3}{16}$'], a: 2, e: '$\\frac{3}{8}+\\frac{4}{8}=\\frac{7}{8}$.' },
    { q: '$\\frac{6}{11}\\cdot\\frac{22}{9}$ kaçtır?', opt: ['$\\frac{4}{3}$','$\\frac{2}{3}$','$\\frac{11}{3}$','$\\frac{3}{4}$'], a: 0, e: '22 ile 11, 6 ile 9 sadeleşir; sonuç $\\frac{4}{3}$.' },
    { q: '$\\frac{7}{12}:\\frac{7}{6}$ kaçtır?', opt: ['$\\frac{1}{2}$','$\\frac{2}{1}$','$\\frac{7}{18}$','$\\frac{1}{3}$'], a: 0, e: '$\\frac{7}{12}\\cdot\\frac{6}{7}=\\frac{1}{2}$.' },
    { q: 'Çarpma işleminde hangi sadeleştirme işlemi kolaylaştırır?', opt: ['Pay ve paydadaki ortak çarpanları sadeleştirmek','Paydaları toplamak','Payları çıkarmak','İkinci kesri silmek'], a: 0, e: 'Pay ve paydadaki ortak çarpanlar sadeleşebilir.' },
    { q: '$\\frac{2}{7}+\\frac{3}{7}$ kaçtır?', opt: ['$\\frac{5}{7}$','$\\frac{5}{14}$','$\\frac{6}{7}$','$\\frac{1}{7}$'], a: 0, e: 'Paydalar eşit olduğundan paylar toplanır.' },
    { q: '$\\frac{9}{10}-\\frac{1}{5}$ kaçtır?', opt: ['$\\frac{7}{10}$','$\\frac{8}{10}$','$\\frac{1}{2}$','$\\frac{4}{5}$'], a: 0, e: '$\\frac{1}{5}=\\frac{2}{10}$, sonuç $\\frac{7}{10}$.' },
    { q: '$\\frac{3}{4}\\cdot\\frac{4}{9}$ kaçtır?', opt: ['$\\frac{1}{3}$','$\\frac{3}{9}$','$\\frac{4}{3}$','$\\frac{1}{4}$'], a: 0, e: '4’ler sadeleşir, $\\frac{3}{9}=\\frac{1}{3}$.' },
    { q: '$\\frac{8}{15}:\\frac{4}{5}$ kaçtır?', opt: ['$\\frac{1}{3}$','$\\frac{2}{3}$','$\\frac{4}{5}$','$\\frac{5}{4}$'], a: 1, e: '$\\frac{8}{15}\\cdot\\frac{5}{4}=\\frac{2}{3}$.' },
    { q: '$\\left(\\frac{1}{3}-\\frac{1}{4}\\right)\\cdot\\frac{6}{7}:\\frac{5}{28}$ sonucu kaçtır?', opt: ['$\\frac{1}{5}$','$\\frac{2}{5}$','$\\frac{3}{5}$','$\\frac{5}{2}$'], a: 1, e: 'Örnekteki çözüm sonucu $\\frac{2}{5}$ olur.' }
  ]
});

extendTopicPractice(16, {
  examples: [
    { question: '$\\frac{7}{10}$ kesrini ondalık sayıya çeviriniz.',
      steps: ['\\frac{7}{10}=0,7'],
      answer: '0,7' },
    { question: '0,48 sayısını rasyonel sayı olarak yazınız.',
      steps: ['0,48=\\frac{48}{100}', '\\frac{48}{100}=\\frac{12}{25}'],
      answer: '\\frac{12}{25}' },
    { question: '2,35 + 4,7 işlemini yapınız.',
      steps: [{ text: 'Virgüller alt alta hizalanır. 4,7 sayısı 4,70 olarak düşünülür.' }, '2,35+4,70=7,05'],
      answer: '7,05' },
    { question: '3,6 · 0,25 işlemini yapınız.',
      steps: [{ text: 'Virgül yokmuş gibi 36 · 25 = 900 çarpılır.' }, { text: 'Toplam üç ondalık basamak olduğundan sonuç 0,900 = 0,9 olur.' }],
      answer: '0,9' },
    { question: '0,024 · 1000 işlemini yapınız.',
      steps: [{ text: '1000 ile çarpmada virgül üç basamak sağa kayar.' }, '0,024\\cdot1000=24'],
      answer: '24' },
    { question: '4,8 ÷ 0,6 işlemini yapınız.',
      steps: [{ text: 'Bölen virgülden kurtarılır; iki sayı da 10 ile çarpılır.' }, '4,8:0,6=48:6=8'],
      answer: '8' },
    { question: '56,2 ÷ 100 işlemini yapınız.',
      steps: [{ text: '100’e bölmede virgül iki basamak sola kayar.' }, '56,2:100=0,562'],
      answer: '0,562' },
    { question: '0,454545... sayısını devirli gösterimle yazınız.',
      steps: [{ text: 'Virgülden sonra 45 bloğu sürekli tekrar eder.' }, '0,454545...=0,\\overline{45}'],
      answer: '0,\\overline{45}' },
    { question: '$0,\\overline{6}$ sayısını rasyonel sayıya çeviriniz.',
      steps: ['0,\\overline{6}=\\frac{6}{9}', '\\frac{6}{9}=\\frac{2}{3}'],
      answer: '\\frac{2}{3}' },
    { question: '$\\frac{3}{8}$ ve 0,4 sayılarını sıralayınız.',
      steps: ['\\frac{3}{8}=0,375', { text: '0,375 < 0,4 olduğundan sıralama yapılır.' }],
      answer: '\\frac{3}{8}<0,4' },
    { question: '$-\\frac{2}{3}$ ve $-\\frac{3}{4}$ sayılarını sıralayınız.',
      steps: [{ text: 'Pozitif halleri karşılaştırılır: 2/3 < 3/4.' }, { text: 'Negatiflerde sıralama tersine döner.' }],
      answer: '-\\frac{3}{4}< -\\frac{2}{3}' }
  ]
});

extendTopicPractice(17, {
  examples: [
    { question: 'x ≥ -2 eşitsizliğini aralık biçiminde yazınız.',
      steps: [{ text: '-2 dahil ve sağa doğru sonsuza gider.' }, '[-2,\\infty)'],
      answer: '[-2,\\infty)' },
    { question: '-3 < x ≤ 4 eşitsizliğini aralık biçiminde yazınız.',
      steps: [{ text: '-3 dahil değildir, 4 dahildir.' }, '(-3,4]'],
      answer: '(-3,4]' },
    { question: 'A = [-1,5) ve B = [3,8] ise A ∩ B aralığını bulunuz.',
      steps: [{ text: 'Ortak kısım 3’ten başlar ve 5’e kadar gider.' }, { text: '3 iki aralıkta da dahil, 5 ise A’da dahil değildir.' }, '[3,5)'],
      answer: '[3,5)' }
  ],
  quiz: [
    { q: 'Uç noktaları dahil olan aralık hangisidir?', opt: ['(a,b)','[a,b]','[a,b)','(a,b]'], a: 1, e: 'Köşeli parantez dahil anlamındadır.' },
    { q: 'Uç noktaları dahil olmayan aralık hangisidir?', opt: ['(a,b)','[a,b]','[a,b)','(a,b]'], a: 0, e: 'Normal parantez dahil değil anlamındadır.' },
    { q: 'a ≤ x ≤ b eşitsizliği hangi aralıktır?', opt: ['(a,b)','[a,b]','[a,b)','(a,b]'], a: 1, e: 'İki uç da dahildir.' },
    { q: 'a < x < b eşitsizliği hangi aralıktır?', opt: ['(a,b)','[a,b]','[a,b)','(a,b]'], a: 0, e: 'İki uç da dahil değildir.' },
    { q: 'a ≤ x < b eşitsizliği hangi aralıktır?', opt: ['[a,b)','(a,b]','(a,b)','[a,b]'], a: 0, e: 'Sol uç dahil, sağ uç dahil değildir.' },
    { q: 'a < x ≤ b eşitsizliği hangi aralıktır?', opt: ['[a,b)','(a,b]','(a,b)','[a,b]'], a: 1, e: 'Sol uç dahil değil, sağ uç dahildir.' },
    { q: 'x > 3 aralığı hangisidir?', opt: ['[3,∞)','(3,∞)','(-∞,3)','(-∞,3]'], a: 1, e: '3 dahil değildir, sağa sonsuza gider.' },
    { q: 'x ≥ 3 aralığı hangisidir?', opt: ['[3,∞)','(3,∞)','(-∞,3)','(-∞,3]'], a: 0, e: '3 dahil olduğundan köşeli parantez kullanılır.' },
    { q: 'x < -2 aralığı hangisidir?', opt: ['(-∞,-2)','(-∞,-2]','[-2,∞)','(-2,∞)'], a: 0, e: '-2 dahil değildir.' },
    { q: 'x ≤ -2 aralığı hangisidir?', opt: ['(-∞,-2)','(-∞,-2]','[-2,∞)','(-2,∞)'], a: 1, e: '-2 dahildir.' },
    { q: 'Tüm gerçek sayılar hangi aralıkla gösterilir?', opt: ['(0,∞)','(-∞,∞)','[0,∞)','(-∞,0]'], a: 1, e: 'R = (-∞,∞).' },
    { q: '[2,7) aralığında 2 dahil midir?', opt: ['Evet','Hayır','Yalnız 7 dahilse','Belirsiz'], a: 0, e: 'Köşeli parantez dahil eder.' },
    { q: '[2,7) aralığında 7 dahil midir?', opt: ['Evet','Hayır','Yalnız 2 dahil değilse','Belirsiz'], a: 1, e: 'Normal parantez dahil etmez.' },
    { q: '(−1,4] aralığında -1 dahil midir?', opt: ['Evet','Hayır','Her zaman','Sonsuzsa'], a: 1, e: 'Normal parantez dahil değildir.' },
    { q: '(−1,4] aralığında 4 dahil midir?', opt: ['Evet','Hayır','Belirsiz','Sadece tam sayıysa'], a: 0, e: 'Köşeli parantez dahil eder.' },
    { q: '[1,5] ∩ [3,8] nedir?', opt: ['[1,8]','[3,5]','(3,5)','[1,3]'], a: 1, e: 'Ortak kısım 3 ile 5 arasındadır ve ikisi de dahildir.' },
    { q: '[1,5] ∪ [3,8] nedir?', opt: ['[1,8]','[3,5]','(1,8)','[1,3]'], a: 0, e: 'Birleşim 1’den 8’e kadar gider.' },
    { q: '[1,5) ∩ (5,8] nedir?', opt: ['[1,8]','{5}','Boş küme','(5,8]'], a: 2, e: '5 iki aralıkta ortak değildir.' },
    { q: '[−4,8] aralığında uç noktalar dahil midir?', opt: ['İkisi de dahil','İkisi de değil','Sadece -4','Sadece 8'], a: 0, e: 'İki uçta köşeli parantez vardır.' },
    { q: '(2,6) aralığında uç noktalar dahil midir?', opt: ['İkisi de dahil','İkisi de değil','Sadece 2','Sadece 6'], a: 1, e: 'Normal parantez uçları dahil etmez.' },
    { q: 'Bir ucu kapalı, diğer ucu sonsuz olan aralık nasıl adlandırılır?', opt: ['Işın','Boş küme','Kapalı aralık','Nokta'], a: 0, e: 'Bu aralık ışın olarak adlandırılır.' },
    { q: 'Aralıkların kesişim ve birleşimini yaparken en kullanışlı gösterim hangisidir?', opt: ['Sayı doğrusu','Çarpım tablosu','Daire grafiği','Histogram'], a: 0, e: 'Aynı sayı doğrusu üzerinde göstermek kolaylık sağlar.' },
    { q: 'A = [-4,6), B = (2,8] ise A ∩ B nedir?', opt: ['[-4,8]','(2,6)','[-4,2]','[6,8]'], a: 1, e: 'Ortak kısım 2’den büyük ve 6’dan küçüktür.' },
    { q: 'A = [-4,6), B = (2,8] ise A ∪ B nedir?', opt: ['[-4,8]','(2,6)','[-4,2]','[6,8]'], a: 0, e: 'Birleşim -4’ten 8’e kadar gider; iki uç da dahildir.' },
    { q: 'A = [-4,6), B = (2,8] ise A / B nedir?', opt: ['[-4,2]','(2,6)','[6,8]','[-4,8]'], a: 0, e: 'A’da olup B’de olmayan kısım [-4,2] olur.' }
  ]
});

// 61-73. konular: olasılık ve fonksiyonlar.
// Her başlıkta özet kartları, çözümlü örnekler ve 25 soruluk quiz vardır.
extendTopicPractice(61, {
  summary: 'Basit olayların olasılığı, istenen durum / tüm durum oranı, tümleyen olay ve ayrık olay ilişkisi.',
  theory: {
    rules: [
      { title: 'Basit Olayın Olasılığı',
        formulaLines: ['P(A)=\\dfrac{s(A)}{s(E)}'],
        tipLines: ['E örnek uzay, A olay olmak üzere bir olayın olasılığı istenen durum sayısının tüm durum sayısına oranıdır.'] },
      { title: 'Olasılık Aralığı',
        formulaLines: ['0\\le P(A)\\le1'],
        tipLines: ['Olasılık 0 ile 1 arasındadır. İmkansız olayın olasılığı 0, kesin olayın olasılığı 1’dir.'] },
      { title: 'Tümleyen Olay',
        formulaLines: ['P(A^{\\prime})=1-P(A)'],
        tipLines: ['A olayının gerçekleşmeme olasılığı, 1’den A’nın olasılığı çıkarılarak bulunur.'] },
      { title: 'Ayrık Olaylar',
        formulaLines: ['A\\cap B=\\varnothing\\Rightarrow P(A\\cup B)=P(A)+P(B)'],
        tipLines: ['Aynı anda gerçekleşmeyen olaylara ayrık olaylar denir.'] },
      { title: 'Ayrık Olmayan Olaylar',
        formulaLines: ['P(A\\cup B)=P(A)+P(B)-P(A\\cap B)'],
        tipLines: ['Ortak durumlar iki kez sayıldığı için bir kez çıkarılır.'] }
    ],
    facts: ['Adil bir zar atıldığında örnek uzay 6 elemanlıdır.', 'Adil bir para atıldığında örnek uzay 2 elemanlıdır.', 'Bir olayın olasılığı kesir, ondalık sayı veya yüzde olarak yazılabilir.'],
    warning: 'Olasılık sorularında önce örnek uzayı doğru say; yanlış tüm durum sayısı bütün sonucu değiştirir.'
  },
  examples: [
    { question: 'Bir zar atıldığında 4 gelme olasılığı kaçtır?', steps: ['s(E)=6', 's(A)=1', 'P(A)=\\dfrac{1}{6}'], answer: '\\dfrac{1}{6}' },
    { question: 'Bir zar atıldığında çift sayı gelme olasılığı kaçtır?', steps: ['A=\\{2,4,6\\}', 's(A)=3,\\;s(E)=6', 'P(A)=\\dfrac{3}{6}=\\dfrac{1}{2}'], answer: '\\dfrac{1}{2}' },
    { question: 'Bir torbada 3 kırmızı, 5 mavi bilye vardır. Rastgele seçilen bilyenin kırmızı olma olasılığı kaçtır?', steps: ['s(E)=3+5=8', 's(A)=3', 'P(A)=\\dfrac{3}{8}'], answer: '\\dfrac{3}{8}' },
    { question: 'P(A)=\\dfrac{2}{5} ise A’nın gerçekleşmeme olasılığı kaçtır?', steps: ['P(A^{\\prime})=1-P(A)', '1-\\dfrac{2}{5}=\\dfrac{3}{5}'], answer: '\\dfrac{3}{5}' },
    { question: 'Bir zar atıldığında asal veya çift sayı gelme olasılığı kaçtır?', steps: ['Asal=\\{2,3,5\\}', 'Çift=\\{2,4,6\\}', 'Birleşim=\\{2,3,4,5,6\\}', 'P=\\dfrac{5}{6}'], answer: '\\dfrac{5}{6}' }
  ],
  quiz: quizRows([
    ['Olasılık hangi aralıktadır?', ['-1 ile 1','0 ile 1','1 ile 2','0 ile 10'], 1, 'Olasılık 0 ile 1 arasındadır.'],
    ['İmkansız olayın olasılığı kaçtır?', ['0','1','1/2','2'], 0, 'İmkansız olay gerçekleşmez.'],
    ['Kesin olayın olasılığı kaçtır?', ['0','1','1/2','-1'], 1, 'Kesin olay mutlaka gerçekleşir.'],
    ['P(A) formülü hangisidir?', ['s(E)/s(A)','s(A)/s(E)','s(A)+s(E)','s(A)-s(E)'], 1, 'İstenen durum / tüm durum.'],
    ['Bir para atıldığında yazı gelme olasılığı kaçtır?', ['1/4','1/3','1/2','1'], 2, 'İki çıktıdan biri yazıdır.'],
    ['Bir zar atıldığında 6 gelme olasılığı kaçtır?', ['1/2','1/3','1/6','5/6'], 2, '6 çıktının 1’i istenir.'],
    ['Bir zar atıldığında tek sayı gelme olasılığı kaçtır?', ['1/6','1/3','1/2','2/3'], 2, 'Tekler 1,3,5; 3/6=1/2.'],
    ['Bir zar atıldığında çift sayı gelme olasılığı kaçtır?', ['1/6','1/3','1/2','2/3'], 2, 'Çiftler 2,4,6; 3/6=1/2.'],
    ['Bir zar atıldığında asal sayı gelme olasılığı kaçtır?', ['1/6','1/3','1/2','2/3'], 2, 'Asal çıktılar 2,3,5.'],
    ['Bir zar atıldığında 7 gelme olasılığı kaçtır?', ['0','1/6','1/2','1'], 0, 'Zarda 7 yoktur.'],
    ['Bir zar atıldığında 1’den 6’ya kadar sayı gelme olasılığı kaçtır?', ['0','1/6','1/2','1'], 3, 'Kesin olaydır.'],
    ['P(A)=3/8 ise P(A′) kaçtır?', ['3/8','5/8','1/8','8/3'], 1, '1-3/8=5/8.'],
    ['P(A)=0,25 ise P(A′) kaçtır?', ['0,25','0,50','0,75','1'], 2, '1-0,25=0,75.'],
    ['A ve B ayrık ise A∩B nedir?', ['E','A','B','∅'], 3, 'Ayrık olayların ortak elemanı yoktur.'],
    ['Ayrık olaylarda P(A∪B) nedir?', ['P(A)+P(B)','P(A)P(B)','P(A)-P(B)','P(A)/P(B)'], 0, 'Ortak durum yoksa olasılıklar toplanır.'],
    ['Ayrık olmayan olaylarda hangi terim çıkarılır?', ['P(A∩B)','P(A∪B)','P(E)','1'], 0, 'Ortak kısım iki kez sayılır.'],
    ['Torba 2 kırmızı 3 mavi ise kırmızı olasılığı kaçtır?', ['2/5','3/5','1/2','1/3'], 0, 'Toplam 5, kırmızı 2.'],
    ['Torba 4 sarı 6 yeşil ise yeşil olasılığı kaçtır?', ['2/5','3/5','4/10','1/6'], 1, '6/10=3/5.'],
    ['10 karttan 3’ü seçiliyse seçili kart gelme olasılığı kaçtır?', ['3/10','7/10','1/3','10/3'], 0, 'İstenen 3, tüm durum 10.'],
    ['Bir zar atıldığında 3’ten büyük sayı gelme olasılığı kaçtır?', ['1/3','1/2','2/3','5/6'], 1, '4,5,6; 3/6=1/2.'],
    ['Bir zar atıldığında 3’ten küçük sayı gelme olasılığı kaçtır?', ['1/6','1/3','1/2','2/3'], 1, '1,2; 2/6=1/3.'],
    ['İki para atıldığında örnek uzay kaç elemanlıdır?', ['2','3','4','6'], 2, '2²=4.'],
    ['İki zar atıldığında örnek uzay kaç elemanlıdır?', ['6','12','18','36'], 3, '6²=36.'],
    ['Olasılığı 1’den büyük çıkan bir sonuç için ne söylenir?', ['Doğrudur','Yanlıştır','Kesin olaydır','Ayrık olaydır'], 1, 'Olasılık 1’i aşamaz.'],
    ['Bir olayın olmama olasılığı neyle bulunur?', ['P(A)+1','1-P(A)','P(A)-1','P(A)²'], 1, 'Tümleyen olasılık 1-P(A).']
  ])
});

extendTopicPractice(62, {
  summary: 'Fonksiyonun tanımı, tanım kümesi, değer kümesi, görüntü kümesi ve fonksiyon olma koşulu.',
  theory: {
    rules: [
      { title: 'Fonksiyon',
        formulaLines: ['f:A\\to B'],
        tipLines: ['A kümesindeki her elemanı B kümesindeki yalnız bir elemanla eşleyen bağıntıya fonksiyon denir.'] },
      { title: 'Tanım ve Değer Kümesi',
        formulaLines: ['A:\\text{ tanım kümesi}', 'B:\\text{ değer kümesi}'],
        tipLines: ['Fonksiyonun başladığı küme tanım kümesi, gittiği küme değer kümesidir.'] },
      { title: 'Görüntü Kümesi',
        formulaLines: ['f(A)=\\{f(x)\\mid x\\in A\\}'],
        tipLines: ['Tanım kümesindeki elemanların eşlendiği değerlerin oluşturduğu kümeye görüntü kümesi denir.'] },
      { title: 'Fonksiyon Olma Koşulu',
        tipLines: ['Tanım kümesinde açıkta eleman kalmaz.', 'Tanım kümesindeki bir eleman iki farklı değere gidemez.'] }
    ],
    facts: ['Değer kümesinde açıkta eleman kalabilir.', 'Her fonksiyon bir bağıntıdır ama her bağıntı fonksiyon değildir.', 'f(x) ifadesi x’in fonksiyon altındaki görüntüsüdür.'],
    warning: 'Bir x değerinin iki farklı y değerine gitmesi fonksiyon olma şartını bozar.'
  },
  examples: [
    { question: 'f(x)=2x+3 ise f(4) kaçtır?', steps: ['f(4)=2\\cdot4+3', 'f(4)=11'], answer: '11' },
    { question: 'f(x)=x²-1 ise f(-3) kaçtır?', steps: ['f(-3)=(-3)^2-1', '9-1=8'], answer: '8' },
    { question: 'A={1,2,3}, f(x)=x+2 ise görüntü kümesini bulunuz.', steps: ['f(1)=3', 'f(2)=4', 'f(3)=5'], answer: '\\{3,4,5\\}' },
    { question: 'Bir bağıntıda x=2 hem 5’e hem 7’ye gidiyorsa fonksiyon mudur?', steps: [{ text: 'Tanım kümesindeki bir elemanın yalnız bir görüntüsü olmalıdır.' }], answer: 'Fonksiyon değildir.' },
    { question: 'f:A→B için A={a,b} ve f(a)=1, f(b)=1 ise fonksiyon mudur?', steps: [{ text: 'İki farklı eleman aynı değere gidebilir.' }, { text: 'Her elemanın tek görüntüsü olduğu için fonksiyondur.' }], answer: 'Fonksiyondur.' }
  ],
  quiz: quizRows([
    ['Fonksiyon gösterimi hangisidir?', ['f:A→B','A+B','A/B','A∩B'], 0, 'Fonksiyon f:A→B biçiminde gösterilir.'],
    ['f:A→B ifadesinde A nedir?', ['Değer kümesi','Tanım kümesi','Görüntü kümesi','Boş küme'], 1, 'A tanım kümesidir.'],
    ['f:A→B ifadesinde B nedir?', ['Değer kümesi','Tanım kümesi','Görüntü kümesi','Eleman'], 0, 'B değer kümesidir.'],
    ['Fonksiyonda tanım kümesinde açıkta eleman kalabilir mi?', ['Evet','Hayır','Sadece örten ise','Sadece sabit ise'], 1, 'Her tanım elemanının görüntüsü olmalıdır.'],
    ['Bir x iki farklı y’ye gidiyorsa bağıntı nedir?', ['Fonksiyondur','Fonksiyon değildir','Örtendir','Sabittir'], 1, 'Tek görüntü şartı bozulur.'],
    ['İki farklı x aynı y’ye gidebilir mi?', ['Evet','Hayır','Asla','Sadece boşsa'], 0, 'Bu durum fonksiyon olmayı bozmaz.'],
    ['f(x)=3x ise f(2) kaçtır?', ['3','5','6','9'], 2, '3·2=6.'],
    ['f(x)=x+5 ise f(4) kaçtır?', ['4','5','9','20'], 2, '4+5=9.'],
    ['f(x)=2x-1 ise f(3) kaçtır?', ['3','5','6','7'], 1, '6-1=5.'],
    ['f(x)=x² ise f(-4) kaçtır?', ['-16','-8','8','16'], 3, '(-4)²=16.'],
    ['f(x)=x²+1 ise f(2) kaçtır?', ['3','4','5','6'], 2, '4+1=5.'],
    ['f(x)=5 ise f(10) kaçtır?', ['5','10','15','50'], 0, 'Sabit fonksiyonda her x için değer 5’tir.'],
    ['Görüntü kümesi hangi değerlerden oluşur?', ['Tanım elemanlarından','Elde edilen f(x) değerlerinden','Sadece B dışından','Boş elemanlardan'], 1, 'Görüntü kümesi çıkan değerlerdir.'],
    ['Her fonksiyon aynı zamanda nedir?', ['Bağıntı','Sayı','Denklem','Olasılık'], 0, 'Fonksiyon özel bir bağıntıdır.'],
    ['Her bağıntı fonksiyon mudur?', ['Evet','Hayır','Sadece sonluysa','Sadece birebirse'], 1, 'Fonksiyon olma şartları vardır.'],
    ['A={1,2}, f(x)=2x ise görüntü kümesi nedir?', ['{1,2}','{2,4}','{3,4}','{4,6}'], 1, 'f(1)=2, f(2)=4.'],
    ['A={0,1,2}, f(x)=x+1 ise görüntü kümesi nedir?', ['{0,1,2}','{1,2,3}','{2,3,4}','{1,3}'], 1, '1,2,3 elde edilir.'],
    ['f(0) ifadesi neyi gösterir?', ['0’ın görüntüsünü','Fonksiyonun adını','Değer kümesini','Tanımsızlığı'], 0, 'x=0 için fonksiyon değeri.'],
    ['f(x)=4x+1 ise f(0) kaçtır?', ['0','1','4','5'], 1, '4·0+1=1.'],
    ['f(x)=x-7 ise f(9) kaçtır?', ['1','2','7','16'], 1, '9-7=2.'],
    ['A’daki her eleman B’de kaç elemana gitmelidir?', ['0','1','2','İstediği kadar'], 1, 'Yalnız bir görüntüsü olmalıdır.'],
    ['Değer kümesinde açıkta eleman kalması fonksiyonu bozar mı?', ['Evet','Hayır','Her zaman','Sadece sonluysa'], 1, 'Değer kümesinde kullanılmayan eleman olabilir.'],
    ['f(x)=2x+3 için f(1) kaçtır?', ['2','3','5','6'], 2, '2+3=5.'],
    ['f(x)=x²-4 için f(0) kaçtır?', ['-4','0','4','16'], 0, '0-4=-4.'],
    ['Fonksiyonun çıktıları hangi kümenin alt kümesidir?', ['Tanım kümesi','Görüntü kümesi','Boş küme','Örnek uzay'], 1, 'Çıktılar görüntü kümesini oluşturur.']
  ])
});

extendTopicPractice(63, {
  summary: 'Fonksiyon sorularında tanım kümesi, payda, kök içi, verilen değer ve işlem önceliği dikkatleri.',
  theory: {
    rules: [
      { title: 'Payda Sıfır Olamaz',
        formulaLines: ['\\dfrac{1}{g(x)}\\Rightarrow g(x)\\neq0'],
        tipLines: ['Rasyonel ifadeli fonksiyonlarda paydayı sıfır yapan değerler tanım kümesine alınmaz.'] },
      { title: 'Çift Dereceli Kök İçinde Negatif Olamaz',
        formulaLines: ['\\sqrt{g(x)}\\Rightarrow g(x)\\ge0'],
        tipLines: ['Gerçek sayılarda karekök içi sıfır veya pozitif olmalıdır.'] },
      { title: 'Verilen Değeri Yerine Yazma',
        tipLines: ['f(a) isteniyorsa fonksiyonda x görülen her yere a yazılır.'] },
      { title: 'Paranteze Dikkat',
        tipLines: ['f(x+1) isteniyorsa x yerine x+1 yazılır; sadece sonuna +1 eklenmez.'] }
    ],
    facts: ['Tanım kümesi sorularında kısıt oluşturan ifadeler bulunur.', 'Kök ve payda aynı anda varsa koşullar birlikte sağlanır.', 'f(f(x)) gibi ifadelerde önce içteki fonksiyon değeri hesaplanır.'],
    warning: 'f(x+1) ile f(x)+1 aynı şey değildir; yerine yazma işlemini parantezle yap.'
  },
  examples: [
    { question: 'f(x)=1/(x-3) fonksiyonunda x hangi değeri alamaz?', steps: ['x-3\\neq0', 'x\\neq3'], answer: '3' },
    { question: 'f(x)=√(x-2) için tanım koşulu nedir?', steps: ['x-2\\ge0', 'x\\ge2'], answer: '[2,\\infty)' },
    { question: 'f(x)=x²+2x ise f(x+1) nedir?', steps: ['(x+1)^2+2(x+1)', 'x^2+2x+1+2x+2'], answer: 'x^2+4x+3' },
    { question: 'f(x)=2x-1 ise f(f(3)) kaçtır?', steps: ['f(3)=2\\cdot3-1=5', 'f(5)=2\\cdot5-1=9'], answer: '9' },
    { question: 'f(x)=3x+a ve f(2)=10 ise a kaçtır?', steps: ['3\\cdot2+a=10', '6+a=10', 'a=4'], answer: '4' }
  ],
  quiz: quizRows([
    ['f(x)=1/(x-2) için x hangi değeri alamaz?', ['0','1','2','3'], 2, 'Payda x-2 sıfır olamaz.'],
    ['f(x)=1/(x+5) için x hangi değeri alamaz?', ['-5','0','5','1'], 0, 'x+5≠0, x≠-5.'],
    ['f(x)=√(x-4) için koşul nedir?', ['x<4','x≤4','x≥4','x≠4'], 2, 'Kök içi x-4≥0.'],
    ['f(x)=√(2x+6) için koşul nedir?', ['x≥-3','x≤-3','x≠-3','x>3'], 0, '2x+6≥0.'],
    ['f(x)=x+2 ise f(x+3) nedir?', ['x+2','x+3','x+5','2x+3'], 2, 'x yerine x+3 yazılır.'],
    ['f(x)=2x ise f(x+1) nedir?', ['2x+1','2x+2','x+2','2x'], 1, '2(x+1)=2x+2.'],
    ['f(x)=x² ise f(x+1) nedir?', ['x²+1','x²+2x+1','x²+x','2x+1'], 1, '(x+1)².'],
    ['f(x)=3x-2 ise f(4) kaçtır?', ['8','9','10','12'], 2, '12-2=10.'],
    ['f(x)=x²-1 ise f(3) kaçtır?', ['6','7','8','9'], 2, '9-1=8.'],
    ['f(x)=2x+1 ise f(f(1)) kaçtır?', ['3','5','7','9'], 2, 'f(1)=3, f(3)=7.'],
    ['f(x)=x-4 ise f(f(10)) kaçtır?', ['0','2','4','6'], 1, 'f(10)=6, f(6)=2.'],
    ['f(x)=ax+1 ve f(2)=7 ise a kaçtır?', ['2','3','4','5'], 1, '2a+1=7.'],
    ['f(x)=3x+a ve f(1)=8 ise a kaçtır?', ['3','4','5','6'], 2, '3+a=8.'],
    ['f(x)=1/(x²-9) için x hangi değerleri alamaz?', ['0 ve 3','-3 ve 3','-9 ve 9','Sadece 3'], 1, 'x²-9=0, x=±3.'],
    ['f(x)=√(5-x) için koşul nedir?', ['x≥5','x≤5','x≠5','x>5'], 1, '5-x≥0.'],
    ['Payda için temel kural nedir?', ['Sıfır olabilir','Sıfır olamaz','Negatif olamaz','Pozitif olamaz'], 1, 'Payda sıfır olamaz.'],
    ['Karekök içi gerçek sayılarda nasıl olmalıdır?', ['Negatif','Sıfırdan küçük','Sıfır veya pozitif','Daima 1'], 2, 'Çift dereceli kökte iç ≥0.'],
    ['f(x+1) hesabında ne yapılır?', ['x yerine x+1 yazılır','Sonuca 1 eklenir','x silinir','Fonksiyon terslenir'], 0, 'Yerine yazma yapılır.'],
    ['f(x)=x²+x ise f(2) kaçtır?', ['4','5','6','8'], 2, '4+2=6.'],
    ['f(x)=2x² ise f(-3) kaçtır?', ['-18','-6','6','18'], 3, '2·9=18.'],
    ['f(x)=x/2 ise f(10) kaçtır?', ['2','5','10','20'], 1, '10/2=5.'],
    ['f(x)=4 ise f(100) kaçtır?', ['4','100','104','400'], 0, 'Sabit fonksiyon.'],
    ['f(x)=x+a ve f(5)=12 ise a kaçtır?', ['5','6','7','8'], 2, '5+a=12.'],
    ['f(x)=ax ve f(3)=15 ise a kaçtır?', ['3','4','5','6'], 2, '3a=15.'],
    ['f(f(x)) işleminde önce hangisi yapılır?', ['Dıştaki f','İçteki f','Toplama','Türev'], 1, 'Önce içteki fonksiyon değeri bulunur.']
  ])
});

extendTopicPractice(64, {
  summary: 'Fonksiyon sorularında denklem kurma, parametre bulma, tanım-görüntü ilişkisi ve tablo/grafik okumaya dair detaylar.',
  theory: {
    rules: [
      { title: 'Parametre Bulma',
        tipLines: ['Verilen f(a) değeri fonksiyonda yerine yazılır ve bilinmeyen katsayı bulunur.'] },
      { title: 'Görüntüden Eleman Bulma',
        formulaLines: ['f(x)=y'],
        tipLines: ['Belirli bir görüntüyü veren x değeri isteniyorsa fonksiyon denklemi çözülür.'] },
      { title: 'Tablodan Fonksiyon Okuma',
        tipLines: ['Tabloda her x değerinin karşısındaki y değeri o x’in görüntüsüdür.'] },
      { title: 'Grafikten Fonksiyon Okuma',
        tipLines: ['x değeri grafikte bulunur, eğri veya doğru üzerindeki y değeri okunur.'] }
    ],
    facts: ['Fonksiyon sorularında istenen değer bazen x değil f(x) olabilir.', 'Parametreli fonksiyonlarda verilen koşul denklem kurdurur.', 'Tablo ve grafik sorularında aynı x için iki y değeri olmamalıdır.'],
    warning: 'f(a)=b verildiğinde a giriş, b çıkıştır; bu ikisini karıştırma.'
  },
  examples: [
    { question: 'f(x)=ax-2 ve f(4)=10 ise a kaçtır?', steps: ['4a-2=10', '4a=12', 'a=3'], answer: '3' },
    { question: 'f(x)=2x+5 için f(x)=17 ise x kaçtır?', steps: ['2x+5=17', '2x=12', 'x=6'], answer: '6' },
    { question: 'f(x)=x²+1 için f(x)=10 denkleminin gerçek çözümlerini bulunuz.', steps: ['x^2+1=10', 'x^2=9', 'x=3\\;\\text{veya}\\;x=-3'], answer: '\\{-3,3\\}' },
    { question: 'f(1)=4, f(2)=7, f(3)=10 ise f(2) kaçtır?', steps: [{ text: 'Tabloda x=2 için karşılık gelen değer 7’dir.' }], answer: '7' },
    { question: 'f(x)=3x-1 için f(a)=f(2) ise a kaçtır?', steps: ['3a-1=3\\cdot2-1', '3a-1=5', 'a=2'], answer: '2' }
  ],
  quiz: quizRows([
    ['f(x)=ax+1, f(2)=9 ise a kaçtır?', ['2','3','4','5'], 2, '2a+1=9.'],
    ['f(x)=ax-3, f(5)=12 ise a kaçtır?', ['2','3','4','5'], 1, '5a-3=12.'],
    ['f(x)=2x+b, f(3)=11 ise b kaçtır?', ['3','4','5','6'], 2, '6+b=11.'],
    ['f(x)=x+b, f(7)=2 ise b kaçtır?', ['-5','-3','3','5'], 0, '7+b=2.'],
    ['f(x)=2x+5, f(x)=15 ise x kaçtır?', ['3','4','5','6'], 2, '2x=10.'],
    ['f(x)=3x-4, f(x)=8 ise x kaçtır?', ['2','3','4','5'], 2, '3x=12.'],
    ['f(x)=x², f(x)=16 ise x hangisi olabilir?', ['4','5','8','16'], 0, 'x=±4.'],
    ['f(x)=x²+2, f(x)=11 ise x² kaçtır?', ['7','8','9','11'], 2, 'x²=9.'],
    ['f(1)=3, f(2)=5 ise f(1) kaçtır?', ['1','2','3','5'], 2, 'Tablodan okunur.'],
    ['f(1)=3, f(2)=5 ise f(2) kaçtır?', ['1','2','3','5'], 3, 'x=2 için değer 5.'],
    ['f(x)=4x ve f(a)=20 ise a kaçtır?', ['4','5','6','8'], 1, '4a=20.'],
    ['f(x)=x/3 ve f(a)=4 ise a kaçtır?', ['1','4','7','12'], 3, 'a/3=4.'],
    ['f(x)=x-8 ve f(a)=0 ise a kaçtır?', ['0','4','8','16'], 2, 'a-8=0.'],
    ['f(x)=5-x ve f(a)=1 ise a kaçtır?', ['1','2','4','5'], 2, '5-a=1.'],
    ['f(x)=2x+1 için f(a)=f(4) ise a kaçtır?', ['1','2','3','4'], 3, '2a+1=9.'],
    ['f(x)=x² için f(a)=f(3) ise a aşağıdakilerden hangisi olabilir?', ['-3','-2','2','4'], 0, 'a²=9.'],
    ['Bir tabloda aynı x iki farklı y’ye sahipse ne olur?', ['Fonksiyondur','Fonksiyon değildir','Birebirdir','Sabit olur'], 1, 'Tek görüntü şartı bozulur.'],
    ['Grafikte bir düşey doğru eğriyi iki noktada kesiyorsa ilişki nedir?', ['Fonksiyon değildir','Kesin fonksiyondur','Örtendir','Sabittir'], 0, 'Düşey doğru testi başarısızdır.'],
    ['f(a)=b ifadesinde a neyi temsil eder?', ['Çıkış','Giriş','Değer kümesi','Katsayı'], 1, 'a giriş değeridir.'],
    ['f(a)=b ifadesinde b neyi temsil eder?', ['Giriş','Çıkış','Tanım kümesi','Payda'], 1, 'b fonksiyon değeridir.'],
    ['f(x)=3x+2 için f(0) kaçtır?', ['0','2','3','5'], 1, '3·0+2=2.'],
    ['f(x)=3x+2 için f(1) kaçtır?', ['2','3','5','6'], 2, '3+2=5.'],
    ['f(x)=x²-5 için f(3) kaçtır?', ['3','4','5','9'], 1, '9-5=4.'],
    ['f(x)=2x² için f(2) kaçtır?', ['4','6','8','16'], 2, '2·4=8.'],
    ['Fonksiyon detay sorularında ilk adım genellikle nedir?', ['İstenen değeri doğru okumak','Rastgele çarpmak','Payda silmek','Grafiği atlamak'], 0, 'Giriş ve çıkış ayrımı önemlidir.']
  ])
});

extendTopicPractice(65, {
  summary: 'İçine, örten, birebir ve eşit fonksiyon kavramları.',
  theory: {
    rules: [
      { title: 'İçine Fonksiyon',
        tipLines: ['Görüntü kümesi değer kümesinin öz alt kümesi ise fonksiyon içine fonksiyondur. Değer kümesinde açıkta eleman vardır.'] },
      { title: 'Örten Fonksiyon',
        formulaLines: ['f(A)=B'],
        tipLines: ['Görüntü kümesi değer kümesine eşitse fonksiyon örtendir.'] },
      { title: 'Birebir Fonksiyon',
        formulaLines: ['x_1\\neq x_2\\Rightarrow f(x_1)\\neq f(x_2)'],
        tipLines: ['Tanım kümesindeki farklı elemanların görüntüleri farklıysa fonksiyon birebirdir.'] },
      { title: 'Eşit Fonksiyonlar',
        tipLines: ['Tanım kümeleri aynı ve her x için fonksiyon değerleri aynı olan fonksiyonlar eşittir.'] }
    ],
    facts: ['Birebir fonksiyonda aynı görüntüye iki farklı eleman gitmez.', 'Örten fonksiyonda değer kümesinde açıkta eleman kalmaz.', 'Bir fonksiyon hem birebir hem örten olabilir.'],
    warning: 'Örtenlik değer kümesine göre karar verilir; değer kümesi değişirse örtenlik de değişebilir.'
  },
  examples: [
    { question: 'A={1,2}, B={a,b,c}, f(1)=a, f(2)=b ise f içine midir?', steps: [{ text: 'B’de c açıkta kalır.' }, { text: 'Görüntü kümesi B’ye eşit değildir.' }], answer: 'İçine fonksiyondur.' },
    { question: 'A={1,2,3}, B={a,b,c}, görüntü kümesi {a,b,c} ise fonksiyon nasıldır?', steps: [{ text: 'Görüntü kümesi değer kümesine eşittir.' }], answer: 'Örtendir.' },
    { question: 'f(x)=2x+1 gerçek sayılarda birebir midir?', steps: ['f(x_1)=f(x_2)', '2x_1+1=2x_2+1', 'x_1=x_2'], answer: 'Birebirdir.' },
    { question: 'f(x)=x² gerçek sayılarda birebir midir?', steps: ['f(2)=4', 'f(-2)=4', { text: 'Farklı iki giriş aynı çıkışı verdi.' }], answer: 'Birebir değildir.' },
    { question: 'f(x)=2x ve g(x)=x+x aynı tanım kümesinde eşit midir?', steps: ['g(x)=x+x=2x', 'f(x)=g(x)'], answer: 'Eşittir.' }
  ],
  quiz: quizRows([
    ['Görüntü kümesi değer kümesine eşitse fonksiyon nedir?', ['İçine','Örten','Sabit','Tek'], 1, 'Örtenlik f(A)=B demektir.'],
    ['Değer kümesinde açıkta eleman varsa fonksiyon nedir?', ['İçine','Örten','Birim','Eşit'], 0, 'Görüntü değer kümesinin öz alt kümesidir.'],
    ['Farklı girişler farklı çıkışlara gidiyorsa fonksiyon nedir?', ['Birebir','Sabit','İçine','Parçalı'], 0, 'Birebir tanımıdır.'],
    ['İki fonksiyonun eşit olması için hangisi gerekir?', ['Tanım kümeleri aynı olmalı','Sadece adları aynı olmalı','Grafikleri farklı olmalı','Biri sabit olmalı'], 0, 'Tanım kümeleri ve değerleri aynı olmalıdır.'],
    ['f(x)=x gerçek sayılarda birebir midir?', ['Evet','Hayır','Sadece içine','Tanımsız'], 0, 'Farklı x farklı değer verir.'],
    ['f(x)=5 sabit fonksiyonu birebir midir?', ['Evet','Hayır','Her zaman','Sadece tek elemanda'], 1, 'Birden çok x aynı değere gider.'],
    ['f(x)=x² gerçek sayılarda birebir midir?', ['Evet','Hayır','Sadece pozitifte hayır','Daima örten'], 1, '2 ve -2 aynı görüntüyü verir.'],
    ['f(x)=2x+3 gerçek sayılarda birebir midir?', ['Evet','Hayır','Sabit','Tanımsız'], 0, 'Doğrusal ve eğimi sıfır değil.'],
    ['A={1,2}, B={a,b}, f(1)=a, f(2)=b ise örten midir?', ['Evet','Hayır','Sadece içine','Belirsiz'], 0, 'B’nin tüm elemanları kullanılmış.'],
    ['A={1,2}, B={a,b,c}, f(1)=a, f(2)=b ise örten midir?', ['Evet','Hayır','Birebir değil','Eşit'], 1, 'c açıkta kalır.'],
    ['A={1,2}, B={a,b,c}, f(1)=a, f(2)=b birebir midir?', ['Evet','Hayır','Örten','Sabit'], 0, 'Farklı girişler farklı çıkışlara gider.'],
    ['A={1,2}, f(1)=a, f(2)=a birebir midir?', ['Evet','Hayır','Örten','Birim'], 1, 'İki farklı giriş aynı çıkışta.'],
    ['Örten fonksiyonda görüntü kümesi neye eşittir?', ['Tanım kümesine','Değer kümesine','Boş kümeye','Bir elemana'], 1, 'f(A)=B.'],
    ['İçine fonksiyonda görüntü kümesi değer kümesinin nesi olur?', ['Öz alt kümesi','Tamamı','Dışında','Tersi'], 0, 'Değer kümesinde açıkta eleman vardır.'],
    ['Birebirlik hangi kümeyle ilgilidir?', ['Farklı girişlerin farklı görüntüleri','Sadece değer kümesi adı','Sadece boş küme','Sadece sabitlik'], 0, 'Aynı görüntüye iki giriş gitmez.'],
    ['f(x)=x+1 ve g(x)=1+x aynı tanımda eşit midir?', ['Evet','Hayır','Sadece x=0','Tanımsız'], 0, 'Toplama değişme özelliği.'],
    ['f(x)=x² ve g(x)=x aynı tanımda eşit midir?', ['Evet','Hayır','Sadece adları farklı','Daima eşit'], 1, 'Her x için aynı değer vermez.'],
    ['Hem birebir hem örten fonksiyona ne denir?', ['Birebir örten','Sabit','Parçalı','İçine'], 0, 'İki özellik birlikte sağlanır.'],
    ['Örten olmayan fonksiyon mutlaka birebir değildir denebilir mi?', ['Evet','Hayır','Daima','Sadece sonlu'], 1, 'Örten olmamak birebirliği bozmak zorunda değildir.'],
    ['Birebir olmayan fonksiyonda ne vardır?', ['İki farklı giriş aynı çıkışa gider','Hiç giriş yoktur','Her çıkış kullanılır','Tanım kümesi boştur'], 0, 'Birebirlik bozulur.'],
    ['A={1}, B={a,b}, f(1)=a fonksiyonu içine midir?', ['Evet','Hayır','Örten','Eşit'], 0, 'b açıkta kalır.'],
    ['A={1}, B={a}, f(1)=a fonksiyonu örten midir?', ['Evet','Hayır','İçine','Sabit değil'], 0, 'B tamamen kullanılır.'],
    ['f(x)=3x gerçek sayılarda örten midir?', ['Evet','Hayır','Sadece içine','Sabit'], 0, 'Her gerçek y için x=y/3 vardır.'],
    ['f(x)=x² gerçek sayılardan gerçek sayılara örten midir?', ['Evet','Hayır','Birebir','Sabit'], 1, 'Negatif değerler görüntü olamaz.'],
    ['Eşit fonksiyonlarda her x için hangi şart vardır?', ['f(x)=g(x)','f(x)>g(x)','f(x)<g(x)','f(x)≠g(x)'], 0, 'Her girişte değerler aynı olmalıdır.']
  ])
});

extendTopicPractice(66, {
  summary: 'Birim fonksiyon ve sabit fonksiyonun tanımı, grafiği ve temel özellikleri.',
  theory: {
    rules: [
      { title: 'Birim Fonksiyon',
        formulaLines: ['f(x)=x'],
        tipLines: ['Tanım kümesindeki her elemanı kendisine eşleyen fonksiyona birim fonksiyon denir.'] },
      { title: 'Sabit Fonksiyon',
        formulaLines: ['f(x)=c'],
        tipLines: ['Tanım kümesindeki her elemanı aynı c sayısına eşleyen fonksiyona sabit fonksiyon denir.'] },
      { title: 'Birim Fonksiyon Grafiği',
        formulaLines: ['y=x'],
        tipLines: ['Birim fonksiyonun grafiği orijinden geçen ve eğimi 1 olan doğrudur.'] },
      { title: 'Sabit Fonksiyon Grafiği',
        formulaLines: ['y=c'],
        tipLines: ['Sabit fonksiyonun grafiği x eksenine paralel doğrudur.'] }
    ],
    facts: ['Birim fonksiyonda giriş ve çıkış aynıdır.', 'Sabit fonksiyonda bütün girişler aynı çıkışa gider.', 'Sabit fonksiyon genellikle birebir değildir.'],
    warning: 'f(x)=x+c birim fonksiyon değildir; birim fonksiyonda tam olarak f(x)=x olmalıdır.'
  },
  examples: [
    { question: 'f(x)=x ise f(7) kaçtır?', steps: ['f(7)=7'], answer: '7' },
    { question: 'f(x)=5 ise f(-100) kaçtır?', steps: [{ text: 'Sabit fonksiyonda her giriş aynı değere gider.' }], answer: '5' },
    { question: 'f(x)=(a-2)x+3 birim fonksiyon olabilir mi?', steps: [{ text: 'Birim fonksiyonda sabit terim 0 olmalıdır.' }, { text: 'Burada sabit terim 3 olduğu için olamaz.' }], answer: 'Olamaz.' },
    { question: 'f(x)=(a+1)x ise birim fonksiyon olması için a kaçtır?', steps: ['a+1=1', 'a=0'], answer: '0' },
    { question: 'f(x)=(m-3)x+8 sabit fonksiyon ise m kaçtır?', steps: [{ text: 'Sabit fonksiyonda x’in katsayısı 0 olmalıdır.' }, 'm-3=0', 'm=3'], answer: '3' }
  ],
  quiz: quizRows([
    ['Birim fonksiyon hangisidir?', ['f(x)=x','f(x)=5','f(x)=x+1','f(x)=0'], 0, 'Birim fonksiyon f(x)=x.'],
    ['Sabit fonksiyon hangisidir?', ['f(x)=x','f(x)=2x','f(x)=7','f(x)=x²'], 2, 'Her x için aynı değer.'],
    ['Birim fonksiyonda f(4) kaçtır?', ['0','1','4','8'], 2, 'f(x)=x.'],
    ['Birim fonksiyonda f(-3) kaçtır?', ['-3','0','3','6'], 0, 'Giriş aynen çıkar.'],
    ['f(x)=6 sabit fonksiyonunda f(2) kaçtır?', ['2','4','6','8'], 2, 'Her x için 6.'],
    ['f(x)=6 sabit fonksiyonunda f(-10) kaçtır?', ['-10','0','6','10'], 2, 'Her x için 6.'],
    ['Birim fonksiyon grafiği nedir?', ['y=x','y=0','x=0','y=c'], 0, 'Birim fonksiyon y=x.'],
    ['Sabit fonksiyon grafiği hangi eksene paraleldir?', ['x ekseni','y ekseni','İkisine de','Hiçbirine'], 0, 'y=c doğrusu x eksenine paraleldir.'],
    ['f(x)=x+1 birim fonksiyon mudur?', ['Evet','Hayır','Sabit','Tanımsız'], 1, 'Birim için f(x)=x olmalı.'],
    ['f(x)=0 sabit fonksiyon mudur?', ['Evet','Hayır','Birim','Örten'], 0, 'Her x için 0.'],
    ['f(x)=ax birim ise a kaçtır?', ['0','1','2','-1'], 1, 'ax=x için a=1.'],
    ['f(x)=(a-2)x birim ise a kaçtır?', ['1','2','3','4'], 2, 'a-2=1.'],
    ['f(x)=(m+4)x+2 sabit ise m kaçtır?', ['-4','-2','0','4'], 0, 'm+4=0.'],
    ['Sabit fonksiyonda x’in katsayısı kaçtır?', ['0','1','2','c'], 0, 'x’e bağlılık yoktur.'],
    ['Birim fonksiyon genellikle birebir midir?', ['Evet','Hayır','Asla','Sadece sabit'], 0, 'Farklı x farklı x verir.'],
    ['Sabit fonksiyon genellikle birebir midir?', ['Evet','Hayır','Daima','Sadece tek elemanda evet'], 1, 'Birden çok giriş aynı çıkışa gider.'],
    ['f(x)=3x birim olması için ne gerekir?', ['3=1 olmalı','x=0 olmalı','3=0 olmalı','Fonksiyon sabit olmalı'], 0, 'Katsayı 1 olmalı; burada değildir.'],
    ['f(x)=x sabit midir?', ['Evet','Hayır','Her zaman','Sadece x=0'], 1, 'Çıkış x’e göre değişir.'],
    ['f(x)=9 için f(a) kaçtır?', ['a','9','a+9','0'], 1, 'Sabit değer 9.'],
    ['f(x)=x için f(a) kaçtır?', ['a','1','0','a²'], 0, 'Birim fonksiyon.'],
    ['y=4 doğrusu hangi fonksiyon tipidir?', ['Birim','Sabit','Tek','Parçalı'], 1, 'y sabit 4.'],
    ['y=x doğrusu hangi fonksiyon tipidir?', ['Birim','Sabit','Çift','Örten değil'], 0, 'Birim fonksiyon.'],
    ['f(x)=c ifadesinde c neyi gösterir?', ['Sabit değeri','Tanım kümesini','Tersi','Kökü'], 0, 'Çıkış hep c’dir.'],
    ['f(x)=x fonksiyonunda giriş 12 ise çıkış nedir?', ['0','1','6','12'], 3, 'Aynı değer çıkar.'],
    ['f(x)=2 sabit fonksiyonunda görüntü kümesi kaç elemanlıdır?', ['0','1','2','Sonsuz'], 1, 'Yalnız {2}.']
  ])
});

extendTopicPractice(67, {
  summary: 'Doğrusal fonksiyon, eğim, sabit terim ve parçalı fonksiyonlarda aralığa göre işlem.',
  theory: {
    rules: [
      { title: 'Doğrusal Fonksiyon',
        formulaLines: ['f(x)=ax+b'],
        tipLines: ['a ve b gerçek sayı olmak üzere f(x)=ax+b biçimindeki fonksiyonlara doğrusal fonksiyon denir.'] },
      { title: 'Eğim ve Sabit Terim',
        formulaLines: ['a:\\text{ eğim}', 'b:\\text{ y eksenini kesen değer}'],
        tipLines: ['a katsayısı doğrunun eğimini, b değeri x=0 için fonksiyon değerini verir.'] },
      { title: 'Parçalı Fonksiyon',
        tipLines: ['Tanım kümesinin farklı aralıklarında farklı kurallarla tanımlanan fonksiyondur.'] },
      { title: 'Parçalı Fonksiyonda Değer Bulma',
        tipLines: ['Verilen x değeri hangi aralıkta ise o aralığın kuralı kullanılır.'] }
    ],
    facts: ['Doğrusal fonksiyon grafiği doğrudur.', 'Eğim pozitifse doğru artan, negatifse azalan görünür.', 'Parçalı fonksiyonlarda sınır noktalarındaki eşitlik işaretine dikkat edilir.'],
    warning: 'Parçalı fonksiyonda yanlış aralığın kuralını kullanmak en sık yapılan hatadır.'
  },
  examples: [
    { question: 'f(x)=3x-2 doğrusal fonksiyonunda eğim kaçtır?', steps: [{ text: 'x’in katsayısı eğimdir.' }], answer: '3' },
    { question: 'f(x)=2x+5 için f(0) kaçtır?', steps: ['f(0)=2\\cdot0+5=5'], answer: '5' },
    { question: 'f(x)=ax+4 ve f(2)=10 ise a kaçtır?', steps: ['2a+4=10', '2a=6', 'a=3'], answer: '3' },
    { question: 'f(x)=x+1 (x<0), f(x)=2x (x≥0) ise f(-3)+f(4) kaçtır?', steps: ['f(-3)=-3+1=-2', 'f(4)=2\\cdot4=8', '-2+8=6'], answer: '6' },
    { question: 'f(x)=3 (x≤2), f(x)=x² (x>2) ise f(2)+f(3) kaçtır?', steps: ['2\\le2\\Rightarrow f(2)=3', '3>2\\Rightarrow f(3)=9', '3+9=12'], answer: '12' }
  ],
  quiz: quizRows([
    ['Doğrusal fonksiyonun genel biçimi hangisidir?', ['ax+b','x²','1/x','√x'], 0, 'f(x)=ax+b.'],
    ['f(x)=5x-1 fonksiyonunda eğim kaçtır?', ['-1','1','5','6'], 2, 'x katsayısı 5.'],
    ['f(x)=-2x+7 fonksiyonunda eğim kaçtır?', ['-2','2','7','-7'], 0, 'x katsayısı -2.'],
    ['f(x)=3x+4 için f(0) kaçtır?', ['0','3','4','7'], 2, 'Sabit terim 4.'],
    ['f(x)=ax+2, f(3)=11 ise a kaçtır?', ['2','3','4','5'], 1, '3a+2=11.'],
    ['f(x)=2x+b, f(0)=6 ise b kaçtır?', ['0','2','4','6'], 3, 'f(0)=b.'],
    ['Eğim pozitifse doğru genel olarak nasıldır?', ['Artan','Azalan','Yatay','Düşey'], 0, 'Pozitif eğim artan doğru verir.'],
    ['Eğim negatifse doğru genel olarak nasıldır?', ['Artan','Azalan','Yatay','Düşey'], 1, 'Negatif eğim azalan doğru verir.'],
    ['Sabit fonksiyon doğrusal mıdır?', ['Evet','Hayır','Asla','Sadece x² ise'], 0, 'a=0 için ax+b doğrusal biçimdedir.'],
    ['Parçalı fonksiyonda değer bulurken önce neye bakılır?', ['x’in hangi aralıkta olduğuna','Sadece sabit terime','EBOB’a','Olasılığa'], 0, 'Doğru kural aralığa göre seçilir.'],
    ['f(x)=x+2 (x<1), f(x)=5 (x≥1) ise f(0) kaçtır?', ['0','2','5','7'], 1, '0<1, x+2 kullanılır.'],
    ['Aynı fonksiyonda f(1) kaçtır?', ['1','3','5','6'], 2, '1≥1, ikinci kural.'],
    ['f(x)=2x (x≤0), f(x)=x² (x>0) ise f(-2) kaçtır?', ['-4','-2','2','4'], 0, 'İlk kural: 2(-2).'],
    ['Aynı fonksiyonda f(3) kaçtır?', ['3','6','9','12'], 2, '3>0, x².'],
    ['f(x)=4x-8 doğrusunun y eksenini kestiği değer kaçtır?', ['-8','-4','4','8'], 0, 'f(0)=-8.'],
    ['f(x)=0x+3 hangi tiptir?', ['Sabit','Parçalı','Karekök','Olasılık'], 0, 'f(x)=3.'],
    ['f(x)=x² doğrusal mıdır?', ['Evet','Hayır','Sabit','Birim'], 1, 'x² doğrusal değildir.'],
    ['f(x)=x doğrusal mıdır?', ['Evet','Hayır','Sadece negatifte','Tanımsız'], 0, 'a=1, b=0.'],
    ['f(x)=-x+5 için f(5) kaçtır?', ['0','5','10','-5'], 0, '-5+5=0.'],
    ['f(x)=2x-3 için f(4) kaçtır?', ['3','5','8','11'], 1, '8-3=5.'],
    ['Parçalı fonksiyonda sınır noktasında hangi işaret önemlidir?', ['≤ veya <','+ veya -','× veya ÷','√ veya π'], 0, 'Sınırın hangi parçaya ait olduğunu belirler.'],
    ['f(x)=1 (x<2), f(x)=x (x≥2) ise f(2) kaçtır?', ['1','2','3','4'], 1, '2 ikinci parçadadır.'],
    ['f(x)=x+1 doğrusunun eğimi kaçtır?', ['0','1','2','-1'], 1, 'x katsayısı 1.'],
    ['f(x)=7-3x doğrusunun eğimi kaçtır?', ['7','3','-3','10'], 2, '-3x katsayısı.'],
    ['Doğrusal fonksiyon grafiği hangi şekildir?', ['Doğru','Parabol','Çember','Üçgen'], 0, 'ax+b grafiği doğrudur.']
  ])
});

extendTopicPractice(68, {
  summary: 'Çift ve tek fonksiyon tanımları, grafik simetrileri ve fonksiyon değerleriyle kontrol.',
  theory: {
    rules: [
      { title: 'Çift Fonksiyon',
        formulaLines: ['f(-x)=f(x)'],
        tipLines: ['Her x için f(-x)=f(x) ise fonksiyon çifttir. Grafiği y eksenine göre simetriktir.'] },
      { title: 'Tek Fonksiyon',
        formulaLines: ['f(-x)=-f(x)'],
        tipLines: ['Her x için f(-x)=-f(x) ise fonksiyon tektir. Grafiği orijine göre simetriktir.'] },
      { title: 'Ne Çift Ne Tek',
        tipLines: ['İki koşuldan hiçbiri sağlanmıyorsa fonksiyon ne çift ne tektir.'] },
      { title: 'Tanım Kümesi Dikkati',
        tipLines: ['Çiftlik veya teklik incelenirken x tanım kümesindeyse -x de tanım kümesinde olmalıdır.'] }
    ],
    facts: ['x² çift fonksiyondur.', 'x³ tek fonksiyondur.', 'x²+x fonksiyonu ne çift ne tektir.'],
    warning: 'Sadece birkaç değere bakmak yetmez; cebirsel koşul her x için sağlanmalıdır.'
  },
  examples: [
    { question: 'f(x)=x² çift mi tektir?', steps: ['f(-x)=(-x)^2=x^2', 'f(-x)=f(x)'], answer: 'Çifttir.' },
    { question: 'f(x)=x³ tek mi çifttir?', steps: ['f(-x)=(-x)^3=-x^3', 'f(-x)=-f(x)'], answer: 'Tektir.' },
    { question: 'f(x)=x²+4 çift mi tektir?', steps: ['f(-x)=x^2+4', 'f(-x)=f(x)'], answer: 'Çifttir.' },
    { question: 'f(x)=x²+x ne çift ne tek midir?', steps: ['f(-x)=x^2-x', { text: 'Bu ifade f(x)’e de -f(x)’e de eşit değildir.' }], answer: 'Ne çift ne tek.' },
    { question: 'f tek ve f(3)=7 ise f(-3) kaçtır?', steps: ['f(-3)=-f(3)', 'f(-3)=-7'], answer: '-7' }
  ],
  quiz: quizRows([
    ['Çift fonksiyon koşulu hangisidir?', ['f(-x)=f(x)','f(-x)=-f(x)','f(x)=0','f(x)=x'], 0, 'Çift fonksiyon tanımı.'],
    ['Tek fonksiyon koşulu hangisidir?', ['f(-x)=f(x)','f(-x)=-f(x)','f(x)=1','f(x)=x²'], 1, 'Tek fonksiyon tanımı.'],
    ['Çift fonksiyon grafiği neye göre simetriktir?', ['x ekseni','y ekseni','Orijin','Doğru x=1'], 1, 'Çift fonksiyon y ekseni simetrisi verir.'],
    ['Tek fonksiyon grafiği neye göre simetriktir?', ['x ekseni','y ekseni','Orijin','Doğru y=1'], 2, 'Tek fonksiyon orijin simetrisi verir.'],
    ['f(x)=x² nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit değil'], 0, '(-x)²=x².'],
    ['f(x)=x³ nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 1, '(-x)³=-x³.'],
    ['f(x)=x²+1 nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Tanımsız'], 0, 'f(-x)=x²+1.'],
    ['f(x)=x+1 nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Hem çift hem tek'], 2, 'Koşullar sağlanmaz.'],
    ['f(x)=5 sabit fonksiyonu nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sadece tek'], 0, 'f(-x)=5=f(x).'],
    ['f(x)=0 fonksiyonu için hangisi doğrudur?', ['Yalnız çift','Yalnız tek','Hem çift hem tek','Hiçbiri'], 2, '0 hem f(x) hem -f(x) koşulunu sağlar.'],
    ['f çift ve f(2)=9 ise f(-2) kaçtır?', ['-9','-2','2','9'], 3, 'Çiftte değer aynı.'],
    ['f tek ve f(2)=9 ise f(-2) kaçtır?', ['-9','-2','2','9'], 0, 'Tekte değer ters işaretli.'],
    ['f tek ise f(0) genellikle kaçtır?', ['0','1','-1','Tanımsız'], 0, 'f(0)=-f(0), f(0)=0.'],
    ['x⁴ fonksiyonu nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 0, 'Çift kuvvet.'],
    ['x⁵ fonksiyonu nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 1, 'Tek kuvvet.'],
    ['x²+x fonksiyonu nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 2, 'Çift ve tek terim karışık.'],
    ['f(-x)=f(x) ise fonksiyon nedir?', ['Çift','Tek','Örten','Sabit olmak zorunda'], 0, 'Tanım doğrudan çift.'],
    ['f(-x)=-f(x) ise fonksiyon nedir?', ['Çift','Tek','İçine','Birim'], 1, 'Tanım doğrudan tek.'],
    ['f(x)=|x| nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Birim'], 0, '|-x|=|x|.'],
    ['f(x)=2x nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 1, 'f(-x)=-2x=-f(x).'],
    ['f(x)=2x² nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 0, 'Katsayı çiftliği değiştirmez.'],
    ['f(x)=2x³ nasıl bir fonksiyondur?', ['Çift','Tek','Ne çift ne tek','Sabit'], 1, 'Katsayı tekliği değiştirmez.'],
    ['Tanım kümesi simetrik değilse çift/tek incelemede ne olur?', ['Dikkat gerekir','Daima çift olur','Daima tek olur','Örten olur'], 0, 'x varsa -x de tanımda olmalıdır.'],
    ['Çift fonksiyonda f(4)=3 ise f(-4) kaçtır?', ['-3','0','3','4'], 2, 'Aynı değer.'],
    ['Tek fonksiyonda f(-5)=6 ise f(5) kaçtır?', ['-6','0','5','6'], 0, 'f(-5)=-f(5).']
  ])
});

extendTopicPractice(69, {
  summary: 'Fonksiyonlarda toplama, çıkarma, çarpma, bölme ve tanım kümesi kısıtları.',
  theory: {
    rules: [
      { title: 'Toplama ve Çıkarma',
        formulaLines: ['(f+g)(x)=f(x)+g(x)', '(f-g)(x)=f(x)-g(x)'],
        tipLines: ['Aynı x değeri için fonksiyon değerleri toplanır veya çıkarılır.'] },
      { title: 'Çarpma',
        formulaLines: ['(f\\cdot g)(x)=f(x)\\cdot g(x)'],
        tipLines: ['Fonksiyon değerleri çarpılır.'] },
      { title: 'Bölme',
        formulaLines: ['\\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{f(x)}{g(x)}'],
        tipLines: ['Bölmede g(x) sıfır olamaz.'] },
      { title: 'Tanım Kümesi',
        tipLines: ['İşlem yapılan fonksiyonların ortak tanım kümesi dikkate alınır. Bölmede ayrıca paydayı sıfır yapan değerler çıkarılır.'] }
    ],
    facts: ['(f+g)(a) için f(a) ve g(a) ayrı ayrı bulunur.', 'Çarpım fonksiyonu değerlerin çarpımıdır.', 'Bölüm fonksiyonunda payda kontrolü zorunludur.'],
    warning: '(f/g)(x) ifadesinde g(x)=0 yapan x değerleri tanım kümesinde olamaz.'
  },
  examples: [
    { question: 'f(x)=2x+1, g(x)=x-3 ise (f+g)(x) nedir?', steps: ['(2x+1)+(x-3)', '3x-2'], answer: '3x-2' },
    { question: 'f(x)=2x+1, g(x)=x-3 ise (f-g)(x) nedir?', steps: ['(2x+1)-(x-3)', '2x+1-x+3', 'x+4'], answer: 'x+4' },
    { question: 'f(x)=x+2, g(x)=x-1 ise (f·g)(x) nedir?', steps: ['(x+2)(x-1)', 'x^2+x-2'], answer: 'x^2+x-2' },
    { question: 'f(x)=x²-1, g(x)=x-1 ise (f/g)(x) nedir?', steps: ['\\dfrac{x^2-1}{x-1}', '\\dfrac{(x-1)(x+1)}{x-1}=x+1', 'x\\neq1'], answer: 'x+1,\\;x\\neq1' },
    { question: 'f(2)=5 ve g(2)=3 ise (2f-g)(2) kaçtır?', steps: ['2f(2)-g(2)', '2\\cdot5-3=7'], answer: '7' }
  ],
  quiz: quizRows([
    ['(f+g)(x) neye eşittir?', ['f(x)+g(x)','f(x)-g(x)','f(x)g(x)','f(g(x))'], 0, 'Toplam fonksiyonu.'],
    ['(f-g)(x) neye eşittir?', ['f(x)+g(x)','f(x)-g(x)','g(x)-f(x)','f(g(x))'], 1, 'Fark fonksiyonu.'],
    ['(f·g)(x) neye eşittir?', ['f(x)+g(x)','f(x)-g(x)','f(x)g(x)','f(x)/g(x)'], 2, 'Çarpım fonksiyonu.'],
    ['(f/g)(x) için hangi şart gerekir?', ['g(x)≠0','f(x)=0','g(x)=0','f(x)=g(x)'], 0, 'Payda sıfır olamaz.'],
    ['f(x)=x, g(x)=2x ise (f+g)(x) nedir?', ['x','2x','3x','x²'], 2, 'x+2x=3x.'],
    ['f(x)=3x, g(x)=x+1 ise (f-g)(x) nedir?', ['2x-1','2x+1','4x+1','3x²'], 0, '3x-(x+1).'],
    ['f(x)=x+1, g(x)=x-1 ise (f·g)(x) nedir?', ['x²-1','x²+1','2x','x²-2x+1'], 0, 'Fark kareleri.'],
    ['f(x)=2x, g(x)=x ise (f/g)(x) nedir?', ['2','x','2x','x²'], 0, '2x/x=2, x≠0.'],
    ['f(1)=4, g(1)=6 ise (f+g)(1) kaçtır?', ['2','10','24','1'], 1, '4+6=10.'],
    ['f(1)=4, g(1)=6 ise (g-f)(1) kaçtır?', ['2','10','24','-2'], 0, '6-4=2.'],
    ['f(2)=3, g(2)=5 ise (f·g)(2) kaçtır?', ['8','15','2','25'], 1, '3·5=15.'],
    ['f(2)=10, g(2)=2 ise (f/g)(2) kaçtır?', ['2','5','8','12'], 1, '10/2=5.'],
    ['f(x)=x², g(x)=1 ise (f+g)(x) nedir?', ['x²','x²+1','x²-1','x'], 1, 'x²+1.'],
    ['f(x)=x², g(x)=x ise (f-g)(x) nedir?', ['x²-x','x²+x','x³','1'], 0, 'x²-x.'],
    ['f(x)=x, g(x)=x ise (f·g)(x) nedir?', ['2x','x²','0','1'], 1, 'x·x=x².'],
    ['f(x)=1, g(x)=x-3 ise (f/g)(x) tanımsız yapan x kaçtır?', ['0','1','3','-3'], 2, 'x-3=0.'],
    ['Bölüm fonksiyonunda payda sıfır olursa ne olur?', ['Tanımsız','0','1','Kesin olay'], 0, 'Sıfıra bölme yoktur.'],
    ['f(x)=2x+3, g(x)=x ise (f+g)(0) kaçtır?', ['0','1','2','3'], 3, 'f(0)=3, g(0)=0.'],
    ['f(x)=2x+3, g(x)=x ise (f-g)(1) kaçtır?', ['2','3','4','5'], 2, 'f(1)=5, g(1)=1, fark 4.'],
    ['f(x)=x+2, g(x)=3 ise (fg)(4) kaçtır?', ['6','12','18','24'], 2, 'f(4)=6, 6·3=18.'],
    ['f(x)=x²-4, g(x)=x-2 ise f/g sadeleşince nedir?', ['x-2','x+2','x²','1'], 1, '(x-2)(x+2)/(x-2).'],
    ['Bu sadeleştirmede hangi değer yine tanımsızdır?', ['-2','0','2','4'], 2, 'Orijinal payda x-2 olduğu için x≠2.'],
    ['(2f+g)(x) neye eşittir?', ['2f(x)+g(x)','f(2x)+g(x)','2f(g(x))','f(x)+2g(x)'], 0, 'Katsayı fonksiyon değerine uygulanır.'],
    ['f(3)=4, g(3)=1 ise (2f+g)(3) kaçtır?', ['5','8','9','12'], 2, '2·4+1=9.'],
    ['Fonksiyonlarda dört işlemde temel dikkat nedir?', ['Tanım kümesi','Yalnız katsayı','Yalnız grafik','Sadece olasılık'], 0, 'Ortak tanım ve payda koşulu önemlidir.']
  ])
});

extendTopicPractice(70, {
  summary: 'Fonksiyon grafiklerini çizmek için nokta bulma, eksen kesişimleri ve tablo oluşturma.',
  theory: {
    rules: [
      { title: 'Nokta Bulma',
        tipLines: ['Fonksiyon grafiğini çizmek için x değerleri seçilir, f(x) değerleri hesaplanır ve noktalar işaretlenir.'] },
      { title: 'Y Ekseni Kesişimi',
        formulaLines: ['x=0\\Rightarrow y=f(0)'],
        tipLines: ['Grafiğin y eksenini kestiği nokta f(0) değeridir.'] },
      { title: 'X Ekseni Kesişimi',
        formulaLines: ['f(x)=0'],
        tipLines: ['Grafiğin x eksenini kestiği noktalar fonksiyonun sıfırlarıdır.'] },
      { title: 'Doğrusal Grafik',
        tipLines: ['Doğrusal fonksiyonun grafiği için iki nokta yeterlidir.'] }
    ],
    facts: ['Tablo grafiği düzenli çizdirir.', 'Parabol çiziminde tepe noktası ve simetri ekseni yardımcıdır.', 'Grafikte nokta (x,f(x)) biçiminde yazılır.'],
    warning: 'Nokta yazarken önce x sonra y yazılır; (x,y) sırası karıştırılmamalıdır.'
  },
  examples: [
    { question: 'f(x)=2x+1 grafiği için x=0 ve x=1 noktalarını bulunuz.', steps: ['f(0)=1\\Rightarrow(0,1)', 'f(1)=3\\Rightarrow(1,3)'], answer: '(0,1),\\;(1,3)' },
    { question: 'f(x)=x-4 grafiğinin x eksenini kestiği nokta nedir?', steps: ['x-4=0', 'x=4'], answer: '(4,0)' },
    { question: 'f(x)=3x+6 grafiğinin y eksenini kestiği nokta nedir?', steps: ['f(0)=6'], answer: '(0,6)' },
    { question: 'f(x)=x² grafiği için x=-1,0,1 noktalarını bulunuz.', steps: ['f(-1)=1\\Rightarrow(-1,1)', 'f(0)=0\\Rightarrow(0,0)', 'f(1)=1\\Rightarrow(1,1)'], answer: '(-1,1),(0,0),(1,1)' },
    { question: 'f(x)=-x+2 doğrusunun eksen kesişimlerini bulunuz.', steps: ['y\\text{ ekseni}:f(0)=2\\Rightarrow(0,2)', 'x\\text{ ekseni}:-x+2=0\\Rightarrow x=2\\Rightarrow(2,0)'], answer: '(0,2),\\;(2,0)' }
  ],
  quiz: quizRows([
    ['Grafikte nokta biçimi hangisidir?', ['(y,x)','(x,y)','{x,y}','x+y'], 1, 'Önce x sonra y.'],
    ['f(x)=2x için x=3 iken y kaçtır?', ['2','3','5','6'], 3, '2·3=6.'],
    ['f(x)=x+1 için x=0 noktası nedir?', ['(0,1)','(1,0)','(0,0)','(1,1)'], 0, 'f(0)=1.'],
    ['Y ekseni kesişimi için hangi değer alınır?', ['x=0','y=0','x=1','y=1'], 0, 'Y ekseninde x=0.'],
    ['X ekseni kesişimi için ne yapılır?', ['f(x)=0','x=0','f(x)=1','x=1'], 0, 'X ekseninde y=0.'],
    ['Doğrusal grafik için kaç nokta yeterlidir?', ['1','2','3','Sonsuz'], 1, 'İki nokta doğruyu belirler.'],
    ['f(x)=x-3 x eksenini nerede keser?', ['(0,3)','(3,0)','(-3,0)','(0,-3)'], 1, 'x-3=0.'],
    ['f(x)=x+5 y eksenini nerede keser?', ['(0,5)','(5,0)','(-5,0)','(0,-5)'], 0, 'f(0)=5.'],
    ['f(x)=3x-6 x eksenini nerede keser?', ['(0,-6)','(2,0)','(-2,0)','(0,2)'], 1, '3x-6=0.'],
    ['f(x)=x² için x=2 noktası nedir?', ['(2,2)','(2,4)','(4,2)','(0,4)'], 1, 'f(2)=4.'],
    ['f(x)=x² için x=-2 noktası nedir?', ['(-2,-4)','(-2,4)','(2,4)','(4,-2)'], 1, 'f(-2)=4.'],
    ['f(x)=-x+1 için x=0 noktası nedir?', ['(0,1)','(1,0)','(0,-1)','(-1,0)'], 0, 'f(0)=1.'],
    ['f(x)=-x+1 için x=1 noktası nedir?', ['(1,0)','(0,1)','(1,1)','(-1,2)'], 0, 'f(1)=0.'],
    ['Tablo oluşturmak ne işe yarar?', ['Noktaları düzenli bulmaya','Payda silmeye','Olasılık toplamaya','Kök kaldırmaya'], 0, 'x ve y değerleri düzenlenir.'],
    ['f(x)=2x+4 y eksenini nerede keser?', ['(0,4)','(4,0)','(-2,0)','(0,2)'], 0, 'f(0)=4.'],
    ['f(x)=2x+4 x eksenini nerede keser?', ['(0,4)','(4,0)','(-2,0)','(0,2)'], 2, '2x+4=0, x=-2.'],
    ['f(x)=5 sabit fonksiyonunun grafiği nasıldır?', ['Yatay doğru','Düşey doğru','Parabol','Çember'], 0, 'y=5 yataydır.'],
    ['f(x)=x grafiği hangi noktadan geçer?', ['(0,0)','(0,1)','(1,0)','(2,1)'], 0, 'Birim doğru orijinden geçer.'],
    ['f(x)=x² grafiği hangi şekle örnektir?', ['Doğru','Parabol','Çember','Nokta'], 1, 'Karesel fonksiyon parabol verir.'],
    ['f(x)=x² grafiği y eksenine göre simetrik midir?', ['Evet','Hayır','Sadece x>0','Tanımsız'], 0, 'x² çift fonksiyondur.'],
    ['f(x)=2x-1 için x=2 noktası nedir?', ['(2,1)','(2,3)','(3,2)','(1,2)'], 1, 'f(2)=3.'],
    ['f(x)=4-x için x=4 noktası nedir?', ['(4,0)','(0,4)','(4,4)','(0,0)'], 0, 'f(4)=0.'],
    ['Grafikte f(a) hangi değerdir?', ['x=a noktasındaki y','y=a noktasındaki x','Eğim','Alan'], 0, 'f(a) çıktı değeridir.'],
    ['Bir noktanın grafikte olması için ne gerekir?', ['y=f(x)','x=f(y)','x+y=0','x=0'], 0, 'Nokta fonksiyon kuralını sağlamalıdır.'],
    ['f(x)=x+2 grafiğinde (1,3) var mıdır?', ['Evet','Hayır','Sadece parabolde','Tanımsız'], 0, 'f(1)=3.']
  ])
});

extendTopicPractice(71, {
  summary: 'İki fonksiyonun bileşkesi, işlem sırası ve bileşke değerlerini bulma.',
  theory: {
    rules: [
      { title: 'Bileşke Fonksiyon',
        formulaLines: ['(f\\circ g)(x)=f(g(x))'],
        tipLines: ['Önce g fonksiyonu uygulanır, çıkan sonuç f fonksiyonuna yazılır.'] },
      { title: 'İşlem Sırası',
        formulaLines: ['f\\circ g\\neq g\\circ f\\;\\text{olabilir}'],
        tipLines: ['Bileşkede sıra önemlidir.'] },
      { title: 'Tanım Koşulu',
        tipLines: ['g(x) değeri f fonksiyonunun tanım kümesinde olmalıdır.'] },
      { title: 'Kendisiyle Bileşke',
        formulaLines: ['(f\\circ f)(x)=f(f(x))'],
        tipLines: ['Fonksiyon ardışık olarak iki kez uygulanır.'] }
    ],
    facts: ['Bileşkede içten dışa doğru ilerlenir.', 'Tablodan bileşke bulunurken önce içteki fonksiyonun tablodaki değeri okunur.', 'Birim fonksiyon bileşkede etkisiz eleman gibi davranır.'],
    warning: 'f(g(x)) ile g(f(x)) genellikle aynı değildir; sırayı dikkatle oku.'
  },
  examples: [
    { question: 'f(x)=2x+1, g(x)=x-3 ise (f∘g)(x) nedir?', steps: ['f(g(x))=2(x-3)+1', '2x-6+1=2x-5'], answer: '2x-5' },
    { question: 'f(x)=2x+1, g(x)=x-3 ise (g∘f)(x) nedir?', steps: ['g(f(x))=(2x+1)-3', '2x-2'], answer: '2x-2' },
    { question: 'f(x)=x², g(x)=x+1 ise (f∘g)(2) kaçtır?', steps: ['g(2)=3', 'f(3)=9'], answer: '9' },
    { question: 'f(x)=3x-2 ise (f∘f)(1) kaçtır?', steps: ['f(1)=1', 'f(f(1))=f(1)=1'], answer: '1' },
    { question: 'f(x)=x+4, g(x)=2x ise (g∘f)(3) kaçtır?', steps: ['f(3)=7', 'g(7)=14'], answer: '14' }
  ],
  quiz: quizRows([
    ['(f∘g)(x) neye eşittir?', ['f(g(x))','g(f(x))','f(x)+g(x)','f(x)g(x)'], 0, 'Bileşke tanımı.'],
    ['(g∘f)(x) neye eşittir?', ['f(g(x))','g(f(x))','f(x)-g(x)','g(x)-f(x)'], 1, 'Önce f, sonra g.'],
    ['Bileşkede işlem hangi yönde yapılır?', ['İçten dışa','Dıştan içe','Soldan rastgele','Toplamdan sonra'], 0, 'Önce içteki fonksiyon.'],
    ['Bileşkede sıra önemli midir?', ['Evet','Hayır','Asla','Sadece sabitte'], 0, 'f∘g ile g∘f farklı olabilir.'],
    ['f(x)=x+1, g(x)=2x ise (f∘g)(x) nedir?', ['2x+1','2x+2','x+2','2x-1'], 0, 'f(2x)=2x+1.'],
    ['Aynı fonksiyonlar için (g∘f)(x) nedir?', ['2x+1','2x+2','x+2','2x-1'], 1, 'g(x+1)=2x+2.'],
    ['f(x)=3x, g(x)=x-2 ise (f∘g)(x) nedir?', ['3x-2','3x-6','x-6','3x+2'], 1, '3(x-2).'],
    ['f(x)=3x, g(x)=x-2 ise (g∘f)(x) nedir?', ['3x-2','3x-6','x-6','3x+2'], 0, '3x-2.'],
    ['f(x)=x², g(x)=x+1 ise (f∘g)(1) kaçtır?', ['2','3','4','5'], 2, 'g(1)=2, f(2)=4.'],
    ['f(x)=x², g(x)=x+1 ise (g∘f)(1) kaçtır?', ['2','3','4','5'], 0, 'f(1)=1, g(1)=2.'],
    ['f(x)=2x-1 ise (f∘f)(2) kaçtır?', ['1','3','5','7'], 2, 'f(2)=3, f(3)=5.'],
    ['f(x)=x+3 ise (f∘f)(4) kaçtır?', ['7','8','9','10'], 3, 'f(4)=7, f(7)=10.'],
    ['f(x)=x-5, g(x)=10 ise (f∘g)(2) kaçtır?', ['2','5','10','15'], 1, 'g(2)=10, f(10)=5.'],
    ['f(x)=10, g(x)=x-5 ise (f∘g)(2) kaçtır?', ['2','5','10','15'], 2, 'f her girdide 10.'],
    ['Birim fonksiyon I(x)=x ise (f∘I)(x) nedir?', ['f(x)','I(x)','0','1'], 0, 'Birim bileşkede değeri değiştirmez.'],
    ['I(x)=x ise (I∘f)(x) nedir?', ['f(x)','I(x)','0','1'], 0, 'I(f(x))=f(x).'],
    ['f(x)=1/x, g(x)=x-1 için (f∘g)(x) nedir?', ['1/(x-1)','1/x-1','x/(x-1)','x-1'], 0, 'f(g(x))=1/(x-1).'],
    ['Bu bileşkede x hangi değeri alamaz?', ['0','1','-1','2'], 1, 'x-1≠0.'],
    ['f(x)=x+2, g(x)=x² için (f∘g)(3) kaçtır?', ['9','11','25','13'], 1, 'g(3)=9, f(9)=11.'],
    ['f(x)=x+2, g(x)=x² için (g∘f)(3) kaçtır?', ['9','11','25','13'], 2, 'f(3)=5, g(5)=25.'],
    ['f(x)=2x, g(x)=3x için f∘g nedir?', ['5x','6x','x','2x+3'], 1, 'f(3x)=6x.'],
    ['f(x)=2x, g(x)=3x için g∘f nedir?', ['5x','6x','x','2x+3'], 1, 'g(2x)=6x; bu örnekte eşit çıktı.'],
    ['f(g(2)) ifadesinde önce ne bulunur?', ['g(2)','f(2)','f(g)','2f'], 0, 'İçteki g(2).'],
    ['Bileşke tanımında g(x) ne olmalıdır?', ['f’in tanım kümesine uygun','Daima 0','Daima 1','Boş'], 0, 'f(g(x)) tanımlı olmalı.'],
    ['f∘g ile g∘f için genel sonuç nedir?', ['Her zaman eşit','Genellikle eşit olmayabilir','Daima tanımsız','Daima 0'], 1, 'Sıra değişebilir.']
  ])
});

extendTopicPractice(72, {
  summary: 'Bir fonksiyonun tersi, ters fonksiyonun varlığı, değişken değiştirme ve bileşke ilişkisi.',
  theory: {
    rules: [
      { title: 'Ters Fonksiyon',
        formulaLines: ['f^{-1}'],
        tipLines: ['Bir fonksiyonun giriş ve çıkış rollerini değiştiren fonksiyona ters fonksiyon denir.'] },
      { title: 'Tersin Var Olma Koşulu',
        tipLines: ['Bir fonksiyonun tersinin fonksiyon olabilmesi için fonksiyon birebir ve örten olmalıdır.'] },
      { title: 'Ters Bulma Yöntemi',
        tipLines: ['y=f(x) yazılır, x ve y yer değiştirilir, y yalnız bırakılır.'] },
      { title: 'Bileşke Kontrolü',
        formulaLines: ['f(f^{-1}(x))=x', 'f^{-1}(f(x))=x'],
        tipLines: ['Fonksiyon ile tersi bileşke yapıldığında birim fonksiyon elde edilir.'] }
    ],
    facts: ['Ters fonksiyon grafiği y=x doğrusuna göre simetriktir.', 'Ters fonksiyonda tanım ve görüntü kümeleri yer değiştirir.', 'Doğrusal birebir fonksiyonların tersi kolay bulunur.'],
    warning: 'Birebir olmayan fonksiyonun tersi bağıntı olabilir ama fonksiyon olmayabilir.'
  },
  examples: [
    { question: 'f(x)=2x+3 fonksiyonunun tersini bulunuz.', steps: ['y=2x+3', 'x=2y+3', 'x-3=2y', 'y=\\dfrac{x-3}{2}'], answer: 'f^{-1}(x)=\\dfrac{x-3}{2}' },
    { question: 'f(x)=x-5 fonksiyonunun tersini bulunuz.', steps: ['y=x-5', 'x=y-5', 'y=x+5'], answer: 'f^{-1}(x)=x+5' },
    { question: 'f(x)=3x ise f⁻¹(12) kaçtır?', steps: ['f^{-1}(x)=\\dfrac{x}{3}', 'f^{-1}(12)=4'], answer: '4' },
    { question: 'f(x)=x² gerçek sayılarda ters fonksiyon mudur?', steps: ['f(2)=4', 'f(-2)=4', { text: 'Birebir olmadığı için tersi fonksiyon değildir.' }], answer: 'Tersi fonksiyon değildir.' },
    { question: 'f(x)=4x-1 ise f⁻¹(7) kaçtır?', steps: ['4x-1=7', '4x=8', 'x=2'], answer: '2' }
  ],
  quiz: quizRows([
    ['Ters fonksiyon hangi sembolle gösterilir?', ['f²','f⁻¹','1/f','f′'], 1, 'Ters fonksiyon f⁻¹.'],
    ['Tersin fonksiyon olması için fonksiyon nasıl olmalıdır?', ['Sabit','Birebir ve örten','Sadece içine','Çift'], 1, 'Ters için birebir örtenlik gerekir.'],
    ['Ters fonksiyon grafiği hangi doğruya göre simetriktir?', ['x ekseni','y ekseni','y=x','y=-x'], 2, 'Ters grafik y=x simetrisi.'],
    ['f(x)=x+2 ters fonksiyonu nedir?', ['x+2','x-2','2x','x/2'], 1, 'y=x+2, x=y+2.'],
    ['f(x)=x-3 ters fonksiyonu nedir?', ['x+3','x-3','3x','x/3'], 0, 'Tersi x+3.'],
    ['f(x)=2x ters fonksiyonu nedir?', ['2x','x+2','x/2','x-2'], 2, 'y=2x, x=2y.'],
    ['f(x)=3x+1 ters fonksiyonu nedir?', ['(x-1)/3','3x-1','(x+1)/3','x/3+1'], 0, 'x=3y+1.'],
    ['f(x)=5x-10 için f⁻¹(0) kaçtır?', ['0','1','2','5'], 2, '5x-10=0.'],
    ['f(x)=2x+3 için f⁻¹(7) kaçtır?', ['1','2','3','4'], 1, '2x+3=7.'],
    ['f(x)=x² gerçek sayılarda neden ters fonksiyon değildir?', ['Birebir değil','Örten','Sabit','Tanımsız'], 0, '2 ve -2 aynı görüntüyü verir.'],
    ['f(f⁻¹(x)) neye eşittir?', ['0','1','x','f(x)'], 2, 'Bileşke birim fonksiyon verir.'],
    ['f⁻¹(f(x)) neye eşittir?', ['0','1','x','f(x)'], 2, 'Tersle bileşke x verir.'],
    ['Ters bulurken x ve y için ne yapılır?', ['Yer değiştirilir','Toplanır','Silinir','Kare alınır'], 0, 'Standart yöntem.'],
    ['f(x)=x/4 ters fonksiyonu nedir?', ['4x','x/4','x+4','x-4'], 0, 'y=x/4, x=4y.'],
    ['f(x)=x+10 için f⁻¹(12) kaçtır?', ['0','2','10','22'], 1, 'x+10=12.'],
    ['f(x)=7-x için ters fonksiyon nedir?', ['7-x','x-7','x+7','7x'], 0, 'x=7-y, y=7-x.'],
    ['Ters fonksiyonda tanım kümesi neyle yer değiştirir?', ['Görüntü kümesiyle','Boş kümeyle','Olasılıkla','Eğimle'], 0, 'Giriş-çıkış rolleri değişir.'],
    ['Birebir olmayan fonksiyon için ters hakkında ne söylenir?', ['Fonksiyon olmayabilir','Daima fonksiyondur','Daima sabittir','Daima birimdir'], 0, 'Aynı çıkıştan iki giriş gelebilir.'],
    ['f(x)=x gerçek sayılarda ters fonksiyonu nedir?', ['x','-x','1/x','0'], 0, 'Birim fonksiyonun tersi kendisidir.'],
    ['f(x)=x+1 için f⁻¹(5) kaçtır?', ['3','4','5','6'], 1, 'x+1=5.'],
    ['f(x)=2x-6 için f⁻¹(4) kaçtır?', ['2','3','4','5'], 3, '2x-6=4.'],
    ['f(x)=3x için f⁻¹(9) kaçtır?', ['1','2','3','4'], 2, '3x=9.'],
    ['Tersi olan doğrusal fonksiyonda x katsayısı ne olmalıdır?', ['0','Sıfırdan farklı','Daima 1','Daima -1'], 1, 'Eğim 0 ise sabit olur, birebir olmaz.'],
    ['f(x)=4 sabit fonksiyonunun tersi fonksiyon mudur?', ['Evet','Hayır','Birimdir','Örtendir'], 1, 'Sabit fonksiyon birebir değildir.'],
    ['f⁻¹(a)=b ifadesi ne anlama gelir?', ['f(b)=a','f(a)=b','f(a)=0','f(b)=b'], 0, 'Ters ilişki f(b)=a demektir.']
  ])
});

extendTopicPractice(73, {
  summary: 'Fonksiyon grafiklerinden değer okuma, tanım-görüntü aralığı, artma-azalma, sıfırlar ve işaret yorumu.',
  theory: {
    rules: [
      { title: 'Grafikten Değer Okuma',
        tipLines: ['x=a için grafikte a noktasına gidilir ve karşılık gelen y değeri f(a) olarak okunur.'] },
      { title: 'Tanım ve Görüntü Aralığı',
        tipLines: ['Grafiğin yatayda kapladığı aralık tanım kümesini, düşeyde kapladığı aralık görüntü kümesini verir.'] },
      { title: 'Sıfırlar',
        formulaLines: ['f(x)=0'],
        tipLines: ['Grafiğin x eksenini kestiği x değerleri fonksiyonun sıfırlarıdır.'] },
      { title: 'İşaret Yorumu',
        tipLines: ['Grafik x ekseninin üstündeyse f(x)>0, altındaysa f(x)<0 olur.'] },
      { title: 'Artma ve Azalma',
        tipLines: ['Grafik soldan sağa yükseliyorsa artan, düşüyorsa azalan aralık vardır.'] }
    ],
    facts: ['Y ekseni kesişimi f(0) değeridir.', 'Grafikte kapalı nokta dahil, açık nokta dahil değil anlamı taşır.', 'Parçalı grafiklerde her parça ayrı yorumlanır.'],
    warning: 'Grafik okurken x ve y eksenlerini karıştırma; f(a) daima y değeridir.'
  },
  examples: [
    { question: 'Bir grafikte (2,5) noktası varsa f(2) kaçtır?', steps: [{ text: 'Nokta (x,y) biçimindedir; x=2 iken y=5’tir.' }], answer: '5' },
    { question: 'Grafik x eksenini -1 ve 3 noktalarında kesiyorsa fonksiyonun sıfırları nedir?', steps: [{ text: 'x ekseni kesişimlerinde f(x)=0 olur.' }], answer: '-1\\;\\text{ve}\\;3' },
    { question: 'Grafik y eksenini 4 noktasında kesiyorsa f(0) kaçtır?', steps: [{ text: 'Y ekseninde x=0’dır.' }], answer: '4' },
    { question: 'Grafik x ekseninin üstündeyse fonksiyon işareti nasıldır?', steps: [{ text: 'Üst bölgedeki y değerleri pozitiftir.' }], answer: 'Pozitif' },
    { question: 'Bir grafik soldan sağa sürekli yükseliyorsa nasıl adlandırılır?', steps: [{ text: 'x arttıkça f(x) artıyorsa fonksiyon artandır.' }], answer: 'Artan' }
  ],
  quiz: quizRows([
    ['Grafikte (3,7) noktası varsa f(3) kaçtır?', ['3','4','7','10'], 2, 'y değeri 7.'],
    ['Grafikte (-2,5) noktası varsa f(-2) kaçtır?', ['-2','2','5','7'], 2, 'y değeri 5.'],
    ['f(0) grafikte hangi kesişimi verir?', ['x ekseni','y ekseni','Orijin dışı yok','Asimptot'], 1, 'x=0 y eksenidir.'],
    ['Grafiğin x eksenini kestiği noktalar neyi verir?', ['Sıfırları','Maksimumu','Tanım kümesini','Eğimi her zaman'], 0, 'f(x)=0.'],
    ['Grafik x ekseninin üstündeyse f(x) nasıldır?', ['Pozitif','Negatif','Sıfır','Tanımsız'], 0, 'y>0.'],
    ['Grafik x ekseninin altındaysa f(x) nasıldır?', ['Pozitif','Negatif','Sıfır','Kesin'], 1, 'y<0.'],
    ['Grafiğin yatayda kapladığı aralık neyi verir?', ['Tanım kümesi','Görüntü kümesi','Sıfır','Tepe'], 0, 'x değerleri tanım kümesi.'],
    ['Grafiğin düşeyde kapladığı aralık neyi verir?', ['Tanım kümesi','Görüntü kümesi','Sıfır','Kesişim'], 1, 'y değerleri görüntü kümesi.'],
    ['Kapalı nokta grafikte ne anlama gelir?', ['Dahil','Dahil değil','Tanımsız','Sonsuz'], 0, 'Kapalı nokta dahil.'],
    ['Açık nokta grafikte ne anlama gelir?', ['Dahil','Dahil değil','Kesin','Maksimum'], 1, 'Açık nokta dahil değildir.'],
    ['Soldan sağa yükselen grafik için ne söylenir?', ['Artan','Azalan','Sabit değil','Tanımsız'], 0, 'Fonksiyon artar.'],
    ['Soldan sağa düşen grafik için ne söylenir?', ['Artan','Azalan','Sabit','Birim'], 1, 'Fonksiyon azalır.'],
    ['Yatay grafik için ne söylenir?', ['Sabit','Artan','Azalan','Birebir'], 0, 'y değeri değişmez.'],
    ['Grafik y eksenini -3’te kesiyorsa f(0) kaçtır?', ['-3','0','3','1'], 0, 'Y ekseni kesişimi f(0).'],
    ['Grafik x eksenini 5’te kesiyorsa f(5) kaçtır?', ['0','1','5','-5'], 0, 'X ekseninde y=0.'],
    ['Bir noktayı okumada ilk koordinat neyi gösterir?', ['x','y','f(x)','Alan'], 0, 'İlk koordinat x.'],
    ['Bir noktayı okumada ikinci koordinat neyi gösterir?', ['x','y','Tanım','Eğim'], 1, 'İkinci koordinat y=f(x).'],
    ['Grafikte f(2)=0 ise grafik nereden geçer?', ['(2,0)','(0,2)','(2,2)','(0,0)'], 0, 'x=2 iken y=0.'],
    ['Grafikte f(0)=6 ise grafik nereden geçer?', ['(6,0)','(0,6)','(6,6)','(0,0)'], 1, 'x=0 iken y=6.'],
    ['Grafiğin en yüksek noktası neyi verir?', ['Maksimum','Minimum','Sıfır','Tanımsızlık'], 0, 'En büyük y değeri maksimumdur.'],
    ['Grafiğin en düşük noktası neyi verir?', ['Maksimum','Minimum','Sıfır','Tanımsızlık'], 1, 'En küçük y değeri minimumdur.'],
    ['Grafikte y=0 olan yerler hangi eksen üzerindedir?', ['x ekseni','y ekseni','Orijin dışı yok','Dikey doğru'], 0, 'y=0 x eksenidir.'],
    ['Grafikte x=0 olan yer hangi eksen üzerindedir?', ['x ekseni','y ekseni','Parabol','Çember'], 1, 'x=0 y eksenidir.'],
    ['Grafik bir düşey doğruyla iki noktada kesişiyorsa ne olabilir?', ['Fonksiyon olmayabilir','Kesin fonksiyondur','Sabit fonksiyondur','Birimdir'], 0, 'Düşey doğru testi.'],
    ['Fonksiyon grafiği okurken f(a) neyi verir?', ['x değerini','a noktasındaki y değerini','Eksen adını','Alanı'], 1, 'f(a) çıktı yani y değeridir.']
  ])
});

function quizRows25(rows) {
  const out = [];
  for (let i = 0; i < 25; i += 1) {
    const row = rows[i % rows.length];
    const prefix = i < rows.length ? '' : `Pekiştirme ${i + 1}: `;
    out.push([prefix + row[0], row[1], row[2], row[3]]);
  }
  return quizRows(out);
}

// 41-50. konular: mantık ve kümeler.
extendTopicPractice(41, {
  summary: 'Ve, veya, ya da, ise gibi bağlaçlarla kurulan bileşik önermeler ve doğruluk değerleri.',
  theory: { rules: [
    { title: 'Ve Bağlacı', formulaLines: ['p\\land q'], tipLines: ['p ve q birlikte doğru ise doğru, diğer durumlarda yanlıştır.'] },
    { title: 'Veya Bağlacı', formulaLines: ['p\\lor q'], tipLines: ['En az biri doğru ise doğru olur.'] },
    { title: 'Ya Da Bağlacı', formulaLines: ['p\\veebar q'], tipLines: ['Önermelerden yalnız biri doğru ise doğru olur.'] },
    { title: 'De Morgan', formulaLines: ['(p\\land q)^\\prime=p^\\prime\\lor q^\\prime', '(p\\lor q)^\\prime=p^\\prime\\land q^\\prime'], tipLines: ['Değil alma işleminde bağlaç tersine döner.'] }
  ], facts: ['Bileşik önermenin doğruluk değeri bileşen önermelerin değerlerine bağlıdır.', 'Doğruluk tablosu tüm durumları sistemli gösterir.'], warning: '“Veya” ile “ya da” aynı değildir; ya da yalnız birinin doğru olmasını ister.' },
  examples: [
    { question: 'p doğru, q yanlış ise p∧q değerini bulunuz.', steps: ['1\\land0=0'], answer: '0' },
    { question: 'p doğru, q yanlış ise p∨q değerini bulunuz.', steps: ['1\\lor0=1'], answer: '1' },
    { question: 'p doğru, q yanlış ise p ya da q değerini bulunuz.', steps: [{ text: 'Yalnız biri doğru olduğu için ya da önermesi doğrudur.' }], answer: '1' },
    { question: 'p yanlış, q yanlış ise p∨q değerini bulunuz.', steps: ['0\\lor0=0'], answer: '0' },
    { question: '(p∧q)′ ifadesini De Morgan ile yazınız.', steps: ['(p\\land q)^\\prime=p^\\prime\\lor q^\\prime'], answer: 'p^\\prime\\lor q^\\prime' }
  ],
  quiz: quizRows25([
    ['p ve q doğru ise p∧q kaçtır?', ['0','1','p','q'], 1, 'İkisi de doğruysa ve doğrudur.'],
    ['p doğru, q yanlış ise p∧q kaçtır?', ['0','1','p','q'], 0, 'Ve için ikisi de doğru olmalıdır.'],
    ['p doğru, q yanlış ise p∨q kaçtır?', ['0','1','p','q'], 1, 'Veya için en az biri doğru yeterlidir.'],
    ['p yanlış, q yanlış ise p∨q kaçtır?', ['0','1','p','q'], 0, 'İkisi de yanlışsa veya yanlıştır.'],
    ['Ya da bağlacı ne zaman doğrudur?', ['İkisi doğruyken','Yalnız biri doğruyken','İkisi yanlışken','Her zaman'], 1, 'Ya da yalnız bir doğru ister.'],
    ['(p∧q)′ hangisidir?', ['p′∧q′','p′∨q′','p∨q','p∧q'], 1, 'De Morgan kuralı.'],
    ['(p∨q)′ hangisidir?', ['p′∧q′','p′∨q′','p∨q','p∧q'], 0, 'De Morgan kuralı.'],
    ['p∧1 neye denktir?', ['p','1','0','p′'], 0, 'Doğru ile ve p’yi verir.'],
    ['p∨0 neye denktir?', ['p','1','0','p′'], 0, 'Yanlış ile veya p’yi verir.'],
    ['p∧0 neye denktir?', ['p','1','0','p′'], 2, 'Yanlışla ve daima yanlıştır.']
  ])
});

extendTopicPractice(42, {
  summary: 'Koşullu önerme p ise q biçimi, karşıt/ters/karşıt ters ve doğruluk değeri.',
  theory: { rules: [
    { title: 'Koşullu Önerme', formulaLines: ['p\\Rightarrow q'], tipLines: ['p doğru q yanlış olduğunda yanlıştır; diğer durumlarda doğrudur.'] },
    { title: 'Tersi', formulaLines: ['q\\Rightarrow p'], tipLines: ['p⇒q önermesinin tersi q⇒p’dir.'] },
    { title: 'Karşıtı', formulaLines: ['p^\\prime\\Rightarrow q^\\prime'], tipLines: ['Her iki önerme değillenerek yazılır.'] },
    { title: 'Karşıt Tersi', formulaLines: ['q^\\prime\\Rightarrow p^\\prime'], tipLines: ['p⇒q önermesine denktir.'] }
  ], facts: ['p⇒q önermesi p′∨q önermesine denktir.', 'Koşullu önermede p hipotez, q hükümdür.'], warning: 'Koşullu önerme sadece p doğru q yanlış olduğunda yanlıştır.' },
  examples: [
    { question: 'p doğru, q yanlış ise p⇒q kaçtır?', steps: ['1\\Rightarrow0=0'], answer: '0' },
    { question: 'p yanlış, q yanlış ise p⇒q kaçtır?', steps: ['0\\Rightarrow0=1'], answer: '1' },
    { question: 'p⇒q önermesinin tersini yazınız.', steps: ['q\\Rightarrow p'], answer: 'q\\Rightarrow p' },
    { question: 'p⇒q önermesinin karşıt tersini yazınız.', steps: ['q^\\prime\\Rightarrow p^\\prime'], answer: 'q^\\prime\\Rightarrow p^\\prime' },
    { question: 'p⇒q ifadesini veya bağlacıyla yazınız.', steps: ['p\\Rightarrow q\\equiv p^\\prime\\lor q'], answer: 'p^\\prime\\lor q' }
  ],
  quiz: quizRows25([
    ['p⇒q ne zaman yanlıştır?', ['p doğru q yanlış','p yanlış q doğru','İkisi doğru','İkisi yanlış'], 0, 'Tek yanlış durum budur.'],
    ['p⇒q hangi önermeye denktir?', ['p∨q','p′∨q','p∧q','p′∧q'], 1, 'Koşullu önerme eşdeğeri.'],
    ['p⇒q önermesinde p nedir?', ['Hüküm','Hipotez','Değer','Sonuç'], 1, 'p hipotezdir.'],
    ['p⇒q önermesinde q nedir?', ['Hipotez','Hüküm','Değil','Bağlaç'], 1, 'q hükümdür.'],
    ['p⇒q önermesinin tersi nedir?', ['q⇒p','p′⇒q′','q′⇒p′','p∨q'], 0, 'Ters önerme.'],
    ['p⇒q önermesinin karşıt tersi nedir?', ['q⇒p','p′⇒q′','q′⇒p′','p∨q'], 2, 'Karşıt ters.'],
    ['p⇒q ile hangisi denktir?', ['q⇒p','q′⇒p′','p′⇒q′','p∧q'], 1, 'Karşıt ters denktir.'],
    ['1⇒1 kaçtır?', ['0','1','p','q'], 1, 'Doğru doğruyu gerektirir.'],
    ['1⇒0 kaçtır?', ['0','1','p','q'], 0, 'Tek yanlış durum.'],
    ['0⇒1 kaçtır?', ['0','1','p','q'], 1, 'Öncül yanlışsa koşullu doğru kabul edilir.']
  ])
});

extendTopicPractice(43, {
  summary: 'İki yönlü koşullu önerme p ancak ve ancak q, denklik ve doğruluk değeri.',
  theory: { rules: [
    { title: 'İki Yönlü Koşullu', formulaLines: ['p\\Leftrightarrow q'], tipLines: ['p ve q aynı doğruluk değerine sahipse doğrudur.'] },
    { title: 'Koşullu Biçimi', formulaLines: ['p\\Leftrightarrow q\\equiv(p\\Rightarrow q)\\land(q\\Rightarrow p)'], tipLines: ['İki yönlü koşullu iki koşullunun birlikte doğru olmasıdır.'] },
    { title: 'Denk Önermeler', formulaLines: ['p\\equiv q'], tipLines: ['Doğruluk değerleri her durumda aynı olan önermeler denktir.'] }
  ], facts: ['“Ancak ve ancak” çift yönlü koşullu anlamı taşır.', 'Aynı değerler doğru, farklı değerler yanlış verir.'], warning: 'p⇒q doğru olsa bile q⇒p doğru olmayabilir; iki yönlü koşullu ikisini de ister.' },
  examples: [
    { question: 'p doğru, q doğru ise p⇔q kaçtır?', steps: ['1\\Leftrightarrow1=1'], answer: '1' },
    { question: 'p doğru, q yanlış ise p⇔q kaçtır?', steps: ['1\\Leftrightarrow0=0'], answer: '0' },
    { question: 'p⇔q ifadesini koşullu önermelerle yazınız.', steps: ['(p\\Rightarrow q)\\land(q\\Rightarrow p)'], answer: '(p\\Rightarrow q)\\land(q\\Rightarrow p)' },
    { question: 'p ve q aynı doğruluk değerindeyse p⇔q nedir?', steps: [{ text: 'İki yönlü koşullu aynı değerlerde doğrudur.' }], answer: '1' },
    { question: 'p ve q farklı doğruluk değerindeyse p⇔q nedir?', steps: [{ text: 'Farklı değerlerde iki yönlü koşullu yanlıştır.' }], answer: '0' }
  ],
  quiz: quizRows25([
    ['p⇔q ne zaman doğrudur?', ['Aynı doğruluk değerinde','Farklı değerlerde','p doğru q yanlış','Daima'], 0, 'Aynı değerlerde doğru.'],
    ['p⇔q ne zaman yanlıştır?', ['Aynı değerlerde','Farklı değerlerde','İkisi doğruyken','İkisi yanlışken'], 1, 'Farklı değerlerde yanlış.'],
    ['1⇔1 kaçtır?', ['0','1','p','q'], 1, 'Aynı değer.'],
    ['1⇔0 kaçtır?', ['0','1','p','q'], 0, 'Farklı değer.'],
    ['0⇔0 kaçtır?', ['0','1','p','q'], 1, 'Aynı değer.'],
    ['p⇔q hangi ifadeye denktir?', ['(p⇒q)∧(q⇒p)','p∨q','p∧q','p′∨q′'], 0, 'Tanım.'],
    ['“Ancak ve ancak” hangi bağlaçtır?', ['∧','∨','⇒','⇔'], 3, 'İki yönlü koşullu.'],
    ['Denk önermelerde doğruluk değerleri nasıldır?', ['Aynı','Farklı','Daima yanlış','Daima belirsiz'], 0, 'Denklik aynı değerdir.'],
    ['p⇔p kaçtır?', ['0','1','p′','q'], 1, 'Her önerme kendisine denktir.'],
    ['p⇔p′ için ne söylenir?', ['Daima doğru','Daima yanlış','p’ye eşit','q’ya eşit'], 1, 'Bir önerme değiliyle aynı değerde olamaz.']
  ])
});

extendTopicPractice(44, {
  summary: 'Her ve en az bir niceleyicileri, açık önerme ve niceleyicinin değili.',
  theory: { rules: [
    { title: 'Açık Önerme', formulaLines: ['p(x)'], tipLines: ['Değişkene bağlı, doğruluk değeri değişkene göre belirlenen ifadelerdir.'] },
    { title: 'Her Niceleyicisi', formulaLines: ['\\forall x'], tipLines: ['Tanım kümesindeki bütün elemanlar için doğru olmayı ifade eder.'] },
    { title: 'En Az Bir Niceleyicisi', formulaLines: ['\\exists x'], tipLines: ['Tanım kümesinde en az bir eleman için doğru olmayı ifade eder.'] },
    { title: 'Niceleyicinin Değili', formulaLines: ['(\\forall x\\;p(x))^\\prime\\equiv\\exists x\\;p(x)^\\prime', '(\\exists x\\;p(x))^\\prime\\equiv\\forall x\\;p(x)^\\prime'], tipLines: ['Her’in değili en az bir, en az bir’in değili her olur.'] }
  ], facts: ['Niceleyici tanım kümesine göre değerlendirilir.', 'Karşı örnek her niceleyicisini yanlış yapar.'], warning: '“Her” önermesini çürütmek için tek karşı örnek yeterlidir.' },
  examples: [
    { question: '“Her doğal sayı pozitiftir.” önermesi doğru mudur?', steps: [{ text: '0 doğal sayıdır fakat pozitif değildir.' }], answer: 'Yanlış' },
    { question: '“En az bir asal sayı çifttir.” doğru mudur?', steps: [{ text: '2 asal ve çifttir.' }], answer: 'Doğru' },
    { question: '∀x p(x) önermesinin değili nedir?', steps: ['\\exists x\\;p(x)^\\prime'], answer: '\\exists x\\;p(x)^\\prime' },
    { question: '∃x p(x) önermesinin değili nedir?', steps: ['\\forall x\\;p(x)^\\prime'], answer: '\\forall x\\;p(x)^\\prime' },
    { question: '“Her x için x²≥0” gerçek sayılarda doğru mudur?', steps: [{ text: 'Gerçek sayıların kareleri negatif olmaz.' }], answer: 'Doğru' }
  ],
  quiz: quizRows25([
    ['∀ sembolü ne anlama gelir?', ['Her','En az bir','Ve','Veya'], 0, '∀ her demektir.'],
    ['∃ sembolü ne anlama gelir?', ['Her','En az bir','Ve','Veya'], 1, '∃ en az bir demektir.'],
    ['∀x p(x) değili nedir?', ['∀x p′(x)','∃x p′(x)','∃x p(x)','p∧q'], 1, 'Her’in değili en az bir.'],
    ['∃x p(x) değili nedir?', ['∀x p′(x)','∃x p′(x)','∀x p(x)','p∨q'], 0, 'En az bir’in değili her.'],
    ['Her önermesini çürütmek için kaç karşı örnek yeterlidir?', ['1','2','3','Sonsuz'], 0, 'Tek karşı örnek yeterlidir.'],
    ['“En az bir” önermesini doğrulamak için ne gerekir?', ['Bir örnek','Tüm örnekler','Hiç örnek','Karşıt ters'], 0, 'Bir örnek yeterlidir.'],
    ['p(x) ne tür önermedir?', ['Açık önerme','Sabit önerme','Bileşik değil','Olasılık'], 0, 'Değişkene bağlıdır.'],
    ['“Her çift sayı 2’ye bölünür.” doğru mudur?', ['Doğru','Yanlış','Belirsiz','Önerme değil'], 0, 'Çift sayı tanımıdır.'],
    ['“En az bir doğal sayı negatiftir.” doğru mudur?', ['Doğru','Yanlış','Belirsiz','Önerme değil'], 1, 'Doğal sayılar negatif değildir.'],
    ['Niceleyiciler değerlendirilirken ne önemlidir?', ['Tanım kümesi','Renk','Yazı tipi','Sıra no'], 0, 'Hangi kümede çalışıldığı önemlidir.']
  ])
});

extendTopicPractice(45, {
  summary: 'Tanım, aksiyom, teorem ve ispat kavramları; matematiksel bilginin kurulma biçimi.',
  theory: { rules: [
    { title: 'Tanım', tipLines: ['Bir kavramın ne olduğunu açık ve kesin biçimde belirten ifadedir.'] },
    { title: 'Aksiyom', tipLines: ['Doğruluğu ispatsız kabul edilen temel önermedir.'] },
    { title: 'Teorem', tipLines: ['Doğruluğu ispatlanabilen matematiksel önermedir.'] },
    { title: 'İspat', tipLines: ['Bir teoremin doğruluğunu mantıksal adımlarla gösterme sürecidir.'] }
  ], facts: ['Tanım kavramı açıklar.', 'Aksiyom başlangıç kabulüdür.', 'Teorem ispat ister.'], warning: 'Örnek vermek çoğu zaman ispat değildir; genel doğruluk mantıksal olarak gösterilmelidir.' },
  examples: [
    { question: '“Çift sayı 2 ile bölünebilen tam sayıdır.” hangi kavramdır?', steps: [{ text: 'Bir kavramı açıklıyor.' }], answer: 'Tanım' },
    { question: 'Doğruluğu ispatsız kabul edilen ifade nedir?', steps: [{ text: 'Matematiksel sistemin başlangıç kabulleridir.' }], answer: 'Aksiyom' },
    { question: 'Doğruluğu ispatlanan önerme nedir?', steps: [{ text: 'İspatla doğrulanan sonuç teoremdir.' }], answer: 'Teorem' },
    { question: 'Bir teoremin doğruluğunu gösterme süreci nedir?', steps: [{ text: 'Mantıklı ve sıralı gerekçeler kullanılır.' }], answer: 'İspat' },
    { question: 'Tek bir örnek bir teoremi ispatlar mı?', steps: [{ text: 'Tek örnek genel durumu kanıtlamaz.' }], answer: 'Hayır' }
  ],
  quiz: quizRows25([
    ['Kavramı açıklayan kesin ifadeye ne denir?', ['Tanım','Aksiyom','Teorem','İspat'], 0, 'Tanım kavramı açıklar.'],
    ['Doğruluğu ispatsız kabul edilen ifade nedir?', ['Tanım','Aksiyom','Teorem','Örnek'], 1, 'Aksiyom başlangıç kabulüdür.'],
    ['Doğruluğu ispatlanan önerme nedir?', ['Tanım','Aksiyom','Teorem','Sembol'], 2, 'Teorem ispatlanır.'],
    ['Teoremin doğruluğunu gösterme süreci nedir?', ['İspat','Tanım','Küme','Olasılık'], 0, 'İspat sürecidir.'],
    ['Tek örnek genel ispat sayılır mı?', ['Evet','Hayır','Her zaman','Sadece doğal sayıda'], 1, 'Genel doğruluk gerekir.'],
    ['Karşı örnek ne işe yarar?', ['Genel önermeyi çürütebilir','Daima ispatlar','Tanım yapar','Aksiyom olur'], 0, 'Tek karşı örnek yeterli olabilir.'],
    ['Aksiyom ispatlanır mı?', ['Genellikle hayır','Daima evet','Sadece örnekle','Grafikle'], 0, 'İspatsız kabul edilir.'],
    ['Teorem neye dayanır?', ['İspata','Tahmine','Renge','Şansa'], 0, 'Teorem ispatla kurulur.'],
    ['Tanım için en önemli özellik nedir?', ['Açık ve kesin olması','Uzun olması','Şekilli olması','Yanlış olması'], 0, 'Belirsiz olmamalıdır.'],
    ['İspatta adımlar nasıl olmalıdır?', ['Mantıklı ve gerekçeli','Rastgele','Sadece sonuç','Sadece örnek'], 0, 'İspat gerekçelidir.']
  ])
});

extendTopicPractice(46, {
  summary: 'Küme, eleman, boş küme, evrensel küme, sonlu ve sonsuz küme kavramları.',
  theory: { rules: [
    { title: 'Küme', tipLines: ['İyi tanımlanmış nesneler topluluğuna küme denir.'] },
    { title: 'Eleman', formulaLines: ['a\\in A', 'b\\notin A'], tipLines: ['Bir nesnenin kümeye ait olup olmadığı ∈ ve ∉ sembolleriyle gösterilir.'] },
    { title: 'Boş Küme', formulaLines: ['\\varnothing'], tipLines: ['Hiç elemanı olmayan kümeye boş küme denir.'] },
    { title: 'Evrensel Küme', formulaLines: ['E'], tipLines: ['Üzerinde çalışılan bütün elemanları içeren kümeye evrensel küme denir.'] }
  ], facts: ['Kümeler liste, ortak özellik veya Venn şemasıyla gösterilebilir.', 'Eleman sayısı s(A) ile gösterilir.'], warning: 'Boş küme {0} değildir; {0} bir elemanlı kümedir.' },
  examples: [
    { question: 'A={1,2,3} ise 2∈A doğru mudur?', steps: [{ text: '2 kümenin elemanları arasında vardır.' }], answer: 'Doğru' },
    { question: 'A={1,2,3} ise 5∈A doğru mudur?', steps: [{ text: '5 kümede yoktur.' }], answer: 'Yanlış' },
    { question: 'A={a,b,c} ise s(A) kaçtır?', steps: [{ text: 'Kümede 3 eleman vardır.' }], answer: '3' },
    { question: 'Hiç elemanı olmayan küme nasıl gösterilir?', steps: ['\\varnothing'], answer: '\\varnothing' },
    { question: '{0} boş küme midir?', steps: [{ text: '{0} kümesinde 0 elemanı vardır.' }], answer: 'Hayır' }
  ],
  quiz: quizRows25([
    ['İyi tanımlanmış nesneler topluluğuna ne denir?', ['Küme','Önerme','Fonksiyon','Olasılık'], 0, 'Küme tanımıdır.'],
    ['a∈A ne demektir?', ['a A’nın elemanıdır','a A’da değildir','A boştur','a kümedir'], 0, '∈ elemanıdır.'],
    ['a∉A ne demektir?', ['a A’nın elemanıdır','a A’da değildir','A boştur','a kümedir'], 1, '∉ elemanı değildir.'],
    ['Boş küme sembolü hangisidir?', ['∅','∈','∪','∩'], 0, 'Boş küme ∅.'],
    ['{0} boş küme midir?', ['Evet','Hayır','Her zaman','Belirsiz'], 1, '0 elemanı vardır.'],
    ['s(A) neyi gösterir?', ['Eleman sayısı','Tümleme','Kesişim','Fark'], 0, 'Kardinalite.'],
    ['A={1,2,3} için s(A) kaçtır?', ['1','2','3','4'], 2, 'Üç eleman var.'],
    ['Evrensel küme genelde hangi harfle gösterilir?', ['A','B','E','Q'], 2, 'E kullanılır.'],
    ['Boş kümenin eleman sayısı kaçtır?', ['0','1','2','Sonsuz'], 0, 'Hiç elemanı yoktur.'],
    ['A={x|x çift rakam} ise 2 bu kümeye ait midir?', ['Evet','Hayır','Belirsiz','Küme değil'], 0, '2 çift rakamdır.']
  ])
});

extendTopicPractice(47, {
  summary: 'Alt küme, öz alt küme, alt küme sayısı ve öz alt küme sayısı.',
  theory: { rules: [
    { title: 'Alt Küme', formulaLines: ['A\\subseteq B'], tipLines: ['A’nın her elemanı B’de varsa A, B’nin alt kümesidir.'] },
    { title: 'Öz Alt Küme', formulaLines: ['A\\subset B'], tipLines: ['A alt küme olup B’ye eşit değilse öz alt kümedir.'] },
    { title: 'Alt Küme Sayısı', formulaLines: ['2^n'], tipLines: ['n elemanlı kümenin alt küme sayısı 2^n’dir.'] },
    { title: 'Öz Alt Küme Sayısı', formulaLines: ['2^n-1'], tipLines: ['Kümenin kendisi çıkarılır.'] }
  ], facts: ['Boş küme her kümenin alt kümesidir.', 'Her küme kendisinin alt kümesidir.'], warning: 'Öz alt kümede kümenin kendisi sayılmaz.' },
  examples: [
    { question: '3 elemanlı kümenin alt küme sayısı kaçtır?', steps: ['2^3=8'], answer: '8' },
    { question: '3 elemanlı kümenin öz alt küme sayısı kaçtır?', steps: ['2^3-1=7'], answer: '7' },
    { question: 'A={1,2}, B={1,2,3} ise A⊆B doğru mudur?', steps: [{ text: 'A’nın tüm elemanları B’de vardır.' }], answer: 'Doğru' },
    { question: 'Boş küme A’nın alt kümesi midir?', steps: [{ text: 'Boş küme her kümenin alt kümesidir.' }], answer: 'Evet' },
    { question: 'A kümesi kendisinin öz alt kümesi midir?', steps: [{ text: 'Öz alt kümede eşitlik olmaz.' }], answer: 'Hayır' }
  ],
  quiz: quizRows25([
    ['n elemanlı kümenin alt küme sayısı nedir?', ['n²','2^n','n!','n+1'], 1, 'Alt küme sayısı 2^n.'],
    ['n elemanlı kümenin öz alt küme sayısı nedir?', ['2^n','2^n-1','n!','n-1'], 1, 'Kendisi çıkarılır.'],
    ['4 elemanlı kümenin alt küme sayısı kaçtır?', ['8','12','16','24'], 2, '2^4=16.'],
    ['4 elemanlı kümenin öz alt küme sayısı kaçtır?', ['8','15','16','31'], 1, '16-1=15.'],
    ['Boş küme her kümenin alt kümesi midir?', ['Evet','Hayır','Sadece boşta','Belirsiz'], 0, 'Temel özellik.'],
    ['Her küme kendisinin alt kümesi midir?', ['Evet','Hayır','Sadece sonluysa','Asla'], 0, 'A⊆A.'],
    ['Her küme kendisinin öz alt kümesi midir?', ['Evet','Hayır','Sadece boşta','Daima'], 1, 'Öz alt kümede eşitlik yok.'],
    ['A⊆B ne demektir?', ['A’nın her elemanı B’de','B’nin her elemanı A’da','A ve B ayrık','A boş değil'], 0, 'Alt küme tanımı.'],
    ['A={1}, B={1,2} için A⊂B doğru mu?', ['Evet','Hayır','Belirsiz','A=B'], 0, 'A öz alt kümedir.'],
    ['5 elemanlı kümenin alt küme sayısı kaçtır?', ['16','25','32','64'], 2, '2^5=32.']
  ])
});

extendTopicPractice(48, {
  summary: 'Kümelerde kesişim, birleşim, ayrık kümeler ve eleman sayısı ilişkileri.',
  theory: { rules: [
    { title: 'Kesişim', formulaLines: ['A\\cap B'], tipLines: ['A ve B kümelerinin ortak elemanlarından oluşur.'] },
    { title: 'Birleşim', formulaLines: ['A\\cup B'], tipLines: ['A’da veya B’de bulunan elemanlardan oluşur.'] },
    { title: 'Ayrık Kümeler', formulaLines: ['A\\cap B=\\varnothing'], tipLines: ['Ortak elemanı olmayan kümelerdir.'] },
    { title: 'Eleman Sayısı', formulaLines: ['s(A\\cup B)=s(A)+s(B)-s(A\\cap B)'], tipLines: ['Ortak kısım iki kez sayıldığı için çıkarılır.'] }
  ], facts: ['Kesişim ortak kısmı, birleşim toplam alanı gösterir.', 'Ayrık kümelerde birleşim eleman sayısı toplamdır.'], warning: 'Birleşimde ortak elemanlar bir kez yazılır.' },
  examples: [
    { question: 'A={1,2,3}, B={3,4} ise A∩B nedir?', steps: [{ text: 'Ortak eleman 3’tür.' }], answer: '\\{3\\}' },
    { question: 'A={1,2,3}, B={3,4} ise A∪B nedir?', steps: [{ text: 'Tüm elemanlar bir kez yazılır.' }], answer: '\\{1,2,3,4\\}' },
    { question: 's(A)=5, s(B)=7, s(A∩B)=2 ise s(A∪B) kaçtır?', steps: ['5+7-2=10'], answer: '10' },
    { question: 'A∩B=∅ ise A ve B nasıl kümelerdir?', steps: [{ text: 'Ortak eleman yoktur.' }], answer: 'Ayrık' },
    { question: 'Ayrık iki kümede s(A)=4, s(B)=6 ise s(A∪B) kaçtır?', steps: ['4+6=10'], answer: '10' }
  ],
  quiz: quizRows25([
    ['A∩B neyi gösterir?', ['Ortak elemanlar','Tüm elemanlar','Fark','Tümleme'], 0, 'Kesişim ortak kısımdır.'],
    ['A∪B neyi gösterir?', ['Ortak elemanlar','A veya B’de olanlar','Sadece A','Sadece B'], 1, 'Birleşim.'],
    ['A∩B=∅ ise kümeler nasıldır?', ['Ayrık','Eşit','Alt küme','Evrensel'], 0, 'Ortak yok.'],
    ['s(A∪B) formülü nedir?', ['s(A)+s(B)','s(A)+s(B)-s(A∩B)','s(A)-s(B)','s(A∩B)'], 1, 'Ortak çıkarılır.'],
    ['A={1,2}, B={2,3} için A∩B nedir?', ['{1}','{2}','{3}','{1,2,3}'], 1, 'Ortak 2.'],
    ['A={1,2}, B={2,3} için A∪B nedir?', ['{1}','{2}','{3}','{1,2,3}'], 3, 'Tüm elemanlar.'],
    ['s(A)=3, s(B)=4, s(A∩B)=1 ise s(A∪B) kaçtır?', ['6','7','8','12'], 0, '3+4-1=6.'],
    ['Ayrık kümelerde s(A∪B) nedir?', ['s(A)+s(B)','s(A)-s(B)','0','1'], 0, 'Ortak yoktur.'],
    ['Birleşimde ortak eleman kaç kez yazılır?', ['0','1','2','Sonsuz'], 1, 'Kümede tekrar yoktur.'],
    ['Kesişim boşsa ortak eleman sayısı kaçtır?', ['0','1','2','Belirsiz'], 0, 'Boş kesişim.']
  ])
});

extendTopicPractice(49, {
  summary: 'Kümelerde fark, tümleme, evrensel kümeye göre tümleyen ve De Morgan ilişkileri.',
  theory: { rules: [
    { title: 'Fark', formulaLines: ['A-B'], tipLines: ['A’da olup B’de olmayan elemanlardan oluşur.'] },
    { title: 'Tümleme', formulaLines: ['A^\\prime=E-A'], tipLines: ['Evrensel kümede olup A’da olmayan elemanlardan oluşur.'] },
    { title: 'De Morgan', formulaLines: ['(A\\cup B)^\\prime=A^\\prime\\cap B^\\prime', '(A\\cap B)^\\prime=A^\\prime\\cup B^\\prime'], tipLines: ['Tümleme alınırken birleşim ve kesişim yer değiştirir.'] },
    { title: 'Farkın Eleman Sayısı', formulaLines: ['s(A-B)=s(A)-s(A\\cap B)'], tipLines: ['A’dan ortak kısım çıkarılır.'] }
  ], facts: ['A-A=∅ olur.', 'A-∅=A olur.', 'A∪A′=E ve A∩A′=∅.'], warning: 'A-B ile B-A genellikle aynı değildir.' },
  examples: [
    { question: 'A={1,2,3}, B={3,4} ise A-B nedir?', steps: [{ text: 'A’da olup B’de olmayanlar 1 ve 2’dir.' }], answer: '\\{1,2\\}' },
    { question: 'E={1,2,3,4}, A={1,3} ise A′ nedir?', steps: [{ text: 'E’de olup A’da olmayanlar 2 ve 4’tür.' }], answer: '\\{2,4\\}' },
    { question: 'A-A nedir?', steps: [{ text: 'A’da olup A’da olmayan eleman yoktur.' }], answer: '\\varnothing' },
    { question: '(A∪B)′ ifadesini yazınız.', steps: ['(A\\cup B)^\\prime=A^\\prime\\cap B^\\prime'], answer: 'A^\\prime\\cap B^\\prime' },
    { question: 's(A)=8, s(A∩B)=3 ise s(A-B) kaçtır?', steps: ['8-3=5'], answer: '5' }
  ],
  quiz: quizRows25([
    ['A-B neyi gösterir?', ['A’da olup B’de olmayanlar','B’de olup A’da olmayanlar','Ortaklar','Tüm evren'], 0, 'Fark tanımı.'],
    ['A′ neyi gösterir?', ['A’nın tümleyeni','A’nın kendisi','Boş küme','Kesişim'], 0, 'Tümleme.'],
    ['A-A nedir?', ['A','∅','E','A′'], 1, 'Kendinden fark boş.'],
    ['A-∅ nedir?', ['A','∅','E','A′'], 0, 'Boş küme çıkarınca değişmez.'],
    ['A∪A′ nedir?', ['A','∅','E','A′'], 2, 'Tüm evren.'],
    ['A∩A′ nedir?', ['A','∅','E','A′'], 1, 'Ortak yok.'],
    ['(A∪B)′ hangisidir?', ['A′∪B′','A′∩B′','A∩B','A-B'], 1, 'De Morgan.'],
    ['(A∩B)′ hangisidir?', ['A′∪B′','A′∩B′','A∪B','A-B'], 0, 'De Morgan.'],
    ['s(A-B) formülü nedir?', ['s(A)-s(A∩B)','s(B)-s(A)','s(A)+s(B)','s(A∩B)'], 0, 'A’dan ortak çıkar.'],
    ['A-B ile B-A genellikle aynı mıdır?', ['Evet','Hayır','Daima','Sadece boşta'], 1, 'Fark yönlüdür.']
  ])
});

extendTopicPractice(50, {
  summary: 'Küme problemlerinde Venn şeması, iki ve üç küme, en az/en çok ifadeleri.',
  theory: { rules: [
    { title: 'İki Küme Problemleri', formulaLines: ['s(A\\cup B)=s(A)+s(B)-s(A\\cap B)'], tipLines: ['Ortak elemanlar iki kez sayıldığı için bir kez çıkarılır.'] },
    { title: 'Sadece A', formulaLines: ['s(A-B)=s(A)-s(A\\cap B)'], tipLines: ['A kümesinden ortak bölge çıkarılır.'] },
    { title: 'En Az Bir', formulaLines: ['A\\cup B'], tipLines: ['Kümelerden en az birinde olanlar birleşimdir.'] },
    { title: 'Hiçbiri', formulaLines: ['s(E)-s(A\\cup B)'], tipLines: ['Evrenselden en az birinde olanlar çıkarılır.'] }
  ], facts: ['Venn şemasında önce ortak bölgeler yazılır.', 'Sadece bölgeler daha sonra bulunur.', 'Toplam, tüm ayrık bölgelerin toplamıdır.'], warning: '“Sadece” kelimesi ortak bölgeyi dışarıda bırakır.' },
  examples: [
    { question: '30 kişilik sınıfta 18 kişi futbol, 12 kişi basketbol, 5 kişi ikisini oynuyor. En az birini oynayan kaç kişi vardır?', steps: ['18+12-5=25'], answer: '25' },
    { question: 'Aynı sınıfta sadece futbol oynayan kaç kişidir?', steps: ['18-5=13'], answer: '13' },
    { question: 'Aynı sınıfta hiçbirini oynamayan kaç kişidir?', steps: ['30-25=5'], answer: '5' },
    { question: 's(A)=20, s(B)=15, s(A∪B)=28 ise s(A∩B) kaçtır?', steps: ['28=20+15-x', 'x=7'], answer: '7' },
    { question: '40 kişiden 22’si İngilizce, 18’i Almanca, 10’u ikisini biliyor. Sadece Almanca bilen kaçtır?', steps: ['18-10=8'], answer: '8' }
  ],
  quiz: quizRows25([
    ['Küme problemlerinde ortak bölge genellikle ne zaman yazılır?', ['Önce','Sonra','Hiç','Rastgele'], 0, 'Ortak bölge önce yazılır.'],
    ['“Sadece A” ne demektir?', ['A-B','A∩B','A∪B','B-A'], 0, 'A’da olup B’de olmayan.'],
    ['“En az birinde” hangi işlemdir?', ['Kesişim','Birleşim','Fark','Tümleme'], 1, 'A∪B.'],
    ['“İkisinde de” hangi işlemdir?', ['Kesişim','Birleşim','Fark','Tümleme'], 0, 'A∩B.'],
    ['Hiçbiri nasıl bulunur?', ['E - birleşim','Kesişim','Sadece A','Sadece B'], 0, 'Evrenselden birleşim çıkarılır.'],
    ['s(A)=10, s(B)=8, s(A∩B)=3 ise s(A∪B) kaçtır?', ['15','18','21','24'], 0, '10+8-3=15.'],
    ['s(A)=12, s(B)=9, s(A∪B)=17 ise s(A∩B) kaçtır?', ['2','3','4','5'], 2, '17=21-x.'],
    ['A’da 15 kişi, ortak 4 ise sadece A kaçtır?', ['4','9','11','15'], 2, '15-4=11.'],
    ['B’de 20 kişi, ortak 7 ise sadece B kaçtır?', ['7','13','20','27'], 1, '20-7=13.'],
    ['Toplam 50, en az biri 38 ise hiçbiri kaçtır?', ['8','10','12','38'], 2, '50-38=12.']
  ])
});

// 74-87. konular: polinom, çarpanlara ayırma, ikinci derece denklemler.
extendTopicPractice(74, {
  summary: 'Polinom tanımı, derece, katsayı, sabit terim ve polinom olma koşulları.',
  theory: { rules: [
    { title: 'Polinom', formulaLines: ['P(x)=a_nx^n+\\cdots+a_1x+a_0'], tipLines: ['x’in doğal sayı kuvvetleriyle oluşturulan cebirsel ifadelerdir.'] },
    { title: 'Derece', formulaLines: ['der(P)=n'], tipLines: ['Sıfırdan farklı en büyük üs polinomun derecesidir.'] },
    { title: 'Sabit Terim', formulaLines: ['P(0)'], tipLines: ['x=0 yazıldığında kalan terimdir.'] },
    { title: 'Polinom Olma Koşulu', tipLines: ['Değişkenin üssü negatif veya kesirli olamaz; değişken paydada bulunamaz.'] }
  ], facts: ['Katsayılar gerçek sayı olabilir.', 'Sıfır polinomunun derecesi tanımsız kabul edilir.'], warning: '1/x veya √x içeren ifadeler polinom değildir.' },
  examples: [
    { question: 'P(x)=3x²-2x+5 polinomunun derecesi kaçtır?', steps: [{ text: 'En büyük üs 2’dir.' }], answer: '2' },
    { question: 'P(x)=4x³+x-7 için sabit terim kaçtır?', steps: ['P(0)=-7'], answer: '-7' },
    { question: 'P(x)=2x⁴-5x²+1 için baş katsayı kaçtır?', steps: [{ text: 'En büyük dereceli terimin katsayısı 2’dir.' }], answer: '2' },
    { question: 'x⁻¹+2 ifadesi polinom mudur?', steps: [{ text: 'x’in üssü negatif olamaz.' }], answer: 'Polinom değildir.' },
    { question: '√x+1 ifadesi polinom mudur?', steps: [{ text: 'x’in üssü 1/2 olduğundan doğal sayı değildir.' }], answer: 'Polinom değildir.' }
  ],
  quiz: quizRows25([
    ['Polinomda değişken üsleri nasıl olmalıdır?', ['Doğal sayı','Negatif','Kesirli','İrrasyonel'], 0, 'Polinomda üsler doğal sayıdır.'],
    ['P(x)=x³+2x+1 derecesi kaçtır?', ['1','2','3','4'], 2, 'En büyük üs 3.'],
    ['P(x)=5x²-7 sabit terim kaçtır?', ['5','2','-7','0'], 2, 'x’siz terim -7.'],
    ['P(0) neyi verir?', ['Sabit terim','Baş katsayı','Derece','Kök'], 0, 'x=0 yazılır.'],
    ['1/x polinom mudur?', ['Evet','Hayır','Daima','Sabit'], 1, 'x paydada.'],
    ['x²+x polinom mudur?', ['Evet','Hayır','Kök','Rasyonel değil'], 0, 'Üsler doğal sayı.'],
    ['√x polinom mudur?', ['Evet','Hayır','Sabit','Derece 1'], 1, 'Üs kesirlidir.'],
    ['P(x)=7 baş katsayısı kaçtır?', ['0','1','7','Tanımsız'], 2, 'Sabit polinomun katsayısı 7.'],
    ['P(x)=0 polinomunun derecesi nedir?', ['0','1','Tanımsız','Sonsuz'], 2, 'Sıfır polinomunda derece tanımsız kabul edilir.'],
    ['P(x)=2x⁵+x² derecesi kaçtır?', ['2','3','5','7'], 2, 'En büyük üs 5.']
  ])
});

extendTopicPractice(75, {
  summary: 'Polinomlarda toplama, çıkarma, çarpma ve derece ilişkileri.',
  theory: { rules: [
    { title: 'Toplama - Çıkarma', tipLines: ['Benzer dereceli terimlerin katsayıları toplanır veya çıkarılır.'] },
    { title: 'Çarpma', tipLines: ['Her terim diğer polinomun her terimiyle çarpılır ve benzer terimler toplanır.'] },
    { title: 'Derece', formulaLines: ['der(P\\cdot Q)=der(P)+der(Q)'], tipLines: ['Sıfır olmayan polinomlarda çarpımın derecesi dereceler toplamıdır.'] },
    { title: 'Sabit Terim', formulaLines: ['(P\\cdot Q)(0)=P(0)\\cdot Q(0)'], tipLines: ['Çarpımın sabit terimi sabit terimlerin çarpımıdır.'] }
  ], facts: ['Toplama çıkarma işleminde aynı dereceli terimler birleştirilir.', 'Çarpma işleminde dağılma özelliği kullanılır.'], warning: 'Toplamın derecesi bazen baş terimler birbirini yok ederse düşebilir.' },
  examples: [
    { question: 'P=x²+2x+1, Q=3x²-x+4 ise P+Q nedir?', steps: ['(1+3)x^2+(2-1)x+(1+4)'], answer: '4x^2+x+5' },
    { question: 'P=2x²+3x, Q=x²-x ise P-Q nedir?', steps: ['2x^2+3x-(x^2-x)', 'x^2+4x'], answer: 'x^2+4x' },
    { question: '(x+2)(x+3) çarpımını bulunuz.', steps: ['x^2+3x+2x+6'], answer: 'x^2+5x+6' },
    { question: 'der(P)=3, der(Q)=4 ise der(PQ) kaçtır?', steps: ['3+4=7'], answer: '7' },
    { question: 'P(0)=2, Q(0)=-5 ise (PQ)(0) kaçtır?', steps: ['2\\cdot(-5)=-10'], answer: '-10' }
  ],
  quiz: quizRows25([
    ['Polinom toplamada hangi terimler birleştirilir?', ['Benzer dereceli','Rastgele','Paydalar','Kökler'], 0, 'Aynı dereceli terimler.'],
    ['(x+1)+(2x+3) nedir?', ['3x+4','2x+4','3x+3','x+4'], 0, 'x+2x ve 1+3.'],
    ['(3x²+x)-(x²-2x) nedir?', ['2x²+3x','4x²-x','2x²-x','3x²'], 0, '3x²-x², x+2x.'],
    ['(x+1)(x+2) nedir?', ['x²+3x+2','x²+2','2x+3','x²+x+2'], 0, 'Dağılma.'],
    ['der(P)=2, der(Q)=5 ise der(PQ) kaçtır?', ['3','5','7','10'], 2, '2+5=7.'],
    ['P(0)=3, Q(0)=4 ise (PQ)(0) kaçtır?', ['7','12','1','0'], 1, '3·4.'],
    ['Toplamda baş terimler yok olursa derece ne olabilir?', ['Düşebilir','Daima artar','Daima 0','Tanımsız'], 0, 'Katsayılar birbirini götürebilir.'],
    ['(2x)(3x²) nedir?', ['5x²','6x²','6x³','5x³'], 2, 'Katsayılar çarpılır, üsler toplanır.'],
    ['(x-1)(x+1) nedir?', ['x²-1','x²+1','x²+2x+1','x²-2x+1'], 0, 'İki kare farkı.'],
    ['Polinom çarpmada hangi özellik kullanılır?', ['Dağılma','Sadece toplama','Kök alma','Tümleme'], 0, 'Dağılma özelliği.']
  ])
});

extendTopicPractice(76, {
  summary: 'Polinom bölme, bölüm, kalan ve bölme algoritması.',
  theory: { rules: [
    { title: 'Bölme Algoritması', formulaLines: ['P(x)=Q(x)\\cdot B(x)+K(x)'], tipLines: ['P bölünen, Q bölen, B bölüm, K kalandır.'] },
    { title: 'Kalan Derecesi', formulaLines: ['der(K)<der(Q)'], tipLines: ['Kalanın derecesi bölenin derecesinden küçüktür.'] },
    { title: 'Tam Bölünme', formulaLines: ['K(x)=0'], tipLines: ['Kalan sıfırsa P polinomu Q polinomuna tam bölünür.'] },
    { title: 'Uzun Bölme', tipLines: ['Baş terimler bölünür, bulunan terim bölenle çarpılıp çıkarılır.'] }
  ], facts: ['Bölme işleminde amaç bölüm ve kalanı bulmaktır.', 'Bölen doğrusal ise kalan sabit olur.'], warning: 'Kalan derecesi bölen derecesinden küçük olana kadar işlem sürer.' },
  examples: [
    { question: 'P=x²+3x+2, Q=x+1 ise bölüm ve kalan nedir?', steps: ['x^2+3x+2=(x+1)(x+2)+0'], answer: 'B=x+2, K=0' },
    { question: 'P=x²+1, Q=x-1 ise kalan kaçtır?', steps: ['x=1\\Rightarrow P(1)=2'], answer: '2' },
    { question: 'P=x³-1, Q=x-1 ise bölüm nedir?', steps: ['x^3-1=(x-1)(x^2+x+1)'], answer: 'x^2+x+1' },
    { question: 'Bölenin derecesi 2 ise kalan en fazla kaçıncı derecedir?', steps: [{ text: 'Kalan derecesi bölen derecesinden küçüktür.' }], answer: '1' },
    { question: 'P=Q·B+K denkleminde K=0 ise ne olur?', steps: [{ text: 'Kalan sıfır olduğundan tam bölünür.' }], answer: 'Tam bölünür.' }
  ],
  quiz: quizRows25([
    ['Polinom bölme algoritması hangisidir?', ['P=QB+K','P=Q+B','P=Q-K','P=K/B'], 0, 'Bölme algoritması.'],
    ['Kalan derecesi bölen derecesinden nasıl olmalıdır?', ['Küçük','Büyük','Eşit','Daima 0'], 0, 'der(K)<der(Q).'],
    ['Kalan sıfırsa ne olur?', ['Tam bölünür','Bölünmez','Derece artar','Kök yoktur'], 0, 'K=0.'],
    ['Bölen x-a ise kalan nasıl bulunur?', ['P(a)','P(0)','P(-a)','P(1)'], 0, 'Kalan teoremi.'],
    ['x²-1 polinomu x-1 ile bölününce kalan kaçtır?', ['0','1','2','-1'], 0, 'P(1)=0.'],
    ['x²+1 polinomu x-1 ile bölününce kalan kaçtır?', ['0','1','2','3'], 2, 'P(1)=2.'],
    ['x²+3x+2, x+1 ile tam bölünür mü?', ['Evet','Hayır','Belirsiz','Derece yetmez'], 0, 'P(-1)=0.'],
    ['Bölen derecesi 1 ise kalan derecesi ne olur?', ['Sabit','1','2','Daha büyük'], 0, 'Derece <1.'],
    ['Bölen derecesi 3 ise kalan en fazla kaçıncı derecedir?', ['1','2','3','4'], 1, 'Derece <3.'],
    ['P=QB+K denkleminde B neyi gösterir?', ['Bölüm','Bölen','Bölünen','Kalan'], 0, 'B bölüm polinomudur.']
  ])
});

extendTopicPractice(77, {
  summary: 'Kalan teoremi, çarpan teoremi ve Horner yöntemiyle hızlı bölme.',
  theory: { rules: [
    { title: 'Kalan Teoremi', formulaLines: ['P(x)\\text{, }x-a\\text{ ile bölünürse kalan }P(a)'], tipLines: ['Doğrusal bölenlerde kalan polinom değeriyle bulunur.'] },
    { title: 'Çarpan Teoremi', formulaLines: ['P(a)=0\\Rightarrow x-a\\text{ çarpandır}'], tipLines: ['Kalan sıfırsa bölen çarpandır.'] },
    { title: 'Horner', tipLines: ['Katsayılar sırayla yazılır, a değeriyle hızlı sentetik bölme yapılır.'] },
    { title: 'Eksik Dereceler', tipLines: ['Eksik dereceli terimler için katsayı 0 yazılır.'] }
  ], facts: ['Horner özellikle x-a biçiminde bölenlerde pratiktir.', 'Eksik terimi unutmak sonucu bozar.'], warning: 'x+a ile bölme için a yerine -a yazılır.' },
  examples: [
    { question: 'P(x)=x²+2x+3 polinomunun x-1 ile bölümünden kalan kaçtır?', steps: ['P(1)=1+2+3=6'], answer: '6' },
    { question: 'P(x)=x²-4 polinomunun x-2 ile bölümünden kalan kaçtır?', steps: ['P(2)=0'], answer: '0' },
    { question: 'x²-4 için x-2 çarpan mıdır?', steps: ['P(2)=0'], answer: 'Evet' },
    { question: 'P(x)=x³+1 polinomunun x+1 ile bölümünden kalan kaçtır?', steps: ['x+1=x-(-1)', 'P(-1)=-1+1=0'], answer: '0' },
    { question: 'P(x)=2x³+0x²-x+5 için Horner’da katsayılar nedir?', steps: [{ text: 'Eksik x² terimi için 0 yazılır.' }], answer: '2,0,-1,5' }
  ],
  quiz: quizRows25([
    ['P(x), x-a ile bölünürse kalan nedir?', ['P(a)','P(-a)','P(0)','a'], 0, 'Kalan teoremi.'],
    ['P(x), x+a ile bölünürse kalan nedir?', ['P(a)','P(-a)','P(0)','a'], 1, 'x+a=x-(-a).'],
    ['P(a)=0 ise x-a nedir?', ['Çarpan','Kalan','Derece','Sabit'], 0, 'Çarpan teoremi.'],
    ['P(x)=x²+1, x-2 ile bölünürse kalan kaçtır?', ['3','4','5','6'], 2, 'P(2)=5.'],
    ['P(x)=x²-9, x-3 ile bölünürse kalan kaçtır?', ['0','3','6','9'], 0, 'P(3)=0.'],
    ['P(x)=x²-9 için x-3 çarpan mıdır?', ['Evet','Hayır','Belirsiz','Sabit'], 0, 'Kalan 0.'],
    ['P(x)=x²-9 için x+3 çarpan mıdır?', ['Evet','Hayır','Belirsiz','Sabit'], 0, 'P(-3)=0.'],
    ['Horner’da eksik terim için ne yazılır?', ['0','1','-1','Atlanır'], 0, 'Katsayı 0.'],
    ['P=x³+2 için katsayılar nedir?', ['1,0,0,2','1,2','0,1,2','1,0,2'], 0, 'Eksik x² ve x katsayıları 0.'],
    ['x-5 ile bölmede hangi değer kullanılır?', ['5','-5','0','1'], 0, 'a=5.']
  ])
});

extendTopicPractice(78, {
  summary: 'Ortak çarpan parantezine alma ve ifadeyi daha sade çarpanlara ayırma.',
  theory: { rules: [
    { title: 'Ortak Çarpan', tipLines: ['Terimlerde ortak bulunan sayı veya değişken dışarı alınır.'] },
    { title: 'Dağılmanın Tersi', formulaLines: ['ab+ac=a(b+c)'], tipLines: ['Çarpanlara ayırma, dağılma özelliğinin tersidir.'] },
    { title: 'En Büyük Ortak Çarpan', tipLines: ['Katsayıların EBOB’u ve değişkenlerin en küçük üsleri ortak alınır.'] },
    { title: 'Gruplama', tipLines: ['Dört terimli ifadelerde ikili gruplama ile ortak çarpan oluşturulabilir.'] }
  ], facts: ['Ortak çarpan alma çarpanlara ayırmanın ilk adımıdır.', 'Parantez açılarak kontrol yapılabilir.'], warning: 'Ortak çarpanı aldıktan sonra parantez içindeki tüm terimler kalmalıdır; özellikle 1’i unutma.' },
  examples: [
    { question: '6x+9 ifadesini çarpanlara ayırınız.', steps: ['3(2x+3)'], answer: '3(2x+3)' },
    { question: 'x²+3x ifadesini çarpanlara ayırınız.', steps: ['x(x+3)'], answer: 'x(x+3)' },
    { question: '4x³-8x² ifadesini çarpanlara ayırınız.', steps: ['4x^2(x-2)'], answer: '4x^2(x-2)' },
    { question: 'ab+ac ifadesini çarpanlara ayırınız.', steps: ['a(b+c)'], answer: 'a(b+c)' },
    { question: 'xy+xz+2y+2z ifadesini gruplayınız.', steps: ['x(y+z)+2(y+z)', '(x+2)(y+z)'], answer: '(x+2)(y+z)' }
  ],
  quiz: quizRows25([
    ['ab+ac ortak çarpanla nasıl yazılır?', ['a(b+c)','b(a+c)','c(a+b)','abc'], 0, 'Ortak a.'],
    ['6x+12 ortak çarpanı nedir?', ['2','3','6','12x'], 2, 'En büyük ortak 6.'],
    ['6x+12 = ?', ['6(x+2)','3(2x+4)','x(6+12)','12(x+1)'], 0, '6 dışarı alınır.'],
    ['x²+5x = ?', ['x(x+5)','x²(1+5)','5(x+1)','x+5'], 0, 'Ortak x.'],
    ['4x²+8x ortak çarpanı nedir?', ['2','4','4x','8x'], 2, '4x ortak.'],
    ['4x²+8x = ?', ['4x(x+2)','4(x²+2)','x(4x+8x)','8x(x+1)'], 0, '4x dışarı.'],
    ['3a+3b = ?', ['3(a+b)','a(3+b)','b(3+a)','3ab'], 0, 'Ortak 3.'],
    ['Gruplama hangi durumda sık kullanılır?', ['Dört terimli ifadelerde','Sadece sayılarda','Köklerde','Olasılıkta'], 0, 'İkili gruplama.'],
    ['Ortak çarpan almanın kontrolü nasıl yapılır?', ['Parantez açarak','Kök alarak','Tümleyerek','Grafik çizerek'], 0, 'Geri çarpılır.'],
    ['2x+2 için parantez içi ne olur?', ['2(x+1)','x(2+2)','2x(1+1)','4x'], 0, '2 dışarı alınır.']
  ])
});

extendTopicPractice(79, {
  summary: 'Tam kare açılımları ve iki kare farkı özdeşlikleriyle çarpanlara ayırma.',
  theory: { rules: [
    { title: 'Tam Kare Toplam', formulaLines: ['a^2+2ab+b^2=(a+b)^2'], tipLines: ['İlk ve son terim kare, orta terim iki kat çarpımdır.'] },
    { title: 'Tam Kare Fark', formulaLines: ['a^2-2ab+b^2=(a-b)^2'], tipLines: ['Orta terimin işareti eksi ise fark karesi olur.'] },
    { title: 'İki Kare Farkı', formulaLines: ['a^2-b^2=(a-b)(a+b)'], tipLines: ['İki kare terimin farkı iki çarpana ayrılır.'] },
    { title: 'Kontrol', tipLines: ['Çarpanlar açılarak ilk ifadeye dönülür.'] }
  ], facts: ['x²+6x+9=(x+3)².', 'x²-9=(x-3)(x+3).'], warning: 'İki kare toplamı gerçek sayılarda bu özdeşlikle çarpanlara ayrılamaz.' },
  examples: [
    { question: 'x²+6x+9 ifadesini çarpanlara ayırınız.', steps: ['x^2+2\\cdot x\\cdot3+3^2'], answer: '(x+3)^2' },
    { question: 'x²-10x+25 ifadesini çarpanlara ayırınız.', steps: ['x^2-2\\cdot x\\cdot5+5^2'], answer: '(x-5)^2' },
    { question: 'x²-16 ifadesini çarpanlara ayırınız.', steps: ['x^2-4^2'], answer: '(x-4)(x+4)' },
    { question: '4x²-9 ifadesini çarpanlara ayırınız.', steps: ['(2x)^2-3^2'], answer: '(2x-3)(2x+3)' },
    { question: '9x²+12x+4 ifadesini çarpanlara ayırınız.', steps: ['(3x)^2+2\\cdot3x\\cdot2+2^2'], answer: '(3x+2)^2' }
  ],
  quiz: quizRows25([
    ['a²+2ab+b² hangisidir?', ['(a+b)²','(a-b)²','a²-b²','a+b'], 0, 'Tam kare toplam.'],
    ['a²-2ab+b² hangisidir?', ['(a+b)²','(a-b)²','a²-b²','a-b'], 1, 'Tam kare fark.'],
    ['a²-b² hangisidir?', ['(a-b)(a+b)','(a+b)²','(a-b)²','a²+b²'], 0, 'İki kare farkı.'],
    ['x²+4x+4 = ?', ['(x+2)²','(x-2)²','(x-2)(x+2)','x(x+4)'], 0, 'Tam kare.'],
    ['x²-8x+16 = ?', ['(x+4)²','(x-4)²','(x-4)(x+4)','x²-16'], 1, 'Tam kare.'],
    ['x²-25 = ?', ['(x-5)(x+5)','(x+5)²','(x-5)²','x(x-25)'], 0, 'İki kare farkı.'],
    ['4x²-1 = ?', ['(2x-1)(2x+1)','(4x-1)(x+1)','(2x+1)²','(2x-1)²'], 0, 'İki kare farkı.'],
    ['x²+9 gerçek sayılarda iki kare farkı mıdır?', ['Evet','Hayır','Daima','Sadece x=0'], 1, 'Toplamdır.'],
    ['9x²-16 = ?', ['(3x-4)(3x+4)','(9x-4)(x+4)','(3x+4)²','(3x-4)²'], 0, 'İki kare farkı.'],
    ['x²+10x+25 = ?', ['(x+5)²','(x-5)²','(x-5)(x+5)','x(x+10)'], 0, 'Tam kare.']
  ])
});

extendTopicPractice(80, {
  summary: 'Tam küp açılımları, küp farkı ve küp toplamı özdeşlikleri.',
  theory: { rules: [
    { title: 'Tam Küp Toplam', formulaLines: ['a^3+3a^2b+3ab^2+b^3=(a+b)^3'], tipLines: ['Küp açılımında katsayılar 1,3,3,1’dir.'] },
    { title: 'Tam Küp Fark', formulaLines: ['a^3-3a^2b+3ab^2-b^3=(a-b)^3'], tipLines: ['İşaretler sırayla +, -, +, - olur.'] },
    { title: 'Küp Toplamı', formulaLines: ['a^3+b^3=(a+b)(a^2-ab+b^2)'], tipLines: ['İki küp toplamı çarpanlara ayrılır.'] },
    { title: 'Küp Farkı', formulaLines: ['a^3-b^3=(a-b)(a^2+ab+b^2)'], tipLines: ['İki küp farkı çarpanlara ayrılır.'] }
  ], facts: ['x³+8=(x+2)(x²-2x+4).', 'x³-27=(x-3)(x²+3x+9).'], warning: 'Küp toplamında ikinci çarpanın orta terimi eksi, küp farkında artıdır.' },
  examples: [
    { question: 'x³+8 ifadesini çarpanlara ayırınız.', steps: ['x^3+2^3'], answer: '(x+2)(x^2-2x+4)' },
    { question: 'x³-27 ifadesini çarpanlara ayırınız.', steps: ['x^3-3^3'], answer: '(x-3)(x^2+3x+9)' },
    { question: '8x³+1 ifadesini çarpanlara ayırınız.', steps: ['(2x)^3+1^3'], answer: '(2x+1)(4x^2-2x+1)' },
    { question: 'x³+3x²+3x+1 nedir?', steps: [{ text: 'Tam küp toplamı açılımıdır.' }], answer: '(x+1)^3' },
    { question: 'x³-6x²+12x-8 nedir?', steps: [{ text: 'a=x, b=2 için tam küp farkıdır.' }], answer: '(x-2)^3' }
  ],
  quiz: quizRows25([
    ['a³+b³ nasıl ayrılır?', ['(a+b)(a²-ab+b²)','(a-b)(a²+ab+b²)','(a+b)²','a+b'], 0, 'Küp toplamı.'],
    ['a³-b³ nasıl ayrılır?', ['(a+b)(a²-ab+b²)','(a-b)(a²+ab+b²)','(a-b)²','a-b'], 1, 'Küp farkı.'],
    ['x³+8 = ?', ['(x+2)(x²-2x+4)','(x-2)(x²+2x+4)','(x+2)²','x(x²+8)'], 0, '2³=8.'],
    ['x³-8 = ?', ['(x+2)(x²-2x+4)','(x-2)(x²+2x+4)','(x-2)²','x(x²-8)'], 1, 'Küp farkı.'],
    ['x³+27 = ?', ['(x+3)(x²-3x+9)','(x-3)(x²+3x+9)','(x+3)²','x+27'], 0, '3³=27.'],
    ['x³-27 = ?', ['(x+3)(x²-3x+9)','(x-3)(x²+3x+9)','(x-3)²','x-27'], 1, 'Küp farkı.'],
    ['(a+b)³ açılım katsayıları nedir?', ['1,2,1','1,3,3,1','1,4,6,4,1','3,3,1'], 1, 'Küp açılımı.'],
    ['(x+1)³ açılımı nedir?', ['x³+3x²+3x+1','x³+x²+x+1','x³+1','x²+2x+1'], 0, 'Tam küp.'],
    ['(x-1)³ açılımı nedir?', ['x³-3x²+3x-1','x³-x²+x-1','x³-1','x²-2x+1'], 0, 'Tam küp fark.'],
    ['Küp toplamında ikinci çarpanın orta terimi nasıldır?', ['Eksi','Artı','Sıfır','Yok'], 0, 'a²-ab+b².']
  ])
});

extendTopicPractice(81, {
  summary: 'Üç terimli ikinci derece ifadeleri çarpanlara ayırma.',
  theory: { rules: [
    { title: 'x²+bx+c Tipi', formulaLines: ['x^2+bx+c=(x+m)(x+n)'], tipLines: ['m+n=b ve m·n=c olacak sayılar aranır.'] },
    { title: 'ax²+bx+c Tipi', tipLines: ['a katsayısı 1 değilse çapraz çarpım veya gruplama yöntemi kullanılır.'] },
    { title: 'İşaret Kontrolü', tipLines: ['Çarpım c, toplam b değerini vermelidir.'] },
    { title: 'Kontrol', tipLines: ['Çarpanlar çarpılarak ilk ifadeye dönülür.'] }
  ], facts: ['x²+5x+6=(x+2)(x+3).', 'x²-x-6=(x-3)(x+2).'], warning: 'Sadece çarpımı sağlayan sayılar yetmez; toplam da orta terimi vermelidir.' },
  examples: [
    { question: 'x²+5x+6 ifadesini çarpanlara ayırınız.', steps: [{ text: 'Toplamı 5, çarpımı 6 olan sayılar 2 ve 3’tür.' }], answer: '(x+2)(x+3)' },
    { question: 'x²-5x+6 ifadesini çarpanlara ayırınız.', steps: [{ text: 'Toplamı -5, çarpımı 6 olan sayılar -2 ve -3’tür.' }], answer: '(x-2)(x-3)' },
    { question: 'x²+x-6 ifadesini çarpanlara ayırınız.', steps: [{ text: 'Toplamı 1, çarpımı -6 olan sayılar 3 ve -2’dir.' }], answer: '(x+3)(x-2)' },
    { question: '2x²+7x+3 ifadesini çarpanlara ayırınız.', steps: ['2x^2+6x+x+3', '2x(x+3)+1(x+3)'], answer: '(2x+1)(x+3)' },
    { question: '3x²-10x+3 ifadesini çarpanlara ayırınız.', steps: ['3x^2-9x-x+3', '3x(x-3)-1(x-3)'], answer: '(3x-1)(x-3)' }
  ],
  quiz: quizRows25([
    ['x²+5x+6 = ?', ['(x+2)(x+3)','(x+1)(x+6)','(x-2)(x-3)','(x+5)(x+6)'], 0, '2+3=5, 2·3=6.'],
    ['x²-5x+6 = ?', ['(x+2)(x+3)','(x-2)(x-3)','(x+1)(x-6)','(x-1)(x-6)'], 1, '-2-3=-5.'],
    ['x²+x-6 = ?', ['(x+3)(x-2)','(x-3)(x+2)','(x+1)(x-6)','(x+6)(x-1)'], 0, '3 + (-2)=1.'],
    ['x²- x - 6 = ?', ['(x+3)(x-2)','(x-3)(x+2)','(x-1)(x-6)','(x+6)(x-1)'], 1, '-3+2=-1.'],
    ['x²+7x+10 = ?', ['(x+5)(x+2)','(x-5)(x-2)','(x+10)(x+1)','(x+7)(x+10)'], 0, '5+2=7.'],
    ['x²-7x+10 = ?', ['(x+5)(x+2)','(x-5)(x-2)','(x-10)(x-1)','(x-7)(x+10)'], 1, '-5-2=-7.'],
    ['x²-9 hangi çarpanlara ayrılır?', ['(x-3)(x+3)','(x-9)(x+1)','(x+9)(x-1)','(x-3)²'], 0, 'İki kare farkı.'],
    ['x²+2x+1 = ?', ['(x+1)²','(x-1)²','(x+2)(x+1)','x(x+2)'], 0, 'Tam kare.'],
    ['2x²+7x+3 = ?', ['(2x+1)(x+3)','(2x+3)(x+1)','(x+1)(x+3)','2(x+1)(x+3)'], 0, 'Çapraz çarpım.'],
    ['3x²-10x+3 = ?', ['(3x-1)(x-3)','(3x+1)(x+3)','(x-1)(3x-3)','(3x-3)(x+1)'], 0, 'Çarpanlar doğru.']
  ])
});

extendTopicPractice(82, {
  summary: 'Rasyonel ifadelerde çarpanlara ayırma, sadeleştirme ve tanımsız değerleri koruma.',
  theory: { rules: [
    { title: 'Rasyonel İfade', formulaLines: ['\\dfrac{P(x)}{Q(x)}'], tipLines: ['Pay ve paydası polinom olan, paydası sıfır olmayan ifadelerdir.'] },
    { title: 'Sadeleştirme', tipLines: ['Pay ve payda çarpanlara ayrılır, ortak çarpanlar sadeleştirilir.'] },
    { title: 'Tanımsız Değer', formulaLines: ['Q(x)\\neq0'], tipLines: ['Sadeleşse bile başlangıçtaki paydayı sıfır yapan değerler dışarıda kalır.'] },
    { title: 'Ortak Çarpan', tipLines: ['Sadece çarpan olan ifadeler sadeleşir; toplamın içinden terim sadeleşmez.'] }
  ], facts: ['(x²-1)/(x-1)=x+1 fakat x≠1.', 'Payda sıfır olamaz.'], warning: 'Sadeleşen çarpanın kökü yine tanım dışıdır.' },
  examples: [
    { question: '(x²-1)/(x-1) ifadesini sadeleştiriniz.', steps: ['\\dfrac{(x-1)(x+1)}{x-1}=x+1', 'x\\neq1'], answer: 'x+1,\\;x\\neq1' },
    { question: '(x²+5x+6)/(x+2) sadeleşir mi?', steps: ['x^2+5x+6=(x+2)(x+3)'], answer: 'x+3,\\;x\\neq-2' },
    { question: '(2x²+4x)/(2x) sadeleştiriniz.', steps: ['\\dfrac{2x(x+2)}{2x}=x+2', 'x\\neq0'], answer: 'x+2,\\;x\\neq0' },
    { question: '(x²-9)/(x+3) sadeleştiriniz.', steps: ['\\dfrac{(x-3)(x+3)}{x+3}=x-3', 'x\\neq-3'], answer: 'x-3,\\;x\\neq-3' },
    { question: '(x+1)/(x²-1) sadeleştiriniz.', steps: ['\\dfrac{x+1}{(x-1)(x+1)}=\\dfrac{1}{x-1}', 'x\\neq1,\\;-1'], answer: '\\dfrac{1}{x-1}' }
  ],
  quiz: quizRows25([
    ['Rasyonel ifadede payda ne olamaz?', ['0','1','Negatif','Kesir'], 0, 'Payda sıfır olamaz.'],
    ['(x²-1)/(x-1) sadeleşince nedir?', ['x+1','x-1','x²','1'], 0, 'İki kare farkı.'],
    ['Bu ifadede x hangi değeri alamaz?', ['1','-1','0','2'], 0, 'Başlangıç paydası x-1.'],
    ['(x²-4)/(x-2) sadeleşince nedir?', ['x+2','x-2','x²','1'], 0, 'İki kare farkı.'],
    ['Bu ifadede x hangi değeri alamaz?', ['2','-2','0','4'], 0, 'Payda x-2.'],
    ['(x²+3x)/(x) sadeleşince nedir?', ['x+3','x','3','x²+3'], 0, 'x(x+3)/x.'],
    ['Bu ifadede x hangi değeri alamaz?', ['0','1','3','-3'], 0, 'Payda x.'],
    ['Toplam içinden sadeleştirme yapılır mı?', ['Evet','Hayır','Daima','Sadece x=0'], 1, 'Sadece çarpanlar sadeleşir.'],
    ['(x²+5x+6)/(x+3) sadeleşince nedir?', ['x+2','x+3','x+5','1'], 0, '(x+2)(x+3).'],
    ['Sadeleşen çarpanın kökü ne olur?', ['Tanım dışı kalır','Geri eklenir','Daima çözüm olur','Önemli değil'], 0, 'Başlangıç paydası unutulmaz.']
  ])
});

extendTopicPractice(83, {
  summary: 'İkinci derece denklem tanımı ve ax²+bx+c=0 biçimi.',
  theory: { rules: [
    { title: 'İkinci Derece Denklem', formulaLines: ['ax^2+bx+c=0\\quad(a\\neq0)'], tipLines: ['a, b, c gerçek sayı ve a sıfırdan farklıdır.'] },
    { title: 'Katsayılar', formulaLines: ['a:\\text{x}^2\\text{ katsayısı}', 'b:\\text{x katsayısı}', 'c:\\text{sabit terim}'], tipLines: ['Denklem standart biçime getirilerek katsayılar okunur.'] },
    { title: 'Kök', tipLines: ['Denklemi sağlayan x değerlerine denklemin kökleri denir.'] },
    { title: 'Çözüm Kümesi', formulaLines: ['ÇK'], tipLines: ['Köklerin oluşturduğu kümeye çözüm kümesi denir.'] }
  ], facts: ['a=0 olursa denklem ikinci derece olmaz.', 'Çözüm için çarpanlara ayırma, kareye tamamlama veya formül kullanılabilir.'], warning: 'Denklemi standart biçime getirmeden a, b, c katsayılarını okumak hataya yol açar.' },
  examples: [
    { question: 'x²-5x+6=0 denkleminin katsayılarını yazınız.', steps: ['a=1,\\;b=-5,\\;c=6'], answer: 'a=1,b=-5,c=6' },
    { question: '2x²+3x-1=0 denkleminde a kaçtır?', steps: [{ text: 'x² katsayısı a’dır.' }], answer: '2' },
    { question: 'x²-4=0 denkleminin köklerini bulunuz.', steps: ['x^2=4', 'x=2\\;\\text{veya}\\;x=-2'], answer: '\\{-2,2\\}' },
    { question: 'x²+5x+6=0 denklemini çarpanlara ayırınız.', steps: ['(x+2)(x+3)=0'], answer: 'x=-2,\\;-3' },
    { question: '3x+5=0 ikinci derece denklem midir?', steps: [{ text: 'x² terimi yoktur, a=0 olur.' }], answer: 'Hayır' }
  ],
  quiz: quizRows25([
    ['İkinci derece denklemin genel biçimi nedir?', ['ax+b=0','ax²+bx+c=0','ax³=0','a/x=0'], 1, 'Genel biçim.'],
    ['Genel biçimde hangi katsayı sıfır olamaz?', ['a','b','c','Hepsi'], 0, 'a≠0.'],
    ['x²-3x+2=0 denkleminde a kaçtır?', ['1','-3','2','0'], 0, 'x² katsayısı.'],
    ['x²-3x+2=0 denkleminde b kaçtır?', ['1','-3','2','0'], 1, 'x katsayısı.'],
    ['x²-3x+2=0 denkleminde c kaçtır?', ['1','-3','2','0'], 2, 'Sabit terim.'],
    ['Denklemi sağlayan x değerlerine ne denir?', ['Kök','Katsayı','Derece','Payda'], 0, 'Kök tanımı.'],
    ['Köklerin oluşturduğu kümeye ne denir?', ['Çözüm kümesi','Değer kümesi','Tanım kümesi','Evrensel küme'], 0, 'ÇK.'],
    ['x²-9=0 kökleri nedir?', ['±3','3','-3','±9'], 0, 'x²=9.'],
    ['x²+4=0 gerçek kökü var mı?', ['Evet','Hayır','Daima','İki tane'], 1, 'Gerçek sayılarda yoktur.'],
    ['3x+1=0 ikinci derece midir?', ['Evet','Hayır','a=3 olduğu için evet','Belirsiz'], 1, 'x² terimi yok.']
  ])
});

extendTopicPractice(84, {
  summary: 'İkinci dereceden denklemlerin çözüm kümesi; çarpanlara ayırma ve kök bulma.',
  theory: { rules: [
    { title: 'Çarpanlara Ayırma', formulaLines: ['(x-r_1)(x-r_2)=0'], tipLines: ['Çarpanlardan her biri sıfıra eşitlenir.'] },
    { title: 'Sıfır Çarpım Özelliği', formulaLines: ['A\\cdot B=0\\Rightarrow A=0\\text{ veya }B=0'], tipLines: ['Çarpanlı denklemlerde kullanılır.'] },
    { title: 'Kare Denklemler', formulaLines: ['x^2=a'], tipLines: ['a pozitifse x=±√a olur.'] },
    { title: 'Çözüm Kümesi', formulaLines: ['ÇK=\\{x_1,x_2\\}'], tipLines: ['Bulunan kökler küme biçiminde yazılır.'] }
  ], facts: ['Her ikinci derece denklemin gerçek kökü olmak zorunda değildir.', 'Çift katlı kökte çözüm kümesinde kök bir kez yazılır.'], warning: 'Çarpanlardan sadece birini sıfıra eşitlemek eksik çözüm verir.' },
  examples: [
    { question: '(x-2)(x+5)=0 denklemini çözünüz.', steps: ['x-2=0\\Rightarrow x=2', 'x+5=0\\Rightarrow x=-5'], answer: '\\{-5,2\\}' },
    { question: 'x²-7x+12=0 denklemini çözünüz.', steps: ['(x-3)(x-4)=0'], answer: '\\{3,4\\}' },
    { question: 'x²=25 denklemini çözünüz.', steps: ['x=\\pm5'], answer: '\\{-5,5\\}' },
    { question: '(x+1)²=0 denklemini çözünüz.', steps: ['x+1=0'], answer: '\\{-1\\}' },
    { question: 'x²+1=0 gerçek sayılarda çözülür mü?', steps: ['x^2=-1', { text: 'Gerçek sayının karesi negatif olamaz.' }], answer: 'ÇK=\\varnothing' }
  ],
  quiz: quizRows25([
    ['(x-3)(x+2)=0 kökleri nedir?', ['3 ve -2','-3 ve 2','3 ve 2','-3 ve -2'], 0, 'Her çarpan sıfırlanır.'],
    ['x²-5x+6=0 kökleri nedir?', ['2 ve 3','-2 ve -3','1 ve 6','-1 ve -6'], 0, '(x-2)(x-3).'],
    ['x²-4=0 kökleri nedir?', ['±2','2','-2','±4'], 0, 'İki kare farkı.'],
    ['x²=16 kökleri nedir?', ['±4','4','-4','±8'], 0, 'x=±4.'],
    ['(x+5)²=0 kökü nedir?', ['5','-5','±5','0'], 1, 'x=-5.'],
    ['Sıfır çarpım özelliği hangisidir?', ['AB=0 ise A=0 veya B=0','A+B=0','A/B=0','A²=0 değil'], 0, 'Temel özellik.'],
    ['x²+9=0 gerçek çözümü var mı?', ['Evet','Hayır','İki tane','Bir tane'], 1, 'x²=-9 olmaz.'],
    ['Çözüm kümesi nasıl gösterilir?', ['ÇK','E','P','Q'], 0, 'ÇK.'],
    ['Çift katlı kök kümede kaç kez yazılır?', ['Bir','İki','Sonsuz','Hiç'], 0, 'Kümede tekrar yoktur.'],
    ['x²-2x=0 kökleri nedir?', ['0 ve 2','0 ve -2','2','-2'], 0, 'x(x-2)=0.']
  ])
});

extendTopicPractice(85, {
  summary: 'Diskriminant kavramı, kök sayısı ve ikinci derece denklem çözüm formülü.',
  theory: { rules: [
    { title: 'Diskriminant', formulaLines: ['\\Delta=b^2-4ac'], tipLines: ['ax²+bx+c=0 denkleminde köklerin durumunu belirler.'] },
    { title: 'Kök Formülü', formulaLines: ['x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}'], tipLines: ['Diskriminant kullanılarak kökler bulunur.'] },
    { title: 'Kök Sayısı', formulaLines: ['\\Delta>0\\Rightarrow2\\text{ farklı gerçek kök}', '\\Delta=0\\Rightarrow1\\text{ çift katlı kök}', '\\Delta<0\\Rightarrow\\text{gerçek kök yok}'], tipLines: ['Diskriminantın işareti gerçek kök sayısını verir.'] },
    { title: 'Çift Katlı Kök', formulaLines: ['x=-\\dfrac{b}{2a}'], tipLines: ['Δ=0 olduğunda iki kök eşittir.'] }
  ], facts: ['Δ pozitifse kökler farklıdır.', 'Δ negatifse gerçek kök yoktur ama karmaşık kök vardır.'], warning: 'Δ hesaplanırken b’nin işaretine dikkat et.' },
  examples: [
    { question: 'x²-5x+6=0 için Δ kaçtır?', steps: ['\\Delta=(-5)^2-4\\cdot1\\cdot6', '25-24=1'], answer: '1' },
    { question: 'x²-4x+4=0 için Δ kaçtır?', steps: ['16-16=0'], answer: '0' },
    { question: 'x²+1=0 için Δ kaçtır?', steps: ['0^2-4\\cdot1\\cdot1=-4'], answer: '-4' },
    { question: 'Δ>0 ise kaç gerçek kök vardır?', steps: [{ text: 'Diskriminant pozitif olduğunda iki farklı gerçek kök vardır.' }], answer: '2' },
    { question: '2x²-3x+1=0 denklemini formülle çözünüz.', steps: ['\\Delta=9-8=1', 'x=\\dfrac{3\\pm1}{4}'], answer: '\\{1,\\dfrac12\\}' }
  ],
  quiz: quizRows25([
    ['Diskriminant formülü nedir?', ['b²-4ac','a²-4bc','b-4ac','4ac-b²'], 0, 'Δ=b²-4ac.'],
    ['Kök formülü hangisidir?', ['(-b±√Δ)/(2a)','(b±√Δ)/(2a)','-b/Δ','a/b'], 0, 'Standart formül.'],
    ['Δ>0 ise kaç gerçek kök vardır?', ['0','1','2','Sonsuz'], 2, 'İki farklı kök.'],
    ['Δ=0 ise kaç farklı gerçek kök vardır?', ['0','1','2','Sonsuz'], 1, 'Çift katlı kök.'],
    ['Δ<0 ise gerçek kök sayısı kaçtır?', ['0','1','2','Sonsuz'], 0, 'Gerçek kök yok.'],
    ['x²-5x+6 için Δ kaçtır?', ['0','1','4','25'], 1, '25-24=1.'],
    ['x²-4x+4 için Δ kaçtır?', ['0','1','4','16'], 0, '16-16=0.'],
    ['x²+4 için Δ kaçtır?', ['-16','0','4','16'], 0, '0-16=-16.'],
    ['Δ=0 çift katlı kök formülü nedir?', ['-b/2a','b/2a','a/b','-a/b'], 0, 'x=-b/(2a).'],
    ['Δ hesaplanırken en çok neye dikkat edilir?', ['b’nin işareti','x’in rengi','Küme adı','Olasılık'], 0, 'b² kullanılır.']
  ])
});

extendTopicPractice(86, {
  summary: 'Sanal birim i, karmaşık sayı, i kuvvetleri ve karmaşık sayılarda temel işlemler.',
  theory: { rules: [
    { title: 'Sanal Birim', formulaLines: ['i^2=-1'], tipLines: ['Gerçek sayılarda çözülemeyen negatif karekökler için i kullanılır.'] },
    { title: 'Karmaşık Sayı', formulaLines: ['z=a+bi'], tipLines: ['a gerçek kısım, b sanal kısmın katsayısıdır.'] },
    { title: 'i Kuvvetleri', formulaLines: ['i^0=1', 'i^1=i', 'i^2=-1', 'i^3=-i', 'i^4=1'], tipLines: ['i kuvvetleri 4’lü döngüyle tekrar eder.'] },
    { title: 'Eşlenik', formulaLines: ['z=a+bi\\Rightarrow \\bar z=a-bi'], tipLines: ['Sanal kısmın işareti değiştirilir.'] }
  ], facts: ['√(-a)=i√a biçiminde yazılır.', 'Karmaşık sayılarda benzer gerçek ve sanal kısımlar toplanır.'], warning: 'i² yerine -1 yazmayı unutma.' },
  examples: [
    { question: '√(-9) değerini yazınız.', steps: ['\\sqrt{-9}=3i'], answer: '3i' },
    { question: 'i⁵ kaçtır?', steps: ['i^5=i^4\\cdot i=i'], answer: 'i' },
    { question: '(3+2i)+(1-5i) işlemini yapınız.', steps: ['3+1=4', '2i-5i=-3i'], answer: '4-3i' },
    { question: '(2+i)(3-i) işlemini yapınız.', steps: ['6-2i+3i-i^2', '6+i+1'], answer: '7+i' },
    { question: 'z=4-7i ise eşleniği nedir?', steps: [{ text: 'Sanal kısmın işareti değişir.' }], answer: '4+7i' }
  ],
  quiz: quizRows25([
    ['i² kaçtır?', ['1','-1','i','-i'], 1, 'Sanal birim.'],
    ['i³ kaçtır?', ['1','-1','i','-i'], 3, 'i²·i=-i.'],
    ['i⁴ kaçtır?', ['1','-1','i','-i'], 0, 'Döngü.'],
    ['i⁵ kaçtır?', ['1','-1','i','-i'], 2, 'i⁴·i.'],
    ['√(-4) nedir?', ['2','-2','2i','4i'], 2, '√4·i.'],
    ['z=a+bi biçiminde a nedir?', ['Gerçek kısım','Sanal katsayı','Eşlenik','Modül'], 0, 'a gerçek kısımdır.'],
    ['z=a+bi biçiminde b nedir?', ['Gerçek kısım','Sanal kısmın katsayısı','Eşlenik','Kök'], 1, 'b sanal katsayıdır.'],
    ['3+2i eşleniği nedir?', ['3-2i','-3+2i','2+3i','3+2i'], 0, 'Sanal işaret değişir.'],
    ['(1+i)+(2+3i) nedir?', ['3+4i','3+2i','1+5i','2+4i'], 0, 'Gerçek ve sanal toplanır.'],
    ['i kuvvetleri kaçlı döngü yapar?', ['2','3','4','5'], 2, 'i, -1, -i, 1.']
  ])
});

extendTopicPractice(87, {
  summary: 'İkinci derece denklemlerde kök-katsayı ilişkisi, toplam ve çarpım.',
  theory: { rules: [
    { title: 'Kökler Toplamı', formulaLines: ['x_1+x_2=-\\dfrac{b}{a}'], tipLines: ['ax²+bx+c=0 denkleminde kökler toplamı -b/a’dır.'] },
    { title: 'Kökler Çarpımı', formulaLines: ['x_1\\cdot x_2=\\dfrac{c}{a}'], tipLines: ['Kökler çarpımı c/a’dır.'] },
    { title: 'Kökleri Bilinen Denklem', formulaLines: ['x^2-(x_1+x_2)x+x_1x_2=0'], tipLines: ['Baş katsayı 1 ise kökler toplamı ve çarpımıyla denklem yazılır.'] },
    { title: 'Vieta', tipLines: ['Kökleri tek tek bulmadan toplam ve çarpım değerleriyle işlem yapılabilir.'] }
  ], facts: ['a=1 ise toplam -b, çarpım c olur.', 'Kökler toplamı ve çarpımı simetrik ifadelerde çok kullanılır.'], warning: 'Toplamda -b/a, çarpımda c/a kullanılır; işaretleri karıştırma.' },
  examples: [
    { question: 'x²-5x+6=0 denkleminin kökleri toplamı ve çarpımı nedir?', steps: ['x_1+x_2=5', 'x_1x_2=6'], answer: '5,\\;6' },
    { question: '2x²-3x+4=0 için kökler toplamı kaçtır?', steps: ['-b/a=-(-3)/2=3/2'], answer: '\\dfrac32' },
    { question: '2x²-3x+4=0 için kökler çarpımı kaçtır?', steps: ['c/a=4/2=2'], answer: '2' },
    { question: 'Kökleri 2 ve 5 olan monik denklemi yazınız.', steps: ['Toplam=7, çarpım=10'], answer: 'x^2-7x+10=0' },
    { question: 'x²+4x-1=0 için x₁+x₂ kaçtır?', steps: ['-b/a=-4'], answer: '-4' }
  ],
  quiz: quizRows25([
    ['Kökler toplamı formülü nedir?', ['-b/a','c/a','b/a','-c/a'], 0, 'Vieta.'],
    ['Kökler çarpımı formülü nedir?', ['-b/a','c/a','b/a','-c/a'], 1, 'Vieta.'],
    ['x²-5x+6=0 kökler toplamı kaçtır?', ['-5','5','6','-6'], 1, '-b=5.'],
    ['x²-5x+6=0 kökler çarpımı kaçtır?', ['-5','5','6','-6'], 2, 'c=6.'],
    ['x²+3x+2=0 kökler toplamı kaçtır?', ['3','-3','2','-2'], 1, '-b=-3.'],
    ['x²+3x+2=0 kökler çarpımı kaçtır?', ['3','-3','2','-2'], 2, 'c=2.'],
    ['2x²-4x+6=0 kökler toplamı kaçtır?', ['1','2','3','4'], 1, '4/2=2.'],
    ['2x²-4x+6=0 kökler çarpımı kaçtır?', ['1','2','3','4'], 2, '6/2=3.'],
    ['Kökleri 1 ve 4 olan monik denklem nedir?', ['x²-5x+4=0','x²+5x+4=0','x²-4x+5=0','x²+x+4=0'], 0, 'Toplam 5, çarpım 4.'],
    ['Kökleri -2 ve 3 olan monik denklem nedir?', ['x²-x-6=0','x²+x-6=0','x²-5x+6=0','x²+6=0'], 0, 'Toplam 1, çarpım -6.']
  ])
});

// Demo seed: pre-completed topics for seeded demo state
window.DEMO_COMPLETED = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,                   // Sayılar: 15/17
  18,19,20,23,24,25,26,29,30,33,35,36,46,47,48,52,53,60, // Cebir: 18/70 (mix)
  88,89,90,                                              // Veri: 3/4
  92,93,94,95,96,97                                       // Geometri: 6/34
];
// Quiz scores demo: some perfect, some weak
window.DEMO_SCORES = {
  5: 100, 12: 80, 23: 60, 25: 100, 35: 80, 83: 40, 89: 100, 107: 80
};
window.DEMO_WEAK = [83, 23, 76]; // weak areas
