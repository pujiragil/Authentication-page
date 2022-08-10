import { Button } from "../components/Button"
import { Field, Remember } from "../components/Field"
import { name, email, password } from "../data/dataField"
import { Logo, Title, Alert } from "../components/Header"
import Hero from "../components/Hero"

const Register = () => {
  const newPassword = { ...password, option: false }
  return (
    <div className="bg-form lg:min-h-screen">
      <div className="container mx-auto min-h-screen max-w-screen-2xl lg:grid lg:grid-cols-2 md:h-screen lg:h-fit lg:min-h-0 font-inter">
        <Hero/>
        <div className="flex flex-col md:h-full justify-center p-10 xl:px-28 2xl:p-36">
          <Logo />
          <Title title="Register" subtitle="Enter your user details below." mb="mb-11" />
          <form action="">
            <Field {...name} />
            <Field {...email} />
            <Field {...newPassword} />
            <Remember text="Agree with terms and conditions" />
            <Button text="Register" />
          </form>
          <Alert text="Have an account? " link="Login!" to="login" />
        </div>
      </div>
    </div>
  )
}

export default Register