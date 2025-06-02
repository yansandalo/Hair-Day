import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js" 

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para formata o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
 //Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  try {
    // Recuperando o nome do client
    const name = clientName.value.trim()

    if(!name) {
      return alert("informe o nome do client")
    }

    // Recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")
    

    if (!hourSelected) {
      return alert("Selecione um horário")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    
    // Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime().toString()

    // Faz o agendamento
     await scheduleNew({
      id,
      name,
      when,
    })

    // Recarregar os agendamentos
    await schedulesDay()

    // Limpa o nome após fazer o input
    clientName.value = ""

  } catch (error) {
    alert("não foi possível realizar o agendamento")
  }
  
}