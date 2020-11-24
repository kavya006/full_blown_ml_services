import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './MarkDown.css';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, Typography, ListItemIcon} from '@material-ui/core';
import {Card, CardActionArea, CardContent, Grid} from '@material-ui/core';
// import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';
import {AddCircle} from '@material-ui/icons';

const MarkDown = props => {
    
    const {classes, cardText} = props;
    // entry: {title, description, updates}
    
    const entries = readMarkdown(cardText); 
    
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {entries.map
                ((entry, id) => (
                    <Grid item  key={id} md={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" align='left' >
                                        {entry.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" align='left'>
                                        {entry.description.join('\n')}
                                    </Typography>
                                    <List>
                                        {entry.updates.map((update, id) => (
                                            <ListItem key={id}>
                                                <ListItemIcon><AddCircle /></ListItemIcon>
                                                <Typography>{update}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

MarkDown.defaultProps = {}; 

MarkDown.propTypes = {}; 

export default withStyles(styles)(MarkDown);


const readMarkdown = (text) => {
    if (text.length === 0) return [{title: '', description: [], updates: []}]; 
    let lines = text.replace(/\u21b5/g,'\n').split("\n").map(line => line.trim()).filter(line => line.length !== 0);
    const cardText = []; 
    let i = 0; 
    let entry = {title: '', description: [], updates: []}; 
    
    while (i < lines.length) {
        
        if (lines[i].startsWith('##')) {// header
            if (entry.title.length === 0) {
                entry.title = lines[i].substring(2).trimLeft(); 
            } else {
                cardText.push(entry); 
                entry = {title: lines[i].substring(2).trimLeft(), description: [], updates: []}; 
            }
        }
        else if (lines[i].startsWith('*')) {
            entry.updates.push(lines[i].substring(1).trimLeft()); 
        } else {
            entry.description.push(lines[i]); 
        }
        i += 1; 
    }
    if (entry.title.length !== 0)
        cardText.push(entry);
    
    return cardText; 
}