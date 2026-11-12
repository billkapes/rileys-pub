import Section from "@/components/ui/section";
import { dailyDraftSpecials } from "@/data/promotions";

const chalkColors = [
  "text-[#F3D889]",
  "text-[#F2A5A1]",
  "text-[#A9D6D1]",
  "text-[#E8C5E8]",
  "text-[#F2D18B]",
  "text-[#B9D8A5]",
];

export default function DailyDraftSpecials() {
  return (
    <Section id="daily-draft-specials" className="bg-[#EEE8DC]">
      <header className="mb-10 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#76582F]">
          Written up fresh
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-[#183A2D] md:text-5xl">
          Daily Draft Specials
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4A3426]/80 md:text-lg">
          A different draft special every day, Monday through Saturday.
        </p>
      </header>

      <div className="mx-auto max-w-3xl rounded-[1.75rem] bg-gradient-to-br from-[#70482B] via-[#4A2F1E] to-[#29190F] p-3 shadow-[0_24px_50px_-18px_rgba(27,20,12,0.65)] sm:p-5">
        <div className="rounded-[1.25rem] border-2 border-[#C39258]/70 bg-[#17241F] p-5 shadow-[inset_0_0_35px_rgba(0,0,0,0.65)] sm:p-8">
          <div className="rounded-lg border border-dashed border-white/20 px-4 py-6 sm:px-8">
            <div className="mb-6 flex items-center justify-between border-b border-white/20 pb-4">
              <p className="font-serif text-lg font-bold italic tracking-wide text-[#F3D889] sm:text-xl">
                Riley&apos;s Pub
              </p>
              <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                Sample board
              </span>
            </div>

            <ul className="space-y-1">
              {dailyDraftSpecials.map((special, index) => (
                <li
                  key={special.day}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b border-dotted border-white/15 py-3 last:border-b-0 sm:gap-6 sm:py-4"
                >
                  <div className="min-w-0">
                    <p className="font-serif text-sm font-bold uppercase tracking-[0.12em] text-white/65 sm:text-base">
                      {special.day}
                    </p>
                    <p
                      className={`mt-1 break-words font-serif text-xl font-bold italic sm:text-2xl ${chalkColors[index % chalkColors.length]}`}
                    >
                      {special.draft}
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-serif text-2xl font-bold italic text-[#F3D889] sm:text-3xl">
                    {special.price}
                  </p>
                </li>
              ))}
            </ul>

            {/* <p className="mt-5 text-center font-serif text-sm italic text-white/55">
              Ask your bartender about today&apos;s pour
            </p> */}
          </div>
        </div>
      </div>
    </Section>
  );
}
