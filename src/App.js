import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import PrdocutDetail from "./pages/PrdocutDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:productId" element={<PrdocutDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
