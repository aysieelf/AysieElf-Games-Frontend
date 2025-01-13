const CozyWindow = () => (
  <div className="fixed top-0 right-0 w-64 h-64 p-4">
    <div className="glass-panel h-full">
      <div className="bg-cozy-sky-blue h-full rounded-xl relative overflow-hidden">
        <div className="absolute animate-float">☁️</div>
        <div className="absolute right-8 top-12 animate-float" style={{animationDelay: '2s'}}>☁️</div>
      </div>
    </div>
  </div>
);

export default CozyWindow;