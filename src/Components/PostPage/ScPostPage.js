import Styled from 'styled-components';


export const PostWrapper = Styled.div`
    max-width: 1200px;
    width: 60%;
    min-height: 900px;
    height: 100%;
    margin: auto;
    display: flex;
`;

export const ImageWrapper = Styled.div`
    width: 560px;
    height: 560px;
    background: blue;
    margin: 15% auto auto 8%;
`;

export const CommentsWrapper = Styled.div`
    height: 560px;
    width: 350px;
    background: lightblue;
    margin: 15% 9% auto auto;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`;

export const ImgDiv = Styled.img`
    width: 560px;
    height: 560px;
`;

