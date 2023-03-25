<template>
  <section class="bg-desc5">
    <div class="backdrop-confirm">
      <div class="modal-container-confirm">
        <h3 class="title-modals mb-3">
          Silahkan login terlebih dahulu untuk masuk menu ini
        </h3>
        <div class="d-flex justify-content-center">
          <router-link class="btn btn-confirm-kembali" to="/"
            >Kembali</router-link
          >
          <router-link class="btn btn-confirm-login" to="/login_user"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.modal-container-confirm {
  width: 70%;
  padding: 30px;
  margin: 25vh auto;
  background-color: #1f1c3c !important ;
  border-radius: 10px;
  z-index: 9999;
  animation: down 0.5s ease forwards;
}
@keyframes down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }

  100% {
    transform: translatex(0);
  }
}

.backdrop-confirm {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.btn-confirm-login {
  color: #1f1c3c;
  background-color: white;
  transition-delay: 500;
  transition: ease-in-out;
  padding: 5px 5vw;
  border-radius: 9999px;
  margin: 10px;
}
.btn-confirm-login:hover {
  background-color: #1f1c3c;
  border: solid 2px white;
  color: white;
  padding: 5px 5vw;
  border-radius: 9999px;
  margin: 10px;
}
.btn-confirm-kembali {
  background-color: #1f1c3c;
  border: solid 2px white;
  color: white;
  padding: 5px 5vw;
  border-radius: 9999px;
  margin: 10px;
}
.btn-confirm-kembali:hover {
  color: #1f1c3c;
  background-color: white;
  transition-delay: 500;
  transition: ease-in-out;
}
</style>
