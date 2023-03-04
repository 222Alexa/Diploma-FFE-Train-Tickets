import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Pages/HomePage";
import SelectionTrain from "./components/Main/SelectionTrain/SelectionTrain";
import SelectionWagons from "./components/Main/SelectionWagons/SelectionWagons";
 import PassengersInfo from "./components/Main/PassengersInfo/PassengersInfo";
import NotFound from "./components/Pages/NotFound";
import "./App.css";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains"element={<SelectionTrain/>} />
          <Route path="trains/:id" element={<SelectionWagons/>}/>
          <Route path="trains/:id/passengers" element={<PassengersInfo/>}/>
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
