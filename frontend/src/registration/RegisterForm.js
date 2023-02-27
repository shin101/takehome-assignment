import React, { useState } from 'react';


function RegisterForm({ addUser }){
  const initialFormData = {
    email: "",
    firstName: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    addUser(formData);
    setFormData(initialFormData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            placeholder="first name"
            type="firstName" 
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div>
          <input 
            placeholder="email"
            type="email" 
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <button type="submit">Submit</button>
        {isSubmitted && <p>Success!</p>}
      </form>

  </>
    )
}

export default RegisterForm;