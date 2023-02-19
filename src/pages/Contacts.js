import { useDispatch, useSelector } from "react-redux";
import { selectIsChange, selectIsAdd } from 'redux/selectors';
import { clearChange, showFormAddContact } from 'redux/contacts/contactsSlice';

import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';
import { Modal } from "components/Modal";

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { StyledIconButton } from "./Contacts.styled";

const Contacts = () => {
  const isChange = useSelector(selectIsChange)
  const isAdd = useSelector(selectIsAdd)
  const dispatch = useDispatch()

  const closeModel = () => {
    dispatch(clearChange())
    dispatch(showFormAddContact(false))
  }

  const handleAddContact = ()=>{
    dispatch(showFormAddContact(true))
}

  return (
      <div>       
          <StyledIconButton 
            aria-label="add" 
            size="large"
            onClick={handleAddContact}
          >
            <PersonAddIcon/>
          </StyledIconButton>
          
          {isAdd && <Modal title='Add contact' children={<FormAddContact/>} closeModel={closeModel}/>}

          {isChange &&  <Modal title='Change contact' children={<FormChangeContact/>} closeModel={closeModel}/>}

          <ContactsList/>
    </div>
  )
}

export default Contacts