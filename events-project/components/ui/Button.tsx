import Link from "next/link";
import { ButtomProps } from "../types";
import Styles from "./Button.module.css";

export default function Button({ children, link, onClick }: ButtomProps) {
  if (link) {
    return (
      <Link href={link}>
        <a className={Styles.btn}>{children}</a>
      </Link>
    );
  } else {
    return (
      <button className={Styles.btn} onClick={onClick}>
        {children}
      </button>
    );
  }
}
