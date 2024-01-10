import styled from "styled-components";


export const ButtonBlue = styled.button`
    padding: 1rem 2rem;

    color: #f6f6f6;
    background-color: var(--color-brand-1);
    
    border-radius: 3rem;

    width: 20rem;

    &:hover{
        background-color: var(--color-brand-2);
    }
`

export const ButtonTrasparent = styled.button`
    padding: 1rem 2rem;

    background: transparent;
    border: 1px solid #00000020;

    border-radius: 2rem;

    &:hover{
        background-color: var(--color-grey-5);
    }
`