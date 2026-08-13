import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { legends } from "@/data/legends";
import logo from "@/assets/demirkol-boks-kulubu-atasehir.webp";
import macFoto from "@/assets/umraniye-atasehir-birebir-boks-dersi-grup-egitimi.webp";
import ozelAntrenman from "@/assets/umraniye-ozel-boks-dersi-kum-torbasi.webp";
import ringTaktik from "@/assets/atasehir-umraniye-ozel-boks-dersi-ring.jpg";
import boksDersi from "@/assets/atasehir-boks-sporu.webp";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Video ve Poster Görseli
import atasehirdeOzelBoksDersiVideo from "@/assets/atasehirde-ozel-boks-dersi.mp4";
import atasehirPoster from "@/assets/atasehir-boks-dersi-ozel-antrenman.webp";

const galleryImages = [
  {
    src: ozelAntrenman,
    title: "Kişiye Özel Boks Eğitimi",
    desc: "Tamamen sizin hedeflerinize, seviyenize ve fiziksel kapasitenize göre şekillendirilen birebir özel boks dersi programı.",
    alt: "Ataşehir ve Ümraniye birebir özel boks dersi antrenmanı",
  },
  {
    src: ringTaktik,
    title: "Ring İçi Taktik ve Sparring",
    desc: "Gerçek ring deneyimiyle tekniklerinizi pekiştirin, reflekslerinizi ve savunma becerilerinizi milli takım teknikleriyle en üst seviyeye çıkarın.",
    alt: "Ataşehir ve Ümraniye yarı profesyonel ring içi taktik ve sparring çalışması",
  },
  {
    src: boksDersi,
    title: "Disiplin ve Güç Gelişimi",
    desc: "Boks antrenmanlarıyla yüksek kondisyon kazanın, kardiyovasküler kapasitenizi artırıp fit ve atletik bir vücuda kavuşun.",
    alt: "Ataşehir boks dersi kondisyon ve fiziksel dayanıklılık eğitimi",
  },
];

