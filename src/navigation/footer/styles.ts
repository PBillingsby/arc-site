import styled from "styled-components";

import { STYLING } from "@/styling-config";

export const Wrapper = styled.div`
    height: 40vh;
    width: 100%;
    position: relative;
    z-index: 2;
    background: ${props => props.theme.colors.navigation.footer.background};
    border-top: 1px solid ${(props) => props.theme.colors.border.secondary};
`;

export const Container = styled.div`
  height: 75%;
  width: 100%;
  position: absolute;
  max-width: ${STYLING.cutoffs.max};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 25px;
`;

export const FlexContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width:  ${STYLING.cutoffs.secondary}) {
    height: 67.5%;
    flex-direction: column;
  }
`;

export const ContainerOne = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  @media(max-width: ${STYLING.cutoffs.secondary}) {
    height: auto;
    width: 100%;
  }
`;

export const ContainerTwo = styled.div`
  height: 100%;
  width: 50%;
  @media (max-width:  ${STYLING.cutoffs.secondary}) {
    height: auto;
    width: 100%;
    margin-top: 20px;
  }
`;

export const LogoContainer = styled.div`
  
`;

export const LogoContent = styled.div`
  
`;

export const LogoHeader = styled.h2`
  color: ${(props) => props.theme.colors.font.primary.base};
  font-size: ${(props) => props.theme.typography.size.h2};
  font-family: ${(props) => props.theme.typography.family.secondary};
  font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const LogoSubHeader = styled.p`
  color: ${(props) => props.theme.colors.font.primary.alt3};
  font-family: ${(props) => props.theme.typography.family.secondary};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  margin: 10px 0 0 0;
`;

// export const NavContainer = styled.div`
//   height: 100%;
//   width: 50%;

//   @media(max-width:  ${STYLING.cutoffs.secondary}) {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
// `;

// export const NavContainerHeader = styled.p`
//   font-weight: ${props => props.theme.typography.weight.medium};
//   margin-bottom: 3.5px;
// `;

// export const NavLinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const NavLink = styled.a`
//   margin-top: 10px;
//   width: fit-content;
//   &:hover{
//     text-decoration: underline;
//   }
// `;

export const SocialPaths = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  @media(max-width:  ${STYLING.cutoffs.secondary}) {
    justify-content: start;
  }
`;

export const SocialLink = styled.a`
  margin: 0 0 0 20px;
  height: fit-content;
  svg {
    width: 25px;
    fill: ${(props) => props.theme.colors.icon.primary.fill};
    &:hover {
      fill: ${(props) => props.theme.colors.icon.primary.hover};
    }
  }
  @media(max-width:  ${STYLING.cutoffs.secondary}) {
    margin: 0 20px 0 0;
  }
`;

export const YearContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.colors.border.tertiary};
  @media(max-width:  ${STYLING.cutoffs.secondary}) {
    
  }
`;

export const Year = styled.p`
  color: ${(props) => props.theme.colors.font.primary.alt4};
`;