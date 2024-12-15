import { useState } from 'react';
import './style.css'

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'Name' ? setName(value) : "";
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Email') {
      setEmail(value);
    }
  };
  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${Name}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form" >

      <form className="form" onSubmit={handleFormSubmit}>
      <h3>
      Contact Me
      </h3>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
      
        <input
          value={Email}
          name="Email"
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
        />
        <p>
        <input
          value={Message}
          name="Message"
          onChange={handleMessageChange}
          type="text"
          placeholder="Message"
        />



        </p>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
