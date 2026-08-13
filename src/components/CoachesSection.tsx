import fikret from "@/assets/atasehir-boks-ozel-ders-fikret-demirkol.webp";
import vedat from "@/assets/atasehir-birebir-boks-dersi-vedat-demirkol.webp";
import nusret from "@/assets/atasehir-boks-salonu-nusret-demirkol.webp";
import mertcan from "@/assets/atasehir-kisisel-boks-antrenoru-mertcan-kaya.png";

const coaches = [
  {
    name: "Fikret Demirkol",
    image: fikret,
    roles: ["Boks Milli Takım Antrenörü", "Milli Sporcu", "Beden Eğitimi Öğretmeni"],
  },
  {
    name: "Vedat Demirkol",
    image: vedat,
    roles: [
      "Türkiye Olimpiyat Hazırlık Merkezi Antrenörü",
      "Boks Milli Takım Antrenörü",
      "Milli Sporcu",
      "Beden Eğitimi Öğretmeni",
    ],
  },
  {
    name: "Nusret Demirkol",
    image: nusret,
    roles: ["Boks Antrenörü", "Milli Hakem", "İş Geliştirme Uzmanı"],
  },
  {
    name: "Mertcan Kaya",
    image: mertcan,
    roles: ["Boks Antrenörü", "Beden Eğitimi Öğretmeni", "Milli Sporcu"],
  },
];

export function CoachesSection() {
  return (
    <section id="antrenorler" className="border-t border-border px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl w-full">
        <h2 className="font-display text-5xl md:text-7xl">
          ANTRENÖRLER
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Milli takım tecrübesiyle ringin içinden gelen teknik kadro.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden border border-border bg-card shadow-[0_20px_50px_-25px_hsl(var(--background))] transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_35px_70px_-25px_hsl(var(--primary)/0.45)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={c.image}
                  alt={`Ataşehir Boks Özel Ders Antrenörü ${c.name} - ${c.roles.join(", ")}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top saturate-[0.7] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              <div className="relative -mt-16 p-6">
                <h3 className="font-display text-2xl leading-tight">{c.name}</h3>
                <span className="mt-3 block h-px w-10 bg-primary transition-all duration-500 group-hover:w-20" />
                <ul className="mt-4 space-y-1.5">
                  {c.roles.map((r) => (
                    <li
                      key={r}
                      className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
