---
nav:
  order: 4
order: 1
title: 工具包
toc: menu
mobile: true
---

```tsx
import React, { useEffect } from 'react';
import { isMobile } from '@sumary/c-utils';

export default () => {
  useEffect(() => {
    const flag = isMobile();
    console.log('flag', flag);
  });

  return <div>工具包</div>;
};
```

## cs

```tsx
import React from 'react';

import { Demo } from '@sumary/c-utils';

export default () => {
  console.log(Demo);
  return <Demo />;
};
```
