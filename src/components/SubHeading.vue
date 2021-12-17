<template>
  <div class="position-relative d-inline-block sub-heading">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0C24 13.2548 13.2548 24 0 24V0L24 0Z" fill="#5EC2D0" />
    </svg>
    <h2>{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
  },
};
</script>
<style scoped>
.sub-heading svg {
  position: absolute;
  top: 0;
  left: 0;
}

.sub-heading h2 {
  position: relative;
  font-size: 32px;
}
</style>
