import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Box } from '@mui/system';
import { Paper, Grid, Typography, TextField, Button } from '@mui/material';



const App = () => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        address: Yup.string().required('Address is required'),
        contact: Yup.number().required('contact is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <Fragment>
            <Paper sx={{margin:'200px'}}>
            <Typography align='center' sx={{ fontSize: '50px', color: '#42a5f5', }}>
              Sign Up
              </Typography >
                <Box px={3} py={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="fullname"
                                name="fullname"
                                label="Full Name"
                                fullWidth
                                margin="dense"
                                {...register('fullname')}
                                error={errors.fullname ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.fullname?.message}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                margin="dense"
                                {...register('email')}
                                error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                margin="dense"
                                {...register('address')}
                                error={errors.address ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.address?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="contact"
                                name="contact"
                                label="Contact"
                                fullWidth
                                margin="dense"
                                {...register('contact')}
                                error={errors.contact ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.contact?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('password')}
                                error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('confirmPassword')}
                                error={errors.confirmPassword ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.confirmPassword?.message}
                            </Typography>
                        </Grid>

                    </Grid>
                    <Box mt={3} >
                        <a href="/">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit(onSubmit)}
                                fullWidth >
                                Register
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    );
};

export default App;
