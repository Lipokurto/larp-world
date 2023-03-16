import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, General,
  Location, Monsters, Resources,
  Tolerance,
} from "./pages/rules";

import { Characters, Politic } from "./pages/world";
import { BuildCalc, CharCalc, HealCalc, MonsterCalc } from "./pages/help";

import s from './app.module.css';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <Navigation />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='rules/general' element={<General />} />
          <Route path='rules/tolerance' element={<Tolerance />} />
          <Route path='rules/battle' element={<Battle />} />
          <Route path='rules/monsters' element={<Monsters />} />
          <Route path='rules/location' element={<Location />} />
          <Route path='rules/resources' element={<Resources />} />
          <Route path='rules/actions' element={<Actions />} />

          <Route path='world/politic' element={<Politic />} />
          <Route path='world/characters' element={<Characters />} />

          <Route path='help/char-calc' element={<CharCalc />} />
          <Route path='help/build-calc' element={<BuildCalc />} />
          <Route path='help/heal-calc' element={<HealCalc />} />
          <Route path='help/monster-calc' element={<MonsterCalc />} />

          <Route path='players' element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;