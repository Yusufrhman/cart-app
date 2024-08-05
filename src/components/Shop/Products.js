import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Chocolate Roll Cake",
    price: 15000,
    description:
      "Delicious and rich chocolate roll cake made with premium ingredients.",
  },
  {
    id: 2,
    title: "Strawberry Roll Cake",
    price: 16000,
    description:
      "Soft and fluffy roll cake filled with fresh strawberry cream.",
  },
  {
    id: 3,
    title: "Matcha Roll Cake",
    price: 17000,
    description: "Aromatic matcha roll cake with a creamy matcha filling.",
  },
  {
    id: 4,
    title: "Vanilla Roll Cake",
    price: 14000,
    description:
      "Classic vanilla roll cake with a smooth and creamy vanilla filling.",
  },
  {
    id: 5,
    title: "Red Velvet Roll Cake",
    price: 18000,
    description:
      "Decadent red velvet roll cake with a tangy cream cheese filling.",
  },
  {
    id: 6,
    title: "Cheese Roll Cake",
    price: 15000,
    description: "Rich and creamy cheese roll cake with a hint of sweetness.",
  },
  {
    id: 7,
    title: "Black Forest Roll Cake",
    price: 19000,
    description:
      "Classic Black Forest roll cake with cherries and chocolate cream.",
  },
  {
    id: 8,
    title: "Coffee Roll Cake",
    price: 16000,
    description:
      "Delicious coffee-flavored roll cake with a smooth coffee cream filling.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
