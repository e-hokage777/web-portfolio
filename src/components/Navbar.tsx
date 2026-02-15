import MenuButton from "./MenuButton";
import { useContext } from "react";
import { ApplicationContext } from "@/contexts/ApplicationContext";

export default function Navbar() {
  const { setMainMenuOpen } = useContext(ApplicationContext);
  return (
    <div className="w-screen py-8 left-0 top-0 z-50 bg-transparent fixed ">
      <div className="container mx-auto flex justify-end">
        <MenuButton onClick={() => setMainMenuOpen((prev) => !prev)} />
      </div>
    </div>
  );
}
