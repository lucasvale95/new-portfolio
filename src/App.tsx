import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import Home from './pages/home';
import Contacts from './pages/contacts';
import Projects from './pages/projects';
import AboutMe from './pages/aboutMe';
import VideoPlayer from './components/VideoPlayer';
import HeaderMobile from './components/HeaderMobile';

function App() {
  return (
    <BrowserRouter>
      <FormspreeProvider project="{id-do-projeto}">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/mobile" element={<HeaderMobile />} />
        </Routes>
      </FormspreeProvider>
    </BrowserRouter>
  );
}

export default App;
