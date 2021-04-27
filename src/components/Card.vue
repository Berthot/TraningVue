<template>
  <div class="card text-white bg-dark mb-3" id="central-card">
    <div class="card-body content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>

.content{
  display: flex;
  flex-direction: column;
}

#central-card{
  width: 100%;
  margin: 0.5rem 0.9rem;
}

</style>
