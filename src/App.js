import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home replace />} />
      <Route path="/product" element={<ProductPage replace />} />
    </Routes>
  );
}

export default App;
