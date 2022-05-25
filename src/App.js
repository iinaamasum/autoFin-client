import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <section className="bg-gray-200 max-w-[2000px] mx-auto">
      <Navbar>
        <Home />
      </Navbar>
    </section>
  );
}

export default App;
