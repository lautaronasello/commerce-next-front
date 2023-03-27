'use client';

import {
  ShoppingBagOutlined,
  ShoppingBasketOutlined,
} from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link.js';
import React from 'react';

const arrayLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Nosotros',
    href: '/about',
  },
];

export default function Navbar({ toggleDrawer }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        direction='row'
        spacing={5}
        sx={{
          borderBottom: '1px solid black',
          m: '2rem',
          px: '3rem',
          py: '1rem',
        }}
      >
        {arrayLinks.map((data) => {
          return (
            <Link href={data.href} key={data.href}>
              <Typography variant='body1'>{data.label}</Typography>
            </Link>
          );
        })}
        <ShoppingBagOutlined
          onClick={toggleDrawer}
          sx={{
            '&:hover': {
              cursor: 'pointer',
              color: theme.palette.grey,
            },
          }}
        />
      </Stack>
    </Box>
  );
}
