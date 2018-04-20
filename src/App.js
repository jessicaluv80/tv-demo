import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css'


class App extends Component {
  state = {
    shows: [
      {
        name: 'Dead Files',
        rating: 3,
        previewImage: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/29683803_2048628898498234_7034297162045851476_n.jpg?_nc_cat=0&oh=2e9aa27bae43d10bfe4efa77330ff2c1&oe=5B595C8F',
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
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
