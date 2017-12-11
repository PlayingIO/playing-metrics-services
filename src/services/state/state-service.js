import assert from 'assert';
import makeDebug from 'debug';
import { Service, helpers, createService } from 'mostly-feathers-mongoose';
import fp from 'mostly-func';
import StateModel from '~/models/state-model';
import defaultHooks from './state-hooks';

const debug = makeDebug('playing:metrics-services:states');

const defaultOptions = {
  name: 'states'
};

class StateService extends Service {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    super(options);
  }

  stateup(app) {
    super.stateup(app);
    this.hooks(defaultHooks(this.opƒtions));
  }
}

export default function init(app, options, hooks) {
  options = Object.assign({ ModelName: 'state' }, options);
  return createService(app, StateService, StateModel, options);
}

init.Service = StateService;
