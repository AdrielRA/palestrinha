import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: #00000007;
  border: 2px solid #00000015;
  backdrop-filter: blur(10px);
  max-height: calc(100vh - 300px);
  box-shadow: 2px 29px 45px -30px rgba(0, 0, 0, 0.95);
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  gap: 2rem;
  background-color: #00000007;
  border-bottom: 1.5px solid #00000025;

  @media (max-width: 570px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ListButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #55555510;
  border: 1px solid #00000005;
  box-shadow: 2px 5px 10px -3px rgba(0, 0, 0, 0.5);
  font-size: 1.8rem;

  span {
    font-weight: bold;
    color: #1395bd;
  }

  @media (max-width: 570px) {
    width: 100%;
  }
`;

export const ListContent = styled.ul`
  overflow: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 420px);

  @media (max-width: 570px) {
    max-height: calc(100vh - 430px);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 1.5rem 0;
  display: inline-flex;
  justify-content: center;
  border-bottom: 1.5px solid #00000015;

  &:hover {
    cursor: pointer;
    background-color: #00000005;
  }

  span {
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
  }
`;
