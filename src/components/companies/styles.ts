import styled from "styled-components";

export const CompaniesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  margin: 0 8rem;
  @media (max-width: 1460px) {
    margin: 0;
  }
  h3 {
    font-size: 1.5rem;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }
`;
export const CompaniesWrapperContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  overflow: hidden; /* Adiciona esta linha */
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const CompaniesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 99%;
  height: 16rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme["card-background"]};
  border-radius: 1rem;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.5);

  header {
    display: flex;
    height: fit-content;
    align-items: center;
    gap: 1rem;
    width: 100%;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 10%;
      object-fit: cover;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        font-family: system-ui, sans-serif;
        font-size: 1rem !important;
      }
    }
  }
  main {
    display: flex;
    flex: 1;
    @media (max-width: 450px) {
      overflow: auto;
    }

    p {
      line-height: 1.6;
      font-family: system-ui, sans-serif;
      @media (max-width: 1460px) {
        font-size: 0.875rem;
      }
      @media (max-width: 900px) {
        font-size: 1.1rem;
      }
      @media (max-width: 670px) {
        font-size: 0.875rem;
      }
    }
  }
`;

interface CompaniesSlideTransitionProps {
  $isActive: boolean;
  side: "left" | "right";
}
export const CompaniesSlideTransition = styled.div<CompaniesSlideTransitionProps>`
  width: 50%;
  padding-bottom: 1rem;
  transform: ${(props) =>
    props.$isActive
      ? "none"
      : `${props.side === "left" ? "translateX(-1000.5px)" : "translateX(1000.5px)"} `};

  transition: ${(props) =>
    props.$isActive
      ? "transform 1.5s cubic-bezier(0, 0, 0.2, 1)"
      : "transform 1.5s cubic-bezier(0, 0, 0, 0)"};

  @media (max-width: 900px) {
    width: 100%;
  }
`;
