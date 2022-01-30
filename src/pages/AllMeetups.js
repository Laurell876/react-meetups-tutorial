import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function convertMeetupObjectToArray(data) {
  const meetups = []
  for (const key in data) {
    const meetup = {
      id:key,
      ...data[key]
    }
    meetups.push(meetup)
  }
  return meetups
}

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  async function fetchMeetups() {
    try {
      const url =
        "https://react-getting-started-e1994-default-rtdb.firebaseio.com/meetups.json";

      const response = await fetch(url);
      const json = await response.json();
      const meetups = convertMeetupObjectToArray(json)

      setIsLoading(false);
      setMeetups(meetups);
    } catch (e) {
      console.log(e);
    }
  }

  // the second param is an array of dependencies. the first parameter is a function. if a dependency changes the first function is called again. if the array is empty the first function is only called once. if the second parameter is ommited, the first function runs whenever the component renders
  useEffect(fetchMeetups, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
