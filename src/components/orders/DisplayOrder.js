import React, { Component } from 'react'
import ListingOrders from './ListingOrders'
import Axios from 'axios';

class DisplayOrders extends Component {
    state = {
        item: [],
        isloaded:false,
    }
    componentDidMount() {
       Axios.get("http://localhost:3000/orders")
        .then(res => {
            console.log(res.data.doc)
            this.setState({
                item: res.data.doc,
                isloaded:true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        var {item,isloaded} = this.state
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
                <ListingOrders item={item} />
            </div>
        )
    }
}
}

export default DisplayOrders
