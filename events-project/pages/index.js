import Link from "next/link";
import { getFeaturedEvents } from "../DUMMY_DATA";
import EventList from "../components/EventList";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/events">List Events</Link>
        </li>
        <li>
          <Link href="/events/1">Single event by ID</Link>
        </li>
        <li>
          <Link href="/events/01/01/2021">Single event by Date</Link>
        </li>
      </ul>
      <EventList items={getFeaturedEvents()} />
    </div>
  );
}
