// @flow
import { describe, it } from 'flow-typed-test';
import React from 'react';
import {
  CSSTransition,
  ReplaceTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group';

describe('CSS/Transition', () => {
  const handleEnter = (node: HTMLElement, isAppearing: boolean) => {};
  const handleExit = (node: HTMLElement) => {};
  const handleEndListener = (node: HTMLElement, done: () => void) =>
    node.addEventListener('transitionend', done, false);

  describe('Transition', () => {
    it('should accept all parameters', () => {
      <Transition
        in
        mountOnEnter
        unmountOnExit
        appear
        enter
        exit
        timeout={ 1 }
        addEndListener={ handleEndListener }
        onEnter={ handleEnter }
        onEntering={ handleEnter }
        onEntered={ handleEnter }
        onExit={ handleExit }
        onExiting={ handleExit }
        onExited={ handleExit }
      >
        <div />
      </Transition>;
    })

    it('should accept one of timeout and addEndListener', () => {
      <Transition timeout={ { enter: 1, exit: 1 } }>
        <div />
      </Transition>;

      <Transition addEndListener={ handleEndListener }>
        <div />
      </Transition>;
    })

    it('should fail without required params', () => {
      // $ExpectError
      <Transition><div /></Transition>;
      // $ExpectError
      <Transition timeout={ 1 } />
    })

    it('props should be compatible with other types with same structure', () => {
      type WithTransitionProps = {
        // props copied from Transition element config
        mountOnEnter?: boolean,
        unmountOnExit?: boolean,
        appear?: boolean,
        enter?: boolean,
        exit?: boolean,
        timeout: number,
        addListener?: (node: HTMLElement, done: () => void) => void,
        onEnter?: (node: HTMLElement, isAppearing: boolean) => void,
        onEntering?: (node: HTMLElement, isAppearing: boolean) => void,
        onEntered?: (node: HTMLElement, isAppearing: boolean) => void,
        onExit?: (node: HTMLElement) => void,
        onExiting?: (node: HTMLElement) => void,
        onExited?: (node: HTMLElement) => void,
        in?: boolean,

        // custom props
        children: React$Node,
        getClassName(state: string): string
      };

      class WrapperComponent extends React.PureComponent<WithTransitionProps> {
        render() {
          const {
            children,
            mountOnEnter,
            unmountOnExit,
            appear,
            enter,
            exit,
            timeout,
            addListener,
            onEnter,
            onEntering,
            onEntered,
            onExit,
            onExiting,
            onExited,
            in: transitionIn,
            ...restProps
          } = this.props;

          return (
            <Transition
              in={transitionIn}
              mountOnEnter={mountOnEnter}
              unmountOnExit={unmountOnExit}
              appear={appear}
              enter={enter}
              exit={exit}
              timeout={timeout}
              addListener={addListener}
              onEnter={onEnter}
              onEntering={onEntering}
              onEntered={onEntered}
              onExit={onExit}
              onExited={onExited}
              onExiting={onExiting}
            >
              {state => (
                <div className={restProps.getClassName(state)}>
                  {children}
                </div>
              )}
            </Transition>
          )
        }
      }

      <WrapperComponent timeout={100} getClassName={state => `transition-${state}`}>Foobar</WrapperComponent>;
    });
  })

  describe('CSSTransition', () => {
    it('should accept all parameters', () => {
      <CSSTransition
        in
        mountOnEnter
        unmountOnExit
        appear
        enter
        exit
        timeout={ 1 }
        addEndListener={ handleEndListener }
        onEnter={ handleEnter }
        onEntering={ handleEnter }
        onEntered={ handleEnter }
        onExit={ handleExit }
        onExiting={ handleExit }
        onExited={ handleExit }
        classNames='fade'
      >
        <div />
      </CSSTransition>;
    })

    it('should accept alternative parameters', () => {
      <CSSTransition
        timeout={ { enter: 1, exit: 1 } }
        classNames={ {
          appear: 'fade-appear',
          appearActive: 'fade-active-appear',
          enter: 'fade-enter',
          enterActive: 'fade-active-enter',
          enterDone: 'fade-done-enter',
          exit: 'fade-exit',
          exitActive: 'fade-active-exit',
          exitDone: 'fade-done-exit',
        } }
      >
          <div />
      </CSSTransition>;
    })

    it('should fail without required parameters', () => {
      // $ExpectError
      <CSSTransition timeout={ 1 }><div /></CSSTransition>;
    })
  })
})

describe('Groups', () => {
  const t1 = <Transition timeout={ 1 }><div /></Transition>;
  const t2 = <CSSTransition timeout={ 1 } classNames='fade'><div /></CSSTransition>;

  describe('TransitionGroup', () => {
    function childFactory(child: React$Node) {
      return child;
    }

    it('should accept a null component', () => {
      <TransitionGroup component={null} childFactory={ childFactory }>
        { t1 }
        { t2 }
      </TransitionGroup>;
    })

    it('should accept string component', () => {
      <TransitionGroup component={'nav'}>
        { t1 }
        { t2 }
      </TransitionGroup>;
    })
  })

  describe('ReplaceTransition', () => {
    it('should accept minimum parameters', () => {
      <ReplaceTransition in timeout={ 1 }>
        { t1 }
        { t2 }
      </ReplaceTransition>;
    })

    it('should fail without required parameters', () => {
      // $ExpectError
      <ReplaceTransition timeout={ 1 }>
        { t1 }
        { t2 }
      </ReplaceTransition>;
    })
  })
})
