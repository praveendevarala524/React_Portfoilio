import {useState} from "react";
import Card from "../components/Card";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";

const Faq =({faq}) =>{

    const[showAnswer,setShowAnswer] =useState(false);

    const togglebutton = () =>{
        //console.log("Clicked");
        setShowAnswer(!showAnswer);
    }

    return(
        <>
       <Card className="faq" >
       <div>
            <h5 className="faq_question">{faq.question}</h5>
           <button className="faq_icon" onClick={togglebutton}>
            {showAnswer? <AiOutlineMinus/>:<AiOutlinePlus/>}
           </button>
        </div>

        {showAnswer && ( <p className="faq_answer">{faq.answer}</p>)}
       </Card>
        </>
    );
}

export default Faq;