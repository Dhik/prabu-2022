<template>
  <section class="bg-nof hide_min_576">
    <div class="container">
      <div class="row justify-content-center m-5">
        <div class="col-md-5 col-sm-6 col-6 w3-animate-bottom">
          <img src="./img/error.png" class="card-img-top pd-20" alt="..." />
        </div>
      </div>
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="error">TIDAK DITEMUKAN</h2>
          <p class="error">
            Mohon maaf ya pramuda, konten yang kamu cari belum tersedia.
          </p>
        </div>
      </div>
      <div class="row justify-content-center m-5">
        <router-link to="/" class="btn w3-animate-right">
          <button class="btn btn-back">Kembali</button>
        </router-link>
      </div>
    </div>
  </section>
  <section class="bg-nof hide_max_576">
    <div class="container">
      <div
        class="row justify-content-center m-5"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div
          class="col-sm-12 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <img src="./img/error.png" class="card-img-top pd-20" alt="..." />
        </div>
      </div>
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="error2">TIDAK DITEMUKAN</h2>
          <p class="error2">
            Mohon maaf ya pramuda, konten yang kamu cari belum tersedia.
          </p>
        </div>
      </div>
      <div
        class="row justify-content-center m-5"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <button class="btn btn-back">Kembali</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style>
.btn_map {
  background-color: #6c7358;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-align: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.eror {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
</style>
