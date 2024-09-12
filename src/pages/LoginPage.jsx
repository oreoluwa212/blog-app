
const LoginPage = () => {
    return (
      <div className="container mx-auto">
      <div className="flex justify-center">
        <form className="bg-secondary max-w-3xl p-24 m-16 rounded-lg">
        <div className="flex gap-2 justify-center items-center mb-4 ">
        <label className="text-xl font-bold">Username: </label>
        <input
            type="text"
            name="username"
            placeholder="Username or Email"
            required
            className="flex h-[48px] rounded-md border border-white/10
                                        focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
        />
        </div>

        <div className="flex gap-2 justify-center items-center mb-4">
        <label className="text-xl font-bold">Password: </label>
        <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="flex h-[48px] rounded-md border border-white/10
                                        focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
        />
        </div>
        <div className="flex justify-center">
            <button
                type="submit"
                className="max-w-40 flex items-center justify-center text-md bg-accent hover:bg-secondary text-text font-bold py-3 px-4 rounded mt-2"
            >
                Log in
            </button>
        </div>
        </form>
      </div>
      </div>
    )
  }
  
  export default LoginPage