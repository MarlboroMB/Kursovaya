import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { sortBy } from 'lodash-es';
import { db } from '../sample_db';

export const Home = () => {
  let allProducts = db.map((x) => x.products).flat();
  const [filter, setFilter] = useState('ratingDesc');

  if (filter === 'priceAsc') {
    allProducts = sortBy(allProducts, (x) => x.price);
  }
  if (filter === 'priceDesc') {
    allProducts = sortBy(allProducts, (x) => x.price).reverse();
  }
  if (filter === 'ratingAsc') {
    allProducts = sortBy(allProducts, (x) => x.rating);
  }
  if (filter === 'ratingDesc') {
    allProducts = sortBy(allProducts, (x) => x.rating).reverse();
  }

  const handleSorting = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#C4C4C4',
        width: '100%',
        height: '95vh',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ height: 'auto', width: 1500 }}>
        <Carousel
          dynamicHeight={false}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3500}
          showThumbs={false}
        >
          <div>
            <img src="./asus.png" alt="img1" />
          </div>
          <div>
            <img src="./nvidia.png" alt="img2" />
          </div>
          <div>
            <img src="./gigabyte.png" alt="img3" />
          </div>
          <div>
            <img src="./gigabyte.png" alt="img4" />
          </div>
        </Carousel>
      </div>

      <div style={{ paddingLeft: 35 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 150,
            alignItems: 'center',
            gap: 35,
          }}
        >
          <h2>Товары</h2>
          <FormControl sx={{ width: 550 }}>
            <InputLabel id="sortingSelect" variant="standard">
              Сортировка
            </InputLabel>
            <Select defaultValue={'ratingDesc'} onChange={handleSorting}>
              <MenuItem value={'ratingDesc'}>По убыванию рейтинга</MenuItem>
              <MenuItem value={'ratingAsc'}>По возрастанию рейтинга</MenuItem>
              <MenuItem value={'priceAsc'}>По возрастанию цены</MenuItem>
              <MenuItem value={'priceDesc'}>По убыванию цены</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 35 }}>
          {allProducts.map((product) => (
            <Card
              sx={{
                width: 225,
                height: 'auto',
                backgroundColor: '#757575',
                display: 'flex',
                flexDirection: 'column',
              }}
              key={product.name}
            >
              <CardContent>
                <Typography sx={{ textAlign: 'center' }}>{product.name}</Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ textAlign: 'center' }}>{product.rating}</Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ textAlign: 'center' }}>{product.description}</Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ textAlign: 'center' }}>{product.price}$</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
};
