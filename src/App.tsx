import "./App.css";
import MyButton from "./components/UI/button/MyButton";
import Header from "./components/Header";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import HeroCard from "./components/HeroCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div style={{ marginTop: "20px" }}></div>
        <div style={{ borderRadius: "10px", backgroundColor: "white" }}>
          <div className="toolbar">
            <MyInput className="inputNameHero" placeholder="Name hero" />
            <MyButton />
          </div>
          <div className="toolbar">
            <MySelect />
            <MySelect />
            <MySelect />
          </div>
          <div className="listHeroes">
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
