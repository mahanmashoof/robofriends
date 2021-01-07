import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls the constructor of component
    this.state = { //things that can change and affect the app
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const {robots, searchfield} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length ?
      <h2>loading..</h2> :
      (<div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox mySearchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
      </div>)
  }
}

export default App

//--- Notes ---

//const App = () => {
//same as:
//class App extends Component {
//  render() {

//put state in cunstructor class

//to access the robots from the state:
//<CardList robots={robots}/> changed to: <CardList robots={this.state.robots}/>

//create a fuction to see what happenes on a certain event, in this case, onSearchChange, and apply it to SearachBox
//<SearchBox/> changed to: <SearchBox mySearchChange={this.onSearchChange}/>
//add onChange to SearchBox.js

//console.log(event.target.value) to log value in serachbox

//add filterRobots function

//to avid conflicts with own methods:
//onSearchChange(event) changed to: onSearchChange = (event) =>

//anytime changing state in react, need to add this.setState:
//this.setState({searchfield: event.target.value})

//move filterRobots to render() for access to the view
//<CardList robots={this.state.robots}/> changed to: <CardList robots={filterRobots}/>

//apply react lifecycle hooks (componentDidMount) in order to use APIs

//add Scroll wrapper

//adding const {robots, searchfield} = this.state makes sure we can remove this.state from the rest of the render() function:
//if (this.state.robots.length === 0) changed to: if (robots.length === 0)
