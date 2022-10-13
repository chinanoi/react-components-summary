import { merge } from 'lodash';

const defaultConfig = {
  url: 'text',
  params: '123',
};

let _init = false;
export function loginConfigInit(config: any) {
  if (_init) {
    return;
  }
  _init = true;

  merge(defaultConfig, config);

  console.log('不能重复初始化', defaultConfig);
}

export class Config {
  private _config = {};
  constructor(config: any) {
    this._config = config;
  }
  get getCongfig() {
    return merge({}, defaultConfig, this._config);
  }
}
