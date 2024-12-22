import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageSelector } from "../../../components/languageSelector";
import { vi } from "vitest";

const changeLanguageMock = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: changeLanguageMock,
      language: "en",
    },
  }),
}));
vi.mock("../../assets/flags/pt-br-flag.jpg", () => ({
    default: "mocked-ptBr.jpg",
  }));
  vi.mock("../../assets/flags/us-flag.png", () => ({
    default: "mocked-en.jpg",
  }));

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Language Selector Component", () => {
  it("should toggle language options when button is clicked", () => {
    render(<LanguageSelector />);

    const button = screen.getByTestId("language-selector-button");
    fireEvent.click(button);

    expect(screen.getByText("Br")).toBeInTheDocument();
    expect(screen.getByText("En")).toBeInTheDocument();
  });
  it("Should toggle language options when the arrow is clicked", () => {
    render(<LanguageSelector />);

    const arrow = screen.getByTestId("language-selector-arrow");
    fireEvent.click(arrow);

    expect(screen.getByText("Br")).toBeInTheDocument();
    expect(screen.getByText("En")).toBeInTheDocument();
  });
  it("should call changeLanguage when a language option Br is clicked", () => {
    render(<LanguageSelector />);

    fireEvent.click(screen.getByTestId("language-selector-button"));
    fireEvent.click(screen.getByText("Br"));

    expect(changeLanguageMock).toHaveBeenCalledWith("pt");
    expect(changeLanguageMock).not.toHaveBeenCalledWith("en");
  });
  it("should call changeLanguage when a language option En is clicked", () => {
    render(<LanguageSelector />);

    fireEvent.click(screen.getByTestId("language-selector-button"));
    fireEvent.click(screen.getByText("En"));

    expect(changeLanguageMock).toHaveBeenCalledWith("en");
    expect(changeLanguageMock).not.toHaveBeenCalledWith("pt");
  });
 

});
