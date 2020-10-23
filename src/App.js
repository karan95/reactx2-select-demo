import React from 'react';
import Select from 'reactx2-select';
import './App.css';

function App() {
  // select options data format
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'orange', label: 'Orange' }
  ];

  // optional callback function to be passed in
  function optionChanged(option) {
    console.log(option);
  }
  return (
    <div className="App">
     <h3 className="App-header">Custom react-select component</h3>
      <div className="demo-select">
        <Select defaultValue={options[0]} options={options} optionChanged={optionChanged}/>
      </div>
    </div>
  );
}

export default App;
