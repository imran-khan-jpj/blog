import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './components/CreatePost'
import SavedPosts from './components/SavedPosts'
import CreateCategory from './components/CreateCategory'
import Categories from './components/Categories'
import NotFound from './components/NotFound'

type AppProperties = {
  isLoggedIn: boolean;
}

const App: React.FC<AppProperties> = ({isLoggedIn}) => {
  return (
    <div className="App">
        <Navbar />
        <Switch>
           <Route exact path="/"><Main /></Route>
           <Route path="/login"><Login /></Route>
           <Route path="/register"><Register /></Route>
           <Route path="/categories"><Categories /></Route>
           <Route path="/create-post"><CreatePost /></Route>
           <Route path="/saved"><SavedPosts /></Route>
           <Route path="/create-category"><CreateCategory /></Route>
           <Route path="*"><NotFound /></Route>
        </Switch>
    </div>
  );
}

interface Props {
  auth : {isLoggedIn: boolean;}
}

const defaultState = (state: Props) => {
  return {
    isLoggedIn : state.auth.isLoggedIn
  }
}

export default connect(defaultState)(App);
