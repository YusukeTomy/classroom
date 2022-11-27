<template>
  <div className="desktop:mx-[300px] sp:mx-[15px] min-h-screen relative">
    <h1 className="pt-[50px] desktop:text-[60px] sp:text-[24px] pb-[20px]">Your Information</h1>
    
    <div className="mb-[10px]">
      <label>Family Name: </label>
      <input className="bg-[#f5f5f5] border-b border-black">
    </div>

    <div className="mb-[10px]">
      <label>Middle Name: </label>
      <input className="bg-[#f5f5f5] border-b border-black">
    </div>

    <div className="mb-[30px]">
      <label>Given Name: </label>
      <input className="bg-[#f5f5f5] border-b border-black">
    </div>

    <div className="mb-[30px]">
      <label>Age: </label>
      <input className="bg-[#f5f5f5] border-b border-black">
    </div>

    <div className="mb-[30px]">
      <label>Country: </label>
      <input className="bg-[#f5f5f5] border-b border-black">
    </div>

    <a href="/first/2" className="absolute right-[0px] bottom-[20px] flex justify-center items-center px-4 py-1 bg-blue-500 text-white rounded-[3px] desktop:ml-[25px]
        font-bold w-[100px]"
            >
      Next
    </a>
  </div>
</template>

<script>
//import db from '../firebase.js'
//import store from '../store/index.js'

export default {
  data() {
   return {
     data: [],
   }
 }
}
</script>

