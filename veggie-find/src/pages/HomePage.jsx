import { useRecipe } from "../context/RecipeContext";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

function HomePage() {
  const { results, loading, error, query } = useRecipe();

  return (
    <main className="home">
      <div className="hero">
        <h1>Ricette vegetariane</h1>
        <p>Cerca tra migliaia di ricette sane e gustose</p>
        <SearchBar />
      </div>

      {loading && <p className="status">Caricamento...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && results.length > 0 && (
        <>
          <p className="results-count">{results.length} risultati per "{query}"</p>
          <div className="recipe-grid">
            {results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}

      {!loading && results.length === 0 && query && (
        <p className="status">Nessun risultato trovato per "{query}".</p>
      )}
    </main>
  );
}

export default HomePage;