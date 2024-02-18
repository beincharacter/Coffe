import './Base.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';




function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
