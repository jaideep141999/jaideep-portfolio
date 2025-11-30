import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './routes/Routing';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-grow relative">
          {/* Global Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20"></div>
          </div>
          <div className="relative z-10">
            <Routing />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
