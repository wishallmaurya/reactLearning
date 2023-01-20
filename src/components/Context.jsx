import React,{useContext} from 'react'
import { AppState } from '../App'

const Context = () => {
    const appData=useContext(AppState);
  return (
    <div>
      <h2>Context</h2>
      <h2>{appData.data}</h2> 
      <h2>{appData.name}</h2> 
    </div>
  )
}

export default Context

// better then the props and can send anywhere data