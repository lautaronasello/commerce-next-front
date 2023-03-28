import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ProductSlider } from '../components/ProductSlider/ProductSlider.jsx';

export default function Home() {
  const theme = useTheme();

  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$29.99',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$39.99',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$39.99',
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$39.99',
    },
    {
      id: 6,
      name: 'Product 6',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$39.99',
    },
    {
      id: 7,
      name: 'Product 7',
      image: 'https://source.unsplash.com/300x200/?product',
      price: '$39.99',
    },
    // add more products as needed
  ];
  return (
    <>
      <Head>
        <title>Titabe - Inicio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Container maxWidth='lg'>
          <ProductSlider products={products} />
        </Container>
        <Stack
          direction={{ xs: 'column', xl: 'row' }}
          spacing={5}
          justifyContent='center'
          alignItems='center'
          divider={
            <Divider
              orientation={{ xs: 'horizontal', xl: 'vertical' }}
              flexItem
            />
          }
        >
          <Box
            sx={{
              justifyContent: 'flex-start',
              display: 'flex',
              color: theme.palette.primary.main,
              bgcolor: theme.palette.secondary.main,
              px: '15px',
            }}
          >
            <Typography variant='h1' fontWeight={700} fontSize='190px'>
              TITABE
            </Typography>
          </Box>
          <Box sx={{ minWidth: '50%' }}>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              explicabo, eaque placeat omnis, soluta ipsa architecto iste neque
              labore eos reprehenderit dolore et dignissimos at consequuntur
              saepe necessitatibus ullam cupiditate!
            </Typography>
          </Box>
        </Stack>
      </main>
    </>
  );
}
