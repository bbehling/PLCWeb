<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import LinearGauge from '../../node_modules/vue-canvas-gauges/src/LinearGauge.vue';
    import RadialGauge from 'vue-canvas-gauges/src/RadialGauge.vue';
    import {HeaterData} from "../Models/HeaterData";
    import axios from "axios";

    @Component({
        components: {
            LinearGauge,
            RadialGauge
        }
    })
    export default class Heater extends Vue {
        heaterData:HeaterData = new HeaterData();
    
        mounted() {

            axios({ method: "GET", "url": "https://localhost:5001/api/controls" }).then(result => {
                this.heaterData = result.data[0];
            }, error => {
                console.error(error);
            });
        }
    }
</script>

<template>
    <div>
        <linear-gauge  :options="{
            width: 400,
            height: 200,
            minValue: 0, 
            maxValue:250,
            units: 'F',
            majorTicks: [
                '0','50','100','150', '200', '250'
            ]}"   
          :value="heaterData.signals[0]['temp']">
        </linear-gauge> 
    </div>
</template>