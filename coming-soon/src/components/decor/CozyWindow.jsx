const CozyWindow = ({ children }) => (
  <div className="relative h-16 border-4 border-[#DEB887]">
    <div className="absolute inset-0 bg-[#B4D4E7] overflow-hidden">
      {/* Common clouds */}
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-2 animate-moveCloud opacity-90"
      />
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-6 animate-moveCloud opacity-75"
        style={{animationDelay: '20s'}}
      />
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-1 animate-moveCloud opacity-85"
        style={{animationDelay: '40s'}}
      />
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-8 animate-moveCloud opacity-80"
        style={{animationDelay: '60s'}}
      />
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-3 animate-moveCloud opacity-70"
        style={{animationDelay: '80s'}}
      />
      <img
        src="/assets/clouds/cloud.png"
        alt=""
        className="absolute -left-28 top-5 animate-moveCloud opacity-85"
        style={{animationDelay: '100s'}}
      />

      {/* Special cloud */}
      <img
        src="/assets/clouds/special-cloud.png"
        alt=""
        className="absolute -left-28 top-4 animate-moveCloud opacity-95"
        style={{animationDelay: '120s'}}
      />
    </div>
    {children}
  </div>
);

export default CozyWindow;