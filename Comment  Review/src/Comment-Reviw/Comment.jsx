import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value.toString()]}`;
}

export default function Comment() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Box sx={{ width: 300, margin: '0 auto', textAlign: 'center' }}>
      {/* Heading above the box */}
      <h2 style={{ marginBottom: '16px', fontWeight: 'bold', color: '#1976d2' }}>
        Comment Review
      </h2>

      {/* Box with background */}
      <Box
        sx={{
          backgroundColor: '#e3f2fd',
          padding: 3,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          size="large"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2, fontWeight: 'bold' }}>
            {labels[(hover !== -1 ? hover : value).toString()]}
          </Box>
        )}
      </Box>
    </Box>
  );
}
