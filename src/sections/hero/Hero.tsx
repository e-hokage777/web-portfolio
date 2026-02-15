import ComputerRoomCanvas from "./components/ComputerRoomCanvas";

export default function Hero() {
  return (
    <section className="h-screen relative bg-black">
      <div className="flex-3 overflow-hidden absolute left-0 top-0 h-full w-full">
        {/* <div
          className="size-full left-0 top-0 absolute z-5"
          // style={{
          //   background:
          //     "radial-gradient(circle at 95% 50%, rgba(255, 255, 255, 0) 30%, rgba(0, 0, 0, 255) 60%)",
          // }}
        ></div> */}
        <div className="size-full absolute left-0 top-0">
          <ComputerRoomCanvas />
        </div>
      </div>
      <div className="text-white  h-full px-8 flex-2 absolute left-0 top-0 z-10 pointer-events-none">
        <div className="flex-1 flex flex-col gap-8 justify-center h-full max-w-1/2">
          <h1 className="text-7xl font-rostex">Hi There</h1>
          <p className="text-2xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            eius tempore <span className="text-primary">something</span>{" "}
            doloremque aperiam illo necessitatibus, dolores reiciendis ut
            placeat voluptatibus dicta enim esse sint unde sunt debitis vel
            dignissimos!
          </p>
        </div>
      </div>
    </section>
  );
}
