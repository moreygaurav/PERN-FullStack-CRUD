import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TableList from './components/TableList';
import ModelForm from './components/ModelForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelModel, setModelModal] = useState('add');

  const handleOpen = (model) => {
    setModelModal(model);
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    if (modelModel === 'add') {
      // add model
      console.log('add model');
    } else if (modelModel === 'edit') {
      // edit model 
      console.log('edit model');
    }
  }


  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList handleOpen={handleOpen} />
      <ModelForm
        isOpen={isOpen}
        mode={modelModel}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default App;
