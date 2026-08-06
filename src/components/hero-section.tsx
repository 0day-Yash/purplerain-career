export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(0_0%_18%)] bg-[--surface-primary] py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[hsl(270_70%_60%/_0.10)] blur-[140px]" />
        <div className="absolute bottom-0 right-[10%] h-[20rem] w-[20rem] rounded-full bg-[hsl(270_70%_60%/_0.08)] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-6 text-[11px] font-mono uppercase tracking-[0.35em] text-[--text-tertiary]">
          PurpleRain / Careers
        </p>
        <h1 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-[--text-primary] sm:text-5xl lg:text-7xl">
          Build with quiet intensity.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[--text-tertiary] sm:text-lg">
          We’re shaping secure systems, resilient infrastructure, and thoughtful products from the edges of the internet.
        </p>
      </div>
    </section>
  );
}


