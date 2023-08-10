<template>
  <div class="container" style="display: flex; justify-content: center">
    <div ref="pie" style="display: flex; width: 100%"></div>
  </div>
</template>

<script lang="ts">
import {axiosInstances} from "../../api/axiosConfi";
import { Pie } from "@antv/g2plot";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    // const organ:string ="1";
    const url='http://43.139.117.216:8100/user/departmentData?organizationId=1';
    interface department{
      departmentName:String,
      num:number,
    };
axiosInstances.get("/user/departmentData",{url,headers: { 
      Authorization: "Bearer "+"eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNjUyNTk3LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2OTU3OTcsImlhdCI6MTY5MTY1MjU5N30.sCAntFNJpzxcghPWif-rcEUpGEb_bUMQma7OfVR2bN5ZlVFRkzKUH5vMtlqRwCXphiAGIhMy62qkLLDZmLIYhI9uniw8xmomAjH57_CPDk0X3U61wHoH9wEP47PPqaKJ9hyApPYAMH9a46GcfLATcxcNz45eIgJK7kEnZqA6A9SXMogBVELGD5Bi5rscdVmC3jnYWODSTsWfFe156s_IBBNO8qoViPRHAKsxpTgq1cHkEE2RkgZzBb5uws9JvhjQ0gDEz_KMnt38a2obi-kgXIQcnNURNOako5LSlxNGInZ9J0bQ3GqnRP62LDHkOE2LmWaIsXzDQeAhErb-tnJrZA"
   }})
.then(function (res) {
  console.log(res.data);
  console.log("object");

  
})
.catch(function (err) {
  //  console.log(error);
});
    // axiosInstances.get("/user/departmentData", {
    //          headers: {
    //            Authorization:
    //              "Bearer eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNTg2NzQ2LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2Mjk5NDYsImlhdCI6MTY5MTU4Njc0Nn0.F0B0rffswAICK4G7MtdP15fPCTtqfKBUByDF_8msBN5VzywHOFSw4EDGE_TVfj2gYeMMbyULu4AY_kT5oXFHLetcHcg-eREkTPL7anXvRPEhNpKWG8AUb5GNXCWycnYa5pJJUx4tsfNZRjOGyHRZrjBMAJpR7L2EgntX_UiUTB9qHmNlMgRUNROiIG_PknLvtJBTbR6u7m1-aAI__crN3FAo3zifgwaQ4nx6vDCHVVNWSD0rQBbKNFD4OyeVSvljNAXiSeB2tNTPJgBu7nG7PrSG1zSIYvexoIL1ZuwdbXnYLGEk-P_BoPPsB_xnJrSLgRXiiHFewaqZdZ-aAEjyqg",
    //          }}).then(function (res){
    //           console.log("111");
    //           let list:bbb[];
    //           list=res.data.department;
    //           console.log(res);
    //          })




    // const get = () => {
    //   return async () => {
    //     try {
    //       // interface arr {
    //       //   departmentName: String;
    //       //   num: number;
    //       // }
    //       interface arr {
    //         departmentName: String,
    //         num: number,
    //       };

    //       let list: arr[];
    //       const res = await axiosInstances.get("/user/departmentData", {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNTg2NzQ2LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2Mjk5NDYsImlhdCI6MTY5MTU4Njc0Nn0.F0B0rffswAICK4G7MtdP15fPCTtqfKBUByDF_8msBN5VzywHOFSw4EDGE_TVfj2gYeMMbyULu4AY_kT5oXFHLetcHcg-eREkTPL7anXvRPEhNpKWG8AUb5GNXCWycnYa5pJJUx4tsfNZRjOGyHRZrjBMAJpR7L2EgntX_UiUTB9qHmNlMgRUNROiIG_PknLvtJBTbR6u7m1-aAI__crN3FAo3zifgwaQ4nx6vDCHVVNWSD0rQBbKNFD4OyeVSvljNAXiSeB2tNTPJgBu7nG7PrSG1zSIYvexoIL1ZuwdbXnYLGEk-P_BoPPsB_xnJrSLgRXiiHFewaqZdZ-aAEjyqg",
    //         },
    //       });
    //       list = res.data.department;
    //     } catch (error) {}
    //   };
    // };

    // ____________
    const pie = ref(null);
    let piePlot = null;
    let initChart = () => {
      
      piePlot = new Pie(pie.value, {
        appendPadding: 10,
        data: [
          { type: "list[0].departmentName", value: 2 },
          { type: "list[1].departmentName", value: 2 },
          { type: "list[2].departmentName", value: 2 },
          { type: "list[3].departmentName", value: 2 },
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
    onMounted(initChart);
    return {
      pie,
    };
  },
};
</script>
