import styled from "styled-components";

export const NavbarStyles = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavbarStylesItem = styled.div`
  width: 1240px;
  height: 80px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  img {
    width: 135px;
    height: 28px;
  }
  .nav-item-item {
    display: flex;
    align-items: center;
  }
  .nav-item-item .project-selection {
    position: relative;
    font-weight: 600;
    font-size: 15px;
  }
  .nav-item-item .project-selection::before {
    content: "";
    position: absolute;
    left: -13px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e04039;
  }
  .nav-item-button {
    padding: 8px 15px;
    cursor: pointer;
    background-color: #e04039;
    border: none;
    color: #fff;
    border-radius: 15px;
    font-size: 14px;
    transition: all 0.2s ease;
    &:hover {
      background-color: #b4342e;
    }
  }
  .nav-item-menu {
    position: relative;
    z-index: 1000;
  }
  .nav-item-menu button {
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
  .nav-item-menu i {
    font-size: 20px;
  }
  .menu-main {
    padding: 20px;
    width: 400px;
    border-radius: 15px;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #ffffff81;
    backdrop-filter: blur(10px);
  }
  .menu-item {
    margin: 20px 0px;
  }
  .menu-item div {
    display: flex;
  }
`;
