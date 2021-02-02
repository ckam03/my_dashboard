interface weatherProps {
  temperature: string;
  location: string;
  icon: any;
}

const Weather = ({ temperature, location, icon }: weatherProps) => {
  return (
    <div className="flex items-center">
      It's
      {<img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon" />}
      {temperature}&deg; in {location}
    </div>
  );
};
export default Weather;
