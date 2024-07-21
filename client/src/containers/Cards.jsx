import CardImage from "../components/CardImage";
import CardDescription from "../components/CardDescription";
import CardButton from "../components/CardButton";

function Cards() {
  return (
    <div>
      <div class="col-lg-4 examples">
        <div class="card">
          <CardImage />
          <div class="card-body">
            <CardDescription />
            <CardButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
