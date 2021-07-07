import React, { useMemo, useState, useEffect } from "react";
import axios from 'axios'
import Table from "./Dashboard/Table";
import Nav from "./Dashboard/Nav";

function App() {
    const [data, setData] = useState([]);

    
    useEffect(() => {
      (async () => {
        const result = await axios("https://reqres.in/api/users?page=1");
        setData(result.data.data);
      })();
    }, []);
    

  const columns = useMemo(
    () => [
      {
        
        Header: "User",
        
        columns: [
          {
            Header: "ID",
            accessor: "id"
          },
          {
            Header: "Email",
            accessor: "email"
          }
        ]
      },
      {
      
        Header: "Details",
        
        columns: [
          {
            Header: "First name",
            accessor: "first_name"
          },
          {
            Header: "Second name",
            accessor: "last_name"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      
        <Nav/>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;