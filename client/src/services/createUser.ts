import axios from 'axios';

export default async function createUser(userData: any) {
    const { data } = await axios.post<{ success: boolean }>('/api/users/create', userData);
    return data;
}