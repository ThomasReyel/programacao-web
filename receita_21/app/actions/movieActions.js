'use server'

export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")

    if (!titleSearchKey || titleSearchKey=='') return {Search: []}

    try{
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=49b43365&s=${titleSearchKey}&y=${yearSearchKey}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }

}