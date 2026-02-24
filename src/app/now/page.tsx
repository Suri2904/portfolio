export default function Now() {
  return (
    <div className="space-y-12 pt-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Now</h1>
        <p className="text-xs font-mono text-neutral-500">
          Updated: January 2025
        </p>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-4">
            BUILDING
          </h3>
          <p className="text-neutral-300">
            → This portfolio site — establishing my builder identity outside of
            my 9-to-5
          </p>
        </div>

        <div>
          <h3 className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-4">
            LEARNING
          </h3>
          <p className="text-neutral-300">
            → Next.js &amp; React — because I want full control over how I
            present my work
          </p>
        </div>

        <div>
          <h3 className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-4">
            READING
          </h3>
          <p className="text-neutral-300">
            → [Add current book] — [one line take]
          </p>
        </div>

        <div>
          <h3 className="text-xs font-mono tracking-[0.3em] text-neutral-500 mb-4">
            THINKING ABOUT
          </h3>
          <p className="text-neutral-300">
            → Why do most tools built for &quot;the Indian consumer&quot; feel
            like afterthoughts?
          </p>
        </div>
      </div>
    </div>
  );
}