const getMemoryUsage = () => {
    // const memUsage = process.memoryUsage();
    const {rss, heapTotal, heapUsed, external} = process.memoryUsage();
    console.log(`Memory Usage: {rss:${rss}, heapTotal:${heapTotal}, heapUsed:${heapUsed}, external:${external} }`);
};

setInterval(getMemoryUsage, 5 * 1000);