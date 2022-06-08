export const Showcase = ({ productsList }) => {
  return (
    <>
      {productsList?.map(({ id, img, name, category, price }) => (
        <div key={id}>
          <img src={img} alt="name" />
          <h2>{name}</h2>
          <p>{category}</p>
          <span>{price}</span>
        </div>
      ))}
    </>
  );
};
