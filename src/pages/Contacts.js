import { useDispatch, useSelector } from "react-redux";
import { selectIsChange } from 'redux/selectors';
import { clearChange } from 'redux/contacts/contactsSlice';

import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';
import { Modal } from "components/Modal";

const Contacts = () => {
  const isChange = useSelector(selectIsChange)
  const dispatch = useDispatch()

  const closeModel = () => {
    dispatch(clearChange())
  }

  return (
      <div>       
          <FormAddContact/>
          {isChange &&  <Modal title='Change contact' children={<FormChangeContact/>} closeModel={closeModel}/>}
          <ContactsList/>
    </div>
  )
}

export default Contacts