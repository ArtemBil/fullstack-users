import axios from 'axios';

export default async function getUsersCount() {
    const {data} = await axios.get<{ numOfPages: number }>(`/api/users/count`);

    return data;
}