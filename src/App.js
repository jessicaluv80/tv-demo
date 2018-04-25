import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css'


class App extends Component {
  state = {
    shows: [
      {
        name: 'STRANGER THINGS',
        rating: 4,
        previewImage: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png',
      },
      {
        name: 'Ghost Adventures',
        rating: 5,
        previewImage: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2017/12/Unknown.jpeg.rend.hgtvcom.616.462.suffix/1515515037838.jpeg',
      },
      {
        name: 'Dead Files',
        rating: 2,
        previewImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZ6ABREFjHAPtgkRtctiRwgkXYo00RAj_NGM-v3nosV6AVHEcmA',

      }

    ]
  }

  createShow = (show) => {
    this.setState((previousState) => {
      const existingShows = previousState.shows
      existingShows.push(show)

      return {
        shows: existingShows
      }
    })

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
