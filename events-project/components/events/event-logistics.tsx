import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import { formatDate } from "../helpers/formatDate";
import { formatAddress } from "../helpers/formatAddress";

export interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics(props: EventLogisticsProps) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = formatDate(date);
  const addressText = formatAddress(address);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
