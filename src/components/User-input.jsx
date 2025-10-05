export default function UserInput({ formData, setFormData }) {
  function handleChange(event) {
    const { id, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="input1">Initial investment</label>
          <input
            id="initialInvestment"
            value={formData.initialInvestment}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="input2">Annual investment</label>
          <input
            id="annualInvestment"
            value={formData.annualInvestment}
            type="number"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="input3">Expected return</label>
          <input
            id="expectedReturn"
            value={formData.expectedReturn}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="input4">Duration</label>
          <input
            id="duration"
            value={formData.duration}
            type="number"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
