import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Wrapper from '../components/Wrapper'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="text-center bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="p-4 text-4xl font-bold">RoboFriends</h1>
        <div className="my-4">
          <SearchBox
            searchField={searchField}
            searchChange={this.onSearchChange}
          />
        </div>
        <div className="mx-4">
          <Wrapper>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default App
