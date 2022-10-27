
import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {CgVoicemailR} from 'react-icons/cg'
import {FaFacebookMessenger} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='contact'>
    <h4>Get In Touch</h4>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className='contact_options'></div>
        <article className='contact_option'>
        <AiOutlinePhone className='contact_option-icon'/> <CgVoicemailR className='contact_option-icon'/>
        <h4>Voice Call</h4>
        <h5>+1(860)358-0164</h5>
        </article>

        <article className='contact_option'>
        <AiTwotoneMail className='contact_option-icon'/>
        <h4> Email</h4>
        <h5>pmopk37@gmail.com</h5>
        <a href='mailto:pmopk37@gmail.com' target="_blank">Send a Message</a>
        </article>
  
        <article className='contact_option'>
        <FaFacebookMessenger className='contact_option-icon'/>
        <h4>Messenger</h4>
        <h5>philemon.abdellahkirlles</h5>
        <a href='https://m.me/philemon.abdellahkirlles' target="_blank">Send a Message</a>
        </article>
      </div>  

      {/* form */}
      <form action=''>
        <input type="text" name='name' placeholder= 'philemon AbdEllah Kirlles' required/>
        <input type="email" name='email' placeholder= 'pmopk37@gmail.com' required/>
        <textarea name='message' rows="7" placeholder= 'Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>

      </form>
    </section> 
    )}


export default Contact


// import { validateEmail } from "../../assets/utils/helpers";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import InputGroup from "react-bootstrap/InputGroup";
// import Nav from "react-bootstrap/Nav";


// function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     company: "",
//     email: "",
//     message: "",
//   });
//   const { name, company, email, message } = formState;
//   const [errorMessage, setErrorMessage] = useState("");

//   function handleChange(e) {
//     // validates email with imported function
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }

//   return (
//     <Container
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Form id="contact" onSubmit={handleSubmit} style={{}}>
//         <div>       
//           <h4> 
//           <Nav.Link className="contactEmail" href="mailto:philemon.kirlles@gmail.com"> Philemon AbdEllah Kirlles</Nav.Link>
//           </h4>
        
//         </div>
//         <Row>
//           <Col>
//             <Form.Control
//               className="formBack"
//               type="text"
//               defaultValue={name}
//               onBlur={handleChange}
//               name="name"
//               placeholder="Your Name"
//             />
//           </Col>
//           <Col>
//             <Form.Control
//             className="formBack"
//               type="text"
//               defaultValue={company}
//               onBlur={handleChange}
//               name="company"
//               placeholder="Your Company"
//             />
//           </Col>
//         </Row>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label></Form.Label>
//           <Form.Control
//           className="formBack"
//             type="email"
//             defaultValue={email}
//             onBlur={handleChange}
//             name="email"
//             placeholder="Enter email"
//           />
//         </Form.Group>
//         <InputGroup>
//           <InputGroup.Text className="formText">Message</InputGroup.Text>
//           <Form.Control
//           className="formBack"
//             as="textarea"
//             aria-label="With textarea"
//             name="message"
//             defaultValue={message}
//             onBlur={handleChange}
//             rows="5"
//           />
//         </InputGroup>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <Button className="submitBtn" variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }


// export default Contact;
