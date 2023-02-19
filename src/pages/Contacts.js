import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectIsChange } from 'redux/selectors';
import { clearChange } from 'redux/contacts/contactsSlice';

import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';
import { Modal } from "components/Modal";

import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Contacts = () => {
  const [ isAddContact, setIsAddContact ] = useState(false)
  const isChange = useSelector(selectIsChange)
  const dispatch = useDispatch()

  const closeModel = () => {
    dispatch(clearChange())
    setIsAddContact(false)
  }

  return (
      <div>       
          <IconButton 
            aria-label="add" 
            size="large"
            onClick={()=> setIsAddContact(prev => !prev)}
          >
            <PersonAddIcon/>
          </IconButton>
          
          {isAddContact && <Modal title='Add contact' children={<FormAddContact/>} closeModel={closeModel}/>}

          {isChange &&  <Modal title='Change contact' children={<FormChangeContact/>} closeModel={closeModel}/>}

          <ContactsList/>
    </div>
  )
}

export default Contacts