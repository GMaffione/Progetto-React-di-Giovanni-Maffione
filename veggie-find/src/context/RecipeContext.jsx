import { createContext, useState, useContext } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <RecipeContext.Provider
      value={{ results, setResults, loading, setLoading, error, setError, query, setQuery }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRecipe = () => useContext(RecipeContext);
