import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <div className="w-screen py-8 left-0 top-0 z-50 bg-transparent fixed left-0 top-0">
      <div className="container mx-auto flex justify-end">
        <MenuButton />
      </div>
    </div>
  );
}
