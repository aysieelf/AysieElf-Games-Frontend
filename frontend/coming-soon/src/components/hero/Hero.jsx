function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-12">
      <h2 className="font-bubble text-5xl text-gaming-neon-blue animate-float">
        Coming Soon
      </h2>
      <div className="max-w-md p-6 rounded-xl glass-panel animate-float"
           style={{ animationDelay: '1s' }}>
        <p className="font-bubble text-xl text-gaming-text-light text-center leading-relaxed">
          A cozy place for my pixel art games. Stay tuned! ✨
        </p>
      </div>
    </div>
  );
}

export default Hero;