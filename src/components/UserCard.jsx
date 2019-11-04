import React from 'react'; 

const UserCard = (props) => {

  return (
    <div className="userCard">
      <div style = {{ width: '100%', height: '20%' }}>
        hellooo
      </div>

      <div style={{ width: '100%', height: '30%' }}>
        hellooo
      </div>

      <div style={{ width: '100%', height: '50%', overflowY: 'scroll' }}> 
        helloo 
      </div>
    </div>
  )
}

export default UserCard; 
