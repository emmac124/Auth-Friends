import React, { Component } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

class Friends extends Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    };

    getFriends = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res.data);
            this.setState({
                friends: [...this.state, res.data
                .map(friend => {
                    return friend;
                })]
            })
        })
        .catch(err => {
            console.log({ err })
        })
    }

  render() {
    return (
        <div>
            <h3>{this.state.friends.name}</h3>
            {/* <p>{this.friend.age}</p> */}
            {/* <p>{this.friend.email}</p> */}
        </div>
    );
  }
}

export default Friends;
