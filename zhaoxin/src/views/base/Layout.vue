<script setup lang="ts">
import Header from './Header.vue';
import Sider from './Sider.vue';

</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header></Header>
      </el-header>
      <el-container>
        <el-aside><Sider></Sider></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>

</template>