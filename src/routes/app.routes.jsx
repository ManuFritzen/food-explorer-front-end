import {Routes, Route} from  'react-router-dom';

import {Details} from '../pages/Details';
import {Home} from '../pages/Home';
import {DishNew} from '../pages/DishNew';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/dishNew" element={<DishNew/>}/>
            <Route path="/profile" element={<Profile/>}/>

        </Routes>
    )
}