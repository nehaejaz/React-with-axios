import React, { Component } from 'react'
import ListingUsers from './ListingUsers'
import Axios from 'axios';

class DisplayUsers extends Component {
    state = {
        users: [],
        isloaded:false,
    }
    componentDidMount() {
       Axios.get("http://localhost:3000/user")
        .then(res => {
            console.log(res.data.doc)
            this.setState({
                users: res.data.doc,
                isloaded:true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        var {users,isloaded} = this.state
        if(!isloaded){
            return(
                <div>
                    loading...
                </div>
            )
            }
            else{
        return(
            
            <div>
                <ListingUsers users={users} />
            </div>
        )
    }
}
}

export default DisplayUsers
