"use client"
import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react"

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction} />
            {data.Search && <MovieTable movies={data.Search} />}
        </div>
    )
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler} className="flex flex-col gap-2 max-w-sm p-4 bg-white rounded-lg shadow-sm border border-slate-100">
            <label
                htmlFor="idTitleSearchKey"
                className="text-sm font-medium text-slate-700"
            >
                Título
            </label>

            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                type="text"
                placeholder="Digite o título..."
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200"
            >
                Pesquisar
            </button>
        </Form>
    )
}

export function MovieTable({ movies }) {
    return (
        <div>
            <div>
                {movies.map((m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>)}
            </div>
        </div>
    )

}