import { LogisticsItemProps } from "../types";
import Styles from "./logistics-item.module.css";

function LogisticsItem(props: LogisticsItemProps) {
  const { icon: Icon } = props;
  return (
    <li className={Styles.item}>
      <span className={Styles.icon}>
        <Icon />
      </span>
      <span className={Styles.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
