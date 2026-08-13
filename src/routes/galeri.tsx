import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// 20 SEO Uyumlu Görsel Importu
import anadoluBoksKulubu from "@/assets/anadolu-yakasi-boks-kulubu.webp";
import anadoluOzelDers from "@/assets/anadolu-yakasi-ozel-boks-dersi.jpg";
import atasehirBirebir from "@/assets/atasehir-birebir-boks-dersi.jpg";
import atasehirAntrenman from "@/assets/atasehir-boks-antrenmani.webp";
import atasehirAntrenor from "@/assets/atasehir-boks-antrenoru.jpg";
import atasehirDersi from "@/assets/atasehir-boks-dersi.jpg";
import atasehirEgitim from "@/assets/atasehir-boks-egitimi.JPG";
import atasehirKulubu from "@/assets/atasehir-boks-kulubu.JPG";
import atasehirKursu from "@/assets/atasehir-boks-kursu.jpg";
import atasehirOzelAntrenman from "@/assets/atasehir-boks-ozel-antrenman.webp";
import atasehirSalonu from "@/assets/atasehir-boks-salonu.jpg";
import atasehirCocuk from "@/assets/atasehir-cocuk-boks-dersi.webp";
import atasehirOzelDers from "@/assets/atasehir-ozel-boks-dersi.webp";
import atasehirYakininda from "@/assets/atasehir-yakininda-boks-dersi.webp";
import demirkolKulubuAtasehir from "@/assets/demirkol-boks-kulubu-atasehirr.webp";
import istanbulAnadoluKulubu from "@/assets/istanbul-anadolu-boks-kulubu.jpg";
import istanbulAnadoluDersi from "@/assets/istanbul-anadolu-yakasi-boks-dersi.jpg";
import umraniyeDersi from "@/assets/umraniye-boks-dersi.webp";
import umraniyeKulubu from "@/assets/umraniye-boks-kulubu.webp";
import umraniyeOzelDers from "@/assets/umraniye-ozel-boks-dersi.jpg";

// Yeni Eklenen 4 Görsel
import istanbulAnadoluBoks from "@/assets/istanbul-anadolu-boks.webp";
import anadoluYakasiBoksYeni from "@/assets/anadolu-yakasi-boks-yeni.webp";
import istBoks from "@/assets/ist-boks.webp";
import boxing from "@/assets/boxing.webp";

// Projede Kullanılmayan Diğer 15 Görsel
import atasehirBirebirVedat from "@/assets/atasehir-birebir-boks-dersi-vedat-demirkol.webp";
import atasehirBoksDersiOzel from "@/assets/atasehir-boks-dersi-ozel-antrenman.webp";
import atasehirBoksDersiRing from "@/assets/atasehir-boks-dersi-ring.jpg";
import atasehirBoksOzelDersAntrenman from "@/assets/atasehir-boks-ozel-ders-antrenman.webp";
import atasehirBoksOzelDersFikret from "@/assets/atasehir-boks-ozel-ders-fikret-demirkol.webp";
import atasehirBoksSalonuNusret from "@/assets/atasehir-boks-salonu-nusret-demirkol.webp";
import atasehirBoksSporu from "@/assets/atasehir-boks-sporu.webp";
import atasehirKisiselAntrenorMertcan from "@/assets/atasehir-kisisel-boks-antrenoru-mertcan-kaya.png";
import atasehirUmraniyeOzelBoksDersiRing from "@/assets/atasehir-umraniye-ozel-boks-dersi-ring.jpg";
import demirkolBoksKulubuAtasehirMain from "@/assets/demirkol-boks-kulubu-atasehir.webp";
import floydMayweather from "@/assets/floyd-mayweather.webp";
import mikeTyson from "@/assets/mike-tyson.webp";
import muhammedAli from "@/assets/muhammetali.png";
import umraniyeAtasehirBirebirGrup from "@/assets/umraniye-atasehir-birebir-boks-dersi-grup-egitimi.webp";
import umraniyeOzelBoksDersiKumTorbasi from "@/assets/umraniye-ozel-boks-dersi-kum-torbasi.webp";
import anadoluYakasiBoksGrup from "@/assets/anadolu-yakasi-boks-kulubu-grup-egitimi.jpg";

