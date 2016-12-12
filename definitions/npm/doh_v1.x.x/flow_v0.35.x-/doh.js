import type { _nodeRunner, _parseURLargs, _rhinoRunner, _browserRunner, robot, main, runner } from 'npm$namespace$doh'

declare module 'doh' {
					
}

declare module 'plugins' {
		declare interface remoteRobot {
		
	}

	declare interface android_webdriver_robot {
		downKey(sec: any, charCode: any, keyCode: any, delay: any): void,
		moveMouse(sec: any, x: any, y: any, delay: any, duration: any): void,
		pressMouse(sec: any, left: any, middle: any, right: any, delay: any): void,
		releaseMouse(sec: any, left: any, middle: any, right: any, delay: any): void,
		setDocumentBounds(sec: any, docScreenX: any, docScreenY: any, width: any, height: any): void,
		typeKey(
		sec: any, charCode: any, keyCode: any, alt: any, ctrl: any, shift: any, meta: any, delay: any, async: any
	): void,
		typeKeys(chars: String, delay: number, duration: number): void,
		typeKeys(chars: number, delay: number, duration: number): void,
		upKey(sec: any, charCode: any, keyCode: any, delay: any): void
	}

			
}

declare module 'npm$namespace$doh' {
		declare interface _nodeRunner {
		
	}

	declare interface _rhinoRunner {
		
	}

	declare interface _parseURLargs {
		isDebug: boolean,
		noGlobals: boolean,
		scopeMap: any[]
	}

