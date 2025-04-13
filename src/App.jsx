import { useSelector } from 'react-redux'
import './App.css'
import Controller from './components/Controller'
import CounterDisplay from './components/CounterDisplay'
import Header from './components/Header'
import MassageInput from './components/MassageInput'

function App() {
  const privacy = useSelector((store)=> store.privacy);
  return (
    <center className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
     <Header/>
      <div className="col-lg-6 mx-auto">
        
        {!privacy?<CounterDisplay/>:<MassageInput/>}
        <Controller/>
      </div>
    </div>
  </center>

  )
}

export default App
