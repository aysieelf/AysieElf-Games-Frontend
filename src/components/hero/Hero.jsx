function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-12 relative">

      <h2 className="font-pixel text-5xl text-cozy-leaf-mid">
        coming soon...
      </h2>

      <div className="max-w-md p-8 rounded-xl glass-panel animate-float relative"
           style={{ animationDelay: '1s' }}>

        <p className="font-courier_new text-xl text-cozy-text-dark text-center leading-relaxed">
          This is a cozy place for my pixel art games. Stay tuned! 🌿
        </p>
      </div>
    </div>
  );
}

export default Hero;