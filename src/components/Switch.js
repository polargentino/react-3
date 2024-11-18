import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CustomSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleChange = (event) => {
    setIsOn(event.target.checked);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h6">
        {isOn ? "Busco" : "Empleo"}
      </Typography>
      <Switch checked={isOn} onChange={handleChange} color="primary" />
    </Box>
  );
}

