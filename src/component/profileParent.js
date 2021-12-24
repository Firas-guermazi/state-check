import React, { Component } from 'react'
import Profile from './profile';
import Photo2 from './photo2.jfif';

export default class ProfileParent extends Component {
   constructor (props) {
       super(props)
       this.state = {
           name :'Firas',
           description : 'I am a super student',
           image: Photo2 ,
           show: 'false',
       }
   }
   toggle(){
    this.setState({show: !this.state.show})
}
    render() {
        return (
            <div>
            <h1> we are having fun </h1>
            <button onClick={()=>this.toggle()}> click me </button>
            {this.state.show ? 
              <Profile name={this.state.name} 
              description={this.state.description}
              image={this.state.image}/> : null}
            </div>
        )
    }
}


