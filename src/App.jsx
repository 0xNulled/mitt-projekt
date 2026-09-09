import './App.css'
//import ProfileCard from './components/ProfileCard'
//import Header from './components/Header'
//import List from './components/List'
//import Footer from './components/Footer'
//import OnClick from './components/OnClick'
//import ToggleSwitch from './components/ToggleSwitch'
//import TaskList from './components/TaskList'
import StatusBadge from './components/StatusBadge'

function App() {
  return (
    <>
      <StatusBadge status="active" />  
      <StatusBadge status="pending" />
      <StatusBadge status="inactive" />
    </>
  )
}

export default App
