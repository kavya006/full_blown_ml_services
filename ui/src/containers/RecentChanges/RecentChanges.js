import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'; 
import styles from './RecentChanges.css';
import {withStyles} from '@material-ui/core/styles';
import {MarkDown} from '../../components'; 
import {Divider, Grid, Paper, Typography} from '@material-ui/core'; 

const RecentChanges = props => {
    const [changeLogText, setChangeLogText] = useState(''); 
    const [futureLogText, setFutureLogText] = useState('');
    const [bugReportText, setBugReportText] = useState(''); 

    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch("https://raw.githubusercontent.com/kavya006/full_blown_ml_services/main/CHANGELOG.md", requestOptions)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const decoder = new TextDecoder('utf-8');
            let result = decoder.decode(buffer); 
            return setChangeLogText(result);
        })
        .catch(error => console.log('error', error));

        fetch("https://raw.githubusercontent.com/kavya006/full_blown_ml_services/main/FUTURE.md", requestOptions)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const decoder = new TextDecoder('utf-8');
            const result = decoder.decode(buffer); 
            return setFutureLogText(result);
        })
        .catch(error => console.log('error', error));

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/vnd.github.v3+json");

        requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.github.com/repos/kavya006/full_blown_ml_services/issues?labels=bug&state=open&sort=updated", requestOptions)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const decoder = new TextDecoder('utf-8');
            const result = decoder.decode(buffer); 
            return setBugReportText(parseBugReport(result));
        })
        .catch(error => console.log('error', error));

    }, []);

    const {classes} = props;
 

    return (
        <section className={classes.root} aria-label='recent_changes'>
            <Grid container justify='space-evenly' spacing={0}>
                <Grid item md={12} >
                    <Typography variant='h4'>Our website is continuously improving...</Typography>
                </Grid>
                <Grid item md={8}><Divider className={classes.divider}/></Grid>
                <Grid container alignItems='flex-start'>
                    <Grid item xs={12} sm={12} md={6} className={classes.outerPaper}>
                        <Grid container direction='column' spacing={2} justify='flex-start'>
                            <Grid item md={12}>
                                {/* <Typography variant='h5'>Bug Report: </Typography> */}
                                <Paper className={classes.paper2}>
                                    <MarkDown cardText={bugReportText} title='Bug Report:' />
                                </Paper>
                            </Grid>
                            <Grid item md={12}>
                                {/* <Typography variant='h5'>Future Work: </Typography> */}
                                <Paper className={classes.paper2}>
                                    <MarkDown cardText={futureLogText} title='Future Work:'/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.outerPaper}>
                        {/* <Typography variant='h5'>Recent Releases: </Typography> */}
                        <Paper className={classes.paper}>
                            <MarkDown cardText={changeLogText}  title='Recent Releases: '/>
                        </Paper>
                    </Grid>
                </Grid>    
            </Grid>
        </section>
    );
};

RecentChanges.defaultProps = {}; 

RecentChanges.propTypes = {}; 

export default withStyles(styles)(RecentChanges);

const parseBugReport = bugs => {
    if (bugs.length === 0) return []; 
    bugs = JSON.parse(bugs); 

    const cardText = bugs.map(bug => (
        `## ${bug.title}\n Assignees: ${bug.assignees.map(assignee => assignee.login).join(', ')} 
        \n Milestone: ${bug.milestone.title} (${bug.milestone.closed_issues}/${bug.milestone.open_issues})
        \n Update: ${new Date(bug.updated_at).toDateString()}
        \n${bug.body}`
        )
    ).join('\n'); 

    return cardText; 
    
}