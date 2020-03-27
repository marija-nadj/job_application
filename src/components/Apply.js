import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Box, Avatar,List, ListItem, ListItemText, ListItemIcon, Typography} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import webdev from '../webdev.png';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';

export class Apply extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {

        return (
          <>
          <Box component="div">
            <Avatar src={webdev} alt="webdev"/>
          </Box>
          <Box component="nav">
              <AppBar position="static" style={{ background: "#f44336" }}>
                <Typography variant="h5" style={{ color: "#212121" }}>
                      Frontend Developer
                    </Typography>
            </AppBar>
            <Divider/>
            <List>
              <ListItem>
                  <ListItemText primary="Tasks:"/>
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Prototyping as well as developing innovative, complex web development projects are part of your main responsibilities."/>
              </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You work within interdisciplinary, agil teams with experts for User Experience, User Interface, Backend and Testing." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You develop state-of-the-art user interfaces with reference to browser support and performance." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="By testing and observing new technologies or methods you develop our processes and team collaboration."/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Work closely with product owners to estimate and prioritize backlog" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Maintain and constantly improve our products, code and architecture" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Requirements:" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You can demonstrate at least two years of experience in frontend development and your knowledge of the basics like HTML and modular CSS." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You're experienced in the use of JavaScript as well as JavaScript frameworks (like Angular, React, Vue.js)." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="At best you have already knowledge in SCSS/SASS."/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You care deeply about quality, usability, cross-browser compatibility and accessibility" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="You have worked with git as a versioning system" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Autonomy, team spirit and great willingness to learn are one of your key characteristics." />
                </ListItem>
            </List>
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Apply</Button>
            </Box>
            </>
        );
        }
}

export default Apply
