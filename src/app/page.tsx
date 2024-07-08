import Link from "next/link";
import CRUD from "~/app/_comp/crud";
import Fetch from "~/app/_comp/fetch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>Next.js(RSC) + GraphQL</h1>
      <Fetch />
      <CRUD />
      <Link href="/test">test</Link>
    </main>
  );
}
