import { schedulesDay } from "../schedules/load.js"
// Selecionar o input de Data
const selectedDate = document.getElementById("date")

// Recarregar a lista de horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()

