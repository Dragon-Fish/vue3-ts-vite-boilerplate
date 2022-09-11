<template lang="pug">
section#global-footer
  #footer-logo
    img(
      src='@/assets/images/common/AOJIAOSTUDIO@3x.png',
      style='height: 100px; width: auto'
    )
  #footer-text
    p 抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当
    p 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
    p Copyright ©2022 aojiaostudio.com ALL RIGHTS RESERVED | 浙ICP备 1919810 号
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
#global-footer
  padding: 2rem 0 4rem 0
  width: 100%
  align-content: center
  background-color: #252525
  display: flex
  align-items: center
  justify-content: center
  gap: 2rem
  &::after
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 50px)

#footer-text
  font-size: 1.5vh
  color: #fff
  text-align: left
  overflow: auto !important
  margin-top: 20px

#footer-text p
  line-height: 1.6

#footer-text p:last-of-type
  color: #fff
  font-size: 0.8rem
</style>
