/* global window document Vue axios sessionStorage */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function empty(v, type) {
  if(v === undefined || v === null) return true;
  if(type !== undefined) {
    if(type === 'array') {
      return (Array.isArray(v) && v.length === 0);
    }
    if(typeof v !== type) return true;
    if(type === 'string') {
      return (v.length === 0);
    } else if(type === 'object') {
      return (Object.keys(v).length === 0);
    }
    return false;
  }
  return false;
}

const debounce = new (function() {
  this.counters = [];
  this.invoke = function(fn, _arguments, delay) {
    let fnIdx = this.counters.findIndex(e => (fn === e[0]));
    if(fnIdx === -1) {
      this.counters.push([fn, 0]);
      fnIdx = this.counters.length - 1;
    }
    const c = ++this.counters[fnIdx][1];
    sleep(delay).then(() => {
      if(c === this.counters[fnIdx][1]) fn.apply(null, _arguments);
    });
  };
})();
