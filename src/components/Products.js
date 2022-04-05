import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { db } from '../sample_db';
import { sortBy } from 'lodash-es';

export const Products = ({ catId }) => {
  const productCategory = db.find((x) => x.categoryId === catId);
  let products = productCategory.products;
  const [filter, setFilter] = useState('ratingDesc');

  if (filter === 'priceAsc') {
    products = sortBy(products, (x) => x.price);
  }
  if (filter === 'priceDesc') {
    products = sortBy(products, (x) => x.price).reverse();
  }
  if (filter === 'ratingDesc') {
    products = sortBy(products, (x) => x.rating).reverse();
  }
  if (filter === 'ratingAsc') {
    products = sortBy(products, (x) => x.rating);
  }

  const handleSorting = (event) => {
    setFilter(event.target.value);
  };
  const ProductsCards = products.map((product) => (
    <Card
      sx={{
        width: 1250,
        height: 200,
        backgroundColor: '#757575',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
      key={product.id}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height: '100%',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ width: 250 }}>
            <CardContent sx={{ display: 'flex', alignContent: 'center' }}>
              <Typography>Image</Typography>
            </CardContent>
          </div>
          <div>
            <CardContent>
              <Typography sx={{ textAlign: 'center', fontSize: 25, fontWeight: 4 }}>
                {product.name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ textAlign: 'center', fontWeight: 3 }}>
                ({product.description})
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 15, fontWeight: 3, height: 50, width: 100 }}>
                Рейтинг: {product.rating}/5
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingRight: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        <CardContent>
          <Typography sx={{ textAlign: 'center', fontWeight: 3, fontSize: 30 }}>
            {product.price}$
          </Typography>
        </CardContent>
        <Button variant="contained" sx={{ color: 'white', backgroundColor: 'black' }}>
          Купить
        </Button>
      </div>
    </Card>
  ));
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              paddingTop: 4,
            }}
          >
            <h2
              style={{
                height: 30,
              }}
            >
              {db[catId].categoryName.toUpperCase()}
            </h2>
          </Typography>
          <FormControl sx={{ width: 1000, margin: 5 }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{ProductsCards}</div>
      </div>
    </>
  );
};
