<template>
  <div class="container-lg ">
    <div class="row py-4 py-md-4 mt-5">
      <div class="col-md-8 col-lg-9">
        <BlogList />
      </div>
      <div class="col-md-4 col-lg-3">
        <PersonalPanel />
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';
import PersonalPanel from '@/components/PersonalPanel.vue';

export default {
  name: 'Context',
  components: { BlogList,PersonalPanel },
}
</script>

<style scoped>

</style>