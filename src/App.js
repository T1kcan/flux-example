import React, { Component } from 'react';
import './App.css'
import { style } from './style'
import LeftNav from './left-nav'
import MainContent from './main-content'
import Toolbar from './toolbar'

const panel = {
  margin: 5,
  padding: 5,
  overflowY: 'auto',
  border: '1px solid #333',
  borderRadius: '3px'
}

const sheet = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
  },
  toolbar: {
    display: 'flex',
    flex: '0 0 50px',
    padding: '0 10px',
  },
  body: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftNav: {
    ...panel,
    flex: '0 0 250px',
  },
  mainContent: {
    flex: '1 1 auto',
    ...panel,
  }
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.toolbar}>
          <Toolbar />
        </div>
        <div className={classes.body}>
          <div className={classes.leftNav}>
            <LeftNav />
          </div>
          <div className={classes.mainContent}>
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default style(sheet)(App);
