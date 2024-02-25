import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import VideoCard from './components/VideoCard';


const videoUrls = [
  {
    url: require('./videos/video4.mp4'),
    username: 'raju123',
    description: 'softwareengineer',
    song: 'Computer Science',
    likes: 3,
    comments: 1,
  },
  {
    url: require('./videos/video1.mp4'),
    username: 'lukki',
    description: 'techtok',
    song: 'Original sound-aape',
    likes: 130,
    comments: 23,
  },
  {
    url: require('./videos/video2.mp4'),
    username: 'dolly',
    description: 'developer',
    song: 'Chaplain J Rob',
    likes: '12',
    comments: 0,
  },

];

function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target;
        // if (entry.isIntersecting) {
        //   videoRefs.current.forEach((ref) => {
        //     if (ref !== videoElement) {
        //       ref.pause();
        //     }
        //   });

        //   videoElement.play();
        // } else {
        //   videoElement.pause();
        // }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  const handlePlay = (index) => () => {
    const videoElement = videoRefs.current[index];

    // if (videoElement.paused) {
    //   // Pause all other videos
    //   videoRefs.current.forEach((ref) => {
    //     if (ref !== videoElement) {
    //       ref.pause();
    //     }
    //   });

    //   videoElement.play();
    // } else {
    //   videoElement.pause();
    // }
  };

  return (
    <div className="app">
      <div className="container">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            username={video.username}
            description={video.description}
            song={video.song}
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            setVideoRef={handleVideoRef(index)}
            onClick={handlePlay(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
