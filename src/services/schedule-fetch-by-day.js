import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
try {
  //Faz o requisação
  const response = await fetch(`${apiConfig.baseURL}/schedules`)

  // Converte em JSON
  const data = await response.json()

  // Filtra os agendamentos pelo dia selecionado.
  const dailySchedules = data.filter((schedules) => dayjs(date).isSame(schedules.when, "day"))

  return dailySchedules

} catch (error) {
  console.log(error)
  alert("Não foi possível busca os agendamentos do dia selecionado")
}
}