	declare interface _browserRunner {
		debug: Object,
		error: Object,
		isBrowser: boolean,
		registerUrl: Object,
		robot: Object,
		assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		assertError(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		assertFalse(condition: Object, hint: String): void,
		assertNotEqual(notExpected: Object, actual: Object, hint: String): void,
		assertTrue(condition: Object, hint: String): void,
		Deferred(canceller: any): void,
		e(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		f(condition: Object, hint: String): void,
		is(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		isNot(notExpected: Object, actual: Object, hint: String): void,
		pause(): void,
		register(a1: any, a2: any, a3: any, a4: any, a5: any): void,
		registerDocTests(module: any): void,
		registerGroup(
		group: String, tests: any[], setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Function, setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Object, setUp: Function, tearDown: Function, type: String
	): void,
		registerTest(group: String, test: any[], type: String): void,
		registerTest(group: String, test: Function, type: String): void,
		registerTest(group: String, test: Object, type: String): void,
		registerTestNs(group: String, ns: Object): void,
		registerTests(group: String, testArr: any[], type: String): void,
		registerTestType(name: String, initProc: Function): void,
		run(): void,
		runGroup(groupName: String, idx: number): void,
		runOnLoad(): void,
		showLogPage(): void,
		showPerfTestsPage(): void,
		showTestPage(): void,
		t(condition: Object, hint: String): void,
		togglePaused(): void,
		toggleRunAll(): void
	}

	declare interface main {
		debug: Object,
		error: Object,
		isBrowser: boolean,
		registerUrl: Object,
		robot: Object,
		assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		assertError(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		assertFalse(condition: Object, hint: String): void,
		assertNotEqual(notExpected: Object, actual: Object, hint: String): void,
		assertTrue(condition: Object, hint: String): void,
		Deferred(canceller: any): void,
		e(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		f(condition: Object, hint: String): void,
		is(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		isNot(notExpected: Object, actual: Object, hint: String): void,
		pause(): void,
		register(a1: any, a2: any, a3: any, a4: any, a5: any): void,
		registerDocTests(module: any): void,
		registerGroup(
		group: String, tests: any[], setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Function, setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Object, setUp: Function, tearDown: Function, type: String
	): void,
		registerTest(group: String, test: any[], type: String): void,
		registerTest(group: String, test: Function, type: String): void,
		registerTest(group: String, test: Object, type: String): void,
		registerTestNs(group: String, ns: Object): void,
		registerTests(group: String, testArr: any[], type: String): void,
		registerTestType(name: String, initProc: Function): void,
		run(): void,
		runGroup(groupName: String, idx: number): void,
		runOnLoad(): void,
		showLogPage(): void,
		showPerfTestsPage(): void,
		showTestPage(): void,
		t(condition: Object, hint: String): void,
		togglePaused(): void,
		toggleRunAll(): void
	}

	declare interface robot {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay: number): void,
		mouseRelease(buttons: Object, delay: number): void,
		mouseWheel(wheelAmt: number, delay: number, duration: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay: number, duration: number): void,
		setClipboard(data: String, format: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay: number, duration: number): void,
		typeKeys(chars: number, delay: number, duration: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

	declare interface runner {
		debug: Object,
		error: Object,
		isBrowser: boolean,
		registerUrl: Object,
		robot: Object,
		assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		assertError(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		assertFalse(condition: Object, hint: String): void,
		assertNotEqual(notExpected: Object, actual: Object, hint: String): void,
		assertTrue(condition: Object, hint: String): void,
		Deferred(canceller: any): void,
		e(
		expectedError: Object, scope: Object, functionName: String, args: any[], hint: String
	): void,
		f(condition: Object, hint: String): void,
		is(expected: Object, actual: Object, hint: String, doNotThrow: any): void,
		isNot(notExpected: Object, actual: Object, hint: String): void,
		pause(): void,
		register(a1: any, a2: any, a3: any, a4: any, a5: any): void,
		registerDocTests(module: any): void,
		registerGroup(
		group: String, tests: any[], setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Function, setUp: Function, tearDown: Function, type: String
	): void,
		registerGroup(
		group: String, tests: Object, setUp: Function, tearDown: Function, type: String
	): void,
		registerTest(group: String, test: any[], type: String): void,
		registerTest(group: String, test: Function, type: String): void,
		registerTest(group: String, test: Object, type: String): void,
		registerTestNs(group: String, ns: Object): void,
		registerTests(group: String, testArr: any[], type: String): void,
		registerTestType(name: String, initProc: Function): void,
		run(): void,
		runGroup(groupName: String, idx: number): void,
		runOnLoad(): void,
		showLogPage(): void,
		showPerfTestsPage(): void,
		showTestPage(): void,
		t(condition: Object, hint: String): void,
		togglePaused(): void,
		toggleRunAll(): void
	}

			
}

declare module '_browserRunner' {
		declare interface _groups {
		
	}

	declare interface _testTypes {
		perf(group: any, tObj: any, type: any): void
	}

	declare interface robot {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay: number): void,
		mouseRelease(buttons: Object, delay: number): void,
		mouseWheel(wheelAmt: number, delay: number, duration: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay: number, duration: number): void,
		setClipboard(data: String, format: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay: number, duration: number): void,
		typeKeys(chars: number, delay: number, duration: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

			
}

declare module 'main' {
		declare interface _groups {
		
	}

	declare interface _testTypes {
		perf(group: any, tObj: any, type: any): void
	}

	declare interface robot {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay: number): void,
		mouseRelease(buttons: Object, delay: number): void,
		mouseWheel(wheelAmt: number, delay: number, duration: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay: number, duration: number): void,
		setClipboard(data: String, format: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay: number, duration: number): void,
		typeKeys(chars: number, delay: number, duration: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

			
}

declare module 'robot' {
		declare interface _runsemaphore {
		lock: any[],
		unlock(): any
	}

			
}

declare module 'runner' {
		declare interface _groups {
		
	}

	declare interface _testTypes {
		perf(group: any, tObj: any, type: any): void
	}

	declare interface robot {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay: number): void,
		mouseRelease(buttons: Object, delay: number): void,
		mouseWheel(wheelAmt: number, delay: number, duration: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay: number, duration: number): void,
		setClipboard(data: String, format: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay: number, duration: number): void,
		typeKeys(chars: number, delay: number, duration: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

			
}

declare module 'doh/_nodeRunner' {
					declare module.exports: _nodeRunner


}

declare module 'doh/_parseURLargs' {
					declare module.exports: _parseURLargs


}

declare module 'doh/_rhinoRunner' {
					declare module.exports: _rhinoRunner


}

declare module 'doh/_browserRunner' {
					declare module.exports: _browserRunner


}

declare module 'doh/_browserRunner._testTypes' {
					declare module.exports: _testTypes


}

declare module 'doh/_browserRunner._groups' {
					declare module.exports: _groups


}

declare module 'doh/_browserRunner.robot' {
					declare module.exports: robot


}

declare module 'doh/robot' {
					declare module.exports: robot


}

declare module 'doh/robot._runsemaphore' {
					declare module.exports: _runsemaphore


}

declare module 'doh/main' {
					declare module.exports: main


}

declare module 'doh/main._groups' {
					declare module.exports: _groups


}

declare module 'doh/main._testTypes' {
					declare module.exports: _testTypes


}

declare module 'doh/main.robot' {
					declare module.exports: robot


}

declare module 'doh/runner' {
					declare module.exports: runner


}

declare module 'doh/runner._groups' {
					declare module.exports: _groups


}

declare module 'doh/runner._testTypes' {
					declare module.exports: _testTypes


}

declare module 'doh/runner.robot' {
					declare module.exports: robot


}

declare module 'doh/plugins/android-webdriver-robot' {
					declare module.exports: android_webdriver_robot


}

declare module 'doh/plugins/remoteRobot' {
					declare module.exports: remoteRobot


}