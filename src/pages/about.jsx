import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography
} from '@mui/material';

export const About = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      {/* Заголовок */}
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
        sx={{ fontWeight: 700, textAlign: 'center', color: 'tomato' }}
      >
        О компании AUTO FREE
      </Typography>
      <Typography
        variant='h6'
        component='p'
        align='center'
        sx={{ mb: 6, color: 'text.secondary', fontStyle: 'italic' }}
      >
        Профессиональный пригнон автомобилей из США, Китая и Японии — быстро,
        надёжно, с гарантией качества.
      </Typography>

      {/* О компании */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h5' gutterBottom sx={{ fontWeight: 600 }}>
          Наша миссия и преимущества
        </Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>
          AUTO FREE специализируется на профессиональном пригоне автомобилей из
          США, Китая и Японии под ключ. Мы помогаем клиентам получить лучшие
          машины по выгодным ценам, с полным сопровождением на всех этапах — от
          выбора автомобиля за рубежом до оформления и доставки в Молдову.
        </Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>
          Мы ценим доверие наших клиентов и гарантируем качество, прозрачность и
          максимальный комфорт при работе с нами.
        </Typography>
      </Box>

      {/* Преимущества */}
      <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Почему выбирают нас?
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          {
            icon: <CheckCircleIcon color='primary' sx={{ fontSize: 40 }} />,
            title: 'Экспертность',
            text: 'Опыт работы с рынками США, Китая и Японии более 5 лет.'
          },
          {
            icon: <SupportAgentIcon color='primary' sx={{ fontSize: 40 }} />,
            title: 'Гарантия качества',
            text: 'Вся техника проходит тщательную проверку.'
          },
          {
            icon: <LocalShippingIcon color='primary' sx={{ fontSize: 40 }} />,
            title: 'Полное сопровождение',
            text: 'От выбора до регистрации автомобиля — всё под ключ.'
          },
          {
            icon: <ThumbUpAltIcon color='primary' sx={{ fontSize: 40 }} />,
            title: 'Прозрачные цены',
            text: 'Без скрытых платежей и неожиданных сюрпризов.'
          }
        ].map(({ icon, title, text }) => (
          <Grid item xs={12} md={6} key={title}>
            <Paper
              elevation={3}
              sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              {icon}
              <Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {text}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Наши услуги
      </Typography>
      <List sx={{ mb: 6 }}>
        {[
          'Помощь в подборе авто на зарубежных аукционах',
          'Оформление всех документов и таможенная очистка',
          'Доставка автомобиля в кратчайшие сроки',
          'Техническая диагностика и подготовка к эксплуатации'
        ].map(text => (
          <ListItem key={text}>
            <ListItemIcon>
              <CheckCircleIcon color='success' />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Команда профессионалов
      </Typography>
      <Grid container spacing={4} justifyContent='center' sx={{ mb: 6 }}>
        {[
          {
            name: 'Гриша Митиогло',
            role: 'Специалист по пригону из США',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
          },
          {
            name: 'Владислав Кайряк',
            role: 'Эксперт по японским авто',
            avatar: 'https://randomuser.me/api/portraits/men/72.jpg'
          },
          {
            name: 'Александр Стеганцов',
            role: 'Логист и таможенный брокер',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
          }
        ].map(({ name, role, avatar }) => (
          <Grid item xs={12} sm={6} md={4} key={name}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}
            >
              <Avatar
                alt={name}
                src={avatar}
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              />
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                {name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {role}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Отзывы */}
      <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Отзывы клиентов
      </Typography>
      <Grid container spacing={4} justifyContent='center' sx={{ mb: 6 }}>
        {[
          {
            text: 'AUTO FREE помогли привезти мне идеальный автомобиль из Японии, быстро и без проблем.',
            author: 'Сергей П.'
          },
          {
            text: 'Профессионально, честно и по делу. Рекомендую всем, кто хочет пригнать авто из-за границы.',
            author: 'Анна К.'
          }
        ].map(({ text, author }, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                fontStyle: 'italic',
                borderLeft: '4px solid tomato',
                bgcolor: '#fff8f5'
              }}
            >
              <Typography variant='body1' sx={{ mb: 2 }}>
                "{text}"
              </Typography>
              <Typography
                variant='subtitle2'
                sx={{ textAlign: 'right', fontWeight: 700 }}
              >
                — {author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Контакты */}
      <Box
        sx={{
          textAlign: 'center',
          pt: 3,
          borderTop: '1px solid #ccc',
          color: 'text.secondary'
        }}
      >
        <Typography variant='body1' gutterBottom>
          Свяжитесь с нами:
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          alignItems='center'
          sx={{ mb: 1 }}
        >
          <PhoneIcon /> <Typography>+373 6 888 750</Typography>
          <EmailIcon sx={{ ml: 4 }} /> <Typography>info@autofree.md</Typography>
        </Stack>
        <Stack direction='row' justifyContent='center' spacing={3}>
          <IconButton
            component={Link}
            href='https://www.facebook.com/profile.php?id=100087287156064'
            target='_blank'
            rel='noopener noreferrer'
            color='primary'
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={Link}
            href='https://www.instagram.com/mitioglog/'
            target='_blank'
            rel='noopener noreferrer'
            color='secondary'
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component={Link}
            href='https://web.telegram.org/k/'
            target='_blank'
            rel='noopener noreferrer'
            color='info'
          >
            <TelegramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};
