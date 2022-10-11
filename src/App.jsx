import Header from "./Header";
import InputData from "./InputData";
import ShowNama from "./ShowNama";
import LoadingLine from "./LoadingLine";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [names, setNames] = useState([]);
  const [lahir, setLahir] = useState("");
  const [gender, setGender] = useState("");

  //   get names
  const getNames = async () => {
    setIsLoading(true);

    let nameArr = [];
    if (gender !== "other") {
      for (let i = 0; i < 5; i++) {
        let res = "";
        while (res.gender != gender) {
          let x = await axios.get("https://randomuser.me/api/");
          res = x.data.results[0];
        }
        nameArr.push(res);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let res = "";
        let x = await axios.get("https://randomuser.me/api/");
        res = x.data.results[0];
        nameArr.push(res);
      }
    }
    setIsLoading(false);
    setNames(nameArr);
  };

  const anotherNames = () => {
    setNames([]);
    getNames();
  };

  const dataReset = () => {
    setNames([]);
    setLahir("");
    setGender("");
  };

  return (
    <div className="app">
      <Header />
      {names.length === 0 && (
        <InputData
          setLahir={setLahir}
          setGender={setGender}
          lahir={lahir}
          gender={gender}
          getNames={getNames}
        />
      )}
      {isLoading && <LoadingLine />}
      {names.length > 0 && (
        <ShowNama names={names} getNames={getNames} dataReset={dataReset} />
      )}
    </div>
  );
};

export default App;
