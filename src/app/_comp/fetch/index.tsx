import { getUsers } from "~/server/data";
import RefreshButton from "./refresh-button";
import { revalidateTag } from "next/cache";

export default async function Fetch() {
  const users = await getUsers();

  return (
    <section className="space-y-2">
      <h2>Fetch</h2>
      <ul>
        {users?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <RefreshButton />

      <form action={async () => {
        'use server';

        revalidateTag('users')
      }}>
        <button>revalidateTag</button>
      </form>
    </section>
  );
}
