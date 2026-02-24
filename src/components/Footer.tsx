export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04]">
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-white/20 tracking-wider">
          © {new Date().getFullYear()} Suryansh Chandel
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:suryanshsinghchandel@gmail.com"
            className="text-[11px] font-mono text-white/20 hover:text-white/60 transition-colors tracking-wider"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/suryansh-chandel-6a3436201"
            target="_blank"
            className="text-[11px] font-mono text-white/20 hover:text-white/60 transition-colors tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Suri2904"
            target="_blank"
            className="text-[11px] font-mono text-white/20 hover:text-white/60 transition-colors tracking-wider"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
