const HomeScreenPoster = () => {
  return (
    <div className="home-poster ">
      <div>
        <img src="/home-screen-poster.webp" alt="home screen poster" />
      </div>

      <div className="flex gap-4 px-4 my-3 overflow-scroll hide-scrollbar">
        <img src="/pharmacy-cat.avif" alt="pharmacy-poster" className="h-40" />
        <img src="/petcare.avif" alt="petcare-poster" className="h-40" />
        <img src="/babycare-cat.avif" alt="babycare-poster" className="h-40" />
      </div>
    </div>
  );
};

export default HomeScreenPoster;
