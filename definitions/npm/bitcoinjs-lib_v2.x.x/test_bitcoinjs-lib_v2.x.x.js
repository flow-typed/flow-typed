// @flow

import {crypto, address, ECPair, ECSignature, HDNode, Transaction} from 'bitcoinjs-lib';
var BigInteger = require('bigi');

(address.fromBase58Check('1CrwjoKxvdbAnPcGzYjpvZ4no4S71neKXT').hash: Buffer);
(address.fromBase58Check('1CrwjoKxvdbAnPcGzYjpvZ4no4S71neKXT').version: number);

// $FlowExpectedError
(address.fromBase58Check('1CrwjoKxvdbAnPcGzYjpvZ4no4S71neKXT').hash());

(crypto.hash256(new Buffer(1)): Buffer);

// $FlowExpectedError
(crypto.hash256("hex"): string);

import {Curve, Point} from 'ecurve';
var pi = new BigInteger('1');
var a = new BigInteger('1');
var b = new BigInteger('1');
var Gx = new BigInteger('1');
var Gy = new BigInteger('1');
var n = new BigInteger('1');
var h = new BigInteger('1');
var p: Point = new Curve(pi, a, b, Gx, Gy, n, h).G;

(new ECPair(b): ECPair);
(new ECPair(null, p): ECPair);

// $FlowExpectedError
(new ECPair(new Buffer(1)): ECPair);
// $FlowExpectedError
(new ECPair(null, new Buffer(1)): ECPair);

// $FlowExpectedError
(ECPair(new Buffer(1)): ECPair);

(ECPair.fromPublicKeyBuffer(new Buffer(1)): ECPair);

var pair = ECPair.makeRandom();
(pair.verify(new Buffer(1), new ECSignature(new BigInteger('1'), new BigInteger('1'))): boolean);

// $FlowExpectedError
(pair.verify(new Buffer(1)): boolean);
// $FlowExpectedError
(pair.verify(new Buffer(1), new Buffer(1)): boolean);

(new HDNode(pair, new Buffer(1)): HDNode);

// $FlowExpectedError
(new HDNode(pair): HDNode);

var bitcoinNetwork = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
  dustThreshold: 546
};

(HDNode.fromBase58('xpub123'): HDNode);
(HDNode.fromBase58('xpub123', bitcoinNetwork): HDNode);

// $FlowExpectedError
(HDNode.fromBase58(new Buffer(1)): HDNode);

(HDNode.fromBase58('xpub123', bitcoinNetwork).getAddress(): string);

var t: Transaction = Transaction.fromHex('1234');
var input = {
  script: new Buffer(1),
  hash: new Buffer(1),
  index: 1,
  sequence: 1
};

t.ins.push(input);

// $FlowExpectedError
t.addInput(input);

t.addInput(new Buffer(1), 1);
