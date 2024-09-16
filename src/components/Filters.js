import React from 'react';

import { FormControl, Slider, TextField, Typography } from '@mui/material';

const Filters = ({ setFilters, filters }) => {

  const handleChange = (name) => (event, newValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: newValue !== undefined ? newValue : event.target.value,
    }));
  };


  return (
    <FormControl fullWidth >
      <div className='slider'>
        <Typography id="input-slider" gutterBottom>
          Experience
        </Typography>
        <Slider
          aria-label="Min Experience"
          value={filters.minExperience}
          onChange={handleChange('minExperience')}
          valueLabelDisplay="auto"
          shiftStep={3}
          step={1}
          marks
          min={0}
          max={10}
        />
      </div>
      {/* <div className='slider'>
        <Typography id="input-slider" gutterBottom>
          Min Base pay
        </Typography>
        <Slider
          aria-label="Min Experience"
          value={filters.minExperience}
          onChange={handleChange('minExperience')}
          valueLabelDisplay="auto"
          shiftStep={3}
          step={1}
          marks
          min={0}
          max={100000}
        />
      </div> */}

        <TextField
          id="company-name"
          label="Search company name"
          placeholder="Search company name"
          value={filters.companyName}
          onChange={handleChange('companyName')}
        />
        <TextField
          id="location"
          label="Search location"
          placeholder="Search location"
          value={filters.location}
          onChange={handleChange('location')}
        />
        <TextField
          id="role"
          label="Search role"
          placeholder="Search role"
          value={filters.role}
          onChange={handleChange('role')}
        />

    </FormControl>
  );
};

export default Filters;
