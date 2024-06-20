export function Header() {
  return (
    <div className="sticky top-0 w-full h-auto bg-slate-800 p-4 z-20">
      <p>Welcome to my dungeon.</p>
      <p className="flex gap-x-2">
        Go back up to...
        <a href="https://github.com/chanyatfu" className="inline-block">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yatfuchan"
          className="inline-block"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
