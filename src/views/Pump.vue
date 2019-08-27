<template>
    <div>
        <radial-gauge :value="pumpData.signals[0]['psi']"
            :options="{
                width: 200,
                height: 200,
                units: 'psi'
            }"
        ></radial-gauge>
        <radial-gauge :options="{ 
            minValue: 0, 
            maxValue:500,  
            width: 200,
            height: 200, 
            units: 'rpm',
            majorTicks: [
                '0','100','200','300', '400', '500'
            ]}"  
            :value="pumpData.signals[1]['rpm']"></radial-gauge>
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {PumpData} from "../Models/PumpData";
import LinearGauge from '../../node_modules/vue-canvas-gauges/src/LinearGauge.vue';
import RadialGauge from 'vue-canvas-gauges/src/RadialGauge.vue';
import axios from "axios";

@Component({
  components: {
    LinearGauge,
    RadialGauge
  }
})
export default class Pump extends Vue {

    pumpData:PumpData = new PumpData();
    
    mounted() {

        axios({ method: "GET", "url": "https://localhost:5001/api/controls" }).then(result => {
            
            this.pumpData = result.data[1];
        }, error => {
            console.error(error);
        });
    }
}
</script>
