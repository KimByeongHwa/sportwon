'use client'

import React from 'react'
import styled from 'styled-components'
import Inner from '@/styles/Inner'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

function SignUp() {
  return (
    <Container>
      <Inner>
        <Title>회원가입</Title>
        <Form>
          <Line>
            <List>아이디</List>
            <CustomInput />
          </Line>
          <Line>
            <List>비밀번호</List>
            <CustomInput />
          </Line>
          <Line>
            <List>비밀번호 확인</List>
            <CustomInput />
          </Line>
          <ButtonWrapper>
            <CustomButton outline>가입하기</CustomButton>
          </ButtonWrapper>
        </Form>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Title = styled.div`
  font-size: 2.4rem;
  width: fit-content;
  margin: 4rem auto;
  font-weight: 500;
`

const Form = styled.div``

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

const List = styled.span`
  width: 10rem;
  font-weight: 500;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

export default SignUp
