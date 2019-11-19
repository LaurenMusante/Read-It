import React from 'react';
class LikeButton extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
}

handleIncrement() {
    let newCount = this.state.count +1;
    this.setState({
        count: newCount
    })
};

handleDecrement() {
    let newCount=this.state.count -1;
    this.setState({
        count: newCount
    })
};
    render(){
        return (
            <div>
                <p> Likes: {this.state.count}</p>
                <button onClick={this.handleIncrement}> LIKE </button>
                <button onClick={this.handleDecrement}> DISLIKE </button>
            </div>
        );
    }
}

export default LikeButton;