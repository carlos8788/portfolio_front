import '/public/vendor/bootstrap/css/bootstrap.min.css'
import '/public/vendor/bootstrap-icons/bootstrap-icons.css'
import '/public/vendor/glightbox/css/glightbox.min.css'
import '/public/vendor/swiper/swiper-bundle.min.css'
import '/public/css/style.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Resume from './pages/Resume';

const App = () => {
  return (
    <Router basename="/portfolio_front">
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

