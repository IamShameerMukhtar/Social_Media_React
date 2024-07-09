import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"
import CreatePost from "./Components/CreatePost"
import PostList from "./Components/PostList"
import { useState } from "react"
function App() {
const [selectedTab,setSelectedTab]=useState("Home");





return (
    <>
    <div className="app-container">
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
     
    <div className="content"><Header></Header>
    {selectedTab==="Home"?<PostList></PostList>:<CreatePost></CreatePost> }
    
    
     </div>
     
     </div>
     
     <Footer></Footer>
    </>
  )
}

export default App
