import { useState } from 'react'
import ListaNomes from './components/ListaNomes'


import './App.css'

function App() {
 
  let nomes = [
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Eduardo',
    'Fernanda',
    'Gustavo',
    'Hugo',
    'Igor',
    'João',
  ]
  let estilo =  { 
    backgroundColor: 'beige',
    color: 'black',
    border: '1px solid black',
    padding: '10px',
    listStyle: 'none'
  }
  return (
    <>
      <ListaNomes />    
    </>
  )
}

export default App
