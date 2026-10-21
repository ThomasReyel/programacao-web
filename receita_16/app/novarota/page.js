import Link from 'next/link'

export default function Home(){
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/">Rota1</Link> <br/><br/>
                <a href="/">Rota 1, jeito antigo</a>
            </div>
        </div>
    )
}