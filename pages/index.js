import { createClient } from "contentful";
import { gql } from "graphql-request";
import { RecipeCard } from "../components/RecipeCard";

export async function getStaticProps() {
  // const client = createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID,
  //   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  // });

  // const res = await client.getEntries({ content_type: "recipe" });

  // return {
  //   props: {
  //     recipes: res.items,
  //   },
  // };
  const query = gql`
    {
      recipeCollection {
        items {
          title
          slug
          ingredients
          cookingTime
          thumbnail{
            url
          }
          featuredImage {
            url
            title
          }
        }
      }
    }
  `
  const res = await fetch("https://graphql.contentful.com/content/v1/spaces/fr6kcovl026y/", {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer iNlQ1MMJfxj99iiuwVMO9Rz1Uoies5hKeTPFI5rHLQY`,
    },
  });
  const fetchedContent = await res.json()
  // console.log("_____res", res);
  return (
    {props: {
      recipe: fetchedContent?.data?.recipeCollection?.items
    }}
  )
    
  
}

export default function Recipes({recipe}) {
  // console.log("____props", props);
  return (
    <div className="recipe-list">
      {recipe.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
