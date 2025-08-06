import { Button, Container, Typography } from '@mui/material';

import { map } from '../assets/index';
import './about.scss';
export const About = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant='h2'>
        Наша фирма уже на рынке более 10-ти лет
      </Typography>
      <Typography variant='h3'>Более 1000-чи довольных клиентов</Typography>
      <div style={{ margin: 10, justifyContent: 'center' }}>
        <Button onClick={() => prompt('Сколько лет?')}>Нажми на меня</Button>
      </div>
      <div className='descr'>
        <Typography variant='h2' sx={{ color: 'red' }}>
          AUTO FREE
        </Typography>
        <Typography variant='h2'>
          Поставляем авто из <span>Кореи,США</span> и Китая
        </Typography>
        <div className='image'>
          <img src={map} alt='' />
        </div>
      </div>
    </Container>
  );
};
