import { useDispatch, useSelector } from "react-redux";
import { selectIsChange, selectIsAdd } from 'redux/selectors';
import { clearChange, showFormAddContact } from 'redux/contacts/contactsSlice';

import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';
import { Modal } from "components/Modal";

const Contacts = () => {
  const isChange = useSelector(selectIsChange)
  const isAdd = useSelector(selectIsAdd)
  const dispatch = useDispatch()

  const closeModel = () => {
    dispatch(clearChange())
    dispatch(showFormAddContact(false))
  }
  
  return (
      <div>                 
          {isAdd && <Modal title='Add contact' children={<FormAddContact/>} closeModel={closeModel}/>}

          {isChange &&  <Modal title='Change contact' children={<FormChangeContact/>} closeModel={closeModel}/>}

          <ContactsList/>
    </div>
  )
}

export default Contacts