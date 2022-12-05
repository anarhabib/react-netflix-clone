import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import Register from "./pages/Register";




function App() {
  return (
    <>
        <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/signIn" element={<SignIn/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/signUp" element={<Register/>} />
            </Routes>
        </AuthContextProvider>   
    </>
  );
}

export default App;
