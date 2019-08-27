<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav class="ml-auto">
          

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown style="color: white" text="Water" center>
            <b-dropdown-item  href="#"><router-link  to="/heater">Heater </router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link to="/pump">Pump</router-link> </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">
            <b-button>Login</b-button>
          </b-nav-item>

        </b-navbar-nav>
      </b-navbar>
    </div> 
    <router-view />
  </div> 
</template>

<style lang="scss">
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  a {
    color: inherit;
  } 
}

</style>
