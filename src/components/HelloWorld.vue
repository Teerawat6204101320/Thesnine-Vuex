<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="product-list">
      <h1>Product-VueX</h1>

      <div class="product-container">
        <!-- First product  -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product1.head }}</div>
          <div class="image">
            <img :src="$store.state.product1.image" alt="" />
          </div>
          <div class="text">50 ฿</div>
          <div>
            <div class="minus-plus">
              <i
                v-if="$store.state.product1.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product1.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product1.quantity >= 0">
                {{ $store.state.product1.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product1.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct1()">
              Add Now
            </button>
          </div>
        </div>

        <!-- Second product  -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product2.head }}</div>
          <div class="image">
            <img :src="$store.state.product2.image" alt="" />
          </div>
          <div class="text">50 ฿</div>
          <div>
            <div class="minus-plus">
              <i
                v-if="$store.state.product2.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product2.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product2.quantity >= 0">
                {{ $store.state.product2.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product2.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct2()">
              Add Now
            </button>
          </div>
        </div>

        <!-- Third product  -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product3.head }}</div>
          <div class="image">
            <img :src="$store.state.product3.image" alt="" />
          </div>
          <div class="text">50 ฿</div>
          <div>
            <div class="minus-plus">
              <i
                v-if="$store.state.product3.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product3.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product3.quantity >= 0">
                {{ $store.state.product3.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product3.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct3()">
              Add Now
            </button>
          </div>
        </div>

        <!-- Fourth product -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product4.head }}</div>
          <div class="image">
            <img :src="$store.state.product4.image" alt="" />
          </div>
          <div class="text">40 ฿</div>
          <div>
            <div class="minus-plus">
             <i
                v-if="$store.state.product4.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product4.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product4.quantity >= 0">
                {{ $store.state.product4.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product4.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct4()">
              Add Now
            </button>
          </div>
        </div>

        <!-- Five product -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product5.head }}</div>
          <div class="image">
            <img :src="$store.state.product5.image" alt="" />
          </div>
          <div class="text">40 ฿</div>
          <div>
            <div class="minus-plus">
             <i
                v-if="$store.state.product5.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product5.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product5.quantity >= 0">
                {{ $store.state.product5.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product5.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct5()">
              Add Now
            </button>
          </div>
        </div>

        <!-- Six product -->
        <div class="card">
          <!-- <div class="title"> {{product1.head}} </div> -->
          <div class="title">{{ $store.state.product6.head }}</div>
          <div class="image">
            <img :src="$store.state.product6.image" alt="" />
          </div>
          <div class="text">40 ฿</div>
          <div>
            <div class="minus-plus">
             <i
                v-if="$store.state.product6.quantity >= 1"
                class="fa fa-minus-square"
                v-on:click="$store.state.product6.quantity -= 1"
              ></i>
              <i v-else class="fa fa-minus-square"></i>

              <p v-if="$store.state.product6.quantity >= 0">
                {{ $store.state.product6.quantity }}
              </p>
              <p v-else>0</p>
              <i
                class="fa fa-plus-square"
                v-on:click="$store.state.product6.quantity += 1"
              ></i>
            </div>
            <button class="buy-button" v-on:click="addProduct6()">
              Add Now
            </button>
          </div>
        </div>
      </div>

      <!--Baskets-->
      <div class="card-product">
        <div class="small-container">
          <table>
            <tr>
              <th>Photo</th>
              <th>Price</th>
              <th>Quantty</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
            <tr v-for="(pro, index) in productList" :key="index">
              <td>{{ pro.head }}</td>
              <td>{{ pro.price }} ฿</td>
              <td>{{ pro.quantity }}</td>
              <td>{{ pro.total }}</td>
              <td><i class="fa fa-trash" @click="deleteProduct(index)"></i></td>
            </tr>
            <td></td>
            <td></td>
            <td class="total">Total</td>
            <td
              v-if="
                $store.state.product1.quantity * $store.state.product1.price +
                  $store.state.product2.quantity * $store.state.product2.price +
                  $store.state.product3.quantity * $store.state.product3.price +
                  $store.state.product4.quantity * $store.state.product4.price +
                  $store.state.product5.quantity * $store.state.product5.price +
                  $store.state.product6.quantity *
                    $store.state.product6.price >=
                0
              "
            >
              {{
                $store.state.product1.quantity * $store.state.product1.price +
                $store.state.product2.quantity * $store.state.product2.price +
                $store.state.product3.quantity * $store.state.product3.price +
                $store.state.product4.quantity * $store.state.product4.price +
                $store.state.product5.quantity * $store.state.product5.price +
                $store.state.product6.quantity * $store.state.product6.price
              }}
            </td>
            <td v-else>0</td>
          </table>
        </div>

        <button
          class="buy-buttons"
          v-on:click="say('Order successfully Thank For Buy')"
        >
          Accept
        </button>
        <button class="buy-buttons" onClick="javascipt:location.reload()">
          Cancel
        </button>
      </div>
    </section>
    <div class="footer">
      <p>Waiting Update</p>
    </div>
  </div>
</template>

<script>
// import {formGetter} from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // computed:{
  //   ...formGetter(["proDuct1","raka1"])
  // },
  data() {
    return {
      productList: [
        // { head: "lay", price: 50 },
        // { head: "llays", price: 50 },
      ],
    };
  },

  methods: {
    say: function (message) {
      alert(message);
    },
    addProduct1() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product1.head,
        price: this.$store.state.product1.price,
        quantity: this.$store.state.product1.quantity,
        total:
          this.$store.state.product1.quantity *
          this.$store.state.product1.price,
      });
    },
    addProduct2() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product2.head,
        price: this.$store.state.product2.price,
        quantity: this.$store.state.product2.quantity,
        total:
          this.$store.state.product2.quantity *
          this.$store.state.product2.price,
      });
    },
    addProduct3() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product3.head,
        price: this.$store.state.product3.price,
        quantity: this.$store.state.product3.quantity,
        total:
          this.$store.state.product3.quantity *
          this.$store.state.product3.price,
      });
    },
    addProduct4() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product4.head,
        price: this.$store.state.product4.price,
        quantity: this.$store.state.product4.quantity,
        total:
          this.$store.state.product4.quantity *
          this.$store.state.product4.price,
      });
    },
    addProduct5() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product5.head,
        price: this.$store.state.product5.price,
        quantity: this.$store.state.product5.quantity,
        total:
          this.$store.state.product5.quantity *
          this.$store.state.product5.price,
      });
    },
    addProduct6() {
      // console.log("addProduct");
      this.productList.push({
        head: this.$store.state.product6.head,
        price: this.$store.state.product6.price,
        quantity: this.$store.state.product6.quantity,
        total:
          this.$store.state.product6.quantity *
          this.$store.state.product6.price,
      });
    },
    deleteProduct(index) {
      this.productList.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total {
  font-weight: bold;
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #5d4954;
  color: white;
  text-align: center;
  margin-top: 2rem;
  scrollbar-shadow-color: 0px 10 px 5px black;
  padding: 5em;
}
.footer p {
  font-family: cursive;
  text-shadow: 0px 5px 5px black;
}
.product-list {
  background: #dfe6e9;
  max-width: 100%;
  text-align: center;
}
.product-list h1 {
  font-size: 30px;
  font-family: cursive;
  height: 10rem;
  font-weight: bold;
  margin-top: 10rem;
  text-shadow: 0px 5px 5px black;
}
.product-list .card {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  text-align: center;
  font-family: cursive;
}
.card .title {
  font-size: 25px;
  font-weight: bold;
}
.card img {
  max-width: 100%;
  border-radius: 5px;
  height: 15rem;
}
.card .text {
  text-align: center;
  margin-left: 2em;
  margin-bottom: 1em;
  font-size: 13px;
}
.buy-button {
  background-color: #f9ca24;
  border: none;
  padding: 1em;
  border-radius: 5px;
  font-weight: bold;
  width: 50%;
}
.buy-buttons {
  background-color: #f9ca24;
  border: none;
  padding: 5px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 10px;
  width: 15%;
  font-family: cursive;
  margin-left: 50px;
}
.buy-buttons:hover {
  box-shadow: 0px 5px 5px #b2bec3;
  color: #eb4d4b;
}
.buy-button:hover {
  box-shadow: 0px 5px 5px #b2bec3;
  color: #eb4d4b;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  max-width: 80%;
  margin-left: 9rem;
}
.card-product {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  font-family: cursive;
  width: 60%;
  margin-top: 3rem;
  margin-left: 9rem;
}
.small-container {
  margin: 10px auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  color: rgb(25, 10, 10);
  justify-content: space-around;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
th {
  font-size: 18px;
}
td {
  color: #5d4954;
  font-size: 13px;
}
td img {
  width: 3rem;
}
.minus-plus {
  display: flex;
  align-items: center;
  margin-left: 0rem;
  margin-bottom: 1em;
  justify-content: space-around;
}
.minus-plus .fa-minus-square {
  color: black;
}
.minus-plus .fa-plus-square {
  color: black;
}
@media only screen and (max-width: 1050px) {
  .product-list {
    margin-right: 5em;
  }
}
@media only screen and (max-width: 770px) {
  .product-container {
    margin-left: 0.4rem;
    grid-template-columns: 1fr 1fr;
    max-width: 97%;
  }
  .card .title {
    font-size: 15px;
  }
  .card img {
    height: 15rem;
  }
  .buy-button {
    width: 70%;
  }
  .product-list {
    margin-right: 0em;
  }
}
@media only screen and (max-width: 500px) {
  .product-container {
    margin-left: 0.4rem;
    grid-template-columns: 1fr 1fr;
    max-width: 97%;
  }
  .card .title {
    font-size: 15px;
  }
  .card img {
    height: 15rem;
  }
  .buy-button {
    width: 70%;
  }
  .card-product {
    width: 90%;
    margin-left: 1.5rem;
  }
  .product-list {
    margin-right: 0em;
  }
}
</style>