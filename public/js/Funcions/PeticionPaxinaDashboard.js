import { datosPintar } from "./helpers.js"

export const PeticionPaxinaDashboard = async ()=>{
                let token = localStorage.getItem("token")

                console.log("entro ... token? ",token)

                const paxinaEnTexto = await fetch("/paxina-dashboard",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                const paxinaText = await paxinaEnTexto.text()
                console.log("paxina ?",paxinaText)
                let etiquetaMain = document.querySelector("main")
                etiquetaMain.innerHTML = paxinaText;

                pinto.addEventListener("click",(e)=>{
                    e.preventDefault();
                    console.log("pintando ?")
                    datosPintar()
                })
                
}