import { useLocation, useNavigate } from "react-router-dom";
import { goToIndexPage, goToPokedexPage, goToPokemonDetailsPage } from "../../Routes/Coordinator";

function Header() {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <span><h1>Lista de pokemons</h1></span>
            <button onClick={() => goToPokedexPage(navigate)}>
              Ver pokedex
            </button>
            {/* <button onClick={() => goToPokemonDetailsPage(navigate)}>Detalhes</button> */}
          </>
        );
      case "/pokedex":
        return (
          <>
            <button onClick={() => goToIndexPage(navigate)}>
              Ver lista de pokemons
            </button>
            <span><h1>Pokedex</h1></span>
          </>
        );
        case"/pokemondetails":
        return (
            <>
            <button onClick={() => goToIndexPage(navigate)}>
              Voltar para página inicial
            </button>
            <span><h1>PokemonDetailsPage</h1></span>
            <button> Adicionar/Remover pokémon da pokedex</button>
          </>

        );
      default:
        return (
          <>
          <button onClick={() => goToIndexPage(navigate)}>
              Voltar para a página inicial
            </button>
            <span><h1>PokemonDetailsPage</h1></span>
          </>  
        );
    }
  };

  return <>{renderHeader()}</>;
}

export default Header;
