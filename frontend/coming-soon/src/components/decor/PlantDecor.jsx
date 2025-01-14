const PlantDecor = () => {
  return (
    <div className="fixed bottom-4 left-4 w-24">
      <img
        src="/assets/plant/base.png"
        alt="Plant base"
        className="relative z-[5] w-full"
      />
      <img
        src="/assets/plant/leaf1.png"
        alt=""
        className="absolute top-0 left-0 z-[1] plant-sway w-full"
        style={{animationDelay: '0.1s'}}
      />
      <img
        src="/assets/plant/leaf2.png"
        alt=""
        className="absolute top-0 left-0 z-[2] plant-sway w-full"
        style={{animationDelay: '0.3s'}}
      />
      <img
        src="/assets/plant/leaf3.png"
        alt=""
        className="absolute top-0 left-0 z-[3] plant-sway w-full"
        style={{animationDelay: '0.2s'}}
      />
      <img
        src="/assets/plant/leaf4.png"
        alt=""
        className="absolute top-0 left-0 z-[4] plant-sway w-full"
        style={{animationDelay: '0s'}}
      />
    </div>
  );
};

export default PlantDecor;