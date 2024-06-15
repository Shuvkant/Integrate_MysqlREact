import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/student')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div style={{ padding: '50px' }}>
      <table style={{ border: '200px', color: 'green' }}>
        <thead style={{ color: 'red' }}>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.roll}</td>
              <td>{d.name}</td>
              <td>{d.Phone}</td>
              <td>{d.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
