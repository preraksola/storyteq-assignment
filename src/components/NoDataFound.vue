<script>
export default {
  name: "NoDataFound",
};
</script>

<template lang="pug">
  .no-data-found.flex.q-pa-md.row.justify-center.items-center
    q-icon(name="sentiment_very_dissatisfied" size="2em")
    .text-h5.q-ml-sm No data found

</template>

<style scoped lang="scss">
.no-data-found {
  color: red;
}
</style>
