import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import { Box } from '@mui/material'
import SearchFeed from './components/searchfeed'
import ChannelDetail from './components/channelDetail'
import VideoDetail from './components/videoDetail'
import Feed from './components/feed'

function App() {
 

  return (
    <>
      <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
    </>
  )
}

export default App
