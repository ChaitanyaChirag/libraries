import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import React from 'react'
import './Nav.css'


class Alert extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Confirm to Logout',
      message: 'Are you sure?.',
      buttons: [
        {
          label: 'Yes',
            /*onClick: () => alert('Click No')*/
        },
        {
          label: 'No',
          /*onClick: () => alert('Click No')*/
        }
      ]
    });
  };

  render() {
    return (
        
      <div className='container'>
       <button className="nav-wel" onClick={this.submit}>Logout</button>
        
      </div>
    );
  }
}
export default Alert;