import React from 'react'
import Spinner from 'react-spinkit'

type Props = {
  loading: boolean,
  message: ?string
}

const Loading = ({ loading, message } : Props) => {
  return (
    loading ? (
      <div className="overlay-content">
        <div className="wrapper">
          <Spinner name="pacman" fadeIn="none" color="yellow" />
          <span className="message">{message}</span>
        </div>
      </div>
    ) : null
  )
}

export default Loading
