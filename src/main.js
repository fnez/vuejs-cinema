import Vue from 'vue';
import './style.scss';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template:  `
      <div id="movie-list">
        <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
      </div>`,
      data() {
        return {
          movies: [
            { title: 'Network' },
            { title: 'Pulp Fiction' },
            { title: 'Home Alone' }
          ]
        }
      }
    },
    'movie-filter': {
      template:  `
      <div id="movie-filter">
        <h2>Filter Results</h2>
        <check-filter></check-filter>
      </div>`,
      components: {
        'check-filter': {
          template:  `<div>Filter</div>`
        }
      },
    }
  }
});

// Components help you extend basic HTMl elements to encapsulate reusable code.
// Register a component:
// Vue.component('my-component', {
//  template: '<div>{{ msg }}</div>',
//  data() {
//    msg: 'A custom component!'
//  }
// });
//
// A component can be thought if as a mini instance of Vue with it's own properties, methods etc. that are isolated only to that component



// Now the component can be used by the root instance of Vue
// <div id="example">
//   <my-component></my-component>
// </div>
//
// new Vue({ el: '#example' });
//
// Which renders as:
// <div id="example">
//   <div>A custom component!</div>
// </div>


//When creating a data property in vue components, the data must be a function that returns an object, otherwise, the console will throw an error. This is because components can be reused,
