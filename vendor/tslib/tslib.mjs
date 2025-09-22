/**
 * Minimal subset of tslib helpers required by @swc/helpers.
 * Implementations are based on the TypeScript helper output (Apache 2.0 licensed).
 */

export function __decorate(decorators, target, key, desc) {
  var c = arguments.length;
  var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
  var d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
    r = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if ((d = decorators[i])) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

export function __metadata(k, v) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') {
    return Reflect.metadata(k, v);
  }
}

export function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

export function __values(o) {
  var s = typeof Symbol === 'function' && Symbol.iterator;
  var m = s && o[s];
  var i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === 'number') {
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  }
  throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}

export function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  };
  var f;
  var y;
  var t;
  var g = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype);
  return (
    (g.next = verb(0)),
    (g['throw'] = verb(1)),
    (g['return'] = verb(2)),
    typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
      return this;
    }),
    g
  );

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (g && ((g = 0), op[0] && (_ = 0)), _)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

export function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== 'object' && typeof value !== 'function') throw new TypeError('Object expected.');
    var dispose;
    var inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== 'function') throw new TypeError('Object not disposable.');
    if (inner)
      dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env.stack.push({ value: value, dispose: dispose, async: async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

const SuppressedErrorCtor =
  typeof SuppressedError === 'function'
    ? SuppressedError
    : function (error, suppressed, message) {
        var e = new Error(message);
        e.name = 'SuppressedError';
        e.error = error;
        e.suppressed = suppressed;
        return e;
      };

export function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new SuppressedErrorCtor(e, env.error, 'An error was suppressed during disposal.') : e;
    env.hasError = true;
  }
  var r;
  var s = 0;
  function next() {
    while ((r = env.stack.pop())) {
      try {
        if (!r.async && s === 1) {
          s = 0;
          env.stack.push(r);
          return Promise.resolve().then(next);
        }
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) {
            s |= 2;
            return Promise.resolve(result).then(next, function (e) {
              fail(e);
              return next();
            });
          }
        } else {
          s |= 1;
        }
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

export default {
  __decorate,
  __metadata,
  __param,
  __values,
  __generator,
  __addDisposableResource,
  __disposeResources
};
