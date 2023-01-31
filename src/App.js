import "./App.css";
import ReactCardSlider from "./components/React-Card-Slider";

function App() {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
      ],
      title: "Samsung Pro 10 Hello Friend How are you",
      price: "311$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 311"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
        },
      ],
      title: "Samsung Pro 10",
      price: "560$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 560"),

      // css
      title_color: "red",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Samsung Pro 10",
      price: "250$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 250"),
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "AutoMobiles",
          bg: "white",
          color: "black",
        },
      ],
      title: "Mac Engine OIL 5L",
      price: "275$",
      btnText: "Add To Cart",
      handleClick: () => alert("you ordered 275"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
        {
          title: "Kitchen",
          bg: "#ffc",
          color: "black",
        },
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
      ],
      title: "Samsung Pro 10",
      price: "311$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 311"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Optical",
          bg: "orange",
          color: "white",
        },
        {
          title: "Technology",
          bg: "white",
          color: "green",
        },
      ],
      title: "Samsung Pro 10",
      price: "311$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 311"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
      ],
      title: "Samsung Pro 10",
      price: "311$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 311"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
      ],
      title: "Samsung Pro 10",
      price: "311$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 311"),

      // css
      title_color: "#f0f",
      price_color: "green",
      btn_bg_color: "black",
      btn_color: "white",
    },
    {
      image: "https://picsum.photos/200/300",
      categories: [
        {
          title: "Mobile",
          bg: "black",
          color: "#ff0",
        },
      ],
      title: "RealMe C11 Prime",
      price: "134$",
      btnText: "Buy Now",
      handleClick: () => alert("you ordered 134"),

      // css
      title_color: "#eef",
      price_color: "white",
      btn_bg_color: "white",
      btn_color: "black",
    },
  ];
  return (
    <div id="body">
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default App;
