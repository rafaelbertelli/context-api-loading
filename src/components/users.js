import React, { Component } from 'react'
import { getUsers } from '../services/api'

type Props = {
  showLoading: Function,
  hideLoading: Function
}

class Users extends Component<Props> {
  getUsers = async () => {
    const { showLoading, hideLoading } = this.props

    showLoading('Carregando usuários...')

    const response = await getUsers().then(response => {
      hideLoading()
      return response
    })

    console.log({ response })
  }

  render() {
    return(
      <button onClick={this.getUsers} >Buscar usuários</button>
    )
  }
}

export default Users
