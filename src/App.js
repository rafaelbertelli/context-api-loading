import React, { Component, Fragment } from 'react'
import Users from './components/users'
import Departments from './components/departments'
import Loading from './components/loading'
import './index.css'

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => { },
  hideLoading: () => { }
})

type Props = {
  message: string
}

type State = {
  loading: boolean,
  message: ?string
}

class App extends Component<Props, State> {
  state = {
    loading: false,
    message: null
  }

  showLoading = (message: string) => this.setState({ 
    loading: true,
    message
  })

  hideLoading = () => this.setState({ loading: false })

  render() {
    const { showLoading, hideLoading } = this
    const value = {
      ...this.state,
      showLoading,
      hideLoading
    }

    return (
      <LoadingContext.Provider value={value}>
        <LoadingContext.Consumer>
          {({ showLoading, hideLoading, loading, message }) => (
            <Fragment>
              <Users {...{ showLoading, hideLoading }} />
              <Departments {...{ showLoading, hideLoading }} />
              <Loading {...{ loading, message }} />
            </Fragment>
          )}
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    )
  }
}

export default App
