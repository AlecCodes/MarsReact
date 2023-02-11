import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Perserverance from "./pages/perserverance";
import Insight from "./pages/insight";
import Curiosity from "./pages/curiosity";
import App from './App'
import Landing from './pages/landing'
import { curiosityLoader , perserveranceLoader, insightLoader} from "./loaders";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Landing/>}/>
        <Route path="perserverance" element = {<Perserverance/>} loader = {perserveranceLoader}/>
        <Route path="curiosity" element = {<Curiosity/>} loader= {curiosityLoader}/>
        <Route path="insight" element = {<Insight/>} loader = {insightLoader}/>
    </Route>
))

export default router