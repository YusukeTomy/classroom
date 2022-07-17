<template>
  <div className="desktop:mx-[300px] sp:mx-[15px]">
    <h1 className="desktop:mt-[50px] sp:mt-[20px] desktop:text-[60px] sp:text-[24px]">Where is your classroom?</h1>
    <div className="flex desktop:flex-row sp:flex-col items-center justify-center desktop:mt-[60px] sp:mt-[20px] sp:mx-[30px]">
      <div className="flex">
        <label className="text-[24px] mr-[10px]">Day:</label>
        <select className="border border-gray-400 rounded-[5px] py-[5px] px-[20px]" v-model="setDay">
          <option>----</option>
          <option>Monday</option> 
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
      </div>
      <div className="flex desktop:ml-[60px] sp:ml-[0px] sp:mt-[20px] desktop:mt-[0px]">
        <label className="text-[24px] mr-[10px]">Period:</label>
        <select className="border border-gray-400 rounded-[5px] py-[5px] px-[20px]" v-model="setPeriod">
          <option>--</option>
          <option>1st</option>
          <option>2nd</option>
          <option>3rd</option>
          <option>4th</option>
          <option>5th</option>
        </select>
      </div>
      <div className="flex">
        <button className="flex justify-center items-center px-4 py-1 bg-teal-500 text-white rounded-[3px] desktop:ml-[50px] sp:ml-[0px]
                          font-bold hover:bg-teal-600 duration-300 desktop:mt-[0px] sp:mt-[20px]"
                v-on:click="setDP">
          Search
        </button>
        <button className="flex justify-center items-center px-4 py-1 bg-blue-500 text-white rounded-[3px] desktop:ml-[25px] sp:ml-[20px]
                          font-bold hover:bg-blue-600 duration-300 desktop:mt-[0px] sp:mt-[20px]"
                v-on:click="setRS">
          Reset
        </button>
      </div>
    </div>
    <div className="flex flex-wrap desktop:gap-y-5 sp:gap-y-2 desktop:my-10 sp:my-5 justify-center ml-[20px]">
    <p v-for="(item, index) in data" :key="index" className="desktop:text-[24px] sp:text-[18px] desktop:w-[380px] sp:w-[160px] flex justify-center items-center">
      {{ item }}
    </p>
    </div>
  </div>
</template>

<script>
import db from '../firebase.js'
import store from '../store/index.js'

export default {
  data() {
   return {
     data: [],
   }
 },
  methods: {
    setClassList: function(dp) {
      db.collection("class")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(doc.data().DP===dp){
              this.data.push(doc.data().name)
              this.data.push(doc.data().class)
            }
          })
      });
    },
    setRS: function() {
      location.reload()
      store.commit('setLastClass', '')
    },
    setDP: function() { 
      store.commit('setDay', this.setDay)
      store.commit('setPeriod', this.setPeriod)

      if(this.setDay==="Monday" && this.setPeriod ==='1st'){
        store.commit('setClass', 'M1')
      } else if(this.setDay==="Monday" && this.setPeriod ==='2nd'){
        store.commit('setClass', 'M2')
      } else if(this.setDay==="Monday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'M3')
      } else if(this.setDay==="Monday" && this.setPeriod==='4th'){
        store.commit('setClass', 'M4')
      } else if(this.setDay==="Monday" && this.setPeriod==='5th'){
        store.commit('setClass', 'M5')
      } else if(this.setDay==="Tuesday" && this.setPeriod==='1st'){
        store.commit('setClass', 'Tu1')
      } else if(this.setDay==="Tuesday" && this.setPeriod==='2nd'){
        store.commit('setClass', 'Tu2')
      } else if(this.setDay==="Tuesday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'Tu3')
      } else if(this.setDay==="Tuesday" && this.setPeriod==='4th'){
        store.commit('setClass', 'Tu4')
      } else if(this.setDay==="Tuesday" && this.setPeriod==='5th'){
        store.commit('setClass', 'Tu5')
      } else if(this.setDay==="Wednesday" && this.setPeriod==='1st'){
        store.commit('setClass', 'W1')
      } else if(this.setDay==="Wednesday" && this.setPeriod==='2nd'){
        store.commit('setClass', 'W2')
      } else if(this.setDay==="Wednesday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'W3')
      } else if(this.setDay==="Wednesday" && this.setPeriod==='4th'){
        store.commit('setClass', 'W4')
      } else if(this.setDay==="Wednesday" && this.setPeriod==='5th'){
        store.commit('setClass', 'W5')
      } else if(this.setDay==="Thursday" && this.setPeriod==='1st'){
        store.commit('setClass', 'Ts1')
      } else if(this.setDay==="Thursday" && this.setPeriod==='2nd'){
        store.commit('setClass', 'Ts2')
      } else if(this.setDay==="Thursday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'Ts3')
      } else if(this.setDay==="Thursday" && this.setPeriod==='4th'){
        store.commit('setClass', 'Ts4')
      } else if(this.setDay==="Thursday" && this.setPeriod==='5th'){
        store.commit('setClass', 'Ts5')
      } else if(this.setDay==="Friday" && this.setPeriod==='1st'){
        store.commit('setClass', 'F1')
      } else if(this.setDay==="Friday" && this.setPeriod==='2nd'){
        store.commit('setClass', 'F2')
      } else if(this.setDay==="Friday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'F3')
      } else if(this.setDay==="Friday" && this.setPeriod==='4th'){
        store.commit('setClass', 'F4')
      } else if(this.setDay==="Friday" && this.setPeriod==='5th'){
        store.commit('setClass', 'F5')
      } else if(this.setDay==="Saturday" && this.setPeriod==='1st'){
        store.commit('setClass', 'Sa1')
      } else if(this.setDay==="Saturday" && this.setPeriod==='2nd'){
        store.commit('setClass', 'Sa2')
      } else if(this.setDay==="Saturday" && this.setPeriod==='3rd'){
        store.commit('setClass', 'Sa3')
      } else if(this.setDay==="Saturday" && this.setPeriod==='4th'){
        store.commit('setClass', 'Sa4')
      } else if(this.setDay==="Saturday" && this.setPeriod==='5th'){
        store.commit('setClass', 'Sa5')
      }
      
      if(store.state.Class !== store.state.LastClass){
        this.setClassList(store.state.Class)
        store.commit('setLastClass', store.state.Class)
      }
    },
  },
}
</script>

