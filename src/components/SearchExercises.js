import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const handleSearch = async () => {
    if(search){
     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
     exercisesOptions);

     console.log(exercisesData);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercise You <br /> Shoud Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx ={{
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff', 
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exrcises"
          type="text"
        />
        <Button className="search-btn"
          sx ={{
            bgcolor: '#FF2625', 
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px', 
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises