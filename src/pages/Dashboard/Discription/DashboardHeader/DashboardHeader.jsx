import { Stack } from '@mui/material'
import React from 'react'
import Notifications from './Notifications';
import SearchBar from './SearchBar';

function DashboardHeader() {
  return (
    <Stack
    spacing={4}
    direction="row"
    justifyContent="end"
    mx={1}
    bgcolor="#F8F7F1"
    pr="4px"
    >
        <Notifications />
        <SearchBar />

    </Stack>
  )
}

export default DashboardHeader;