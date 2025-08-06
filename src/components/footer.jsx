import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: ' coral',
        color: 'white',
        py: 4,
        borderRadius: '0 0 10px 10px',
        color: 'white'
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

          <Grid sx={{ ml: 'auto' }} item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Контакты
            </Typography>
            <Typography variant='body2'>📞 +373 6 888 750</Typography>
            <Typography variant='body2'>✉️ info@autofree.md</Typography>
            <Typography variant='body2'>
              📍 г. Кишинёв, ул. Студенческая, 7/1
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign='center' mt={4} fontSize={14} color='white'>
          © {new Date().getFullYear()} AUTO FREE. Все права защищены.
        </Box>
      </Container>
    </Box>
  );
};
