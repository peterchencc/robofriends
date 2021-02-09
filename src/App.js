import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ robots: users })
      })

    console.log('componentDidMount')
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    console.log('render')

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
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
}

export default App
