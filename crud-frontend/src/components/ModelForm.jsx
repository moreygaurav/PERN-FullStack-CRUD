import React, { useState } from 'react';

export default function ModelForm({ isOpen, onClose, mode, onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'active');
    };

    const handleSubmit = (e) => {
        e.preventDefault() ;
        onSubmit({ name, email, job, price, status });
        onClose();
    };
    return (
        <>
            <dialog id="my_modal_4" className="modal" open={isOpen}>
                <div className="modal-box w-3/12 max-w-5xl justify-center">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* name input*/}
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    title="Only letters, numbers or dash"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </label>

                            {/* Email input */}
                            <label className="input validator mt-2">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>

                            {/* job input */}
                            <label className="input validator mt-1">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M21 8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18Z"></path>
                                        <path d="M3.5999999999999996 8.5L7.5744680851063835e-16 -4.76837158447793e-16L3.5999999999999996 -4.76837158447793e-16L7.18433546586743e-16 -4.76837158447793e-16L3.5999999999999996 -4.76837158447793e-16"></path>
                                    </g>
                                </svg>
                                <input type="text" placeholder="Job Title" required value={job} onChange={(e) => setJob(e.target.value)} />
                            </label>

                            {/* price input */}
                            <label className="input validator mt-2">
                                <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>


                                <input type="number" placeholder="Price" required value={price} onChange={(e) => setPrice(e.target.value)} />
                            </label>

                            {/* status input */}
                            <label className="input validator mt-2">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M9.663 17h4.673L21 12l-5.663-5H9.663L3.587.5l-.777.777L9.663zM9.663,17 L9.663,7"></path>
                                    </g>
                                </svg>

                                <select required value={status} className=" w-full opacity-50 bg-base-100" defaultValue="" onChange={(e) => setStatus(e.target.value === 'active')}>
                                    <option value="" disabled>
                                        Status
                                    </option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>

                            </label>

                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                            <button className="btn float-right ml-2" onClick={onClose}>
                                Close
                            </button>

                            <button className="btn btn-success float-right mr-2" onClick={handleSubmit}>
                                {mode === 'edit' ? 'Save Changes' : 'Add Client'}
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
