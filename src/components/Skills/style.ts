import styled from "styled-components";


export const Container = styled.div`
    background-color: var(--color-grey-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    padding: 5vh 15vw;
`

export const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    gap: 4rem;
`

export const ListItem = styled.li`
    border: 1px solid black;
    border-radius: 5px;

    height: 120px;
    width: 160px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgSkills = styled.img`
    width: 90px;
`