/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
import Home from './components/Home'
import Stuff from './components/Stuff'


import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <header id="static-header">
          <label htmlFor="page title" aria-label="" class="screen-reader-text"></label>

          <div id="contain-ul">
            <ul id="unordered-list">


              <li><NavLink exact to="/">Home</NavLink></li>
              <li ><NavLink to="/topics">stuff</NavLink></li>
             
          ////           <SearchBar setSearchTerm={this.setSearchTerm} />
            </ul>


          </div>
        </header>

        <div className="content">
          <Route path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
         
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
