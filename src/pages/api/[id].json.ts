import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const recetas = await getCollection("recetas");
export const GET: APIRoute = ({params, request}) => {
  const receta = recetas.find((receta) => receta.slug === params.id);
  console.log(receta);
  
  if (receta) {
    return new Response(
      JSON.stringify({
        status: 200,
        body: receta,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    } else {
      return new Response(
        JSON.stringify({
          status: 404,
          body: "Not found",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
  
export async function getStaticPaths() {

  return recetas.map((receta) => ({
    params: {
      id: receta.slug,
    },
    props: {
      receta,
    },
  }));
}