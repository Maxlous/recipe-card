import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";


function App() {
  const Burak ={
    recipeAuthor: "Burak",
    recipeItem: {
      title: "Adana Kebap",
      date: "12 Mart 2021, Cuma",
      image: food1,
      description:
        "İyi bir Adana kebap için bu dört malzeme dışında başka bir malzeme konulmamalıdır. Kuyruk yağı ise olmazsa olmazıdır. Eğer kuyruk yağı koymazsak dışarıda yediğimiz lezzeti bulamayız.",
    },
    likeCount: 300,
    isLiked: true,
  };
  const Kodluyoruz = {
    recipeAuthor: "Kodluyoruz",
    recipeItem: {
      title: "Avokado Ezmeli Taco",
      date: "12 Ocak 2021, Salı",
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    likeCount: 193,
    isLiked: true,
  };
  const Cansel ={
    recipeAuthor: "Cansel",
    recipeItem: {
      title: "Zeytinyağlı Sarma",
      date: "22 Aralık 2020, Pazartesi",
      image: food2,
      description:
        "Sevmeyenini bulmak gerçekten zordur. İnce ince özenle sarılan bu zeytinyağlı sarma evinden uzakta olan öğrencilerin hayallerini süsleyen, eve biran önce gelme istediği uyandıran zeytinyağlı sarmaları yapmak düşünüldüğü kadar zor değil aslında.",
    },
    likeCount: 77,
    isLiked: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card
          title={Burak.recipeItem.title}
          author={Burak.recipeAuthor}
          likeCount={Burak.likeCount}
          date={Burak.recipeItem.date}
          description={Burak.recipeItem.description}
          liked={Burak.isLiked}
          food={Burak.recipeItem.image}
        />
        <Card
          title={Kodluyoruz.recipeItem.title}
          author={Kodluyoruz.recipeAuthor}
          likeCount={Kodluyoruz.likeCount}
          date={Kodluyoruz.recipeItem.date}
          description={Kodluyoruz.recipeItem.description}
          liked={Kodluyoruz.isLiked}
          food={Kodluyoruz.recipeItem.image}
        />
        <Card
          title={Cansel.recipeItem.title}
          author={Cansel.recipeAuthor}
          likeCount={Cansel.likeCount}
          date={Cansel.recipeItem.date}
          description={Cansel.recipeItem.description}
          liked={Cansel.isLiked}
          food={Cansel.recipeItem.image}
        />
      </header>
    </div>
  );
}

export default App;
