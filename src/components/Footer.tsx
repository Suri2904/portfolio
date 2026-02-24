export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-xs font-mono text-neutral-600">
          © {new Date().getFullYear()} Suryansh Chandel
        </p>
        <p className="text-xs font-mono text-neutral-600">
          Built with obsession, not obligation.
        </p>
      </div>
    </footer>
  );
}