import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../Pages/PokemonDetailsPage/PokemonDetailsPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
       <Route index element = {<PokemonListPage/>}/>
       <Route path ="/pokedex" element = {<PokedexPage/>}/>
       <Route path ="/pokemondetails" element = {<PokemonDetailsPage/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default Router;
