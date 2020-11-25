import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './SignUp.css';
import {withStyles} from '@material-ui/core/styles';
import { Button, Divider, Paper, Typography} from '@material-ui/core';
import {TextField, Grid, Dialog} from '@material-ui/core'; 
import {AlternateEmail, VpnKey, FastForward, PermContactCalendar, FastRewind} from '@material-ui/icons';

const FormField = withStyles(styles)(props => {
    const {title, classes, id, Icon, onChange, ...otherProps} = props; 

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="center">
                <Grid item sm={12}>
                    <Typography variant='body1' align='left' >{title}</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Icon />
                </Grid>
                <Grid item sm={10}>
                    <TextField id={id} variant='outlined' fullWidth size='small' {...otherProps} onChange={e => onChange(e.target.value)} />
                </Grid>
            </Grid>
        </div>
    ); 
});

const PaperForm = props => {
    const {containerTitle, containerClass, elevation, formData, coverStatus, setCoverStatus, onSubmit, buttonText, ...otherProps} = props; 

    return (    
        <Paper className={containerClass} square elevation={elevation}>
            <div>
                <Typography variant='h5' align='left' gutterBottom>{containerTitle}</Typography>
                <Divider/>
            </div>
            {formData}
            <Button type='submit' variant={coverStatus?'contained':'contained'} color='secondary' {...otherProps}
                onClick={() => {coverStatus ? setCoverStatus(coverStatus => !coverStatus) : onSubmit()}}>
                {buttonText}
            </Button>
        </Paper>  
    );
};

const SignUp = props => {
    const {openSignup, setOpenSignup} = props; 
    const [signInCoverStatus, setSignInCoverStatus] = React.useState(false); 
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [fullName, setFullName] = React.useState('');  
    
    const {classes} = props;
    const containerClass = signInCoverStatus ? [classes.cover, classes.active] : [classes.active, classes.cover]; 
    const baseElevation = 10; 
    const formHeight = 320; 

    const onSignIn = () => {
        alert(`SignIn == Email: ${email} : Password: ${password}`);
    }

    const onSignUp = () => {
        alert(`SignUp == Full Name: ${fullName}, Email: ${email} : Password: ${password}`);
    }


    const signInData = React.useMemo(() => (
        signInCoverStatus ? (
            <div style={{height: formHeight, display: "flex", alignItems: 'center'}}>
                <Typography variant='overline' paragraph>Already a member? Please click here!!</Typography>
            </div>
        ) : (
            <form style={{height: formHeight, display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                <FormField title='Email Address' id='email-id-signin' inputMode='email' Icon={AlternateEmail}  value={email} onChange={setEmail}/>
                <FormField title='Password' id='password-signin' type='password' Icon={VpnKey} value={password} onChange={setPassword}/>
            </form>
        )
    ), [signInCoverStatus, email, password]);

    const signUpData = React.useMemo(() => (
        signInCoverStatus ? (
            <form style={{height: formHeight, display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                <FormField title='Full Name' id='full-name-signup' inputMode='text' Icon={PermContactCalendar} value={fullName} onChange={setFullName}/>
                <FormField title='Email Address' id='email-id-signup' inputMode='email' Icon={AlternateEmail} value={email} onChange={setEmail} />
                <FormField title='Password' id='password-signup' type='password' Icon={VpnKey} value={password} onChange={setPassword} />
            </form>
        ) : (
            <div style={{height: formHeight, display: "flex", alignItems: 'center'}}>
                <Typography variant='overline' paragraph>You are one step away from trying different Machine learning to train, test and predict...</Typography>
            </div>
        )
    ), [signInCoverStatus, fullName, email, password]);
    
    return (
        <div className={classes.root}>
            <Dialog open={openSignup} maxWidth='md' onClose={() => setOpenSignup(false)}>
                <Paper style={{width: 650, display: 'flex', height: formHeight + 150}}>
                    <PaperForm 
                        containerTitle='LOGIN' containerClass={containerClass[0]} elevation={baseElevation - signInCoverStatus * baseElevation}
                        formData={signInData} coverStatus={signInCoverStatus} setCoverStatus={setSignInCoverStatus} onSubmit={onSignIn}
                        buttonText='Login' endIcon={signInCoverStatus ? <FastForward />: ''}
                    />  
                    <PaperForm 
                        containerTitle='NOT A MEMBER??' containerClass={containerClass[1]} elevation={signInCoverStatus * baseElevation}
                        formData={signUpData} coverStatus={!signInCoverStatus} setCoverStatus={setSignInCoverStatus} onSubmit={onSignUp}
                        buttonText='Register Now' startIcon={signInCoverStatus ? '' : <FastRewind />}
                    />  
                </Paper>
            </Dialog>
            
        </div>
    );
};

SignUp.defaultProps = {}; 

SignUp.propTypes = {}; 

export default withStyles(styles)(SignUp);  