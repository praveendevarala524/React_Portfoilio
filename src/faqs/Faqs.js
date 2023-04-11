import faq from "./data";
import Faq from "./Faq";
import "./faq.css";

const Faqs = () =>{
    return (
        <>
        <section id="faqs">
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some questions I usually get click to toggle the answer , and if you still have more questions , message from the contact section!
            </p>

            <div className="container faqs_container">
                {
                    faq.map(faq=>(
                       <Faq key={faq.id} faq={faq} />
                    ))
                }
            </div>
        </section>
        </>
    )
}

export default Faqs;