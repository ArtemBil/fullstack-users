import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import getUsersList from '../../services/getUsersList';
import {User} from '../../types/user-types';

interface Props {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    setUsers: Dispatch<SetStateAction<[] | User[]>>;
}

const LoadMore: React.FC<Props> = ({setPage, page, setUsers}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setPage(prev => ++prev);
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const users = await getUsersList(page);
            setUsers(prev => [...prev, ...users]);
            setLoading(false);
        })()
    }, [page, setUsers]);

    return loading ? <div>Loading... </div> : (
        <Button onClick={handleClick} variant="contained" sx={{mt: 3, mb: 3}}>
            Load More
        </Button>)
};

export default LoadMore;