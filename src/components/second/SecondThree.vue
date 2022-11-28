<template>
  <div className="desktop:mx-[300px] sp:mx-[15px] min-h-screen relative">
    <h1 className="pt-[50px] desktop:text-[60px] sp:text-[24px] pb-[20px]">Question 3</h1>
    
    <div className="mb-[10px]">
      <label for="familyName">Family Name: </label>
      <input id="familyName" required className="bg-[#f5f5f5] border-b border-black" v-model="familyName">
    </div>

    <div className="mb-[10px]">
      <label for="middleName">Middle Name: </label>
      <input id="middleName" className="bg-[#f5f5f5] border-b border-black" v-model="middleName">
    </div>

    <div className="mb-[10px]">
      <label for="givenName">Given Name: </label>
      <input id="givenName" required className="bg-[#f5f5f5] border-b border-black" v-model="givenName">
    </div>

    <div className="mb-[10px]">
      <label for="age">Age: </label>
      <input id="age" required className="bg-[#f5f5f5] border-b border-black" v-model="age">
    </div>

    <div className="mb-[30px]">
      <label for="country">Country: </label>
      <input id="country" required className="bg-[#f5f5f5] border-b border-black" v-model="country">
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