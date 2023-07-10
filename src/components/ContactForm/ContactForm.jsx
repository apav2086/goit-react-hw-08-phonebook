import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, postContacts } from "../../redux/contacts/operators";
import { getContacts } from "../../redux/contacts/selectors";
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './contactForm.module.css';


export default function ContactForm() {
 const [formData, setFormData] = useState({
    name: '',
    number: '',
      });

 const contacts = useSelector(getContacts);
//  const filterValue = useSelector(getFilter); // Accessing the filter value from Redux store
  const dispatch = useDispatch(); // Hook for dispatching Redux actions

  function handleSubmit(e) {
  e.preventDefault();

  if (formData.name === '' || formData.number === '') {
    return;
  }
  const isContactExists = contacts.some(
    contact => contact.name === formData.name
  );
  const isNumberExists = contacts.some(
    contact => contact.number === formData.number
  );

  if (isContactExists) {
    alert(`${formData.name} is already in the contact list`);
    return;
  } else if (isNumberExists) {
    alert(`${formData.number} is already in the contact list`);
    return;
  }

  dispatch(postContacts(formData)).then(() => {
    dispatch(fetchContacts());
    setFormData({ name: '', number: '' }); // Clear the form fields
  });
}

  return (
    <div className={css.div}>
      
      <form onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))}
          />
        </div>
        <div className={css.inputContainer}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            value={formData.number}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))}
          />
        </div>
        <button type="submit" className={css.contactFormButton}>Add contact</button>
      </form>
          <Filter />   
<ContactList /> 
    </div>
  );
};