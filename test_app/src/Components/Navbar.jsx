import React from 'react';
import { Row, Col , Button} from 'antd';  
import 'remixicon/fonts/remixicon.css';
import logo from '../images/logo.webp';
const navbar_style = {
  background: '#FFFFFF',
  height: '80px',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
  width: '100%',
  margin: '0',
  padding: '0',
  marginBottom: '20px',
  borderRadius: '0px 0px 10px 10px',
  position: 'sticky',    
  top: '0',             
  zIndex: 1000
};

function Navbar () {
  return (
    <>
      <Row  style={navbar_style}>
        <Col span={24} style={{ color: 'red',  height: '40px', display: 'flex', alignItems: 'center',paddingLeft:'50px' }}> 
          <img src={logo} alt="" style={{ color: 'blue' ,textAlign:'center',margin:'0'}}/>
        </Col>
      </Row>
        
    </>
  );
}

export default Navbar;
