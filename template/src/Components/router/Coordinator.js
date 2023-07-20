export const goToPokedexListPage = (navigate) => {
  navigate("/");
};
export const goToPokedexPage = (navigate) => {
  navigate(`/pokedexPage/`);
};
export const goToPokedexDetailPage = (navigate, pokemonName) => {
  navigate(`/pokedexDetailPage/${pokemonName}`);
};
export const goBack = (navigate) => {
  navigate(-1)
};