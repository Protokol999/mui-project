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
      {/* Текстовая часть */}
      <Stack spacing={3} mb={5} textAlign='center' maxWidth={700} mx='auto'>
        <Typography variant='h3' fontWeight={700} sx={{ color: 'tomato' }}>
          Профессиональный пригoн авто из Южной Кореи, США и Японии
        </Typography>

        <Typography
          variant='body1'
          color='text.secondary'
          fontSize={18}
          lineHeight={1.6}
        >
          Мы — команда экспертов с многолетним опытом в сфере импорта
          автомобилей. Предлагаем полный цикл услуг — от подбора и проверки авто
          на аукционах до доставки и растаможки. Вы получаете{' '}
          <b>качественный автомобиль по лучшей цене</b> без лишних рисков и
          забот.
        </Typography>

        <Typography
          variant='body1'
          color='text.secondary'
          fontSize={18}
          lineHeight={1.6}
        >
          Наши преимущества:
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='center'
          spacing={{ xs: 2, sm: 6 }}
          flexWrap='wrap'
        >
          {[
            '✔ Проверенные поставщики и тщательная экспертиза',
            '✔ Персональный менеджер на каждом этапе',
            '✔ Быстрая доставка и прозрачное оформление документов',
            '✔ Более 300 довольных клиентов по всей стране'
          ].map((point, i) => (
            <Typography
              key={i}
              variant='body2'
              color='text.secondary'
              fontWeight={600}
              sx={{ minWidth: 220 }}
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
          Ознакомьтесь с нашей подборкой самых популярных моделей, которые мы
          поможем пригнать под ваши запросы и бюджет.
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
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: '0.6s ease',
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
                }
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: 5,
                  border: '2px solid tomato',
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

                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Model: {car.model}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      {car.km}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      {car.vol}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction='row' spacing={0.5} alignItems='center'>
                      <SettingsIcon fontSize='small' />
                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                      >
                        {car.priv}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

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
