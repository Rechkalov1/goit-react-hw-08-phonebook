import { ContactList } from '../../ContactList/ContactList';
import { Form } from '../../Form/Form';
import { FilterContact } from '../../FormContact/FilterContact/FilterContact';
import { Block } from './ContactsApp.styled';
import { ToastContainer } from 'react-toastify';

export function ContactsApp() {
  return (
    <>
      <Block>
        <Form />
      </Block>

      <FilterContact />
      <ContactList />
      <ToastContainer />
    </>
  );
}
