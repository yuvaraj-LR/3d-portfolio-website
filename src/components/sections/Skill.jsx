import React from 'react'
import styled from 'styled-components'
import { Tilt } from "react-tilt";
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-itemss: center;
  max-width: 1100px;
  width: 100%;
  margin: auto
`

const SkillTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itemss: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const SkillDesc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin: 16px 0;

  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SkillContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-itemss: center;
  text-align: center;
  margin: 16px 0;
`

const SkillContainerBox = styled.div`
  width: 300px;
  min-height: 400px;
  cursor: pointer;
  padding: 16px 0;
  border: 1px solid ${({theme}) => theme.card_outline};
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  @media(min-width: 768px) {
    width: 350px;
  }
`

const SkillSetTitle = styled.h3`
  color: ${({theme}) => theme.primary};
  text-transform: uppercase;
` 

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  gap: 16px;
`

const SkillName = styled.p`
  font-size: 16px;
  color: ${({theme}) => theme.text_secondary};
  font-weight: 500;
`

function Skill() {
  return (
    <>
      <Container id="Skills">
        <SkillTitle>
          <Title>Tech Stack</Title>
          <SkillDesc>For over the past 2 years, I have been working in both frontend and backend development, including with UI/UX teams, building SSR applications, optimizing for high SEO, and working with JSON data to deliver responsive, robust, secure, and multilingual solutions.</SkillDesc>
        </SkillTitle>
        <SkillContainer>
          {
            skills.map((skillset, index) => (
              <Tilt>
                <SkillContainerBox>
                    <SkillSetTitle>{skillset.title}</SkillSetTitle>

                    <SkillList key={index}>
                      {skillset.skills.map((skill, i) => (
                        <SkillBox key={i}>
                          <img src={skill.image} alt={skill.name} style={{width: "30px", objectFit: "cover", backgroundPosition: "center"}} />
                          <SkillName>{skill.name}</SkillName>
                        </SkillBox>
                      ))}
                    </SkillList>
                </SkillContainerBox>
              </Tilt>
            ))
          }
        </SkillContainer>
      </Container>
    </>
  )
}

export default Skill