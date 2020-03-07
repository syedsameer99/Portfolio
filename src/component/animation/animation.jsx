import React, { Component } from 'react'
import './animation.scss'
import Team from '../team/team'


export class Animation extends Component {
    
    render() {
        return (
            <div className='main-ani'>
            <i className='fa fa-facebook fb' onClick={()=> window.open(this.props.facebook)}/>
            <i className='fa fa-instagram'/>
            <i className='fa fa-twitter'/>
            <i className='fa fa-github'/>
            

        </div>
        )
    }
}

export default Animation

