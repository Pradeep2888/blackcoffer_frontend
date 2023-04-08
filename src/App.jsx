import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Line } from 'react-chartjs-2'
import BarChart from './Components/BarChart'
import { UserData } from './Data'

function App() {
//  const data={
//   labels:["jan","feb" ,"mar","april","may","june" ],
//   datasets:[
//     {
//       label:"S ales in 2020",
//       data:[2,3,9,4,6,7]
//     }
//   ]
//  }
const [userData,setUserData]=useState({
  labels: UserData.map((data)=>data.year) ,
  datasets:[{
    label:"User Gained",
    data:UserData.map((data)=>data.userGain),
    backgroundColor:["red","green","yellow"]
  }]
})

  return (
    <div className="App">
     <BarChart chartData={userData}  />
     </div>
  )
}

export default App
