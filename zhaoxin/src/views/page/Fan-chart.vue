<template>
  <!-- <div class="container" style="display: flex; justify-content: center"> -->
    <div ref="pie" style="display: flex; width: 100%"></div>
  <!-- </div> -->
</template>

<script lang="ts">
import {axiosInstances} from "../../api/axiosConfi";
import { Pie } from "@antv/g2plot";
import { ref } from "@vue/reactivity";
// import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const pie = ref(null);
    let piePlot = null;
    const url='http://43.139.117.216:8100/user/departmentData?organizationId=1';

    interface department{
      departmentName:String,
      num:number,
    };

    let arr:department;
      axiosInstances.get("/user/departmentData",{baseURL:url,headers: { 
      Authorization: "Bearer "+"eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNjUyNTk3LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2OTU3OTcsImlhdCI6MTY5MTY1MjU5N30.sCAntFNJpzxcghPWif-rcEUpGEb_bUMQma7OfVR2bN5ZlVFRkzKUH5vMtlqRwCXphiAGIhMy62qkLLDZmLIYhI9uniw8xmomAjH57_CPDk0X3U61wHoH9wEP47PPqaKJ9hyApPYAMH9a46GcfLATcxcNz45eIgJK7kEnZqA6A9SXMogBVELGD5Bi5rscdVmC3jnYWODSTsWfFe156s_IBBNO8qoViPRHAKsxpTgq1cHkEE2RkgZzBb5uws9JvhjQ0gDEz_KMnt38a2obi-kgXIQcnNURNOako5LSlxNGInZ9J0bQ3GqnRP62LDHkOE2LmWaIsXzDQeAhErb-tnJrZA"
   }})
.then(function (res:ref) {
  console.log(res.data);
  arr=res.data.data.department;
  console.log(arr[0].num);
  initChart();
 
  // onMounted(initChart);
})
.catch(function (err) {});
let initChart=()=>{      
     piePlot = new Pie(pie.value, {
        appendPadding: 10,
        data: [
          { type: arr[0].departmentName , value: arr[0].num },
          { type: arr[1].departmentName , value: arr[1].num },
          { type: arr[2].departmentName , value: arr[2].num },
          { type: arr[3].departmentName , value: arr[3].num },
        ],
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        label: { style: { fontSize: 20 } },
        legend: {
          position: "top-center",
          offsetX: 310,
          marker: { style: { r: 10 } },
        },
        interactions: [{ type: "element-active" }],
      });
       piePlot.render();
    };
    
    return {
      pie,
    };
  }, 
};
</script>
