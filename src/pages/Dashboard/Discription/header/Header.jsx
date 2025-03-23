import { Stack } from '@mui/material'
import React from 'react'
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import UserMenu from '../../../../components/UserMenu';

function DashboardHeader() {
  return (
    <Stack
    spacing={4}
    direction="row"
    justifyContent="end"
    alignItems="center"
    mx={1}
    bgcolor="#F8F7F1"
    pr="1px"
    >
        <UserMenu />
        <Notifications />
        <SearchBar />

    </Stack>
  )
}

export default DashboardHeader;