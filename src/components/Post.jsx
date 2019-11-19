import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';

function Post(props){
    
  return (
    <div>
      <style jsx>
        {`
          div {
            background-color: yellow;
          }
          div:hover {
            background-color: green;
          }
        `}
      </style>
      <h3>{props.title}</h3>
      <h5>{props.author}</h5>
      <p>{props.content}</p>
      <p>Likes: {props.likes}</p>
      <LikeButton />
      <button>Dislike</button>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.int,

};

export default Post;