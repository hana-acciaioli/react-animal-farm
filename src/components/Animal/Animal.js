import './Animal.css';
export default function Animal(props) {
  return (
    <div className="animal">
      <h2>{props.name}</h2>
      console.log(props.name);
    </div>
  );
}
