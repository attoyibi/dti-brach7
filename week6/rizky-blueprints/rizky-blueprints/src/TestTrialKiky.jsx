import React, { useState, useEffect } from 'react';

export default function TestTrialKiky() {
  const [name, setName] = useState();

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(name);
  }

  useEffect(() => {
    console.log('test useEffect : ', name);
    if (name == 'kiky') {
      alert('HelloW kIKY');
    }
  }, [name]);

  return (
    <div>
      <h1>Contoh Penggunaan "Lifecycle" menggunakan Use Effect</h1>
      <div>
        name :
        <input onChange={handleChangeName} type="text" />
        age :
        <input type="text" />
        <button type="button">Submit</button>
      </div>
      <button type="button">Hidden/Show</button>
    </div>
  );
}
