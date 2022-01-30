import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  async function onAddMeetup(meetupData) {
    try {
      const url =
        "https://react-getting-started-e1994-default-rtdb.firebaseio.com/meetups.json";
      const body = JSON.stringify(meetupData);
      const method = "POST";
      const headers = {
        "Content-Type": "application/json",
      };
      const config = {
        method,
        body,
        headers,
      };

      await fetch(url, config);

      navigate("/", { replace: true });

    } catch (e) {
      console.log(
        "An error occurred while adding meetup. Error: " + JSON.stringify(e)
      );
    }
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
}

export default NewMeetupPage;
