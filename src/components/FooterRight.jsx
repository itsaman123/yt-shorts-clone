import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faThumbsUp, faMessage, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';

function FooterRight({ likes, comments, saves, shares, profilePic }) {
  const [liked, setLiked] = useState(false);

  const parseLikesCount = (count) => {
    if (typeof count === 'string') {
      if (count.endsWith('K')) {
        return parseFloat(count) * 1000;
      }
      return parseInt(count);
    }
    return count;
  };

  const formatLikesCount = (count) => {
    if (count >= 10000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };


  return (
    <div className="footer-right">
      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ width: '35px', height: '35px', color: liked ? '#0362fc' : 'white' }}
          onClick={handleLikeClick}
        />
        <p>{formatLikesCount(parseLikesCount(likes) + (liked ? 1 : 0))}</p>
      </div>


      <div className="sidebar-icon1">
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{ width: '35px', height: '35px' }}
        />
        <br />
        <br />
      </div>






      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faMessage} style={{ width: '35px', height: '35px', color: 'white' }} />
        <p>{comments}</p>
      </div>

      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faShare} style={{ width: '35px', height: '35px', color: 'white' }} />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default FooterRight;




