import React from 'react'
import styled from 'styled-components'

function Banner() {
  return (
    <div>
      <Wrapper />
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 28rem;
  background-image: url('banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin: 2rem 0;
`

export default Banner
