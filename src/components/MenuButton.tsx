import { Button } from "./ui/button";

export default function MenuButton(props: React.ComponentProps<"button">) {
  return (
    <Button
      className="bg-primary text-primary-foreground inline-block px-8 font-konexy"
      onClick={props.onClick}
    >
      <div className="flex items-center gap-1">
        Menu
        <Hamburger />
      </div>
    </Button>
  );
}

function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      {/* <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      /> */}
      <line
        x1={0}
        y1={6}
        x2={24}
        y2={6}
        strokeWidth={2}
        strokeDasharray={24}
        strokeDashoffset={0}
      />
      <line x1={0} y1={12} x2={24} y2={12} strokeWidth={2} />
      <line x1={0} y1={18} x2={24} y2={18} strokeWidth={2} />
    </svg>
  );
}
