import { Box, Drawer } from '@mui/material';
import useSWR from 'swr';
import React, { Suspense, useEffect, useState } from 'react';

export function CartDrawer({ isOpenDrawer, toggleDrawer, dataProducts }) {
  return (
    <Drawer anchor={'right'} open={isOpenDrawer} onClose={toggleDrawer}>
      <Box>
        hola
        {/* {data.items.map((data) => {
          return (
            <Box key={data._id}>
              {data.name} - {data.price}
            </Box>
          );
        })} */}
      </Box>
    </Drawer>
  );
}
