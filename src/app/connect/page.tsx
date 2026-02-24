export default function Connect() {
  const links = [
    {
      label: 'Email',
      href: 'mailto:suryanshsinghchandel@gmail.com',
      value: 'suryanshsinghchandel@gmail.com',
      description: 'Best way to reach me',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/suryansh-chandel-6a3436201',
      value: 'linkedin.com/in/suryansh-chandel',
      description: 'Professional profile',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Suri2904',
      value: 'github.com/Suri2904',
      description: 'Code and projects',
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Connect</h1>
        <p className="text-white/30 text-sm leading-relaxed">
          No contact form. No newsletter. Direct lines only.
        </p>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            className="group block border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-1.5">
                  {link.label}
                </p>
                <p className="text-white/60 group-hover:text-white text-sm transition-colors duration-300">
                  {link.value}
                </p>
                <p className="text-white/15 text-xs mt-1">{link.description}</p>
              </div>
              <span className="text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300 text-lg">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="border border-white/[0.04] rounded-xl p-8 bg-white/[0.01]">
        <p className="text-white/20 text-sm leading-relaxed">
          If you are hiring, building something interesting, or just want to
          argue about data — I respond fast.
        </p>
      </div>
    </div>
  );
}
