import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
    let _author = null;
    let _title = null;
    let _content = null;


    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        props.onNewPostCreation({ author: _author.value, title: _title.value, content: _content.value, likes: 0, id: v4() });
        _author.value = '';
        _title.value = '';
        _content.value = '';
      }

    return (
        <div>
            <form onSubmit={handleNewPostFormSubmission}>
                <input
                    type='text'
                    id='author'
                    placeholder='What is your name?'
                    ref={(input) => {_author = input;}}/>
                />
                <input
                    type='text'
                    id='title'
                    placeholder='Title'
                    ref={(input) => {_title = input;}}/>
                />
                <textarea
                    id='content'
                    placeholder='What do you have to say?'
                    ref={(textarea) => {_content = textarea;}}/>
                />
                <button type='submit'>Post!</button>
            </form>
        </div>
    );
}
NewPostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default NewPostForm;