import { Container, Content, Form, FormFooter } from './styles'

export function ContactMe () {
  return (
    <Container id="ContactMe">
      <Content>
        <h4>
          Vamos nos conectar e ficar por dentro.
        </h4>
        <p>Envie-me uma mensagem! </p>
        
        <Form>
        
        <label htmlFor="">Nome</label>
        <input type="text" name="name" id=""/>

        <label htmlFor="">Endereço de Email</label>
        <input type="text" name="email" id=""/>

        <label htmlFor="">Detalhes</label>
        <input type="text" name="detail" id=""/>

       
        </Form>
        
        <FormFooter>
          <a href="#">Enviar</a>
        </FormFooter>

      </Content>
    </Container>
  );
}