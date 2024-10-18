<template>
  <button :class="`btn ${btnType}`">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: String,
    btnType: {
      type: String,
      default: 'btn-primary'
    }
  }
}
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.btn-primary {
  background-color: blue;
}
</style>
