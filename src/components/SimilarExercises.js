import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
        <Typography variant='h3'>
          Exercises that target the same muscule group
        </Typography>
        <Stack>
          {targetMuscleExercises.lenght && <HorizontalScrollbar data = {targetMuscleExercises} /> }
        </Stack>
    </Box>
  )
}

export default SimilarExercises