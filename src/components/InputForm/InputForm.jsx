import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations.js';
import { selectContacts } from 'redux/selectors.js';

import { toast } from 'react-toastify';

import { Form, StyledInput, StyledLabel, Button } from './InputForm.styled.js';

const InputForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt?.target;
    const { name, phone } = form.elements;
    const contactName = name.value;
    const contactPhone = phone.value;

    if (
      !contacts?.length ||
      !contacts.some(contact => contact.name === contactName)
    ) {
      form.reset();
      dispatch(addContact({ name: contactName, phone: contactPhone }));
    } else {
      toast.warning('Contact with such name exists yet.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default InputForm;