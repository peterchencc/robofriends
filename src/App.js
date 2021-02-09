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
      <div className="text-center bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="p-4 text-4xl font-bold">RoboFriends</h1>
        <div className="my-4">
          <SearchBox
            searchField={this.state.searchField}
            searchChange={this.onSearchChange}
          />
        </div>
        <div className="mx-4">
          <CardList robots={filteredRobots} />
        </div>
      </div>
    )
  }
}

export default App
