import { createClient } from "contentful";
//will be used in 2 diffre
//  const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });

// export const getStaticPaths= async()=>{
  
//   const res = await client.getEntries({ content_type: "recipe" });
//   const paths=res.items.map(item=>{
//     return{
//       params:{
//         slug:item.fields.slug
//       }
//     }
//   })
//   return {
//   //  paths:[{params:{slug:}},{}]
//   // paths:paths
//     paths,
//     fallback:false
// };
// }
// // export async function getStaticProps() {
// //   const {items} = await client.getEntries({ 
// //     content_type: "recipe",
// //     "fields.slug":params.slug
// // return(
  
// //   props:{recipe:items[0]}
  
  
// //   )
  


// // });

  
// //   };
// }
export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}