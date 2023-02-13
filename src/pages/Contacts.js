import { useSelector } from "react-redux";
import { selectIsChange } from 'redux/selectors';
import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';

const Contacts = () => {
  const isChange = useSelector(selectIsChange)
    return (
        <div>       
            <FormAddContact/>
            {isChange &&  <FormChangeContact/>}
            <ContactsList/>
      </div>
    )
}

export default Contacts