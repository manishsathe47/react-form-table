// Form.js
import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ addRow }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekday: false,
    gender: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekday: false,
      gender: '',
      dob: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Contact:
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </label>
      <label>
        Weekday:
        <input type="checkbox" name="weekday" checked={formData.weekday} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <label>
          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
          Female
        </label>
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
