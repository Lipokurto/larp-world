import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, Camp,
  Monsters, Resources, General,
  Role, Psycho, Tolerance,
  Activity,
} from "./pages/rules";

import {
  BuildCalc, CharCalc, HealCalc,
  MonsterCalc, FinalCalc, AssaultCalc, HouseCalc,
} from "./pages/help";

import { Culture, GlobalMap, Order, Politic } from "./pages/world";
import { PlayerRegistry, MapSupport, TeamRegistry, LocationRegistry } from "./pages/player";
import { About } from "./pages/about/about";
import { CargoVisual } from "./components";
import { Intendant } from "./pages/intendant/intendant";
import { Tech } from "./pages/tech/tech";
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
          <Route path='/rules/tolerance' element={<Tolerance />} />
          <Route path='/rules/battle' element={<Battle />} />
          <Route path='/rules/monsters' element={<Monsters />} />
          <Route path='/rules/location' element={<Camp />} />
          <Route path='/rules/resources' element={<Resources />} />
          <Route path='/rules/actions' element={<Actions />} />
          <Route path='/rules/activity' element={<Activity />} />
          <Route path='/rules/psycho' element={<Psycho />} />
          <Route path='/rules/role' element={<Role />} />

          <Route path='/world/politic' element={<Politic />} />
          <Route path='/world/culture' element={<Culture />} />
          <Route path='/world/map' element={<GlobalMap />} />
          <Route path='/world/order' element={<Order />} />

          <Route path='/help/char-calc' element={<CharCalc />} />
          <Route path='/help/cargo-calc' element={<CargoVisual />} />
          <Route path='/help/build-calc' element={<BuildCalc />} />
          <Route path='/help/heal-calc' element={<HealCalc />} />
          <Route path='/help/monster-calc' element={<MonsterCalc />} />
          <Route path='/help/final-calc' element={<FinalCalc />} />
          <Route path='/help/house-calc' element={<HouseCalc />} />
          <Route path='/help/assault-calc' element={<AssaultCalc />} />

          <Route path='/player/map-support' element={<MapSupport />} />
          <Route path='/player/registration' element={<PlayerRegistry />} />
          <Route path='/player/regband' element={<TeamRegistry />} />
          <Route path='/player/reglocation' element={<LocationRegistry />} />

          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
          <Route path='/intendant' element={<Intendant />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;