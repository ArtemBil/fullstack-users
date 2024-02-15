import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Card, CardContent, CardHeader} from '@mui/material';
import LoadMore from '../LoadMore';
import getUsersList from '../../services/getUsersList';
import getUsersCount from '../../services/getUsersCount';
import {User} from '../../types/user-types';

const UsersList: React.FC = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<User[] | []>([]);
    const [numOfPages, setNumOfPages] = useState(0);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

    useEffect(() => {
        (async () => {
            const [users, count] = await Promise.all([getUsersList(), getUsersCount()]);
            setUsers(users);
            setNumOfPages(count.numOfPages);
        })()
    }, []);

    useEffect(() => {
        if (page === numOfPages) setShowLoadMoreButton(false);
    }, [users, numOfPages]);

    return <>
        <Paper sx={{mt: 10}}>
            <h1>Users list</h1>
            {
                users.map(({id, age, education, email, firstname, lastname, phone, createdAt}) => (
                    <Card sx={{maxWidth: 1024, mt: 2, textAlign: 'left', marginInline: 'auto'}}>
                        <CardHeader>
                            <Typography variant="h5" component="div">
                                Username: {firstname} {lastname}
                            </Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {firstname} {lastname} - (#{id})
                            </Typography>
                            <Typography sx={{fontSize: 16}} variant="h5" component="div">
                                Age: {age}
                            </Typography>
                            <Typography sx={{fontSize: 16}}>
                                Email: {email}
                            </Typography>
                            <Typography sx={{fontSize: 16}}>
                                Phone: {phone}
                            </Typography>
                            <Typography sx={{fontSize: 16}} variant="body2">
                                Education: {education}
                            </Typography>
                            <Typography sx={{fontSize: 16}} variant="h5" component="div">
                                Created at: {new Date(createdAt).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
            {showLoadMoreButton &&
                <LoadMore setPage={setPage} page={page} setUsers={setUsers} />}
        </Paper>
    </>
};

export default UsersList;