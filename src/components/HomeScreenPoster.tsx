import { useNavigate } from "react-router-dom";

const HomeScreenPoster = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-poster w-full">
      {/* ---> for Desktop  */}
      <div className="hidden md:block md:px-10 lg:px-20">
        <div
          onClick={() =>
            handleNavigate(
              `/cn/mouth-fresheners/cid/65867534c36d36ab96259635/6586e760d2a1fb3dc872f93a`
            )
          }
          className="w-full "
        >
          <img src="/home-screen-poster.webp" alt="home screen poster" />
        </div>

        <div className="flex gap-4 px-2 my-3 overflow-scroll hide-scrollbar">
          <img
            onClick={() =>
              handleNavigate(
                `/cn/cough-&-cold/cid/65868def6b306717f9c4fe22/6586eb2cd2a1fb3dc87304b1`
              )
            }
            src="/pharmacy-cat.avif"
            alt="pharmacy-poster"
            className="h-40"
          />
          <img
            onClick={() =>
              handleNavigate(
                `/cn/dog-food/cid/65868e596b306717f9c4ff62/6586ecbed2a1fb3dc873179e`
              )
            }
            src="/petcare.avif"
            alt="petcare-poster"
            className="h-40"
          />
          <img
            onClick={() =>
              handleNavigate(
                `/cn/diapering/cid/65868dc96b306717f9c4fe20/659bd13eae0abd048610d511`
              )
            }
            src="/babycare-cat.avif"
            alt="babycare-poster"
            className="h-40"
          />
        </div>
      </div>
      {/* ---> for Mobile and tables  */}
      <div className="md:hidden mt-[6.3rem] bg-[#072E25]">
        <picture
          onClick={() =>
            handleNavigate(
              `/cn/mouth-fresheners/cid/65867534c36d36ab96259635/6586e760d2a1fb3dc872f93a`
            )
          }
        >
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
