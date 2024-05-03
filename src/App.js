import { useEffect } from "react";
import ErrPage from "./components/Error";
import ListingMain from "./components/appListingMount/ListingMain";
import HomePage from "./components/appMountPoint/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const Navigate = useNavigate()

  useEffect(() => {
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    if (!email && !password) {
      return Navigate('/')
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrPage />} />
        <Route exact path="/movieslist" element={<ListingMain />} />
      </Routes>
    </>
  );
}

export default App;