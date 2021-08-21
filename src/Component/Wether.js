import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
class Wether extends React.Component {
    render() {
        return (
            <div>
               
             <Card style={{ width: '18rem' }}>
             <Card.Img  src= {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_IP_KEY}&center=${this.props.dataCall.lat},${this.props.dataCall.lon}&zoom=33`} />
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title>City Name {this.props.dataCall.display_name}</Card.Title>
    <Card.Text>
        succes you are now on the card
    amman lat:{this.props.dataCall.lat}
   <br></br>
   /amman Lon:{this.props.dataCall.lon}
    </Card.Text>
    
  </Card.Body>
</Card>   
            </div>
        )
    }
}

export default Wether
