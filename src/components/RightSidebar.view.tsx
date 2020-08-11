import * as React from 'react';
import { useSelector } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from 'uuid';

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

import { TagsList } from '../constants';
import { Store } from '../interface/redux/Store';
import { PageRegister } from '../PageRegister';

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
      },
    };
  });

export const RightSidebar = () => {
  const classes = useStyles()();
  const { currentName } = useSelector((store: Store) => store.localStorage);
  const data = PageRegister.find(
    x => x.title.toUpperCase() === currentName?.toUpperCase(),
  );

  process.env.NODE_ENV === 'development' &&
    console.log('dev:right: ' + currentName);

  const stepsList = [
    {
      id: '1',
      label: 'Content Type',
      icon: <FolderOpenIcon />,
      content: <Typography>{data?.type}</Typography>,
    },
    {
      id: '2',
      label: 'Updated Date',
      icon: <UpdateIcon />,
      content: (
        <Typography>
          {data?.updateDate.toISOString().split('T')[0].toString()}
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
            value={data?.stars ?? 0}
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
          {data?.tags.map(x => {
            const item = TagsList.find(
              y =>
                y.name.toUpperCase() === x.toUpperCase() ||
                y?.mergeName?.some(z => z.toUpperCase() === x.toUpperCase()),
            );
            const configAvatar = () => {
              if (item?.avatarIcon || item?.avatarStr) {
                return <Avatar>{item?.avatarIcon || item?.avatarStr}</Avatar>;
              } else if (item?.avatarUrl) {
                return <Avatar src={item?.avatarUrl} />;
              } else {
                return;
              }
            };
            const config = {
              label: item?.name ?? x,
              key: item?.uuid ?? uuidv4(),
              avatar: configAvatar(),
            };
            return <Chip {...config} />;
          })}
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
        {stepsList.map(item => (
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
