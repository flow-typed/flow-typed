import ip from "ip";

ip.address(); // my ip address
// $ExpectError
ip.isEqual(2130706433);
// $ExpectError
ip.isEqual("::1");
ip.isEqual("::1", "::0:1"); // true
ip.toBuffer("127.0.0.1"); // Buffer([127, 0, 0, 1])
ip.toString(new Buffer([127, 0, 0, 1])); // 127.0.0.1
ip.fromPrefixLen(24); // 255.255.255.0
ip.mask("192.168.1.134", "255.255.255.0"); // 192.168.1.0
ip.cidr("192.168.1.134/26"); // 192.168.1.128
ip.not("255.255.255.0"); // 0.0.0.255
ip.or("192.168.1.134", "0.0.0.255"); // 192.168.1.255
ip.isPrivate("127.0.0.1"); // true
ip.isV4Format("127.0.0.1"); // true
ip.isV6Format("::ffff:127.0.0.1"); // true
var buf = new Buffer(128);
var offset = 64;
ip.toBuffer("127.0.0.1", buf, offset); // [127, 0, 0, 1] at offset 64
ip.toString(buf, offset, 4); // '127.0.0.1'
ip.subnet("192.168.1.134", "255.255.255.192");
ip.cidrSubnet("192.168.1.134/26");
ip.cidrSubnet("192.168.1.134/26").contains("192.168.1.190"); // true
ip.toLong("127.0.0.1"); // 2130706433
ip.fromLong(2130706433); // '127.0.0.1'
