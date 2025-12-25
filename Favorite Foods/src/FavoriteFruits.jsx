import { fruits } from "./data/favoriteFruits";
import { useState } from "react";
import "./FavoriteFruits.css";

function FavoriteFruits() {
  const [favorites, setFavorites] = useState([]);

  const handleChange = (fruit) => {
    if (favorites.includes(fruit)) {
      setFavorites(favorites.filter((f) => f !== fruit));
    } else {
      setFavorites([...favorites, fruit]);
    }
  };
  return (
    <div className="main-container">
      <h2>Favorite Fruits</h2>
      <div className="fruits-container">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit-box">
            <img src={fruit.image} alt={fruit.name} className="fruit-image" />
            <h3>{fruit.name}</h3>
            <button onClick={() => handleChange(fruit)}>
              {favorites.includes(fruit)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div>
      <div className="favorites-list">
        <h2>Your Favorite Fruits:</h2>
        {favorites.length === 0 ? (
          <p>No favorite fruits selected.</p>
        ) : (
          <ul>
            {favorites.map((fruit) => (
              <li key={fruit.id}>
                {fruit.name}
                {fruit.image && (
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="favorite-fruit-image"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FavoriteFruits;
