var recursiveCompute = function() {
    //...
    process.nextTick(recursiveCompute);
};
recursiveCompute();
