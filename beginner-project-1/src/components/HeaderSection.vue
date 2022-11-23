<template>
    <div class="header-section">
      <a href="http://" target="_blank">HOME</a>
      <a href="http://" target="_blank">ABOUT</a>
      <a href="http://" target="_blank">CONTACT</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderSection",
  };
  </script>
  
  <style>
  .header-section {
    background-color: rgb(84, 67, 184);
    height: 60px;
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;
  }
  
  .header-section a {
    color: white;
    text-decoration: none;
    padding: 0 40px;
    position: relative;
    top: 40%;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  