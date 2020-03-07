import React, { Component } from 'react'
import desktop1 from '../../assests/d1.jpg'
import desktop2 from '../../assests/d2.png'
import desktop3 from '../../assests/d3.png'
import Desktopitem from './desktopitem'

class Desktop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            webarr: [
                {
                  img: desktop1
                },
                {
                  img: desktop2
                },
                {
                  img: desktop3
                },
                {
                  img: desktop1
                },
                {
                  img: desktop2
                },
                {
                  img: desktop1
                }
              ]
        }
    }
    
    render() {
        return (
            <div className='desktopmain'>
            {this.state.webarr.map(x => (
              <Desktopitem  image={x.img} />
            ))}
            {/* <div className="webimg" style={{ background: `url(${web1})` }} /> */}
          </div>
        )
    }
}

export default Desktop
