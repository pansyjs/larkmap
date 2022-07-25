import reduce from 'lodash/reduce';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
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
  onDoubleClick: 'dblclick',
  /** 鼠标在地图上移动时触发 */
  onMouseMove: 'mousemove',
  /** 鼠标滚轮开始缩放地图时触发 */
  onMouseWheel:'mousewheel',
  /** 鼠标移入地图容器内时触发 */
  onMouseOver: 'mouseover',
  /** 鼠标移出地图容器时触发 */
  onMouseOut: 'mouseout',
  /** 鼠标在地图上单击抬起时触发 */
  onMouseUp: 'mouseup',
  /** 鼠标在地图上单击抬起时触发 */
  onMouseDown: 'mousedown',
  /** 鼠标在地图上单击抬起时触发 */
  onContextMenu:'contextmenu',
  /** 开始拖拽地图时触发 */
  onDragStart: 'dragstart',
  /** 拖拽地图过程中触发 */
  onDragging: 'dragging',
  /** 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 */
  onDragEnd: 'dragend',
}

export function getPropsEvents(props: Record<string, any> = {}) {
  return reduce(props, (result, value, key) => {
    if (isFunction(value) && /^on[A-Z]/.test(key) ) {
      result[key] = value;
    }

    return result;
  }, {})
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
          propEvent(e, scene);
        };

        scene.on(partialEvents[event], listener);

        listeners[event] = listener;
      }

      return listeners;
    },
    {}
  );

export const updateEvents = (
  listeners: Partial<Listeners>,
  currentProps: Partial<Events>,
  scene: Scene
) => {
  const toListenOff = Object.keys(events).filter(
    eventKey => (listeners[eventKey] && typeof currentProps[eventKey] !== 'function') || !isEqual(listeners[eventKey], currentProps[eventKey])
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

export const unlistenEvents = (
  listeners: Partial<Listeners>,
  scene: Scene
) => {
  const toListenOff = Object.keys(events).filter(
    eventKey => listeners[eventKey]
  );

  toListenOff.forEach(key => {
    scene.off(events[key], listeners[key]);
  });
}
