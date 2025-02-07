import styled from "styled-components";

import { STYLING } from "@/styling-config";

export const Wrapper = styled.div`
    min-height: calc(100vh - ${STYLING.dimensions.navHeight});
    width: 100%;
    margin: ${STYLING.dimensions.navHeight} auto 0 auto;
`;