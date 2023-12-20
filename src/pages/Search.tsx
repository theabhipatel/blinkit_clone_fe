// import { useSearchParams } from "react-router-dom";

import { Helmet } from "react-helmet";

const Search = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <Helmet>
        <title>Search </title>
      </Helmet>
      <img src="/not-found.webp" alt="not-found-image" className="h-52" />
      <h3 className="text-4xl mt-5 font-semibold text-zinc-400">
        Nothing here yet
      </h3>
    </div>
  );
};

export default Search;
