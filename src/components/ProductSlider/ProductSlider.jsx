import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image.js';
import {
  KeyboardArrowLeftTwoTone,
  KeyboardArrowRightTwoTone,
} from '@mui/icons-material';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowRightTwoTone
      className={className}
      style={{ ...style, display: 'block', color: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowLeftTwoTone
      className={className}
      style={{ ...style, display: 'block', color: 'black' }}
      onClick={onClick}
    />
  );
}

export const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ mt: 0 }}>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ p: 2 }}>
            {/* <Grid container direction='column' alignItems='center'> */}
            <Paper>
              <Image
                width={50}
                height={50}
                src={product.image}
                alt={product.name}
              />
              <Typography variant='subtitle1' sx={{ mt: 2 }}>
                {product.name}
              </Typography>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                {product.price}
              </Typography>
            </Paper>
            {/* </Grid> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
