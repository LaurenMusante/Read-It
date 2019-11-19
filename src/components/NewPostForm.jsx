import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';



class NewPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
            _author: null,
            _title: null,
            _content: null
        };
        this.handleNewPostFormSubmission = this.handleNewPostFormSubmission.bind(this);
    }





    handleNewPostFormSubmission(event) {
        event.preventDefault();
        this.props.onNewPostCreation({ author: this.state._author.value, title: this.state._title.value, content: this.state._content.value, likes: 0, id: v4() });
        this.setState({_author: ''});
        this.setState({_title: ''});
        this.setState({_content: ''});
        this.setState({toHome: true});
    }
    render() {

        return (
            <div>
                <h1> Create a Post </h1>
                {this.state.toHome ? <Redirect to='/' /> : ''}
                <form onSubmit={this.handleNewPostFormSubmission}>
                    <input
                        type='text'
                        id='author'
                        placeholder='What is your name?'
                        ref={(input) => { this.setState({_author: input });}} />
                    <hr />
                    <input
                        type='text'
                        id='title'
                        placeholder='Title'
                        ref={(input) => { this.setState({_title: input });}} />                    
                        <hr />
                    <textarea
                        id='content'
                        placeholder='What do you have to say?'
                        ref={(input) => { this.setState({_content: input });}} />                   
                         <hr />
                    <button type='submit'>Post!</button>
                </form>
            </div>
        );
    }
}

NewPostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default NewPostForm;