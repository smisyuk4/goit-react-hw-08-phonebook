import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Title } from 'components/Title';


export const Contacts = () => {
    return (
        <div>
      <h1>My favorite</h1>
      <Title
        title="Phonebook"
        children={
          <ContactForm/>
        }
      />
      <Title
        title="Contacts"
        children={
          <ContactsList/>
        }
      />
    </div>
    )
}