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
    message: ''
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

    const text = `Новое сообщение:\nИмя: ${formData.name}\nФамилия: ${formData.surname}\nEmail: ${formData.email}\nСообщение: ${formData.message}`;
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
        setFormData({ name: '', surname: '', email: '', message: '' });
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
            color='primary'
            disabled={isSubmitting}
            sx={{ mt: 2 }}
          >
            {isSubmitting ? 'Отправка формы' : 'Отправить'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};
