function CardImage() {
  return (
    <div className="card">
      <div clasName="embed-responsive embed-responsive-16by9 card-img-top"></div>
      <iframe
        className="card-img-top"
        src="https://www.youtube.com/embed/ex5MFr6GYU0?si=FrRkZn8oDeZrbZm_"
        allowFullScreen
      ></iframe>
      <br />
    </div>
  );
}

export default CardImage;
