<template>
  <div className="desktop:mx-[300px] sp:mx-[15px]">
    <h1 className="pt-[50px] desktop:text-[60px] sp:text-[24px]">test: Input Forms</h1>
    
    <a href="/first/1" className="flex justify-center items-center px-4 py-1 bg-blue-500 text-white rounded-[3px] desktop:ml-[25px]
        font-bold hover:bg-blue-600 duration-300 desktop:mt-[0px] sp:mt-[20px]"
            >
      Start
    </a>
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

