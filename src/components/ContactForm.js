import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 2700px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 93%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DivInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 6rem;

  @media (max-width: 3400px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 3000px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 2400px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1900px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`;

const LabelContact = styled.label`
  font-size: 6rem;
  margin-bottom: 1rem;

  @media (max-width: 3600px) {
    font-size: 5.6rem;
  }

  @media (max-width: 3400px) {
    font-size: 5.4rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.2rem;
  }

  @media (max-width: 3200px) {
    font-size: 5rem;
  }

  @media (max-width: 3100px) {
    font-size: 4.5rem;
  }

  @media (max-width: 3000px) {
    font-size: 4.5rem;
  }

  @media (max-width: 2900px) {
    font-size: 4rem;
  }

  @media (max-width: 2800px) {
    font-size: 3.7rem;
  }

  @media (max-width: 2500px) {
    font-size: 3.4rem;
  }

  @media (max-width: 2400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 2200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 2000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 900px) {
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
  }

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const InputContact = styled.input`
  width: 87%;
  outline: none;
  font-size: 6rem;
  padding: 1.5rem;
  border-radius: 25px;

  @media (max-width: 3600px) {
    font-size: 5.6rem;
    width: 86%;
  }

  @media (max-width: 3400px) {
    font-size: 5.4rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.2rem;
  }

  @media (max-width: 3200px) {
    font-size: 5rem;
    padding: 1.3rem;
  }

  @media (max-width: 3100px) {
    font-size: 4.5rem;
    padding: 1.2rem;
    width: 87%;
  }

  @media (max-width: 3000px) {
    font-size: 4.5rem;
  }

  @media (max-width: 2900px) {
    font-size: 4rem;
    width: 88%;
  }

  @media (max-width: 2800px) {
    font-size: 3.7rem;
  }

  @media (max-width: 2500px) {
    font-size: 3.4rem;
  }

  @media (max-width: 2400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 2200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 2000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1800px) {
    width: 87%
  }

  @media (max-width: 1700px) {
    width: 86%
  }

  @media (max-width: 1700px) {
    width: 85%
  }

  @media (max-width: 1600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1400px) {
    width: 83%;
  }

  @media (max-width: 1300px) {
    width: 82%;
  }

  @media (max-width: 1200px) {
    width: 81%;
  }

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 79%;
  }

  @media (max-width: 900px) {
    font-size: 3.2rem;
    width: 100%;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
  }

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
`;

const DivTextArea = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 6rem;
  flex-direction: column;

  textarea {
    border-radius: 1.5rem;
    outline: none;
    padding: 2.5rem;
    resize: none;
    font-size: 6rem;
    margin-top: 3rem;

    @media (max-width: 3600px) {
      font-size: 5.6rem;
    }

    @media (max-width: 3400px) {
      font-size: 5.4rem;
    }

    @media (max-width: 3300px) {
      font-size: 5.2rem;
    }

    @media (max-width: 3200px) {
      font-size: 5rem;
    }

    @media (max-width: 3100px) {
      font-size: 4.5rem;
    }

    @media (max-width: 3000px) {
      font-size: 4.5rem;
    }

    @media (max-width: 2900px) {
      font-size: 4rem;
    }

    @media (max-width: 2800px) {
      font-size: 3.7rem;
    }

    @media (max-width: 2600px) {
      margin-top: 1rem;
    }

    @media (max-width: 2500px) {
      font-size: 3.4rem;
    }

    @media (max-width: 2400px) {
      font-size: 3.2rem;
    }

    @media (max-width: 2200px) {
      font-size: 2.8rem;
    }

    @media (max-width: 2000px) {
      margin-top: 0;
      font-size: 2.6rem;
    }

    @media (max-width: 1600px) {
      font-size: 2.4rem;
    }

    @media (max-width: 900px) {
      font-size: 3.2rem;
      padding: 1.5rem;
    }

    @media (max-width: 800px) {
      font-size: 2.8rem;
    }

    @media (max-width: 700px) {
      font-size: 2.4rem;
    }

    @media (max-width: 600px) {
      font-size: 1.8rem;
      padding: 1rem;
    }
  }

  @media (max-width: 2600px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 2300px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 1800px) {
    margin-bottom: 3rem;
  }
`;

const DivButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10rem;

  @media (max-width: 3500px) {
    margin-bottom: 7.5rem;
  }

  @media (max-width: 2700px) {
    margin-bottom: 6rem;
  }

  @media (max-width: 2600px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 2300px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 1800px) {
    margin-bottom: 3rem;
  }
`;

const ButtonContact = styled.button`
  width: 20%;
  outline: none;
  font-size: 6rem;
  padding: 2rem 0;
  border-radius: 2rem;
  background-color: #146a94;
    background: linear-gradient(to top,#78d0fb,#146a94);
    border-color: #146a94;
  background-color: ${props => props.submit ? '146a94' : '#dddddd'};
  background: ${props => props.submit ? 'linear-gradient(to top, #146a94, #78d0fb)' : 'linear-gradient(to top, #dddddd, #ffffff)'};
  border-color: ${props => props.submit ? '#2279a3' : '#dddddd'};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:active {
    background: ${props => props.submit ? 'linear-gradient(to top, #78d0fb, #146a94)' : 'linear-gradient(to top, #ffffff, #dddddd)'};
    text-decoration: none;
  }

  &:hover {
    font-weight: bold;

    @media (max-width: 900px) {
      font-weight: normal;
    }
  }

  @media (max-width: 3600px) {
    font-size: 5.6rem;
  }

  @media (max-width: 3400px) {
    font-size: 5.4rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.2rem;
  }

  @media (max-width: 3200px) {
    font-size: 5rem;
  }

  @media (max-width: 3100px) {
    font-size: 4.5rem;
  }

  @media (max-width: 3000px) {
    font-size: 4.5rem;
  }

  @media (max-width: 2900px) {
    font-size: 4rem;
  }

  @media (max-width: 2800px) {
    font-size: 3.7rem;
  }

  @media (max-width: 2500px) {
    font-size: 3.4rem;
  }

  @media (max-width: 2400px) {
    font-size: 3.2rem;
  }

  @media (max-width: 2200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 2000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1900px) {
    padding: 1rem 0;
    width: 18%;
  }

  @media (max-width: 1600px) {
    font-size: 2.4rem;
    width: 19%;
  }

  @media (max-width: 1500px) {
    width: 20%;
  }

  @media (max-width: 1400px) {
    width: 21%;
  }

  @media (max-width: 1300px) {
    width: 23%;
  }

  @media (max-width: 1200px) {
    width: 24%;
  }

  @media (max-width: 1100px) {
    width: 25%;
  }

  @media (max-width: 1000px) {
    width: 27%;
  }

  @media (max-width: 900px) {
    font-size: 3.2rem;
    padding: 1.5rem 0;
    width: 26%;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
  }

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    width: 28%;
  }

  @media (max-width: 500px) {
    width: 32%;
  }

  @media (max-width: 450px) {
    width: 33.5%;
  }

  @media (max-width: 400px) {
    width: 35%;
  }

  @media (max-width: 350px) {
    padding: 1.2rem 0;
    width: 34%;
  }
`;

/********************************************* Component ******************************************/
const ContactForm = props => {
  return (
    <DivContactContainer>
      <FormContact>
        <DivInput>
          <LabelContact htmlFor="name" name="true">Name:&nbsp;</LabelContact>
          <InputContact type="text" name="name" id="name" required />
        </DivInput>
        <DivInput>
          <LabelContact htmlFor="email" email="true">Email:&nbsp;</LabelContact>
          <InputContact type="email" name="email" id="email" required />
        </DivInput>
        <DivInput>
          <LabelContact htmlFor="subject" subject="true">Subject:&nbsp;</LabelContact>
          <InputContact type="text" name="subject" id="subject" autoComplete="off" required />
        </DivInput>
        <DivTextArea>
          <LabelContact htmlFor="message">Message:</LabelContact>
          <textarea name="message" id="message" rows="6" required />
        </DivTextArea>
        <DivButtons>
          <ButtonContact submit type="button">Send</ButtonContact>
          <ButtonContact type="button">Clear</ButtonContact>
        </DivButtons>
      </FormContact>
    </DivContactContainer>
  );
};

export default ContactForm;