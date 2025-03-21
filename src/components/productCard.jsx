import "./../styles/prodcard.css";

function ProductCard({ name, category, description, price, oldPrice, discount, image, reviews, rating }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="tag">Novo</div>
      </div>
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-title">{name}</h3>
        <div className="rating">
          <div className="stars">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</div>
          <div className="review-count">({reviews} avaliações)</div>
        </div>
        <p className="product-description">{description}</p>
        <div className="product-price">
          <div className="current-price">R$ {price}</div>
          <div className="old-price">R$ {oldPrice}</div>
          <div className="discount">-{discount}%</div>
        </div>
        <div className="product-options">
          <div className="color-option color-black active" title="Preto"></div>
          <div className="color-option color-blue" title="Azul Marinho"></div>
          <div className="color-option color-pink" title="Rosa Quartzo"></div>
        </div>
        <button className="add-to-cart">ADICIONAR AO CARRINHO</button>
        <div className="product-meta">
          <span>Frete grátis</span>
          <span>Disponível em estoque</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
