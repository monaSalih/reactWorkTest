import axios from 'axios'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form } from 'react-bootstrap'
import Wether from './Component/Wether'
// import axios from 'axios'

export class App extends React.Component {
constructor(props){
 super(props)
  this.state= 
    {reactDat:{},
    cardDisplay:false,
    inputCity:''
   
}
}
callData=async(event)=>{
  event.preventDefault()


 await this.setState({
    inputCity:event.target.cityName.value
  })
  console.log(process.env.REACT_APP_IP_KEY,"personal b b key");
 let urlLocation= `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_IP_KEY}&q=${this.state.inputCity}&format=json`



let getUrlData=await axios.get(urlLocation );
console.log("url location",getUrlData.data);
 console.log("url location[0]",getUrlData.data[0]);
console.log(getUrlData);
this.setState({
  reactDat:getUrlData.data[0],
  cardDisplay:true
})

console.log("react Data render",this.state.reactDat);
   
}

  render() {
    return (
      <div className="divCon">
        <Form onSubmit={this.callData}>
     <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="type city name" name="cityName" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>   
 {/* <Button variant="primary">Go somewhere</Button> */}



     {this.state.cardDisplay &&
       <Wether dataCall={this.state.reactDat}/>  }
      </div>
    )
  }
}

export default App
