import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" exact element={<NewMeetupPage />} />
        <Route path="/favorites" exact element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
