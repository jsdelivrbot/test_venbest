import React, { Component } from 'react';

class apidata extends Component{

state = {
  apidata:[]
}

componentDidMount(){





fetch('https://venbest-test.herokuapp.com/')
  .then((response)=>response.json())
  .then(json => this.setState({apidata:json})).then(console.log('hello'))
}

 render(){
console.log(this.state.apidata)
   return (
     <div>


     </div>
   )
 }
 }

export default apidata;
