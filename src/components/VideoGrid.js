import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const videoUrls = [
  'https://www.youtube.com/embed/_53LxKkKNy8?si=wskp4CpUhwbb2L0B',
  'https://www.youtube.com/embed/V8hIlJt0lDY?si=t32O9xAud7s3w8jA',
  'https://www.youtube.com/embed/7CW_uwp1XVw?si=imsdVQrYwpAuabgW',
  'https://www.youtube.com/embed/Zm_O9WNx0R0?si=CXYeaUIyzQDogQEB',
  'https://www.youtube.com/embed/2_5D5Mngrfw?si=P_yf-dJKBndDiRvG',
  'https://www.youtube.com/embed/fn5DP69g11g?si=3MmMF7LIDx2H6OrS',
];

const VideoGrid = () => {
  return (
    <Box sx={{ width: 500, marginLeft: 4 }}>
      <Grid container spacing={2}>
        {videoUrls.map((url, index) => (
          <Grid item xs={6} key={index}>
            <Box
              component="iframe"
              src={url}
              width="100%"
              height="150px"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoGrid;
