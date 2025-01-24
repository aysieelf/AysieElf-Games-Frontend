const CozySocials = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="relative w-48">
        <img
          src="/assets/corner/table.png"
          alt="Cozy table"
          className="w-full"
        />

        <img
          src="/assets/corner/teapot.png"
          alt=""
          className="absolute -bottom-[3px] -right-[10px] w-48 animate-breathe"
        />
      </div>

      {/* Separate container for links, positioned absolutely over the table */}
      <div className="absolute bottom-[120px] left-2"> {/* Adjust these values to position cups */}
        <div className="flex gap-6"> {/* Adjust gap-6 to control space between cups */}
          {/* GitHub */}
          <div className="relative">
            <a href="https://github.com/aysieelf" className="block group">
              <img
                src="/assets/corner/github-cup.png"
                alt="GitHub"
                className="w-9 hover-lift transition-transform duration-300"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cozy-frost backdrop-blur-sm px-3 py-2 rounded-lg
                              shadow-sm border border-cozy-shell flex items-center gap-2">
                  <span className="text-sm font-courier_new">GitHub</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2
                              border-4 border-transparent border-t-cozy-shell"></div>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="relative">
            <a href="https://linkedin.com/in/aysieelf" className="block group">
              <img
                src="/assets/corner/linkedin-cup.png"
                alt="LinkedIn"
                className="w-9 hover-lift transition-transform duration-300"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cozy-frost backdrop-blur-sm px-3 py-2 rounded-lg
                              shadow-sm border border-cozy-shell flex items-center gap-2">
                  <span className="text-sm font-courier_new">LinkedIn</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2
                              border-4 border-transparent border-t-cozy-shell"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CozySocials;