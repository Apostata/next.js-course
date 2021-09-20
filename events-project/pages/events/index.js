import EventList from "../../components/EventList";
import { getFeaturedEvents, getAllEvents } from "../../DUMMY_DATA";
export default function Events() {
  return (
    <div>
      <h1>Events</h1>
      <EventList items={getAllEvents()} />
    </div>
  );
}
