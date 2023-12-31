const MyAddresses = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-2 text-center ">
      <div className="h-40 w-40 mt-14">
        <img
          src="https://blinkit.com/c55c5f6ddd0e42607e6c.png"
          alt="No Saved Addresses"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-sm">You have no saved addresses</h2>
        <h3 className="text-xs text-zinc-400 mt-1">
          Tell us where you want your orders delivered
        </h3>
      </div>

      <button className="text-xs text-white bg-primary hover:bg-primary/90 px-2 py-2 rounded-sm mt-4 duration-300">
        Add New Address
      </button>
    </div>
  );
};

export default MyAddresses;
