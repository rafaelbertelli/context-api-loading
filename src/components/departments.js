import React, { Component } from "react"
import { getDepts } from "../services/api"

type Props = {
  showLoading: Function, 
  hideLoading: Function
}

class Departments extends Component<Props> {
  getDepartments = async () => {
    const { showLoading, hideLoading } = this.props

    showLoading('Carregando departamentos')

    const depts = await getDepts().then(depts => {
      hideLoading()
      return depts
    })

    console.log({ depts })
  }

  render() {
    return(
      <button onClick={this.getDepartments}>Buscar departamentos</button>
    )
  }
}

export default Departments
