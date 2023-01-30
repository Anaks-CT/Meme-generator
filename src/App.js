import products from "./db/productDetails";
import Header from "./components/header";

function App() {
  const productElements = products.map((item) => {
    return (
      <div className="col-3 border m-3 shadow rounded">
        <Header item={item} />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row d-flex ">
          {productElements}
        </div>
      </div>
    </div>
  );
}

export default App;
