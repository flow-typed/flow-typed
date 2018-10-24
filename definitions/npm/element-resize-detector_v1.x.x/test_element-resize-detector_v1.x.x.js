import elementResizeDetectorMaker from 'element-resize-detector';

const erd = elementResizeDetectorMaker({
  strategy: "scroll"
});

const element: HTMLElement = document.createElement('div');

erd.listenTo(element, (testElement) => {});

erd.removeListener(element, (testElement) => {});

erd.removeAllListeners(element);

erd.uninstall(element);
