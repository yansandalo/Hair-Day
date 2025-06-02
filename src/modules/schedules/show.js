import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

//dailyschedules: Recebe os agendamentos 
export function schedulesShow({ dailySchedules }) {
try {
  periodMorning.innerHTML = ""
  periodAfternoon.innerHTML = ""
  periodNight.innerHTML = ""

  // Renderiza os agendamentos por período
  dailySchedules.forEach((schedule) => {
  const item = document.createElement("li")
  const time = document.createElement("strong")
  const name = document.createElement("span")

  // Adiciona o Id do agendamento
  item.setAttribute("data-id", schedule.id)

  time.textContent = dayjs(schedule.when).format("HH:mm")
  name.textContent = schedule.name

  // Cria os icones de cancelar os agendamentos.
  const cancelIcon = document.createElement("img")
  cancelIcon.classList.add("cancel-icon")
  cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
  cancelIcon.setAttribute("alt", "Cancelar")

  // Adiciona o tempo, nome e ícone no item
  item.append(time, name, cancelIcon)

    //Obtém somente a hora
    const hour = dayjs(schedule.when).hour()

    //Renderizar o agendamento na sessão (manha, tarde ou noite)
    if(hour <= 12){
      periodMorning.appendChild(item)
    }else if(hour > 12 && hour <= 18) {
      periodAfternoon.appendChild(item)
    }else {
    periodNight.appendChild(item)
    }

  })
} catch (error) {
  console.log(error)
  alert("não foi possivel exibir os agendamentos")
}
}