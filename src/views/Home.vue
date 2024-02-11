<template>
  <v-app>
    <span class="sticky">
    <Navbar style="background-color: white;" class="pl-10 pr-10 pb-10" />
  </span>
    <div>
      <v-row class="pl-10 pr-10">
        <v-col cols="6">
          <v-img src="../../public/images/9.jpg" max-height="375" max-width="800"></v-img>
        </v-col>
        <v-col class="espacer-pragraphe-image" align-self="center" cols="6">
          <v-card-text class="circle1">

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero perspiciatis molestias natus
            corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic sapiente
            quaerat fugiat assumenda.

          </v-card-text>
        </v-col>
      </v-row>
      <v-row class="pl-10 pr-10">
        <v-col class="espacer-pragraphe-image" align-self="center" cols="6">
          <v-card-text class="circle2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero perspiciatis
            molestias natus
            corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic sapiente
            quaerat fugiat assumenda.</v-card-text>
        </v-col>
        <v-col cols="6">
            <ul class="gallery">
            <li><v-img class="gallery-image" src="../../public/images/1.jpg"></v-img></li>
            <li><v-img class="gallery-image" src="../../public/images/2.jpg"></v-img></li>
            <li><v-img class="gallery-image" src="../../public/images/3.jpg" ></v-img></li>
            <li><v-img class="gallery-image" src="../../public/images/4.jpg"></v-img></li>
            </ul>
        </v-col>
      </v-row>
    </div>
  </v-app>
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
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
}

.circle2 {
  background-color: #800080;
  color: #FFC82C;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
}

.espacer-pragraphe-image {
  padding-left: 10%;
}

.gallery{
  
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
}

.gallery li{
  list-style-type: none;
  max-width: 275px;
  max-height: 230px;
  flex-grow: 1;
}

.gallery-image{
  width: 100%;
  height: 100%;
}

</style>
