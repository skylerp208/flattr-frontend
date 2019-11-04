import React from 'react';
import UserCard from '../components/UserCard';

class HomePage extends React.Component {
  state = {
    blah: 'blah'
  }

  render() {
    return (
      <div style = {{ position: 'absolute', width: '100%', height: '92%', top: '12%' }}>
        <UserCard />
      </div>
    )
  }
}

export default HomePage; 