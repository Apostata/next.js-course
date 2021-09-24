import { ReactChildren } from "../types";
import classes from "./event-content.module.css";

function EventContent(props: { children: ReactChildren }) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
