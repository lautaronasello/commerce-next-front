import React, { Suspense, useEffect, useState } from 'react';
import { axiosRequest } from '../axiosRequest.js';
import { CartDrawer } from './Drawer/CartDrawer.jsx';
import Navbar from './Navbar/Navbar.jsx';

export default function Layout({ children }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpenDrawer(!isOpenDrawer);
  };

  const fetchData = async () => {
    const res = await axiosRequest('http://localhost:5000/cart', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBkZjdkMjdiYjY1YmFjNjI0ODk5ZmUiLCJpYXQiOjE2Nzg2NDU5MzR9.iXj885bvE_avJiFUagq7CexkDxVtStMhnMor9lDwNKQ',
      },
    });
    console.log('algo: ', res.data.items);
    setDataProducts(res.data);
  };

  useEffect(() => {
    if (isOpenDrawer) {
      fetchData();
    }
  }, [isOpenDrawer]);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      {children}
      <CartDrawer
        isOpenDrawer={isOpenDrawer}
        toggleDrawer={toggleDrawer}
        dataProducts={dataProducts}
      />
    </>
  );
}
