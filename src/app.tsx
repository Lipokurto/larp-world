import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, Camp, FinalBattle, General,
  Location, Monsters, Resources,
  Tolerance, Zones,
} from "./pages/rules";

import { Characters, GlobalMap, Politic } from "./pages/world";
import { BuildCalc, CharCalc, HealCalc, MonsterCalc, FinalCalc, AssaultCalc } from "./pages/help";
import { PlayerRegistry, MapSupport } from "./pages/player";
import { About } from "./pages/about/about";
import { CargoVisual } from "./components";

import s from './app.module.css';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <Navigation />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rules/general' element={<General />} />
          <Route path='/rules/tolerance' element={<Tolerance />} />
          <Route path='/rules/battle' element={<Battle />} />
          <Route path='/rules/monsters' element={<Monsters />} />
          <Route path='/rules/location' element={<Location />} />
          <Route path='/rules/zones' element={<Zones />} />
          <Route path='/rules/camp' element={<Camp />} />
          <Route path='/rules/resources' element={<Resources />} />
          <Route path='/rules/actions' element={<Actions />} />
          <Route path='/rules/final-battle' element={<FinalBattle />} />

          <Route path='/world/politic' element={<Politic />} />
          <Route path='/world/characters' element={<Characters />} />
          <Route path='/world/map' element={<GlobalMap />} />

          <Route path='/help/char-calc' element={<CharCalc />} />
          <Route path='/help/cargo-calc' element={<CargoVisual />} />
          <Route path='/help/build-calc' element={<BuildCalc />} />
          <Route path='/help/heal-calc' element={<HealCalc />} />
          <Route path='/help/monster-calc' element={<MonsterCalc />} />
          <Route path='/help/final-calc' element={<FinalCalc />} />
          <Route path='/help/assault-calc' element={<AssaultCalc />} />

          <Route path='/player/map-support' element={<MapSupport />} />
          <Route path='/player/registration' element={<PlayerRegistry />} />

          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;