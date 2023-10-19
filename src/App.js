import React, { useState } from 'react';

function App() {
  const [butttonClick, setButtonClick] = useState(false);
  const [nameData, setNameData] = useState([]);

  const handleClick = () => {
    const jsonData = ['krishna', 'ram', 'raj', 'krishna', 'ram', 'krishna'];

    const nameCount = jsonData.reduce((count, name) => {
      count[name] = (count[name] || 0) + 1;
      return count;
    }, {});

    const data = Object.entries(nameCount).map(([name, count]) => ({
      name,
      count,
    }));

    setNameData(data);
    setButtonClick(true);
  };

  return (
    <div className="App">
      <h1>Name Counts</h1>
      <button onClick={handleClick}>Click to the Name Counts</button>
      {butttonClick && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {nameData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
