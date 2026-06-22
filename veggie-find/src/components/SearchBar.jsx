import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import { searchRecipes } from "../services/api";

function SearchBar() {
  const [input, setInput] = useState("");
  const { setResults, setLoading, setError, setQuery } = useRecipe();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setQuery(input);
    try {
      const data = await searchRecipes(input);
      setResults(data);
    } catch (err) {
      setError("Errore durante la ricerca. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Cerca una ricetta vegetariana…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}

export default SearchBar;