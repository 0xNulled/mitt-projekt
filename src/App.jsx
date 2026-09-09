import './App.css'
//import ProfileCard from './components/ProfileCard'
//import Header from './components/Header'
//import List from './components/List'
//import Footer from './components/Footer'
//import OnClick from './components/OnClick'
//import ToggleSwitch from './components/ToggleSwitch'
import TaskList from './components/TaskList'

function App() {
  return (
    <>
      <TaskList
        tasks={[
          { id: 1, text: "Handla mat", done: true },
          { id: 2, text: "Städa", done: false},
        ]}
      />  
    </>
  )
}

export default App
