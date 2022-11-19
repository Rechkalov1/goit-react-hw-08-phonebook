import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { FilterContact } from './FormContact/FilterContact/FilterContact';
import { Block } from './ContactsApp.styled';

export function ContactsApp() {
  return (
    <>
      <Block>
        <Form />
      </Block>

      <FilterContact />
      <ContactList />
    </>
  );
}
