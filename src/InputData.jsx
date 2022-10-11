

const InputData = ({setLahir, setGender, lahir, gender, getNames}) => {
  const setDiss = lahir === "" || gender === ""
  const cek = () => {
    alert("berhasil")
  }

  return (
    <div className="wrapper">
      <div className="wrapper-date">
        <label htmlFor="lahir">Expected birth date</label>
        <input type="date" name="lahir" id="in-lahir" onChange={(e)=>setLahir(e.target.value.split("-"))}/>
      </div>
      <div className="wrapper-sex">
        <label htmlFor="Baby-g">baby gender </label>
        <div className="wrapper-sex-option" onChange={(e)=>{setGender(e.target.value)}}>
          <div>
            <input type="radio" name="lahir" id="r1-lahir" value={"male"} />{" "}
            <span className="r1">Male</span>
          </div>
          <div>
            <input type="radio" name="lahir" id="r2-lahir" value={"female"} />{" "}
            <span className="r2">Female</span>
          </div>
          <div>
            <input type="radio" name="lahir" id="r3-lahir" value={"other"} />{" "}
            <span className="r3">Unspecified</span>
          </div>
        </div>
      </div>
      <button disabled={setDiss} onClick={getNames}>Generate</button>
    </div>
  );
};
export default InputData;
