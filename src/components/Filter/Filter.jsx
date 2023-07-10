import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/slice';
import css from './filter.module.css';
const Filter = () => {
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilterChange = evt => {
        dispatch(changeFilter(evt.currentTarget.value));
        };

    return (
        <div className={css.filter}>
              <p>Find contacts by name</p>
               <input
            type="text"
            name="filter"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </div>
    )
}
export default Filter;