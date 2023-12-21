<template>
    <div class="play-content">
      <div>
        <video id="video" controls autoplay style="text-align: left;width: 60%;">
          Your browser is too old which doesn't support HTML5 video.
        </video>
      </div>
      <div>
        <p>
          <label for="streamUrl">url:</label>
          <input
            type="text"
            style="co"
            v-model="PlayUrl"
            id="streamUrl"
          />
        </p>
        <button @click="start()">开始(start)</button>
        <button @click="stop()">停止(stop)</button>
      </div>
    </div>
  </template>
   
  <script setup>
  import {ZLMRTCClient} from './ZLMRTCClient'
  import {ref}from 'vue'
   
  var player = null
  var recvOnly = false
   
  var ishttps = 'https:' == document.location.protocol ? true : false
  var isLocal = 'file:' == document.location.protocol ? true : false
  var url =
    document.location.protocol +
    '//' +
    window.location.host +
    '/index/api/webrtc?app=live&stream=test&type=play'
  if (!ishttps && !isLocal) {
    alert(
      '本demo需要在https的网站访问 ,如果你要推流的话(this demo must access in site of https if you want push stream)'
    )
  }
  if (isLocal) {
    url = 'http://127.0.0.1' + '/index/api/webrtc?app=live&stream=test&type=play'
  }
  // document.getElementById('streamUrl').value = url
  const PlayUrl = ref(url)
   
  const start_play = () => {
    let h = 720
    let w = 1280
   
    player = new ZLMRTCClient.Endpoint({
      element: document.getElementById('video'), // video 标签
      debug: true, // 是否打印日志
      zlmsdpUrl: document.getElementById('streamUrl').value, //流地址
      simulcast: false,
      useCamera: true,
      audioEnable: true,
      videoEnable: true,
      recvOnly: recvOnly,
      resolution: { w: w, h: h },
      usedatachannel: false
    })
   
    player.on(ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, function () {
      // ICE 协商出错
      console.log('ICE 协商出错')
    })
   
    player.on(ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, function (e) {
      //获取到了远端流，可以播放
      console.log('播放成功', e.streams)
    })
   
    player.on(ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED, function (e) {
      // offer anwser 交换失败
      console.log('offer anwser 交换失败', e)
      stop()
    })
   
   
    player.on(ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function () {
      // 获取本地流失败
   
      console.log('获取本地流失败')
    })
   
    player.on(ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE, function (state) {
      // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
      console.log('当前状态==>', state)
    })
   
    player.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN, function (event) {
      console.log('rtc datachannel 打开 :', event)
    })
   
    // player.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG, function (event) {
    //   console.log('rtc datachannel 消息 :', event.data)
    //   document.getElementById('msgrecv').value = event.data
    // })
    player.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR, function (event) {
      console.log('rtc datachannel 错误 :', event)
    })
    player.on(ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE, function (event) {
      console.log('rtc datachannel 关闭 :', event)
    })
  }
   
  const start = () => {
    stop()
   
    let h = 720
    let w = 1280
   
    if (!recvOnly) {
      ZLMRTCClient.isSupportResolution(w, h)
        .then(() => {
          start_play()
        })
        .catch(() => {
          alert('not support resolution')
        })
    } else {
      start_play()
    }
  }
  const stop = () => {
    if (player) {
      player.close()
      player = null
      var remote = document.getElementById('video')
      if (remote) {
        remote.srcObject = null
        remote.load()
      }
   
    }
  }
  </script>
   
  <style scoped>
  .play-content{
    background-color: black;
    border: red 1px solid;
    width: 100%;
    height: 100%;
    color: white;
  }
  </style>
   