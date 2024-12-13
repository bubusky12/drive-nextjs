"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const Header = () => {
    return (
        <AppBar position='static' style={{ background: '#fff', color: '#000' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Drive Saya
                </Typography>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <SearchIcon />
                    <InputBase placeholder='Search' style={{ marginLeft: '10px' }} />
                </div>
                <Avatar alt='User' src="http://agtest.agakcw.my.id/aga.png" />
                <Link href="/login" style={{ marginLeft: '15px', color: '#000', textDecoration: 'none' }}>
                    Login
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
