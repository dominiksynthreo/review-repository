import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      co je {count}
    </div>
  );
}
