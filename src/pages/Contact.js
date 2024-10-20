import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SubmissionSuccess from './SubmissionSuccess'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: undefined })); // Clear error for name
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: undefined })); // Clear error for email
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, message: undefined })); // Clear error for message
  };

  if (isSubmitted) {
    return (
      <SubmissionSuccess 
        name={name}
        email={email}
        message={message}
      />
    );
  }

  return (
    <div style={{marginTop: '50px'}}>
      <div>
        <h1>Contact Me</h1><br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              value={name} 
              onChange={handleChangeName} 
              placeholder="Enter your name" 
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={handleChangeEmail} 
              placeholder="name@example.com" 
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={message} 
              onChange={handleChangeMessage} 
              placeholder="Enter your message" 
            />
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
