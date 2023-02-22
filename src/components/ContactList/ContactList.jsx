import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

import { StyledList } from './ContactList.styled';

import ContactListItem from 'components/ContactListItem';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledList>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </StyledList>
  );
};

export default ContactList;