import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {fetchTweets} from '../../actions/tweetActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor : '#dfdfdf',
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    margin: '0 10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  
  onInput = (data)=> {
    this.setState({
        [data.target.name] : data.target.value
    })
    console.log(data.target.value)
  }

  fetchTweets = () => {
    this.props.fetchTweets(this.state.searchText);
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
              <img style={{width : '50px'}} src="https://ubisafe.org/images/transparent-twitter-grey-5.png"/>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              Twitter
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>      
              <Input
                name="searchText"
                placeholder="Search…"
                onChange={this.onInput}
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            
            <Button onClick={this.fetchTweets} variant="contained" className={classes.button}>
              <SearchIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null,{fetchTweets})(withStyles(styles)(Header));