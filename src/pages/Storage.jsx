import React from 'react';
import { storageVideos } from '../storageVideo';
import { Link } from 'react-router-dom';

function Storage() {
console.log(storageVideos)
  return (
    <>
      <div className='pt-36 text-white'>

      {storageVideos.map((item, i) => (
      
      <Link key={i} to={`/storage/${item.id}`}>
      <div>
        <img src={item.thumbnail} alt="" />
      </div>
      </Link>
     
      ))}
      </div>
    </>
  );
}

export default Storage;