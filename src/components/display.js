

import React, { useState, useEffect } from 'react';
 import './display.css'
const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/book/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/book/${id}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setData(data.filter((item) => item.id !== id));
      } else {
        console.log('Error deleting item');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>User Registration Data</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>PNR No.</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.First_name}</td>
              <td>{item.Last_name}</td>
              <td>{item.Email}</td>
              <td>{item.Mobile_no}</td>
              <td>{item.Pnr_no}</td>
              <td>{item.Date}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;


// import React, { useState, useEffect } from 'react';
// import './display.css'

// const DisplayData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/book/');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h4>User Registration Data</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Mobile No.</th>
//             <th>PNR No.</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.First_name}</td>
//               <td>{item.Last_name}</td>
//               <td>{item.Email}</td>
//               <td>{item.Mobile_no}</td>
//               <td>{item.Pnr_no}</td>
//               <td>{item.Date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DisplayData;