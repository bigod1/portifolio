import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    gap: 10vw;
    padding: 8vh 15vw;
`

export const DivTalkeWithMe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 30vw;
`

export const DivProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`


export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const DivTecnologies = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const SpanTecnologies = styled.span`
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);

    padding: .2rem 1rem;

    border-radius: .5rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;
`

export const GitButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: fit-content;

    background: transparent;
    border: 1px solid #00000020;
    border-radius: 1rem;

    padding: .2rem .5rem;

    &:hover{
        background-color: var(--color-grey-5);
    }
`