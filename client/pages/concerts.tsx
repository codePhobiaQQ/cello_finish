import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import Concert from "../components/sections/ConcertSection/Concert";

const Concerts = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const concerts = [
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Józef Hofmann: Character Sketches op. 40\n" +
        "Joseph Holbrooke: from 10 Rhapsodie-Études op. 42 - No 4 La fantastique, No 5 Une nuit ténébreuse\n" +
        "Alexander Skjabin: Fantasy in B minor op. 28, Mazurka in G sharp minor op. 3 No. 9\n" +
        "Franz Liszt: Spanish Rhapsody\n" +
        "Igor Stravinsky: Three pieces from the ballet \"Petrushka\".",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Scriabin Piano Concerto with Tula Philharmonic Orchestra under Vladislav Lavrik",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Shor “Childhood memories” with Kazan Chamber Orchestra “La Primavera” & Marius Stravinsky",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Józef Hofmann: Character Sketches op. 40\n" +
        "Joseph Holbrooke: from 10 Rhapsodie-Études op. 42 - No 4 La fantastique, No 5 Une nuit ténébreuse\n" +
        "Alexander Skjabin: Fantasy in B minor op. 28, Mazurka in G sharp minor op. 3 No. 9\n" +
        "Franz Liszt: Spanish Rhapsody\n" +
        "Igor Stravinsky: Three pieces from the ballet \"Petrushka\".",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Scriabin Piano Concerto with Tula Philharmonic Orchestra under Vladislav Lavrik",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Shor “Childhood memories” with Kazan Chamber Orchestra “La Primavera” & Marius Stravinsky",
    },
    {
      date: "07.11.2021",
      time: "17:00",
      location: "Zaryadye Concert Hall, Moscow, Russia",
      description: "Józef Hofmann: Character Sketches op. 40\n" +
        "Joseph Holbrooke: from 10 Rhapsodie-Études op. 42 - No 4 La fantastique, No 5 Une nuit ténébreuse\n" +
        "Alexander Skjabin: Fantasy in B minor op. 28, Mazurka in G sharp minor op. 3 No. 9\n" +
        "Franz Liszt: Spanish Rhapsody\n" +
        "Igor Stravinsky: Three pieces from the ballet \"Petrushka\".",
    },
  ]

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
            {concerts.map((concert, index) => (
              <Concert
                date={concert.date}
                time={concert.time}
                location={concert.location}
                description={concert.description}
                index={index}
              />
            ))}
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default Concerts;