import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "../services/api";

function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch {
        setError("Impossibile caricare la ricetta.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p className="status">Caricamento...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (!recipe) return null;

  return (
    <main className="detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Torna ai risultati</button>

      <img src={recipe.image} alt={recipe.title} className="detail-img" />
      <h1>{recipe.title}</h1>

      <div className="detail-meta">
        <span>🕐 {recipe.readyInMinutes} min</span>
        <span>👤 {recipe.servings} porzioni</span>
        {recipe.vegan && <span className="badge vegan">Vegan</span>}
        {recipe.vegetarian && <span className="badge vegetarian">Vegetariano</span>}
      </div>

      <section>
        <h2>Ingredienti</h2>
        <ul className="ingredients-list">
          {recipe.extendedIngredients.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>
      </section>

      {recipe.analyzedInstructions.length > 0 && (
        <section>
          <h2>Istruzioni</h2>
          <ol className="instructions-list">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </section>
      )}
    </main>
  );
}

export default RecipeDetailPage;
