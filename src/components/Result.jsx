export default function Result({ formData }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    formData

  const allFieldsFilled =
    initialInvestment && annualInvestment && expectedReturn && duration

  if (!allFieldsFilled) {
    return (
      <div id="result">
        <p>Please fill in all fields to start calculator.</p>
      </div>
    )
  }

  const yearlyData = []
  let currentValue = Number(initialInvestment)
  let totalInvested = Number(initialInvestment)

  for (let year = 1; year <= duration; year++) {
    const interest = (currentValue * Number(expectedReturn)) / 100
    currentValue += interest + Number(annualInvestment)
    totalInvested += Number(annualInvestment)
    yearlyData.push({
      year,
      valueEndOfYear: currentValue,
      capitalEarned: interest,
      investedCapital: totalInvested,
    })
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Value at end of year</th>
            <th>Capital earned</th>
            <th>Total invested capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear.toFixed(2)} $</td>
              <td>{data.capitalEarned.toFixed(2)} $</td>
              <td>{data.investedCapital.toFixed(2)} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
