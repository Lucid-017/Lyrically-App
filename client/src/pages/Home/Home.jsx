import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Player from '../../components/Player/Player'
import SideBar from '../../components/Player/sidebar/SideBar'
import Favourites from '../Favourites/Favourites'
import Feeds from '../feeds/Feeds'
import Library from '../Library/Library'
import NotFound from '../NotFound'
import Trending from '../Trending/Trending'
import "../Home/home.css"

function Home() {
  return (
    <Router>
      <div className="home">
          <SideBar/>
          <Routes>
              <Route path="/" element={<Library/>} />
              <Route path="/feed" element={<Feeds />} />
              <Route path="/trending" element={<Trending/>}/>
              <Route path="/favourites" element={<Favourites/>}/>
              <Route path="/player" element={<Player/>}/>
              <Route path='/*' element={<NotFound/>}/>

          </Routes>
      </div>
       
    </Router>
  )
}

export default Home