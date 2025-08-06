import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    severity: '',
    message: '',
    visible: false
  });

  const BOT_TOKEN = '7941942970:AAGesD8DXAUe09bmNBdPFoIF4tVqXKnM_-s';
  const CHAT_ID = '807422319';

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' })); // сброс ошибки при изменении
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.surname.trim()) newErrors.surname = 'Фамилия обязательна';

    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Некорректный email';

    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    else if (!/^[+0-9 ]{10,20}$/.test(formData.phone))
      newErrors.phone = 'Некорректный формат телефона';

    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setAlert({ visible: false });

    const text = `Новое сообщение:\nИмя: ${formData.name}\nФамилия: ${formData.surname}\nEmail: ${formData.email}\nСообщение: ${formData.message}\nТелефон: ${formData.phone}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url, { method: 'GET' });

      if (response.ok) {
        setAlert({
          severity: 'success',
          message: 'Сообщение успешно отправлено',
          visible: true
        });
        setFormData({
          name: '',
          surname: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        setAlert({
          severity: 'error',
          message: 'Произошла ошибка при отправке сообщения',
          visible: true
        });
      }
    } catch (error) {
      setAlert({
        severity: 'error',
        message: 'Произошла ошибка при отправке',
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          border: '3px solid tomato',
          m: 3,
          p: 2,
          borderRadius: '20px',
          boxShadow: '2px 2px 5px 5px rgba(0,0,0,0.5)'
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Оставить заявку
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label='Имя'
            name='name'
            value={formData.name}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            label='Фамилия'
            name='surname'
            value={formData.surname}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.surname}
            helperText={errors.surname}
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
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label='Number'
            name='phone'
            type='tel'
            value={formData.phone}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.phone}
            helperText={errors.phone}
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
            error={!!errors.message}
            helperText={errors.message}
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

        <Stack sx={{ mt: 3 }} spacing={2}>
          {alert.visible && (
            <Alert severity={alert.severity}>{alert.message}</Alert>
          )}
        </Stack>
      </Box>

      {/* Карта ниже, можно улучшить отдельно, если нужно */}
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
            title='Google Maps Location'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};
