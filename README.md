# Vue-WebRTC-Player
Vue项目中开箱即用的WebRTC播放器，支持RTC格式视频流的直接拉取播放

## 安装mkcert
WebRTC依赖于https传输，故需要本地的CA证书与生成的密钥实现代理功能
本项目推荐使用mkcert，具体方法可自行去官网 (https://github.com/FiloSottile/mkcert/releases) 安装
现给出本地开发时的命令行步骤，以供参考，请在项目根目录下执行
```
npm install -g mkcert 

mkcert -install

mkcert localhost 127.0.0.1 ::1

```
检查根目录存在 cert.pem 与 key.pem 两个文件即为成功

## 项目运行
```
npm run serve
```