import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.css';
import './styles/components.css';

function App() {
  return (
    <div className="app bg-surface min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;