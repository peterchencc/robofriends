import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Wrapper from '../components/Wrapper'
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

function App(props) {
  const [robots, setRobots] = useState([])
  // const [searchField, setSearchField] = useState('')
  const { searchField, onSearchChange } = props

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        setRobots(users)
      })
  }, [])

  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value)
  // }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="text-center bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="p-4 text-4xl font-bold">RoboFriends</h1>
      <div className="my-4">
        <SearchBox searchField={searchField} searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
