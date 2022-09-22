---
title: PC业务组件
nav:
  order: 2
order: 1
toc: menu
---

# PC 业务组件

## SortCard

```tsx
import React from 'react';
import { SortCard } from '@sumary/pc';

const timestamp = Date.now();

export default () => <SortCard timestamp={timestamp} />;
```

## Calendar

```tsx
import React from 'react';
import { Calendar } from '@sumary/pc';

const timestamp = Date.now();

export default () => <Calendar timestamp={timestamp} />;
```

## BilateralControll

```tsx
import React from 'react';
import { BilateralControll } from '@sumary/pc';

export default () => <BilateralControll title="First Demo" />;
```
