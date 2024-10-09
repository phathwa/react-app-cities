
interface Props{
    selectedCity: number;
}
const CityInfo = ({selectedCity}: Props) => {
  return (
    <>
        <div>CityInfo</div>
        <p>city name: </p>
        <p>population: {selectedCity} </p>
    </>

  )
}

export default CityInfo