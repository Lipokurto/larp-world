import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";
import { General } from "./pages/rules/general/general";
import { Battle } from "./pages/rules/battle/battle";
import { Characters } from "./pages/rules/characters/characters";

import { Location } from "./pages/rules/location/location";
import { Resources } from "./pages/rules/resources/resources";
import { Actions } from "./pages/rules/actions/actions";
import { Politic } from "./pages/rules/politic/politic";

import s from './app.module.css';

export default function App() {
  return (
    <div className={s.app}>
      <Navigation />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='rules/general' element={<General />} />
        <Route path='rules/battle' element={<Battle />} />
        <Route path='rules/characters' element={<Characters />} />
        <Route path='rules/location' element={<Location />} />
        <Route path='rules/resources' element={<Resources />} />
        <Route path='rules/actions' element={<Actions />} />
        <Route path='rules/actions' element={<Actions />} />
        <Route path='rules/politic' element={<Politic />} />

        <Route path='players' element={<></>} />
      </Routes>
    </div>
  );
}