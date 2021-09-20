import Button from "./ui/Button";
import DateIcon from "../components/icons/date-icon";
import AddressIcon from "../components/icons/address-icon";
import ArrowRightIcon from "../components/icons/arrow-right-icon";
import Styles from "./EventItem.module.css";

export default function EventItem({ title, image, date, location, id }) {
  const formatedDate = new Date(date).toLocaleDateString("pr-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedLocation = location.replace(", ", "\n");
  const link = `/events/${id}`;
  return (
    <li className={Styles.item}>
      <img alt={title} src={`/${image}`} />
      <div className={Styles.content}>
        <div className={Styles.summary}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={Styles.date}>
            <DateIcon />
            <time suppressHydrationWarning>{formatedDate}</time>
          </div>
          <div className={Styles.address}>
            <AddressIcon />
            <address>{formatedLocation}</address>
          </div>
          <div className={Styles.actions}>
            <Button link={link}>
              <span>Exlpore Event</span>
              <span>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
