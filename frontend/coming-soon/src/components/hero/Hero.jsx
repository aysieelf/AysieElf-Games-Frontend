function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cozy-peach p-8">
      <h2 className="font-pixel text-4xl text-cozy-dark mb-12 animate-float">
        Coming Soon
      </h2>
      <div className="max-w-md p-6 bg-cozy-rose rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
        <p className="font-pixel text-sm text-cozy-dark leading-relaxed">
          A cozy place for pixel art games with cats, foxes, and other whimsical creatures. Stay tuned for some magical adventures! ✨
        </p>
      </div>
    </div>
  );
}

export default Hero;