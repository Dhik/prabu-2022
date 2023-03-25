<template>
  <div
    v-if="
      this.$route.name != 'Quiz' &&
      this.$route.name != 'Hasil' &&
      this.$route.name != 'Role' &&
      this.$route.name != 'Setup' &&
      this.$route.name != 'Assessment' &&
      this.$route.name != 'Form_Login'
    "
  >
    <Navbar />
  </div>
  <router-view />
  <div
    v-if="
      this.$route.name != 'Form_Login' &&
      this.$route.name != 'Minimap' &&
      this.$route.name != 'Spinner'
    "
  >
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Identitas from "./components/Identitas.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
  methods: {
    checkQuizStorage() {
      if (localStorage.quiz) {
        this.$router.push({
          name: "Quiz2",
        });
      // } else if (localStorage.assessment) {
        // this.$router.push({
        //   name: "Assessment",
        // });
      } else if(localStorage.postTest){
        this.$router.push({
          name: "Post",
        });
      }
    },
  },
  mounted() {
    this.checkQuizStorage();
  },
};
</script>
