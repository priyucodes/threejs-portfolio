import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Map from "./Map";
import { useRef, useState } from "react";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;
const Button = styled.button`
  color: #fff;
  background-color: #da4ea2;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  // alternative useState
  const ref = useRef();
  // https://stackoverflow.com/questions/23427384/get-form-data-in-react
  // https://react-hook-form.com/

  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    // Sanitize inputs or check my portfolio source code where we used sendgrid and nextjs api routes
    if (
      e.target.name.value.trim().length === 0 ||
      e.target.email.value.trim().length === 0 ||
      e.target.message.value.trim().length === 0
    ) {
      setSuccess(false);
      setInfo("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        // process.env.VITE_SERVICE_ID,
        import.meta.env.VITE_SERVICE_ID,
        // process.env.VITE_TEMPLATE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        ref.current
        // process.env.VITE_PUBLIC_KEY
        // import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          setSuccess(true);
          setInfo("Your message has been sent. We'll get back to you soon :)");
        },
        error => {
          console.log(error.text);
          setSuccess(false);
          setInfo("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" type="email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows="10"
            />
            <Button type="submit">Send</Button>
            {(success || info) && info}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};
export default Contact;
