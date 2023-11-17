import { PokemonCardContainer } from "./PokemonCardStyle";
import { goToIndexPage, goToPokedexPage, goToPokemonDetailsPage } from "../../Routes/Coordinator";
import { Navigate, useNavigate } from "react-router-dom";

function PokemonCard() {
  const navigate = useNavigate();

    return (
      <PokemonCardContainer>
      <section>
      <p>Nome: Eevee</p>
      <p>Tipo: Normal</p>
      <button>Adicionar/Remover</button>
      <button onClick={() => {goToPokemonDetailsPage(navigate)}}>Detalhes</button>
      </section>
      </PokemonCardContainer>
    );
  }
  
  export default PokemonCard;
  