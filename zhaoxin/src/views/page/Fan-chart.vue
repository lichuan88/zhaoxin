<template>
  <div class="container" style="display: flex; justify-content: center">
    <div ref="pie" style="display: flex; width: 100%"></div>
  </div>
</template>

<script lang="ts">
import { Pie } from "@antv/g2plot";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {  
  setup() {
    const pie = ref(null);
    const url = "http://43.139.117.216:8100/user/departmentData?organizationId=1";
    interface Department {
      type: string;
      value: number;
    }
    let arr: Department[] = [];
    // let ann:Department[]=[
    // {type:"shsh",value:1},
    // {type:"shh",value:1},
    // {type:"sh",value:1},
    // {type:" hdaidhoaidjasiojdoiasdjoajddjasidoajsdiadjiadjoia",value:1},
    // {type:"a",value:1},
    // {type:"bb",value:1},
    // {type:"cc",value:1},
    // {type:"dd",value:1},
    // {type:" h22",value:1},
    // {type:" 11h",value:1},
    // {type:" 1h",value:1},{type:" 1110h",value:1},{type:" 00111h",value:1},{type:" 11100h",value:1}
    

    // ]

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

    const initChart = () => { 
      let data = arr;
      // arr.map((item) => ({
      //   type: item.departmentName,
      //   value: item.num,
      // }));

      const piePlot = new Pie(pie.value, {
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        label: { style: { fontSize: 20 } },
        legend: {
          position: "top",
          // offsetX: 310,
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