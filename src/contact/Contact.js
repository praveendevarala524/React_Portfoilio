import contacts from "./data";
import "./contact.css";
const Contact = () =>{
    return (
        <>
        <section id="contact">
            <h1>Get In Touch</h1>
            <p>
                contact with me via any of the link below
            </p>

            <div className="container contact_container">
                {
                    contacts.map(contact => <a key={contact.id} href={contact.link}
                    target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
                }
            </div>
        </section>
        </>
    )
}

export default Contact;