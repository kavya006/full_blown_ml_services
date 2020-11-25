import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './MarkDown.css';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, Typography, ListItemIcon, Divider} from '@material-ui/core';
import {Card, CardActionArea, CardContent, Grid} from '@material-ui/core';
// import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';
import {AddCircle, Mood, Update, Contacts, GolfCourse} from '@material-ui/icons';

const MarkDown = props => {
    
    const {classes, cardText, title} = props;
    // entry: {title, description, updates}
    
    const entries = readMarkdown(cardText); 
    if (entries.length === 0) {
        return (
            <div className={classes.root}>
                <Grid container style={{height: '100%'}} spacing={2} alignItems='center' justify='center'>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant='h5'>Awww... Nothing to show here</Typography><Mood fontSize='large'/>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </div>
        )
    }
    const keys = [{name: 'Assignees:', Icon: Contacts, size: 3}, 
    {name: 'Milestone:', Icon: GolfCourse, size: 5}, {name: 'Update:', Icon: Update, size: 4}];

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant='h5' align='left' style={{color: 'white'}}>{title}</Typography>
                    <Divider style={{color: 'white'}}/>
                </Grid>
                {entries.map
                ((entry, id) => (
                    <Grid item  key={id} md={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" align='left' >
                                        {entry.title}
                                    </Typography>
                                    <Grid container>
                                        {entry.description.map((text, id) => {
                                            const obj = {desc: '', Icon: AddCircle, size: 2};
                                            for (var key of keys){ 
                                                if (text.startsWith(key.name)){
                                                    obj.desc = text.substring(key.name.length).trimLeft();
                                                    obj.Icon = key.Icon;
                                                    obj.size = key.size; 

                                                    return( 
                                                        <Grid item key={id} md={obj.size} style={{display: 'flex'}}>
                                                            {<obj.Icon  className={classes.icon}/>}
                                                            <Typography variant="subtitle2" color="textSecondary" align='left'>
                                                                {obj.desc}
                                                            </Typography>
                                                        </Grid>
                                                    )
                                                }
                                            }
                                            return <Typography key={id} variant="subtitle2" color="textSecondary" align='left'>{text}</Typography>;                                         
                                        })}
                                    </Grid>
                                    <List>
                                        {entry.updates.map((update, id) => (
                                            <ListItem key={id}>
                                                <ListItemIcon style={{minWidth: 0, marginRight: 8}}><AddCircle /></ListItemIcon>
                                                <Typography variant='body2'>{update}</Typography>
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
    if (text.length === 0) return []; 
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
            i += 1; 
        }
        while (i < lines.length && !lines[i].startsWith('*') && !lines[i].startsWith('##')) {
            entry.description.push(lines[i]); 
            i += 1; 
        }
        
        while (i < lines.length && !lines[i].startsWith('##')) {
            if (lines[i].startsWith('*'))
                entry.updates.push(lines[i].substring(1));
            i += 1; 
        }
    }
    if (entry.title.length !== 0)
        cardText.push(entry);
    
    return cardText; 
}