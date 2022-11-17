import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites' element={<FavoritesPage /> } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
