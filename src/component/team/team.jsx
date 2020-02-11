import React from 'react';
import './team.scss';
import Member from './member'
import member1 from '../../assests/t1.jpg'
import member2 from '../../assests/s1.jpg'

const Team = () => {
    return (
        <div className='team'>
            <h1 className='our' >OUR TEAM</h1>
            <h3 className='sub'>"Alone we can do so little, together we can do so much."</h3>
            <div className='m'>
            <Member membername="Sameer" backgroundd={member1}/>
            <Member membername="Ahsan" backgroundd={member2}/>
            {/* <Member membername="Sarmad"/>
            <Member membername="Salman"/>
            <Member membername="Maaz"/> */}
           
            </div>
            
        </div>
    )
}

export default Team
