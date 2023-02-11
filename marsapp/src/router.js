import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Perserverance from "./pages/perserverance";
import Insight from "./pages/insight";
import Curiosity from "./pages/curiosity";
import App from './App'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path="perserverance" element = {<Perserverance/>}/>
        <Route path="curiosity" element = {<Curiosity/>}/>
        <Route path="insight" element = {<Insight/>}/>
    </Route>
))

export default router