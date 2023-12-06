import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, Camp,
  Monsters, Resources, General,
  Role, Psycho, FinalBattle,
} from "./pages/rules";

import {
  BuildCalc, CharCalc, HealCalc,
  MonsterCalc, HouseCalc,
} from "./pages/help";

import {
  Culture, GlobalMap, People, Politic,
  Solem, WarBands,
} from "./pages/world";

import {
  PlayerRegistry, MapSupport, TeamRegistry,
  LocationRegistry,
} from "./pages/player";

import { About } from "./pages/about/about";
import { CargoVisual } from "./components";
import { Intendant } from "./pages/intendant/intendant";
import { More } from "./pages/more/more";

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
          <Route path='/rules/battle' element={<Battle />} />
          <Route path='/rules/monsters' element={<Monsters />} />
          <Route path='/rules/location' element={<Camp />} />
          <Route path='/rules/resources' element={<Resources />} />
          <Route path='/rules/actions' element={<Actions />} />
          <Route path='/rules/final-battle' element={<FinalBattle />} />
          <Route path='/rules/psycho' element={<Psycho />} />
          <Route path='/rules/role' element={<Role />} />

          <Route path='/world/politic' element={<Politic />} />
          <Route path='/world/culture' element={<Culture />} />
          <Route path='/world/map' element={<GlobalMap />} />
          <Route path='/world/war-bands' element={<WarBands />} />
          <Route path='/world/solem' element={<Solem />} />
          <Route path='/world/people' element={<People />} />

          <Route path='/help/char-calc' element={<CharCalc />} />
          <Route path='/help/cargo-calc' element={<CargoVisual />} />
          <Route path='/help/build-calc' element={<BuildCalc />} />
          <Route path='/help/heal-calc' element={<HealCalc />} />
          <Route path='/help/monster-calc' element={<MonsterCalc />} />
          <Route path='/help/house-calc' element={<HouseCalc />} />

          <Route path='/player/map-support' element={<MapSupport />} />
          <Route path='/player/registration' element={<PlayerRegistry />} />
          <Route path='/player/regband' element={<TeamRegistry />} />
          <Route path='/player/reglocation' element={<LocationRegistry />} />

          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
          <Route path='/intendant' element={<Intendant />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;