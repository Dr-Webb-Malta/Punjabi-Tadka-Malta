import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './routes';
import './styles/components.css';
import './styles/animations.css';

function App() {
  return (
    <HelmetProvider>
      <div className="w-full min-h-screen bg-white overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;