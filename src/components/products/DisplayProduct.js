import React, { Component } from 'react'
import ListingProducts from './ListingProducts'
import Axios from 'axios';

class DisplayProducts extends Component {
    state = {
        item: [],
        isloaded:false,
    }
    componentDidMount() {
       Axios.get("http://localhost:3000/products",)
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
                <ListingProducts item={item} />
            </div>
        )
    }
}
}

export default DisplayProducts
