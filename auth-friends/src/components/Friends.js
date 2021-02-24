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
                friends: res.data
                .forEach(friend => {
                    return friend;
                })
            })
        })
        .catch(err => {
            console.log({ err })
        })
    }

  render() {
    return (
        <div>
            <h3>{this.state.friends}</h3>
        </div>
    );
  }
}

export default Friends;
