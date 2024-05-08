import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import {useEffect} from 'react' 

 function App() {



  useEffect(() =>{
    fetchApi()
  },[])

  
  const fetchApi = async()=>{
    const res =  await axios.get(`${process.env.REACT_APP_API_KEY}/user/sign-in`)
    console.log('res',res)
  }

  return (
    <div>
  
      <Router>
        <Routes>
          {
            routes.map((route)=>{
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent :Fragment
              return (
                <Route path={route.path} element={
                  <Layout>
                  <Page />
                  </Layout>
                } />
              )
            })
          }
       
  
        </Routes>
      </Router>
    </div>
  )
}

export default App