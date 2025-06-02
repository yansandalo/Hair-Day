import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = ""

  // Obtem a lista de todos os horários ocupados.
  const unvailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  

  const opening = openingHours.map((hour) => {
    //Recupera as horas disponíveis
    const [scheduleHour] = hour.split(":")
    
    // Adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs()) 

    const available = !unvailableHours.includes(hour) && !isHourPast

    // Returna para ver se o horário está disponível ou n 
    // esse resultado vai ficar na variável opening tbm
    return {  
      hour,
      available,
     
    }
  })

  // Renderizar os horários
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-anavailable")

    li.textContent = hour
    
    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    }else if (hour === "13:00") {
      hourHeaderAdd("tarde")
    }else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }
    
    hours.append(li)

  })
  
  // Adiciona o evento de click nos horários disponíveis
  hoursClick()

}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}