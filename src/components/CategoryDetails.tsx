import { FC } from "react";

interface IProps {
  categoryName: string;
}
const CategoryDetails: FC<IProps> = ({ categoryName }) => {
  return (
    <div className="md:mx-10 lg:mx-20 p-5 md:p-10 border border-t-0 border-zinc-200 md:shadow-md">
      <h2 className="font-semibold capitalize">{categoryName}</h2>
      <p className="text-sm text-zinc-500">
        Fresh vegetables are an essential part of a healthy diet. Packed with
        vitamins, minerals, and fiber, they provide numerous health benefits and
        contribute to overall well-being. In this article, we will explore the
        world of fresh vegetables, discussing their importance, nutritional
        value, selection, and storage.
      </p>
      <br />
      <p className="text-sm text-zinc-500">
        Importance of Fresh Vegetables: <br /> Including fresh vegetables in
        your diet offers a myriad of advantages for your health: Nutrient-rich:
        Fresh vegetables are abundant in essential nutrients, such as vitamins
        (A, C, K, and B-complex), minerals (iron, potassium, and calcium), and
        dietary fiber.
      </p>
      <p className="text-sm text-zinc-500">
        Disease prevention: The consumption of fresh vegetables has been linked
        to a reduced risk of chronic diseases, including heart disease, certain
        types of cancer, and obesity. <br /> Weight management: Vegetables are
        generally low in calories and high in fiber, making them ideal for
        weight management and maintaining a healthy body weight.
        <br /> Digestive health: The fiber content in fresh vegetables promotes
        healthy digestion, aids in regular bowel movements, and contributes to
        gut health.
      </p>{" "}
      <br />
      <p className="text-sm text-zinc-500">
        Nutritional Value of Fresh Vegetables: <br /> Different types of fresh
        vegetables offer varying nutritional profiles. Here are some examples of
        commonly consumed vegetables and their key nutrients: Leafy Greens
        (Spinach, Kale, and Lettuce): Rich in vitamins A, C, K, and folate, as
        well as minerals like iron and calcium. <br /> Cruciferous Vegetables
        (Broccoli, Cauliflower, and Brussels Sprouts): Packed with vitamin C,
        fiber, and phytochemicals that may have anti-cancer properties. <br />{" "}
        Root Vegetables (Carrots, Potatoes, and Sweet Potatoes): Excellent
        sources of vitamin A, potassium, and dietary fiber. <br /> Allium
        Vegetables (Onions, Garlic, and Leeks): Contain sulfur compounds that
        may offer immune-boosting and anti-inflammatory benefits. <br />{" "}
        Colorful Vegetables (Bell Peppers, Tomatoes, and Eggplants):
        Vibrant-colored vegetables are rich in vitamins, antioxidants, and
        phytochemicals that support overall health.
      </p>
    </div>
  );
};

export default CategoryDetails;
