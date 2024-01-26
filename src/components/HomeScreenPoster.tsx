const HomeScreenPoster = () => {
  return (
    <div className="home-poster w-full">
      {/* ---> for Desktop  */}
      <div className="hidden md:block md:px-10 lg:px-20">
        <div className="w-full ">
          <img src="/home-screen-poster.webp" alt="home screen poster" />
        </div>

        <div className="flex gap-4 px-2 my-3 overflow-scroll hide-scrollbar">
          <img
            src="/pharmacy-cat.avif"
            alt="pharmacy-poster"
            className="h-40"
          />
          <img src="/petcare.avif" alt="petcare-poster" className="h-40" />
          <img
            src="/babycare-cat.avif"
            alt="babycare-poster"
            className="h-40"
          />
        </div>
      </div>
      {/* ---> for Mobile and tables  */}
      <div className="md:hidden mt-[6.3rem] bg-[#072E25]">
        <picture>
          <source
            srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-09/01_1.png"
            media="(max-width: 520px)"
          />
          <source srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/01_1.png" />
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/01_1.png"
            alt="paan corner"
            width="100%"
            className="object-cover"
          />
        </picture>
        <video
          playsInline
          poster="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/layout-engine/2023-09/image_3.png"
          className="object-cover"
          width="100%"
          loop
          muted
          autoPlay
        >
          <source
            src="https://cdn.grofers.com/layout-engine/2023-09/pann-animation_0.mp4"
            type="video/mp4"
          />
          <track kind="captions" />
        </video>
        <picture>
          <source
            srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-09/03_0.png"
            media="(max-width: 520px)"
          />
          <source srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/03_0.png" />
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/03_0.png"
            alt="paan corner"
            width="100%"
            className="object-cover"
          />
        </picture>
        <picture>
          <source
            srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-09/04.png"
            media="(max-width: 520px)"
          />
          <source srcSet="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/04.png" />
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2023-09/04.png"
            alt="paan corner"
            width="100%"
            className="object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeScreenPoster;
