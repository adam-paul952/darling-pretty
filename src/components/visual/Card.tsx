import { Link } from "react-router-dom";

interface ITailwindCSSCardProps {
  image: string;
  imageAlt: string;
  link: string;
  title: string;
  date: string;
  price?: number;
  state: any;
}

const TailwindCSSCard = (props: ITailwindCSSCardProps) => {
  return (
    <div className="container mx-auto my-1 flex items-start">
      <div className="bg-gray-200 rounded-xl p-6">
        <Link to={props.link} state={props.state}>
          <img className="rounded-xl" src={props.image} alt={props.imageAlt} />
        </Link>
        <h3 className=" my-1 text-2xl font-bold mb-2">{props.title}</h3>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <hr className="my-1" />
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default TailwindCSSCard;
