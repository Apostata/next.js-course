import { useRouter } from "next/router";
export default function Event() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div>
      <h1>Event id:{id}</h1>
    </div>
  );
}
