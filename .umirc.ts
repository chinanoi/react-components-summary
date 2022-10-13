import { defineConfig } from 'dumi';
const fs = require('fs');

export default defineConfig({
  title: 'summary',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  themeConfig: {
    carrier: '预览', // 设备状态栏左侧的文本内容
    hd: {
      rules: [{ mode: 'vw', options: [75, 750] }],
    },
  },
});
