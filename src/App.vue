<template>
  <div id="app">
    <div id="nav">
      <nav>
        <div class="logo">
          <h4>THE SNINE</h4>
        </div>
        <ul class="nav-link">
          <li>
            <a href="/"
              ><i class="fa fa-home"> <p>Home</p> </i></a
            >
          </li>
          <li>
            <a href="/about"
              ><i class="fa fa-users"><p>About</p></i></a
            >
          </li>
          <li>
            <a href="/basket"
              ><i class="fa fa-shopping-basket"><p>Basket</p></i></a
            >
          </li>
          <li>
            <a href="/setting"
              ><i class="fa fa-cog"><p>Setting</p> </i></a
            >
          </li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #5d4954;
  font-family: "Poppins", sans-serif;
}
.logo {
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
  text-shadow: 0px 5px 5px black;
}
.nav-link {
  display: flex;
  justify-content: space-around;
  width: 30%;
  font-size: 15px;
  text-shadow: 0px 5px 5px black;
  font-family: cursive;
}
.nav-link p {
  font-size: 11px;
  font-family: "Mali";
  margin-top: 5px;
}
.nav-link a {
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
}
.nav-link li {
  list-style: none;
}
.burger {
  display: none;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-link {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: #5d4954;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav-link li {
    opacity: 0;
  }
  .burger {
    display: block;
  }
}
.nav-active {
  transform: translateX(0%);
}
.burger div {
  width: 25pt;
  height: 5px;
  margin: 3px;
  background-color: white;
}
@keyframes navLinkFade {
  form {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
body {
  background-color: #dfe6e9;
}
</style>


