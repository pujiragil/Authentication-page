import Hero from "../components/Hero"
import { Button, Google } from "../components/Button"
import { Field, Remember } from "../components/Field"
import { email, password } from "../data/dataField"
import { Logo, Title, Alert, Option } from "../components/Header"

const Login = () => {
  const newPassword = { ...password, option: false }
  return (
    <div className="bg-form lg:min-h-screen">
      <div className="container mx-auto min-h-screen max-w-screen-2xl lg:grid lg:grid-cols-2 md:h-screen lg:h-fit lg:min-h-0 font-inter">
        <Hero/>
        <div className="flex flex-col md:h-full justify-center p-10 xl:p-28 2xl:p-36">
          <Logo />
          <Title title="Login" subtitle="You can login with your registered account or quick login with your Google account." mb="mb-8" />
          <Google />
          <Option /> 
          <form action="">
            <Field {...email} />
            <Field {...newPassword} />
            <Remember text="Remember me" />
            <Button text="Login" />
          </form>
          <Alert text="Don't have an account? " link="Create one!" to="/" />
        </div>
      </div>
    </div>
  )
}

export default Login