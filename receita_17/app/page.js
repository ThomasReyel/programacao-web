export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad'} = await searchParams
    const {yearSearchKey = 'none'} = await searchParams
    if (!titleSearchKey){
        return(
            <h1>POR FAVOR INFORME UM NOME DE FILME</h1>
        )
        
    }
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${yearSearchKey}`)
    const data = await res.json()
    return (
        <div>
            <div>
            {data.Search.map( (m) => <div key={m.imdbID}> <img src={m.Poster} width={100} height={50}></img> {m.Title} --- {m.Year}</div>  )}
            </div>
        </div>
    )
}