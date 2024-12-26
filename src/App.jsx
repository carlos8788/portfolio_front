import '/public/vendor/bootstrap/css/bootstrap.min.css'
import '/public/vendor/bootstrap-icons/bootstrap-icons.css'
import '/public/vendor/glightbox/css/glightbox.min.css'
import '/public/vendor/swiper/swiper-bundle.min.css'
import '/public/css/style.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Login from './pages/Login'

const App = () => {

  return (
    <Router basename="/portfolio_front">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

