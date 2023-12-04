import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const url = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMxYzk0MWVkYjU3ZDg5ODI1NGQyMjlkNGQwMjkyMSIsInN1YiI6IjYxNDg4M2ViNWUxMjAwMDA4ZGFmYmZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._nDILgr7PO6W3Que-rNja5lPS51vE4JYKKexroAJA8U'
        }
    }
    );

    return json(await url.json())
}

const MovieId = () => {
    const data = useLoaderData()
    console.log(data)
    return <div className="min-h-screen p-10">
        <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt=""
            className="h-[40vh] object-cover w-full rounded-lg" />
        <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>
        <div className="flex gap-x-10 mt-10">
            <div className="w-1/2 font-medium">
                <h1>
                    <span className="underline">Homepage: </span><Link to={data.homepage} target="_blank">Link</Link>
                </h1>
                <h1><span className="underline">Original Language: </span>{data.original_language}</h1>
                <p><span className="underline">Overview: </span>{data.overview}</p>
                <p><span className="underline">Release Date: </span>{data.release_date}</p>
            </div>
        </div>
    </div>
}

export default MovieId