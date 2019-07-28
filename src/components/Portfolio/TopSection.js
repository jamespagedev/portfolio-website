import React from 'react';
import styled from 'styled-components';

// components
import CarouselEducation from '../Carousel/CarouselEducation.js';

// images
import myFaceImgImg from '../../assets/img/myFace.png';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.

const DivTop = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
  background-color: #013a6b;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -2px;
    left: 0;
    right: 0;
    background-color: #004e95;
    z-index: 2;
    clip-path: polygon(0% 100%, 44.5% 100%, 55.5% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #7FFF00;
    z-index: 1;
    clip-path: polygon(0% 100%, 45% 100%, 56% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/*--------------------------------------------- intro --------------------------------------------*/
const DivIntro = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  padding: 100px 0 0 35px;
  align-items: center;
  z-index: 3;

  @media (max-width: 900px) {
    width: 100%;
    padding: 5rem 2.5rem;
    justify-content: flex-start;
    border-bottom: 4px solid #7FFF00;
  }

  @media (max-width: 900px) {
    padding: 3rem 2.5rem;
  }
`;

const ImgFace = styled.img`
  width: 120px;
  height: 150px;
  border-radius: 15px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
  margin-bottom: 4rem;
`;

const H3Intro = styled.h3`
  text-align: center;
  width: 100%;
  margin-top: 30px;
  color: white;
  font-size: 6rem;
  line-height: 1.7;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
    padding-right: 10px;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    margin: 0;
    padding: 0;
  }
`;

const PCurrentFocus = styled.p`
  display: flex;
  width: 100%;
  font-weight: bold;
  flex-direction: column;
  margin-bottom: 30px;
  color: white;
  font-size: 6rem;
  line-height: 1.7;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
    padding-right: 12px;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }

  span {
    font-weight: normal;
    padding-left: 6rem;

    @media (max-width: 900px) {
      padding-left: 3rem;
    }
  }
`;

const PExploring = styled.p`
  display: flex;
  width: 100%;
  font-weight: bold;
  flex-direction: column;
  margin-bottom: 30px;
  color: white;
  font-size: 6rem;
  line-height: 1.7;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
    padding-right: 13.5px;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }

  span {
    font-weight: normal;
    padding-left: 6rem;

    @media (max-width: 900px) {
      padding-left: 3rem;
    }
  }
`;

const PEventually = styled.p`
  display: flex;
  width: 100%;
  font-weight: bold;
  flex-direction: column;
  margin-bottom: 30px;
  color: white;
  font-size: 6rem;
  line-height: 1.7;

  @media (max-width: 3600px) {
    font-size: 5rem;
  }

  @media (max-width: 3200px) {
    font-size: 4rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem
  }

  @media (max-width: 2400px) {
    padding-right: 15px;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }

  span {
    font-weight: normal;
    padding-left: 6rem;

    @media (max-width: 900px) {
      padding-left: 3rem;
    }
  }
`;

const PEducation = styled.p`
  width: 100%;
  margin-bottom: 3rem;
  color: white;
  font-size: 4.6rem;
  font-weight: bold;

  @media (max-width: 2600px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }
