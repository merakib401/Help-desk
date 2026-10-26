
import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/Navbar/NavBar'
import Issue from './Components/Issue/Issue'


const fetchData = async () =>{
  const result = await fetch ("/data.json")
  return result.json()
}


function App() {
const fetchPromise = fetchData()


  return (
    <>
    <NavBar></NavBar>
  
<Suspense fallback= {"Loading..."}>
   <Issue fetchPromise= {fetchPromise}/>
</Suspense>
   
    <Footer></Footer>
      
    </>
  )
}

export default App
