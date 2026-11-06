/* @flow */

function takesBody(body: HTMLBodyElement): void {
  const animations = body.getAnimations({
    pseudoElement: null,
    subtree: true,
  });
  takesAnimation(animations[0]);
}

function takesAnimation(animation: Animation): void {
  animation.pause();
  animation.updatePlaybackRate(2);
  animation.play();
  animation.reverse();
  animation.finish();
  animation.cancel();

  animation.id;
  animation.effect;
  animation.timeline;
  animation.startTime;
  animation.currentTime;
  animation.playbackRate;
  animation.playState;
  animation.replaceState;
  animation.pending;
  animation.ready;
  animation.finished;

  // $FlowExpectedError[prop-missing]
  animation.potato;
}
