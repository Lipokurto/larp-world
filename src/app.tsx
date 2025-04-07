import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Navigation } from './components/navigation';
import { Main } from './pages/main/main';

import {
  Actions, Battle, Camp,
  Resources, General, Psycho,
  FinalBattle, Injury, Plague,
  Priesthood,
} from './pages/rules';

import {
  BuildCalc, CharCalc, HealCalc,
  HouseCalc,
} from './pages/help';

import {
  Culture, GlobalMap, People,
  Politic, WarBands,
} from './pages/world';

import {
  PlayerRegistry, TeamRegistry,
  BuildingRegistry,
} from './pages/player';

import { About } from './pages/about/about';
import { CargoVisual } from './components';
import { More } from './pages/more/more';
import { PayRegistry } from './pages/player/pay-registry';
import { Conf } from './pages/conf/conf';

import { VKAuth } from './pages/user/user-auth';

import { getBuildingsList, getLocationsList } from './api/lists';
import { BuildingItem, LocationItem } from './pages/user/type';

import s from './app.module.css';

export default function App(): JSX.Element {
  const [locationsList, setLocationsList] = React.useState<LocationItem[]>([]);
  const [buildingsList, setBuildingsList] = React.useState<BuildingItem[]>([]);

  React.useEffect(() => {
    const fetchLocationsList = async () => {
      try {
        const response = await axios.get(getLocationsList);
        setLocationsList(response.data);
      } catch (err) {
        toast.error('Ошибка при получении списка локаций');
      }
    }

    const fetchBuildingsList = async () => {
      try {
        const response = await axios.get(getBuildingsList);
        setBuildingsList(response.data);
      } catch (err) {
        toast.error('Ошибка при получении списка строений');
      }
    }

    fetchLocationsList();
    fetchBuildingsList();
}, []);

  return (
    <BrowserRouter>
      <div className={s.app}>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <Navigation />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rules/general' element={<General />} />
          <Route path='/rules/battle' element={<Battle />} />
          <Route path='/rules/injury' element={<Injury />} />
          <Route path='/rules/location' element={<Camp />} />
          <Route path='/rules/resources' element={<Resources />} />
          <Route path='/rules/actions' element={<Actions />} />
          <Route path='/rules/final-battle' element={<FinalBattle />} />
          <Route path='/rules/psycho' element={<Psycho />} />
          <Route path='/rules/plague' element={<Plague />} />
          <Route path='/rules/priesthood' element={<Priesthood />} />

          <Route path='/world/politic' element={<Politic />} />
          <Route path='/world/culture' element={<Culture />} />
          <Route path='/world/map' element={<GlobalMap />} />
          <Route path='/world/war-bands' element={<WarBands />} />
          <Route path='/world/people' element={<People />} />

          <Route path='/help/char-calc' element={<CharCalc />} />
          <Route path='/help/cargo-calc' element={<CargoVisual />} />
          <Route path='/help/build-calc' element={<BuildCalc />} />
          <Route path='/help/heal-calc' element={<HealCalc />} />
          <Route path='/help/house-calc' element={<HouseCalc />} />

          <Route path='/player/registration' element={<PlayerRegistry />} />
          <Route path='/player/regband' element={<TeamRegistry />} />
          <Route path='/player/regbuild' element={<BuildingRegistry buildingsList={buildingsList} locationsList={locationsList}/>} />
          <Route path='/player/regpay' element={<PayRegistry />} />

          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
          <Route path='/vk-policy' element={<Conf />} />
          <Route path='/user-vk-test' element={<VKAuth buildingsList={buildingsList} locationsList={locationsList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export const DarkApp = App;