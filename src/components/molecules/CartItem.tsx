import AddButton from "./AddItemToCartButton";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex gap-2">
        <div className="border border-zinc-200 rounded-md overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/images/products/sliding_image/170a.jpg?ts=1689327537"
            alt="product"
            className="h-14 "
          />
        </div>
        <div className="text-[11px] flex flex-col">
          <h3>Amul Cheese Cubes</h3>
          <h4 className="text-zinc-400">200 g</h4>
          <h4>
            <span className="font-[500] ">₹134</span>
            <span className="ml-1 line-through text-zinc-400">₹135</span>
          </h4>
        </div>
      </div>

      <div>
        <AddButton />
      </div>
    </div>
  );
};

export default CartItem;
