const MyWallet = () => {
  return (
    <div className="w-full h-[90vh] md:h-full pt-3 p-2 md:p-3 ">
      <div className="w-full h-24 bg-zinc-100 md:border border-zinc-200 rounded-sm flex justify-center items-center flex-col ">
        <span className="text-xxs text-zinc-500"> My Balance:</span>
        <span className="text-2xl font-semibold">₹0</span>
      </div>
    </div>
  );
};

export default MyWallet;
