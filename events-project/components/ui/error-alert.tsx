import { ReactChildren } from "../types";
import Styles from "./error-alert.module.css";

function ErrorAlert({ children }: { children: ReactChildren }) {
  return <div className={Styles.alert}>{children}</div>;
}

export default ErrorAlert;
