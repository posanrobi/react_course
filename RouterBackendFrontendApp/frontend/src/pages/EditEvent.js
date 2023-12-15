import { useRouteLoaderData } from "react-router-dom"; // get access to higher level loader from a route that doesnt have a loader data
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
