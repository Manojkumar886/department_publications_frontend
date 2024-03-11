import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./Mainpage";
import { Home } from "./home";
import { Login, Loginpage } from "./login";
import { ListallJournalist } from "./Listalljournalist";
import { NewjournalistForm } from "./newjournalist";
import { Updatejournalist } from "./JournalistUpdate";

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