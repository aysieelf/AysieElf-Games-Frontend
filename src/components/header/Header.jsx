import CozyWindow from "../decor/CozyWindow.jsx";

function Header() {
  return (
    <header className="relative">
      <CozyWindow>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="font-courier_new text-4xl md:text-3xl text-cozy-text-dark
                       hover:text-cozy-dusty-rose transition-colors duration-300">
            <span className="font-courier_new text-cozy-leaf-dark">AysieElf Games</span>
          </h1>
        </div>
      </CozyWindow>
    </header>
  );
}

export default Header;