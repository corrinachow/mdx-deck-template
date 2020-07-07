import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main({
  padding:0,
  margin: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "transparent"
});
  


const Footer = styled.footer({
  fontSize: "0.6em",
  padding: "60px",
  height: "10vh",
  width: "100vw",
  display: "flex",
  justifyContent: "space-between",
})

const Layout = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>Title of Presentation</span>
      <span>@corrinachow</span>
    </Footer>
  </>
)

export default Layout