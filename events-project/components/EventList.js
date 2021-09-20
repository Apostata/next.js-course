import EventItem from "./EventItem";
import Styles from "./EventList.module.css";
export default function EventList({ items }) {
  return (
    <ul className={Styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
