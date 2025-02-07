import styled from "styled-components";

import { open, fadeIn2 } from "@/animations";
import { STYLING } from "@/styling-config";

export const Wrapper = styled.div`
    width: 100%;
    animation: ${open} ${fadeIn2};
    scroll-margin-top: 25px;
    @media(max-width: ${STYLING.cutoffs.initial}) {
        height: auto;
        scroll-margin-top: 20px;
    }
`;

export const Header = styled.div`
    width: 100%;
    margin: 0 0 25px 0;
    display: flex;
    flex-direction: column;
    
`;

export const HeaderFlex = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

export const H2 = styled.h2`
    font-size: 32px;
    font-family: ${(props) => props.theme.typography.family.secondary};
    color: ${(props) => props.theme.colors.font.primary.alt4};
`;

export const List = styled.ol`
    width: 100%;
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    &:hover {
        text-decoration: none;
    }
    &:focus {
        text-decoration: none;
    }
    margin: 0 0 20px 0;
`;

export const ListItemWrapper = styled.li`
    height: 115px;
    width: 100%;
    padding: 20px;
    display: flex;
    position: relative;
    background: ${(props) => props.theme.colors.container.primary.background};
    border: 1px solid ${(props) => props.theme.colors.border.secondary};
    &:hover {
        background: ${(props) => props.theme.colors.container.primary.hover};
    }
    @media(max-width: ${STYLING.cutoffs.initial}) {
        height: auto;
        flex-direction: column;
        padding: 25px;
    }
`;

export const LIHeaderContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media(max-width: ${STYLING.cutoffs.initial}) {
        width: calc(100% - 20px);
    }
`;

export const LIHeader1 = styled(H2)`
    font-size: 28px;
    line-height: 34px;
    color: ${(props) => props.theme.colors.font.primary.active.base};
    font-family: ${(props) => props.theme.typography.family.secondary};
`;

export const SubheaderFlex = styled.div`
    display: flex;
    margin: 15px 0 0 0;
    @media(max-width: ${STYLING.cutoffs.tablet}) {
        flex-direction: column;
        margin: 25px 0 0 0;
    }
`;

export const SubheaderContainer = styled.div`
    display: flex;
    overflow: hidden;
    @media(max-width: ${STYLING.cutoffs.initial}) {
        margin: 0 0 7.5px 0;
    }
`;

export const Subheader1 = styled.div`
    p {
        height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: ${(props) => props.theme.typography.size.base};
        color: ${(props) => props.theme.colors.font.primary.alt6};
    }
`;

export const Subheader2 = styled.div`
    p {
        height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: ${(props) => props.theme.typography.size.base};
        color: ${(props) => props.theme.colors.font.primary.alt4};
    }
`;

export const ID = styled(Subheader2)``;

export const Date = styled(ID)``;

export const LIBodyContainer = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    @media(max-width: ${STYLING.cutoffs.initial}) {
        width: calc(100% - 20px);
        margin: 20px 0 0 0;
    }
`;

export const LIBodyFlex = styled.div`
    display: flex;
    margin: 0 0 10px 0;
    width: 100%;
`;

export const P = styled.p`
    height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const LIBodyHeader = styled(P)`
    color: ${(props) => props.theme.colors.font.primary.alt2};
`;

export const LIBodyData = styled(P)`
    color: ${(props) => props.theme.colors.font.primary.active.base};
    font-weight: ${(props) => props.theme.typography.weight.medium};
`;

export const LIDropdownContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 20px;
    @media(max-width: ${STYLING.cutoffs.initial}) {
        top: 20px;
        transform: translate(0, 0);
    }
`;

export const LIButton = styled.button`
    svg {
        width: 20px;
        fill: ${(props) => props.theme.colors.font.primary.active.base};
        &:hover {
            fill: ${(props) => props.theme.colors.font.primary.active.hover};
        }
    }
`;