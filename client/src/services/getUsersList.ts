import axios from 'axios';
import {User} from '../types/user-types';

export default async function getUsersList(page = 1) {
    const {data} = await axios.get<User[]>(`/api/users?page=${page}`);

    return data;
}