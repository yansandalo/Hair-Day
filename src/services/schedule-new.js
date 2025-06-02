import { apiConfig } from "./api-config.js"

export async function scheduleNew ({id, name, when}) {
 try {
  //Faz uma requisição para enviar os dados do agendamento
  await fetch(`${apiConfig.baseURL}/schedules`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id, name, when}),
  })

  alert("Agendamento realizado com sucesso")
 } 
 catch (error) {
  console.log(error)
  alert("Não foi possível agendar. Tente novamente mais tarde")
 } 
}

/* 
async function fetchProducts() {
const response = await fetch("http://localhost:3333/products")
const data = await response.json()
console.log(data)
}
*/