// @flow

import elementResizeDetectorMaker from 'element-resize-detector';
import { it, describe } from "flow-typed-test";

describe('element-resize-detector', () => {
  const element: HTMLElement = document.createElement('div');
  const elementResizeHandler = (el: HTMLElement) => { el.offsetWidth };
  const erd = elementResizeDetectorMaker({
    strategy: "scroll"
  });

  describe('method listenTo', () => {
    it("should be able to attach a listener to an element", () => {
      erd.listenTo(element, elementResizeHandler);
    });

    it("should fail without required arguments", () => {
      // $FlowExpectedError
      erd.listenTo(element);

      // $FlowExpectedError
      erd.listenTo();
    });
  });

  describe('method removeListener', () => {
    it("should be able to remove a listener from an element", () => {
      erd.removeListener(element, elementResizeHandler);
    });

    it("should fail without required arguments", () => {
      // $FlowExpectedError
      erd.removeListener(element);

      // $FlowExpectedError
      erd.removeListener();
    });
  });

  describe('method removeAllListeners', () => {
    it("should be able to remove all listeners from an element", () => {
      erd.removeAllListeners(element);
    });

    it("should fail without required arguments", () => {
      // $FlowExpectedError
      erd.removeAllListeners();
    });
  });

  describe('method uninstall', () => {
    it("should completely remove detector from element", () => {
      erd.uninstall(element);
    });

    it("should fail without required arguments", () => {
      // $FlowExpectedError
      erd.uninstall();
    });
  });
});
