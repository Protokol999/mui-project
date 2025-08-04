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
  aston,
  audi,
  bmw,
  kia,
  mercedes,
  porsche,
  samsung,
  santafe,
  tucson
} from '../assets/index';

export const Japan = () => {
  const Cards = [
    {
      id: 1,
      title: 'Bmw',
      model: '340I',
      image: bmw,
      price: `19 800$`
    },
    {
      id: 2,
      title: 'Audi',
      model: 'A6',
      image: audi,
      price: `20 500$`
    },
    {
      id: 3,
      title: 'Mercedes',
      model: 'E220',
      image: mercedes,
      price: `24 000$`
    },
    {
      id: 4,
      title: 'Porsche',
      model: '911',
      image: porsche,
      price: `60 500$`
    },
    {
      id: 5,
      title: 'Aston Martin',
      model: 'Vantage',
      image: aston,
      price: `50 500$`
    },
    {
      id: 6,
      title: 'Renault',
      model: 'Samsung',
      image: samsung,
      price: `10 900$`
    },
    {
      id: 7,
      title: 'Hyundai',
      model: 'SantaFe',
      image: santafe,
      price: `26 900$`
    },
    {
      id: 8,
      title: 'Hyundai',
      model: 'Tucson',
      image: tucson,
      price: `20 500$`
    },
    {
      id: 9,
      title: 'Kia',
      model: 'K5',
      image: kia,
      price: `15 500$`
    }
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Stack sx={{ m: 2.5 }}>
        <Typography variant='h3'>
          Мы занимаемся пригоном авто из Южной Кореи
        </Typography>
        <Typography variant='h3' color='success'>
          {' '}
          У нас уже более 300 довольных клинетов
        </Typography>
        <Typography variant='h5'>
          {' '}
          Снизу предстваленны наши часто желаемые клиентами автомобили
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {Cards.map(car => (
          <Grid item key={car.id} xs={12} sm={6} md={4}>
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
                image={car.image}
                alt={car.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {car.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Model: {car.model}
                </Typography>
                <Typography variant='h5' sx={{ color: 'red', fontWeight: 700 }}>
                  Price: {car.price}
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
