"use client";

import { useTransition } from "react";
import { createUser } from "~/server/action";

export default function CRUD() {
  const [isPending, startTransition] = useTransition();

  return (
    <section>
      <h2>CRUD</h2>
      {isPending ? <p>Adding user...</p> : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          startTransition(async () => {
            await createUser({ name: "User 7" });
          });
        }}
      >
        <button>add user</button>
      </form>
    </section>
  );
}
