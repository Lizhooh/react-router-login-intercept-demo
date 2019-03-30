import React from 'react';
import styled from 'styled-components';

export default () => (
    <Root>
        <p>我是用户页</p>
    </Root>
);

const Root = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
        font-size: 32px;
    }
`;
