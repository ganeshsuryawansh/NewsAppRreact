import Navbar from "./Components/Navbar";
import FetchNewsWithErrorBoundary from "./Components/FetchNewsWithErrorBoundary";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="bg-gray-300 text-black dark:text-gray-400">
      <Navbar />
      <Routes>
        <Route index element={<FetchNewsWithErrorBoundary />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
