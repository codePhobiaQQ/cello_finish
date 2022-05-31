import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import GallerySection from "../sections/GallerySection/GallerySection";

const Gallery = (props: any) => {
  console.log(props.GalleryImages);

  return (
    <Header>
      <GallerySection />
      <Footer></Footer>
    </Header>
  );
};

export default Gallery;
