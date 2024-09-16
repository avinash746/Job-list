import React from 'react';
import _ from 'lodash';
import { Card, CardContent, Typography, Button, CardActionArea, CardMedia, CardActions, Chip } from '@mui/material';

const JobCard = ({ job, index }) => {
  return (
    <Card className="job-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={job.logoUrl}
            alt="green iguana"
          />
          <CardContent>
            <h3>{index}</h3>
            <Typography gutterBottom variant="h5" component="div">
              {job.jobTitle}
            </Typography>
            <Typography variant="subtitle1">{job.companyName}</Typography>
            {/* <Typography variant="body1">{job.location}</Typography> */}
            <Chip label={_.startCase(job.location)} />
            <Typography variant="body2">{job.jobDetailsFromCompany}</Typography>
            <Typography variant="body2">Experience: {job.minExp} - {job.maxExp} years</Typography>
            <Typography variant="body2">Role: {job.jobRole}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={job.jdLink} target="_blank" rel="noopener noreferrer" size="small" color="primary">Apply</Button>
        </CardActions>
      </Card>
    </Card>
  );
};

export default JobCard;
