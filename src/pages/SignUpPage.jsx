
const SignUpPage = () => {
    return (
        <div className="flex justify-center">
        <form className="bg-secondary max-w-3xl p-32 m-16 rounded-lg">
        <label>First name: </label>
        <input
        type="text"
        name="firstname"
        placeholder="First name"
        required
        className="flex h-[48px] rounded-md border border-white/10
                                 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
    />
    <label>Last name: </label>
    <input
        type="text"
        name="lastname"
        placeholder="Last name"
        required
        className="flex h-[48px] rounded-md border border-white/10
                                focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
    />
    <label>Email: </label>
    <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="flex h-[48px] rounded-md border border-white/10
                                focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
    />
    <label>Password: </label>
    <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="flex h-[48px] rounded-md border border-white/10
                                focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
    />
    <label>Confirm Password: </label>
    <input
        type="password"
        name="password"
        placeholder="Confirm Password"
        required
        className="flex h-[48px] rounded-md border border-white/10
                                focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-text outline-none"
    />
    <div className="flex justify-center">
        <button
            type="submit"
            className="max-w-40 flex items-center justify-center text-md bg-accent hover:bg-secondary text-text font-bold py-3 px-4 rounded mt-2"
        >
            Sign Up
        </button>
    </div>
    </form>
    </div>
    )
  }
  
  export default SignUpPage