import CloseIcon from '@mui/icons-material/Close';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contact' }
  ];

  const socialLinks = [
    {
      label: 'Telegram',
      href: 'https://web.telegram.org/k/',
      color: 'inherit'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mitioglog/',
      color: 'inherit'
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100087287156064',
      color: 'inherit'
    }
  ];

  return (
    <>
      <AppBar
        position='static'
        sx={{
          borderRadius: 10,
          width: '90%',
          mx: 'auto',
          mt: 1,
          backgroundColor: '#CCCCFF'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Stack direction='row' alignItems='center' spacing={2}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              component={RouterLink}
              to='/'
            >
              <DriveEtaIcon />
            </IconButton>
            <Typography variant='h6'>AUTO FREE</Typography>
          </Stack>

          {isMobile ? (
            <>
              <IconButton
                color='inherit'
                onClick={() => setOpenDrawer(true)}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor='right'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                  }}
                >
                  <IconButton onClick={() => setOpenDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                  <List>
                    {navLinks.map(link => (
                      <ListItem
                        button
                        key={link.label}
                        component='a'
                        href={link.href}
                      >
                        <ListItemText primary={link.label} />
                      </ListItem>
                    ))}
                  </List>
                  <Stack spacing={1} mt={2}>
                    {socialLinks.map(link => (
                      <Button
                        key={link.label}
                        component='a'
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='contained'
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Stack direction='row' spacing={3}>
                {navLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color='inherit'
                    underline='none'
                    variant='button'
                    sx={{ fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
              <Stack direction='row' spacing={1}>
                {socialLinks.map(link => (
                  <Button
                    key={link.label}
                    component='a'
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='contained'
                    sx={{
                      borderRadius: 20,
                      backgroundColor: 'white',
                      color: 'blue'
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
