
import './App.css';
import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/get1')
          .then(response => response.json())
          .then(data => setItems(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="App">

{items.length > 0 ? (
                <div><table>
<tr>
<th>name</th>
<th>pass</th>
<th>mail</th>

</tr>


                </table>
                    {items.map(item => (
                       
                       <div>
<tr>

<td key={item._id}>{ item.name}</td>
                        <td key={item._id}>{item.pass}</td>
                        <td key={item._id}>{item.mail}</td>

</tr>



                       
                       
                       
                       
                       
                       </div> 

                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}

     </div>
  );
}

export default App;
