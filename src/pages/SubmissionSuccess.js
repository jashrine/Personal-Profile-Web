import React from 'react';

const SubmissionSuccess = ({ name, email, message}) => {
  return (
    <div style={{ marginTop: '50px'}}>
      <h1>Thank you for your message!</h1><br></br>
      <p>
        Thank you <strong>{name}</strong>, your message has been sent.
      </p>
      <div>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
