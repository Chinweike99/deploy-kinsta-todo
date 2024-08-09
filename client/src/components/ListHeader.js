import React from 'react'

function ListHeader(props) {

    const createNew = () => {
        alert('sign out')
    }
    const logOut = () => {
        alert('sign out')
    }

    return (
      <div className='list-header'>
        <h1>{props.listName}</h1>
        <div className='button-container'>
            <button className='create' onClick={createNew}>CREATE NEW</button>
            <button className='log-out' onClick={logOut}>LOG OUT</button>
        </div>
      </div>
    );
  }
  
  
  export default ListHeader;
  