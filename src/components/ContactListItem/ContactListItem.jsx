import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations.js';

import { ItemWrapper, ItemContact, ItemDeleteBtn } from './ContactListItem.styled.js';

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleContactDelete = id => dispatch(deleteContact(id));

  return (
    <li>
      <ItemWrapper>
        <ItemContact>
          {name}: {phone}
        </ItemContact>
        <ItemDeleteBtn type="button" onClick={() => handleContactDelete(id)}>
          Delete
        </ItemDeleteBtn>
      </ItemWrapper>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;