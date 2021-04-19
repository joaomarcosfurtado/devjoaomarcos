import styled from "styled-components";

export const Container = styled.section`
width: 300px;

img {
  width: 300px;
  height: 202px;
  border-radius: 5px;
}

h2 {
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 12px;
}

p {
  max-width: 300px;
  margin-bottom: 12px;
}

button {
  font-weight: 300;
  opacity: 0.8;
  font-size: 1rem;
  color: #000;
  border: none;
  background-color: transparent;
  text-decoration: underline;
}

-moz-animation: all 0.3s;
animation: all 0.3s;
-webkit-transition: all 0.3;
transition: all 0.3s;

&:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

`
export const Description = styled.div`
  height: 230px;

  @media (max-width: 880px) {
    height: 210px;
  }
`
