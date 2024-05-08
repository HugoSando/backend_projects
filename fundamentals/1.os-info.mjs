import { arch, freemem, totalmem, platform, uptime, version, userInfo, hostname, networkInterfaces } from 'node:os'

console.log('Info from Node.js operating system module:')
console.log('OS CPU architecture:', arch())
console.log('Free memory (bytes):', freemem())
console.log('Total memory (bytes):', totalmem())
console.log('OS platform:', platform())
console.log('OS uptime (seconds):', uptime())
console.log('OS version:', version())
console.log('User info:', userInfo().username)
console.log('OS hostname:', hostname())
console.log('OS network interfaces:', networkInterfaces().wlp2s0[0].address)
console.log('uptime:', uptime() / 60 / 60, 'hours')
