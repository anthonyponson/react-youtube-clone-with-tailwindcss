import { useState, useEffect } from 'react';
import Plyr from 'plyr';
import { useParams } from 'react-router-dom';
import {storageVideos} from '../storageVideo'
import 'plyr/dist/plyr.css';


function StoVideo() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const video = storageVideos.find((video) => video.id === id);

  useEffect(() => {
    if (video) {
      const player = new Plyr('#player');
      setPlayer(player);
    }

    return () => {
      if (player) {
        player.destroy();
        setPlayer(null);
      }
    };
  }, [video]);

  if (!video) {
    return (
      <div>
        <p>No video found with ID {id}</p>
      </div>
    );
  }

  return (
    <div className='pt-36 text-white'>
      <video id='player'>
        <source src={video.url} type='video/mp4' />
      </video>
    </div>
  );
}

export default StoVideo;