// Yeni Eklenen 16 Görsel
import atasehirBoksOzelDersJpg from "@/assets/atasehir-boks-ozel-ders.jpg";
import atasehirBoksEgitmeniJpg from "@/assets/atasehir-boks-egitmeni.jpg";
import atasehirBoksAntrenoruJpeg from "@/assets/atasehir-boks-antrenoru.jpeg";
import atasehirBoksAntrenmaniJpg from "@/assets/atasehir-boks-antrenmani.jpg";
import atasehirBirebirBoksEgitimiJpg from "@/assets/atasehir-birebir-boks-egitimi.jpg";
import umraniyeBoksSalonuJpeg from "@/assets/umraniye-boks-salonu.jpeg";
import umraniyeBoksOzelDersJpg from "@/assets/umraniye-boks-ozel-ders.jpg";
import umraniyeBoksKursuJpeg from "@/assets/umraniye-boks-kursu.jpeg";
import umraniyeBoksKondisyonAntrenmaniJpg from "@/assets/umraniye-boks-kondisyon-antrenmani.jpg";
import umraniyeBoksEgitmeniJpeg from "@/assets/umraniye-boks-egitmeni.jpeg";
import umraniyeBoksEgitimiJpg from "@/assets/umraniye-boks-egitimi.jpg";
import umraniyeBoksAntrenoruJpeg from "@/assets/umraniye-boks-antrenoru.jpeg";
import umraniyeBoksAntrenmaniJpg from "@/assets/umraniye-boks-antrenmani.jpg";
import umraniyeBirebirBoksEgitimiJpg from "@/assets/umraniye-birebir-boks-egitimi.jpg";
import atasehirKadinBoksDersiJpg from "@/assets/atasehir-kadin-boks-dersi.jpg";
import atasehirErkekBoksDersiJpg from "@/assets/atasehir-erkek-boks-dersi.jpg";

interface GalleryItem {
  src: string;
  title: string;
  desc: string;
  alt: string;
  category: "Özel Ders" | "Ring" | "Antrenörler" | "Salon" | "Çocuk Boks" | "Kondisyon";
}

