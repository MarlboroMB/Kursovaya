import { Card, CardContent, Typography, Box } from '@mui/material';
import { db } from '../sample_db';

export const Categories = ({ setCurrentTab }) => {
  const CategoriesCards = db.map((categoryItem) => (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}
      key={categoryItem.categoryId}
    >
      <Card
        sx={{
          width: 175,
          height: 200,
          paddingRight: 5,
          backgroundColor: '#757575',
          paddingBottom: 5,
          display: 'flex',
          flexDirection: 'row',
        }}
        onClick={() => {
          setCurrentTab(categoryItem.categoryId);
        }}
      >
        <CardContent>image</CardContent>
      </Card>
      <Typography sx={{ textAlign: 'center' }}>
        {categoryItem.categoryName.toUpperCase()}
      </Typography>
    </Box>
  ));
  return <>{CategoriesCards}</>;
};
