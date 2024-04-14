<template>
  <div>

    <header class="sticky">
      <Navbar style="background-color: white;" class="pl-10 pr-10 pb-10" id="navbar" />
    </header>

    <body>

      <div class="sous-block">

        <v-img src="../../public/images/9.jpg" class="image-potager"></v-img>

        <v-card-text class="circle2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero
          perspiciatis
          molestias natus
          corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic
          sapiente
          quaerat fugiat assumenda.
        </v-card-text>

      </div>

      <div class="sous-block">

        <v-card-text class="circle1">

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero perspiciatis molestias natus
          corrupti vel modi! Accusamus totam facilis delectus aliquid, facere aspernatur commodi vero. Hic
          sapiente
          quaerat fugiat assumenda.

        </v-card-text>

        <div class="galerie">

          <v-img class="galerie-image" src="../../public/images/1.jpg"></v-img>

          <v-img class="galerie-image" src="../../public/images/4.jpg"></v-img>

          <v-img class="galerie-image" src="../../public/images/2.jpg"></v-img>

          <v-img class="galerie-image" src="../../public/images/3.jpg"></v-img>

        </div>
      </div>
    </body>
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
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30%;
  align-self: center;
}

.circle2 {
  background-color: #800080;
  color: #FFC82C;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30%;
  align-self: center;
}

body {
  width: 100%;
}

.sous-block {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.image-potager {
  max-width: 40%;
}

.galerie {
  width: 40%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.galerie-image {
  max-width: 40%;
  max-height: 50%;
}

@media (max-width: 685px) {

  .sous-block {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .circle1 {
    width: 80%;
  }

  .circle2 {
    width: 80%;
  }

  .galerie {
    width: 80%;
  }

  .image-potager {
    max-width: 80%;
  }

  .galerie-image {
    max-width: 35%;
    max-height: 50%;
  }

}
</style>
