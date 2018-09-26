import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import blue from '@material-ui/core/colors/blue';
// import Notifier, { openSnackbar } from '../partials/Notifier';
// import validator from 'validator';
// import { Link } from "react-router-dom";

// import { login } from '../../ApiHandlers/Api';

// import ForgotPassModal from './ForgotPassModal';
const styles = () => ({
    margin: {
        margin: theme.spacing.unit,
    }
});

const theme = createMuiTheme({
    typography: {
        fontFamily: ["Swiss721LightExtendedBT"].join(','),
    },
    overrides: {
        MuiTypography: {
            body1: {
                color: '#6f6f6f'
            }
        }
    }
});

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        };
    }
    

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    showNotifier = (event) => {
        event.preventDefault();
        openSnackbar({ message: 'Empty field. Enter a number.' });
    }


    handleClick = (e) => {
        let uname = document.getElementsByTagName('input')[0].value;
        const pass = document.getElementsByTagName('input')[1].value;


    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        if (!username || !password) {
            openSnackbar({ message: 'Fields Cannot be empty.' });
            e.preventDefault();
            return;
        }

        if (!validator.isEmail(username)) {
            openSnackbar({ message: 'Email is not in valid format' });
            e.preventDefault();
            return;
        }

        login(username, password).then(d => {
            console.log(d);
        }).catch(err => {
            openSnackbar({ message: err });
        })

    }

    render() {
        return (
            <div className="container">
                <div className="label">
                    <h2>SKRIBE</h2>
                    <p>Please login to your account</p>
                </div>
                <div className="">
                    <form className="loginform" method="POST" onSubmit={this.handleSubmit}>
                        <TextField
                            name="username"
                            placeholder="Username / Email"
                            className="loginform__input"
                            id="username"
                            onChange={this.insertUserName}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="loginform__input"
                            id="password"
                            onChange={this.insertPassword}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <div className="loginform__controls">
                            <MuiThemeProvider theme={theme}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Remember Me"
                                />
                            </MuiThemeProvider>
                            <a className="forgotpass" onClick={this.handleClickOpen} >Forgot Password</a>
                        </div>
                        {/* <ForgotPassModal
                            open={this.state.open}
                            onClose={this.handleClose}
                        /> */}
                        <div className="loginform__buttons">
                            <button type="submit" className="loginbutton">Let me in</button>
                            {/* <Link to="/signup" className="loginbutton signup">Sign Up</Link> */}
                        </div>
                    </form>
                </div>
                {/* <Notifier /> */}
            </div>
        );
    }
}


Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);