function GallerySectionItem({ img }: { img: typeof galleryImages[0]; index: number }) {
  return (
    <div
      className="relative w-full h-[45vh] md:h-[75vh] overflow-hidden border border-border/40 rounded-3xl shadow-2xl transition-all duration-500 ease-out transform opacity-100 translate-y-0 scale-100 blur-none"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out hover:scale-105"
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ataşehir Boks Özel Ders | Demirkol Boks Kulübü" },
      {
        name: "description",
        content:
          "Ataşehir'de milli takım antrenörlerinden kişiye özel birebir boks dersi. Kadın, erkek ve çocuklara özel boks eğitimleri, güç ve kondisyon kampları.",
      },
      { property: "og:title", content: "Ataşehir Boks Özel Ders | Demirkol Boks Kulübü" },
      {
        property: "og:description",
        content:
          "Ataşehir'de milli antrenörler eşliğinde profesyonel boks eğitimi ve birebir özel boks dersleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <main className="bg-background pt-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SportsActivityLocation",
                "@id": "https://demirkolboks.com/#location",
                name: "Demirkol Boks Kulübü - Ataşehir Boks Özel Ders",
                image: logo,
                description:
                  "Ataşehir'de milli takım antrenörleri eşliğinde profesyonel birebir özel boks dersleri, güç ve kondisyon eğitimi.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Fetih, Kösebey Sk No:1",
                  addressLocality: "Ataşehir",
                  addressRegion: "İstanbul",
                  postalCode: "34704",
                  addressCountry: "TR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 40.9919,
                  longitude: 29.1244,
                },
                url: "https://demirkolboks.com",
                telephone: "+905319014101",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ],
                    opens: "07:00",
                    closes: "23:00",
                  },
                ],
                priceRange: "$$",
              },
              {
                "@type": "FAQPage",
                "@id": "https://demirkolboks.com/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Ataşehir boks özel ders seansları ne kadar sürüyor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Birebir boks özel derslerimiz ortalama 50 ila 60 dakika sürmektedir. Bu süre boyunca antrenörünüz tamamen size odaklanır.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Hiç boks tecrübesi olmayanlar özel ders alabilir mi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evet, özel derslerimiz tamamen kişiye özeldir. Başlangıç seviyesinden profesyonel seviyeye kadar her seviyeye uygun program hazırlanmaktadır.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ataşehir boks salonunda kadınlara özel ders veriliyor mu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evet, salonumuzda kadın üyelerimize özel birebir boks dersleri ve grup çalışmaları düzenlenmektedir.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Milli antrenörlerle mi çalışıyoruz?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evet, Demirkol Boks Kulübü antrenör kadrosu milli boksörler ve boks milli takım antrenörlerinden oluşmaktadır.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        id="top"
        className="relative flex h-screen items-center justify-center overflow-hidden px-6"
      >
        {/* Video Arka Planı */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-left md:object-center z-0"
        >
          <source src="/atasehir-boxing.mp4" type="video/mp4" />
        </video>
        {/* Karartma Katmanı (Overlay) */}
        <div className="absolute inset-0 bg-background/80 z-10" />

        <div className="relative text-center max-w-5xl mx-auto z-20">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-accent">
            Birebir Özel Boks Dersi · Ataşehir
          </p>
          <h1 className="mt-4 font-display text-[8vw] sm:text-[6vw] md:text-[5rem] lg:text-[6rem] leading-[1.0] tracking-tight">
            ATAŞEHİR BOKS
            <br />
            <span className="text-primary font-display text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[10rem] leading-[0.8]">
              ÖZEL DERS
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground md:text-base leading-relaxed">
            Milli takım antrenörlerinden birebir özel boks dersi alarak teknik, güç, dayanıklılık ve
            savunma becerilerinizi en üst seviyeye çıkarın. Ringi şekillendiren efsanelerin
            teknikleriyle çalışın.
          </p>
          <div className="mt-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span>Aşağı Kaydır</span>
            <span className="h-10 w-px animate-pulse bg-primary" />
          </div>
        </div>
      </section>

      {/* Ataşehir'de Özel Boks Dersi Tanıtım Videosu */}
      <section className="px-6 py-20 bg-muted/20 border-t border-border flex justify-center">
        <div className="relative w-full max-w-4xl rounded-3xl border border-border/40 shadow-2xl overflow-hidden bg-black group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src={atasehirdeOzelBoksDersiVideo} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
      </section>

      {/* Horizontal legends rail */}
      <section id="legends" className="border-t border-border px-6 py-24 md:px-16 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-center md:text-left">
            <div className="w-full md:w-auto flex flex-col items-center md:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                TARİHE YÖN VERENLER
              </p>
              <h2 className="mt-2 font-display text-5xl md:text-7xl">
                EFSANELER
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={scrollPrev}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6 backface-hidden touch-pan-y">
              {legends.map((legend, i) => (
                <div key={legend.id} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-2 md:pl-4">
                  <article className="group relative overflow-hidden border border-border bg-card rounded-lg transition-all duration-500 hover:border-primary h-[480px] md:h-[600px] flex flex-col justify-end p-4 md:p-8">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={legend.image}
                        alt={legend.alt}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 saturate-[0.7] group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </div>

                    <div className="relative z-10 space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                        <span className="h-px w-4 md:w-6 bg-accent" />
                        {legend.nickname}
                      </div>
                      <div>
                        <h3 className="font-display text-3xl leading-tight md:text-5xl">{legend.name}</h3>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-0.5 md:mt-1">
                          {legend.years} · {legend.record}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 leading-relaxed">
                        {legend.story}
                      </p>

                      <div className="pt-1 md:pt-2">
                        <dl className="grid grid-cols-3 gap-2 md:gap-4 border-t border-border/40 pt-3 md:pt-4">
                          {legend.stats.map((s) => (
                            <div key={s.label}>
                              <dt className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                                {s.label}
                              </dt>
                              <dd className="font-display text-base md:text-lg text-foreground mt-0.5">{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="border-l-2 border-primary bg-background/50 p-2 md:p-3 backdrop-blur-sm text-[11px] md:text-xs">
                        <h4 className="font-display font-semibold text-primary">{legend.program.title}</h4>
                        <p className="text-muted-foreground mt-0.5 line-clamp-1">{legend.program.detail}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === selectedIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                aria-label={`Slayt ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Match Showcase Banner */}
      <section className="border-t border-border px-6 py-24 md:px-16 bg-muted/10">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative group overflow-hidden border border-border bg-card shadow-2xl rounded-lg">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={macFoto}
                alt="Ataşehir ve Ümraniye Boks Özel Ders - Demirkol Boks Kulübü Birebir Antrenman"
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              RİNG TECRÜBESİ & BAŞARI
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.9]">
              DİSİPLİN, GÜÇ &
              <br />
              <span className="text-primary font-display text-4xl md:text-6xl leading-[0.9]">
                KARAKTER
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Demirkol Boks Kulübü Ataşehir şubesinde, milli takım antrenörleri ve milli boksörler
              eşliğinde boks sporunu en doğru tekniklerle öğrenin. Birebir boks derslerimiz
              sayesinde kişisel hedeflerinize (kilo verme, savunma, güçlenme, kondisyon) en hızlı ve
              verimli şekilde ulaşırsınız.
            </p>
            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <span className="block font-display text-3xl text-foreground">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Milli Takım Teknikleri
                </span>
              </div>
              <div>
                <span className="block font-display text-3xl text-foreground">Profesyonel</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Ring ve Ekipmanlar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon */}
      <section id="salon" className="border-t border-border px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl w-full">
          <h2 className="font-display text-5xl md:text-7xl">
            SALON
          </h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              {
                t: "12 Ağır Kum Torbası",
                d: "Profesyonel askı sistemi, çift uçlu toplar ve speedbag istasyonları.",
              },
              {
                t: "Yarı Profesyonel Ring",
                d: "3x3 m  ölçülerinde ring, gözetimli sparring seansları.",
              },
              {
                t: "Lisanslı Antrenörler",
                d: "Milli takım ve olimpiyat tecrübesine sahip antrenör kadrosu.",
              },
              {
                t: "Güç & Kondisyon",
                d: "Serbest ağırlık alanı, pliometri platformları, kürek ve assault bike.",
              },
              {
                t: "Kadın Boks Grupları",
                d: "Haftada 2 gün, seviye bazlı kapalı grup dersleri.",
              },
              {
                t: "Performans Takibi",
                d: "Vuruş hızı, dayanıklılık ve vücut kompozisyonu için aylık ölçüm.",
              },
            ].map((f) => (
              <div key={f.t} className="bg-background p-8">
                <h3 className="font-display text-2xl">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri (Fotograf Isleri) */}
      <section id="galeri" className="border-t border-border px-6 py-24 md:px-16 bg-muted/5 relative">
        <div className="mx-auto max-w-7xl w-full relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            GÖRSEL PORTFOLYO
          </p>
          <h2 className="mt-2 font-display text-5xl md:text-7xl">
            FOTOĞRAFLARIMIZ
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Sayfayı aşağı kaydırdıkça açılan, Ataşehir boks özel ders çalışmalarımızdan ve salonumuzdan dinamik ve eşsiz anlar.
          </p>

          {/* Dikey Kaydırma ve Reveal Efektli Galeri */}
          <div className="mt-16 flex flex-col gap-12 md:gap-24">
            {galleryImages.map((img, idx) => (
              <GallerySectionItem key={idx} img={img} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section id="faq" className="border-t border-border px-6 py-24 md:px-16">
        <div className="mx-auto max-w-4xl w-full">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              MERAK EDİLENLER
            </p>
            <h2 className="mt-2 font-display text-5xl md:text-7xl">
              SIKÇA SORULAN SORULAR
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Ataşehir boks özel ders programları ve süreçleri hakkında sıkça sorulan soruların
              yanıtları.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {[
              {
                q: "Ataşehir boks özel ders seansları ne kadar sürüyor?",
                a: "Birebir özel boks derslerimiz yaklaşık 50-60 dakika sürmektedir. Antrenman süresince antrenörünüz duruş, gard, yumruk teknikleri ve kondisyon üzerine tamamen sizinle birebir ilgilenir.",
              },
              {
                q: "Daha önce hiç spor yapmadım, boks özel derslerine katılabilir miyim?",
                a: "Kesinlikle evet. Özel derslerin en büyük avantajı antrenmanın tamamen sizin kondisyon seviyenize göre ayarlanmasıdır. Antrenörlerimiz temel seviyeden başlayarak sizi güvenle geliştirecektir.",
              },
              {
                q: "Özel ders için kendi ekipmanlarımı almalı mıyım?",
                a: "İlk deneme dersiniz için gerekli tüm koruyucu ekipmanlar ve eldivenler kulübümüz tarafından sağlanır. Devam etmeye karar verdiğinizde hijyen açısından kendi boks eldivenlerinizi edinmenizi öneririz.",
              },
              {
                q: "Haftada kaç gün boks özel dersi almalıyım?",
                a: "Gelişim ve kas hafızası için haftada en az 2 gün antrenman yapılması önerilir. Kondisyonunu ve tekniğini hızla yükseltmek isteyenler için haftada 3 gün ideal bir programdır.",
              },
              {
                q: "Ataşehir boks salonunda kadınlar için boks eğitimleri var mı?",
                a: "Evet, salonumuzda kadın üyelerimiz için hem özel dersler hem de grup boks seansları yoğun olarak verilmektedir. Boks, kardiyo ve stres atma açısından son derece popüler bir tercihtir.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group border border-border bg-card rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-display text-xl md:text-2xl text-foreground group-open:text-primary transition-colors">
                      {item.q}
                    </h3>
                  </div>
                  <span className="ml-1.5 shrink-0 rounded-full bg-muted p-1.5 text-muted-foreground group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
