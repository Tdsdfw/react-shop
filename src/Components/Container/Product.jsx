function Product(props) {
  const product = props.products;

  return (
    <div>
      {product.map((item, idx) => (
        <div className="col-md-4" key={idx}>
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (item.id + 1) +
              ".jpg"
            }
            width="80%"
          />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Product;
