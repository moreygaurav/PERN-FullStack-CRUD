import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TableList from './components/TableList';
import ModelForm from './components/ModelForm';
import axios from 'axios';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelModel, setModelModal] = useState('add');
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [reload, setReload] = useState(false);


  const handleOpen = (model) => {
    setModelModal(model);
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleSubmit = async (newClientData) => {
     await axios.post(
      "http://localhost:5000/api/clients",
      newClientData
    );

    setReload(prev => !prev);
    if (modelModel === 'add') {
      // add model
      try {
        console.log("new client", newClientData);
        const response = await axios.post('http://localhost:5000/api/clients', newClientData)

        fetchClients(); // Refresh list
        handleClose();
      } catch (err) {
        console.error(err.response?.data);
        console.error(err.response?.status);
      }
      console.log('add model');
    } else if (modelModel === 'edit') {
      // edit model 
      console.log('edit model');
    }
  }



  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} SearchTerm={searchTerm} reload={reload} />
      <ModelForm
        isOpen={isOpen}
        mode={modelModel}
        onClose={handleClose}
        onSubmit={handleSubmit}
        clientData={clientData}
      />
    </>
  )
}

export default App;
