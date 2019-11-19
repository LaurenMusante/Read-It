import React from 'react';
class LikeButton extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
}

handleIncrement() {
    let newCount = this.state.count +1;
    this.setState({
        count: newCount
    })
};
    render(){
        return (
            <div>
                <button onClick={this.handleIncrement}>Likes: {this.state.count} </button>
            </div>
        );
    }
}

export default LikeButton;