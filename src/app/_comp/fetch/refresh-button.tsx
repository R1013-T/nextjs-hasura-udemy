"use client";

import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        // router.refresh();

        revalidateTag('users')

        console.log('refresh')
      }}
    >
      refresh
    </button>
  );
}
