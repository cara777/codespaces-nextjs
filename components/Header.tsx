import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-7 text-white">

        <h1 className="text-3xl font-bold">
          啓成ON
        </h1>

        <div className="flex gap-10 text-lg font-medium">

          <Link href="/">홈</Link>

          <Link href="/contest">공모전</Link>

          <Link href="/news">뉴스</Link>

          <Link href="/license">자격증</Link>

          <Link href="/board">게시판</Link>

        </div>

      </nav>

    </header>
  );
}