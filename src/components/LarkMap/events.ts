import type { Scene } from '@antv/l7';
import type { Events, EventMapping, Listeners, } from './types';

export const events: EventMapping = {
  onResize: 'resize',
  onMapMove: 'mapmove',
  onMoveStart: 'movestart',
  onMoveEnd: 'moveend',
  onZoomChange: 'zoomchange',
  onZoomStart: 'zoomstart',
  onZoomEnd: 'zoomend',
  onClick: 'click',
}

export const listenEvents = (
  partialEvents: EventMapping,
  props: Partial<Events>,
  scene: Scene,
) =>
  Object.keys(partialEvents).reduce(
    (listeners, event) => {
      const propEvent = props[event];

      if (propEvent) {
        const listener = (e: React.SyntheticEvent<any>) => {
          console.log(e);
          propEvent(scene, e);
        };

        scene.on(partialEvents[event], listener);

        listeners[event] = listener;
      }

      return listeners;
    },
    {}
  );

export const updateEvents = (
  listeners: Listeners,
  currentProps: Partial<Events>,
  scene: Scene
) => {
  const toListenOff = Object.keys(events).filter(
    eventKey =>
      listeners[eventKey] && typeof currentProps[eventKey] !== 'function'
  );

  toListenOff.forEach(key => {
    scene.off(events[key], listeners[key]);
    delete listeners[key];
  });

  const toListenOn = Object.keys(events)
    .filter(key => !listeners[key] && typeof currentProps[key] === 'function')
    .reduce((acc, next) => ((acc[next] = events[next]), acc), {} as EventMapping);

  const newListeners = listenEvents(toListenOn, currentProps, scene);

  return { ...listeners, ...newListeners };
};
