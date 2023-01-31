
# react-card-slider
This NPM package is built by Rohit Sharma. It provides the card sliding feature.Basically it helps to display a collection of reactangle card has category pills, image, title, button, price tag etc.  in the horizontal direction. 

## Installation

Install package with yarn and npm

```bash
   npm install react-card-slider
```
    or 

```bash
   yarn add react-card-slider
```

## Steps

- Once install the library

- First Import Module like
  - import ReactCardSlider from './components/React-Card-Slider';

- place ReactCardSlider inside JSX .

- pass slides props which must be contains Array of data.

## Usage/Examples

```javascript
import ReactCardSlider from 'react-card-slider';

function App() {

  const slides = [
      {
          image : "https://picsum.photos/200/300" ,
          categories : [
            {
              title : "Mobile",
              bg : 'black' ,
              color : '#ff0' ,
            }
          ],
          title : "Samsung Pro 10 Hello Friend How are you",
          price : "311$",
          btnText : "Buy Now",
          handleClick : () => alert("you ordered 311") ,

          // css
          title_color : '#f0f',
          price_color : 'green',
          btn_bg_color : 'black',
          btn_color : 'white'
      },
     {
  image : "https://picsum.photos/200/300" ,
  categories : [
    {
      title : "Mobile",
      bg : 'black' ,
      color : '#ff0' ,
    }
  ],
  title : "Samsung Pro 10",
  price : "311$",
  btnText : "Buy Now",
  handleClick : () => alert("you ordered 311") ,

  // css
  title_color : '#f0f',
  price_color : 'green',
  btn_bg_color : 'black',
  btn_color : 'white'
}
  ]
  return (
    <div id="body">
       <ReactCardSlider slides={slides}/>
    </div>
  );
}

export default App;


```


## Authors

- [ROHIT SHARMA](https://www.github.com/srmarohit)

