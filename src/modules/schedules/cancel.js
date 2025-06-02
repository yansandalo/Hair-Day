import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gerar evendo de click para cada lista
periods.forEach((period) => {
  // Capiturar o evento de click na lista
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      //Obter a Li pai do elemento clicado
      const item = event.target.closest("li")
      
      // Pega o id do agendamento para remover
      const { id } = item.dataset
      

      // Caso tenha id e a pessoa tenha clicado, pergunta se deve tem certeza se o agendamento quer ser retirado ou n
      if(id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

        if(isConfirm) {
          await scheduleCancel({ id })

          //Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})