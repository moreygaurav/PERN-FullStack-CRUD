export default function TableList() {
  const clients = [
    { id: 1, name: "Cy Ganderton", email: "cy.ganderton@example.com", job: "Quality Control Specialist", rate: "$25/hr", isActive: "Active" },
    { id: 2, name: "Hildegard Kessler", email: "hildegard.kessler@example.com", job: "Sales Associate", rate: "$20/hr", isActive: "Inactive" },
    { id: 3, name: "Cy Ganderton", email: "cy.ganderton@example.com", job: "Quality Control Specialist", rate: "$25/hr", isActive: "Active" },
    { id: 4, name: "Hildegard Kessler", email: "hildegard.kessler@example.com", job: "Sales Associate", rate: "$20/hr", isActive: "Inactive" }
  ];

  return (
    <>
      <div className="overflow-x-auto m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">

            {clients.map((client) => {
              return (
                <tr key={client.id} className="hover:bg-base-100">
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.job}</td>
                  <td>{client.rate}</td>
                  <td>
                    <button className={`btn w-20 border-1 border-solid   ${client.isActive === "Active" ? "btn-primary" : "btn-outline"} `} >{client.isActive}</button>
                  </td>
           {/*Update button*/}
                  <td>
                    <button className={`btn btn-secondary w-20 border-1 border-solid`}>Update</button> </td>
              {/*Delete button*/}
                  <td>
                    <button className={`btn btn-error w-20 border-1 border-solid`}>Delete</button> </td>
                </tr>

              );
            })}

            {/* row 1 */}

          </tbody>
        </table>
      </div>
    </>
  )
}