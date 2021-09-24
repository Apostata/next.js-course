import Button from "./ui/Button";
import DateIcon from "../components/icons/date-icon";
import AddressIcon from "../components/icons/address-icon";
import ArrowRightIcon from "../components/icons/arrow-right-icon";
import { formatAddress } from "./helpers/formatAddress";
import { formatDate } from "./helpers/formatDate";
import Styles from "./EventItem.module.css";
import { EventItemProps } from "./types";

export default function EventItem({
  title,
  image,
  date,
  location,
  id,
}: EventItemProps) {
  const formatedDate = formatDate(date);
  const formatedLocation = formatAddress(location);
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
              <span className={Styles.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
