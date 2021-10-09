
# react-native-telnet-client

	this is based on library node-telnet-client "https://www.npmjs.com/package/telnet-client".
	node-telnet-client is not support react-native, I just adapt it to react-native

because node-telnet-client is based on nodejs, but react-native don't have nodejs environment, so I used some emulated lib in npm.
1. bluebird
2. buffer
3. react-native-tcp-socket
4. events

## Getting started

`$ npm install react-native-telnet-client --save`

## Usage
	please check https://www.npmjs.com/package/telnet-client
## Problem
	when you use this lib, if you get error: [TypeError: null is not an object (evaluating 'Sockets.connect')]; 
	this is because react-native-tcp-socket is not linked
	please do followed steps:
```sh
npm install react-native-tcp-socket
npx react-native link react-native-tcp-socket
```
