import React, { useState } from 'react';

function App() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={toggle}>{isToggleOn ? 'Kapat' : 'Aç'}</button>
      {isToggleOn && <p>Buton açık durumda!</p>}
    </div>
  );
}

export default App;
