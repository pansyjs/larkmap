import { createContext } from 'react';

import type { LarkMapContextValue } from './types';

export const LarkMapContext = createContext<LarkMapContextValue>(null);
