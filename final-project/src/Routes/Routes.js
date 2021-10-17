import React from "react"
import LayoutComponent from "../Layout/Layout"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Mobile from "../Pages//Game/Game"
import { GameProvider } from "../Context/GameContext"
import MobileList from "../Pages/Game/GameList"
import MobileDetail from "../Pages/Game/GameDetail"
import MobileForm from "../Pages/Game/GameForm"
import Movie from "../Pages/Movie/Movie"
import { MovieProvider } from "../Context/MovieContext"
import MovieList from "../Pages/Movie/MovieList"
import MovieDetail from "../Pages/Movie/MovieDetail"
import MovieForm from "../Pages/Movie/MovieForm"
import { UserProvider } from "../Context/UserContext";
import Register from "../Auth/Register"
import Login from "../Auth/login"
import Cookies from "js-cookie";
import ChangePassword from "../Auth/ChangePassword"
import LandingPage from "../Pages/LandingPage"

const Routes = () => {
  const LoginRoute = ({...props}) => {
    if(Cookies.get('token') !== undefined){
        return <Redirect  to="/" />
    }else{
        return <Route {...props} />
    }
  }
  return (
    <>
      <Router>
        <GameProvider>
          <MovieProvider>
          <UserProvider>
          <Switch>
            
            <Route path="/" exact component={LandingPage}/>

            <Route path="/movie" exact>
              <LayoutComponent content={<Movie/>} />
            </Route>

            <Route path="/movie/list" exact>
              <LayoutComponent content={<MovieList />} />
            </Route>

            <Route path="/movie/create" exact>
              <LayoutComponent content={<MovieForm/>}/>
            </Route>

            <Route path="/movie/edit/:Id" exact>
              <LayoutComponent content={<MovieForm/>}/>
            </Route>

            <Route exact path="/movie/:Id">
              <LayoutComponent content={<MovieDetail/>}/>
            </Route>

            <Route path="/game" exact>
              <LayoutComponent content={<Mobile/>} />
            </Route>

            <Route path="/game/list" exact>
              <LayoutComponent content={<MobileList />} />
            </Route>

            <Route path="/game/create" exact>
              <LayoutComponent content={<MobileForm/>}/>
            </Route>

            <Route path="/game/edit/:Id" exact>
              <LayoutComponent content={<MobileForm/>}/>
            </Route>

            <Route exact path="/game/:Id">
              <LayoutComponent content={<MobileDetail/>}/>
            </Route>

            <Route path="/user/change-password" exact>
              <LayoutComponent content={<ChangePassword/>}/>
            </Route>
              <LoginRoute exact path="/login" component={Login} />
              <LoginRoute exact path="/register" component={Register} />

            
          </Switch>
          </UserProvider>
          </MovieProvider>
        </GameProvider>
      </Router>
    </>
  )
}

export default Routes
