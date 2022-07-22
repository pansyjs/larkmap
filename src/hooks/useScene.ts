import { useContext } from 'react';
import { LarkMapContext } from '@/components/LarkMap';

export const useScene = () => {
  const context = useContext(LarkMapContext);
  if (!context) {
    throw new Error('The useScene must be used in the LarkMap container');
  }
  const { scene } = context;

  return scene;
};