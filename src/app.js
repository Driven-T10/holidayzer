import express from "express"

const app = express()

const holidays = [
	{ date: "1/1/2023", name: "Confraternização mundial" },
	{ date: "2/2/2023", name: "Carnaval" },
	{ date: "4/7/2023", name: "Sexta-feira Santa" },
	{ date: "4/9/2023", name: "Páscoa" },
	{ date: "4/21/2023", name: "Tiradentes" },
	{ date: "5/1/2023", name: "Dia do trabalho" },
	{ date: "6/8/2023", name: "Corpus Christi" },
	{ date: "9/7/2023", name: "Independência do Brasil" },
	{ date: "10/12/2023", name: "Nossa Senhora Aparecida" },
	{ date: "11/2/2023", name: "Finados" },
	{ date: "11/15/2023", name: "Proclamação da República" },
	{ date: "12/25/2023", name: "Natal" }
]

app.get("/holidays", (req, res) => {
	res.send(holidays)
})

app.get("/is-today-holiday", (req, res) => {
	const today = new Date().toLocaleDateString("en-us")

	const isHoliday = holidays.find((holiday) => holiday.date === today)

	if (isHoliday) {
		res.send({ message: `Sim, hoje é ${isHoliday.name}` })
	} else {
		res.send({ message: "Não, hoje não é feriado" })
	}
})

const PORT = 5005
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


