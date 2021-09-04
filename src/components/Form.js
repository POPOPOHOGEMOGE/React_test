//Form.js



//http://api.weatherapi.com/v1/current.json?key=22bee9d1ff0e48e08f6161518213107&q=London&aqi=no

const Form = (props) => {
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
      <button type="submit" onClick={props.getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;
