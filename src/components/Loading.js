import React from 'react';
import styled from 'styled-components';

export default () => (
    <Root>
        加载中 ...
    </Root>
);

const Root = styled.div`
    position: fixed;
    top: 0; right: 0;
    left: 0; bottom: 0;
    z-index: 100;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
`;