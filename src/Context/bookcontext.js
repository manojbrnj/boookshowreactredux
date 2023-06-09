import { createContext, useState } from 'react';

const boookContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueObj = {
    count,
    increment: () => {
      setCount(count + 1);
    },
  };

  return (
    <boookContext.Provider value={valueObj}>{children}</boookContext.Provider>
  );
}
export { Provider };
export default boookContext;
