import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="text-center">
        <h1 className="p-4 text-4xl font-bold">RoboFriends</h1>
        <div className="my-4">
          <SearchBox
            searchField={this.state.searchField}
            searchChange={this.onSearchChange}
          />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
