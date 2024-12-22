import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import ptBr from "../../assets/flags/pt-br-flag.jpg";
import en from "../../assets/flags/us-flag.png";

import { useTranslation } from "react-i18next";
import { IsScrolling } from "../../utils/isScrolling";
import * as S from "./styles";

export function LanguageSelector() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { scrolled } = IsScrolling()

    const {
        i18n: { changeLanguage, language },
    } = useTranslation();

    const handleChangeLanguage = (language: string) => {
            changeLanguage(language);
    };

    console.log(scrolled)
    return (
        <S.LanguageSelectorContainer>
            <S.LanguageSelectorButton
                $isActive={isActive}
                onClick={() => setIsActive(!isActive)}
                $isScrolled={scrolled}
                data-testid="language-selector-button"
            >
                <S.LanguageSelected $isActive={isActive}>
                    <img src={language === "pt" ? ptBr : en} alt="FlagImage" />
                    <CaretDown size={20} onClick={() => setIsActive(!isActive)} data-testid="language-selector-arrow" />
                </S.LanguageSelected>
                {isActive && (
                    <>
                        <S.LanguageOptions
                            $isActive={isActive}
                            onClick={() => handleChangeLanguage("pt")}
                            $selectedLanguage={language === "pt"}
                            data-testid="language-selector"
                        >
                            <img src={ptBr} alt="Português" />
                            <span>Br</span>
                        </S.LanguageOptions>
                        <S.LanguageOptions
                            $isActive={isActive}
                            onClick={() => handleChangeLanguage("en")}
                            $selectedLanguage={language === "en"}
                            data-testid="language-selector"
                        >
                            <img src={en} alt="Inglês" />
                            <span>En</span>
                        </S.LanguageOptions>
                    </>
                )}
            </S.LanguageSelectorButton>
        </S.LanguageSelectorContainer>
    );
}
