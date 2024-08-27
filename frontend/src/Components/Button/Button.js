import React from 'react'
import styled from 'styled-components';
function Button({name, icon, onClick, bg, bpad, color,icolor, bRad}) {
  return (
    <ButtonStyled style={{
        background: bg,
        padding: bpad,
        borderRadius: bRad,
        color: color,
        iconColor:icolor,
    }} onClick={onClick}>
        {icon && <span>{icon}</span>}
        {name && <span>{name}</span>}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem; /* Adjust size if necessary */
    }
`;

export default Button
