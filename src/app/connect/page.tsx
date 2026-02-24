export default function Connect() {
  return (
    <div className="space-y-10 pt-10">
      <div>
        <h1 className="text-2xl font-bold mb-2">Connect</h1>
        <p className="text-neutral-500 text-sm">
          No contact form. No newsletter. Direct lines only.
        </p>
      </div>

      <div className="space-y-4 font-mono text-sm">
        <a
          href="mailto:suryanshsinghchandel@gmail.com"
          className="block text-neutral-300 hover:text-white transition-colors"
        >
          → suryanshsinghchandel@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/suryansh-chandel-6a3436201"
          target="_blank"
          className="block text-neutral-300 hover:text-white transition-colors"
        >
          → LinkedIn
        </a>
        <a
          href="https://github.com/suryansh"
          target="_blank"
          className="block text-neutral-300 hover:text-white transition-colors"
        >
          → GitHub
        </a>
      </div>

      <p className="text-neutral-600 text-sm pt-4">
        If you&apos;re hiring, building something interesting, or want to argue
        about data — I respond fast.
      </p>
    </div>
  );
}
