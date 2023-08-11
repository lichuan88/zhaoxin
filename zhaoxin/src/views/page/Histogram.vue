<template>
  <div
    class="container"
    style="
      display: flex;
      justify-content: center;
      height: 400px;
      margin-top: 80px;
    "
  >
    <div ref="hiss"></div>
  </div>
</template>

<script lang="ts">
import { Column } from "@antv/g2plot";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  
  setup() {
    const hiss = ref(null);
    const url = "http://43.139.117.216:8100/user/departmentData?organizationId=1";
    interface Department {
     
      type: string;
      value: number;
    }
    let arr: Department[] = [];

    
    
    // const data = [
    //   { type: "网站运维部", value: 4 },
    //   { type: "信息化运维部", value: 2 },
    //   { type: "行政秘书部", value: 2 },
    //   { type: "网络运维部", value: 2 },
    // ];
    
    
    onMounted(() => {
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNzQyMTY2LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE3ODUzNjYsImlhdCI6MTY5MTc0MjE2Nn0.rFxMnLJeXR1x8pzgOsktedxpYGsNox62IhbEeqV2q5wiEHHwxYb57ubruYxwAXbKmLzzgLEy_vn2kmUm_XMRWNUD_KjHdCQfcIQXNnwUd0ILlKtSbhzJDfc0mXKKFV4A4WdvWDhEkIs3-jhH0Q8DIW6oeJ9NLojpqX1IaFB9yGUy-ZvRbpDezmEemhIf9hvEMmEiSnxF3TASQHqqTU3TKODbsmGDJddRMic7iAz4V7XTY9WBUk6yb6VM8zkNPnF_Wz0tCV4YEtXj7je3VfBOdWXusA9cMRO-B2Yv4oPWjfgLaOmVr53T0DoKcJW8CbceNW54nxnVzOOBzYuLabZlgA",
          },
        })
        .then((res) => {
          arr = res.data.data.department;
          console.log(arr);
          // console.log(ann);
          initChart();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    );


    let initChart = () => {
      let data=arr;
      const Hisplot = new Column(hiss.value, {
        width: 500,
        data,
        padding: "auto",
        xField: "type",
        yField: "value",
        color: ["#6294fa", "#63daab", "#657798", "#f7c122"],
        seriesField: "type",
        legend: { position:"top"},
        meta: {
          type: {
            alias: "部门",
          },
          value: {
            alias: "人数",
          },
        },
      });
      Hisplot.render();
    };
    // onMounted(initChart);
    return {
      hiss,
    };
  },
};
</script>
