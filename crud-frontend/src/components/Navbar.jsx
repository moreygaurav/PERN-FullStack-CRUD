export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                   
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
               
                <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />

                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    )
}
