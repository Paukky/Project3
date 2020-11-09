import React, {useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts:
        [
            {
                id: 1,
                name: 'Idk Paul',
                email: 'paul2@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Idk Paul',
                email: 'paul2@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Idk Paul',
                email: 'paul2@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    };

    const [state,dispatch] = useReducer(contactReducer, initialState); //state allows to use anything in the state //dispatch allows to dispatch objects into Reducer
    // add Contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({type: ADD_CONTACT, payload: contact});
    };
    // delete Contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id});
    };
    // Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    };
    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    };
    //Update Contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});
    };
    //Filter Contacts
    const filterContact = text => {
        dispatch({type: FILTER_CONTACT, payload: text});
    };
    //Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER});
    };

    return (
        <contactContext.Provider
        value= {{ // allow to bring anything to here
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,   
            clearFilter,
            filterContact
        }}>
            {props.children}
        </contactContext.Provider>
    )
};

export default ContactState;