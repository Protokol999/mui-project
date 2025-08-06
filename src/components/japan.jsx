import SettingsIcon from '@mui/icons-material/Settings';

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
      km: '75.000',
      vol: '2000 cm3',
      priv: 'RWD',
      image: bmw,
      price: `19 800$`
    },
    {
      id: 2,
      title: 'Audi',
      model: 'A6',
      km: '66.000',
      vol: '2000 cm3',
      priv: 'FWD',
      image: audi,
      price: `20 500$`
    },
    {
      id: 3,
      title: 'Mercedes',
      model: 'E220',
      km: '30.000',
      vol: '2200 cm3',
      priv: 'RWD',
      image: mercedes,
      price: `24 000$`
    },
    {
      id: 4,
      title: 'Porsche',
      model: '911',
      km: '40.000',
      vol: '4400 cm3',
      priv: 'AWD',
      image: porsche,
      price: `60 500$`
    },
    {
      id: 5,
      title: 'Aston Martin',
      model: 'Vantage',
      km: '15.000',
      vol: '3000 cm3',
      priv: 'RWD',
      image: aston,
      price: `50 500$`
    },
    {
      id: 6,
      title: 'Renault',
      model: 'Samsung',
      km: '110.000 ',
      vol: '1500 cm3',
      priv: 'FWD',
      image: samsung,
      price: `10 900$`
    },
    {
      id: 7,
      title: 'Hyundai',
      model: 'SantaFe',
      km: '66000',
      vol: '2200 cm3',
      priv: 'AWD',
      image: santafe,
      price: `26 900$`
    },
    {
      id: 8,
      title: 'Hyundai',
      model: 'Tucson',
      km: '85.000',
      vol: '1600 cm3',
      priv: 'FWD',
      image: tucson,
      price: `20 500$`
    },
    {
      id: 9,
      title: 'Kia',
      model: 'K5',
      km: '95.000',
      vol: '1800 cm3',
      priv: 'AWD',
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
        <Typography variant='h3'>
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
                borderRadius: 2,
                height: '400px',
                width: '350px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '2px 2px 8px 2px rgba(0,0,0,0.5)',
                p: 2,
                cursor: 'pointer'
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: 5,
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
                component='img'
                height='160'
                image={car.image}
                alt={car.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {car.title}
                </Typography>
                <Stack direction='row' spacing={1}>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Model: {car.model}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {car.km}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {car.vol}
                  </Typography>
                  <Stack direction='row'>
                    <SettingsIcon size='small' />
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      {car.priv}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'tomato',
                    '&:hover': {
                      color: 'coral',
                      transition: '0.4s'
                    },
                    fontWeight: 700
                  }}
                >
                  Price: {car.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 1 }}>
                <Button
                  size='medium'
                  variant='contained'
                  sx={{
                    borderRadius: '30px',
                    backgroundColor: 'tomato',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'tomato',
                      transition: '0.4s ease'
                    }
                  }}
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
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'tomato',
                      transition: '0.6s ease'
                    }
                  }}
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
