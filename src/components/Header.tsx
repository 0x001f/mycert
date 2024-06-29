type Link = { title: "GitHub" | "LinkedIn" | "Email"; link: string };
const link: Link[] = [
  { title: "GitHub", link: "https://github.com/0x001f" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/yatfuchan" },
  { title: "Email", link: "mailto:yfchan.career@gmail.com" },
];

export function Header() {
  return (
    <header>
      <h1 className="animate__animated animate__fadeInUp">My Certificates</h1>
      <div className="links">
        {link.map((entry, index) => (
          <a
            href={entry.link}
            target="_blank"
            key={entry.title}
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {entry.title}
          </a>
        ))}
      </div>
    </header>
  );
}
