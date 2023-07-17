import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { deleteContacts, fetchContacts } from '../../redux/contacts/operators';
import css from './contactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function onDelete(id) {
    dispatch(deleteContacts(id)).then(() => {
      dispatch(fetchContacts());
    });
  }

  const filteredContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const filterText = filter.toLowerCase();

    return contactName.includes(filterText);
  });

  return (
    <div>
      <h2 className={css.h2}>Contacts</h2>

      {/* Updated to use filteredContacts */}
      {filteredContacts && (
        <ul>
          {filteredContacts.length > 0 ? (
            // Mapping over filteredContacts instead of contacts
            filteredContacts.map(contact => (
              <li className={css.listItem} key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={() => onDelete(contact.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li className={css.listItem}>No contacts found.</li>
          )}
        </ul>
      )}
    </div>
  );
}