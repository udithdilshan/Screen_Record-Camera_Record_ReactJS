import React, { Component } from 'react';
import  RecordAllMedia  from "./RecordScreen";


class RecordIt extends Component{
    state = {
        openRecordAll :false
    }
    click=()=>{
        if(this.state.isLogged)
        {
            this.setState({
                openRecordAll: false
            })  
        }else{
           this.setState({
            openRecordAll: true
        })  
        }
       
    }
    render(){
        return <div>
        <button onClick={this.click} >Share Screen + Web Cam</button> 
        {this.state.openRecordAll? <RecordAllMedia/>:<h1>User AU</h1>}
     </div>
    }
}

export default RecordIt;