import Link from 'next/link'
export default function Home(){

    return (
        <div>
            <Link href='/clientMovies1'>Buscar Filmes da receita 19</Link>
            <br></br>
            <Link href='/api/searchMovie'>Acessar api</Link>
            <br></br>
            <Link href='/clientServerMovies'>Busca de filmes da receita 20</Link>
        </div>


    )
}