import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import { Link } from 'react-router-dom'
import {Animated} from "react-animated-css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length === 0 && password.length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (<div>
      <div className="image">
      <Animated animationIn="rollIn" animationOut="fadeOut"  isVisible={true}>
    
    <h1 className="welcome">Welcome</h1> ;)
    

  
    <p>Please enter your sign in details to continue</p>
    <div className="Login">
        
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="email">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="password">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Link to ="/dashboard"><Button className="button" block size="lg" type="submit" disabled={validateForm()}>
          Login
        </Button></Link>
        
      </Form>
      
    </div>
</Animated>

</div>


  
   
    </div>
  );
}