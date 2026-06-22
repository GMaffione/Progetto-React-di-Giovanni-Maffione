import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${recipe.id}`)}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.readyInMinutes} min · {recipe.servings} porzioni</p>
      </div>
    </div>
  );
}

export default RecipeCard;