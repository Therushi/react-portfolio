import { Button } from "@/components/ui/button";

const navBar: { name: string; route: string }[] = [
  {
    name: "Projects",
    route: "/project",
  },
  {
    name: "Contact",
    route: "/project",
  },
  {
    name: "Skills",
    route: "/project",
  },
  {
    name: "Experience",
    route: "/project",
  },
];
function NavBar() {
  return (
    <>
      <div className="p-4 shadow-2xl rounded-full ">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center shadow-2xl">
            <h1 className="text-white font-black">RD</h1>
          </div>
          <ul className="flex items-center gap-8">
            {navBar
              ? navBar.map((item) => {
                  return (
                    <li className="cursor-pointer hover:underline">
                      {item.name}
                    </li>
                  );
                })
              : ""}
            <div>
              <Button className="relative cursor-pointer" variant="outline">
                <span className="absolute top-0 right-0">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-red-600"></span>
                  </span>
                </span>
                Download Resume
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
