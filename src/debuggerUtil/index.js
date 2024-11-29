const delayDebugger = (delay = 3000) => {
  setTimeout(() => {
    debugger;
  }, delay);
}

export default {
  delayDebugger
}