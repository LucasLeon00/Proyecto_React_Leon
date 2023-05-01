import Home from "./components/home/home";
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFirebaseApp } from "reactfire";

function App() {
  const firebase = useFirebaseApp();
  console.log (firebase);
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
