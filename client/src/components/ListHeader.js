import React, { useState } from 'react'
import Modal from './Modal'

function ListHeader(props) {
  const [showModal, setShowModal] = useState(false);

  
    return (
      <div className='list-header'>
        <h1>{props.listName}</h1>
        <div className='button-container'>
            <button className='create' onClick={()=>setShowModal(true)}>CREATE NEW</button>
            <button className='log-out' >LOG OUT</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal={setShowModal}/>}
      </div>
    );
  }
  
  
  export default ListHeader;
  