import { useSelector } from "react-redux";
import { selectIsChange } from 'redux/selectors';
import { FormAddContact } from 'components/FormAddContact';
import { FormChangeContact } from 'components/FormChangeContact';
import { ContactsList } from 'components/ContactsList';
import { Title } from 'components/Title';

export const Contacts = () => {
  const isChange = useSelector(selectIsChange)

    return (
        <div>
        <Title
          title="Add contact"
          children={
            <FormAddContact/>
          }
        />

       {isChange &&  
       <Title
        title='Change contact'
        children={<FormChangeContact/>}
        />}
        
        <Title
          title="Contacts"
          children={
            <ContactsList/>
          }
        />
      </div>
    )
}