let family = {
	incomes: [2500, 3000, 250, 361],
	expenses: [320.34, 452.2, 457, 145.2]
}

function sum(array) {
		let total = 0;
		
		for(let value of array) {
			total +=value
		}
		return total
}

function calculateBalance() {
	const calculateIncomes = sum(family.incomes)
	const calculateExpenses = sum(family.expenses)
	
	const total = calculateIncomes - calculateExpenses
	
	const balanceText = total >= 0 ? 'positivo' : 'negativo'
	
console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()
