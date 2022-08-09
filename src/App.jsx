import { Button, Google } from "./components/Button"
import { Field, Remember } from "./components/Field"
import { email, password } from "./data/dataField"
import { Logo, Title, Option, Alert } from "./components/Header"

function App() {

  return (
    <div className="bg-form">
      <div className="container mx-auto p-10 min-h-screen">
        <Logo/>
        <Title/>
        <Google/>
        <Option/>
        <form action="">
          <Field {...email}/>
          <Field {...password}/>
          <Remember/>
          <Button/>
        </form>
        <Alert/>
      </div>
    </div>
  )
}

export default App