import { createFileRoute } from "@tanstack/react-router";
import { CoachesSection } from "@/components/CoachesSection";

export const Route = createFileRoute("/antrenorler")({
  head: () => ({
    meta: [
      { title: "Antrenörlerimiz | Ataşehir Boks Özel Ders - Demirkol Boks" },
      {
        name: "description",
        content:
          "Milli takım antrenörleri ve milli boksörlerden oluşan profesyonel eğitmen kadromuzla Ataşehir'de birebir boks dersleri.",
      },
    ],
  }),
  component: Antrenorler,
});

function Antrenorler() {
  return (
    <main className="bg-background pt-28 min-h-screen">
      <CoachesSection />
    </main>
  );
}
