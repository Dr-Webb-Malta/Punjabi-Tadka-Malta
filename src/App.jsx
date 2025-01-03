import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './index.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  return (
    <div className="app bg-black min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;