const galleryItems: GalleryItem[] = [
  {
    src: anadoluBoksKulubu,
    title: "İstanbul Anadolu Yakası Boks Kulübü Ayrıcalıkları",
    desc: "İstanbul Anadolu Yakası'nda boks sporunu profesyonel ve modern ekipmanlarla deneyimlemek isteyenler için Demirkol Boks Kulübü en doğru adrestir. Milli antrenörlerimiz gözetiminde, spora yeni başlayanlardan profesyonel sporculara kadar herkes için en doğru teknik eğitim standartları sunulmaktadır.",
    alt: "İstanbul Anadolu Yakası boks kulübü boks antrenmanı anı",
    category: "Salon",
  },
  {
    src: anadoluOzelDers,
    title: "Anadolu Yakası Özel Boks Dersi ile Hızlı Gelişim",
    desc: "Anadolu Yakası genelinde birebir özel boks dersleri sayesinde teknikleri en doğru açılardan öğrenir, kas hafızanızı hızla geliştirirsiniz. Kişiselleştirilmiş programlarımızla hedeflerinize (yağ yakımı, kondisyon, teknik boks) en hızlı sürede ulaşmanız sağlanır.",
    alt: "Anadolu Yakası özel boks dersi lap vuruş çalışması",
    category: "Özel Ders",
  },
  {
    src: atasehirBirebir,
    title: "Ataşehir Birebir Boks Dersi ve Teknik Sparring",
    desc: "Ataşehir şubemizde sunduğumuz birebir boks dersleri, tamamen sizin seviyenize ve hedeflerinize uygun şekilde planlanır. Bireysel gelişim odağında tasarlanan bu derslerde, gard duruşu, doğru adımlama ve yumruk teknikleri birebir analiz edilerek öğretilir.",
    alt: "Ataşehir birebir boks dersi sparring ve gard antrenmanı",
    category: "Özel Ders",
  },
  {
    src: atasehirAntrenman,
    title: "Ataşehir Boks Antrenmanı ve Kondisyon Gelişimi",
    desc: "Ataşehir'de gerçekleştirdiğimiz boks antrenmanı seansları ile kardiyovasküler kapasitenizi zirveye taşırken, günün stresinden arınmanızı sağlıyoruz. Yüksek kalori yakımı sağlayan bu seanslar, vücudunuzun sıkılaşmasını ve fit kalmasını sağlar.",
    alt: "Ataşehir boks antrenmanı kondisyon ve torba çalışması",
    category: "Kondisyon",
  },
  {
    src: atasehirAntrenor,
    title: "Ataşehir Boks Antrenörü Eşliğinde Birebir Eğitim",
    desc: "Ataşehir'de boks antrenörü arayanlar için milli takım düzeyinde eğitmen kadromuzla yanınızdayız. Her seviyeye uygun profesyonel rehberlik, antrenman takipleri ve teknik boks analizleriyle doğru boks eğitiminin farkını hissedin.",
    alt: "Ataşehir boks antrenörü ile birebir boks teknik çalışması",
    category: "Antrenörler",
  },
  {
    src: atasehirDersi,
    title: "Ataşehir Boks Dersi ile Savunma ve Güç",
    desc: "Ataşehir boks dersi programlarımız, sadece teknik ve yumruk atmayı değil, aynı zamanda doğru savunma reflekslerini, baş hareketlerini ve postür duruşlarını geliştirmeyi hedefler. Güvenli bir ortamda boks öğrenmenin tadını çıkarın.",
    alt: "Ataşehir boks dersi teknikleri öğrenen öğrenciler",
    category: "Özel Ders",
  },
  {
    src: atasehirEgitim,
    title: "Ataşehir Boks Eğitimi Programı ve Seviyeler",
    desc: "Ataşehir boks eğitimi programlarımız çocuklardan yetişkinlere, başlangıç seviyesinden lisanslı sporculara kadar geniş bir yelpazede profesyonel metotlarla sunulur. Doğru mekanik ve güvenli antrenman prensipleri temel önceliğimizdir.",
    alt: "Ataşehir boks eğitimi alan lisanslı sporcular ringde",
    category: "Ring",
  },
  {
    src: atasehirKulubu,
    title: "Demirkol Boks Kulübü Ataşehir Şubesi",
    desc: "Demirkol Boks Kulübü Ataşehir, modern boks ringi ve dünya standartlarında kum torbası ve fitness ekipmanlarıyla donatılmış profesyonel bir spor tesisidir. Sporcularımıza en yüksek konfor ve steril antrenman ortamını sunuyoruz.",
    alt: "Demirkol boks kulübü Ataşehir antrenman salonu genel görünümü",
    category: "Salon",
  },
  {
    src: atasehirKursu,
    title: "Ataşehir Boks Kursu ve Grup Çalışmaları",
    desc: "Ataşehir boks kursu alternatiflerimiz arasında hem birebir özel boks dersleri hem de seviyelere göre ayrılmış butik grup eğitimleri yer almaktadır. Motivasyonu artıran grup boks seanslarıyla sosyalleşirken formda kalın.",
    alt: "Ataşehir boks kursu grup dersi antrenman anı",
    category: "Salon",
  },
  {
    src: atasehirOzelAntrenman,
    title: "Ataşehir Boks Özel Antrenman Seansları",
    desc: "Ataşehir boks özel antrenman programları, zaman planlaması kısıtlı olanlar veya hızlı gelişim hedefleyenler için esnek saatlerde birebir uygulanmaktadır. Antrenörünüz sadece sizin hedeflerinize ve kondisyon durumunuza odaklanır.",
    alt: "Ataşehir boks özel antrenman birebir lap çalışması",
    category: "Kondisyon",
  },
  {
    src: atasehirSalonu,
    title: "Ataşehir Boks Salonu ve Donanımı",
    desc: "Ataşehir boks salonu arayışınızda geniş havalandırma kapasitesi, yarı profesyonel ringi ve özel çalışma alanları ile Demirkol Boks Kulübü size steril ve güvenli bir ortam sunar. Kendi sınırlarınızı aşmak için en uygun altyapıyı sağlıyoruz.",
    alt: "Ataşehir boks salonu yarı profesyonel ring ve kum torbaları",
    category: "Salon",
  },
  {
    src: atasehirCocuk,
    title: "Ataşehir Çocuk Boks Dersi ile Özgüven ve Disiplin",
    desc: "Ataşehir çocuk boks dersi gruplarımız, 7-14 yaş arası çocukların motor becerilerini geliştirmek, özgüven kazanmalarını sağlamak ve disiplin aşılamak için pedagojik olarak tasarlanmıştır. Güvenli ekipmanlarla, eğlenceli ve öğretici eğitimler sunulur.",
    alt: "Ataşehir çocuk boks dersi alan genç sporcu antrenmanda",
    category: "Çocuk Boks",
  },
  {
    src: atasehirOzelDers,
    title: "Ataşehir Özel Boks Dersi Avantajları",
    desc: "Ataşehir özel boks dersi alarak hedeflerinize (yağ yakımı, kas kazanımı, savunma teknikleri) en hızlı ve verimli yoldan ulaşırsınız. Birebir ilgi gelişim süresini yarı yarıya düşürerek motivasyonunuzu yüksek tutar.",
    alt: "Ataşehir özel boks dersi alan üye antrenörü eşliğinde",
    category: "Özel Ders",
  },
  {
    src: atasehirYakininda,
    title: "Ataşehir Yakınında Boks Dersi Arayanlar İçin",
    desc: "Ataşehir yakınında boks dersi veya salonu arıyorsanız, kolay ulaşım, otopark imkanı ve esnek seans saatleriyle kulübümüz size en pratik spor rutinini sunar. İş çıkışı veya gün başlangıcı antrenmanları için ideal konumdayız.",
    alt: "Ataşehir yakınında boks dersi salonu ve antrenman saati",
    category: "Salon",
  },
  {
    src: demirkolKulubuAtasehir,
    title: "Demirkol Boks Kulübü Ataşehir Markası",
    desc: "Demirkol Boks Kulübü Ataşehir, milli takım kökenli kurucu antrenörleri ve boks camiasında saygın geçmişiyle bölgenin en prestijli boks eğitim merkezidir. Disiplin, saygı ve profesyonellik ilkelerimizle boks sporunu öğretiyoruz.",
    alt: "Demirkol boks kulübü Ataşehir kurumsal logosu ve sporcuları",
    category: "Salon",
  },
  {
    src: istanbulAnadoluKulubu,
    title: "İstanbul Anadolu Boks Kulübü Sporcuları",
    desc: "İstanbul Anadolu boks kulübü dendiğinde ilk akla gelen Demirkol Spor Kulübü, bugüne kadar onlarca milli sporcu ve Türkiye şampiyonu yetiştirmenin gururunu yaşamaktadır. Kulübümüz, profesyonel boks kariyeri hedefleyen genç yetenekler için bir okuldur.",
    alt: "İstanbul Anadolu boks kulübü sporcuları madalyalarıyla ringde",
    category: "Ring",
  },
  {
    src: istanbulAnadoluDersi,
    title: "İstanbul Anadolu Yakası Boks Dersi Seçenekleri",
    desc: "İstanbul Anadolu Yakası boks dersi eğitimlerimiz, her üyenin fiziksel kapasitesine göre test edilerek başlar ve aylık gelişim raporlarıyla desteklenir. Sağlığınız ve gelişiminiz için bilimsel temellere dayalı boks antrenmanı sunuyoruz.",
    alt: "İstanbul Anadolu Yakası boks dersi alan üyeler antrenmanda",
    category: "Özel Ders",
  },
  {
    src: umraniyeDersi,
    title: "Ümraniye Boks Dersi ile Ring Deneyimi",
    desc: "Ümraniye boks dersi arayan sporseverler için hazırladığımız özel antrenman programları, ring disiplinini ve koordinasyonu üst seviyeye çıkarmaktadır. Hem kondisyonunuzu artırın hem de temel savunma tekniklerini uygulayarak öğrenin.",
    alt: "Ümraniye boks dersi alan genç yetenek torbada çalışırken",
    category: "Özel Ders",
  },
  {
    src: umraniyeKulubu,
    title: "Ümraniye Boks Kulübü ve Tesis İmkanları",
    desc: "Demirkol Ümraniye boks kulübü, geniş sparring alanları ve uzman antrenör kadrosuyla Anadolu Yakası boks severlerin vazgeçilmez buluşma noktasıdır. Tesisimizdeki geniş ekipman parkuru her seviye boksöre hitap eder.",
    alt: "Ümraniye boks kulübü antrenman ekipmanları ve ring",
    category: "Salon",
  },
  {
    src: umraniyeOzelDers,
    title: "Ümraniye Özel Boks Dersi ile Profesyonel Çalışma",
    desc: "Ümraniye özel boks dersi seanslarımızda birebir boks teknikleri, lap vuruşları, gard alma ve kaçış manevraları detaylı şekilde analiz edilerek öğretilir. Kendi hedeflerinize odaklı, verimli ve güvenli antrenman yapmanın farkını yaşayın.",
    alt: "Ümraniye özel boks dersi alan boksör antrenörüyle sparringde",
    category: "Özel Ders",
  },
  {
    src: istanbulAnadoluBoks,
    title: "İstanbul Anadolu Yakası Boks Kursu ve Eğitimleri",
    desc: "İstanbul Anadolu Yakası genelinde boks kursu arayanlar için en donanımlı salonumuzda, çocuk ve yetişkin sınıfları ile hizmet vermekteyiz. Profesyonel antrenör gözetiminde güvenli boks antrenmanı.",
    alt: "İstanbul Anadolu boks antrenmanı kursiyerler",
    category: "Salon",
  },
  {
    src: anadoluYakasiBoksYeni,
    title: "Anadolu Yakası Özel Boks Dersi Ayrıcalığı",
    desc: "Birebir antrenmanlarla savunma mekanizmalarınızı ve yumruk gücünüzü en üst düzeye çıkarın. Anadolu Yakası'nda özel boks dersi alarak hedefinize çok daha hızlı ulaşın.",
    alt: "Anadolu Yakası özel boks dersi antrenmanı",
    category: "Özel Ders",
  },
  {
    src: istBoks,
    title: "İstanbul Boks Salonu ve Profesyonel Boks Ringi",
    desc: "Demirkol Boks Kulübü olarak profesyonel boks ringimiz ve geniş antrenman sahamızla İstanbul'da boks sporunun en doğru adresiyiz. Olimpik standartlarda ekipmanlarla çalışın.",
    alt: "İstanbul boks salonu ring ve antrenman sahası",
    category: "Ring",
  },
  {
    src: boxing,
    title: "Boks Özel Ders ile Yüksek Kondisyon ve Güç",
    desc: "Ataşehir ve Ümraniye şubelerimizde profesyonel boks özel ders eğitimleri ile yağ yakımınızı hızlandırırken kondisyon seviyenizi zirveye taşıyın.",
    alt: "Boks özel ders antrenmanı kondisyon çalışması",
    category: "Kondisyon",
  },
  {
    src: atasehirBirebirVedat,
    title: "Ataşehir Birebir Boks Dersi Vedat Demirkol",
    desc: "Milli antrenörümüz Vedat Demirkol eşliğinde Ataşehir şubemizde birebir özel boks dersleri ile teknik ve taktik seviyenizi en üst boyuta taşıyın.",
    alt: "Ataşehir birebir boks dersi milli antrenör Vedat Demirkol",
    category: "Antrenörler",
  },
  {
    src: atasehirBoksDersiOzel,
    title: "Ataşehir Boks Dersi Özel Antrenman Programları",
    desc: "Kişiye özel antrenman programlarıyla, kendi sınırlarınızı zorlayarak boks sporunun inceliklerini öğrenin. Ataşehir boks dersi ile sağlıklı ve fit kalın.",
    alt: "Ataşehir boks dersi özel antrenmanı",
    category: "Özel Ders",
  },
  {
    src: atasehirBoksDersiRing,
    title: "Ataşehir Boks Salonu Ring İçi Taktik Çalışmalar",
    desc: "Ataşehir şubemizdeki modern boks ringinde, teknik sparring ve müsabaka simülasyonları ile ring tecrübenizi geliştirin.",
    alt: "Ataşehir boks dersi ring içi taktik antrenmanı",
    category: "Ring",
  },
  {
    src: atasehirBoksOzelDersAntrenman,
    title: "Ataşehir Boks Özel Ders Seansı Detayları",
    desc: "Birebir boks dersi seanslarımızda, antrenörlerimiz gard duruşundan yumruk açılarına kadar tüm detayları analiz ederek hızlı gelişim sağlar.",
    alt: "Ataşehir boks özel ders lap çalışması",
    category: "Özel Ders",
  },
  {
    src: atasehirBoksOzelDersFikret,
    title: "Ataşehir Boks Özel Ders Fikret Demirkol",
    desc: "Fikret Demirkol liderliğinde Ataşehir boks salonumuzda gerçekleştirilen profesyonel boks dersleri ile reflekslerinizi ve savunma gücünüzü geliştirin.",
    alt: "Ataşehir boks özel ders antrenör Fikret Demirkol",
    category: "Antrenörler",
  },
  {
    src: atasehirBoksSalonuNusret,
    title: "Ataşehir Boks Salonu Antrenmanı Nusret Demirkol",
    desc: "Nusret Demirkol gözetiminde Ataşehir boks salonumuzda yapılan dayanıklılık ve patlayıcı güç antrenmanları ile sınırlarınızı aşın.",
    alt: "Ataşehir boks salonu antrenörü Nusret Demirkol",
    category: "Antrenörler",
  },
  {
    src: atasehirBoksSporu,
    title: "Ataşehir Boks Sporu ile Sağlıklı Yaşam ve Fit Vücut",
    desc: "Boks sporu, tüm kas gruplarını çalıştıran en etkili kardiyo egzersizlerinden biridir. Ataşehir boks derslerimizde yüksek kalorili antrenmanlarla formunuzu koruyun.",
    alt: "Ataşehir boks sporu antrenman anı",
    category: "Kondisyon",
  },
  {
    src: atasehirKisiselAntrenorMertcan,
    title: "Ataşehir Kişisel Boks Antrenörü Mertcan Kaya",
    desc: "Kişisel antrenör Mertcan Kaya eşliğinde Ataşehir'de boks dersleri. Hızlı koordinasyon, çeviklik ve teknik boks odaklı birebir eğitim.",
    alt: "Ataşehir kişisel boks antrenörü Mertcan Kaya ile antrenman",
    category: "Antrenörler",
  },
  {
    src: atasehirUmraniyeOzelBoksDersiRing,
    title: "Ataşehir ve Ümraniye Özel Boks Dersi Ring Deneyimi",
    desc: "Ataşehir ve Ümraniye şubelerimizin ortak ring çalışmalarında, seviyenize uygun partnerlerle güvenli boks sparring eğitimleri verilir.",
    alt: "Ataşehir ve Ümraniye özel boks dersi ring antrenmanı",
    category: "Ring",
  },
  {
    src: demirkolBoksKulubuAtasehirMain,
    title: "Demirkol Boks Kulübü Ataşehir Salonu",
    desc: "Demirkol Boks Kulübü Ataşehir şubemizde, elit boks antrenmanı ekipmanları ve geniş sosyal alanlarımızla sporcularımıza konforlu bir deneyim sunuyoruz.",
    alt: "Demirkol boks kulübü Ataşehir salonu iç görünüm",
    category: "Salon",
  },
  {
    src: floydMayweather,
    title: "Efsane Boksörlerin İzinde Teknik Antrenmanlar",
    desc: "Floyd Mayweather gibi dünya şampiyonlarının savunma tarzı, ayak oyunları ve reaksiyon sürelerini geliştiren teknik antrenman programları uyguluyoruz.",
    alt: "Floyd Mayweather boks teknik analiz ve antrenman",
    category: "Kondisyon",
  },
  {
    src: mikeTyson,
    title: "Mike Tyson Tarzı Agresif ve Güçlü Boks Eğitimi",
    desc: "Mike Tyson'ın ünlü peek-a-boo savunma tarzı ve yakın mesafe nakavt vuruşları üzerine odaklanan teknik boks dersleri sunuyoruz.",
    alt: "Mike Tyson boks antrenmanı ve teknikleri",
    category: "Kondisyon",
  },
  {
    src: muhammedAli,
    title: "Muhammed Ali Ayak Oyunları ve Gard Teknikleri",
    desc: "Efsane boksör Muhammed Ali'nin meşhur ayak dansı, hızlı sol direkleri ve mesafe kontrolü tekniklerini antrenmanlarımızda deneyimleyin.",
    alt: "Muhammed Ali boks efsanesi antrenmanı",
    category: "Kondisyon",
  },
  {
    src: umraniyeAtasehirBirebirGrup,
    title: "Ümraniye ve Ataşehir Birebir Boks Dersi Grup Eğitimi",
    desc: "Ümraniye ve Ataşehir şubelerimizde hem birebir özel boks dersi hem de 4-6 kişilik butik grup dersleriyle motive edici bir ortamda antrenman yapın.",
    alt: "Ümraniye ve Ataşehir birebir boks dersi grup çalışması",
    category: "Özel Ders",
  },
  {
    src: umraniyeOzelBoksDersiKumTorbasi,
    title: "Ümraniye Özel Boks Dersi Kum Torbası Kombinasyonları",
    desc: "Ümraniye özel boks derslerimizde kum torbası üzerinde dayanıklılık, hız ve koordinasyon artıran özel kombinasyon çalışmaları yapılmaktadır.",
    alt: "Ümraniye özel boks dersi kum torbası çalışması",
    category: "Özel Ders",
  },
  {
    src: anadoluYakasiBoksGrup,
    title: "Anadolu Yakası Boks Dersi Grup Antrenmanı",
    desc: "Ataşehir ve Ümraniye şubelerimizdeki grup boks eğitimlerimiz, milli antrenörler gözetiminde disiplin ve yüksek motivasyon eşliğinde gerçekleştirilmektedir.",
    alt: "Anadolu Yakası boks dersi grup eğitimi öğrencileri ve antrenörleri",
    category: "Salon",
  },
  {
    src: atasehirBoksOzelDersJpg,
    title: "Ataşehir Boks Özel Ders ile Birebir Gelişim",
    desc: "Ataşehir şubemizde profesyonel antrenörlerimiz eşliğinde birebir özel boks dersleri alarak tekniklerinizi, yumruk gücünüzü ve savunma reflekslerinizi hızla geliştirin.",
    alt: "Ataşehir boks özel ders antrenman anı birebir lap vuruş",
    category: "Özel Ders",
  },
  {
    src: atasehirBoksEgitmeniJpg,
    title: "Ataşehir Boks Eğitmeni Eşliğinde Profesyonel Antrenman",
    desc: "Ataşehir şubemizdeki uzman boks eğitmenleri sayesinde spora doğru tekniklerle başlayın. Hem teori hem de pratik boks becerilerini doğru kaynaktan öğrenin.",
    alt: "Ataşehir boks eğitmeni ile teknik ders ve sparring analizi",
    category: "Antrenörler",
  },
  {
    src: atasehirBoksAntrenoruJpeg,
    title: "Ataşehir Boks Antrenörü ve Teknik Sparring",
    desc: "Ataşehir'de lisanslı boks antrenörümüz ile gerçekleştireceğiniz antrenmanlarda, refleks geliştirme, gard alma ve doğru adımlama tekniklerini en ince ayrıntısıyla öğrenin.",
    alt: "Ataşehir boks antrenörü gözetiminde sparring çalışması",
    category: "Antrenörler",
  },
  {
    src: atasehirBoksAntrenmaniJpg,
    title: "Ataşehir Boks Antrenmanı ile Yüksek Kondisyon",
    desc: "Ataşehir şubemizdeki yüksek yoğunluklu boks antrenmanı seansları ile dayanıklılığınızı artırırken hızlı ve etkili bir şekilde kalori yakın.",
    alt: "Ataşehir boks antrenmanı yapan sporcular torba çalışması",
    category: "Kondisyon",
  },
  {
    src: atasehirBirebirBoksEgitimiJpg,
    title: "Ataşehir Birebir Boks Eğitimi ve Gard Teknikleri",
    desc: "Ataşehir'de birebir boks eğitimi alarak gard duruşunuzu, reaksiyon sürenizi ve kombinasyon vuruşlarınızı kişisel eğitmeniniz eşliğinde mükemmelleştirin.",
    alt: "Ataşehir birebir boks eğitimi gard ve duruş çalışması",
    category: "Özel Ders",
  },
  {
    src: umraniyeBoksSalonuJpeg,
    title: "Ümraniye Boks Salonu Tesis İmkanları",
    desc: "Ümraniye boks salonumuz, olimpik ölçülerdeki boks ringi, modern kum torbaları ve profesyonel fitness ekipmanlarıyla konforlu bir antrenman ortamı sunar.",
    alt: "Ümraniye boks salonu genel görünümü ve ekipmanları",
    category: "Salon",
  },
  {
    src: umraniyeBoksOzelDersJpg,
    title: "Ümraniye Boks Özel Ders Seansları",
    desc: "Ümraniye şubemizde boks özel ders programları tamamen sizin fiziksel seviyenize göre planlanır. Kısa sürede maksimum teknik ve kondisyon gelişimi elde edin.",
    alt: "Ümraniye boks özel ders lap vuruşları antrenman anı",
    category: "Özel Ders",
  },
  {
    src: umraniyeBoksKursuJpeg,
    title: "Ümraniye Boks Kursu ve Grup Eğitimleri",
    desc: "Ümraniye boks kursu alternatiflerimiz ile hem bireysel olarak özel ders alabilir hem de motive edici butik grup antrenmanlarına katılarak sosyalleşebilirsiniz.",
    alt: "Ümraniye boks kursu grup eğitimi ders esnası",
    category: "Salon",
  },
  {
    src: umraniyeBoksKondisyonAntrenmaniJpg,
    title: "Ümraniye Boks Kondisyon Antrenmanı Seansı",
    desc: "Ümraniye'de gerçekleştirdiğimiz kondisyon odaklı boks dersleri ile kas gücünüzü ve kalp-damar dayanıklılığınızı zirveye ulaştırın.",
    alt: "Ümraniye boks kondisyon antrenmanı ve fonksiyonel egzersizler",
    category: "Kondisyon",
  },
  {
    src: umraniyeBoksEgitmeniJpeg,
    title: "Ümraniye Boks Eğitmeni ile Birebir Sparring",
    desc: "Ümraniye şubemizin profesyonel boks eğitmeni gözetiminde, güvenli ve teknik sparringler yaparak ring tecrübenizi bir üst seviyeye taşıyın.",
    alt: "Ümraniye boks eğitmeni ile ringde sparring çalışması",
    category: "Antrenörler",
  },
  {
    src: umraniyeBoksEgitimiJpg,
    title: "Ümraniye Boks Eğitimi Başlangıç Programı",
    desc: "Ümraniye boks eğitimi başlangıç gruplarımızda temel boks duruşu, gard alma, adımlama ve düz yumruk teknikleri detaylı şekilde öğretilmektedir.",
    alt: "Ümraniye boks eğitimi alan yeni başlayan sporcular",
    category: "Ring",
  },
  {
    src: umraniyeBoksAntrenoruJpeg,
    title: "Ümraniye Boks Antrenörü ve Bireysel Analiz",
    desc: "Ümraniye'de milli takım tecrübeli boks antrenörümüz gözetiminde, her antrenmanda hatalarınızı analiz ederek teknik gelişim sürecinizi hızlandırın.",
    alt: "Ümraniye boks antrenörü gözetiminde torba çalışması",
    category: "Antrenörler",
  },
  {
    src: umraniyeBoksAntrenmaniJpg,
    title: "Ümraniye Boks Antrenmanı ve Yağ Yakımı",
    desc: "Ümraniye şubemizde dinamik boks antrenmanı seansları ile hem savunma sanatını öğrenin hem de yüksek yoğunluklu kardiyo ile formda kalın.",
    alt: "Ümraniye boks antrenmanı genel ısınma ve torba egzersizleri",
    category: "Kondisyon",
  },
  {
    src: umraniyeBirebirBoksEgitimiJpg,
    title: "Ümraniye Birebir Boks Eğitimi Fırsatları",
    desc: "Ümraniye şubemizde size özel saatlerde planlanan birebir boks eğitimi sayesinde günlük iş yoğunluğunuza uygun en esnek spor rutinine sahip olun.",
    alt: "Ümraniye birebir boks eğitimi seansı lap çalışması",
    category: "Özel Ders",
  },
  {
    src: atasehirKadinBoksDersiJpg,
    title: "Ataşehir Kadın Boks Dersi ile Formda Kalın",
    desc: "Ataşehir şubemizde kadınlara özel boks dersi seansları ile hem kendinizi savunmayı öğrenin hem de sıkı ve atletik bir vücuda kavuşun.",
    alt: "Ataşehir kadın boks dersi ve kondisyon antrenmanı",
    category: "Özel Ders",
  },
  {
    src: atasehirErkekBoksDersiJpg,
    title: "Ataşehir Erkek Boks Dersi ve Güç Gelişimi",
    desc: "Ataşehir şubemizde erkekler için boks dersi programları ile patlayıcı gücünüzü artırın, stresi azaltın ve profesyonel boks tekniklerini öğrenin.",
    alt: "Ataşehir erkek boks dersi ring içi antrenman anı",
    category: "Özel Ders",
  },
];

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Ümraniye ve Ataşehir Boks Özel Ders Foto Galerisi | Demirkol Boks" },
      {
        name: "description",
        content:
          "Ümraniye ve Ataşehir şubelerimizdeki özel boks dersi antrenmanlarımızdan, sparring, çocuk boks ve salon imkanlarımızdan en geniş ve SEO uyumlu foto galeri.",
      },
      { property: "og:title", content: "Ümraniye ve Ataşehir Boks Özel Ders Foto Galerisi | Demirkol Boks" },
      {
        property: "og:description",
        content:
          "Anadolu Yakası, Ümraniye ve Ataşehir'de milli takım antrenörlerinden birebir özel boks dersi, çocuk boks ve salon antrenman anlarının geniş görsel arşivi.",
      },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "ümraniye boks dersi, ataşehir boks dersi, özel boks dersi, anadolu yakası boks kulübü, birebir boks eğitimi, atasehir boks salonu" }
    ],
  }),
  component: GaleriPage,
});

function GaleriPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = galleryItems.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
  }, [selectedImageIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedImageIndex, galleryItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === "Escape") setSelectedImageIndex(null);
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  }, [selectedImageIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="bg-background pt-28 min-h-screen text-foreground overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative px-6 py-16 md:py-24 text-center max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-accent">
          Görsel Portfolyo & SEO Antrenman Kataloğu
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-[0.95]">
          ANADOLU YAKASI
          <br />
          <span className="text-primary font-display text-5xl sm:text-7xl md:text-9xl">
            ÖZEL BOKS DERSİ GALERİSİ
          </span>
        </h1>
        <p className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Milli takım antrenörlerimiz liderliğinde gerçekleştirilen <strong>Ümraniye boks dersi</strong>, 
          <strong> Ataşehir özel boks antrenmanları</strong> ve <strong>Anadolu Yakası birebir boks eğitimlerimizden</strong> 
          en özel anlar. Aşağıda her fotoğrafımızın hikayesini, teknik detaylarını ve boks disiplinini 
          geniş düzenimiz üzerinden detaylıca inceleyebilirsiniz.
        </p>
      </section>

      {/* Alternating Wide Layout Grid */}
      <section className="px-6 pb-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-36">
          {paginatedItems.map((item, idx) => {
            const globalIdx = startIndex + idx;
            return (
              <article
                key={globalIdx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-border/20 pb-20 md:pb-28 last:border-0 last:pb-0"
              >
                {/* Görsel Alanı - 7 Sütun genişliğinde */}
                <div 
                  onClick={() => setSelectedImageIndex(globalIdx)}
                  className={`lg:col-span-7 relative overflow-hidden rounded-3xl border border-border/30 shadow-2xl aspect-[16/10] cursor-pointer group bg-muted ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-primary/95 text-primary-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="h-4 w-4" /> Fotoğrafı Büyüt
                    </span>
                  </div>
                </div>

                {/* Metin Alanı - 5 Sütun genişliğinde */}
                <div 
                  className={`lg:col-span-5 space-y-6 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground tracking-wide hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h2>
                  <div className="h-1 w-12 bg-primary" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2 text-[10px] uppercase tracking-wider text-muted-foreground border-t border-border/20">
                    <strong>Dosya / Alt Etiketi:</strong> {item.alt}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <section className="px-6 pb-32 flex justify-center items-center gap-2 md:gap-4 max-w-4xl mx-auto">
          {/* Previous Page Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1 ${
              currentPage === 1
                ? "border-border/20 text-muted-foreground/30 cursor-not-allowed"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/45"
            }`}
          >
            <ChevronLeft className="h-4 w-4" /> Önceki
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,0,0,0.3)] font-black"
                    : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/45"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Page Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1 ${
              currentPage === totalPages
                ? "border-border/20 text-muted-foreground/30 cursor-not-allowed"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/45"
            }`}
          >
            Sonraki <ChevronRight className="h-4 w-4" />
          </button>
        </section>
      )}

      {/* Premium Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md p-4 transition-all duration-300">
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5 rounded-full cursor-pointer"
            aria-label="Kapat"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 md:left-8 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer select-none"
            aria-label="Önceki Fotoğraf"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Large Image Container */}
          <div className="max-w-4xl w-full max-h-[70vh] flex flex-col items-center justify-center relative px-4 select-none">
            <img
              src={galleryItems[selectedImageIndex].src}
              alt={galleryItems[selectedImageIndex].alt}
              className="max-w-full max-h-[65vh] object-contain border border-border/40 rounded-xl shadow-2xl"
            />
          </div>

          {/* Image Information Card */}
          <div className="mt-6 text-center max-w-3xl px-6">
            <h2 className="mt-3 font-display text-2xl md:text-4xl text-foreground">
              {galleryItems[selectedImageIndex].title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {galleryItems[selectedImageIndex].desc}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 md:right-8 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer select-none"
            aria-label="Sonraki Fotoğraf"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Indicators / Progress */}
          <div className="absolute bottom-6 text-xs tracking-widest text-muted-foreground">
            {selectedImageIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </main>
  );
}
