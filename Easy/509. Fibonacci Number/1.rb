# @param {Integer} n
# @return {Integer}
@part1=(1+5**0.5)/2
@part2=(1-5**0.5)/2
@part3=5**-0.5
def fib(n)
    return (@part3*(@part1**n-@part2**n)).round
end
