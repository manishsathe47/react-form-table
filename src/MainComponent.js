// MainComponent.js
import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import EditModal from './EditModal';
import styles from './MainComponent.module.css';

const MainComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const addRow = (rowData) => {
    setTableData([...tableData, rowData]);
  };

  const editRow = (index) => {
    setIsEditModalOpen(true);
    setSelectedRow(index);
  };

  const updateRow = (rowData) => {
    const updatedData = [...tableData];
    updatedData[selectedRow] = rowData;
    setTableData(updatedData);
    setSelectedRow(null);
    setIsEditModalOpen(false);
  };

  const deleteRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <div className={styles.container}>
      <Form addRow={addRow} />
      <Table data={tableData} editRow={editRow} deleteRow={deleteRow} />
      <EditModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        rowData={tableData[selectedRow]}
        updateRow={updateRow}
      />
    </div>
  );
};

export default MainComponent;
