import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#CCCCFF',
        color: 'white',
        py: 4,
        borderRadius: '0 0 10px 10px'
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              AUTO FREE
            </Typography>
            <Typography variant='body2'>
              Поставляем авто из Кореи, США и Китая с гарантией качества и
              надежности.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Полезные ссылки
            </Typography>
            <Stack spacing={1}>
              <Link href='/' color='inherit' underline='hover'>
                Главная
              </Link>
              <Link href='/about' color='inherit' underline='hover'>
                О нас
              </Link>
              <Link href='/contact' color='inherit' underline='hover'>
                Контакты
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Контакты
            </Typography>
            <Typography variant='body2'>Телефон: +373 6 888 750</Typography>
            <Typography variant='body2'>Email: info@autofree.md</Typography>
            <Typography variant='body2'>
              Адрес: г. Кишинёв, ул. Студенческая, 7/1
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign='center' mt={4} fontSize={14} color='grey.500'>
          © {new Date().getFullYear()} AUTO FREE. Все права защищены.
        </Box>
      </Container>
    </Box>
  );
};
