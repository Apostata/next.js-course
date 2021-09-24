import EventItem from "./EventItem";
import Styles from "./EventList.module.css";
import { EventModel } from "./types";
export default function EventList({ items }: { items: EventModel[] }) {
  return (
    <ul className={Styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
