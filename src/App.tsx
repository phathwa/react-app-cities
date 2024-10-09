import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import CityInfo from "./components/CityInfo";

function App() {
  let items = ["Jozi", "Pitori", "Mbombela", "Cape Town"];
  let name = "Milani";

  const [selectedCity, setSelectedCity] = useState<number>(-1);
  const [cityInfoVisible, setCityInfoVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (index: number, item: string) => {
    console.log(index, item);
    setCityInfoVisible(true);
    setSelectedCity(index);  // Update state
    console.log(selectedCity);
  };

  const handleClickBtn = () => {
    console.log("button clicked!");
    setAlertVisible(true);
  };

  const handleOnClose = () => {
    console.log("Closing alert");
    setAlertVisible(false);
  };

  return (
    <div className="mx-3">
      {alertVisible && (
        <Alert onClose={handleOnClose}>
          Hello <span className="text-white">{name}</span>
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Button color="success" onClick={handleClickBtn}>
        Click Me
      </Button>
      <hr />
      {cityInfoVisible && (
        <CityInfo selectedCity={selectedCity}>
        
        </CityInfo>
      )}
    </div>
  );
}

export default App;
