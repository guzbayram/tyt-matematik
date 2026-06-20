// 97-105. konular: PDF tabanli geometri kartlarini destekleyen çözümlü örnekler ve quizler.
(function addGeometryPractice() {
  function q(rows) {
    if (rows.length !== 25) throw new Error(`Geometri quizinde ${rows.length} soru var; 25 olmali.`);
    return quizRows(rows);
  }

  function numericOptions(answer, deltas) {
    return [answer, ...deltas.map(delta => answer + delta)].map(String);
  }

  extendTopicPractice(97, {
    examples: [
      { question: 'Kenar uzunlukları 5 cm, 7 cm ve x cm olan bir üçgende x\'in alabileceği tam sayı değerlerini bulunuz.', steps: ['$|7-5|<x<7+5$', '$2<x<12$', { text: 'x tam sayı olduğu için sınırlar alınmaz.' }], answer: 'x\\in\\{3,4,5,6,7,8,9,10,11\\}' },
      { question: '4 cm, 6 cm ve 11 cm uzunlukları bir üçgen oluşturur mu?', steps: [{ text: 'En büyük kenar 11 cm\'dir.' }, '$4+6=10<11$', { text: 'İki kısa kenarın toplamı en büyük kenardan büyük olmadığı için üçgen kurulamaz.' }], answer: '\\text{Oluşturmaz}' },
      { question: 'İki kenarı 8 cm ve 13 cm olan üçgenin üçüncü kenarının alabileceği en büyük tam sayı değeri kaç cm\'dir?', steps: ['$|13-8|<x<13+8$', '$5<x<21$', { text: '21\'den küçük en büyük tam sayı 20\'dir.' }], answer: '20' },
      { question: 'Kenar uzunlukları 6 cm, 8 cm ve 11 cm olan üçgen dar açılı mı, geniş açılı mı?', steps: [{ text: 'En büyük kenar 11 cm\'dir.' }, '$11^2=121$', '$6^2+8^2=36+64=100$', '$121>100$'], answer: '\\text{Geniş açılı}' },
      { question: 'Kenar uzunlukları 7 cm, 8 cm ve 9 cm olan üçgenin kurulabildiğini gösteriniz.', steps: [{ text: 'En büyük kenar 9 cm\'dir; kritik kontrol iki kısa kenarın toplamıdır.' }, '$7+8=15>9$', { text: 'Diğer iki toplam da zaten daha büyüktür.' }], answer: '\\text{Üçgen kurulabilir}' }
    ],
    quiz: q([
      ['Üçgen eşitsizliğinin doğru gösterimi hangisidir?', ['$|b-c|<a<b+c$','$b+c<a$','$a=b+c$','$a<|b-c|$'], 0, 'Bir kenar, diğer iki kenarın farkının mutlak değerinden büyük ve toplamından küçüktür.'],
      ['3, 4 ve 8 uzunlukları üçgen oluşturur mu?', ['Evet','Hayır','Yalnız dik üçgen','Eşkenar üçgen'], 1, '3+4=7<8 olduğu için oluşturmaz.'],
      ['5, 5 ve 9 uzunlukları üçgen oluşturur mu?', ['Evet','Hayır','Yalnız geniş açılı olamaz','Belirsiz'], 0, '5+5=10>9.'],
      ['İki kenarı 4 ve 9 olan üçgende üçüncü kenar x için hangisi doğrudur?', ['$5<x<13$','$4<x<9$','$x>13$','$0<x<5$'], 0, '|9-4|<x<9+4.'],
      ['Üçgen kurulurken hangi eşitlik sınır değeri olduğu için kabul edilmez?', ['$a+b=c$','$a+b>c$','$a+c>b$','$b+c>a$'], 0, 'Toplam üçüncü kenara eşit olursa kapalı üçgen oluşmaz.'],
      ['En büyük kenarı c olan üçgende $c^2<a^2+b^2$ ise üçgen nasıldır?', ['Dar açılı','Dik','Geniş açılı','Eşkenar olmak zorunda'], 0, 'En büyük kenarın karesi diğerlerinin kareleri toplamından küçükse üçgen dar açılıdır.'],
      ['En büyük kenarı c olan üçgende $c^2=a^2+b^2$ ise üçgen nasıldır?', ['Dar açılı','Dik','Geniş açılı','İkizkenar'], 1, 'Pisagor eşitliği dik üçgeni verir.'],
      ['En büyük kenarı c olan üçgende $c^2>a^2+b^2$ ise üçgen nasıldır?', ['Dar açılı','Dik','Geniş açılı','Eşkenar'], 2, 'Büyük kenarın karşısındaki açı geniştir.'],
      ['6, 8, 10 üçgeni hangi türdedir?', ['Dar açılı','Dik','Geniş açılı','Kurulamaz'], 1, '6²+8²=10².'],
      ['2, 6, 7 üçgeni kurulabilir mi?', ['Evet','Hayır','Yalnız ikizkenar','Yalnız dik'], 0, '2+6=8>7.'],
      ...[[3,7],[5,8],[6,10],[7,12],[9,14]].flatMap(([a,b], i) => {
        const min = b-a+1;
        const max = a+b-1;
        return [
          [`Kenarlar ${a}, ${b} ve x tam sayı ise x'in en küçük değeri kaçtır?`, numericOptions(min, [1,2,3]), 0, `|${b}-${a}|<x olduğundan en küçük tam sayı ${min}.`],
          [`Kenarlar ${a}, ${b} ve x tam sayı ise x'in en büyük değeri kaçtır?`, numericOptions(max, [-1,-2,1]), 0, `x<${a+b} olduğundan en büyük tam sayı ${max}.`],
          [`${a}, ${b} ve ${max} uzunlukları üçgen oluşturur mu?`, ['Evet','Hayır','Yalnız dik','Belirsiz'], 0, `${a}+${b}>${max} olduğu için üçgen kurulur.`]
        ];
      })
    ])
  });

  extendTopicPractice(98, {
    examples: [
      { question: 'ABC ve DEF üçgenlerinde AB=DE, BC=EF ve AC=DF ise hangi eşlik kuralı kullanılır?', steps: [{ text: 'Üç kenar da karşılıklı olarak eşittir.' }, { text: 'Bu nedenle Kenar-Kenar-Kenar eşliği uygulanır.' }], answer: '\\text{K.K.K.}' },
      { question: 'AB=DE, m(B)=m(E) ve BC=EF ise ABC ile DEF neden eştir?', steps: [{ text: 'Eşit açı, eşitliği verilen iki kenarın arasındadır.' }, { text: 'İki kenar ve aralarındaki açı eşit olduğundan K.A.K. kullanılır.' }], answer: '\\text{K.A.K.}' },
      { question: 'ABC≅DEF ve AB=7 cm, BC=9 cm ise DE ve EF kaç cm\'dir?', steps: [{ text: 'Eşlik yazılışında A↔D, B↔E, C↔F eşleşir.' }, '$AB=DE=7$', '$BC=EF=9$'], answer: 'DE=7,\\ EF=9' },
      { question: 'İki dik üçgende hipotenusler ve birer dik kenar eşitse üçgenler için ne söylenir?', steps: [{ text: 'Dik üçgenlerde Hipotenus-Kenar eşlik koşulu kullanılır.' }], answer: '\\text{Üçgenler eştir}' },
      { question: 'Eş iki üçgenin alanları 24 cm² ise alanları oranı kaçtır?', steps: [{ text: 'Eş şekiller aynı biçim ve aynı büyüklüktedir.' }, '$24/24=1$'], answer: '1' }
    ],
    quiz: q([
      ['Eş üçgenlerin karşılıklı kenarları için ne söylenir?', ['Eşittir','Orantılıdır ama eşit degildir','Paraleldir','Diktir'], 0, 'Eşlikte karşılıklı kenar uzunlukları eşittir.'],
      ['Eş üçgenlerin karşılıklı açıları için ne söylenir?', ['Eşittir','Bütünlerdir','Tümleridir','Farklıdır'], 0, 'Karşılıklı açılar eşittir.'],
      ['Üç kenarın karşılıklı eşitliği hangi eşlik kuralıdır?', ['K.K.K.','K.A.K.','A.K.A.','H.K.'], 0, 'Kenar-Kenar-Kenar.'],
      ['İki kenar ve aralarındaki açının eşitliği hangi kuraldır?', ['K.K.K.','K.A.K.','A.K.A.','A.A.'], 1, 'Kenar-Açı-Kenar.'],
      ['Bir kenar ve bu kenarın ucundaki iki açının eşitliği hangi kuraldır?', ['K.K.K.','K.A.K.','A.K.A.','A.A.'], 2, 'Açı-Kenar-Açı.'],
      ['Dik üçgenlerde hipotenus ve bir dik kenar eşitliği hangi kuraldır?', ['H.K.','A.A.','K.K.K. degildir','Yalnız benzerlik'], 0, 'Hipotenus-Kenar eşliği.'],
      ['$ABC\\cong DEF$ yazılışında B noktasının karşılığı hangisidir?', ['D','E','F','A'], 1, 'Sıraya göre B↔E.'],
      ['$ABC\\cong DEF$ ise AC kenarının karşılığı hangisidir?', ['DE','EF','DF','AB'], 2, 'A↔D ve C↔F olduğundan AC↔DF.'],
      ['Eş üçgenlerin çevreleri oranı kaçtır?', ['1','2','1/2','Alanlara bağlı'], 0, 'Bütün karşılıklı kenarlar eşittir.'],
      ['Eş üçgenlerin alanları oranı kaçtır?', ['1','2','4','Belirsiz'], 0, 'Aynı büyüklükte oldukları için alanlar eşittir.'],
      ...Array.from({length:15}, (_,i) => {
        const side = i+4;
        const pair = i%3===0 ? ['AB','DE'] : i%3===1 ? ['BC','EF'] : ['AC','DF'];
        return [`$ABC\\cong DEF$ ve ${pair[0]}=${side} cm ise ${pair[1]} kaç cm'dir?`, numericOptions(side,[1,-1,2]), 0, 'Eş üçgenlerde karşılıklı kenarlar eşittir.'];
      })
    ])
  });

  extendTopicPractice(99, {
    examples: [
      { question: 'ABC ve DEF üçgenlerinde açılar karşılıklı eşit ise üçgenler neden benzerdir?', steps: [{ text: 'İki açının eşitliği üçüncü açıların da eşit olmasını sağlar.' }, { text: 'Açı-Açı benzerlik koşulu sağlanır.' }], answer: 'ABC\\sim DEF' },
      { question: 'Benzerlik oranı 2/3 olan iki üçgende küçük üçgenin bir kenarı 8 cm ise karşılıklı büyük kenar kaç cm\'dir?', steps: ['$8/x=2/3$', '$2x=24$', '$x=12$'], answer: '12' },
      { question: 'Benzer iki üçgenin benzerlik oranı 3 ise çevreleri oranı kaçtır?', steps: [{ text: 'Çevreler oranı benzerlik oranına eşittir.' }], answer: '3' },
      { question: 'Benzerlik oranı 2/5 olan iki üçgenin alanları oranı kaçtır?', steps: [{ text: 'Alanlar oranı benzerlik oranının karesidir.' }, '$(2/5)^2=4/25$'], answer: '\\dfrac{4}{25}' },
      { question: 'Kenar uzunlukları 3, 4, 5 ve 6, 8, 10 olan üçgenlerin benzerliğini gösteriniz.', steps: ['$3/6=1/2$', '$4/8=1/2$', '$5/10=1/2$', { text: 'Üç kenar oranı eşit olduğu için K.K.K. benzerliği vardır.' }], answer: '\\text{Benzerdir}' }
    ],
    quiz: q([
      ['Benzer üçgenlerin karşılıklı açıları nasıldır?', ['Eşit','Orantılı','Bütünler','Farklı'], 0, 'Benzerlikte karşılıklı açılar eşittir.'],
      ['Benzer üçgenlerin karşılıklı kenarları nasıldır?', ['Orantılı','Daima eşit','Dik','Toplamları eşit'], 0, 'Karşılıklı kenarlar aynı oranla değişir.'],
      ['İki açının eşitliği hangi benzerlik kuralıdır?', ['A.A.','K.K.K.','K.A.K.','H.K.'], 0, 'Açı-Açı benzerliği.'],
      ['Üç kenarın oranlarının eşitliği hangi benzerlik kuralıdır?', ['A.A.','K.K.K.','K.A.K.','A.K.A.'], 1, 'Kenar-Kenar-Kenar benzerliği.'],
      ['İki kenar oranı ve aradaki açı eşitliği hangi kuraldır?', ['A.A.','K.K.K.','K.A.K.','H.K.'], 2, 'Kenar-Açı-Kenar benzerliği.'],
      ['Benzerlik oranı k ise çevreler oranı nedir?', ['$k$','$k^2$','$1/k^2$','$2k$'], 0, 'Çevreler uzunluklarla aynı oranda değişir.'],
      ['Benzerlik oranı k ise alanlar oranı nedir?', ['$k$','$k^2$','$k^3$','$2k$'], 1, 'Alan iki boyutlu olduğu için oran karesidir.'],
      ['$ABC\\sim DEF$ ise B açısının karşılığı hangisidir?', ['D','E','F','A'], 1, 'Sıraya göre B↔E.'],
      ['3-4-5 üçgenine benzer olan hangisidir?', ['6-8-10','6-7-8','4-5-6','9-10-11'], 0, 'Tüm kenarlar 2 ile çarpılmıştır.'],
      ['Benzerlik oranı 1 ise üçgenler için ne söylenebilir?', ['Eştir','Kesin farklıdır','Dik üçgendir','Eşkenardır'], 0, 'Aynı biçim ve aynı boyut eşliktir.'],
      ...Array.from({length:15}, (_,i) => {
        const k=i%3+2, small=i+3, big=small*k;
        return [`Benzer iki üçgende küçük kenar ${small} cm ve büyütme oranı ${k} ise karşılıklı kenar kaç cm'dir?`, numericOptions(big,[-k,k,1]), 0, `${small}·${k}=${big}.`];
      })
    ])
  });

  extendTopicPractice(100, {
    examples: [
      { question: 'ABC üçgeninde D, AB üzerinde; E, AC üzerinde ve DE∥BC ise hangi üçgenler benzerdir?', steps: [{ text: 'Paralellikten yöndeş açılar eşittir.' }, { text: 'A açısı ortaktir; A.A. benzerliği sağlanır.' }], answer: 'ADE\\sim ABC' },
      { question: 'DE∥BC, AD=4, DB=6 ve AE=8 ise EC kaç cm\'dir?', steps: ['$AD/DB=AE/EC$', '$4/6=8/EC$', '$4\\cdot EC=48$'], answer: '12' },
      { question: 'DE∥BC, AD/AB=2/5 ve BC=15 cm ise DE kaç cm\'dir?', steps: ['$DE/BC=AD/AB=2/5$', '$DE=15\\cdot2/5$'], answer: '6' },
      { question: 'Bir üçgende iki kenarı kesen doğru, bu kenarları aynı oranda bölüyorsa doğru için ne söylenir?', steps: [{ text: 'Temel orantı teoreminin tersine göre bu doğru üçüncü kenara paraleldir.' }], answer: '\\text{Üçüncü kenara paraleldir}' },
      { question: 'DE∥BC ve benzerlik oranı AD/AB=1/3 ise ADE ile ABC alanları oranı kaçtır?', steps: ['$(1/3)^2=1/9$'], answer: '\\dfrac19' }
    ],
    quiz: q([
      ['ABC üçgeninde DE∥BC ise hangi üçgenler benzerdir?', ['ADE ve ABC','ADB ve AEC','DEC ve ABC','ABD ve BCE'], 0, 'A.A. benzerliği vardır.'],
      ['Paralel doğru kenarları nasıl böler?', ['Orantılı','Eşit olmak zorunda','Rastgele','Dik'], 0, 'Temel orantı teoremi.'],
      ['$DE\\parallel BC$ ise hangisi doğrudur?', ['$AD/AB=AE/AC$','$AD=AB$','$AE=AC$','$DE=BC$'], 0, 'Benzer üçgenlerde karşılıklı kenarlar orantılıdır.'],
      ['İki kenar aynı oranda bölünüyorsa birleştiren doğru nasıl olur?', ['Üçüncü kenara paralel','Üçüncü kenara dik','Açıortay','Yükseklik'], 0, 'Temel orantı teoreminin tersi.'],
      ['Benzerlik oranı 1/2 ise alanlar oranı nedir?', ['1/2','1/4','1/8','2'], 1, 'Alanın oranı karedir.'],
      ...Array.from({length:20}, (_,i) => {
        const ad=i+2, db=i%5+2, ae=(i%4+2)*ad;
        const ec=(i%4+2)*db;
        return [`$DE\\parallel BC$, AD=${ad}, DB=${db}, AE=${ae}$ ise EC kaçtır?`, numericOptions(ec,[db,-db,ad]), 0, '$AD/DB=AE/EC$ oranı kullanılır.'];
      })
    ])
  });

  extendTopicPractice(101, {
    examples: [
      { question: 'Boyu 1,5 m olan kişinin gölgesi 2 m iken ağacın gölgesi 8 m ise ağacın boyu kaç metredir?', steps: [{ text: 'Güneş ışınları paralel olduğundan benzer dik üçgenler oluşur.' }, '$1{,}5/2=h/8$', '$2h=12$'], answer: '6' },
      { question: '1/200 ölçekli planda 4 cm olan uzunluk gerçekte kaç metredir?', steps: ['$4\\cdot200=800\\text{ cm}$', '$800\\text{ cm}=8\\text{ m}$'], answer: '8' },
      { question: 'Benzer iki üçgenin alanları 16 ve 100 ise benzerlik oranı kaçtır?', steps: ['$k^2=16/100$', '$k=4/10=2/5$'], answer: '\\dfrac25' },
      { question: 'Bir fotoğraf 3 kat büyütülürse alanı kaç katına çıkar?', steps: [{ text: 'Uzunluklar 3 katına çıkarken alan 3² katına çıkar.' }], answer: '9' },
      { question: 'Paralel güneş ışınlarında 3 m\'lik direğin gölgesi 4 m ise gölgesi 12 m olan binanin boyu kaçtır?', steps: ['$3/4=h/12$', '$4h=36$'], answer: '9' }
    ],
    quiz: q([
      ['Gölgeden boy bulma hangi temel kavrama dayanir?', ['Benzerlik','Eşlik','Pisagor her zaman','Çevre'], 0, 'Paralel ışınlar benzer üçgenler oluşturur.'],
      ['Ölçek 1/100 ise plandaki 1 cm gerçekte kaç cm\'dir?', ['1','10','100','1000'], 2, '1 cm planda 100 cm gerçekte.'],
      ['Benzer şekillerde uzunluk oranı 3 ise alan oranı kaçtır?', ['3','6','9','27'], 2, 'Alan oranı 3²=9.'],
      ['Alanlar oranı 25/49 ise uzunluklar oranı nedir?', ['5/7','25/49','7/5','625/2401'], 0, 'Pozitif karekök alınır.'],
      ['Bir şekil 2 kat küçültülürse alanı ne olur?', ['Yarısı','Dörtte biri','Sekizde biri','Değişmez'], 1, '(1/2)²=1/4.'],
      ...Array.from({length:20}, (_,i) => {
        const person=i%5+1, shadow=i%4+2, treeShadow=shadow*(i%3+2), height=person*(i%3+2);
        return [`Boyu ${person} m olan cismin gölgesi ${shadow} m. Gölgesi ${treeShadow} m olan benzer konumdaki cismin boyu kaçtır?`, numericOptions(height,[person,-person,shadow]), 0, 'Boy/gölge oranları eşittir.'];
      })
    ])
  });

  extendTopicPractice(102, {
    examples: [
      { question: 'Bir üçgende kenarortay, açıortay ve yükseklik kavramlarını ayırt ediniz.', steps: [{ text: 'Kenarortay köşeyi karşı kenarın orta noktasına bağlar.' }, { text: 'Açıortay köşe açısını iki eşit açıya böler.' }, { text: 'Yükseklik köşeden karşı kenara veya uzantısına dik iner.' }], answer: '\\text{Üç farklı yardımcı eleman}' },
      { question: 'Üç kenarortayın kesim noktasının adı nedir?', steps: [{ text: 'Kenarortaylar ağırlık merkezinde kesilir.' }], answer: '\\text{Ağırlık merkezi}' },
      { question: 'Üç iç açıortayın kesim noktası neyin merkezidir?', steps: [{ text: 'Bu nokta kenarlara eşit uzaklıktadır.' }], answer: '\\text{İç teğet çemberin merkezi}' },
      { question: 'Üç yüksekliğin kesim noktasına ne ad verilir?', steps: [{ text: 'Yüksekliklerin ortak noktası diklik merkezidir.' }], answer: '\\text{Diklik merkezi}' },
      { question: 'Üç kenar orta dikmenin kesim noktası neyin merkezidir?', steps: [{ text: 'Bu nokta köşelere eşit uzaklıktadır.' }], answer: '\\text{Çevrel çemberin merkezi}' }
    ],
    quiz: q([
      ['Köşeyi karşı kenarın orta noktasına birleştiren doğru parçası nedir?', ['Kenarortay','Açıortay','Yükseklik','Kenar orta dikme'], 0, 'Kenarortay tanımı.'],
      ['Köşe açısını iki eşit açıya ayıran ışın nedir?', ['Kenarortay','Açıortay','Yükseklik','Orta taban'], 1, 'Açıortay tanımı.'],
      ['Köşeden karşı kenara dik indirilen doğru parçası nedir?', ['Kenarortay','Açıortay','Yükseklik','Kenar orta dikme'], 2, 'Yükseklik tanımı.'],
      ['Bir kenarın orta noktasından dik geçen doğru nedir?', ['Kenarortay','Açıortay','Yükseklik','Kenar orta dikme'], 3, 'Kenar orta dikme tanımı.'],
      ['Kenarortaylar nerede kesişir?', ['Ağırlık merkezi','Diklik merkezi','İç merkez','Çevrel merkez'], 0, 'Üç kenarortay ağırlık merkezinde kesilir.'],
      ['Açıortaylar nerede kesişir?', ['Ağırlık merkezi','Diklik merkezi','İç merkez','Çevrel merkez'], 2, 'İç açıortaylar iç merkezde kesilir.'],
      ['Yükseklikler nerede kesişir?', ['Ağırlık merkezi','Diklik merkezi','İç merkez','Çevrel merkez'], 1, 'Diklik merkezi.'],
      ['Kenar orta dikmeler nerede kesişir?', ['Ağırlık merkezi','Diklik merkezi','İç merkez','Çevrel merkez'], 3, 'Çevrel çember merkezi.'],
      ['İç merkez hangi elemanlara eşit uzaklıktadır?', ['Kenarlara','Yalnız köşelere','Kenar ortalarına','Yüksekliklere'], 0, 'İç merkez kenarlara eşit uzaklıktadır.'],
      ['Çevrel merkez hangi noktalara eşit uzaklıktadır?', ['Köşelere','Yalnız kenarlara','Ağırlık merkezine','Açıortaylara'], 0, 'Çevrel çemberin yarıçapları köşelere uzanır.'],
      ...Array.from({length:15}, (_,i) => {
        const triangles = ['ABC','DEF','KLM','PRS','XYZ','TUV','MNP','RST','KPR','BDE','ACF','LMN','PQR','STU','VYZ'];
        const kinds = [
          ['kenarortay','karşı kenarın orta noktasından'],
          ['açıortay','köşe açısını iki eşit parçaya ayırarak'],
          ['yükseklik','karşı kenara dik olarak']
        ];
        const [name, clue]=kinds[i%3];
        return [`${triangles[i]} üçgeninde bir yardımcı eleman köşeden çıkıyor ve ${clue} geçiyor. Bu eleman hangisidir?`, ['Kenarortay','Açıortay','Yükseklik','Kenar orta dikme'], ['kenarortay','açıortay','yükseklik'].indexOf(name), `${name} tanımına uyar.`];
      })
    ])
  });

  extendTopicPractice(103, {
    examples: [
      { question: 'ABC üçgeninde AD iç açıortay, AB=6, AC=9 ve DB=4 ise DC kaç cm\'dir?', steps: ['$DB/DC=AB/AC$', '$4/DC=6/9=2/3$', '$2DC=12$'], answer: '6' },
      { question: 'A açısı 70° ve AD açıortay ise BAD ve DAC açıları kaç derecedir?', steps: ['$70/2=35$'], answer: '35^\\circ,\\ 35^\\circ' },
      { question: 'Açıortay üzerindeki P noktasının açının kollarına uzaklıkları 5 cm ve x cm ise x kaçtır?', steps: [{ text: 'Açıortay üzerindeki nokta açının kollarına eşit uzaklıktadır.' }], answer: '5' },
      { question: 'AB=AC olan ikizkenar üçgende A\'dan tabana çizilen açıortay başka hangi görevleri yapar?', steps: [{ text: 'İkizkenar üçgende tepe açıortayı tabani ortalar ve tabana diktir.' }], answer: '\\text{Kenarortay ve yükseklik}' },
      { question: 'AB=10, AC=15, DB=6 ve AD iç açıortay ise DC kaç cm\'dir?', steps: ['$DB/DC=AB/AC=10/15=2/3$', '$6/DC=2/3$'], answer: '9' }
    ],
    quiz: q([
      ['İç açıortay teoremi hangisidir?', ['$BD/DC=AB/AC$','$BD=DC$','$AB=AC$','$AD=BC$'], 0, 'Açıortay karşı kenarı komşu kenarlar oranında böler.'],
      ['Açıortay üzerindeki nokta açının kollarına nasıl uzaklıktadır?', ['Eşit','İki kati','Yarısı','Belirsiz'], 0, 'Dik uzaklıklar eşittir.'],
      ['60° lik açıyı açıortay kaça böler?', ['20°-40°','30°-30°','10°-50°','60°-60°'], 1, 'Açı iki eşit parçaya ayrılır.'],
      ['İkizkenar üçgende tepe açıortayı aynı zamanda nedir?', ['Kenarortay ve yükseklik','Yalnız dış açıortay','Kenar orta dikme degildir','Hiçbiri'], 0, 'Simetri nedeniyle üç görev aynı doğru üzerindedir.'],
      ['Üç iç açıortay nerede kesişir?', ['İç merkez','Ağırlık merkezi','Diklik merkezi','Çevrel merkez'], 0, 'İç teğet çemberin merkezi.'],
      ...Array.from({length:20}, (_,i) => {
        const ab=i%5+2, ac=i%4+3, bd=ab*(i%3+1), dc=ac*(i%3+1);
        return [`AD açıortay, AB=${ab}, AC=${ac}, BD=${bd} ise DC kaçtır?`, numericOptions(dc,[ac,-ac,ab]), 0, '$BD/DC=AB/AC$ bağıntısı uygulanır.'];
      })
    ])
  });

  extendTopicPractice(104, {
    examples: [
      { question: 'ABC üçgeninde AD kenarortay ve BC=14 cm ise BD ve DC kaç cm\'dir?', steps: [{ text: 'Kenarortay karşı kenarı iki eşit parçaya ayırır.' }, '$BD=DC=14/2$'], answer: '7,\\ 7' },
      { question: 'AD kenarortay ve G ağırlık merkezi ise AG:GD oranı kaçtır?', steps: [{ text: 'Ağırlık merkezi kenarortayı köşeden başlayarak 2:1 oranında böler.' }], answer: '2:1' },
      { question: 'AG=10 cm ise GD kaç cm\'dir?', steps: ['$AG/GD=2/1$', '$10/GD=2$'], answer: '5' },
      { question: 'AD=18 cm olan kenarortayda ağırlık merkezi A\'dan kaç cm uzaktadır?', steps: ['$AG=2/3\\cdot AD$', '$AG=2/3\\cdot18$'], answer: '12' },
      { question: 'Bir üçgende üç kenarortay hangi noktada kesişir?', steps: [{ text: 'Üç kenarortayın ortak noktası ağırlık merkezidir ve her birini 2:1 böler.' }], answer: '\\text{Ağırlık merkezi}' }
    ],
    quiz: q([
      ['Kenarortay karşı kenarı nasıl böler?', ['İki eşit parçaya','2:1 oranında','Dik olarak ama eşit değil','Üç eşit parçaya'], 0, 'Kenarortayın ucu kenarın orta noktasıdır.'],
      ['Üç kenarortayın kesim noktası nedir?', ['Ağırlık merkezi','İç merkez','Diklik merkezi','Çevrel merkez'], 0, 'Ağırlık merkezi.'],
      ['Ağırlık merkezi kenarortayı hangi oranda böler?', ['1:1','2:1','3:1','3:2'], 1, 'Köşeden başlayan parça daha uzundur.'],
      ['$AG/GD$ oranı kaçtır?', ['1/2','2','3','1'], 1, 'AG:GD=2:1.'],
      ['Kenarortay uzunluğu 15 ise AG kaç olur?', ['5','10','12','15'], 1, 'AG kenarortayın 2/3’udur.'],
      ...Array.from({length:10}, (_,i) => {
        const bc=2*(i+3);
        return [`AD kenarortay ve BC=${bc} cm ise BD kaç cm'dir?`, numericOptions(bc/2,[1,-1,2]), 0, `BD=BC/2=${bc/2}.`];
      }),
      ...Array.from({length:10}, (_,i) => {
        const gd=i+2, ag=2*gd;
        return [`G ağırlık merkezi ve GD=${gd} cm ise AG kaç cm'dir?`, numericOptions(ag,[gd,-gd,1]), 0, 'AG=2·GD.'];
      })
    ])
  });

  extendTopicPractice(105, {
    examples: [
      { question: 'Tabanı 12 cm ve bu tabana ait yüksekliği 7 cm olan üçgenin alanı kaçtır?', steps: ['$A=taban\\cdot yükseklik/2$', '$A=12\\cdot7/2$'], answer: '42' },
      { question: 'Dar açılı üçgende diklik merkezi nerededir?', steps: [{ text: 'Üç yükseklik üçgenin içinde kesişir.' }], answer: '\\text{Üçgenin içinde}' },
      { question: 'Dik üçgende diklik merkezi nerededir?', steps: [{ text: 'İki dik kenar aynı zamanda yüksekliktir ve dik açı köşesinde kesişir.' }], answer: '\\text{Dik açı köşesinde}' },
      { question: 'Geniş açılı üçgende diklik merkezi nerededir?', steps: [{ text: 'Bazı yükseklikler kenar uzantılarına iner; kesim noktası üçgenin dışındadır.' }], answer: '\\text{Üçgenin dışında}' },
      { question: 'AB=AC olan ikizkenar üçgende A\'dan BC\'ye indirilen yükseklik BC\'yi nasıl böler?', steps: [{ text: 'Tepe yüksekliği aynı zamanda kenarortaydır.' }], answer: '\\text{İki eşit parçaya}' },
      { question: 'Alanı 30 cm² ve tabani 10 cm olan üçgenin bu tabana ait yüksekliği kaçtır?', steps: ['$30=10\\cdot h/2$', '$30=5h$'], answer: '6' }
    ],
    quiz: q([
      ['Üç yüksekliğin kesim noktası nedir?', ['Diklik merkezi','Ağırlık merkezi','İç merkez','Çevrel merkez'], 0, 'Yükseklikler diklik merkezinde kesişir.'],
      ['Dar açılı üçgende diklik merkezi nerededir?', ['İçinde','Dışında','Bir kosede','Sonsuzda'], 0, 'Dar üçgende yükseklikler içte kesişir.'],
      ['Dik üçgende diklik merkezi nerededir?', ['Dik açı köşesinde','Hipotenusun ortasinda','Dışında','İç merkezde'], 0, 'Dik kenarlar yüksekliktir.'],
      ['Geniş açılı üçgende diklik merkezi nerededir?', ['İçinde','Dışında','Geniş açı köşesinde','Kenar ortasinda'], 1, 'Yükseklik uzantıları dışarıda kesişir.'],
      ['Üçgenin alan formülü hangisidir?', ['$taban\\cdot yükseklik/2$','$taban+yükseklik$','$2\\cdot taban\\cdot yükseklik$','$taban/yükseklik$'], 0, 'Alan taban ile yükseklik çarpımının yarısıdır.'],
      ['Yükseklik karşı kenara nasıl iner?', ['Dik','Paralel','Açıortay olarak zorunlu','Kenarortay olarak zorunlu'], 0, 'Yükseklik dik uzaklıktır.'],
      ['Geniş üçgende yükseklik nereye inebilir?', ['Kenar uzantısına','Yalnız kenar ortasina','Yalnız koseye','Hiçbir yere'], 0, 'Geniş açılı üçgende bazı yükseklikler uzantıya iner.'],
      ['İkizkenar üçgende tepe yüksekliği aynı zamanda nedir?', ['Kenarortay ve açıortay','Yalnız dış açıortay','Kenar orta dikme degildir','Hiçbiri'], 0, 'Simetri nedeniyle üç görev aynıdır.'],
      ['Eşkenar üçgende yükseklikler için ne söylenir?', ['Açıortay ve kenarortaydır','Yalnız yüksekliktir','Birbirine paraleldir','Kesişmez'], 0, 'Eşkenar üçgende yardımcı elemanlar çakışır.'],
      ['Aynı taban ve aynı yüksekliğe sahip üçgenlerin alanları nasıldır?', ['Eşit','2:1','Tabana bağlı değil','Belirsiz'], 0, 'Alan formülleri aynıdır.'],
      ...Array.from({length:15}, (_,i) => {
        const base=2*(i+3), height=i%5+3, area=base*height/2;
        return [`Tabanı ${base} cm, yüksekliği ${height} cm olan üçgenin alanı kaçtır?`, numericOptions(area,[height,-height,base]), 0, `${base}·${height}/2=${area}.`];
      })
    ])
  });
})();
