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
    summary: '%a, sayının a/100 ile çarpımıdır. Artış-azalış sorularında yeni değer hesabı.',
    theory: {
      rules: [
        { title: 'Yüzde Hesabı',
          formula: '\\%a \\text{ of } X = \\dfrac{a}{100}\\cdot X',
          tip: '"of" → çarpma. %20 of 60 = 12.' },
        { title: 'Yüzde Artış / Azalış',
          formula: '\\text{Yeni} = X\\cdot\\left(1 \\pm \\dfrac{a}{100}\\right)',
          tip: 'Artışta (+), azalışta (−).' },
        { title: 'Ardışık Değişim',
          formula: '\\text{Net oran} = (1 + p)(1 + q) - 1',
          tip: '%20 artıp %20 azalan fiyat eski değerine DÖNMEZ — %4 azalır.' }
      ],
      facts: [
        '\\dfrac{\\text{Artış}}{\\text{Eski}}\\cdot 100 = \\text{Yüzde artış}',
        '%50 artış = 1.5 katı; %50 azalış = 0.5 katı'
      ],
      warning: 'Önce zamlanıp sonra aynı oranda iskonto yapılan ürün eski fiyatına gelmez.'
    },
    examples: [
      { question: '600 TL\'lik bir ürün önce %20 zamlanıyor, sonra %25 indirim yapılıyor. Son fiyat?',
        steps: [
          'Zamlı fiyat: 600\\cdot 1{,}20 = 720',
          'İndirimli fiyat: 720\\cdot 0{,}75 = 540',
          'Veya: 600\\cdot 1{,}20\\cdot 0{,}75 = 540'
        ],
        answer: '540 TL' }
    ],
    quiz: [
      { q: 'Bir ürünün %25\'i 30 TL ise, ürünün tamamı kaç TL\'dir?', opt: ['90','100','120','150'], a: 2, e: '0{,}25\\cdot X = 30 \\Rightarrow X = 120' },
      { q: '200 TL\'lik bir ürün %15 zamlanırsa yeni fiyatı kaç TL olur?', opt: ['215','220','225','230'], a: 3, e: '200\\cdot 1{,}15 = 230' },
      { q: 'Bir öğrenci 80 soru çözmüş, 60\'ını doğru yapmış. Başarı yüzdesi?', opt: ['%65','%70','%75','%80'], a: 2, e: '60/80 = 0{,}75 = \\%75' },
      { q: 'Bir ürün önce %20 artırılıyor sonra aynı oranda azaltılıyor. Net değişim?', opt: ['%0 (aynı)','%2 azalış','%4 azalış','%5 artış'], a: 2, e: '1{,}2\\cdot 0{,}8 = 0{,}96 — %4 azalış.' },
      { q: 'Maaşı 4000 TL olan bir kişinin maaşı %15 artarsa yeni maaşı?', opt: ['4400','4500','4600','4750'], a: 2, e: '4000\\cdot 1{,}15 = 4600' }
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
    ['√a + √b ifadesinin eşleniği nedir?', ['√a + √b','√a - √b','a-b','√ab'], 1, 'İki terimde işaret değiştirilir.']
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
    ['³√123 hangi iki tam sayı arasındadır?', ['3 ile 4','4 ile 5','5 ile 6','8 ile 9'], 1, '64<123<125 olduğundan 4<³√123<5.']
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
