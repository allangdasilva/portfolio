"use client";

import React from "react";

type INav = {
  navHeight: number;
  navRef: React.RefObject<HTMLElement | null>;
};

export const GlobalContext = React.createContext<INav | null>(null);

export const GlobalNav = ({ children }: React.PropsWithChildren) => {
  const navRef = React.useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = React.useState(0);

  React.useEffect(() => {
    const updateNav = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNav();
    window.addEventListener("resize", updateNav);

    return () => window.removeEventListener("resize", updateNav);
  }, []);

  return (
    <GlobalContext.Provider value={{ navHeight, navRef }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const navContext = () => {
  const context = React.useContext(GlobalContext);
  if (context === null)
    throw new Error("navContext deve estar dentro do Provider");
  return context;
};
