import Link from "next/link";
import { site } from "@/lib/data";

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          {site.name}
        </Link>
        <nav className="nav-links">
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/socials" className="nav-link">
            Socials
          </Link>
        </nav>
      </div>
    </header>
  );
}
