import { HeartHandshake, Scale, UserCheck } from 'lucide-react';

const commitments = [
  { icon: HeartHandshake, title: 'Atendimento individualizado' },
  { icon: Scale, title: 'Atuação em Direito Previdenciário' },
  { icon: UserCheck, title: 'Acompanhamento pela advogada responsável' },
];

export function MissionSection() {
  return (
    <section className="reveal-section bg-[#FFFDF9] px-6 pb-20 md:px-[max(6vw,40px)] lg:pb-30 lg:pt-12">
      <div className="reveal-item mx-auto max-w-230 text-center">
        <p className="mb-6 text-[12px] font-medium tracking-[0.12em] text-[#A07E4A]">
          PROPÓSITO
        </p>

        <h2 className="mx-auto max-w-[40ch] font-['Display'] text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0A0A0A] md:text-[40px]">
          Cada história de contribuição merece uma orientação{' '}
          <em className="italic text-[#A07E4A]">cuidadosa.</em>
        </h2>

        <p className="mx-auto mt-7 max-w-[80ch] text-[17px] leading-[1.65] text-[#0A0A0A]/75 md:text-[19px]">
          Atuo exclusivamente no Direito Previdenciário, oferecendo orientação
          jurídica individualizada e fundamentada, considerando as
          particularidades de cada caso.
        </p>
      </div>

      <div className="reveal-item reveal-delay-2 mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-3">
        {commitments.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#0A0A0A]/10 bg-white px-6 py-7 text-center"
          >
            <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#D1AD7D]/20 text-[#A07E4A]">
              <item.icon size={20} aria-hidden="true" />
            </span>

            <strong className="block text-[14px] font-medium leading-[1.45] text-[#0A0A0A]">
              {item.title}
            </strong>
          </div>
        ))}
      </div>

      <div className="reveal-item mt-12 flex items-center justify-center gap-4">
        <span
          aria-hidden="true"
          className="h-px w-10 bg-[#A07E4A]"
        />

        <span className="font-['Display'] text-[19px] italic text-[#0A0A0A]">
          Bruna Teixeira Cardoso
        </span>

        <span
          aria-hidden="true"
          className="h-px w-10 bg-[#A07E4A]"
        />
      </div>
    </section>
  );
}