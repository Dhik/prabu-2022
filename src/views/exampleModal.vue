<template>
  <div class="modal-backdrop-penugasan" id="modal">
    <div class="modal-quiz-container justify-content-center">
      <div class="container-fluid login-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-12 col-lg-6 text-center penugasan-img">
            <div class="row text-center justify-content-center">
              <div class="col-lg image-login">
                <img
                  src="../views/img/maskot/elang.png"
                  alt="Image"
                  class="img-md-fluid img-komodo"
                  id="maskot"
                  style="width: 60%; height: 100%"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="title-penugasan desc">
              <img src="../assets/img/logoprabu.png" width="72" height="72" />
            </div>
            <p class="text-center login-prabu">Login Prabu 2021</p>
            <p class="text-center">
              Silahkan Masukan NISN/Password yang telah terdaftar
            </p>
            <div
              class="overview justify-content-center align-items-center bg-gradient"
            >
              <div class="form-group">
                <label class="label">NISN</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  v-model="npm"
                  aria-describedby="emailHelp"
                  placeholder="Masukan NISN"
                />
              </div>
              <div class="form-group">
                <label class="label">Password (contoh:02/20/****)</label>
                <input
                  type="date"
                  v-model="birthdate"
                  class="form-control mb-5"
                  placeholder="Password"
                />
              </div>
              <div class="row">
                <button @click="loginForm" value="kirim" class="btn btn-login">
                  Login
                </button>
              </div>
              <div class="row">
                <p class="text-center justify-content-center mt-3">Or</p>
              </div>
              <div class="row">
                <span class="btn btn-paus" @click="login"> Paus Unpad </span>
              </div>
              <br />
              <div class="row">
                <router-link to="/minimap" class="back-minimap"
                  ><p class="text-center justify-content-center mt-3">
                    Kembali ke Minimap
                  </p></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
