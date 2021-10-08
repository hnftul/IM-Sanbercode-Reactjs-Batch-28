import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Nav from "./Components/Nav";
import Tugas9 from './Tugas-9/tugas9.';
import Tugas10 from './Tugas-10/tugas10';
import Tugas11 from './Tugas-11/tugas11';
import Tugas12 from './Tugas-12/tugas12';
import Tugas13 from './Tugas-13/daftarNilai';
import Tugas14List from './Tugas-14/tugas14List';
import Tugas14Form from './Tugas-14/tugas14Form';
import Tugas15List from './Tugas-15/tugas15List';
import Tugas15Form from './Tugas-15/tugas15Form';
import { DaftarNilaiProvider } from "./Tugas-13/daftarNilaiContext";
import { ThemeProvider } from "./Tugas-14/ThemeContext";

const Routes = () => {
  return (
    <>
      <Router>
        <DaftarNilaiProvider>
          <ThemeProvider>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Tugas9}/>
              <Route path="/tugas10" exact component={Tugas10}/>
              <Route path="/tugas11" exact component={Tugas11}/>
              <Route path="/tugas12" exact component={Tugas12}/>
              <Route path="/tugas13" exact component={Tugas13}/>
              <Route path="/tugas14" exact>
                <Tugas14List/>
              </Route>
              <Route path="/tugas14/form" exact component={Tugas14Form}/>
              <Route path="/tugas14/form/:slug" exact component={Tugas14Form}/>
              <Route path="/tugas15" exact>
                <Tugas15List/>
              </Route>
              <Route path="/tugas15/form" exact component={Tugas15Form}/>
              <Route path="/tugas15/form/:slug" exact component={Tugas15Form}/>
            </Switch>
          </ThemeProvider>
        </DaftarNilaiProvider>
      </Router>
    </>
  );
}

export default Routes;