import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { faPrint, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { ContacDetailsItem } from "./components/ContacDetailsItem/ContacDetailsItem";
import { EducationItem } from "./components/EducationItem/EducationItem";
import { ExperienceItem } from "./components/ExperienceItem/ExperienceItem";
import { SkillSection } from "./components/SkillSection/SkillSection";
import { VerticalSpacer } from "./components/VerticalSpacer/VerticalSpacer";


function App() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) {
    return null;
  }

  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const dropdownMenuRef = useRef();

  const languages = t("languages", { returnObjects: true });
  const contactInfoItems = t("contactInfoItems", { returnObjects: true });
  const socialLinks = t("socialLinks", { returnObjects: true });
  const otherInfoItems = t("otherInfoItems", { returnObjects: true });
  const educationItems = t("educationItems", { returnObjects: true });
  const conferencesItems = t("conferencesItems", { returnObjects: true });
  const competitionsItems = t("competitionsItems", { returnObjects: true });
  const coursesItems = t("coursesItems", { returnObjects: true });
  const professionalExperienceItems = t("professionalExperience.items", { returnObjects: true });
  const skillsSections = t("skillsSections.items", { returnObjects: true });

  useEffect(() => {
    const onClickOutsideHandler = (e) => {
      if (!dropdownMenuRef?.current?.contains(e.target)) {
        setIsLanguageDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', onClickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', onClickOutsideHandler);
    };
  });

  function handleOnPrint() {
    window.print();
  }

  function handleToggleDropdown() {
    setIsLanguageDropdownVisible(!isLanguageDropdownVisible);
  }

  function handleLanguageSelection(languageKey) {
    setCurrentLanguage(languageKey);
    setIsLanguageDropdownVisible(false);
    i18n.changeLanguage(languageKey);
  }

  function getLanguages() {
    const languagesKeys = Object.keys(languages);
    return languagesKeys.map((languageKey) => (
      <div
        className="Controls__Dropdown__Item"
        key={languageKey}
        onClick={() => handleLanguageSelection(languageKey)}>
        {languages[languageKey]}
      </div>
    ));
  }

  return (
    <>
      <div className="Controls">
        <div onClick={handleToggleDropdown} className="Controls__Control">
          <FontAwesomeIcon icon={faGlobe} />
          &nbsp;
          {languages[currentLanguage]}
        </div>
        {isLanguageDropdownVisible &&
          <div className="Controls__Dropdown" ref={dropdownMenuRef}>
            {getLanguages()}
          </div>
        }
        <div onClick={handleOnPrint} className="Controls__Control">
          <FontAwesomeIcon icon={faPrint} />
        </div>
      </div>
      <div className="MainContainer">
        <div className="Page">
          <Header />

          <SideBar>
            <VerticalSpacer height={200} />
            <section>
              <div className="SideBar__Title">{t('sidebarSections.contactDetails')}</div>
              {contactInfoItems.map(({ value, icon }, index) => (
                <ContacDetailsItem
                  icon={icon}
                  description={value}
                  key={index}
                />
              ))}
              {socialLinks.map(({ icon, text, href }, index) => (
                <ContacDetailsItem
                  icon={icon}
                  description={text}
                  href={href}
                  key={index}
                />
              ))}
            </section>

            <section>
              <div className="SideBar__Title">{t('sidebarSections.personalDetails')}</div>
              {otherInfoItems.map(({ icon, value }, index) => (
                <ContacDetailsItem
                  icon={icon}
                  description={value}
                  key={index}
                />
              ))}
            </section>

            <section>
              <div className="SideBar__Title">{t('sidebarSections.education')}</div>
              {educationItems.map(({ title, description }, index) => (
                <EducationItem
                  title={title}
                  description={description}
                  key={index}
                />
              ))}
            </section>

            <section>
              <div className="SideBar__Title">{t('sidebarSections.continuousEducation')}</div>
              <div className="SideBar__SubTitle">{t('sidebarSections.conferences')}</div>
              {conferencesItems.map(({ title, description, recognition }, index) => (
                <EducationItem
                  title={title}
                  description={description}
                  recognition={recognition}
                  key={index}
                />
              ))}
            </section>
          </SideBar>

          <div className="Content">
            <VerticalSpacer height={170} />
            <Section title={t('sections.professionalExperience')}>
              {professionalExperienceItems.map((professionalExperienceItem, index) => (
                <ExperienceItem {...professionalExperienceItem} key={index} />
              ))}
            </Section>
          </div>
        </div>
        <div className="Page">
          <SideBar>
            <section className="SideBar__Relocate">
              <div className="SideBar__SubTitle">{t('sidebarSections.competitions')}</div>
              {competitionsItems.map(({ title, description, recognition }, index) => (
                <EducationItem
                  title={title}
                  description={description}
                  recognition={recognition}
                  key={index}
                />
              ))}

              <div className="SideBar__SubTitle">{t('sidebarSections.courses')}</div>
              {coursesItems.map(({ title, description, recognition }, index) => (
                <EducationItem
                  title={title}
                  description={description}
                  recognition={recognition}
                  key={index}
                />
              ))}
            </section>
          </SideBar>
          <div className="Content">
            <section className="Content__Relocate">
              <Section title={t('sections.skills')}>
                {skillsSections.map(({ title, skills }) => (
                  <SkillSection
                    title={title}
                    skills={skills}
                    key={title}
                  />
                ))}
              </Section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
