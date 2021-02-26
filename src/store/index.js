import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product1:{
      head:"Lays Picanna",
      price:50,
      quantity:0,
      image:"https://st2.depositphotos.com/3053449/12431/i/950/depositphotos_124319942-stock-photo-frito-lay-chips.jpg"
    },
    product2:{
      head:"Lays Wavy",
      price:50,
      quantity:0,
      image:"https://st2.depositphotos.com/3053449/12431/i/950/depositphotos_124319944-stock-photo-frito-lay-chips.jpg"
    },
    product3:{
      head:"Lays Sour & Onion",
      price:50,
      quantity:0,
      image:"https://st2.depositphotos.com/3053449/6553/i/950/depositphotos_65533325-stock-photo-lays-chips.jpg"
    },
    product4:{
      head:"Ruffles",
      price:40,
      quantity:0,
      image:"https://st3.depositphotos.com/3053449/33347/i/1600/depositphotos_333473232-stock-photo-package-of-food.jpg"
    },
    product5:{
      head:"Snausages",
      price:40,
      quantity:0,
      image:"https://st3.depositphotos.com/3053449/16511/i/1600/depositphotos_165118588-stock-photo-dog-treats-isolated.jpg"
    },
    product6:{
      head:"Sage&Valley",
      price:40,
      quantity:0,
      image:"https://st3.depositphotos.com/3053449/18113/i/1600/depositphotos_181139362-stock-photo-bag-of-chips.jpg"
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
