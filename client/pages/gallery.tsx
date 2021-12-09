import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import GallerySection from "../components/sections/GallerySection/GallerySection";

const Gallery = (props: any) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  console.log(props);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="gallerySection">
          <Container>
            <h2>Gallery</h2>
            <GallerySection PropsImages={props.data.GalleryImg} />
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default Gallery;

export const getStaticProps: any = async (context: any) => {
  try {
    const data = await fetch('http://localhost:1337/gallery-page-fields').then((data) => {
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