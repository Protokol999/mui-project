import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BOT_TOKEN = '7941942970:AAGesD8DXAUe09bmNBdPFoIF4tVqXKnM_-s';
  const CHAT_ID = '807422319';

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `Новое сообщение:\nИмя: ${formData.name}\nФамилия: ${formData.surname}\nEmail: ${formData.email}\nСообщение: ${formData.message}\nТелефон: ${formData.phone}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url, {
        method: 'GET'
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      });
      if (response.ok) {
        alert('Сообщение успешно отправлено');
        setFormData({
          name: '',
          surname: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        alert('Произошла ошибка при отправке сообщения');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Контактная форма
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Имя'
            name='name'
            value={formData.name}
            onChange={handleChange}
            margin='normal'
            required
          />
          <TextField
            fullWidth
            label='Фамилия'
            name='surname'
            value={formData.surname}
            onChange={handleChange}
            margin='normal'
            required
          />
          <TextField
            fullWidth
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            margin='normal'
            required
          />
          <TextField
            fullWidth
            label='Number'
            name='phone'
            type='tel'
            value={formData.number}
            onChange={handleChange}
            margin='normal'
            required
            inputProps={{
              inputMode: 'tel',
              pattern: '[+0-9 ]{10,20}',
              maxLength: 20
            }}
          />
          <TextField
            fullWidth
            label='Сообщение'
            name='message'
            value={formData.message}
            onChange={handleChange}
            margin='normal'
            multiline
            rows={4}
            required
          />
          <Button
            type='submit'
            variant='contained'
            disabled={isSubmitting}
            sx={{
              mt: 2,
              backgroundColor: 'tomato',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'tomato',
                transition: '0.5s ease'
              }
            }}
          >
            {isSubmitting ? 'Отправка формы' : 'Отправить'}
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          m: 4,
          p: 2,
          borderRadius: 4,
          bgcolor: 'background.paper',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        <Typography variant='h5' gutterBottom textAlign='center'>
          📍 Мы на карте
        </Typography>

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 3,
            height: { xs: 300, md: 500 } // адаптивная высота
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4362.746863394709!2d28.863187796774522!3d47.06227880561094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d1f89756797%3A0x870a4b5c890d84be!2zU3RyYWRhIFN0dWRlbsibaWxvciA3LCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e1!3m2!1sru!2s!4v1754469831509!5m2!1sru!2s'
            width='100%'
            height='100%'
            style={{
              border: 0
            }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};
