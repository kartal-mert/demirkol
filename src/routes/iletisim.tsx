import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | Ataşehir Boks Özel Ders - Demirkol Boks Kulübü" },
      {
        name: "description",
        content:
          "Demirkol Boks Kulübü Ataşehir şubesi adres, telefon ve konum bilgileri. Ücretsiz deneme dersi için randevu alın.",
      },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  return (
    <main className="bg-background pt-28 min-h-screen">
      <section id="iletisim" className="px-6 py-12 md:py-24 md:px-16">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              BİZE ULAŞIN
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              İLK RAUNT
              <br />
              <span className="text-primary font-display text-5xl md:text-7xl">BİZDEN</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base max-w-md mx-auto lg:mx-0">
              Ataşehir boks salonumuzda ücretsiz deneme dersine katılarak seviyenizi ölçebilir, size
              özel antrenman programını belirleyebilirsiniz.
            </p>

            <div className="flex flex-col gap-4 text-sm justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Fetih, Kösebey Sk No:1, 34704 Ataşehir / İstanbul</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+905319014101" className="hover:text-foreground transition-colors">
                  +90 (531) 901 41 01
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              {/* Randevu Al (Arama) Butonu */}
              <a
                href="tel:+905319014101"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-display text-lg tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(255,0,0,0.3)] rounded-xl"
              >
                <Phone className="h-5 w-5 shrink-0" /> RANDEVU AL
              </a>

              {/* WhatsApp Butonu */}
              <a
                href="https://wa.me/905319014101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white px-6 py-4 font-display text-lg tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(37,211,102,0.3)] rounded-xl"
              >
                <MessageCircle className="h-5 w-5 shrink-0" /> WHATSAPP
              </a>

              {/* Instagram Butonu */}
              <a
                href="https://instagram.com/demirkol.boks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] hover:saturate-150 text-white px-6 py-4 font-display text-lg tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(253,29,29,0.3)] rounded-xl"
              >
                <Instagram className="h-5 w-5 shrink-0" /> INSTAGRAM
              </a>

              {/* Konum / Yol Tarifi Butonu */}
              <a
                href="https://maps.google.com/?q=Fetih+Kösebey+Sk+No:1+Ataşehir+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-6 py-4 font-display text-lg tracking-widest transition-all duration-300 transform hover:scale-105 shadow-md rounded-xl"
              >
                <MapPin className="h-5 w-5 shrink-0" /> YOL TARİFİ
              </a>
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Ataşehir · Her gün 07:00 — 23:00
            </p>
          </div>

          <div className="relative h-[350px] sm:h-[500px] border border-border bg-card shadow-2xl rounded-lg overflow-hidden">
            {/* Google Maps Iframe - Ataşehir odaklı */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044.204543187216!2d29.114777598858348!3d40.99187313023023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x351bc296f8c6ebf3%3A0xa6131c94bb2e6f47!2zQXRhxZ9laGlyLCBJc3RhbmJ1bA!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Demirkol Boks Kulübü Ataşehir Haritası"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
