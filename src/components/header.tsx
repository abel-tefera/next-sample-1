import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between p-8">
        <div className="w-3/4">
          <Link className="font-bold text-3xl" href="/">
            Cloud Corp
          </Link>
        </div>
        <div className="flex justify-between w-1/4">
          <Link href="/performance">Performace</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
