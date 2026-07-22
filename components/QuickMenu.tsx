import Link from "next/link";

const menus = [
  {
    title: "AI 공모전",
    url: "/contest",
  },
  {
    title: "뉴스",
    url: "/news",
  },
  {
    title: "자격증",
    url: "/license",
  },
  {
    title: "게시판",
    url: "/board",
  },
];

export default function QuickMenu() {
  return (
    <section className="grid grid-cols-4 gap-4 p-8">
      {menus.map((menu) => (
        <Link
          key={menu.title}
          href={menu.url}
          className="rounded-xl bg-gray-300 h-32 flex items-center justify-center"
        >
          {menu.title}
        </Link>
      ))}
    </section>
  );
}