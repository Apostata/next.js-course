import { useRouter } from "next/router";
import { getFilteredEvents } from "../../DUMMY_DATA";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventFilter() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  if (!slug) {
    return null;
  }

  const year = +slug[0];
  const month = +slug[1];

  if (isNaN(year) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Invalid values passed to filter!</p>
        </ErrorAlert>
        <Button link="/events">Sholl all Events</Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);
  if (!filteredEvents || filteredEvents.length < 1) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No events for the choosen filter</p>
        </ErrorAlert>
        <Button link="/events">Sholl all Events</Button>
      </div>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
