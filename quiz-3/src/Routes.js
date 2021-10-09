import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import Nav from "./Components/navbar"
import Body from "./Components/body"
import Footer from "./Components/footer"
import About from './Components/about';
import MobileList from './Components/mobileList';
import MobileForm from './Components/mobileForm';
import { MobileProvider } from "./Context/mobileContext";

const Routes = () => {
    return (
        <>
            <body>
                <Router>
                    <MobileProvider>
                        <Nav/>
                        <Switch>
                            <Route path="/" exact component={Body}/>
                            <Route path="/mobile-list" exact component={MobileList}/>
                            <Route path="/mobile-form" exact component={MobileForm}/>
                            <Route path="/mobile-form/edit/:slug" exact component={MobileForm}/>
                            <Route path="/about" exact component={About}/>   
                        </Switch>
                        <Footer/>
                    </MobileProvider>
                </Router>
            </body>
        </>
    )
}

export default Routes