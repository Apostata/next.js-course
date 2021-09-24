import Link from "next/link";
import Styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={Styles.navigation}>
        <ul>
          <li>
            <Link href="/events">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
