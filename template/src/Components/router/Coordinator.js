export const goToPokedexListPage = (navigate) => {
    navigate("/");
  };
export const goToPokedexPage = (navigate) => {
    navigate(`/pokedexPage/`);
  };
export const goToPokedexDetailPage = (navigate,pokemon) => {
    navigate(`/pokedexDetailPage/${pokemon}`);
  };
export const goBack = (navigate) => {
  navigate(-1)
};