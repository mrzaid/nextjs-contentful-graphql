import Link from "next/link";
import React from "react";

export const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  console.log("afdsj", recipe);
  return (
    <div className="card">
      <div className="featured"></div>
      <div className="content">
        <div className="info">
          <h4>{console.log(title)}</h4>
          <p>take approx {cookingTime}</p>
        </div>
        <div>
          <Link href={"/recipes/" + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
