// @flow

import * as HID from 'node-hid';
import type {HID as HIDDevice, HIDDeviceDescription} from 'node-hid';

(HID.devices(): Array<HIDDeviceDescription>);

let device: HIDDevice = new HID.HID('123');
device = new HID.HID(123, 456);

device.on('data', (data) => {});
device.once('data', (data) => {});
device.removeListener('data', (data) => {});

device.write([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]);
device.close();
device.pause();
device.resume();
device.read((error?: Error, data?: Buffer) => {});
device.on('data', (data: Buffer) => {});
device.on('error', (error: Error) => {});

(device.readSync(): Array<number>);
(device.readTimeout(15): Array<number>);

// $FlowExpectedError
(HID.devices(): Promise<Array<HIDDeviceDescription>>);
// $FlowExpectedError
(device.write([0x00, 0x01, 0x01, 0x05, 0xff, 0xff]): Promise);
// $FlowExpectedError
(device.read((data: Buffer) => {}));
// $FlowExpectedError
(device.readSync(): Buffer);

// $FlowExpectedError
device = new HID.HID();
// $FlowExpectedError
device = HID.HID('123');

