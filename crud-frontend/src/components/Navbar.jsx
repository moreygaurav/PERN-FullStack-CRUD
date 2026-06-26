export default function Navbar({ onOpen, onSearch }) {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" onChange={(e)=>onSearch(e.target.value) } />

                <div className="navbar-end">
                    <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
                </div>
            </div>
        </>
    )
}
