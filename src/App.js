import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./Mainpage";
import { Home } from "./home";
import { Login, Loginpage } from "./login";
import { ListallJournalist } from "./Listalljournalist";
import { NewjournalistForm } from "./newjournalist";
import { Updatejournalist } from "./JournalistUpdate";
import { ListallConference } from "./Listallconference";
import { ConferenceForm } from "./newconference";
import { Listallbooks } from "./ListallBooks";
import { Booksform } from "./newbooks";
import { Conferenceupdate } from "./ConferenceUpdate";
import { Listallseminar } from "./Listallseminar";
import { SeminarForm } from "./newseminar";
import { Updateseminar } from "./SeminarUpdate";

export default function App() {
  return (
    <>
      {
        (sessionStorage.getItem("auth")) ?
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Mainpage />} />
                <Route path="newjournalist" exact element={<NewjournalistForm />} />
                <Route path="listalljournalist" exact element={<ListallJournalist />} />
                <Route path="updatejournalist/:myid" exact element={<Updatejournalist />} />
                <Route path="newconference" exact element={<ConferenceForm />} />
                <Route path="listallconference" exact element={<ListallConference />} />
                <Route path="listallbooks" exact element={<Listallbooks />} />
                <Route path="newbooks" exact element={<Booksform />} />
                <Route path="updateconference/:id" exact element={<Conferenceupdate />} />
                <Route path="listallseminar" exact element={<Listallseminar />} />
                <Route path="newseminar" exact element={<SeminarForm />} />
                <Route path="updateseminar/:id" exact element={<Updateseminar />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <Loginpage />
          </>
      }
    </>
  );
}