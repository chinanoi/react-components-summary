---
title: PC业务组件
nav:
  order: 2
order: 1
toc: menu
mobile: false
---

# PC 业务组件

## 列表渲染

```tsx
import React from 'react';
import { List } from '@sumary/c-pc';

export default () => <List />;
```

## 组件带初始化方法

```tsx
import React from 'react';
import { Login, loginConfigInit } from '@sumary/c-pc';
loginConfigInit({ num: 123 });

export default () => <Login />;
```

## cs

```tsx
import React from 'react';
import { TableDemo } from '@sumary/c-pc';

export default () => <TableDemo />;
```

## 组件带初始化方法

```tsx
import React from 'react';
import { Login, loginConfigInit } from '@sumary/c-pc';
loginConfigInit({ num: 123 });

export default () => <Login />;
```

## SortCard

```tsx
import React from 'react';
import { SortCard } from '@sumary/c-pc';

const timestamp = Date.now();

export default () => <SortCard timestamp={timestamp} />;
```

## Calendar

```tsx
import React from 'react';
import { Calendar } from '@sumary/c-pc';

const timestamp = Date.now();

export default () => <Calendar timestamp={timestamp} />;
```

## BilateralControll

```tsx
import React from 'react';
import { BilateralControll } from '@sumary/c-pc';

export default () => <BilateralControll title="First Demo" />;
```
