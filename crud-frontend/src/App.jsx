import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TableList from './components/TableList';
import ModelForm from './components/ModelForm';
import axios from 'axios';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('add');           // renamed for clarity
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [reload, setReload] = useState(false);

  const handleOpen = (modal, client = null) => {
    setMode(modal);
    setClientData(client);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setClientData(null);   // clear data
  };

  const handleSubmit = async (newClientData) => {
    try {
      if (mode === 'add') {
        await axios.post("http://localhost:5000/api/clients", newClientData);
      }
      else if (mode === 'edit' && clientData?.id) {
        await axios.put(`http://localhost:5000/api/clients/${clientData.id}`, newClientData);
      }

      // Refresh table
      setReload(prev => !prev);
      handleClose();
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/clients/${id}`);
      setReload(prev => !prev);   // Auto refresh table
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete client");
    }
  };



  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} SearchTerm={searchTerm} reload={reload} onDelete={handleDelete} />
      <ModelForm
        isOpen={isOpen}
        mode={mode}
        onClose={handleClose}
        onSubmit={handleSubmit}
        clientData={clientData}
      />
    </>
  )
}

export default App;
