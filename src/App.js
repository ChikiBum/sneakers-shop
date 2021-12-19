import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40  justify-between">
          <h1 >All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input type="text"  placeholder="Search sneakers..."/>
          </div>
        </div>
          <div className="d-flex flex-wrap">
            <Card img={'img/sneakers/1.jpg'} heart={'img/heart-liked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
            <Card img={'img/sneakers/2.jpg'} heart={'img/heart-unliked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
            <Card img={'img/sneakers/3.jpg'} heart={'img/heart-unliked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
            <Card img={'img/sneakers/4.jpg'} heart={'img/heart-unliked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
            <Card img={'img/sneakers/5.jpg'} heart={'img/heart-unliked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
            <Card img={'img/sneakers/6.jpg'} heart={'img/heart-unliked.svg'} name={'Mens Sneakers Nike Blazer Mid Suede'} price={'12 999 EUR'}/>
          </div>
      </div>
    </div>
  );
}

export default App;
