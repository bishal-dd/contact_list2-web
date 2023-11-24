import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./pages/ContactList";
import Navbar from "./components/organisms/header/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar
          background="bg-blue-500"
          text_color="text-white"
          isLoggedin={true}
        />
        <Routes>
          <Route path="/contact" element={<ContactList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
