export const Header = () => {
  let imageObject = {
    imgUrl: "./solarSystem.jpg",
    imgAlt: "An Image of the Solar System",
  };

  return (
    <header>
      <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
    </header>
  );
};
