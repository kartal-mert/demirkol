import mikeTyson from "@/assets/mike-tyson.webp";
import floydMayweather from "@/assets/floyd-mayweather.webp";
import muhammetali from "@/assets/muhammetali.png";

export type Legend = {
  id: string;
  name: string;
  nickname: string;
  years: string;
  record: string;
  image: string;
  alt: string;
  story: string;
  program: { title: string; detail: string };
  stats: { label: string; value: string }[];
};

export const legends: Legend[] = [
  {
    id: "tyson",
    name: "Mike Tyson",
    nickname: "Iron Mike",
    years: "1985 — 2005",
    record: "50-6 / 44 KO",
    image: mikeTyson,
    alt: "Ataşehir boks özel ders antrenmanlarında örnek alınan ağır sıklet boksör Mike Tyson",
    story:
      "20 yaşında tarihin en genç ağır sıklet şampiyonu. Peek-a-boo savunması, patlayıcı giriş açıları ve ilk raunt bitiricilikleriyle ringi bir korku alanına çevirdi.",
    program: {
      title: "Iron Power — Patlayıcı Güç Kampı",
      detail:
        "Haftada 4 seans: peek-a-boo gard çalışması, kombinasyon patlaması, ağırlık ve pliometri devreleri.",
    },
    stats: [
      { label: "Nakavt oranı", value: "%76" },
      { label: "En genç şampiyon", value: "20 yaş" },
      { label: "Seans", value: "60 dk" },
    ],
  },
  {
    id: "mayweather",
    name: "Floyd Mayweather",
    nickname: "Money",
    years: "1996 — 2017",
    record: "50-0 / 27 KO",
    image: floydMayweather,
    alt: "Ataşehir boks özel ders teknik eğitimiyle yenilgisiz şampiyon Floyd Mayweather",
    story:
      "Yenilgisiz kapanan bir kariyer. Omuz rulosu, mesafe kontrolü ve kusursuz zamanlama; boksun matematiğe en çok yaklaştığı an.",
    program: {
      title: "Defense IQ — Savunma ve Zamanlama",
      detail:
        "Ayna çalışması, shoulder roll drilleri, pedde ritim ve refleks; kontakt yok, kontrol her şey.",
    },
    stats: [
      { label: "Kariyer", value: "50-0" },
      { label: "Ünvan", value: "5 sıklet" },
      { label: "Seans", value: "50 dk" },
    ],
  },
  {
    id: "ali",
    name: "Muhammad Ali",
    nickname: "The Greatest",
    years: "1960 — 1981",
    record: "56-5 / 37 KO",
    image: muhammetali,
    alt: "Ataşehir boks özel ders ilham veren efsane boksör Muhammad Ali ringde",
    story:
      "Kelebek gibi uçtu, arı gibi soktu. Ağır siklette görülmemiş ayak oyunu ve ring zekâsıyla sporu bir sahne sanatına dönüştürdü.",
    program: {
      title: "Float — Ayak Oyunu ve Kondisyon",
      detail:
        "İp, merdiven ve ring turu: mesafe yönetimi, jab ritmi ve nefes kapasitesi üzerine kurulu 8 haftalık blok.",
    },
    stats: [
      { label: "Dünya ünvanı", value: "3 kez" },
      { label: "Ring turu", value: "6 mil" },
      { label: "Seans", value: "55 dk" },
    ],
  },
];
