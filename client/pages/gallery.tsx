import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import GallerySection from "../sections/GallerySection/GallerySection";
import { fetchQuery } from "../services/ssr";

const Gallery = (props: any) => {
  console.log(props.GalleryImages);

  return (
    <Header>
      <GallerySection GalleryImages={props.GalleryImages} />
      <Footer
        FooterSection={{
          FooterSectionRu: props.FooterSectionRu,
          FooterSectionEn: props.FooterSectionEn,
          FooterSectionDe: props.FooterSectionDe,
        }}
      ></Footer>
    </Header>
  );
};

export default Gallery;

export async function getServerSideProps(context: any) {
  try {
    const FooterSectionRu = await fetchQuery(
      "api/footer-section?populate=*&locale=ru"
    );
    const FooterSectionEn = await fetchQuery(
      "api/footer-section?populate=*&locale=en"
    );
    const FooterSectionDe = await fetchQuery(
      "api/footer-section?populate=*&locale=de"
    );

    const GalleryImages = await fetchQuery("api/gallery-images?populate=image");

    return {
      props: {
        FooterSectionRu: FooterSectionRu.data.attributes.FooterSection,
        FooterSectionEn: FooterSectionEn.data.attributes.FooterSection,
        FooterSectionDe: FooterSectionDe.data.attributes.FooterSection,

        GalleryImages: GalleryImages.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
