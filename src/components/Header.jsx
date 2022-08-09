export const Logo = () => {
  return (
    <div className="flex bg-logo w-fit w-12 h-12 justify-center items-center rounded-full mb-5 cursor-pointer">
      <h1 className="text-white text-logo font-semibold">A</h1>
    </div>
  )
}

export const Title = () => {
  return (
    <div className="flex flex-col text-white w-full mb-5">
      <h1 className="text-title mb-2.5">Login</h1>
      <p className="text-base opacity-60">You can login with your registered account or quick login with your Google account.</p>
    </div>
  )
}

export const Option = () => {
  return (
    <div className="flex justify-center items-center gap-x-2 my-6">
      <span className="block w-full h-0.5 rounded-full bg-field"></span>
      <p className="text-white">or</p>
      <span className="block w-full h-0.5 rounded-full bg-field"></span>
    </div>
  )
}

export const Alert = () => {
  return (
    <div className="flex justify-center items-center text-white gap-x-1 font-semibold">
      <p className="opacity-60">Don't have an account?</p><span className="text-forget cursor-pointer">Create one!</span>
    </div>
  )
}