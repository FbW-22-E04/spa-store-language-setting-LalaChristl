import React from "react";
import  {LanguageContext} from '../Contexts/Context'
import { useContext } from "react";


export const messages = {
     EN: "Hello World" ,
     SP: "Hola Mundo" ,
     AR: "مرحبا بالعالم" ,
     UR: "ہیلو ورلڈ" ,
     DE: "Hallo Welt" ,
     FR: "Bonjour Le Mond" ,
  }
const WelcomeMessage = () => {

    const{language, setLanguage} = useContext(LanguageContext)


  return (
    <div>
      
      <h1 className="text-5xl m-5">{messages[language]}</h1>
    </div>
  );
};

export default WelcomeMessage;
