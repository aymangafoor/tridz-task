import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { BrowserRouter, Route, Link, Switch, withRouter} from "react-router-dom";
import Quote from './Quote'
import './App.css'
import play from './images/play.png'
class App extends Component {
  state={
    color: 1
  }
  changeOpacity = color =>{
    this.setState({color})
  }
  render() {
    return (
      <div className="App" style={{opacity: this.state.color}}>
        <BrowserRouter>
          <div className='tab1'>
            <Link className='link' to="/trading">Trading Division</Link>
            <Link className='link' to="/project">Projects Division</Link>
            <Link className='link' to="/switch">Switchgears Division</Link>
            <Link className='linkquote' to="/getquote" onClick={() => this.changeOpacity("0.8")}>Get a Quote</Link>
          </div>
        </BrowserRouter>
        <BrowserRouter>
          <div className='tab2'>
            <Link className='link2' to="/trading">Electricals</Link>
            <Link className='link2' to="/project">Building {'&'} Construction Materials</Link>
            <Link className='link2' to="/switch">Plumbing {'&'} Fitings</Link>
            <Link className='link2' to="/getquote">Tiles</Link>
            <Link className='link2' to="/getquote">Paints {'&'} Accessories</Link>
            <Link className='link2' to="/getquote">Tools</Link>
            <Link className='link2' to="/getquote">Hardware</Link>
            <Link className='link2' to="/getquote">Fancy Lights</Link>
            <Link className='link2' to="/getquote">Furniture</Link>
          </div>
          <div className='center'>
            <Switch>
              <Route exact path='/getquote' component={withRouter(Quote)} />
            </Switch>
          </div>

        </BrowserRouter>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            light={true}
            controls
            playing
            height='100%'
            width='100%'
            playIcon={<img src={play} alt='play'/>}
            url="https://www.youtube.com/watch?v=iYn9fFQoRJU"
          />
        </div>


      </div>
    );
  }
}

export default App;
