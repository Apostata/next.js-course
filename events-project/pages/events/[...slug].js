import { useRouter } from "next/router";
export default function EventFilter() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  const data = slug.join("/");

  return (
    <div>
      <h1>Event filter by date: {data}</h1>
    </div>
  );
}
