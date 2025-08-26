import { PeticionPaxinaDashboard } from "./Funcions/PeticionPaxinaDashboard.js"

console.log("estoy en index.js")

if(location.pathname == '/dashboard'){
    PeticionPaxinaDashboard()
}