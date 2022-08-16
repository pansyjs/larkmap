import { Popup as L7Popup } from '@antv/l7';
import { useDeepCompareEffect } from '@pansy/react-hooks';
import type { ReactPortal } from 'react';
import { memo, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useScene } from '@/hooks/useScene';
import type { PopupProps } from './types';

export const Popup = memo<PopupProps>((props): ReactPortal => {
  const scene = useScene();
  const domRef = useRef(document.createElement('div'));

  const popup = useMemo(() => {
    const options = { ...props };
    const l7Popup = new L7Popup(options);
    return l7Popup;
  }, []);

  useEffect(() => {
    const onOpen = () => {
      props.onOpen?.();
    };
    popup.on('open', onOpen);

    return () => {
      popup.off('open', onOpen);
    };
  }, [props.onOpen]);

  useEffect(() => {
    const onClose = () => {
      props.onClose?.();
    };
    popup.on('close', onClose);

    return () => {
      popup.off('close', onClose);
    };
  }, [props.onClose]);

  useDeepCompareEffect(() => {
    popup.setLnglat(props.lngLat);
  }, [props.lngLat]);

  useEffect(() => {
    popup.setDOMContent(domRef.current);
    scene.addPopup(popup);

    return () => {
      popup.remove();
    };
  }, []);

  // @ts-ignore
  return createPortal(props.children, domRef.current);
});
