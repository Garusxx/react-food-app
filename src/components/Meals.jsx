import useHttp from "../hooks/useHttp";
import MealsItem from "./MealsItem";
import Error from "./Error";

const requestConfig = {}

export default function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);

  

  if(isLoading){
    return <p className="center">Loading...</p>
  }

  if(error) {
    return <Error title='Failed to featch meals' message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
