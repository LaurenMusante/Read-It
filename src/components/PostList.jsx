
import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
//   console.log(props.postList);
  return (
    <div>
      <hr/>
      {props.postList.map((post)=>
        <Post 
          author={post.author}
          title={post.title}
          content={post.content}
          likes={post.likes}
          key={post.id}
        />
      )}
    </div>
  );
}
PostList.propTypes = {
  postList: PropTypes.array
};
export default PostList;