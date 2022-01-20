import {useEffect, useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import Concert from "../components/sections/ConcertSection/Concert";
import useTypedSelector from "../hooks/useTypedSelector";
import languageFunction, {chooseLanguage} from "../functions/LanguageFunction";
import {log} from "util";

export interface IConcert {
  Date: string;
  DescriptionRu: string;
  DescriptionEn: string;
  DescriptionGe: string;
  LinkMore: string;
  LocationRu: string;
  LocationEn: string;
  LocationGe: string
  Time: string;
}

interface IConcerts {
  data: {
    ConcertSection: IConcert[];
    DescriptionRu: string;
    DescriptionEn: string;
    DescriptionGe: string;
    LocationRu: string;
    LocationEn: string;
    LocationGe: string;
    SectionTitleRu: string;
    SectionTitleEn: string;
    SectionTitleGe: string;
  };
}

const Concerts = ({ data }: IConcerts) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const languageStart = useTypedSelector(state => state.app.language);
  const language = languageFunction(languageStart);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="concertSection">
          <Container>
            <h2>Concerts</h2>
            {data.ConcertSection.map((concert, index) => (
              <Concert
                location={
                  chooseLanguage(
                    language,
                    concert.LocationRu,
                    concert.LocationEn,
                    concert.LocationGe,
                  )
                }
                description={
                  chooseLanguage(
                    language,
                    concert.DescriptionRu,
                    concert.DescriptionEn,
                    concert.DescriptionGe,
                  )
                }
                Date={concert.Date}
                Time={concert.Time}
                LinkMore={concert.LinkMore}
              />
            ))}
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default Concerts;

export const getStaticProps: any = async (context: any) => {
  try {
    const data = await fetch('http://localhost:1337/concert-page-fields').then((data) => {
      return data.json();
    });
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error.message)
    return {data: {}};
  }
}