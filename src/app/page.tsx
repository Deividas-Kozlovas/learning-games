import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/games/math/find-number" style={{ marginRight: 20 }}>
          Find Number
        </Link>
      </nav>
    </div>
  );
}
