import Link from 'next/link'
export default function Home(){

    return (
        <div>
            <Link href='/clientMovies1'>Busca com API "interna"</Link>
            <br></br>
            <Link href='/api/searchMovie'>Acessar api</Link>
            <br></br>
            <Link href='/clientServerMovies'>Busca com ServerActions</Link>
        </div>


    )
}