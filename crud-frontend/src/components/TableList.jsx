import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function TableList({ handleOpen, SearchTerm, reload, onDelete }) {

  const [TableData, setTableData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/clients");
        setTableData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [reload]);

  console.log("table data", TableData);
  console.log("search term", SearchTerm);

  // filter the table Data on the searchTerm
  const filteredData = TableData.filter(client =>
    client.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase()) ||
    client.email.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase()) ||
    client.job.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase())
  );



  return (
    <>

      {error && <div className='alert alert-error' >(error)</div>}

      <div className="overflow-x-auto m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr >
              <th ></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">

            {filteredData.map((client) => {
              return (
                <tr key={client.id} className="hover:bg-base-100">
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.job}</td>
                  <td>{client.rate}</td>
                  <td>
                    <button className={`btn w-20 border-1 border-solid   ${client.isactive ? "btn-primary" : "btn-outline"} `} >{client.isactive ? "Active" : "Inactive"}</button>
                  </td>
                  {/*Update button*/}
                  <td>
                    <button className={`btn btn-secondary w-20 border-1 border-solid`} onClick={() => handleOpen('edit', client)}>Update</button> </td>
                  {/*Delete button*/}
                  <td>
                    <button className={`btn btn-error w-20 border-1 border-solid`}
                      onClick={() => onDelete(client.id)}
                    >Delete</button> </td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}