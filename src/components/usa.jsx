import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import {
  arteon,
  cadillac,
  leaf,
  lexus,
  lincoln,
  mazda,
  niro,
  tesla,
  volvo
} from '../assets/index';

const cars = [
  {
    id: 10,
    title: 'Tesla',
    model: 'Model 3',
    image: tesla,
    price: `14 400$`
  },
  {
    id: 11,
    title: 'Mazda',
    model: '3 Premium',
    image: mazda,
    price: `14 600$`
  },
  {
    id: 12,
    title: 'Cadillac',
    model: 'Escalade',
    image: cadillac,
    price: `64 300$`
  },
  {
    id: 13,
    title: 'Kia',
    model: 'Niro',
    image: niro,
    price: `10 700$`
  },
  {
    id: 14,
    title: 'Volvo',
    model: 'XC40',
    image: volvo,
    price: `19 400$`
  },
  {
    id: 15,
    title: 'Lincoln',
    model: 'MKZ',
    image: lincoln,
    price: `11 500$`
  },
  {
    id: 16,
    title: 'Volkswagen',
    model: 'Arteon',
    image: arteon,
    price: `15 700$`
  },
  {
    id: 17,
    title: 'Lexus',
    model: 'LX 600',
    image: lexus,
    price: `96 000$`
  },
  {
    id: 18,
    title: 'Nissan',
    model: 'LX 600',
    image: leaf,
    price: `7 800$`
  }
];
export const Usa = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Stack sx={{ m: 2.5 }}>
        <Typography variant='h3'>
          Также мы занимаемся пригоном авто из Соединеныых Штатов Америки
        </Typography>
        <Typography variant='h3' color='success'>
          {' '}
          Клиенты все довольны
        </Typography>
        <Typography variant='h5'>
          {' '}
          Связь с клиентом происходит 24/7,от начала аукциона до привоза
          автомобиля в Молдову.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {cars.map(cars => (
          <Grid item key={cars.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '350px',
                width: '350px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component='img'
                height='160'
                image={cars.image}
                alt={cars.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {cars.title}
                </Typography>
                <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                  Model: {cars.model}
                </Typography>
                <Typography variant='h5' sx={{ color: 'red', fontWeight: 700 }}>
                  Price: {cars.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 1 }}>
                <Button
                  size='medium'
                  variant='contained'
                  sx={{ borderRadius: '20px' }}
                  component='a'
                  href='tel:+37368888750'
                >
                  Позвонить
                </Button>
                <Button
                  component='a'
                  href='https://t.me/Mitioglog'
                  target='_blank'
                  rel='noopener noreferrer'
                  size='medium'
                  sx={{ color: 'tomato' }}
                >
                  Сообщение
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
