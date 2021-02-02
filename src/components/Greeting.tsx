import { useState, useEffect } from "react";

const Greeting = () => {
  let todaysDate = new Date();
  let hour: number = todaysDate.getHours();

  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const bgGreeting = () => {

      if (hour < 12) {
        setGreeting("Good Morning, Chris");
      } 
      else if (hour < 18) {
        setGreeting("Good Afternoon, Chris");
      } 
      else {
        setGreeting("Good Evening, Chris");
      }
    };

    bgGreeting();
  }, [hour]);

  return <div>{greeting}</div>;
};
export default Greeting;
