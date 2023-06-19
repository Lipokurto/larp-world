import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Main } from "./pages/main/main";

import { 
  Actions, Battle, Camp, FinalBattle, General,
  Location, Monsters, Resources,
  Role, Psycho, Tolerance,
  Zones,
} from "./pages/rules";

import { Culture, GlobalMap, Order, Politic } from "./pages/world";
import { BuildCalc, CharCalc, HealCalc, MonsterCalc, FinalCalc, AssaultCalc } from "./pages/help";
import { PlayerRegistry, MapSupport } from "./pages/player";
import { About } from "./pages/about/about";
import { CargoVisual } from "./components";
import { Intendant } from "./pages/intendant/intendant";
import { Tech } from "./pages/tech/tech";

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
          <Route path='/help/assault-calc' element={<AssaultCalc />} />

          <Route path='/player/map-support' element={<MapSupport />} />
          <Route path='/player/registration' element={<PlayerRegistry />} />

          <Route path='/about' element={<About />} />
          <Route path='/intendant' element={<Intendant />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;