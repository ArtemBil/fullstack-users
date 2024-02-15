import React, {ChangeEvent, useState} from 'react';
import Paper from '@mui/material/Paper';
import {
    Card,
    CardContent, FormControl, FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select, SelectChangeEvent,
    TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import createUser from '../../services/createUser';
import {AxiosError} from 'axios';
import {DataFieldType, Education, UserCreateData, UserValidationErrorFields} from '../../types/user-types';

const userFields: UserCreateData = {
    firstname: '',
    lastname: '',
    age: '',
    phone: '',
    education: '',
    email: ''
};

const errorFields: UserValidationErrorFields = {
    firstname: [],
    lastname: [],
    age: [],
    phone: [],
    education: [],
    email: []
}

const UserCreateForm = () => {
    const [userData, setUserData] = useState<UserCreateData>(userFields);
    const [errors, setErrors] = useState<UserValidationErrorFields>(errorFields);
    const handleChange = (type: DataFieldType) => (event: ChangeEvent<{ value: string | number }> | SelectChangeEvent<{
        value: string | number
    }>) => {
        setUserData(prevState => {
            if (type === 'age') {
                prevState[type] = +event.target.value as number;
            } else {
                prevState[type] = event.target.value as string;
            }

            return prevState;
        })
    };

    const handleCreate = async () => {
        try {
            setErrors({});
            await createUser(userData);
        } catch (e) {
            if (e instanceof AxiosError && e.response) {
                setErrors(e.response.data.errors);
            } else {
                console.error(e);
            }
        }
    }

    return (
        <Paper sx={{mt: 12}}>
            <Grid>
                <Card style={{maxWidth: 450, padding: '20px 5px', margin: '0 auto'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Create a user
                        </Typography>

                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <FormControl fullWidth error={!!errors?.firstname?.length}>
                                        <TextField
                                            placeholder="Enter first name"
                                            label="First Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange('firstname')}

                                        />
                                        <FormHelperText sx={{m: 1, marginInline: 0}}>
                                            {errors.firstname?.map(error => (<div>{error}</div>))}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <FormControl fullWidth error={!!errors?.lastname?.length}>
                                        <TextField
                                            placeholder="Enter last name"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange('lastname')}
                                        />
                                        <FormHelperText sx={{m: 1, marginInline: 0}}>
                                            {errors.lastname?.map(error => (<div>{error}</div>))}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth error={!!errors?.email?.length}>
                                        <TextField
                                            type="email"
                                            placeholder="Enter email"
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange('email')}
                                        />
                                        <FormHelperText
                                            sx={{m: 1, marginInline: 0}}>{errors.email?.map(error => (
                                            <div>{error}</div>))}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth error={!!errors?.phone?.length}>
                                        <TextField
                                            type="number"
                                            placeholder="Enter phone number"
                                            label="Phone"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange('phone')}

                                        />
                                        <FormHelperText
                                            sx={{m: 1, marginInline: 0}}>{errors.phone?.map(error => (
                                            <div>{error}</div>))}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl fullWidth error={!!errors?.age?.length}>
                                        <TextField
                                            type="number"
                                            placeholder="Age"
                                            label="Age"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange('age')}

                                        />
                                        <FormHelperText
                                            sx={{m: 1, marginInline: 0}}>{errors.age?.map(error => (
                                            <div>{error}</div>))}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl error={!!errors?.education?.length} fullWidth>
                                        <InputLabel id="demo-simple-select-label">Education</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Education"
                                            onChange={handleChange('education')}
                                            fullWidth
                                        >
                                            {Object.entries(Education).map(([key, value]) => (
                                                <MenuItem value={key}>{value}</MenuItem>
                                            ))}
                                            <MenuItem value="Test">Test</MenuItem>
                                        </Select>
                                        <FormHelperText sx={{m: 1, marginInline: 0}}>{errors.education?.map(error => (
                                            <div>{error}</div>))}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        fullWidth
                                        onClick={handleCreate}
                                    >
                                        Create
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Paper>
    );
};

export default UserCreateForm;