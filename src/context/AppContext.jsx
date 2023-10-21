import { createContext, useState } from "react";
const storage = localStorage.getItem('currentPage');
console.log("storage", storage);

export const AppState = {
  spaceFlights: [],
  filteredSpaceFlights: [],
  page: JSON.parse(storage) || 1,
  totalPages: 1,
  searchParams: {
    rocket: '',
    isUpcoming: false,
    launchStatus: '',
    launchDate: ''
  }
};

// // Context
export const AppContext = createContext(null);


export default function AppProvider({ children }) {
  const [contextData, setContextData] = useState(AppState);

  return (
    <AppContext.Provider value={{ contextData, setContextData }}>
      {children}
    </AppContext.Provider>
  )
}



