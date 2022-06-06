import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import { GithubContextProvider } from "./components/context/github/GithubContext";
import { AlertContextProvider } from "./components/context/alert/AlertContext";
import UserDetails from "./pages/UserDetails";
import PageLayout from "./components/layout/PageLayout";

function App() {
  return (
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <Routes>
            <Route element={<PageLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/user/:login" element={<UserDetails />} />
            </Route>
          </Routes>
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  );
}

export default App;
