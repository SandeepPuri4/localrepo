import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>eventdetailpage</h1>
      <p>events id: {params.eventId}</p>
    </>
  );
}
