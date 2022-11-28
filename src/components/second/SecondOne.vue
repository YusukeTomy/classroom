<template>
  <div className="desktop:mx-[300px] sp:mx-[15px] min-h-screen relative">
    <h1 className="pt-[50px] desktop:text-[60px] sp:text-[24px] pb-[20px]">Question 1</h1>
    
    <div className="mb-[15px] flex flex-col items-start">
      <label for="familyName">Family Name: <span className="text-red-600">required</span></label>
      <input id="familyName" required className="bg-white border border-blue-400 w-[95%] h-[30px] mx-[5px]" v-model="familyName">
    </div>

    <div className="mb-[15px] flex flex-col items-start">
      <label for="middleName">Middle Name: </label>
      <input id="middleName" className="bg-white border border-blue-400 w-[95%] h-[30px] mx-[5px]" v-model="middleName">
    </div>

    <div className="mb-[15px] flex flex-col items-start">
      <label for="givenName">Given Name: <span className="text-red-600">required</span></label>
      <input id="givenName" required className="bg-white border border-blue-400 w-[95%] h-[30px] mx-[5px]" v-model="givenName">
    </div>

    <div className="mb-[15px] flex flex-col items-start">
      <label for="age">Age: <span className="text-red-600">required</span></label>
      <input id="age" required className="bg-white border border-blue-400 w-[95%] h-[30px] mx-[5px]" v-model="age">
    </div>

    <div className="mb-[30px] flex flex-col items-start">
      <label for="country">Country: <span className="text-red-600">required</span></label>
      <input id="country" required className="bg-white border border-blue-400 w-[95%] h-[30px] mx-[5px]" v-model="country">
    </div>

    <a className="absolute right-[0px] bottom-[20px] flex justify-center items-center px-4 py-1 bg-blue-500 text-white rounded-[3px] desktop:ml-[25px]
        font-bold w-[100px]" href="/first/2"
            >
      Next
    </a>
    <!--<button className="absolute right-[0px] bottom-[20px] flex justify-center items-center px-4 py-1 bg-blue-500 text-white rounded-[3px] desktop:ml-[25px]
        font-bold w-[100px]" v-on:click='aboutUser'
            >
      Next
    </button>-->
  </div>
</template>

<script>
//import db from '../../firebase.js'
//import store from '../store/index.js'

export default {
  data() {
   return {
    familyName: "",
    middleName: "",
    givenName: "",
    age: "",
    country: ""
   }
 },
  //aboutUser: function() {
    //db.collection('user')
    //  .add({
    //    familyName: (this.familyName),
    //    middleName: (this.middleName),
    //    givenName: (this.givenName),
    //    age: (this.age),
    //    country: (this.country),
    //  })
    //  .then(() => {
    //    window.location.href = '/first/2';
    //  })
  //},
}
</script>