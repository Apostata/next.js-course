import { useRouter } from "next/router";
import { getEventById } from "../../DUMMY_DATA";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-logistics";
import EventContent from "../../components/events/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function Event() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const event = getEventById(id as string) || null;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
