import './App.css';
import ListReviews from './ListReviews';

function App() {
  return (
    <div className="Containerbox">
      <div className="Parentbox">
        <PhotosProduct />
        <DescriptionProduct
          title="Black Shoes"
          category="SPORT"
          isDiscount={true}
          listbenefits={["Cocok dipakai untuk olahraga", "Ringan, Nyaman dan Berkualitas", "Harga sangat terjangkau"]}
        />
      </div>
      <div className="CustomerReviews">
        <h4>Review :</h4>
        <ListReviews />
      </div>
    </div>
  );
}

function PhotosProduct() {
  return (
    <div className="Photos">
      <img src="black-shoes.jpg" alt="Shoes"></img>
    </div>
  );
}

function Discount(props) {
  const { isDiscount } = props;

  if (isDiscount) {
    return (
      <p>Discount 50%</p>
    );
  } else {
    return (
      <p>Belum Ada Discount</p>
    );
  }
}

function DescriptionProduct(props) {
  const { category, title, isDiscount, listbenefits } = props;
  const listItems = listbenefits.map((item) => <li key={item}>{item}</li>)

  return (
    <div className="Description">
      <p className="Cate">{category}</p>
      <p className="Title">{title}</p>
      <p className="Price">$15</p>
      <Discount isDiscount={isDiscount} />
      <p className="Info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores nostrum omnis, tempora neque quae earum aperiam sapiente, ipsum deleniti asperiores, dignissimos quaerat voluptas. Voluptatibus perspiciatis at debitis repudiandae cumque?</p>
      <ul className="ListBenefits">
        {listItems}
      </ul>
      <a href="#top" onClick={(event) => addToCart(title, event)} className="ButtonAdd">Add to Cart</a>
    </div>
  );
}

function addToCart(event) {
  console.log(`Barang ${event} telah ditambahkan.`)
}

export default App;
