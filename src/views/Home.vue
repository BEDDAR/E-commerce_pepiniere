<template>
  <div>
    <header class="sticky">
      <Navbar style="background-color: white;" class="pl-10 pr-10 pb-10" id="navbar" />
    </header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <v-img src="../../public/images/9.jpg" class="row m-3"></v-img>
          </div>
          <div class="row">
            <div class="row m-3">
              <v-card-text class="circle2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero
                perspiciatis
                molestias natus
                corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic sapiente
                quaerat fugiat assumenda.</v-card-text>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="row m-3">
              <v-card-text class="circle1">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero perspiciatis molestias natus
                corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic sapiente
                quaerat fugiat assumenda.

              </v-card-text>
            </div>
          </div>
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <v-img class="row m-3" src="../../public/images/1.jpg"></v-img>
                  </div>
                  <div class="row">
                    <v-img class="row m-3" src="../../public/images/4.jpg"></v-img>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <v-img class="row m-3" src="../../public/images/2.jpg"></v-img>
                  </div>
                  <div>
                    <div class="row">
                      <v-img class="row m-3" src="../../public/images/3.jpg"></v-img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>

import Navbar from '../components/Navbar/Navbar.vue'



export default {
  name: 'Home',
  components: {
    Navbar,
  }

}
</script>

<style>
.circle1 {
  background-color: #FFC82C;
  color: purple;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30%;
}

.circle2 {
  background-color: #800080;
  color: #FFC82C;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30%;
}

@media (max-width: 480px) {
  #navbar {
    padding-left: 0% !important;
    padding-right: 0% !important;
    padding-bottom: 0% !important;
  }
}
</style>
