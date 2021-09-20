import Link from "next/link";
import Styles from "./Button.module.css";
export default function Button({ children, link }) {
  return (
    <Link href={link}>
      <a className={Styles.btn}>{children}</a>
    </Link>
  );
}
