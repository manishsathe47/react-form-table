// EditModal.js
import React, { useState, useEffect } from 'react';
import styles from './EditModal.module.css';

const EditModal = ({ isOpen, closeModal, rowData, updateRow }) => {
  const [editedData, setEditedData] = useState({ ...rowData });

  useEffect(() => {
    setEditedData({ ...rowData });
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRow(editedData);
    closeModal();
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={editedData.email} onChange={handleChange} required />
        </label>
        <label>
          Contact:
          <input type="tel" name="contact" value={editedData.contact} onChange={handleChange} required />
        </label>
        <label>
          Weekday:
          <input type="checkbox" name="weekday" checked={editedData.weekday} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <label>
            <input type="radio" name="gender" value="Male" checked={editedData.gender === 'Male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={editedData.gender === 'Female'} onChange={handleChange} />
            Female
          </label>
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={editedData.dob} onChange={handleChange} required />
        </label>
        <button type="submit">Update</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditModal;
