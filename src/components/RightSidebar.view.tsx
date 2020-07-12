import * as React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import {
  Avatar,
  Chip,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarsIcon from '@material-ui/icons/Stars';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = (props?: any) =>
  makeStyles(theme => {
    const stepHeight = 80;
    return {
      rightSidebarRoot: {
        '& .MuiStepConnector-lineVertical': {
          height: stepHeight,
        },
        '& .MuiStepConnector-vertical': {
          padding: 0,
        },
      },
      rightSidebarContent: {
        paddingLeft: 30,
        height: 0,
        '& #content': {
          height: stepHeight,
          paddingLeft: 5,
          paddingTop: 10,
        },
      },
      stars: {
        '& .dv-star-rating': {
          transform: 'scale(2)',
          transformOrigin: '0 0',
          // zoom: '300%',
        },
      },
      tags: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiChip-root': {
          margin: 3,
          backgroundColor: '#EEEEEE',
        },
        '& .MuiChip-avatar': {
          backgroundColor: '#CCCCCC',
        },
      },
    };
  });

export const RightSidebar = () => {
  const classes = useStyles()();
  const stepsList = [
    {
      id: '1',
      label: 'Content Type',
      attr: 'type',
      icon: <FolderOpenIcon />,
      content: <Typography>Blog</Typography>,
    },
    {
      id: '2',
      label: 'Updated Date',
      attr: 'updateDate',
      icon: <UpdateIcon />,
      content: (
        <Typography>
          {new Date('2020/07/13').toISOString().split('T')[0].toString()}
        </Typography>
      ),
    },
    {
      id: '3',
      label: 'Rating',
      attr: 'stars',
      icon: <StarsIcon />,
      content: (
        <div className={classes.stars}>
          <StarRatingComponent
            name='stars'
            value={4}
            starCount={5}
            starColor='#FF8E53'
            emptyStarColor='#DDDDDD'
            editing={false}
          />
        </div>
      ),
    },
    {
      id: '4',
      label: 'Related Tags',
      attr: 'tags',
      icon: <EventNoteIcon />,
      content: (
        <div className={classes.tags}>
          <Chip avatar={<Avatar>R</Avatar>} label='React.js' />
          <Chip
            avatar={
              <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
            }
            label='React.js'
          />
          <Chip
            avatar={
              <Avatar>
                <StarsIcon />
              </Avatar>
            }
            label='React.js'
          />
          <Chip label='React.js' />
          <Chip label='Reaaaaaaaaaaaaaact.js' />
          <Chip avatar={<Avatar>R</Avatar>} label='Reaaaaaaaaaaaaaact.js' />
          <Chip avatar={<Avatar>R</Avatar>} label='Reaaaaaaaaaaaaaact.js' />
          <Chip avatar={<Avatar>R</Avatar>} label='Reaaaaaaaaaaaaaact.js' />
        </div>
      ),
    },
  ];
  new Array(7).fill(0).forEach(x => {
    const placeHolder = {
      id: '',
      label: '',
      attr: '',
      icon: <> </>,
      content: <> </>,
    };
    stepsList.push(placeHolder);
  });
  return (
    <div className={classes.rightSidebarRoot}>
      <Stepper activeStep={3} orientation='vertical'>
        {stepsList.map((item, index) => (
          <Step key={item.id}>
            <StepLabel icon={item.icon}>{item.label}</StepLabel>
            <div className={classes.rightSidebarContent}>
              <div id='content'>{item.content}</div>
            </div>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
