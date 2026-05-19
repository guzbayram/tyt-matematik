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
  S(1, 1, 'Sayı Kümeleri', 1, 6, 'Doğal (N), Tam (Z), Rasyonel (Q), Gerçek (R) sayılar arasındaki kapsama ilişkisi: N ⊂ Z ⊂ Q ⊂ R.'),
  S(2, 1, 'Temel İşlemler', 1, 5, 'İşlem önceliği: Parantez → Üs/Kök → Çarpma/Bölme → Toplama/Çıkarma. Soldan sağa.'),
  S(3, 1, 'Tek ve Çift Sayılar', 1, 6, 'Ç+Ç=Ç, T+T=Ç, Ç+T=T. Tek sayının her kuvveti tektir; çift sayının her kuvveti çifttir.'),
  S(4, 1, 'Pozitif ve Negatif Sayılar', 1, 5, 'Aynı işaretli sayılar çarpımda/bölmede pozitif, farklı işaretli ise negatif sonuç verir.'),

  F(5, 1, 'Ardışık Sayılar', 2, 8, {
    summary: 'Aralarındaki fark sabit olan sayı dizilerinde terim sayısı ve toplam formülleri.',
    theory: {
      rules: [
        { title: 'Terim Sayısı',
          formula: 'n = \\dfrac{\\text{Son} - \\text{İlk}}{d} + 1',
          tip: '+1 eklemeyi unutma — son terim de sayılır.' },
        { title: 'Terimler Toplamı',
          formula: 'S_n = \\dfrac{(\\text{Son} + \\text{İlk})}{2} \\cdot n',
          tip: 'Bu Gauss formülü olarak da bilinir.' },
        { title: 'Genel Terim (Aritmetik)',
          formula: 'a_n = a_1 + (n-1)\\cdot d',
          tip: 'd = ortak fark, ardışık iki terim arasındaki fark.' }
      ],
      facts: [
        '1+2+\\ldots+n = \\dfrac{n(n+1)}{2}',
        '1+3+5+\\ldots+(2n-1) = n^2',
        '2+4+6+\\ldots+2n = n(n+1)'
      ],
      warning: 'Ardışık sayıların ortalaması daima dizinin ortadaki terimine eşittir.'
    },
    examples: [
      { question: '3, 7, 11, 15, … dizisinde 10. terim kaçtır?',
        steps: [
          'İlk terim: a_1 = 3',
          'Ortak fark: d = 7 - 3 = 4',
          'a_n = a_1 + (n-1)\\cdot d',
          'a_{10} = 3 + 9\\cdot 4 = 39'
        ],
        answer: 'a_{10} = 39' }
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
        e: 'n = (99-3)/3 + 1 = 33' }
    ]
  }),

  S(6, 1, 'Sayı Basamakları', 2, 7, 'İki basamaklı ab = 10a + b. Basamak değeri × konum = sayı değeri.'),
  S(7, 1, 'Asal ve Aralarında Asal Sayılar', 2, 6, 'Asal: sadece 1 ve kendisine bölünür. Aralarında asal: EBOB(a,b)=1.'),
  S(8, 1, 'Tam Sayılarda Kalanlı Bölme', 2, 5, 'A = B·C + K kuralı. 0 ≤ K < B koşulu sağlanmalıdır.'),
  S(9, 1, 'Bölünebilme Kuralları 1', 2, 6, 'Son basamak veya basamak toplamı üzerinden 2, 3, 4, 5, 6 ile bölünebilme.'),
  S(10, 1, 'Bölünebilme Kuralları 2', 3, 7, '7, 8, 9, 10 ve özellikle 11 ile bölünebilme (basamakların almaşık toplamı).'),
  S(11, 1, 'Asal Çarpanlar', 2, 6, 'Her bileşik sayı, asal çarpanlarına tek bir şekilde ayrılır (asal çarpanlara ayırma).'),

  F(12, 1, 'EBOB ve EKOK', 3, 10, {
    summary: 'En büyük ortak bölen ve en küçük ortak kat — asal çarpanlardan hızlı yöntemle.',
    theory: {
      rules: [
        { title: 'EBOB — En Büyük Ortak Bölen',
          formula: '\\text{EBOB}(a,b) = \\prod p_i^{\\min(\\alpha_i, \\beta_i)}',
          tip: 'Ortak asal çarpanların KÜÇÜK üslerini al.' },
        { title: 'EKOK — En Küçük Ortak Kat',
          formula: '\\text{EKOK}(a,b) = \\prod p_i^{\\max(\\alpha_i, \\beta_i)}',
          tip: 'Tüm asal çarpanların BÜYÜK üslerini al.' },
        { title: 'Altın Bağıntı',
          formula: '\\text{EBOB}(a,b)\\cdot \\text{EKOK}(a,b) = a\\cdot b',
          tip: 'İki sayının çarpımı = EBOB × EKOK. Her zaman.' }
      ],
      facts: [
        'a \\mid b \\Rightarrow \\text{EBOB}(a,b)=a,\\; \\text{EKOK}(a,b)=b',
        '\\text{EBOB}(a,b)=1 \\Rightarrow a,b \\text{ aralarında asaldır}'
      ],
      warning: 'EBOB her zaman ≤ küçük sayı, EKOK her zaman ≥ büyük sayıdır.'
    },
    examples: [
      { question: '24 ve 36 sayılarının EBOB ve EKOK\'unu bulun.',
        steps: [
          '24 = 2^3 \\cdot 3',
          '36 = 2^2 \\cdot 3^2',
          '\\text{EBOB} = 2^2 \\cdot 3 = 12',
          '\\text{EKOK} = 2^3 \\cdot 3^2 = 72'
        ],
        answer: 'EBOB = 12,\\; EKOK = 72' }
    ],
    quiz: [
      { q: '18 ve 24 sayılarının EBOB\'u kaçtır?', opt: ['2','3','6','12'], a: 2, e: '18=2\\cdot 3^2, 24=2^3\\cdot 3, EBOB = 2\\cdot 3 = 6' },
      { q: '12 ve 20 sayılarının EKOK\'u kaçtır?', opt: ['40','60','80','120'], a: 1, e: '12=2^2\\cdot 3, 20=2^2\\cdot 5, EKOK = 2^2\\cdot 3\\cdot 5 = 60' },
      { q: 'a ve b iki sayı; EBOB=6, EKOK=180. a·b = ?', opt: ['540','720','1080','1200'], a: 2, e: 'a\\cdot b = 6\\cdot 180 = 1080' },
      { q: '90 ve 150 için EBOB nedir?', opt: ['15','20','30','45'], a: 2, e: '90=2\\cdot 3^2\\cdot 5, 150=2\\cdot 3\\cdot 5^2, EBOB=2\\cdot 3\\cdot 5=30' },
      { q: 'Aralarında asal iki sayının EKOK\'u 60 ise sayılardan biri 12 olamaz, çünkü?', opt: ['12, 60\'a bölünmez','EBOB 1 olmaz','EKOK 12\'den küçük olur','12 asal değildir'], a: 1, e: 'a, b aralarında asalsa EKOK = a·b. 60 = 12·5; ama 12 ve 5 aralarında asal — 12 = 2²·3 ve EBOB(12, b)=1 gerek.' }
    ]
  }),

  S(13, 1, 'EBOB-EKOK Problemleri', 3, 9, 'Şerit kesme, ortak zamanda buluşma, paket düzenleme gibi gerçek hayat uygulamaları.'),
  S(14, 1, 'Periyodik Problemler', 3, 8, 'Tekrar eden olaylarda kalan analizi — bölme kalanı periyot uzunluğuna göre.'),
  S(15, 1, 'Rasyonel Sayılarda İşlemler', 2, 7, 'Pay ve paydadaki kuralları, ortak payda, kesir sadeleştirme, karışık işlemler.'),
  S(16, 1, 'Ondalıklı ve Devirli Sayılar', 2, 8, '0,abc gibi sayıları kesre çevirme: 0,\\overline{ab} = ab/99 gibi formüller.'),
  S(17, 1, 'Gerçek Sayılarda Aralıklar', 2, 6, 'Açık (a,b), kapalı [a,b], yarı açık aralıklar; eşitsizliklerle gösterimi.'),

  // ───────── ÜNİTE 2: CEBİR ─────────
  S(18, 2, '1. Dereceden 1 Bilinmeyenli Denklemler', 1, 6, 'ax + b = 0 → x = -b/a. Eşitliğin her iki tarafına aynı işlem uygulanır.'),
  S(19, 2, 'Basit Eşitsizlikler', 2, 6, 'Eşitsizliğin yönü: negatif sayıyla çarpılır/bölünürse yön değişir.'),
  S(20, 2, '1. Dereceden 2 Bilinmeyenli Denklemler', 2, 7, 'ax + by = c — sonsuz çözüm. İki denklem birlikte → benzersiz çözüm.'),
  S(21, 2, '1. Derece 2 Bilinmeyenli Eşitsizlikler', 3, 7, 'Doğrunun bir tarafındaki yarı düzlem; ≤ veya ≥ için sınır dahil.'),
  S(22, 2, 'Eşitsizlik Sistemleri', 3, 8, 'Birden fazla eşitsizliğin ortak çözüm bölgesi — kesişim alanı.'),

  F(23, 2, 'Mutlak Değer', 3, 9, {
    summary: 'Bir sayının işaretinden bağımsız büyüklüğü — sayı doğrusunda 0\'a uzaklık.',
    theory: {
      rules: [
        { title: 'Temel Tanım',
          formula: '|a| = \\begin{cases} a, & a \\geq 0 \\\\ -a, & a < 0 \\end{cases}',
          tip: 'Mutlak değer her zaman ≥ 0\'dır.' },
        { title: 'Çarpım ve Bölüm',
          formula: '|a\\cdot b| = |a|\\cdot |b|, \\quad \\left|\\dfrac{a}{b}\\right| = \\dfrac{|a|}{|b|}',
          tip: 'Çarpım ve bölüm mutlak değer içinde dağılır.' },
        { title: 'Denklem Çözümü',
          formula: '|x| = c \\Rightarrow x = c \\text{ veya } x = -c',
          tip: 'c < 0 ise çözüm yoktur (mutlak değer negatif olmaz).' }
      ],
      facts: [
        '|a+b| \\leq |a|+|b| \\text{ (üçgen eşitsizliği)}',
        '|a-b| \\geq ||a|-|b||',
        '|x| < c \\Leftrightarrow -c < x < c',
        '|x| > c \\Leftrightarrow x < -c \\text{ veya } x > c'
      ],
      warning: '|x − 3| ifadesi x = 3\'e olan uzaklıktır. Sayı doğrusunda yorumlamak çoğu zaman hızlıdır.'
    },
    examples: [
      { question: '|2x − 4| = 6 denklemini çözün.',
        steps: [
          '2x - 4 = 6 \\quad\\text{veya}\\quad 2x - 4 = -6',
          '\\text{Durum 1: } 2x = 10 \\Rightarrow x = 5',
          '\\text{Durum 2: } 2x = -2 \\Rightarrow x = -1'
        ],
        answer: 'x \\in \\{-1, 5\\}' }
    ],
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
    summary: 'Tekrarlı çarpımı kısaca yazma yolu — taban ve üs ile temel kurallar.',
    theory: {
      rules: [
        { title: 'Çarpma ve Bölme',
          formula: 'a^m \\cdot a^n = a^{m+n}, \\quad \\dfrac{a^m}{a^n} = a^{m-n}',
          tip: 'Aynı tabanlar — üsler toplanır veya çıkarılır.' },
        { title: 'Üssün Üssü',
          formula: '(a^m)^n = a^{m\\cdot n}, \\quad (ab)^n = a^n \\cdot b^n',
          tip: 'İçerideki üsle dışarıdaki üs ÇARPILIR (toplama değil!).' },
        { title: 'Negatif ve Sıfır Üs',
          formula: 'a^{-n} = \\dfrac{1}{a^n}, \\quad a^0 = 1 \\;(a \\neq 0)',
          tip: '0\'ın 0. kuvveti tanımsızdır.' }
      ],
      facts: [
        'a^{1/n} = \\sqrt[n]{a}',
        '(-1)^{\\text{çift}} = 1, \\quad (-1)^{\\text{tek}} = -1',
        '\\text{Üs çift } \\Rightarrow \\text{ sonuç } \\geq 0'
      ],
      warning: '(-2)^4 = 16 ama -2^4 = -16. Parantezin yeri kritiktir!'
    },
    examples: [
      { question: '\\dfrac{2^5 \\cdot 2^3}{2^4} ifadesinin değeri kaçtır?',
        steps: [
          '2^5 \\cdot 2^3 = 2^{5+3} = 2^8',
          '\\dfrac{2^8}{2^4} = 2^{8-4} = 2^4',
          '2^4 = 16'
        ],
        answer: '16' }
    ],
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
