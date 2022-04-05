import { Navbar } from './components/Navbar';
import { MainContainer } from './components/MainContainer';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  document.body.style = 'background: #C4C4C4';

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<MainContainer />} />
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
