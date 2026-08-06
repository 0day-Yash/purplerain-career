export function SectionSeparator() {
  return (
    <div className="relative overflow-hidden w-full my-4">
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-full max-w-[999px] h-px 
          bg-[linear-gradient(90deg,transparent,rgba(176,109,238,0.25),transparent)]
          before:absolute
          before:bottom-0
          before:left-1/2
          before:-translate-x-1/2
          before:w-[900px]
          before:h-[300px]
          before:bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(176,109,238,0.12),transparent)]
          after:absolute
          after:top-0
          after:left-1/2
          after:-translate-x-1/2
          after:w-[700px]
          after:h-[20px]
          after:bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(176,109,238,0.06),transparent)]
          pointer-events-none
        "
        aria-hidden="true"
      />
    </div>
  );
}

export default SectionSeparator;
