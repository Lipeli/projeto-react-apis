import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokeListContainer } from "../PokemonListPage/PokemonListPage.Styled";

function PokedexPage() {
    return (
      <PokeListContainer>
      <section>
      <Header/>
      </section>
      <div>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      </div>  
      </PokeListContainer>
    );
  }
  
  export default PokedexPage;
  