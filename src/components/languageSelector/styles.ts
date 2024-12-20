import styled from "styled-components";
export const LanguageSelectorContainer = styled.div``;

interface LanguageSelectorProps {
  $isActive: boolean;
  $selectedLanguage?: boolean;
  $isScrolled?: boolean;
}

export const LanguageSelectorButton = styled.div<LanguageSelectorProps>`
  backdrop-filter: ${(props) =>
    props.$isScrolled ? " blur(16px);" : " blur(0px);"};
  background-color: ${(props) =>
    props.$isScrolled ? "rgb(36 38 48/0.2)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? props.theme["second-text-color"]
        : props.theme["base-text-color"]};
  width: fit-content;
  height: ${(props) => (props.$isActive ? "6.1rem" : "2rem")};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 0.25rem 0;
  align-items: center;
  row-gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme["second-text-color"]};
    height: ${(props) => (props.$isActive ? "6.1rem" : "2rem")};
  }
`;

export const LanguageSelected = styled.div<LanguageSelectorProps>`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;

  svg {
    rotate: ${(props) => (props.$isActive ? "180deg" : "0deg")};
    transition: all 0.3s ease;
    color: ${(props) =>
      props.$isActive
        ? props.theme["second-text-color"]
        : props.theme["base-text-color"]};
    transform: scale(1);
  }

  img {
    width: 1.5rem;
    background-image: cover;
    height: 100%;
    border-radius: 50%;
  }
  &:hover {
    svg {
      transform: scale(1);
      color: ${(props) => props.theme["second-text-color"]};
      transition: all 0.3s ease;
    }
  }
`;

export const LanguageOptions = styled.div<LanguageSelectorProps>`
  font-size: 0.75rem;
  display: flex;
  padding: 0 0.5rem;

  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  //background-color: ${(props) => props.theme["base-text-color"]};
  opacity: ${(props) => (props.$selectedLanguage ? 0.4 : 1)};
  img {
    width: 1.5rem;
    background-image: cover;
    height: 100%;
    border-radius: 50%;
  }
`;
