import { createContext, useState } from "react";

type ApplicationContextProps = {
  mainMenuOpen: boolean;
  setMainMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ApplicationContext = createContext<ApplicationContextProps>({
  mainMenuOpen: false,
  setMainMenuOpen: () => {},
});

export default function ApplicationContextProvider({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [mainMenuOpen, setMainMenuOpen] = useState<boolean>(false);
  return (
    <ApplicationContext.Provider
      value={{
        mainMenuOpen,
        setMainMenuOpen,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
