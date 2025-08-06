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
    km: '43.234',
    vol: '0 cm3',
    priv: 'RWD',
    image: tesla,
    price: `14 400$`
  },
  {
    id: 11,
    title: 'Mazda',
    model: '3 Premium',
    km: '67.774',
    vol: '2500 cm3',
    priv: 'FWD',
    image: mazda,
    price: `14 600$`
  },
  {
    id: 12,
    title: 'Cadillac',
    model: 'Escalade',
    km: '74.288',
    vol: '6200 cm3',
    priv: 'RWD',
    image: cadillac,
    price: `64 300$`
  },
  {
    id: 13,
    title: 'Kia',
    model: 'Niro',
    km: '67.808',
    vol: '1600 cm3',
    priv: 'FWD',
    image: niro,
    price: `10 700$`
  },
  {
    id: 14,
    title: 'Volvo',
    model: 'XC40',
    km: '51.648',
    vol: '2000 cm3',
    priv: 'AWD',
    image: volvo,
    price: `19 400$`
  },
  {
    id: 15,
    title: 'Lincoln',
    model: 'MKZ',
    km: '169.328',
    vol: '2000 cm3',
    priv: 'FWD',
    image: lincoln,
    price: `11 500$`
  },
  {
    id: 16,
    title: 'Volkswagen',
    model: 'Arteon',
    km: '48.704',
    vol: '2000 cm3',
    priv: 'FWD',
    image: arteon,
    price: `15 700$`
  },
  {
    id: 17,
    title: 'Lexus',
    model: 'LX 600',
    km: '14.272',
    vol: '3500 cm3',
    priv: 'AWD',
    image: lexus,
    price: `96 000$`
  },
  {
    id: 18,
    title: 'Nissan',
    model: 'Leaf',
    km: '172.159',
    vol: '0 cm3',
    priv: 'FWD',
    image: leaf,
    price: `7 800$`
  }
];
export const Usa = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Stack sx={{ m: 2.5 }}>
        <Typography variant='h3'>
          Также мы занимаемся пригоном авто из Соединеных Штатов Америки
        </Typography>
        <Typography variant='h3'> Клиенты все довольны</Typography>
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
                component='img'
                height='160'
                image={cars.image}
                alt={cars.title}
                sx={{
                  borderRadius: 5,
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {cars.title}
                </Typography>
                <Stack direction='row' spacing={1}>
                  <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                    Model: {cars.model}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {cars.km}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {cars.vol}
                  </Typography>
                  <Stack direction='row'>
                    <SettingsIcon size='small' />
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      {cars.priv}
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
                  Price: {cars.price}
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
