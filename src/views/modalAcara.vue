<template>
  <div class="backdrop-confirm" @click.self="closeConfirm">
    <div class="modal-lay">
      <div class="waiting">
        <slot></slot>
        <button class="btn btn-acara-back" @click="closeConfirm">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  methods: {
    closeConfirm() {
      this.$emit("close");
    },
    submitBooklet() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
.modal-lay{
  position: relative;
}
.waiting{
  position: absolute;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 70%;
  height: 500px;
  top: 50%;
  margin-top:50vh;
  text-align: center;
  left: 50%;
}


.backdrop-confirm {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

.btn-acara-back {
  background-color: #ad3c3f;
  color: white;
}
.btn-acara-back:hover{
  background-color: white;
  color: #ad3c3f;
}


</style>
