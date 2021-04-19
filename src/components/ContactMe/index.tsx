import { useState } from 'react';
import { Container, Content, Form, FormFooter } from './styles'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_LERW2YNYXTMU5Jiq0jVMK");

export function ContactMe () {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  
  const handleSubmitEmail = (e)  => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      return
    }
    
    emailjs.send("service_q8o6r4c","template_ghx0jia",{
      email_adress: email,
      from_name: name,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');

    alert('E-mail enviado com sucesso!')
  }

  return (
    <Container id="ContactMe">
      <Content>
        <h4>
          Vamos nos conectar e ficar por dentro.
        </h4>
        <p>Envie-me uma mensagem! </p>
        
        <Form onSubmit={handleSubmitEmail} id="formEmailSubmit">
        
        <label htmlFor="">Nome</label>
        <input 
          type="text" 
          name="name" 
          id="formName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Endereço de Email</label>
        <input 
          type="email" 
          name="email" 
          id="formEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Detalhes</label>
        <input 
          type="text" 
          name="detail" 
          id="formDetail"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <FormFooter>
          <input 
            type="submit" 
            value="Enviar"
          />
        </FormFooter>

       
        </Form>
        
        
      </Content>
    </Container>
  );
}