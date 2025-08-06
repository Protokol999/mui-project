import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { CustomThemeProvider } from './components/themeContext';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Home } from './pages/home';

function App() {
  return (
    <div className='all'>
      <CustomThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contacts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
