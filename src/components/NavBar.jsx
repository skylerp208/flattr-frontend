import React from 'react';

class NavBar extends React.Component {
  state = {
    blah: 'blah'
  }

  render() {
    return(
      <div style = {{ width: '100%', height: '8%', backgroundColor: 'royalBlue', position: 'absolute', top: '0%' }}> 
        <div style={{ fontSize: '40px', position: 'absolute', left: '2%', padding: '5px'}}> Flattr </div>
      </div>
    )
  }
}

export default NavBar;