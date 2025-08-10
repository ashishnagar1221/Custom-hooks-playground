import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import FetchDemo from "./components/pages/FetchDemo";
import FormDemo from "./components/pages/FormDemo";
import WebsocketDemo from "./components/pages/WebsocketDemo";
import AuthDemo from "./components/pages/AuthDemo";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<FetchDemo />} />
          <Route path="/auth" element={<AuthDemo />} />
          <Route path="/form" element={<FormDemo />} />
          <Route path="/ws" element={<WebsocketDemo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
