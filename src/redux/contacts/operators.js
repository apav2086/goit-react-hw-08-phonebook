import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
    'contact/get',
    async () => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (err) {
            return err;
        }
    });

export const postContacts = createAsyncThunk(
    'contact/post',
    async data => {
    const newContact = {
        name: data.name,
        phone: data.number,
        createdAt: Date.now(),
    }
    try {
        const response = await axios.post('/contacts', newContact);
        return response.data;
    } catch (err) {
        return err;
    }
});

export const deleteContacts = createAsyncThunk('contact/delete',
    async id => {
        try {
            const response = await axios.delete(
                `/contacts/${id}`
            );
            return response.data;
        } catch (err) {
            return err;
        }
    });