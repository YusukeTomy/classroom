<template>
  <div className="desktop:mx-[300px] sp:mx-[15px]">
    <h1 className="desktop:mt-[50px] sp:mt-[20px] desktop:text-[60px] sp:text-[30px]">Where is your classroom?</h1>
    <div className="flex desktop:flex-row sp:flex-col desktop:items-center desktop:justify-center sp:items-start desktop:mt-[60px] sp:mt-[30px] sp:mx-[30px]">
      <div className="flex">
        <label className="text-[24px] mr-[10px]">Day:</label>
        <select className="border border-gray-400 rounded-[5px] py-[5px] px-[20px]">
          <option value="1">Monday</option> 
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
        </select>
      </div>
      <div className="flex desktop:ml-[60px] sp:ml-[0px] sp:mt-[20px] desktop:mt-[0px]">
        <label className="text-[24px] mr-[10px]">Period:</label>
        <select className="border border-gray-400 rounded-[5px] py-[5px] px-[20px]">
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
        </select>
      </div>
      <!--<li v-for="(item, index) in data" :key="index" className="text-[24px]">
        {{ item }}
      </li>-->
    </div>
  </div>
</template>

<script>
//import db from '../firebase.js'
export default {
 data() {
   return {
     data: [],
   }
 },
 //mounted: function () {
 //  db.collection("class")
 //    .get()
 //    .then((querySnapshot) => {
 //      querySnapshot.forEach((doc) => {
 //        console.log(`${doc.id} => ${doc.data().name}`)
 //        this.data.push(doc.data().name)
 //      })
 //    })
 //},
}
</script>

