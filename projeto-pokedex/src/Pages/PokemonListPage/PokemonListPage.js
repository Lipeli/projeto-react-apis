import { PokeListContainer } from "./PokemonListPage.Styled";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

function PokemonListPage() {
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
  
  export default PokemonListPage;
  