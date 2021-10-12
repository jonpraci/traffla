import React, { useEffect, useState, createContext, useContext } from "react";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [setData]);

  return <appContext.Provider value={{ data }}>{children}</appContext.Provider>;
};

function UsedataContext() {
  const data = useContext(appContext);
  const myEle = data.data.map((ele) => {
    return ele;
  });
  return {
    data,
    myEle,
  };
}

export { AppProvider, UsedataContext };
