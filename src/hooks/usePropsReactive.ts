import isEqual from 'lodash/isEqual';
import reduce from 'lodash/reduce';
import { usePrevious, useDeepCompareEffect } from '@pansy/react-hooks';

import { toCapitalString } from '@/utils';

export interface Options {
  setterMap?: Record<string, Function>;
  converterMap?: Record<string, Function>;
}

const getNotEventProps = (props: Record<string, any> = {}) => {
  return reduce(props, (result, value, key) => {
    if (!(/^on[A-Z]/.test(key)) ) {
      result[key] = value;
    }

    return result;
  }, {})
}

export function usePropsReactive<P extends object = {}>(
  props: P,
  insRef: React.MutableRefObject<any>,
  {
    setterMap = {},
    converterMap = {}
  }: Options = {}
) {
  const notEventProps = getNotEventProps(props) as P;
  const prevProps = usePrevious(notEventProps);

  useDeepCompareEffect(
    () => {
      if (!insRef.current) return;
      reactivePropChange(notEventProps, true);
    },
    [notEventProps]
  );

  const reactivePropChange = (nextProps: P, shouldDetectChange = true) => {
    if (!insRef.current) return;

    try {
      Object.keys(nextProps).forEach((key) => {
        let willReactive = true
        if (shouldDetectChange) {
          willReactive = detectPropChange(key, nextProps, prevProps)
        }
        if (!willReactive) return;

        let setterParam = nextProps[key];

        // 对值进行转换
        if (key in converterMap) {
          setterParam = converterMap[key](nextProps[key])
        }

        if (key in setterMap) {
          setterMap[key](setterParam, insRef.current)
        } else {
          const trySetterName = `set${toCapitalString(key)}`;

          if (trySetterName in insRef.current) {
            insRef.current[trySetterName](setterParam);
          }
        }
      })
    } catch (err) {}
  }

  /**
   * 检查参数变化
   * @param key
   * @param nextProps
   * @param oldProps
   * @returns
   */
  const detectPropChange = (key: string, nextProps: P, oldProps: P) => {
    return !isEqual(nextProps[key], oldProps[key])
  }

  const onInstanceCreated = () => {
    console.log(insRef.current);
    console.log(props);
    reactivePropChange(props, false)
  }

  return { onInstanceCreated }
}
