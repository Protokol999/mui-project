import SettingsIcon from '@mui/icons-material/Settings';
import TelegramIcon from '@mui/icons-material/Telegram';
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
      {/* Текстовый блок с описанием */}
      <Stack spacing={3} mb={5} maxWidth={720} mx='auto' textAlign='center'>
        <Typography variant='h3' fontWeight={700} sx={{ color: 'tomato' }}>
          Пригон автомобилей из США с максимальной заботой о клиентах
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          fontSize={18}
          lineHeight={1.6}
        >
          Мы обеспечиваем полную поддержку на каждом этапе: от участия в
          аукционе до доставки автомобиля в Молдову. Связь с клиентом
          поддерживается круглосуточно, чтобы вы всегда были в курсе состояния
          вашей покупки.
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          fontSize={18}
          lineHeight={1.6}
        >
          Наш опыт позволяет гарантировать:
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='center'
          spacing={{ xs: 2, sm: 6 }}
          flexWrap='wrap'
        >
          {[
            '✔ Прозрачность и честность на всех этапах',
            '✔ Подбор авто с учетом ваших требований и бюджета',
            '✔ Полное оформление и доставка без хлопот',
            '✔ Персональный менеджер и поддержка 24/7'
          ].map((point, index) => (
            <Typography
              key={index}
              variant='body2'
              color='text.secondary'
              fontWeight={600}
              sx={{ minWidth: 200 }}
            >
              {point}
            </Typography>
          ))}
        </Stack>
        <Typography
          variant='body1'
          color='text.secondary'
          fontSize={18}
          lineHeight={1.6}
        >
          Ознакомьтесь с популярными моделями, которые мы с радостью поможем вам
          пригнать из США.
        </Typography>
      </Stack>

      {/* Карточки авто */}
      <Grid container spacing={3}>
        {cars.map(car => (
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
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: '0.6s ease',
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
                }
              }}
            >
              <CardMedia
                component='img'
                height='160'
                image={car.image}
                alt={car.title}
                sx={{
                  border: '2px solid tomato',
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
                  {car.title}
                </Typography>
                <Stack direction='row' spacing={1} flexWrap='wrap' gap={1}>
                  <Typography
                    variant='body1'
                    sx={{ color: 'text.secondary', minWidth: '80px' }}
                  >
                    Model: {car.model}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'text.secondary', minWidth: '70px' }}
                  >
                    {car.km} km
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'text.secondary', minWidth: '90px' }}
                  >
                    {car.vol}
                  </Typography>
                  <Stack
                    direction='row'
                    spacing={0.5}
                    alignItems='center'
                    minWidth='60px'
                  >
                    <SettingsIcon fontSize='small' />
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
                    fontWeight: 700,
                    mt: 1
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
                  startIcon={<TelegramIcon />}
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
