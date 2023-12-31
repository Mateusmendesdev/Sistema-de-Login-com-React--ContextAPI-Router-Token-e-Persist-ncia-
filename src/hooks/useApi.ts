import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export  const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin:async (email: string, password: string) => {
        //const response = await api.post('/signin', { email, password});
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        }
        //return response.data;
    },
    logout:async () => {
        const response = await api.post('/logout');
        return response.data;        
    }
});