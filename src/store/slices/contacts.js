import {createSlice} from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        users: [],
    },

    reducers: {
        addContact: (state, action) => {
            state.users.push(action.payload);
        },
        editContact: (state, action) => {
            const {id, firstName, lastName, phoneNumber, position} = action.payload;

            const currentContact = state.users.find(contact => contact.id === id);

            currentContact.firstName = firstName;
            currentContact.lastName = lastName;
            currentContact.phoneNumber = phoneNumber;
            currentContact.position = position;

        },
        removeContact: (state, action) => {
            const filteredUsers = state.users.filter(contact => contact.id !== action.payload.id)
            state.users = filteredUsers
        }
    }
});

export const {addContact, editContact, removeContact} = contactsSlice.actions;

export default contactsSlice.reducer;