import { MariaPrea } from "./componentes";
import {Texto} from "./textos/page"

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
          <MariaPrea rota="./app/novarota"/>
          <Texto/>
       </div>
    )
}