`;

/*--------------------------------------------- skills -------------------------------------------*/
const DivTopSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;
  padding: 3.5rem 7.5rem 3.5rem 6rem;

  @media (max-width: 1900px) {
    padding: 3.5rem 5rem 3.5rem 1.4rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    clip-path: none;
    padding: 3.5rem 2.5rem 0;
    border-bottom: 4px solid #7FFF00;
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Skills = styled.h1`
  color: white;
  align-self: center;
  margin: 0;
  user-select: none;
  font-size: 9rem;
  margin-bottom: 3.5rem;
  padding-left: 18rem;

  @media (max-width: 2600px) {
    font-size: 7rem;
  }

  @media (max-width: 2100px) {
    font-size: 6rem;
  }

  @media (max-width: 1800px) {
    font-size: 5rem;
    padding-left: 16rem;
  }

  @media (max-width: 1300px) {
    font-size: 4rem;
    padding-left: 14rem;
  }

  @media (max-width: 900px) {
    padding: 0;
  }

  @media (max-width: 500px) {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
`;

const DivTopSkillsCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.size === 'small' ? '80%' : props.size === 'medium' ? '90%' : '100%' };
  background: rgba(224, 224, 224, 0.5);
  border-radius: 15px;
  justify-content: space-evenly;
  margin-bottom: 7rem;
  padding: ${props => props.bot === 'true' ? '5rem 2rem' : '2rem'};

  @media (max-width: 1900px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1100px) {
    padding: ${props => props.bot === 'true' ? '4rem 0' : '2rem 0'};
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem;
    margin-bottom: 2.5rem;
  }
`;

const ImgSkill = styled.img`
  width: 30%;
  padding: ${props => props.top === 'true' ? '45px 110px 30px' : '30px 110px 45px'};
  margin-bottom: ${props => props.mb === 'true' ? '30px' : '0'};

  @media (max-width: 3200px) {
    padding: ${props => props.top === 'true' ? '30px 80px 15px' : '15px 80px 30px'};
  }

  

  @media (max-width: 2600px) {
    padding: ${props => props.top === 'true' ? '30px 70px 15px' : '15px 70px 30px'};
  }

  @media (max-width: 2300px) {
    padding: ${props => props.top === 'true' ? '30px 60px 15px' : '15px 60px 30px'};
  }

  @media (max-width: 2200px) {
    padding: ${props => props.top === 'true' ? '30px 50px 15px' : '15px 50px 30px'};
  }

  @media (max-width: 2000px) {
    padding: ${props => props.top === 'true' ? '30px 40px 15px' : '15px 40px 30px'};
  }

  @media (max-width: 1700px) {
    padding: ${props => props.top === 'true' ? '20px 30px 10px' : '10px 30px 20px'};
  }

  @media (max-width: 1450px) {
    padding: ${props => props.top === 'true' ? '20px 20px 10px' : '10px 20px 20px'};
  }

  @media (max-width: 1200px) {
    padding: ${props => props.top === 'true' ? '10px 10px 5px' : '5px 10px 10px'};
    margin-bottom: ${props => props.mb === 'true' ? '60px' : '0'};
  }

  @media (max-width: 900px) {
    margin-bottom: ${props => props.mb === 'true' ? '30px' : '0'};
  }
`;

/********************************************* Component ******************************************/
const TopSection = props => {
  return (
    <DivTop>
      <DivIntro>
        <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
        <H3Intro>Greetings, thank you for taking the time to visit my portfolio. I'm a full stack developer who enjoys working in all areas.</H3Intro>
        <hr style={{width: '60%', height: '3px', backgroundColor: 'white', margin: '10px 0 35px'}} />
        <PCurrentFocus>Current focus:<span>JavaScript, React/Redux, styled&nbsp;components, nodjs, express, knex</span></PCurrentFocus>
        <PExploring>Exploring:<span>django, aws, docker</span></PExploring>
        <PEventually>Eventually:<span>graphql, C#, ruby on rails, golang, gatsbyjs, sass, socket.io, flutter, hooks(react), feathers.js, goat, oauth2, jenkins, joi, dia, figma, pusher</span></PEventually>
        <PEducation>Education:</PEducation>
        <CarouselEducation />
      </DivIntro>
      <DivTopSkills>
        <H1Skills>Skills</H1Skills>
        <DivTopSkillsCategory size='small'>
          <ImgSkill top='true' src={require('../../assets/img/javascript.svg')} draggable="false" alt='javascript' />
          <ImgSkill top='true' src={require('../../assets/img/java.svg')} draggable="false" alt='java' />
          <ImgSkill top='true' src={require('../../assets/img/python.svg')} draggable="false" alt='python' />
          <ImgSkill bottom='true' src={require('../../assets/img/c.svg')} draggable="false" alt='c' />
          <ImgSkill bottom='true' src={require('../../assets/img/powershell.svg')} draggable="false" alt='powershell' />
          <ImgSkill bottom='true' src={require('../../assets/img/cpp.svg')} draggable="false" alt='cpp' />
        </DivTopSkillsCategory>
        <DivTopSkillsCategory size='medium'>
          <ImgSkill top='true' src={require('../../assets/img/html5.svg')} draggable="false" alt='html5' />
          <ImgSkill top='true' src={require('../../assets/img/less.svg')} draggable="false" alt='less' />
          <ImgSkill top='true' src={require('../../assets/img/css.svg')} draggable="false" alt='css' />
          <ImgSkill bottom='true' src={require('../../assets/img/react.svg')} draggable="false" alt='react' />
          <ImgSkill bottom='true' src={require('../../assets/img/axios.svg')} draggable="false" alt='axios' />
          <ImgSkill bottom='true' src={require('../../assets/img/redux.svg')} draggable="false" alt='redux' />
        </DivTopSkillsCategory>
        <DivTopSkillsCategory bot="true" size='large'>
          <ImgSkill top='true' mb="true" src={require('../../assets/img/express.svg')} draggable="false" alt='express' />
          <ImgSkill top='true' mb="true" src={require('../../assets/img/nodejs.svg')} draggable="false" alt='nodejs' />
          <ImgSkill top='true' mb="true" src={require('../../assets/img/knex.svg')} draggable="false" alt='knex' />
          <ImgSkill bottom='true' src={require('../../assets/img/postgresql.svg')} draggable="false" alt='postgresql' />
          <ImgSkill bottom='true' src={require('../../assets/img/stripe.svg')} draggable="false" alt='stripe' />
          <ImgSkill bottom='true' src={require('../../assets/img/restfulapi.svg')} draggable="false" alt='restfulapi' />
        </DivTopSkillsCategory>
      </DivTopSkills>
    </DivTop>
  );
};

export default TopSection;