import React from 'react';
import Logo from '../images/logo.png';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors, fontSizes } = theme;


const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  color: ${colors.grey};
  font-size: ${fontSizes.base};
  text-align: center;
  padding: 50px 25px;
  margin-top: 100px;
  img {
    width: 70px;
    margin-bottom: 50px;
  }
  a {
    padding: 10px 15px;
    background-color: ${colors.active};
    color: ${colors.white};
    &:hover,
    &:focus {
      background-color: ${colors.accent};
      color: ${colors.bg};
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <img src={Logo} alt="logo" />
    <a href="https://arvinmostafaei.com">Made by Arvin Mostafaei</a>
  </FooterContainer>
);

export default Footer;
