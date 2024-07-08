import CRUD from "~/app/_comp/crud";
import Fetch from "~/app/_comp/fetch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
      <h1>Next.js(RSC) + GraphQL</h1>
      <Fetch />
      <CRUD />
    </main>
  );
}
