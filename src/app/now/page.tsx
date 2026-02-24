export default function Now() {
  return (
    <div className="space-y-16 animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Now</h1>
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
          </span>
          <p className="text-[11px] font-mono text-white/20 tracking-wider">
            Updated February 2025
          </p>
        </div>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>

      <div className="space-y-14">
        <div className="space-y-3">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
            Building
          </h3>
          <div className="relative pl-5 border-l border-white/[0.06]">
            <p className="text-white/50 text-sm leading-relaxed">
              This portfolio — establishing my builder identity outside of my 9-to-5
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
            Learning
          </h3>
          <div className="relative pl-5 border-l border-white/[0.06]">
            <p className="text-white/50 text-sm leading-relaxed">
              Next.js and React — because I want full control over how I present my work
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
            Reading
          </h3>
          <div className="relative pl-5 border-l border-white/[0.06]">
            <p className="text-white/50 text-sm leading-relaxed">
              Update this with your current book
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
            Thinking About
          </h3>
          <div className="relative pl-5 border-l border-green-400/20">
            <p className="text-white/50 text-sm leading-relaxed">
              Why do most tools built for the Indian consumer feel like afterthoughts?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
