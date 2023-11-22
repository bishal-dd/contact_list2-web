import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./pages/ContactList";
import Navbar from "./components/organisms/header/Navbar";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
