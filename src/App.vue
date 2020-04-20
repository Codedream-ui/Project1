<template>
  <div id="app">
    <!-- 头部 -->
    <header class="header">
      <div class="container fix">
        <!-- LOGO -->
        <img class="logo fl mt10" src="./assets/images/logo.jpg" alt="logo">
        <div class="header-right fl">
          <div class="language-toggle">
            <div class="fr">
              <img class="vm mr5" src="./assets/images/icon_1.jpg" alt="">
              ENGLISH
              <img class="vm ml5" src="./assets/images/icon_2.png" alt="">
            </div>
          </div>
          <!-- 菜单 -->
          <ul class="menu-list fix">
            <li><router-link exact :to="urlData.home">Home</router-link></li>
            <li>
              <router-link to="#">About BECB</router-link>
              <ul class="child-menu-list fix">
                <li><router-link :to="urlData.aboutIsweeCommittes">Committee</router-link></li>
                <li><router-link :to="urlData.aboutIsweeKeynoteSpeakers">Keynote Speakers</router-link></li>
                <li><router-link :to="urlData.aboutIsweeConferenceVenue">Conference Venue</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="#/">Submissions</router-link>
              <ul class="child-menu-list fix">
                <li><router-link :to="urlData.submissionsTopics">Topics</router-link></li>
                <li><router-link :to="urlData.submissionsGuidelines">Guidelines</router-link></li>
                <li><router-link :to="urlData.submissionsPublications">Publications</router-link></li>
              </ul>
            </li>
            <li><router-link :to="urlData.agenda">Agenda</router-link></li>
            <li><router-link :to="urlData.registration">Registration</router-link></li>
            <li><a href="http://english.visitbeijing.com.cn">Beijing</a></li>
            <li><router-link :to="urlData.contacUs">Contact</router-link></li>
          </ul>
        </div>
      </div>
      
    </header>
    
    <main class="">
      <!-- 路由出口 -->
      <router-view/>
    </main>
    
    <!-- 底部 -->
    <footer class="footer">
      <div class="container fix" style="margin-bottom: 20px;">
        <div class="footer-nav fl" style="font-size: 16px;padding-left: 40px;" >
          <div style="height: 30px;">
                <h2  style="color: #1e8cd5;margin-bottom: .5em;font-size: 1.308em;line-height: 1.2;border-bottom: 2px double #1e8cd5;width: 220px; ">Quick links</h2>
            </div>
          <ul>
            <li  ><router-link :to="urlData.home">Home</router-link></li>
            <li  ><router-link :to="urlData.aboutIswee">About BECB</router-link></li>
            <li  ><router-link :to="urlData.submissionsGuidelines">Submissions</router-link></li>
            <li  ><router-link :to="urlData.agenda">Agenda</router-link></li>
            <li  ><router-link :to="urlData.registration">Registration</router-link></li>
  
          </ul>
        </div>
        <div class="footer-right fr" style="padding-right: 20px;">
          <div style="height: 35px;">
                <h2  style="color: #1e8cd5;margin-bottom: .5em;font-size: 1.308em;line-height: 1.2;border-bottom: 2px double #1e8cd5;width: 220px; ">Contact</h2>
            </div>
          Conference Secretary: Ms <br>
           <img src="./assets/images/email.jpg" style="width:20px;">Email:becbinfo@163.com;chenmengqin0202@163.com<br>
            <img src="./assets/images/tele.jpg" style="width:20px;">Cell phone:  +86 13237144835 <br>
            <img src="./assets/images/wexin.jpg" style="width:20px;">Wechat: 13237144835<br>

        </div>
      </div>

      <div class="footer-copy">
        <div class="container">
          Copyright 2021 All rights reserved  
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 路由地址/动态设置便于统一管理
      urlData: {
        home  : '/',
        aboutIcwrer  : '/aboutIcwrer',
        submissions: '/submissions',
        agenda : '/agenda',
        registration : '/registration',
        hotelAndTravel : '/hotelAndTravel',
        contacUs : '/contacUs',
        
        aboutIsweeCommittes:'/aboutIsweeCommittes', 
        aboutIsweeKeynoteSpeakers : '/aboutIsweeKeynoteSpeakers',
        aboutIsweeConferenceVenue : '/aboutIsweeConferenceVenue',

        submissionsTopics:'/submissionsTopics',     
        submissionsPublications:'/submissionsPublications',     
        submissionsGuidelines:'/submissionsGuidelines',     
      },
    }
  },
  mounted() {
   
  },
  methods: {
    
  },
}
</script>

<style lang="css">
/*header*/
.header{
  width: 100%;
  min-width: 1200px;
  height: 100px;
  background: #fff;
}
.logo{
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
.header-right {
  margin-left: 30px;
}
.language-toggle {
  height: 36px;
  line-height: 36px;
}
.menu-list {
  display: inline-block;
}
.menu-list > li{
  float: left;
  height: 63px;
  padding-right: 1px;
  background: url(./assets/images/li_bg1.jpg) right 9px no-repeat;
  position: relative;
}
.menu-list > li:last-child{
    background: none;
}
.menu-list > li > a {
  display: inline-block;
  height: 60px;
  line-height: 34px;
  padding: 0 34px;
  font-size: 20px;
  color: #404040;
}
.menu-list > li > a.active {
  border-bottom: 3px solid #007dbd;
  color: #007dbd;
}

.child-menu-list {
  display: none;
  background: #007dbd;

  position: absolute;
  left: 0;
  top: 60px;

  width: 120%;
  padding: 20px 0;
}
.child-menu-list > li {
  text-align: center;
  height: 34px;
  line-height: 34px;
}
.child-menu-list > li a {
  color: #fff;
}
.child-menu-list > li a.active {
  color: #fff;
}
.menu-list > li:hover .child-menu-list {
  display: block;
}

/*footer*/
.footer{
    /*height:180px;*/
    font-family: 'Times New Roman';
    width: 100%;
    min-width: 1200px;
    padding-top: 30px;
    background: #afacac;
    color: #fff;
}
.footer-nav{
    width: 600px;
    /*height: 220px;*/
    color:#1E8CD5;
    border-right: 1px solid #5e5e60;
}
.footer-nav .title{
    color:#1E8CD5;
    line-height: 24px;
    font-size: 16px;
    text-transform: uppercase;
}
.footer-nav a{
    display: block;
    line-height: 22px;
    font-size: 16px;
    color: #fff;
}
.footer-logo{
    width: 398px;
    height: 220px;
    border-right: 1px solid #5e5e60;
    font-size: 24px;
    text-align: center;
}
.footer-logo img{
    display: block;
    width: 168px;
    height: 168px;
}
.footer-right{
    width: 426px;
    line-height: 25px;
    font-size: 16px;
}
.footer-right .title{
    font-size: 22px;
    text-transform: uppercase;
}
.footer-right span {
  display: block;
  line-height: 33px;
  font-size: 16px;
  color: #fff;
}
.footer-copy{
    width: 100%;
    min-width: 1200px;
    height: 40px;
    line-height: 40px;
    background: #666;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
}
#floatdivids{
  width: 300px;
  height: 96px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff8015;
  z-index: 1000;
  border: 1px solid #ccc;
  background: url(./assets/images/win_bg.jpg) center top no-repeat; background-size: cover;
}

#left_layer {
  width: 130px;
  height: 220px;
  background-color: #C9141D;
  z-index: 1000;
  border: 1px solid #FFFF00;
  text-align:center;
  background: url(./assets/images/notice.jpg) center top no-repeat; background-size: cover;
}
</style>
