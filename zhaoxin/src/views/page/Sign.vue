<script setup lang="ts">
import {axiosInstances} from "../../api/axiosConfi";
import { ref,onMounted } from "vue";
//import {get} from "../../api/admin/admin"
const load =async () => {
        try {
            const res = await axiosInstances.get("/user/info/all", {
                headers:{
                 Authorization:"Bearer "+"eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNTg4MTkxLCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2MzEzOTEsImlhdCI6MTY5MTU4ODE5MX0.X7DcMIWJrb7-KL7OoCYrWGUWOeRO-OCi9XOyWIn6fsruPUdRF3PpbHLlG4Jy8Ph6Thdx5rqae-ji2InkuZbbLe6XTXUe0fH8vEy-Hx4Ksf7hT_jeYmW06cU5MTIn71qQrEteyVb6RHtaMtcdGGUf1C7SqwSN7Q8uSHWaK01gAqHi8tUbvaU5n-ihn3Mke2vXr4hTshLNkDOeRHoBwv4HAUkfmF_pbNCBzgmp9YI4V3JH9uVgnXlesDEwVvkjpjgj28f3CqTof_Zyiji0zsYzcfjWmG8BBCAoqqvysEq7lKpuOJBV0UYIZxkYkjyK6I-kW3xxkCXMtF-URoHsIpHIYw"
                  },
            params:{
                organizationId:1
            }
            })
            console.log(res.data.data)
        } catch (error) {
          console.log(error)
        }
    }
    onMounted(async ()=>{await load()})
    const tableData = ref([
  {
    id: "2023xxxxxxx",
    phone: "10011333",
    name: "Tom",
    order: "1",
  }
]);
const total = ref(100);
const currentChange = (value: number) => {
  console.log(value);
};
const handleEdit = (index: number, row: any) => {
  console.log(index, row);
};
const handleDel = (index: number, row: any) => {
  console.log(index, row);
};
</script>
<template>
  <div class="container">
    <div style="margin-top: 10px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="order" label="Order" width="80" />
        <el-table-column prop="id" label="Id" width="150" />
        <el-table-column prop="phone" label="Phone" width="150" />
        <el-table-column prop="name" label="Name" width="150" />
        <el-table-column prop="email" label="email" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDel(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev,pager,next"
      :total="total"
      @current-change="currentChange"
      class="pagination-center"
    ></el-pagination>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
}

.table {
  margin: 10px 0;
}

.input-with-select {
  width: 380px;
  margin-right: 20px;
}

.pagination-center {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
</style>
