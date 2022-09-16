import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {Grid} from "@material-ui/core";
import SearchBar from './components/SearchBar';
import youtube from './api/youtube.js'
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  return (

   <Grid style={{ justifyContent:"center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
              <SearchBar onSubmit = {handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={ selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={ videos} onSelectVideo = {setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
   </Grid>
  );

  async function handleSubmit(searchItem) {
    const {data : {items:videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyD0gyYVZWAvTS-rNHP1xEQPm5gnll2xh2g",
        q: searchItem
      }
    });
  //console.log(response.data.items);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

}

export default App;
