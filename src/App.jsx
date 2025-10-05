import Header from "./components/Header"
import UserInput from "./components/User-input"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  })

  return (
    <>
      <Header />
      <UserInput formData={formData} setFormData={setFormData} />
      <Result formData={formData} />
    </>
  )
}

export default App
