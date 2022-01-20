import {useState} from "react";
import Header from "../../hoc/Header";
import Menu from "../../components/Menu/Menu";
import {Container} from "reactstrap";
import SliderNews from "../../components/sections/NewsSection/SliderNews";
import { GetStaticPaths } from "next";

const News = (props: any) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="newsSection">
          <Container>
            {/*<h2>News</h2>*/}
            <SliderNews news={props.data} />
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default News;

export const getStaticProps: any = async (context: any) => {
  try {
    const data = await fetch('http://localhost:1337/news-elements').then((data) => {
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

// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
//   const data = await fetch('http://localhost:1337/news-elements').then((data) => {
//     return data.json();
//   });
//   return {
//     paths: ['/news/[id]'], //indicates that no page needs be created at build time
//     fallback: true //indicates the type of fallback
//   }
// }