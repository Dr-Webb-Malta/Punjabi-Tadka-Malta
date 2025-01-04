import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.css';
import './styles/components.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;