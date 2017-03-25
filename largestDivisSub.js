var largestDivisibleSubset = function(nums) {
    if (nums.length < 1) {
        return []
    }

    nums.sort(function (a, b) { return a-b })
    let dp = new Array(nums.length).fill(0)
    let pre = new Array(nums.length).fill(-1)
    console.log('dp', dp);
    console.log('pre', pre);
    console.log('nums', nums)
    let max = 0
    let maxIndex = 0
    dp[0] = 1

    for (let i = 1; i < nums.length; i++) {
        for (let j = i-1; j >=0 ; j--) {
           console.log(nums[i], nums[j]);
            if (nums[i] % nums[j] === 0) {
                if (dp[i] < dp[j]+1) {
                    dp[i] = dp[j]+1
                    pre[i] = j
                    if (dp[i] > max) {
                        max = dp[i]
                        maxIndex = i
                    }
                }
            }
        }
    }

    let subset = []
    let p = maxIndex
    while(p !== -1) {
        subset.unshift(nums[p])
        p = pre[p]
    }

    return subset
};

console.log(largestDivisibleSubset([1,2,4,8]))