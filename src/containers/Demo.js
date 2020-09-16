import React from 'react'
import './css/Demo.css'

class Demo extends React.Component {
    componentDidMount() {
        document.addEventListener("scroll", this.isInViewport);
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
        document.removeEventListener("scroll", this.isInViewport);
    }

    //our function which is called anytime document is scrolling (on scrolling)
    isInViewport = () => {
        //get how much pixels left to scrolling our ReactElement
        var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

        Array.prototype.forEach.call(elementsToShow, function(element){

        const rect = element.getBoundingClientRect();

      const result =(rect.top <= 0 && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))

            if (result) {
              element.classList.add('is-visible');
            } else {
              element.classList.remove('is-visible');
            }
          });


        //here we check if element top reference is on the top of viewport
        /*
        * If the value is positive then top of element is below the top of viewport
        * If the value is zero then top of element is on the top of viewport
        * If the value is negative then top of element is above the top of viewport
        * */

    
        // if(top <= 0 && bottom){
        //     console.log("Element is in view or above the viewport",top);
        // }else{
        //     console.log("Element is outside view");
        // }
         
    };

     render(){
        let setRef = (el) => {
            this.viewElement = el;
        };
       return (
        <div className="container">
           <header className="header show-on-scroll "  >
      <div className="main-photo"></div>
      <h2 className="heading">When the moon hits your eye</h2>
    </header>
    <article className="content">

    <p><strong>The history of pizza begins in antiquity, when various ancient cultures produced flatbreads with toppings.</strong></p>

    <p>The word pizza was first documented in AD 997 in Gaeta and successively in different parts of Central and Southern Italy. The precursor of pizza was probably the focaccia, a flat bread known to the Romans as panis focacius, to which toppings were then added.</p>

    <p>Modern pizza developed in Naples, when tomato was added to the focaccia in the late 18th century. However, pizza was mainly eaten in the country of Italy and by immigrants from there. This changed after World War II, when Allied troops stationed in Italy came to enjoy pizza along with other Italian foods.</p>

    <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza2.jpg" className="inline-photo show-on-scroll"/>

    <h2>Make an Italian pizza</h2>

    <p>(makes dough for 4 pizzas, each one about 12 inches in diameter)</p>

    <h3>Ingredients</h3>

    {/* <ul>
      <li>600 mL of warm water</li>
      <li>7 cups (1kg) flour</li>
      <li>2.5 – 3 tablespoons (25 grams) of fresh yeast or 2 teaspoons (7-8 grams) of dried yeast</li>
      <li>6 tablespoons of extra virgin olive oil</li>
      <li>1.5 teaspoons salt</li>
      <li>2 teaspoons sugar</li>
    </ul> */}

    <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza.jpg" className="inline-photo show-on-scroll" />

    <h3>Method</h3>

    <p>Sprinkle the yeast into a medium bowl with the warm water. We don’t mean hot, and we don’t mean cold… we mean warm! That’s the kind the yeast likes best. Stir until the yeast dissolves.</p>

    <p>Place almost all of the flour on the table in the shape of a volcano. (Think Mt. Vesuvius… appropriate since Naples is the king of all pizza cities!).</p>

    <p>Pour the yeast-and-warm-water mix, along with the other ingredients, into the “crater” of the volcano.</p>

    <p>Knead everything together for 10 to 15 minutes until the dough is smooth and elastic, keeping your surface floured.</p>

    <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza_spin.jpg" className="inline-photo show-on-scroll" />

    <p>Grease up a bowl with some olive oil and put the dough inside. Turn the dough around so the top is slightly oiled.</p>

    <p>Cover the bowl and put the dough aside to let it rest for at least four or five hours.</p>

    <p>(optional for those who want their pizza really authentic). Make a cross on top of the dough with a knife. An old Italian tradition, this is seen as a way of “blessing the bread.”</p>

    <p>Preheat the oven to about 400°F, or about 200°C.</p>

    <p>Dump the dough out of the bowl and back onto the floured surface. Punch it down, getting rid of any bubbles. (Note: Now’s the time to enlist a kid with more energy than they know what to do with!).</p>

    <p>Divide the dough in half and let it rest for a few minutes.</p>

    <p>Roll each section into a 12-inch disc. Now’s your chance to decide how thick you want your pizza to be! Do you want it pizza alta (Neapolitan-style) or pizza bassa (Roman-style)? Just remember, your crust will puff up a little bit as it’s baked!</p>

    <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza_oven.jpg" className="inline-photo show-on-scroll" />

    <p>Transfer the dough onto an oiled pizza pan or baking sheet.</p>

    <p>Add tomato sauce, if you want a pizza rossa (red pizza). Lots of pizzas in Italy are actually pizza bianca, without tomato sauce, so don’t feel like you have to! Brush the edges of the crust with a little bit of olive oil.</p>

    <p>Bake each pizza for about 10 minutes, then add mozzarella cheese (sliced or grated) on top, as well as any other ingredients.</p>

    <p>Let the pizzas bake until the crust is browned and the cheese is melted. By lifting up the pizza to peek underneath, you can make sure the bottom has browned, too.</p>

    <p>Remove your pizzas from the oven and, for a real Italian touch, garnish with a few basil leaves. And enjoy!</p>

    <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza3.jpg" className="inline-photo show-on-scroll" />


    <p class="credit">More info about pizza can be found <a href="https://en.wikipedia.org/wiki/History_of_pizza">on Wikipedia</a>. Recipe from <a href="https://www.walksofitaly.com/blog/food-and-wine/italian-pizza-dough-recipe">Walks Of Italy</a>.</p>

    </article>

        </div>
    )
}
}

export default Demo;
