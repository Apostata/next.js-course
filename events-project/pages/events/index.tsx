import EventList from "../../components/EventList";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../DUMMY_DATA";

export default function Events() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  );
}
