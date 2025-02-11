import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
// import GallerySection from "../sections/GallerySection/GallerySection";
import {Placeholder} from "../sections/Placeholder/Placeholder";
// import FormSection from "../sections/FormSection/FormSection";

const Gallery = (props: any) => {
  console.log(props.GalleryImages);

  return (
    <Header>
      {/*<GallerySection />*/}
      <Footer>
        <Placeholder />
        {/*<FormSection />*/}
      </Footer>
    </Header>
  );
};

export default Gallery;
