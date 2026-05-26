import { useState, useEffect, useRef, useCallback } from "react";

const PLAYLIST = "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz";

// ---------------------------------------------
// ROADMAP DATA  -  60 DAYS
// ---------------------------------------------
const DAYS = [
// == WEEK 1: Foundation (Sat->Fri) ==========================================
{id:1,phase:1,week:1,dayLabel:"Day 1  -  Sat",load:"medium",topic:"C++ STL  -  All Containers in One Day",
lectures:[{title:"Complete C++ STL in One Video  -  Step 1.3",url:"https://www.youtube.com/watch?v=RRVYpIET_RU",step:"Step 1.3"}],
tip:"Watch section by section, then immediately write each container from memory before moving to the next. Don't just watch passively.",
mentorNotes:["vector<T>: dynamic array. push_back O(1) amortised. sort(v.begin(),v.end()). lower_bound/upper_bound on sorted vector. Declare: vector<int> v(n,0) for n zeros.","pair<T1,T2>: two values via .first and .second. Pairs sort lexicographically. Make with {a,b} or make_pair(a,b).","map<K,V>: sorted key-value, all ops O(log n). map[key]++ safe even if key absent. Iterate: for(auto& [k,v]:mp). Use unordered_map for O(1) avg.","set<T>: unique sorted elements O(log n). set.count(x) for existence. Use unordered_set for O(1) avg.","stack<T>: LIFO  -  push/pop/top. queue<T>: FIFO  -  push/pop/front. priority_queue<T>: max-heap. Min-heap: priority_queue<int,vector<int>,greater<int>> pq;","CP Header  -  every single file: #include<bits/stdc++.h> | using namespace std; | typedef long long ll; | ios_base::sync_with_stdio(false); cin.tie(NULL);"],
problems:[{name:"CF 4A  -  Watermelon",url:"https://codeforces.com/problemset/problem/4/A",rating:800},{name:"CF 282A  -  Bit++",url:"https://codeforces.com/problemset/problem/282/A",rating:800},{name:"CF 158A  -  Next Round",url:"https://codeforces.com/problemset/problem/158/A",rating:800}]},

{id:2,phase:1,week:1,dayLabel:"Day 2  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Optional: write all 5 STL containers from memory in a blank file. 20 min max.",mentorNotes:[],problems:[]},

{id:3,phase:1,week:1,dayLabel:"Day 3  -  Mon",load:"medium",topic:"Basic Math + Hashing",
lectures:[{title:"Basic Maths for DSA  -  Step 1.4 (count digits, divisors O(sqrtn), prime check, Sieve of Eratosthenes, GCD, LCM)",url:"https://www.youtube.com/watch?v=1xNbjMdbjug",step:"Step 1.4"},{title:"Hashing  -  Step 1.6 (frequency arrays, character hashing, map-based hashing)",url:"https://www.youtube.com/watch?v=KEs5UyBJ39g",step:"Step 1.6"}],
tip:"After videos: implement the Sieve of Eratosthenes from scratch with zero reference. You will use it in contests forever.",
mentorNotes:["Count divisors of n: loop i from 1 to sqrtn. If n%i==0, both i and n/i are divisors. O(sqrtn)  -  not O(n). Why? Every divisor pair (d, n/d) has one member <= sqrtn.","GCD (Euclidean): gcd(a,b)=gcd(b,a%b). Base: gcd(a,0)=a. Use std::gcd(a,b) in C++17 directly.","LCM: lcm(a,b)=(a/gcd(a,b))*b  -  divide FIRST to prevent integer overflow.","Sieve of Eratosthenes: find all primes <= n in O(n log log n). Template: vector<bool> sieve(n+1,true); sieve[0]=sieve[1]=false; for(int i=2;i*i<=n;i++) if(sieve[i]) for(int j=i*i;j<=n;j+=i) sieve[j]=false;","Hashing pattern: count frequencies in one pass, answer all queries from that structure. READ -> COUNT -> ANSWER.","Character hashing: int freq[26]={0}; freq[c-'a']++; for lowercase. For arbitrary keys: unordered_map<int,int> freq; freq[x]++;"],
problems:[{name:"CF 1352A  -  Sum of Round Numbers",url:"https://codeforces.com/problemset/problem/1352/A",rating:800},{name:"CF 791A  -  Bear and Prime 100",url:"https://codeforces.com/problemset/problem/791/A",rating:1000},{name:"CSES  -  Missing Number",url:"https://cses.fi/problemset/task/1083",rating:0,source:"CSES"},{name:"CF 520A  -  Pangram",url:"https://codeforces.com/problemset/problem/520/A",rating:800}]},

{id:4,phase:1,week:1,dayLabel:"Day 4  -  Tue",load:"light",topic:"Sorting I + II  -  All Sorting Algorithms",
lectures:[{title:"Sorting Part 1  -  Selection, Bubble, Insertion Sort  -  Step 2.1",url:"https://www.youtube.com/watch?v=HGk_ypEuS24",step:"Step 2.1"},{title:"Merge Sort  -  Step 2.2a",url:"https://www.youtube.com/watch?v=ogjf7ORKfd8",step:"Step 2.2a"},{title:"Quick Sort  -  Step 2.2b",url:"https://www.youtube.com/watch?v=WIrA4YexLRQ",step:"Step 2.2b"}],
tip:"Concept-heavy day  -  2 problems only. Draw the merge sort recursion tree on paper. The merge step is the core of the algorithm.",
mentorNotes:["Bubble/Selection/Insertion: all O(n^2). Never use in contests for n>10^4. Value: understanding WHY fast sorts matter and HOW comparison sorting works.","Merge Sort: divide -> sort each half -> MERGE with two-pointer. O(n log n) time, O(n) space. STABLE sort.","Merge Sort counts inversions naturally: every time a right-half element is merged before a left-half element, count += remaining left elements.","Quick Sort: pick pivot -> partition -> recurse. O(n log n) avg, O(n^2) worst. Randomise pivot to prevent adversarial inputs.","sort() in C++ = Introsort (QuickSort+HeapSort+InsertionSort hybrid). O(n log n) GUARANTEED. Always use this in contests.","Custom comparator: sort(v.begin(),v.end(),[](auto& a,auto& b){ return a.second < b.second; });  -  sorts by pair's second element."],
problems:[{name:"CSES  -  Distinct Numbers",url:"https://cses.fi/problemset/task/1621",rating:0,source:"CSES"},{name:"CF 1399A  -  Remove Smallest",url:"https://codeforces.com/problemset/problem/1399/A",rating:800}]},

{id:5,phase:1,week:1,dayLabel:"Day 5  -  Wed",load:"light",topic:"Basic Recursion  -  Step 1.5",
lectures:[{title:"Introduction to Recursion  -  Recursion Tree, Stack Space  -  Step 1.5 Re.1",url:"https://www.youtube.com/watch?v=yVdKa8dnKiE",step:"Step 1.5 Re.1"},{title:"Problems on Recursion  -  Step 1.5 Re.2",url:"https://www.youtube.com/watch?v=un6PLygfXrA",step:"Step 1.5 Re.2"}],
tip:"Before problems: implement factorial, fibonacci, power(x,n), gcd(a,b), reverseArray, isPalindrome  -  all 6 from scratch. Then problems.",
mentorNotes:["Recursion = function calling itself with SMALLER input toward a BASE CASE. Without a base case -> infinite recursion -> stack overflow.","Recursion tree: each function call is a node. Tree depth = stack space. Total nodes = time complexity.","Factorial: f(n)=n*f(n-1), base f(0)=1. O(n) time, O(n) stack space.","Fibonacci naive: f(n)=f(n-1)+f(n-2). O(2^n)  -  EXPONENTIAL. Terrible. This motivates Dynamic Programming entirely.","Stack overflow: recursion depth >~10^5 crashes in C++. For deep problems convert to iterative with an explicit stack.","Every recursive function can be written iteratively. Recursion = cleaner code. Iteration = safe from overflow."],
problems:[{name:"CF 1176A  -  Divide it!",url:"https://codeforces.com/problemset/problem/1176/A",rating:800},{name:"CSES  -  Increasing Array",url:"https://cses.fi/problemset/task/1094",rating:0,source:"CSES"}]},

{id:6,phase:1,week:1,dayLabel:"Day 6  -  Thu",load:"medium",topic:"Week 1 Consolidation  -  No New Video",
lectures:[],
tip:"Pure solving day. Before each problem ask: which STL container is the right tool? Which algorithm applies? Target: 800-rated in <=12 min.",
mentorNotes:["Consolidation goal: lock in muscle memory. Can you write the Sieve, any STL container, and a recursive function from memory without references?","Speed benchmark: 800-rated CF problem in <=12 minutes. If taking 25+, that's a pattern recognition gap  -  not an intelligence gap.","Common patterns from Week 1: count elements (hash map), find pairs (sort+two pointer), existence check (set), divisibility (GCD), primes (Sieve).","Time yourself on every problem. Write your time next to it. This is how you measure real improvement."],
problems:[{name:"CF 231A  -  Team",url:"https://codeforces.com/problemset/problem/231/A",rating:800},{name:"CF 339A  -  Helpful Maths",url:"https://codeforces.com/problemset/problem/339/A",rating:800},{name:"CF 1343A  -  Candies",url:"https://codeforces.com/problemset/problem/1343/A",rating:800},{name:"CF 1374A  -  Required Remainder",url:"https://codeforces.com/problemset/problem/1374/A",rating:800}]},

{id:7,phase:1,week:1,dayLabel:"Day 7  -  Fri \uD83C\uDFAF MOCK #1",load:"medium",topic:"Mock Contest #1  -  CF Div. 4",
lectures:[],
tip:"Go to codeforces.com -> Contests -> Past Div.4 rounds. Pick any. Set a 90-min hard timer. Attempt A, B, C. No hints mid-attempt. Read editorials after.",
mentorNotes:["Contest strategy: spend the FIRST 3-4 minutes reading ALL problems before writing a single line. Identify the two easiest.","A-problems in Div.4 should take <10 minutes. If you're at 15 min on problem A  -  skim B, come back to A fresh.","Always test your code on sample test cases before submitting. One unchecked edge case = penalty.","After the mock: write ONE honest sentence about what slowed you down. Specific reflection accelerates improvement.","Read the editorial for every unsolved problem. Understanding how the solution works is as valuable as finding it yourself."],
problems:[{name:"CF Div.4  -  pick any recent round, attempt A+B+C (90 min timer)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

// == WEEK 2: Arrays + Prefix Sums + Monotonic Stack =========================
{id:8,phase:1,week:2,dayLabel:"Day 8  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Week 1 Full Grind",
lectures:[],
tip:"Option A (recommended): CF Div.4 virtual  -  A through E, 2-hour timer, read ALL editorials after. Option B: handpicked below.",
mentorNotes:["Grind timing: 800-rated -> 12 min max. 900 -> 18 min. 1000 -> 25 min. If over: read editorial immediately, implement the idea, move on.","STL is your foundation  -  every problem today should use at least one container deliberately. Force the habit now.","After each problem: ask 'was there a cleaner one-liner using a different STL tool?'"],
problems:[{name:"CF 1472A  -  Cards for Friends",url:"https://codeforces.com/problemset/problem/1472/A",rating:800},{name:"CF 977B  -  Two-gram",url:"https://codeforces.com/problemset/problem/977/B",rating:800},{name:"CF 854A  -  k-Rounding",url:"https://codeforces.com/problemset/problem/854/A",rating:1000},{name:"CSES  -  Repetitions",url:"https://cses.fi/problemset/task/1069",rating:0,source:"CSES"},{name:"CF Tag: implementation 900 - 1000 (pick 1)",url:"https://codeforces.com/problemset?tags=implementation&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:9,phase:1,week:2,dayLabel:"Day 9  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Rest. Arrays phase starts tomorrow  -  the most important phase for building CF rating.",mentorNotes:[],problems:[]},

{id:10,phase:2,week:2,dayLabel:"Day 10  -  Mon",load:"medium",topic:"Arrays Easy  -  All of Step 3.1",
lectures:[{title:"Arrays Easy  -  Step 3.1 (largest/2nd-largest, sorted check, remove duplicates, rotate, move zeros, linear search, union & intersection, missing number, max consecutive 1s, single number XOR)",url:PLAYLIST,step:"Step 3.1"}],
tip:"These are the most fundamental array patterns. Every technique here will reappear in harder problems. Do not rush.",
mentorNotes:["Track two variables in one pass: int max1=INT_MIN,max2=INT_MIN  -  finds largest AND second-largest simultaneously. O(n).","Rotate left by k  -  reverse trick: reverse[0,k-1], reverse[k,n-1], reverse all. O(n), O(1) space.","Missing number: expected sum = n*(n+1)/2, subtract actual. Or XOR: XOR all 1..n then XOR array elements  -  remaining = missing.","Single number (all others appear twice): XOR all elements. a^a=0 and a^0=a, so pairs cancel -> unique element remains.","Max consecutive 1s: single pass. Maintain current count, reset to 0 on seeing 0, track global max.","Union/intersection of sorted arrays: two-pointer merge  -  EXACTLY the merge step from Merge Sort. Recognise the connection."],
problems:[{name:"CSES  -  Missing Number",url:"https://cses.fi/problemset/task/1083",rating:0,source:"CSES"},{name:"CSES  -  Collecting Numbers",url:"https://cses.fi/problemset/task/2216",rating:0,source:"CSES"},{name:"CSES  -  Permutations",url:"https://cses.fi/problemset/task/1070",rating:0,source:"CSES"},{name:"CF Tag: arrays 800 - 900 (pick 1)",url:"https://codeforces.com/problemset?tags=arrays&order=BY_RATING_ASC",rating:800,source:"CF"}]},

{id:11,phase:2,week:2,dayLabel:"Day 11  -  Tue",load:"medium",topic:"Prefix Sums + Difference Array",
lectures:[{title:"Prefix Sums  -  cp-algorithms.com (external, highly recommended alongside Step 3.1 remaining)",url:"https://cp-algorithms.com/sequences/prefix-sums.html",step:"External + Step 3.1"}],
tip:"Prefix sum appears in ~30% of CF problems rated 1000 - 1500. Build once, query O(1). The difference array is the inverse  -  equally powerful.",
mentorNotes:["Build prefix sum (1-indexed): prefix[0]=0; for(int i=1;i<=n;i++) prefix[i]=prefix[i-1]+a[i];  -  always 1-index to avoid l-1 edge case.","Range sum query [l,r]: answer = prefix[r] - prefix[l-1]. O(1) per query after O(n) build.","2D prefix sum: prefix[i][j] = sum of rectangle (1,1) to (i,j). Build O(nm), query O(1). Use inclusion-exclusion formula.","Difference array  -  range update: add v to [l,r] -> diff[l]+=v, diff[r+1]-=v. Prefix sum of diff gives final values. O(1) per update, O(n) to reconstruct.","Difference array is the INVERSE of prefix sum. Prefix sum: range sum queries. Difference array: range increment + point query."],
problems:[{name:"CSES  -  Static Range Sum Queries",url:"https://cses.fi/problemset/task/1646",rating:0,source:"CSES"},{name:"CSES  -  Forest Queries",url:"https://cses.fi/problemset/task/1652",rating:0,source:"CSES"},{name:"CF Tag: prefix sums 900 - 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=prefix+sums&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:12,phase:2,week:2,dayLabel:"Day 12  -  Wed",load:"medium",topic:"Arrays Medium Part 1  -  Two Sum, Dutch National Flag, Kadane's",
lectures:[{title:"Arrays Medium  -  Step 3.2 Part 1 (two-sum, sort+two-pointer, Dutch National Flag, Kadane's max subarray)",url:PLAYLIST,step:"Step 3.2 Part 1"}],
tip:"Kadane's is counterintuitive  -  trace through a negative-heavy array manually before coding. The insight is deceptively simple.",
mentorNotes:["Two Sum on sorted array: two pointers l=0,r=n-1. Sum too small -> l++. Sum too large -> r--. O(n) after sort.","Two Sum unsorted: hash map. For each a[i], check if (target-a[i]) exists in map. Add a[i] to map. O(n) total.","Dutch National Flag (sort 0s,1s,2s in-place): 3 pointers low,mid,high. a[mid]==0 -> swap(a[low],a[mid]),low++,mid++. a[mid]==1 -> mid++. a[mid]==2 -> swap(a[mid],a[high]),high--.","Kadane's: maxEndHere=max(a[i],maxEndHere+a[i]); maxSoFar=max(maxSoFar,maxEndHere);  -  single pass O(n).","Kadane's insight: at each position either START a new subarray at a[i] OR EXTEND the existing one  -  whichever gives the larger value.","Two-pointer rule: only works on SORTED input when searching for pairs. Sort first if needed."],
problems:[{name:"CSES  -  Maximum Subarray Sum",url:"https://cses.fi/problemset/task/1643",rating:0,source:"CSES"},{name:"CSES  -  Sum of Two Values",url:"https://cses.fi/problemset/task/1640",rating:0,source:"CSES"},{name:"CF Tag: two pointers 900 - 1000 (pick 1)",url:"https://codeforces.com/problemset?tags=two+pointers&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:13,phase:2,week:2,dayLabel:"Day 13  -  Thu",load:"medium",topic:"Arrays Medium Part 2  -  Matrices, Majority Element, Stock Buy-Sell",
lectures:[{title:"Arrays Medium  -  Step 3.2 Part 2 (Moore's voting, leaders, next permutation, rotate matrix 90 deg, spiral, stock buy-sell, longest consecutive)",url:PLAYLIST,step:"Step 3.2 Part 2"}],
tip:"Matrix rotation and spiral need you to SEE the index pattern. Work out a 3*3 example on paper  -  the code follows naturally.",
mentorNotes:["Moore's Voting (majority element >n/2 times): candidate+count. Count++ if same, count-- if different, switch candidate when count=0. O(n), O(1).","Stock Buy-Sell (single transaction): track running minimum, profit=a[i]-min_so_far, track max_profit. O(n). Multiple transactions: sum all positive differences.","Rotate matrix 90 deg clockwise: TRANSPOSE (swap a[i][j] with a[j][i] for j>i), then reverse each row. O(n^2) time, O(1) space.","Spiral matrix traversal: 4 boundaries (top,bot,left,right). Process each ring, shrink all 4 inward. O(n^2).","Longest consecutive sequence: put all in unordered_set. For each x where x-1 NOT in set (start), count x,x+1,x+2... O(n) total.","Next permutation: find rightmost a[i]<a[i+1]. Find rightmost a[j]>a[i]. Swap. Reverse suffix after i. STL: std::next_permutation(v.begin(),v.end());"],
problems:[{name:"CSES  -  Apartments",url:"https://cses.fi/problemset/task/1084",rating:0,source:"CSES"},{name:"CSES  -  Movie Festival",url:"https://cses.fi/problemset/task/1629",rating:0,source:"CSES"},{name:"CF Tag: arrays+sorting 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=sortings&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:14,phase:2,week:2,dayLabel:"Day 14  -  Fri",load:"light",topic:"Monotonic Stack  -  Next Greater Element, Stock Span",
lectures:[{title:"Monotonic Stack  -  Next Greater Element, Previous Smaller, Stock Span (search 'Striver Monotonic Stack' in playlist)",url:PLAYLIST,step:"Step 15 (monotonic stack)"}],
tip:"Hard concept day  -  2 problems only. Monotonic stack turns O(n^2) brute force into O(n) for 'nearest greater/smaller' problems. One of the most underrated CP tools.",
mentorNotes:["Monotonic stack: maintains elements in increasing OR decreasing order. When pushing x, POP all elements that violate the monotone property.","Next Greater Element (right): traverse RIGHT TO LEFT. For each element, pop stack while top <= current. Answer = stack.top() or -1. Push current. O(n).","Previous Smaller Element (left): traverse LEFT TO RIGHT. For each element, pop while top >= current. Answer = stack.top() or -1. Push current.","Stock Span: how many consecutive days before today had price <= today? = distance to Previous Greater Element. O(n) with monotonic stack.","O(n) proof: each element is pushed ONCE and popped AT MOST ONCE across the entire traversal. Amortised O(1) per element.","Largest Rectangle in Histogram uses Previous Smaller + Next Smaller for each bar  -  classic hard problem. Preview now, revisit later."],
problems:[{name:"CSES  -  Towers",url:"https://cses.fi/problemset/task/1073",rating:0,source:"CSES"},{name:"CF Tag: data structures+stack 1000 (pick 1)",url:"https://codeforces.com/problemset?tags=data+structures&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

// == WEEK 3: Binary Search ==================================================
{id:15,phase:2,week:3,dayLabel:"Day 15  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Arrays Full Grind",
lectures:[],
tip:"Arrays are conceptually accessible  -  push the volume today. Option A (recommended): CF Div.3 virtual A - D, 2 hours. Option B: handpicked below.",
mentorNotes:["Arrays grind goal: recognise prefix sum, two-pointer, sort+greedy, monotonic stack patterns within 90 seconds of reading.","Div.3 A+B should feel comfortable. Div.3 C is where real thinking starts  -  that's your target today.","After each problem: can you reduce the complexity? Can you solve it in fewer lines?"],
problems:[{name:"CSES  -  Room Allocation",url:"https://cses.fi/problemset/task/1164",rating:0,source:"CSES"},{name:"CSES  -  Missing Coin Sum",url:"https://cses.fi/problemset/task/2183",rating:0,source:"CSES"},{name:"CSES  -  Restaurant Customers",url:"https://cses.fi/problemset/task/1619",rating:0,source:"CSES"},{name:"CF Tag: sorting 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=sortings&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: greedy 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:16,phase:2,week:3,dayLabel:"Day 16  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Binary Search week starts tomorrow. One of the most powerful ideas in all of competitive programming.",mentorNotes:[],problems:[]},

{id:17,phase:3,week:3,dayLabel:"Day 17  -  Mon",load:"medium",topic:"Binary Search on 1D Arrays  -  Step 4.1",
lectures:[{title:"Binary Search on 1D Arrays  -  Step 4.1 (first & last occurrence, floor & ceiling, single element in sorted, search in rotated sorted, peak element)",url:PLAYLIST,step:"Step 4.1"}],
tip:"Implement BS from scratch before any problem: lo=0,hi=n-1; mid=lo+(hi-lo)/2. Always this form. Memorise it completely.",
mentorNotes:["Binary Search: on SORTED input, find target in O(log n) by halving search space. 2^3^0 > 10^9  -  so 30 iterations covers any input.","Template: int lo=0,hi=n-1,ans=-1; while(lo<=hi){int mid=lo+(hi-lo)/2; if(check(mid)){ans=mid;lo=mid+1;}else hi=mid-1;}  -  memorise every character.","lower_bound(v.begin(),v.end(),x): iterator to first element >= x. upper_bound: first element > x. Index: ptr - v.begin().","Count occurrences of x: upper_bound(x) - lower_bound(x). O(log n). One-liner using STL.","Search in rotated sorted array: one half is ALWAYS fully sorted. Check which half target falls in, binary search that half.","Critical bug: (lo+hi)/2 overflows when lo+hi > INT_MAX (~2.1 billion). Always use lo+(hi-lo)/2."],
problems:[{name:"CSES  -  Apartments (BS approach)",url:"https://cses.fi/problemset/task/1084",rating:0,source:"CSES"},{name:"CF Tag: binary search 900 - 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:18,phase:3,week:3,dayLabel:"Day 18  -  Tue",load:"medium",topic:"Binary Search on Answers  -  Part 1",
lectures:[{title:"BS on Answers  -  Step 4.2 Part 1 (Koko Eating Bananas, Minimum Days for M Bouquets)",url:PLAYLIST,step:"Step 4.2 Part 1"}],
tip:"If you can CHECK feasibility of X in O(n) and feasibility is MONOTONE (once X works, X+1 also works), binary search directly on X. This unlocks 200+ problems.",
mentorNotes:["Binary Search on Answers: don't search an existing array  -  search the ANSWER SPACE directly.","Monotone condition: if answer X satisfies condition C, then X+1 also satisfies C. This makes BS valid here.","Template: int lo=min_ans,hi=max_ans; while(lo<hi){int mid=(lo+hi)/2; if(feasible(mid)) hi=mid; else lo=mid+1;} answer=lo;","Koko bananas: feasible(speed) = sum of ceil(pile/speed) <= H. Check in O(n), binary search over O(log(max_pile)) speeds.","Key question to ask: 'If X is a valid answer, is X+1 also valid?' If yes -> monotone -> binary search on answers.","This transforms many O(n^2) or O(n!) search problems into O(n log n) or O(n log maxVal). Massive technique."],
problems:[{name:"CSES  -  Factory Machines",url:"https://cses.fi/problemset/task/1620",rating:0,source:"CSES"},{name:"CF Tag: binary search 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:19,phase:3,week:3,dayLabel:"Day 19  -  Wed",load:"light",topic:"BS on Answers Part 2 + BS on 2D Arrays",
lectures:[{title:"BS on Answers  -  Step 4.2 cont. (Book Allocation, Ship Packages in D Days, Nth Root by BS)",url:PLAYLIST,step:"Step 4.2 cont."},{title:"BS on 2D Arrays  -  Step 4.3 (search in row/col sorted matrix, median of row-wise sorted)",url:PLAYLIST,step:"Step 4.3"}],
tip:"Dense concept day  -  2 problems only. Book allocation and ship packages are the SAME template with different feasible() functions.",
mentorNotes:["Book Allocation: minimise the maximum pages a student reads. feasible(maxPgs) = can K students read all books with each <= maxPgs? Greedily assign.","Ship Packages: feasible(capacity) = can we ship all packages in D days? Greedily fill each day without exceeding capacity.","Both templates: greedily assign items to groups where each group <= X. Count groups needed <= K or <= D.","2D matrix BS: treat (r,c) as 1D index r*m+c. Enables standard binary search on flattened sorted matrix.","Row-sorted + col-sorted matrix: start at TOP-RIGHT corner. Move left if > target, down if < target. O(n+m).","Median of row-sorted matrix: BS on answer value. feasible(x) = count elements <= x using binary search on each row."],
problems:[{name:"CSES  -  Tasks and Deadlines",url:"https://cses.fi/problemset/task/1630",rating:0,source:"CSES"},{name:"CF Tag: binary search 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:1200,source:"CF"}]},

{id:20,phase:3,week:3,dayLabel:"Day 20  -  Thu \uD83C\uDFAF MOCK #2",load:"medium",topic:"Mock Contest #2  -  CF Div. 3",
lectures:[],tip:"CF Div.3 virtual  -  A through D, 2 hours. A+B: 30 min combined. C: 30 min. D: remaining. Read all editorials after.",
mentorNotes:["3-week checkpoint: you should be solving Div.4 A - D comfortably and Div.3 A - B regularly.","Constraints -> algorithm: n<=10^6 -> O(n log n) or less. n<=10^3 -> O(n^2) fine. n<=20 -> O(2^n) fine. Read constraints BEFORE thinking of an approach.","Before coding: state your approach in one line. 'I will sort by X and then do Y.' If you can't state it clearly, you don't understand the problem yet."],
problems:[{name:"CF Div.3 virtual  -  pick any recent round, attempt A - D (2 hours)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

{id:21,phase:3,week:3,dayLabel:"Day 21  -  Fri",load:"light",topic:"Binary Search Revision + Weak Spot Fix",
lectures:[],tip:"Identify your single biggest BS weak spot (usually: setting up feasible() correctly OR choosing lo/hi). Re-solve one problem targeting exactly that.",
mentorNotes:["BS on answers checklist: 1) What is the answer? 2) What range [lo,hi]? 3) Is it monotone? 4) What does feasible(X) check? 5) Which direction to update?","Common BS bugs: 1) Infinite loop from wrong update (lo=mid without making progress), 2) Off-by-one in final answer, 3) Bug in feasible() at extreme values.","Always manually test feasible(lo), feasible(hi), and one middle value before submitting."],
problems:[{name:"CSES  -  Sum of Two Values (BS approach)",url:"https://cses.fi/problemset/task/1640",rating:0,source:"CSES"},{name:"CF Tag: binary search 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

// == WEEK 4: Greedy =========================================================
{id:22,phase:3,week:4,dayLabel:"Day 22  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Binary Search Grind",
lectures:[],tip:"BS is harder than arrays  -  fewer problems. Option A (recommended): CF Div.2 virtual A - C (Div.2 C is often BS at 1200 - 1400). Option B: handpicked.",
mentorNotes:["BS grind: identify the answer space, write the feasible function, verify monotonicity. Code only after all three are clear.","If stuck: are you using BS on the right variable? Sometimes the 'answer' is not what you think it is.","Common feasible() pitfall: logic is correct but returns wrong boolean at boundary values. Test both ends explicitly."],
problems:[{name:"CSES  -  Factory Machines",url:"https://cses.fi/problemset/task/1620",rating:0,source:"CSES"},{name:"CF Tag: binary search 1000 - 1100 (pick 2)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: binary search 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=binary+search&order=BY_RATING_ASC",rating:1200,source:"CF"}]},

{id:23,phase:3,week:4,dayLabel:"Day 23  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Greedy algorithms start Monday. ~25-40% of Div.3 B/C problems are pure greedy. This is a big rating-unlocking topic.",mentorNotes:[],problems:[]},

{id:24,phase:3,week:4,dayLabel:"Day 24  -  Mon",load:"medium",topic:"Greedy  -  Part 1: Intro, Activity Selection, Jump Game",
lectures:[{title:"Greedy Algorithms  -  Step 12 Part 1 (assign cookies, lemonade change, jump game I & II, valid parenthesis string)",url:PLAYLIST,step:"Step 12 Part 1"}],
tip:"Greedy is NOT just 'pick the best option each step.' You must be able to PROVE your greedy choice is correct. The proof separates good from great.",
mentorNotes:["Greedy algorithm: make the locally optimal choice at each step, assuming it leads to the global optimum. NOT always correct  -  must be verified.","Activity Selection (max non-overlapping intervals): sort by END TIME, greedily pick earliest-ending non-conflicting interval. O(n log n). Classic.","Proof by exchange argument: assume an optimal solution differs from greedy. Show swapping any non-greedy choice to the greedy one never worsens the result.","Jump Game: track max reachable index. For each i: if i > max_reach -> return false. Else max_reach = max(max_reach, i+jump[i]). O(n).","Greedy works when: optimal substructure AND greedy choice property (locally optimal = globally optimal). Both must hold.","Lemonade change: always prefer giving $5 bills for change. Keep counts of $5 and $10 bills. Greedy on denomination."],
problems:[{name:"CSES  -  Movie Festival",url:"https://cses.fi/problemset/task/1629",rating:0,source:"CSES"},{name:"CSES  -  Stick Lengths",url:"https://cses.fi/problemset/task/1074",rating:0,source:"CSES"},{name:"CF Tag: greedy 900 (pick 1)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:25,phase:3,week:4,dayLabel:"Day 25  -  Tue",load:"medium",topic:"Greedy  -  Part 2: Job Scheduling, Fractional Knapsack, Min Platforms",
lectures:[{title:"Greedy Algorithms  -  Step 12 Part 2 (N meetings in one room, job sequencing with deadlines, fractional knapsack, minimum platforms, buy and sell stocks)",url:PLAYLIST,step:"Step 12 Part 2"}],
tip:"The critical distinction today: fractional knapsack -> greedy works. 0/1 knapsack -> greedy FAILS, must use DP. This difference will matter for months.",
mentorNotes:["Minimum platforms needed: count max concurrent intervals. Sort arrivals and departures separately, merge with two-pointer. O(n log n).","Fractional Knapsack: sort by value/weight ratio descending, take highest ratio first (fractions allowed). Pure greedy. O(n log n).","0/1 Knapsack: each item is all-or-nothing. Greedy by ratio FAILS. Must use Dynamic Programming. This is a FUNDAMENTAL distinction.","Job Sequencing with Deadlines: sort by profit descending. Each job fills its latest available slot <= deadline. O(n^2) naive.","Greedy vs DP: partial solutions allowed -> try greedy. Each choice is all-or-nothing -> think DP first.","Exchange argument for activity selection: if we swap any non-earliest-end activity for the greedy choice, we free up at least as much time and never do worse."],
problems:[{name:"CSES  -  Movie Festival II",url:"https://cses.fi/problemset/task/1632",rating:0,source:"CSES"},{name:"CSES  -  Tasks and Deadlines",url:"https://cses.fi/problemset/task/1630",rating:0,source:"CSES"},{name:"CF Tag: greedy 1000 (pick 1)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:26,phase:3,week:4,dayLabel:"Day 26  -  Wed",load:"medium",topic:"Greedy  -  Part 3: Merge Intervals + CF Practice",
lectures:[{title:"Greedy Algorithms  -  Step 12 cont. (insert interval, merge intervals, non-overlapping intervals, candy problem)",url:PLAYLIST,step:"Step 12 cont."}],
tip:"CF greedy problems: the difficulty is usually identifying WHAT to sort by. Once you know the sorting criterion, the rest is mechanical.",
mentorNotes:["Merge Intervals: sort by start time. If current.start <= prev.end -> merge (update prev.end = max(prev.end,current.end)). O(n log n).","Non-overlapping intervals (min removals): sort by end time, greedily KEEP earliest-ending non-overlapping. Same as Activity Selection.","CF Greedy pattern: 'minimum cost / maximum items with constraint X' -> sort by X, make obvious local choice.","Candy Problem: two passes  -  left to right (enforce left<right rule), right to left (enforce right>left rule). Take max of both passes per child.","Greedy mastery: can you state the greedy choice in one sentence AND give a 2-sentence informal proof? That's the bar."],
problems:[{name:"CSES  -  Room Allocation",url:"https://cses.fi/problemset/task/1164",rating:0,source:"CSES"},{name:"CF Tag: greedy 1000 - 1100 (pick 2)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: greedy+sorting 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=greedy%2Csortings&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:27,phase:3,week:4,dayLabel:"Day 27  -  Thu \uD83C\uDFAF MOCK #3",load:"medium",topic:"Mock Contest #3  -  CF Div. 3",
lectures:[],tip:"CF Div.3 virtual  -  A through D, 2 hours. After: identify if any problem had a greedy solution you missed. Greedy appears in ~40% of Div.3 B - C problems.",
mentorNotes:["4-week checkpoint: you should be reaching Div.3 C fairly consistently. If C takes >40 min, do more greedy + BS pattern drilling.","Greedy problems in contests often feel 'obvious' once you see them. The hard part is identifying the sorting criterion fast.","Speed drill: aim to beat your personal best for A+B completion time. Set a new record each mock."],
problems:[{name:"CF Div.3 virtual  -  pick any recent round, attempt A - D (2 hours)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

{id:28,phase:3,week:4,dayLabel:"Day 28  -  Fri",load:"light",topic:"Greedy Revision + Weak Spots",
lectures:[],tip:"Re-solve the hardest greedy problem from this week from scratch  -  no reference. Then identify your current biggest overall weak spot and drill it.",
mentorNotes:["Greedy mastery checklist: 1) Can you identify when greedy applies? 2) Can you state the greedy choice clearly? 3) Can you informally prove it in 2 sentences?","If unsure whether greedy works: try to construct a counterexample. Spend 3 minutes. If you can't find one, greedy likely works.","Strings week next. Implementation-heavy  -  clean index management matters more than algorithm choice."],
problems:[{name:"CF Tag: greedy 1000 - 1200 (pick 2)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

// == WEEK 5: Strings ========================================================
{id:29,phase:3,week:5,dayLabel:"Day 29  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Greedy Full Grind",
lectures:[],tip:"Greedy is medium difficulty  -  4 - 5 solid problems. Option A: CF Div.3 virtual. Option B: handpicked below.",
mentorNotes:["Greedy grind: for each problem, state the greedy choice explicitly BEFORE coding. 'I will sort by X and pick Y because Z.'","CF B/C pattern with n<=10^5 asking for max/min -> strong greedy signal. Identify the sorting criterion.","If your greedy gives WA: construct a counterexample to find the flaw, then fix the criterion."],
problems:[{name:"CSES  -  Collecting Numbers",url:"https://cses.fi/problemset/task/2216",rating:0,source:"CSES"},{name:"CSES  -  Missing Coin Sum",url:"https://cses.fi/problemset/task/2183",rating:0,source:"CSES"},{name:"CF Tag: greedy 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: greedy 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=greedy&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:30,phase:3,week:5,dayLabel:"Day 30  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Day 30. You're halfway through the main roadmap. The pace you've set is excellent.",mentorNotes:[],problems:[]},

{id:31,phase:3,week:5,dayLabel:"Day 31  -  Mon",load:"medium",topic:"Strings Basic  -  All of Step 5.1",
lectures:[{title:"Strings Basic  -  Step 5.1 (palindrome, largest odd substring, longest common prefix, isomorphic, rotation check, anagram, sort chars by frequency, count and say)",url:PLAYLIST,step:"Step 5.1"}],
tip:"Get comfortable with substr(), find(), s[i]-'a', s.begin()/s.end() today. String index bugs are the #1 source of WA on string problems.",
mentorNotes:["String essentials: s.size(), s.substr(i,len), s.find(sub) returns pos or string::npos, reverse(s.begin(),s.end()), s+=c for O(1) amortised append.","Palindrome: two-pointer i=0,j=n-1 while i<j: check s[i]==s[j]. Or s==string(s.rbegin(),s.rend()).","Anagram: sort both -> compare O(n log n). Or frequency map: count s1, subtract s2, check all zero O(n).","Rotation check: str2 is rotation of str1 iff lengths equal AND (str1+str1).find(str2) != string::npos.","Isomorphic strings: same substitution pattern both directions. Use two maps (s->t mapping and t->s mapping). Both must be consistent.","Type conversions: stoi(s) for string->int. to_string(n) for int->string. s[i]-'0' for digit char to int."],
problems:[{name:"CF 118A  -  String Task",url:"https://codeforces.com/problemset/problem/118/A",rating:800},{name:"CSES  -  Word Frequencies",url:"https://cses.fi/problemset/task/1096",rating:0,source:"CSES"},{name:"CF Tag: strings 800 - 900 (pick 2)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:800,source:"CF"}]},

{id:32,phase:3,week:5,dayLabel:"Day 32  -  Tue",load:"light",topic:"Strings Medium  -  Z-Algorithm + String Hashing",
lectures:[{title:"Strings Medium  -  Step 5.2 (Z-algorithm, polynomial string hashing, KMP failure function intro)",url:PLAYLIST,step:"Step 5.2"}],
tip:"Hard concept day  -  2 problems only. Z-algorithm is easier to remember than KMP. Both give O(n+m) pattern matching.",
mentorNotes:["Z-array: Z[i] = length of the longest substring starting at i that matches a PREFIX of the full string. Z[0]=n by convention.","Z-algorithm for pattern matching: concatenate P+'#'+T, compute Z-array. Every position where Z[i]==len(P) is a match. O(n+m).","Polynomial hashing: hash(s[l..r]) computed from prefix hashes. Enables O(1) substring comparison after O(n) build.","Double hashing: two different (base,mod) pairs. Collision probability ~1/10^18. Always double-hash in competitive settings.","KMP failure function: fail[i] = longest proper prefix of s[0..i] that is also a suffix. Enables O(n) pattern matching.","Use case: pattern matching O(n+m) -> Z or KMP. Substring equality O(1) -> hashing. Both are essential for hard string problems."],
problems:[{name:"CSES  -  String Matching",url:"https://cses.fi/problemset/task/1753",rating:0,source:"CSES"},{name:"CF Tag: strings+hashing 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=strings%2Chashing&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:33,phase:3,week:5,dayLabel:"Day 33  -  Wed",load:"medium",topic:"Strings CF Practice",
lectures:[],tip:"Pure practice day. Focus on recognising WHICH string technique applies within 60 seconds of reading the problem.",
mentorNotes:["String technique recognition: 'find pattern in text' -> Z or KMP. 'Two substrings equal?' -> hashing. 'Anagram/frequency' -> sort or freq map. 'Palindrome' -> two-pointer.","CSES String problems are the gold standard. Target: complete Word Frequencies, String Matching, Palindrome Reorder, Common Substring by end of this week.","Clean string code: use descriptive variable names (n=text length, m=pattern length). Mixing them up is a classic bug."],
problems:[{name:"CSES  -  Palindrome Reorder",url:"https://cses.fi/problemset/task/1755",rating:0,source:"CSES"},{name:"CSES  -  String Matching",url:"https://cses.fi/problemset/task/1753",rating:0,source:"CSES"},{name:"CF Tag: strings 900 - 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:900,source:"CF"}]},

{id:34,phase:3,week:5,dayLabel:"Day 34  -  Thu \uD83C\uDFAF MOCK #4",load:"medium",topic:"Mock Contest #4  -  CF Div. 3",
lectures:[],tip:"Strings appear heavily in Div.3 B and C. Attempt A - D, 2 hours. After: identify any string pattern you haven't seen before.",
mentorNotes:["5-week checkpoint: you should be solving Div.3 A - C consistently. If C takes >35 min, do more string and greedy pattern drilling.","Note down the technique you used for each problem after the mock. Building this habit accelerates future pattern recognition."],
problems:[{name:"CF Div.3 virtual  -  pick any recent round, attempt A - D (2 hours)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

{id:35,phase:3,week:5,dayLabel:"Day 35  -  Fri",load:"light",topic:"Strings Revision + Z-Algorithm from Memory",
lectures:[],tip:"Re-implement the Z-algorithm from scratch with zero reference. This is the test of whether you truly understand it.",
mentorNotes:["Z-algorithm memory test: can you write it clean in under 15 minutes? If not, re-study the core idea: use a window [l,r] tracking the rightmost Z-box.","CSES string checklist: Word Frequencies, String Matching, Palindrome Reorder, Common Substring. These four are the gold standard.","Next week: Deep recursion, backtracking, sliding window, bit manipulation  -  all in 5 days. It will feel intense. That's intentional."],
problems:[{name:"CSES  -  Longest Common Substring",url:"https://cses.fi/problemset/task/1075",rating:0,source:"CSES"},{name:"CF Tag: strings 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

// == WEEK 6: Recursion + Backtracking + Two Pointers + Bit Manip ============
{id:36,phase:4,week:6,dayLabel:"Day 36  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Strings Full Grind",
lectures:[],tip:"Strings are medium difficulty  -  4 problems. Option A: CF Div.3 virtual on B/C/D. Option B: handpicked.",
mentorNotes:["By now: recognise frequency map, Z-algorithm, rotation check, anagram within 60 seconds of reading a string problem.","If you haven't finished all CSES string problems  -  today's the day. The CSES string section is 8 problems total.","Strings + hashing: substring equality in O(1) after build. Pattern matching: Z-array. These two cover 90% of hard string problems."],
problems:[{name:"CF Tag: strings 900 (pick 2)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:900,source:"CF"},{name:"CF Tag: strings 1000 (pick 1)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: strings 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=strings&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:37,phase:4,week:6,dayLabel:"Day 37  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Big week ahead. Deep recursion, backtracking, sliding window, bit manipulation  -  all in 5 days. Come in fresh and patient.",mentorNotes:[],problems:[]},

{id:38,phase:4,week:6,dayLabel:"Day 38  -  Mon",load:"medium",topic:"Deep Recursion  -  Subsequences, Power Set, Permutations",
lectures:[{title:"Recursion Patterns  -  Step 7.1 (print all subsequences, generate power set, find subsequences summing to K, all permutations via swapping)",url:PLAYLIST,step:"Step 7.1"}],
tip:"DRAW the recursion tree on paper before writing any code. Every node is a function call. The shape of the tree reveals the time complexity immediately.",
mentorNotes:["All subsequences: at each index, two choices  -  INCLUDE or EXCLUDE. Binary tree of depth n -> 2^n leaves -> O(2^n*n) time.","Power set = all subsets = all subsequences. Collect subset at every node (not just leaves) for all non-empty subsets.","All permutations via swapping: swap(a[i],a[pos]), recurse on (pos+1..n), swap back. O(n*n!). The swap-back IS the backtrack.","Subsequences summing to K: include element only if remaining_sum >= element, else prune. Collect at leaf when sum==K.","Limits: 2^n grows fast. n<=20 -> ~1M (fine). n<=25 -> 33M (borderline). n! for permutations: n<=8 -> 40K (fine). n<=12 -> too slow.","Make choice -> recurse -> undo choice. This three-step pattern IS backtracking. You've planted the seed today."],
problems:[{name:"CSES  -  Bit Strings",url:"https://cses.fi/problemset/task/1617",rating:0,source:"CSES"},{name:"CF Tag: brute force 1000 - 1100 (pick 2)",url:"https://codeforces.com/problemset?tags=brute+force&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:39,phase:4,week:6,dayLabel:"Day 39  -  Tue",load:"light",topic:"Backtracking  -  Combination Sum, Subset Sum",
lectures:[{title:"Backtracking  -  Step 7.2 (combination sum I & II, subset sum, permutation sequence, N-Queens)",url:PLAYLIST,step:"Step 7.2"}],
tip:"HARDEST CONCEPT SO FAR  -  2 problems only. Slow down. Draw the tree. The 'undo the choice' backtrack step is the entire insight.",
mentorNotes:["Backtracking = recursion + undo. When a path CAN'T lead to a valid solution, undo the last choice and explore another branch.","Backtracking template: for each choice -> mark choice -> recurse -> UNMARK choice. The unmark step is everything.","Combination Sum (reuse allowed): try candidates[i..n-1] at each step. Not i+1, because same element can be reused.","Critical: PRUNING. If current_sum > target -> return immediately. If sorted and candidates[i] > remaining -> break. Cuts runtime massively.","Sort candidates before backtracking: once candidates[i] > remaining, all subsequent are too -> break the loop.","N-Queens: place queens row by row. Check column + two diagonals for conflict. Prune when conflict found. Classic backtracking."],
problems:[{name:"CF Tag: backtracking 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=brute+force&order=BY_RATING_ASC",rating:1000,source:"CF"},{name:"CF Tag: backtracking 1100 - 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=brute+force&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:40,phase:4,week:6,dayLabel:"Day 40  -  Wed",load:"medium",topic:"Two Pointers + Sliding Window  -  Full Coverage",
lectures:[{title:"Sliding Window & Two Pointers  -  Step 10 (fixed window, variable window, fruits into baskets, longest no-repeat substring, longest subarray with sum K)",url:PLAYLIST,step:"Step 10"}],
tip:"Two pointers is O(n) because both pointers ONLY MOVE FORWARD. The window never shrinks past a useful state. This is why it's linear.",
mentorNotes:["Fixed window of size k: compute first window, then slide: add a[r], remove a[l], advance both. O(n).","Variable window: expand right pointer; when condition VIOLATED, shrink from left until restored. Track max/min window size.","O(n) proof: l moves right at most n times. r moves right at most n times. Total <= 2n -> O(n).","Longest substring without repeating chars: condition = no duplicate in window. Use unordered_map for O(1) frequency tracking.","Fruits into 2 baskets = longest subarray with at most 2 distinct values. Window condition: map.size() <= 2.","Sliding window vs prefix sum: SW for 'longest window with monotone condition'. Prefix sum + hashmap for 'count subarrays with exact sum'."],
problems:[{name:"CSES  -  Playlist",url:"https://cses.fi/problemset/task/1141",rating:0,source:"CSES"},{name:"CSES  -  Ferris Wheel",url:"https://cses.fi/problemset/task/1090",rating:0,source:"CSES"},{name:"CF Tag: two pointers 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=two+pointers&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:41,phase:4,week:6,dayLabel:"Day 41  -  Thu",load:"medium",topic:"Bit Manipulation  -  Basics + Advanced",
lectures:[{title:"Bit Manipulation L1  -  Intro, Operators, Check/Set/Clear/Toggle  -  Step 8 L1",url:"https://www.youtube.com/watch?v=qQd-ViW7bfk",step:"Step 8 L1"},{title:"Bit Manipulation L2  -  Power of 2, Swap without temp, XOR applications  -  Step 8 L2",url:"https://www.youtube.com/watch?v=nttpF8kwgd4",step:"Step 8 L2"}],
tip:"After videos: write ALL bit operations from memory in one file. Bit manipulation is compact to learn but dense with tricks  -  active recall is essential.",
mentorNotes:["Bit operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift=*2^k), >> (right shift=/2^k).","Check i-th bit: (n>>i)&1. Set: n|(1<<i). Clear: n&~(1<<i). Toggle: n^(1<<i). Memorise all four.","Check power of 2: n>0 && (n&(n-1))==0. n&(n-1) clears the lowest set bit -> power of 2 has exactly one set bit -> result is 0.","Count set bits (Brian Kernighan): while(n){n&=(n-1); count++;} Each iteration removes lowest set bit. O(set bits).","XOR tricks: a^a=0, a^0=a. XOR all elements -> pairs cancel -> unique element remains. XOR 1..n then XOR array -> missing number.","Enumerate all subsets: for(int mask=0; mask<(1<<n); mask++)  -  mask is a bitmask. Check if element i in subset: mask&(1<<i)."],
problems:[{name:"CSES  -  Trailing Zeros",url:"https://cses.fi/problemset/task/1618",rating:0,source:"CSES"},{name:"CF Tag: bitmasks 800 - 1000 (pick 2)",url:"https://codeforces.com/problemset?tags=bitmasks&order=BY_RATING_ASC",rating:800,source:"CF"}]},

{id:42,phase:4,week:6,dayLabel:"Day 42  -  Fri \uD83C\uDFAF MOCK #5",load:"medium",topic:"Mock Contest #5  -  CF Div. 3",
lectures:[],tip:"Attempt A - D, 2 hours. After: for each problem, note which technique applied. Are you recognising the technique within 90 seconds? That's the real benchmark.",
mentorNotes:["6-week checkpoint: you now have 9 major techniques. Hashing, sorting+greedy, BS on answers, two pointers, sliding window, backtracking, bit manipulation, monotonic stack, strings.","Technique recognition speed is as important as implementation speed in ICPC. Train both simultaneously.","Analyse your solve rate on A+B+C. If A+B takes >30 min together, fundamentals need more drilling."],
problems:[{name:"CF Div.3 virtual  -  pick any recent round, attempt A - D (2 hours)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

// == WEEK 7: Intro DP =======================================================
{id:43,phase:4,week:7,dayLabel:"Day 43  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"Recursion + Two Pointers + Bit Manipulation Grind",
lectures:[],tip:"Harder topics  -  target 4 solid, fully understood problems. Option A: CF Div.3 virtual. Option B: handpicked.",
mentorNotes:["For harder topics: 1 deeply understood problem > 3 half-understood. Quality over quantity today.","Backtracking: draw the tree FIRST, always. The code should flow naturally from the tree structure.","Two pointers: state the window invariant explicitly before coding. What does [l,r] guarantee at all times?"],
problems:[{name:"CSES  -  Playlist",url:"https://cses.fi/problemset/task/1141",rating:0,source:"CSES"},{name:"CF Tag: two pointers 1100 - 1200 (pick 2)",url:"https://codeforces.com/problemset?tags=two+pointers&order=BY_RATING_ASC",rating:1100,source:"CF"},{name:"CF Tag: bitmasks 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=bitmasks&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:44,phase:4,week:7,dayLabel:"Day 44  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Dynamic Programming starts tomorrow. The deepest topic of the entire roadmap. Come in sharp and patient.",mentorNotes:[],problems:[]},

{id:45,phase:4,week:7,dayLabel:"Day 45  -  Mon",load:"light",topic:"Intro DP Part 1  -  Fibonacci DP, Climbing Stairs, House Robber",
lectures:[{title:"Intro to DP  -  Step 16 Part 1 (introduction, memoization vs tabulation, Fibonacci DP, climbing stairs, frog jump, house robber)",url:PLAYLIST,step:"Step 16 Part 1"}],
tip:"DP is the hardest topic in CP. START SLOW. The transition from brute recursion -> memoization -> tabulation is the entire insight. Do not rush today.",
mentorNotes:["DP = recursion + memory. If recursion has OVERLAPPING SUBPROBLEMS (same subproblem called multiple times), store results -> O(2^n) becomes O(n).","Memoization (top-down DP): write recursive solution, add memo table, return cached result if available. Natural starting point.","Tabulation (bottom-up DP): fill table from base cases up. Usually more space-efficient and cache-friendly.","Fibonacci DP: naive O(2^n). Memoised O(n) time O(n) space. Tabulated O(n) time O(n) space. Space-optimised: keep only last 2 values -> O(1) space.","Climbing Stairs: ways to reach step n using 1 or 2 steps = f(n-1)+f(n-2). Identical to Fibonacci. O(n) DP.","House Robber: dp[i]=max(dp[i-1], dp[i-2]+a[i]). At each house: rob it or skip it. O(n) time, O(1) space with rolling variables."],
problems:[{name:"CSES  -  Dice Combinations",url:"https://cses.fi/problemset/task/1633",rating:0,source:"CSES"},{name:"CSES  -  Minimizing Coins",url:"https://cses.fi/problemset/task/1634",rating:0,source:"CSES"}]},

{id:46,phase:4,week:7,dayLabel:"Day 46  -  Tue",load:"medium",topic:"Intro DP Part 2  -  Coin Change, LIS",
lectures:[{title:"Intro DP  -  Step 16 Part 2 (coin change count ways, minimum coins, rod cutting, Longest Increasing Subsequence O(n^2))",url:PLAYLIST,step:"Step 16 Part 2"}],
tip:"LIS (Longest Increasing Subsequence) is one of the most important DP problems. Learn the O(n^2) version today. There's an O(n log n) version using binary search  -  note it exists.",
mentorNotes:["Coin Change (min coins): dp[0]=0, dp[i]=min over coins c where i>=c: dp[i-c]+1. Initialise dp[1..n]=INF. O(n*|coins|).","Coin Change (count ways): dp[0]=1, for each coin c: for i from c to n: dp[i]+=dp[i-c]. Order of loops matters.","LIS O(n^2): dp[i]=1+max(dp[j] for j<i where a[j]<a[i]). Initialise dp[i]=1. Answer=max(dp). O(n^2).","LIS O(n log n): maintain array 'tails' where tails[i]=smallest tail of all IS of length i+1. Binary search for each element.","DP state rule: dp[i] represents the ANSWER to the problem on the first i elements. Define this precisely BEFORE writing the recurrence.","Rod Cutting: dp[i]=max over all cuts j: price[j]+dp[i-j]. O(n^2). Identical structure to coin change."],
problems:[{name:"CSES  -  Coin Combinations I",url:"https://cses.fi/problemset/task/1635",rating:0,source:"CSES"},{name:"CSES  -  Minimizing Coins",url:"https://cses.fi/problemset/task/1634",rating:0,source:"CSES"},{name:"CF Tag: dp 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=dp&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:47,phase:4,week:7,dayLabel:"Day 47  -  Wed",load:"light",topic:"0/1 Knapsack DP",
lectures:[{title:"0/1 Knapsack  -  Step 16 Part 3 (0/1 knapsack 2D DP, space-optimised 1D, subset sum DP, equal partition)",url:PLAYLIST,step:"Step 16 Part 3"}],
tip:"Very conceptual  -  2 problems only. 0/1 Knapsack is THE foundational DP template. Almost every DP problem can be traced back to its structure.",
mentorNotes:["0/1 Knapsack: n items with weight w[i] and value v[i]. Capacity W. Maximise value without exceeding W. Each item: take OR leave.","2D DP: dp[i][j]=max value using first i items with capacity j. dp[i][j]=max(dp[i-1][j], v[i]+dp[i-1][j-w[i]]) if j>=w[i].","1D space-optimised: iterate j from W DOWN to w[i]. Going down prevents using item i more than once. Forward iteration = unbounded knapsack.","Subset Sum (boolean): dp[i][j]=can we achieve sum j using first i elements? dp[i][j]=dp[i-1][j]||dp[i-1][j-a[i]].","Equal Partition: can array split into 2 subsets with equal sum? = Subset Sum where target=total_sum/2. Odd total -> impossible.","Greedy vs 0/1 Knapsack: fractional (greedy by ratio) vs 0/1 (must use DP). THE most important greedy/DP distinction to memorise."],
problems:[{name:"CSES  -  Coin Combinations II",url:"https://cses.fi/problemset/task/1636",rating:0,source:"CSES"},{name:"CF Tag: dp 1000 - 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=dp&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:48,phase:4,week:7,dayLabel:"Day 48  -  Thu",load:"medium",topic:"Grid DP  -  Unique Paths, Minimum Path Sum",
lectures:[{title:"Grid DP  -  Step 16 (unique paths I & II with obstacles, minimum path sum, triangle minimum path)",url:PLAYLIST,step:"Step 16 Grid DP"}],
tip:"Grid DP is the most visually intuitive DP variant. Draw the table filling up  -  it's the best way to solidify DP intuition.",
mentorNotes:["Unique Paths: m*n grid, only move right or down. dp[i][j]=dp[i-1][j]+dp[i][j-1]. Base: dp[0][j]=dp[i][0]=1.","Unique Paths II (with obstacles): if obstacle -> dp[i][j]=0. Otherwise same recurrence. Watch initialisation order.","Minimum Path Sum: dp[i][j]=a[i][j]+min(dp[i-1][j],dp[i][j-1]). O(mn) time, optimisable to O(n) space.","Triangle minimum path: process bottom-up in-place. dp[i][j]=a[i][j]+min(dp[i+1][j],dp[i+1][j+1]). Answer: dp[0][0].","Grid DP general pattern: state=(i,j). Transitions=neighbouring cells. Generalises to 3D DP for harder problems.","Space optimisation: dp[i] only depends on dp[i-1] -> use 1D rolling array. Reduces O(mn) to O(n) space."],
problems:[{name:"CSES  -  Grid Paths",url:"https://cses.fi/problemset/task/1638",rating:0,source:"CSES"},{name:"CF Tag: dp 1100 - 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=dp&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:49,phase:4,week:7,dayLabel:"Day 49  -  Fri \uD83C\uDFAF MOCK #6",load:"medium",topic:"Mock Contest #6  -  CF Div. 3",
lectures:[],tip:"CF Div.3 virtual  -  A through D. DP appears in Div.3 D and E. Don't panic if you can't solve D  -  that's normal at this stage.",
mentorNotes:["7-week checkpoint: you now have the full toolkit  -  STL, sorting, BS, greedy, strings, recursion, DP (1D+knapsack+grid), two pointers, bit manipulation.","If A+B+C done in under 50 minutes: you're ahead. Start attempting Div.2 A+B.","DP in contest: n<=10^3 -> think O(n^2) DP. n<=10^6 -> think O(n) DP. 'max/min over all subsets' -> classic DP signal."],
problems:[{name:"CF Div.3 virtual  -  pick any recent round, attempt A - D (2 hours)",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

// == WEEK 8: DP Grind + Final Sprint =======================================
{id:50,phase:4,week:8,dayLabel:"Day 50  -  Sat \uD83D\uDCAA GRIND",load:"grind",topic:"DP Full Grind",
lectures:[],tip:"DP is the hardest topic  -  4 quality problems is the right target. Option A: CF Div.3 virtual. Option B: handpicked CSES DP.",
mentorNotes:["DP grind: for each problem, write 'dp[i] means...' BEFORE coding. Then recurrence. Then code.","Common DP patterns: linear (house robber/LIS), knapsack (subset sum/coin change), grid (paths).","Recognise DP by: 'optimal over all possibilities', 'count the ways', 'minimum/maximum cost to reach goal'. All three signal DP."],
problems:[{name:"CSES  -  Dice Combinations",url:"https://cses.fi/problemset/task/1633",rating:0,source:"CSES"},{name:"CSES  -  Coin Combinations I",url:"https://cses.fi/problemset/task/1635",rating:0,source:"CSES"},{name:"CSES  -  Book Shop (0/1 Knapsack)",url:"https://cses.fi/problemset/task/1158",rating:0,source:"CSES"},{name:"CF Tag: dp 1000 - 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=dp&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:51,phase:4,week:8,dayLabel:"Day 51  -  Sun \uD83D\uDE34 REST",load:"rest",topic:"REST DAY",lectures:[],tip:"Final week of the main roadmap. 5 active days: revision, big mock, editorial review, final grind, completion.",mentorNotes:[],problems:[]},

{id:52,phase:4,week:8,dayLabel:"Day 52  -  Mon",load:"medium",topic:"Full Weak Spot Revision  -  No New Content",
lectures:[],tip:"No new content. Find your 2 biggest weak spots across all topics. Re-solve a problem from each, from scratch, no reference.",
mentorNotes:["Mastery checklist: solve a 1000-rated CF problem in each of: greedy, BS on answers, two pointers, basic DP, strings. Shaky on any? Drill it today.","DP common weak spots: 1) not defining dp[i] precisely first, 2) wrong recurrence direction, 3) forgetting base cases when j<w[i].","52 days in: check your CF rating. The gap from Day 0 is your growth metric."],
problems:[{name:"CF Tag: your biggest weak spot 900 - 1100 (pick 3)",url:"https://codeforces.com/problemset",rating:900,source:"CF"}]},

{id:53,phase:4,week:8,dayLabel:"Day 53  -  Tue \uD83C\uDFAF BIG MOCK",load:"grind",topic:"Final Big Mock  -  CF Div. 3 A through F",
lectures:[],tip:"CF Div.3 virtual  -  A to F, 2 hours strict. Target: A+B+C in under 55 minutes. Attempt D seriously. E/F are stretch goals.",
mentorNotes:["Contest execution: 1) Read ALL problems (4 min). 2) Identify easiest 3. 3) Code in order of ease. 4) Never stuck >30 min without re-reading.","A+B timing: week 1 was ~35-40 min. Today target is 20-25 min. This speed gain is your 8-week growth in one number.","Your performance here roughly maps to your Div.3 contest performance in college. Use it to calibrate."],
problems:[{name:"CF Div.3 full virtual  -  A through F, 2 hours strict",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

{id:54,phase:4,week:8,dayLabel:"Day 54  -  Wed",load:"medium",topic:"Editorial Review  -  Implement All Unsolved Problems",
lectures:[],tip:"For every problem from Day 53 you couldn't solve: read editorial -> close it -> implement from understanding -> no copy-paste.",
mentorNotes:["Editorial review process: 1) Read editorial. 2) Close it. 3) Implement what you understood. 4) If still stuck, re-read once. 5) NEVER copy-paste code.","The problems you couldn't solve in the mock are your most valuable learning opportunities. This day is not optional."],
problems:[{name:"Implement ALL unsolved Day 53 problems from scratch  -  editorial closed",url:"https://codeforces.com/contests",rating:0,source:"CF"}]},

{id:55,phase:4,week:8,dayLabel:"Day 55  -  Thu \uD83D\uDCAA FINAL GRIND",load:"grind",topic:"Final Grind  -  Push into 1200 - 1400 Territory",
lectures:[],tip:"Target your 2 strongest topics. Solve problems rated 1200 - 1400 in those topics. Prove the 8 weeks paid off.",
mentorNotes:["1200 - 1400 problems typically combine 2 ideas: BS+greedy, DP+hashing, two pointers+sorting. Look for the combination.","If you can't solve a 1200 in 35 min: check the tags hint, think 5 more minutes, then check editorial.","You've come a long way from Day 1. Take that seriously."],
problems:[{name:"CF Tag: your strongest topic 1200 - 1300 (pick 3)",url:"https://codeforces.com/problemset",rating:1200,source:"CF"},{name:"CF Tag: your strongest topic 1300 - 1400 (pick 1)",url:"https://codeforces.com/problemset",rating:1300,source:"CF"}]},

{id:56,phase:4,week:8,dayLabel:"Day 56  -  Fri \uD83C\uDFC6 MAIN ROADMAP DONE",load:"rest",topic:"Completion + What's Next",
lectures:[],tip:"You've finished the main 8-week roadmap. Graphs bonus starts in 4 days. Rest today  -  genuinely.",
mentorNotes:["Topics covered in 56 days: STL, Math/Hashing, Sorting, Recursion, Arrays, Prefix Sums, Monotonic Stack, Binary Search (1D+Answers+2D), Greedy, Strings (Z-algo+Hashing), Deep Recursion, Backtracking, Two Pointers, Sliding Window, Bit Manipulation, 1D DP, 0/1 Knapsack, Grid DP.","In college (in order): Segment Trees, Graphs deep dive, DP advanced (interval/tree/bitmask), Number Theory, Combinatorics.","ICPC prep: start team contests immediately in college. Division of problems by strength is 50% of the game.","Maintain CF rating: 1 contest per week minimum. Even solving just A+B counts. Consistency compounds over months.","Book: 'Competitive Programmer's Handbook' by Antti Laaksonen  -  free PDF. Read it chapter by chapter."],
problems:[]},

// == BONUS: GRAPHS (4 Extra Days) ==========================================
{id:57,phase:5,week:9,dayLabel:"Bonus Day 1  -  Graph Intro + BFS",load:"light",topic:"Graph Theory Intro + BFS  -  Step 15",
lectures:[{title:"Graph Theory  -  Step 15 Part 1 (graph representations, BFS implementation, shortest path in unweighted graph)",url:PLAYLIST,step:"Step 15 Part 1"}],
tip:"ICPC-critical. 30 - 40% of ICPC problems involve graphs. Learn representations cold today  -  you'll use them for years.",
mentorNotes:["Adjacency list: vector<vector<int>> adj(n+1); for unweighted. vector<vector<pair<int,int>>> adj(n+1); for weighted (node,weight). Preferred for sparse graphs.","Adjacency matrix: int adj[n][n]  -  O(1) edge check but O(n^2) space. Only for dense graphs (n<=1000).","BFS: Breadth-First Search. Uses a QUEUE. Explores level by level. Finds SHORTEST PATH in unweighted graphs. O(V+E).","BFS template: queue<int> q; q.push(src); vis[src]=true; dist[src]=0; while(!q.empty()){int u=q.front();q.pop(); for(int v:adj[u]) if(!vis[v]){vis[v]=true;dist[v]=dist[u]+1;q.push(v);}}","BFS gives shortest path in UNWEIGHTED graphs. For weighted -> Dijkstra's. This distinction is fundamental.","Graph terminology: vertex/node, edge, directed/undirected, weighted/unweighted, connected, cycle, path, degree."],
problems:[{name:"CSES  -  Counting Rooms",url:"https://cses.fi/problemset/task/1192",rating:0,source:"CSES"},{name:"CSES  -  Labyrinth",url:"https://cses.fi/problemset/task/1193",rating:0,source:"CSES"}]},

{id:58,phase:5,week:9,dayLabel:"Bonus Day 2  -  DFS + Applications",load:"medium",topic:"DFS + Connected Components + Cycle Detection + Bipartite",
lectures:[{title:"Graph Theory  -  Step 15 Part 2 (DFS implementation, connected components, bipartite check, cycle detection undirected & directed)",url:PLAYLIST,step:"Step 15 Part 2"}],
tip:"DFS is the recursive counterpart to BFS. Many graph problems reduce to 'run DFS and track something.' Draw a small DFS tree on paper first.",
mentorNotes:["DFS: Depth-First Search. Uses RECURSION (or explicit stack). Explores as deep as possible before backtracking. O(V+E).","DFS template: void dfs(int u){vis[u]=true; for(int v:adj[u]) if(!vis[v]) dfs(v);}","Connected Components: run DFS/BFS from each unvisited node. Each separate call finds one component.","Cycle Detection (undirected): in DFS, if a neighbour is already visited AND is NOT the parent -> cycle exists.","Cycle Detection (directed): 3 colours  -  WHITE (unvisited), GRAY (in current DFS stack), BLACK (done). Visiting GRAY node -> cycle.","Bipartite Check: 2-colour with BFS/DFS. If you must give two adjacent nodes the same colour -> not bipartite."],
problems:[{name:"CSES  -  Building Roads",url:"https://cses.fi/problemset/task/1676",rating:0,source:"CSES"},{name:"CSES  -  Message Route",url:"https://cses.fi/problemset/task/1667",rating:0,source:"CSES"},{name:"CF Tag: graphs+dfs 1000 - 1100 (pick 1)",url:"https://codeforces.com/problemset?tags=dfs+and+similar&order=BY_RATING_ASC",rating:1000,source:"CF"}]},

{id:59,phase:5,week:9,dayLabel:"Bonus Day 3  -  Dijkstra's + Graph Problems",load:"medium",topic:"Dijkstra's Shortest Path + CSES Graph Practice",
lectures:[{title:"Dijkstra's Algorithm  -  Step 15 Part 3 (single source shortest path for weighted graphs, priority queue implementation)",url:PLAYLIST,step:"Step 15 Part 3"}],
tip:"Dijkstra's is THE shortest path algorithm for weighted graphs. Memorise the priority queue template completely  -  you'll use it in every contest.",
mentorNotes:["Dijkstra's: single source shortest path for non-negative weighted graphs. O((V+E) log V) with min-heap priority queue.","Template: priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq; dist[src]=0; pq.push({0,src}); while(!pq.empty()){auto[d,u]=pq.top();pq.pop(); if(d>dist[u]) continue; for(auto[v,w]:adj[u]) if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;pq.push({dist[v],v});}}","Key: 'if(d>dist[u]) continue' skips outdated priority queue entries. This is lazy deletion. Without it, correctness breaks.","Dijkstra FAILS with negative edge weights. Use Bellman-Ford (O(VE)) for negative weights.","Flood Fill: BFS/DFS on a 2D grid in 4 or 8 directions. Classic for 'count islands', 'fill region' problems.","Graph recognition: 'shortest path' -> Dijkstra (weighted) or BFS (unweighted). 'Connected components' -> DFS/BFS. 'Cycle' -> DFS with colours."],
problems:[{name:"CSES  -  Shortest Routes I",url:"https://cses.fi/problemset/task/1671",rating:0,source:"CSES"},{name:"CSES  -  Building Teams",url:"https://cses.fi/problemset/task/1668",rating:0,source:"CSES"},{name:"CF Tag: graphs+shortest paths 1100 - 1200 (pick 1)",url:"https://codeforces.com/problemset?tags=shortest+paths&order=BY_RATING_ASC",rating:1100,source:"CF"}]},

{id:60,phase:5,week:9,dayLabel:"Bonus Day 4  -  Graph Grind + Full Completion \uD83C\uDFC6",load:"grind",topic:"Graph Practice Grind + Program Completion",
lectures:[],tip:"Your final day. Solve as many CSES graph problems as you can. Then re-read Day 56's completion notes. You've built a foundation 99% of incoming CS freshmen don't have.",
mentorNotes:["CSES graph problems to complete: Counting Rooms, Labyrinth, Building Roads, Message Route, Building Teams, Round Trip, Monsters, Shortest Routes I.","What you've built in 60 days: 20+ algorithms, 100+ problems solved, 7 full mock contests, a CF profile that's actually active.","ICPC: start practising team dynamics in college immediately. Communicate which problems suit each person's strengths.","Next topics in college (in order): Segment Trees, LCA, Topological Sort, SCC, Floyd-Warshall, DP on Trees, Bitmask DP.","Keep the streak alive: 1 CF contest per week, minimum. Even A+B only. Participation compounds over months into rating.","The journey doesn't end here. This is the starting line."],
problems:[{name:"CSES  -  Round Trip",url:"https://cses.fi/problemset/task/1669",rating:0,source:"CSES"},{name:"CSES  -  Monsters",url:"https://cses.fi/problemset/task/1194",rating:0,source:"CSES"},{name:"CSES  -  Shortest Routes II",url:"https://cses.fi/problemset/task/1672",rating:0,source:"CSES"},{name:"CF Tag: graphs 1000 - 1200 (pick 2)",url:"https://codeforces.com/problemset?tags=graphs&order=BY_RATING_ASC",rating:1000,source:"CF"}]},
];

// ---------------------------------------------
// =============================================================================
// SUPABASE CONFIG  —  replace the two placeholder strings below
// =============================================================================
// HOW TO SET UP (free, ~5 min):
//   1. supabase.com → New project → any name/password → Create
//   2. Project Settings → API → copy "Project URL" and "anon public" key
//   3. SQL Editor → New query → paste and run:
//      create table if not exists cp_users (uid text primary key, pw_hash text, created_at bigint);
//      create table if not exists cp_progress (uid text primary key, data jsonb, updated_at bigint);
//      alter table cp_users  enable row level security;
//      alter table cp_progress enable row level security;
//      create policy "open" on cp_users  for all using (true) with check (true);
//      create policy "open" on cp_progress for all using (true) with check (true);
//   4. Paste your URL and key below
// =============================================================================
const SUPABASE_URL  = "https://sjszdgboomvspemwbhfr.supabase.co";
const SUPABASE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqc3pkZ2Jvb212c3BlbXdiaGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NDM4ODYsImV4cCI6MjA5NTMxOTg4Nn0.XZP8wC8B0kLbckhIJqPV7IeFwxYGa4LVZ6FwH8BR4LU";
// =============================================================================

const STORAGE_KEY = "cp_roadmap_v3";
const SESSION_KEY = "cp_roadmap_session";
const DEFAULT_DAY = () => ({ lecturesDone:[], problemsDone:[], notes:"", complete:false });

// ── Supabase fetch helper ─────────────────────────────────────────────────────
const sbFetch = async (path, opts = {}) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation",
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw Object.assign(new Error(err.message || res.statusText), { sbError: err });
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

const isSupabaseConfigured = () =>
  SUPABASE_URL && !SUPABASE_URL.startsWith("REPLACE") &&
  SUPABASE_KEY && !SUPABASE_KEY.startsWith("REPLACE");

// ── Session persistence ───────────────────────────────────────────────────────
const getSession = () => {
  try { const s = localStorage.getItem(SESSION_KEY); return s ? JSON.parse(s) : null; }
  catch { return null; }
};

const getSessionAsync = async () => {
  try { const s = localStorage.getItem(SESSION_KEY); if (s) return JSON.parse(s); } catch {}
  if (typeof window?.storage?.get === "function") {
    try { const r = await window.storage.get(SESSION_KEY, false); if (r?.value) return JSON.parse(r.value); } catch {}
  }
  return null;
};

const saveSession = async (obj) => {
  const str = JSON.stringify(obj);
  try { localStorage.setItem(SESSION_KEY, str); } catch {}
  if (typeof window?.storage?.set === "function") {
    try { await window.storage.set(SESSION_KEY, str, false); } catch {}
  }
};

const clearSession = async () => {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
  if (typeof window?.storage?.delete === "function") {
    try { await window.storage.delete(SESSION_KEY, false); } catch {}
  }
};

// ── Password hashing ──────────────────────────────────────────────────────────
const hashPassword = async (pw) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
};

// ── Local storage helpers (per-device cache) ──────────────────────────────────
const localStorageGet = async (key) => {
  if (typeof window?.storage?.get === "function") {
    try { const r = await window.storage.get(key, false); if (r?.value) return JSON.parse(r.value); } catch {}
  }
  try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : null; } catch { return null; }
};

const localStorageSet = async (key, val) => {
  const str = JSON.stringify(val);
  if (typeof window?.storage?.set === "function") { try { await window.storage.set(key, str, false); } catch {} }
  try { localStorage.setItem(key, str); } catch {}
};

const localStorageDel = async (key) => {
  if (typeof window?.storage?.delete === "function") { try { await window.storage.delete(key, false); } catch {} }
  try { localStorage.removeItem(key); } catch {}
};

const PROG_KEY   = (uid) => `cprm_prog_v4_${uid}`;
const USERS_DB_KEY = "cprm_users_v4";
const getUsers   = async () => (await localStorageGet(USERS_DB_KEY)) || {};
const saveUsers  = async (u) => localStorageSet(USERS_DB_KEY, u);

// ── Local-only auth (fallback when Supabase not configured) ───────────────────
const localRegister = async (uid, password) => {
  const pwHash = await hashPassword(password);
  const users = await getUsers();
  if (users[uid]) throw { code: "auth/email-already-in-use" };
  users[uid] = { pwHash };
  await saveUsers(users);
  await saveSession({ uid });
  return { uid };
};

const localLogin = async (uid, password) => {
  const pwHash = await hashPassword(password);
  const users = await getUsers();
  if (!users[uid]) throw { code: "auth/user-not-found" };
  if (users[uid].pwHash !== pwHash) throw { code: "auth/wrong-password" };
  await saveSession({ uid });
  return { uid };
};

const localSaveProgress = async (prog, uid) => localStorageSet(PROG_KEY(uid), prog);
const localLoadProgress = async (uid) => localStorageGet(PROG_KEY(uid));

// ── Sync code (manual cross-device transfer) ──────────────────────────────────
const buildSyncCode = async (uid, progress) => {
  const users = await getUsers();
  const payload = { v:1, uid, userMeta: users[uid], progress };
  return btoa(JSON.stringify(payload));
};

const applySyncCode = async (code) => {
  try {
    const payload = JSON.parse(atob(code.trim()));
    if (!payload.uid || !payload.userMeta || !payload.progress) throw new Error("invalid");
    const users = await getUsers();
    users[payload.uid] = payload.userMeta;
    await saveUsers(users);
    await localStorageSet(PROG_KEY(payload.uid), payload.progress);
    return payload.uid;
  } catch { throw new Error("Invalid sync code."); }
};

// ── Auth actions — Supabase first, local fallback ─────────────────────────────
const authRegister = async (uid, password) => {
  const pwHash = await hashPassword(password);
  if (isSupabaseConfigured()) {
    // Check if uid already exists
    const existing = await sbFetch(`cp_users?uid=eq.${encodeURIComponent(uid)}&select=uid`).catch(() => null);
    if (existing && existing.length > 0) throw { code: "auth/email-already-in-use" };
    await sbFetch("cp_users", {
      method: "POST",
      body: JSON.stringify({ uid, pw_hash: pwHash, created_at: Date.now() }),
    });
    // Cache locally too
    const users = await getUsers();
    users[uid] = { pwHash };
    await saveUsers(users);
    await saveSession({ uid });
    return { uid };
  }
  return localRegister(uid, password);
};

const authLogin = async (uid, password) => {
  const pwHash = await hashPassword(password);
  if (isSupabaseConfigured()) {
    const rows = await sbFetch(`cp_users?uid=eq.${encodeURIComponent(uid)}&select=uid,pw_hash`);
    if (!rows || rows.length === 0) throw { code: "auth/user-not-found" };
    if (rows[0].pw_hash !== pwHash) throw { code: "auth/wrong-password" };
    await saveSession({ uid });
    return { uid };
  }
  return localLogin(uid, password);
};

// ── Progress save / load ──────────────────────────────────────────────────────
const saveAllProgress = async (prog, session) => {
  if (!session) return;
  if (isSupabaseConfigured()) {
    sbFetch("cp_progress", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify({ uid: session.uid, data: prog, updated_at: Date.now() }),
    }).catch(e => console.warn("Supabase save failed:", e));
  }
  await localSaveProgress(prog, session.uid);
};

const loadAllProgress = async (session) => {
  const defaults = {};
  DAYS.forEach(d => { defaults[d.id] = DEFAULT_DAY(); });
  const merge = (stored) => {
    if (!stored || typeof stored !== "object") return defaults;
    const out = { ...defaults };
    DAYS.forEach(d => { if (stored[d.id]) out[d.id] = { ...DEFAULT_DAY(), ...stored[d.id] }; });
    return out;
  };
  if (!session) return defaults;
  if (isSupabaseConfigured()) {
    try {
      const rows = await sbFetch(`cp_progress?uid=eq.${encodeURIComponent(session.uid)}&select=data`);
      if (rows && rows.length > 0) return merge(rows[0].data);
    } catch (e) { console.warn("Supabase load failed:", e); }
  }
  return merge(await localLoadProgress(session.uid));
};

// ── Friendly error messages ───────────────────────────────────────────────────
const friendlyAuthError = (code) => {
  const map = {
    "auth/email-already-in-use":    "That UID is already taken. Choose a different one.",
    "auth/invalid-email":           "Invalid UID format.",
    "auth/weak-password":           "Password must be at least 6 characters.",
    "auth/user-not-found":          "No account on this device. On your other device open Backup → copy the Sync Code, then paste it here to restore your account.",
    "auth/wrong-password":          "Incorrect password.",
    "auth/invalid-credential":      "Incorrect UID or password.",
    "auth/too-many-requests":       "Too many attempts. Wait a moment and try again.",
    "auth/network-request-failed":  "Network error. Check your connection.",
  };
  return map[code] || "Something went wrong. Please try again.";
};

// ---------------------------------------------
// HELPERS / CONFIG
// ---------------------------------------------
const LOAD_CONFIG = {
  grind:  { label:"\uD83D\uDCAA GRIND",  color:"#f87171", bg:"rgba(248,113,113,0.15)" },
  medium: { label:"\uD83D\uDFE1 MEDIUM", color:"#facc15", bg:"rgba(250,204,21,0.12)"  },
  light:  { label:"\uD83D\uDFE2 LIGHT",  color:"#4ade80", bg:"rgba(74,222,128,0.12)"  },
  rest:   { label:"\uD83D\uDE34 REST",   color:"#94a3b8", bg:"rgba(148,163,184,0.1)"  },
};
const PHASE_CONFIG = {
  1: { label:"\uD83D\uDD35 Foundation",        color:"#38bdf8" },
  2: { label:"\uD83D\uDFE1 Arrays + Techniques",color:"#facc15" },
  3: { label:"\uD83D\uDFE0 BS + Greedy + Strings",color:"#fb923c" },
  4: { label:"\uD83D\uDCAA Recursion + DP",    color:"#f87171" },
  5: { label:"\uD83D\uDFE3 Graphs (Bonus)",    color:"#a78bfa" },
};
const getRatingColor = r => !r?"#64748b":r<=900?"#4ade80":r<=1099?"#38bdf8":r<=1299?"#facc15":"#fb923c";
const computeStats = progress => {
  let tp=0,sp=0,lt=0,ld=0,cd=0;
  DAYS.forEach(d => {
    tp+=d.problems.length; lt+=d.lectures.length;
    const p=progress[d.id]||{};
    sp+=(p.problemsDone||[]).length; ld+=(p.lecturesDone||[]).length;
    if(p.complete) cd++;
  });
  return { totalProblems:tp, solvedProblems:sp, lecturesTotal:lt, lecturesDone:ld, completeDays:cd, totalDays:DAYS.length };
};

// ---------------------------------------------
// UI COMPONENTS
// ---------------------------------------------
function Pill({children,color,bg}){return(<span style={{display:"inline-block",padding:"2px 10px",borderRadius:999,fontSize:11,fontWeight:700,letterSpacing:"0.05em",color,background:bg,border:`1px solid ${color}40`}}>{children}</span>);}

function ProgressBar({value,max,color="#38bdf8"}){const pct=max===0?0:Math.round((value/max)*100);return(<div style={{position:"relative",height:6,borderRadius:3,background:"#1e293b",overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:color,borderRadius:3,transition:"width 0.5s ease",boxShadow:`0 0 6px ${color}80`}}/></div>);}

function StatCard({label,value,max,color="#38bdf8"}){return(<div style={{background:"#111827",border:"1px solid #1e293b",borderRadius:12,padding:"16px 20px",display:"flex",flexDirection:"column",gap:8}}><div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.08em",textTransform:"uppercase"}}>{label}</div><div style={{fontSize:28,fontWeight:800,color,fontFamily:"monospace"}}>{value}{max!==undefined&&<span style={{fontSize:14,color:"#475569",fontWeight:400}}>/{max}</span>}</div>{max!==undefined&&<ProgressBar value={value} max={max} color={color}/>}</div>);}

function BackupPanel({progress,onRestore,uid}){
  const [open,setOpen]=useState(false);
  const [copied,setCopied]=useState(false);
  const [exportStr,setExportStr]=useState("");
  const [importText,setImportText]=useState("");
  const [importStatus,setImportStatus]=useState("");
  const exportRef=useRef(null);

  useEffect(()=>{
    if(open&&uid) buildSyncCode(uid,progress).then(setExportStr).catch(()=>setExportStr(JSON.stringify(progress)));
  },[open,uid,progress]);

  const copyExport=()=>{if(exportRef.current){exportRef.current.select();exportRef.current.setSelectionRange(0,9999);setCopied(true);setTimeout(()=>setCopied(false),4000);}};

  const doImport=async()=>{
    try{
      // Try full sync code first (includes account credentials)
      let syncPayload=null;
      try{ const p=JSON.parse(atob(importText.trim())); if(p?.v===1&&p.uid&&p.userMeta&&p.progress) syncPayload=p; }catch{}
      if(syncPayload){
        await applySyncCode(importText.trim());
        onRestore(syncPayload.progress);
        setImportStatus("✅ Account synced! Log in with your credentials.");
      } else {
        // Legacy: plain progress JSON
        const parsed=JSON.parse(importText.trim());
        if(typeof parsed!=="object"||parsed===null) throw new Error("bad");
        onRestore(parsed);
        setImportStatus("✅ Progress restored!");
      }
      setImportText("");
      setTimeout(()=>setImportStatus(""),5000);
    }catch(_){setImportStatus("❌ Invalid backup data");}
  };
  return(
    <div style={{background:"#111827",border:"1px solid #1e293b",borderRadius:12,overflow:"hidden"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",background:"none",border:"none",padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",color:"#94a3b8"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:16}}>📲</span><span style={{fontSize:12,fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",color:"#94a3b8"}}>Sync to Another Device / Backup</span></div>
        <span style={{fontSize:12}}>{open?"▲":"▼"}</span>
      </button>
      {open&&<div style={{padding:"0 16px 16px",display:"flex",flexDirection:"column",gap:12}}>
        <div style={{fontSize:12,color:"#94a3b8",lineHeight:1.7}}>
          <strong style={{color:"#38bdf8"}}>📱 Syncing to another device?</strong> Export your progress below, copy the text, open this app on your other device, and paste it into the Restore box. Takes 10 seconds.
        </div>
        <div>
          <div style={{fontSize:11,color:"#64748b",fontFamily:"monospace",textTransform:"uppercase",marginBottom:6}}>Export (copy your current progress)</div>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            <input ref={exportRef} readOnly value={exportStr} onClick={copyExport}
              style={{flex:1,background:"#0f172a",border:"1px solid #1e293b",borderRadius:6,padding:"6px 8px",color:"#64748b",fontSize:11,fontFamily:"monospace",cursor:"text",outline:"none"}}/>
            <button onClick={copyExport} style={{fontSize:11,color:copied?"#4ade80":"#38bdf8",border:`1px solid ${copied?"#4ade8040":"#38bdf830"}`,borderRadius:6,padding:"6px 12px",background:copied?"rgba(74,222,128,0.08)":"rgba(56,189,248,0.08)",cursor:"pointer",fontFamily:"monospace",flexShrink:0}}>{copied?"✓ Ctrl+C":"Select All"}</button>
          </div>
        </div>
        <div>
          <div style={{fontSize:11,color:"#64748b",fontFamily:"monospace",textTransform:"uppercase",marginBottom:6}}>Restore (paste a previous backup)</div>
          <textarea value={importText} onChange={e=>setImportText(e.target.value)} placeholder="Paste your backup text here..." style={{width:"100%",height:70,background:"#0f172a",border:"1px solid #1e293b",borderRadius:6,padding:"8px 10px",color:"#e2e8f0",fontSize:12,fontFamily:"monospace",resize:"none",boxSizing:"border-box",outline:"none"}}/>
          <div style={{display:"flex",alignItems:"center",gap:10,marginTop:6}}>
            <button onClick={doImport} disabled={!importText.trim()} style={{fontSize:12,color:"#facc15",border:"1px solid #facc1540",borderRadius:6,padding:"6px 14px",background:"rgba(250,204,21,0.08)",cursor:importText.trim()?"pointer":"not-allowed",fontFamily:"monospace",opacity:importText.trim()?1:0.5}}>Restore Progress</button>
            {importStatus&&<span style={{fontSize:12,color:importStatus.startsWith("✅")?"#4ade80":"#f87171",fontFamily:"monospace"}}>{importStatus}</span>}
          </div>
        </div>
      </div>}
    </div>
  );
}

function Dashboard({progress,onSelectWeek,onRestore,onLogout,uid}){
  const stats=computeStats(progress);
  const phaseTotals=[1,2,3,4,5].map(ph=>{const days=DAYS.filter(d=>d.phase===ph);const done=days.filter(d=>(progress[d.id]||{}).complete).length;return{ph,total:days.length,done};});
  const today=DAYS.find(d=>!(progress[d.id]||{}).complete)||DAYS[DAYS.length-1];
  return(
    <div style={{display:"flex",flexDirection:"column",gap:24}}>
      <div style={{textAlign:"center",padding:"8px 0"}}>
        <div style={{fontSize:11,color:"#38bdf8",fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:6}}>Striver A2Z * Competitive Programming</div>
        <h1 style={{fontSize:32,fontWeight:900,color:"#f1f5f9",margin:0,letterSpacing:"-0.02em"}}>60-Day CP Roadmap</h1>
        <div style={{fontSize:13,color:"#475569",marginTop:6}}>8 weeks + Graphs bonus * 100+ problems * Div.4 -{">"} Div.2</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginTop:16}}>
          <span style={{fontSize:13,color:"#38bdf8",fontFamily:"monospace"}}>@{uid}</span>
          <button onClick={onLogout} style={{fontSize:13,fontFamily:"monospace",fontWeight:600,color:"#f87171",background:"rgba(248,113,113,0.08)",border:"1px solid rgba(248,113,113,0.25)",borderRadius:8,padding:"6px 16px",cursor:"pointer"}}>Sign out</button>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <StatCard label="Days Complete" value={stats.completeDays} max={stats.totalDays} color="#4ade80"/>
        <StatCard label="Problems Solved" value={stats.solvedProblems} max={stats.totalProblems} color="#38bdf8"/>
        <StatCard label="Lectures Watched" value={stats.lecturesDone} max={stats.lecturesTotal} color="#facc15"/>
        <StatCard label="Phases Done" value={phaseTotals.filter(p=>p.done===p.total).length} max={5} color="#a78bfa"/>
      </div>
      <div style={{background:"linear-gradient(135deg,#0f172a,#111827)",border:"1px solid #1e293b",borderRadius:12,padding:20}}>
        <div style={{fontSize:11,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8}}>📍 Current / Next Day</div>
        <div style={{fontSize:18,fontWeight:700,color:"#f1f5f9",marginBottom:4}}>{today.dayLabel}</div>
        <div style={{fontSize:14,color:"#94a3b8",marginBottom:12}}>{today.topic}</div>
        <button onClick={()=>onSelectWeek(today.week,today.id)} style={{background:"#38bdf8",color:"#0a0a14",border:"none",borderRadius:8,padding:"8px 16px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"monospace"}}>Go to Day →</button>
      </div>
      <div>
        <div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>Phases</div>
        {phaseTotals.map(({ph,total,done})=>{const cfg=PHASE_CONFIG[ph];return(<div key={ph} style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}><div style={{width:130,fontSize:12,color:cfg.color,fontWeight:600,flexShrink:0}}>{cfg.label}</div><div style={{flex:1}}><ProgressBar value={done} max={total} color={cfg.color}/></div><div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",width:40,textAlign:"right"}}>{done}/{total}</div></div>);})}
      </div>
      <BackupPanel progress={progress} onRestore={onRestore} uid={uid}/>
      <div>
        <div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>Weeks</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8}}>
          {[1,2,3,4,5,6,7,8,9].map(w=>{const wDays=DAYS.filter(d=>d.week===w);const done=wDays.filter(d=>(progress[d.id]||{}).complete).length;const pct=wDays.length?Math.round((done/wDays.length)*100):0;const ph=wDays[0]?.phase;const color=PHASE_CONFIG[ph]?.color||"#64748b";return(<button key={w} onClick={()=>onSelectWeek(w)} style={{background:"#111827",border:`1px solid ${done===wDays.length&&wDays.length>0?color+"60":"#1e293b"}`,borderRadius:10,padding:"12px 8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:6}}><div style={{fontSize:13,fontWeight:700,color:done===wDays.length&&wDays.length>0?color:"#f1f5f9"}}>{w===9?"\uD83C\uDF1F":"W"+w}</div><div style={{fontSize:11,color:"#64748b",fontFamily:"monospace"}}>{pct}%</div><ProgressBar value={done} max={wDays.length||1} color={color}/></button>);})}
        </div>
      </div>
    </div>
  );
}

function WeekView({week,progress,onSelectDay}){
  const days=DAYS.filter(d=>d.week===week);
  const phaseId=days[0]?.phase;
  const phaseCfg=PHASE_CONFIG[phaseId]||{};
  return(
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <div><div style={{fontSize:11,color:phaseCfg.color,fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>{phaseCfg.label}</div><h2 style={{fontSize:24,fontWeight:800,color:"#f1f5f9",margin:0}}>{week===9?"Bonus  -  Graphs":"Week "+week}</h2></div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {days.map(d=>{const p=progress[d.id]||{};const loadCfg=LOAD_CONFIG[d.load];const probDone=(p.problemsDone||[]).length;const probTotal=d.problems.length;const lecDone=(p.lecturesDone||[]).length;const lecTotal=d.lectures.length;const isRest=d.load==="rest";return(<button key={d.id} onClick={()=>!isRest&&onSelectDay(d.id)} style={{background:p.complete?"rgba(74,222,128,0.05)":"#111827",border:`1px solid ${p.complete?"#4ade8040":"#1e293b"}`,borderLeft:`3px solid ${loadCfg.color}`,borderRadius:10,padding:"14px 16px",cursor:isRest?"default":"pointer",textAlign:"left",display:"flex",flexDirection:"column",gap:8}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:13,fontWeight:700,color:"#f1f5f9"}}>{d.dayLabel}</span>{p.complete&&<span style={{fontSize:11,color:"#4ade80"}}>✅ Done</span>}</div><Pill color={loadCfg.color} bg={loadCfg.bg}>{loadCfg.label}</Pill></div><div style={{fontSize:13,color:"#94a3b8"}}>{d.topic}</div>{!isRest&&<div style={{display:"flex",gap:16}}>{lecTotal>0&&<span style={{fontSize:11,color:lecDone===lecTotal?"#facc15":"#475569",fontFamily:"monospace"}}>🎥 {lecDone}/{lecTotal} lectures</span>}{probTotal>0&&<span style={{fontSize:11,color:probDone===probTotal?"#4ade80":"#475569",fontFamily:"monospace"}}>✅ {probDone}/{probTotal} problems</span>}</div>}</button>);})}
      </div>
    </div>
  );
}

// Selectable URL input  -  works in sandboxed iframes where clipboard API is blocked.
// Click the input or the button -> text is selected -> user presses Ctrl+C / Cmd+C.
function UrlBox({url}){
  const ref=useRef(null);
  const [sel,setSel]=useState(false);
  const select=()=>{if(ref.current){ref.current.select();ref.current.setSelectionRange(0,9999);setSel(true);setTimeout(()=>setSel(false),4000);}};
  return(
    <div style={{display:"flex",gap:6,alignItems:"center",marginTop:4}}>
      <input ref={ref} readOnly value={url} onClick={select}
        style={{flex:1,background:"#0f172a",border:"1px solid #1e293b",borderRadius:6,padding:"4px 8px",color:"#64748b",fontSize:10,fontFamily:"monospace",cursor:"text",outline:"none",minWidth:0}}/>
      <button onClick={e=>{e.stopPropagation();select();}}
        style={{fontSize:10,color:sel?"#4ade80":"#38bdf8",border:`1px solid ${sel?"#4ade8040":"#38bdf830"}`,borderRadius:5,padding:"3px 8px",background:sel?"rgba(74,222,128,0.08)":"rgba(56,189,248,0.08)",cursor:"pointer",fontFamily:"monospace",flexShrink:0,whiteSpace:"nowrap"}}>
        {sel?"✓ Ctrl+C":"Select"}
      </button>
    </div>
  );
}

function ProbBtn({name,url,done}){
  const [open,setOpen]=useState(false);
  return(
    <div style={{flex:1,minWidth:0}}>
      <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
        <span style={{fontSize:13,color:done?"#4ade80":"#e2e8f0",textDecoration:done?"line-through":"none",fontWeight:500,lineHeight:1.4}}>{name}</span>
        <button onClick={e=>{e.stopPropagation();setOpen(o=>!o);}}
          style={{fontSize:10,color:"#64748b",background:"none",border:"1px solid #1e293b",borderRadius:4,padding:"1px 6px",cursor:"pointer",flexShrink:0}}>
          {open?"▲":"\uD83D\uDD17"}
        </button>
      </div>
      {open&&<UrlBox url={url}/>}
    </div>
  );
}

// ---------------------------------------------
// LECTURE LINK  -  selectable URL input
// (artifact sandbox blocks clipboard API & window.open)
// Click the input or "Select" -> text highlights -> Ctrl+C / Cmd+C to copy
// ---------------------------------------------
function LecLink({url}){
  return <UrlBox url={url}/>;
}

function DayView({dayId,progress,onUpdate}){
  const d=DAYS.find(x=>x.id===dayId);
  if(!d) return null;
  const p=progress[dayId]||DEFAULT_DAY();
  // Always-fresh ref  -  fixes stale closure bug in notes debounce
  const pRef=useRef(p);
  useEffect(()=>{pRef.current=p;},[p]);
  const saveTimer=useRef(null);
  const [saveStatus,setSaveStatus]=useState("idle");
  const saveStatusTimer=useRef(null);
  const [showNotes,setShowNotes]=useState(false);
  const phaseCfg=PHASE_CONFIG[d.phase]||{};
  const loadCfg=LOAD_CONFIG[d.load];

  const doUpdate=(id,data)=>{
    setSaveStatus("saving");
    onUpdate(id,data);
    if(saveStatusTimer.current) clearTimeout(saveStatusTimer.current);
    saveStatusTimer.current=setTimeout(()=>setSaveStatus("saved"),500);
    setTimeout(()=>setSaveStatus("idle"),2500);
  };
  const toggleLecture=idx=>{const done=[...(pRef.current.lecturesDone||[])];const pos=done.indexOf(idx);if(pos===-1)done.push(idx);else done.splice(pos,1);doUpdate(dayId,{...pRef.current,lecturesDone:done});};
  const toggleProblem=idx=>{const done=[...(pRef.current.problemsDone||[])];const pos=done.indexOf(idx);if(pos===-1)done.push(idx);else done.splice(pos,1);doUpdate(dayId,{...pRef.current,problemsDone:done});};
  const handleNotes=e=>{const notes=e.target.value;if(saveTimer.current) clearTimeout(saveTimer.current);saveTimer.current=setTimeout(()=>{doUpdate(dayId,{...pRef.current,notes});},600);};
  const toggleComplete=()=>{doUpdate(dayId,{...pRef.current,complete:!pRef.current.complete});};

  return(
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#0f172a,#111827)",border:"1px solid #1e293b",borderRadius:12,padding:20}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8,marginBottom:12}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Pill color={phaseCfg.color} bg={phaseCfg.color+"18"}>{phaseCfg.label}</Pill><Pill color={loadCfg.color} bg={loadCfg.bg}>{loadCfg.label}</Pill></div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            {saveStatus!=="idle"&&<span style={{fontSize:11,fontFamily:"monospace",color:saveStatus==="saved"?"#4ade80":"#facc15"}}>{saveStatus==="saving"?"saving...":"✓ saved"}</span>}
            <button onClick={toggleComplete} style={{background:p.complete?"rgba(74,222,128,0.15)":"#1e293b",border:`1px solid ${p.complete?"#4ade80":"#334155"}`,borderRadius:8,padding:"6px 14px",color:p.complete?"#4ade80":"#64748b",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"monospace"}}>{p.complete?"✅ Completed":"Mark Complete"}</button>
          </div>
        </div>
        <div style={{fontSize:12,color:"#475569",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Week {d.week==="9"||d.week===9?"Bonus":d.week}</div>
        <h2 style={{fontSize:22,fontWeight:800,color:"#f1f5f9",margin:"0 0 6px 0"}}>{d.dayLabel}</h2>
        <div style={{fontSize:14,color:"#94a3b8"}}>{d.topic}</div>
      </div>

      {/* Lectures */}
      {d.lectures.length>0&&<section><div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10}}>🎥 Lectures</div><div style={{display:"flex",flexDirection:"column",gap:8}}>{d.lectures.map((lec,i)=>{const done=(p.lecturesDone||[]).includes(i);return(<div key={i} style={{background:"#111827",border:`1px solid ${done?"#facc1540":"#1e293b"}`,borderRadius:10,padding:"12px 16px",display:"flex",alignItems:"flex-start",gap:12}}><button onClick={()=>toggleLecture(i)} style={{width:22,height:22,flexShrink:0,borderRadius:4,border:`2px solid ${done?"#facc15":"#334155"}`,background:done?"#facc15":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#0a0a14"}}>{done?"✓":""}</button><div style={{flex:1,minWidth:0}}><div style={{fontSize:13,color:done?"#facc15":"#e2e8f0",fontWeight:600,marginBottom:4,lineHeight:1.4}}>{lec.title}</div><div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}><span style={{fontSize:11,color:"#475569",fontFamily:"monospace"}}>{lec.step}</span><LecLink url={lec.url}/></div></div></div>);})}</div></section>}

      {/* Mentor Tip */}
      <div style={{background:"rgba(56,189,248,0.05)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:10,padding:"14px 16px"}}><div style={{fontSize:11,color:"#38bdf8",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>💡 Mentor Tip</div><div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6}}>{d.tip}</div></div>

      {/* Concept Notes */}
      {d.mentorNotes.length>0&&<section><button onClick={()=>setShowNotes(s=>!s)} style={{width:"100%",background:"#111827",border:"1px solid #1e293b",borderRadius:10,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",textAlign:"left"}}><div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase"}}>📝 Concept Notes ({d.mentorNotes.length} points)</div><span style={{color:"#64748b",fontSize:12}}>{showNotes?"▲ hide":"▼ show"}</span></button>{showNotes&&<div style={{background:"#0f172a",border:"1px solid #1e293b",borderTop:"none",borderRadius:"0 0 10px 10px",padding:"14px 16px",display:"flex",flexDirection:"column",gap:10}}>{d.mentorNotes.map((note,i)=><div key={i} style={{display:"flex",gap:8}}><span style={{color:"#38bdf8",flexShrink:0,marginTop:2,fontSize:12}}>></span><span style={{fontSize:13,color:"#94a3b8",lineHeight:1.6,fontFamily:"monospace"}}>{note}</span></div>)}</div>}</section>}

      {/* Problems */}
      {d.problems.length>0&&<section><div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10}}>✅ Problems ({(p.problemsDone||[]).length}/{d.problems.length})</div><div style={{display:"flex",flexDirection:"column",gap:6}}>{d.problems.map((prob,i)=>{const done=(p.problemsDone||[]).includes(i);const rColor=getRatingColor(prob.rating);return(<div key={i} style={{background:"#111827",border:`1px solid ${done?"#4ade8030":"#1e293b"}`,borderRadius:10,padding:"10px 14px",display:"flex",alignItems:"center",gap:10,opacity:done?0.75:1}}><button onClick={()=>toggleProblem(i)} style={{width:22,height:22,flexShrink:0,borderRadius:4,border:`2px solid ${done?"#4ade80":"#334155"}`,background:done?"#4ade80":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#0a0a14"}}>{done?"✓":""}</button><ProbBtn name={prob.name} url={prob.url} done={done}/>{prob.rating>0&&<span style={{fontSize:11,fontWeight:700,color:rColor,background:rColor+"18",border:`1px solid ${rColor}40`,borderRadius:6,padding:"2px 8px",fontFamily:"monospace",flexShrink:0}}>{prob.rating}</span>}{prob.source==="CSES"&&<span style={{fontSize:10,color:"#fb923c",background:"rgba(251,146,60,0.1)",border:"1px solid rgba(251,146,60,0.3)",borderRadius:6,padding:"2px 6px",fontFamily:"monospace",flexShrink:0}}>CSES</span>}</div>);})}</div></section>}

      {/* My Notes */}
      <section>
        <div style={{fontSize:12,color:"#64748b",fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10}}>📓 My Notes (auto-saved)</div>
        <textarea defaultValue={p.notes||""} onChange={handleNotes} placeholder="What slowed you down? Key insights? Patterns you noticed? Write freely..." style={{width:"100%",minHeight:120,background:"#111827",border:"1px solid #1e293b",borderRadius:10,padding:"12px 14px",color:"#e2e8f0",fontSize:13,fontFamily:"monospace",lineHeight:1.6,resize:"vertical",boxSizing:"border-box",outline:"none"}}/>
      </section>

      {/* Navigation */}
      <div style={{display:"flex",gap:10,paddingBottom:20}}>
        {dayId>1&&<button data-nav="prev" style={{flex:1,background:"#111827",border:"1px solid #1e293b",borderRadius:10,padding:"12px",color:"#94a3b8",cursor:"pointer",fontSize:13,fontFamily:"monospace"}}>{"<- Day "}{dayId-1}</button>}
        {dayId<60&&<button data-nav="next" style={{flex:1,background:"#38bdf8",border:"none",borderRadius:10,padding:"12px",color:"#0a0a14",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"monospace"}}>{"Day "}{dayId+1}{" ->"}</button>}
      </div>
    </div>
  );
}

// ---------------------------------------------
// AUTH SCREEN  (Login / Register)
// ---------------------------------------------
function AuthScreen({ onAuth }) {
  const [mode, setMode]         = useState("login");   // "login" | "register"
  const [uid, setUid]           = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const pwRef  = useRef(null);
  const cfRef  = useRef(null);

  const validate = () => {
    const cleanUid = uid.trim().toLowerCase();
    if (!cleanUid)                              return "Enter a username.";
    if (!/^[a-z0-9_-]{3,24}$/.test(cleanUid)) return "Username: 3-24 chars, letters/numbers/hyphens only.";
    if (password.length < 6)                   return "Password must be at least 6 characters.";
    if (mode === "register" && password !== confirm) return "Passwords don't match.";
    return null;
  };

  const submit = async () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError(""); setLoading(true);
    const cleanUid = uid.trim().toLowerCase();
    try {
      const session = mode === "register"
        ? await authRegister(cleanUid, password)
        : await authLogin(cleanUid, password);
      onAuth(session);
    } catch (e) {
      setError(friendlyAuthError(e.code) + (e.code ? "" : " (" + (e.message || String(e)) + ")"));
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (m) => { setMode(m); setError(""); setPassword(""); setConfirm(""); };

  const inputStyle = {
    background:"#0f172a", border:"1px solid #334155", borderRadius:8,
    padding:"10px 14px", color:"#e2e8f0", fontSize:14, fontFamily:"monospace",
    outline:"none", width:"100%", boxSizing:"border-box",
  };
  const labelStyle = { fontSize:11, color:"#64748b", fontFamily:"monospace", textTransform:"uppercase", letterSpacing:"0.08em" };

  return (
    <div style={{minHeight:"100vh",background:"#0a0a14",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{maxWidth:380,width:"100%",display:"flex",flexDirection:"column",gap:0}}>

        {/* Header */}
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontSize:13,color:"#38bdf8",fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>60-Day CP Roadmap</div>
          <div style={{fontSize:26,fontWeight:900,color:"#f1f5f9",letterSpacing:"-0.02em"}}>
            {mode==="login" ? "Welcome back" : "Create account"}
          </div>
          <div style={{fontSize:13,color:"#475569",marginTop:6}}>
            {mode==="login" ? "Sign in to sync your progress across devices." : "Your progress will sync across all your devices."}
          </div>
        </div>

        {/* Card */}
        <div style={{background:"#111827",border:"1px solid #1e293b",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",gap:16}}>

          {/* Mode toggle */}
          <div style={{display:"flex",background:"#0a0a14",borderRadius:10,padding:3,gap:3}}>
            {["login","register"].map(m=>(
              <button key={m} onClick={()=>switchMode(m)}
                style={{flex:1,padding:"8px 0",borderRadius:8,border:"none",cursor:"pointer",fontFamily:"monospace",fontSize:12,fontWeight:700,
                  background:mode===m?"#1e293b":"transparent",
                  color:mode===m?"#38bdf8":"#475569",
                  transition:"all 0.15s"}}>
                {m==="login"?"Sign In":"Register"}
              </button>
            ))}
          </div>

          {/* UID */}
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <label style={labelStyle}>Username</label>
            <input value={uid} onChange={e=>{setUid(e.target.value);setError("");}}
              onKeyDown={e=>e.key==="Enter"&&pwRef.current?.focus()}
              placeholder="e.g. arjun-dev" autoComplete="username"
              style={inputStyle}/>
          </div>

          {/* Password */}
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <label style={labelStyle}>Password</label>
            <input ref={pwRef} type="password" value={password}
              onChange={e=>{setPassword(e.target.value);setError("");}}
              onKeyDown={e=>e.key==="Enter"&&(mode==="register"?cfRef.current?.focus():submit())}
              placeholder="Min 6 characters" autoComplete={mode==="register"?"new-password":"current-password"}
              style={inputStyle}/>
          </div>

          {/* Confirm password — register only */}
          {mode==="register"&&(
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <label style={labelStyle}>Confirm Password</label>
              <input ref={cfRef} type="password" value={confirm}
                onChange={e=>{setConfirm(e.target.value);setError("");}}
                onKeyDown={e=>e.key==="Enter"&&submit()}
                placeholder="Repeat your password" autoComplete="new-password"
                style={inputStyle}/>
            </div>
          )}

          {/* Error */}
          {error&&(
            <div style={{background:"rgba(248,113,113,0.08)",border:"1px solid rgba(248,113,113,0.25)",borderRadius:8,padding:"10px 14px",fontSize:13,color:"#f87171"}}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button onClick={submit} disabled={loading}
            style={{background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.35)",borderRadius:10,
              padding:"12px",color:loading?"#475569":"#38bdf8",fontSize:14,fontWeight:700,fontFamily:"monospace",
              cursor:loading?"not-allowed":"pointer",transition:"all 0.15s",opacity:loading?0.7:1}}>
            {loading ? "Please wait..." : mode==="login" ? "Sign In \u2192" : "Create Account \u2192"}
          </button>

          {/* Info note */}
          <div style={{fontSize:11,color:"#334155",textAlign:"center",lineHeight:1.5}}>
            {mode==="register"
              ? "Usernames are unique \u2014 no two accounts can share one."
              : "Don't have an account? Switch to Register above."}
          </div>
        </div>

        {/* Supabase not configured warning */}
        {!isSupabaseConfigured()&&(
          <div style={{marginTop:16,background:"rgba(250,204,21,0.06)",border:"1px solid rgba(250,204,21,0.2)",borderRadius:12,padding:"14px 16px",fontSize:12,color:"#facc15",lineHeight:1.6}}>
            <strong>Supabase not configured.</strong> Paste your Project URL and anon key into SUPABASE_URL and SUPABASE_KEY at the top of the file. Progress saves locally only until then.
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------
// MAIN APP
// ---------------------------------------------
export default function CPRoadmap(){
  const [view,setView]           = useState("dashboard");
  const [selectedWeek,setSelectedWeek] = useState(1);
  const [selectedDay,setSelectedDay]   = useState(null);
  const [progress,setProgress]   = useState({});
  const [loaded,setLoaded]       = useState(false);
  const [session,setSession]     = useState(undefined); // undefined=checking, null=logged out, {uid}=in
  const [syncStatus,setSyncStatus] = useState(""); // "saved"|"error"|""

  // On mount: restore session (async so it works in Claude artifacts too)
  useEffect(()=>{
    if(!isSupabaseConfigured()){ getSessionAsync().then(s => setSession(s||null)); return; }
    getSessionAsync().then(saved => setSession(saved || null));
  },[]);

  // Load progress once session is known
  useEffect(()=>{
    if(session===undefined) return; // still checking
    if(!session){ setLoaded(true); return; } // not logged in — show auth screen
    let cancelled=false;
    const fallback=setTimeout(()=>{ if(!cancelled) setLoaded(true); },5000);
    loadAllProgress(session)
      .then(p=>{ if(!cancelled){ setProgress(p); setLoaded(true); } })
      .catch(()=>{ if(!cancelled) setLoaded(true); })
      .finally(()=>clearTimeout(fallback));
    return ()=>{ cancelled=true; clearTimeout(fallback); };
  },[session]);

  const handleAuth = (sess) => { setSession(sess); setLoaded(false); };

  const handleLogout = () => { clearSession(); setSession(null); setProgress({}); setLoaded(false); };

  const handleUpdate=useCallback((dayId,data)=>{
    if(!session) return;
    setProgress(prev=>{
      const next={...prev,[dayId]:data};
      saveAllProgress(next, session)
        .then(()=>{ setSyncStatus("saved"); setTimeout(()=>setSyncStatus(""),2000); })
        .catch(()=>{ setSyncStatus("error"); setTimeout(()=>setSyncStatus(""),3000); });
      return next;
    });
  },[session]);

  const handleSelectWeek=(week,jumpToDay=null)=>{setSelectedWeek(week);if(jumpToDay){setSelectedDay(jumpToDay);setView("day");}else{setView("week");}};
  const handleSelectDay=dayId=>{setSelectedDay(dayId);setView("day");};
  const handleNavDay=dir=>{const newId=selectedDay+dir;if(newId>=1&&newId<=60){const d=DAYS.find(x=>x.id===newId);setSelectedWeek(d.week);setSelectedDay(newId);}};
  const handleDayViewClick=e=>{const btn=e.target.closest("button[data-nav]");if(!btn)return;handleNavDay(btn.dataset.nav==="next"?1:-1);};

  // Checking localStorage
  if(session===undefined) return(
    <div style={{minHeight:"100vh",background:"#0a0a14",display:"flex",alignItems:"center",justifyContent:"center",color:"#38bdf8",fontFamily:"monospace",fontSize:14,letterSpacing:"0.1em"}}>
      Checking session...
    </div>
  );

  // Not logged in → auth screen
  if(!session) return <AuthScreen onAuth={handleAuth}/>;

  // Loading progress
  if(!loaded) return(
    <div style={{minHeight:"100vh",background:"#0a0a14",display:"flex",alignItems:"center",justifyContent:"center",color:"#38bdf8",fontFamily:"monospace",fontSize:14,letterSpacing:"0.1em"}}>
      Loading roadmap...
    </div>
  );

  const NAV_ITEMS=[{id:"dashboard",label:"\uD83D\uDCCA Dashboard"},...[1,2,3,4,5,6,7,8].map(w=>({id:`week-${w}`,label:`W${w}`,week:w})),{id:"week-9",label:"\uD83C\uDF1F Graphs",week:9}];

  return(
    <div style={{minHeight:"100vh",background:"#0a0a14",color:"#e2e8f0",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <nav style={{position:"sticky",top:0,zIndex:10,background:"rgba(10,10,20,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid #1e293b",display:"flex",alignItems:"center",padding:"0 12px",overflowX:"auto",gap:2,minHeight:48}}>
        <div style={{fontSize:14,fontWeight:800,color:"#38bdf8",fontFamily:"monospace",padding:"0 10px 0 4px",flexShrink:0}}>CP</div>
        {NAV_ITEMS.map(item=>{const isActive=item.id==="dashboard"?view==="dashboard":view!=="dashboard"&&selectedWeek===item.week;return(<button key={item.id} onClick={()=>{if(item.id==="dashboard"){setView("dashboard");}else{setSelectedWeek(item.week);setView("week");}}} style={{background:isActive?"rgba(56,189,248,0.12)":"transparent",border:isActive?"1px solid rgba(56,189,248,0.3)":"1px solid transparent",borderRadius:8,padding:"5px 10px",cursor:"pointer",color:isActive?"#38bdf8":"#64748b",fontSize:12,fontWeight:isActive?700:400,fontFamily:"monospace",flexShrink:0,whiteSpace:"nowrap"}}>{item.label}</button>);})}
        {/* Sync status indicator */}
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",flexShrink:0,paddingRight:4}}>
          {syncStatus==="saved"&&<span style={{fontSize:11,fontFamily:"monospace",color:"#4ade80"}}>✓ saved</span>}
          {syncStatus==="error"&&<span style={{fontSize:11,fontFamily:"monospace",color:"#f87171"}}>⚠ err</span>}
        </div>
      </nav>
      {view!=="dashboard"&&<div style={{padding:"10px 16px",display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#475569",fontFamily:"monospace",borderBottom:"1px solid #1a2233"}}>
        <button onClick={()=>setView("dashboard")} style={{background:"none",border:"none",color:"#475569",cursor:"pointer",padding:0,fontSize:12,fontFamily:"monospace"}}>Dashboard</button>
        <span>></span>
        {view==="day"?(<><button onClick={()=>setView("week")} style={{background:"none",border:"none",color:"#475569",cursor:"pointer",padding:0,fontSize:12,fontFamily:"monospace"}}>{selectedWeek===9?"Graphs":"Week "+selectedWeek}</button><span>></span><span style={{color:"#94a3b8"}}>{DAYS.find(d=>d.id===selectedDay)?.dayLabel}</span></>):(<span style={{color:"#94a3b8"}}>{selectedWeek===9?"Graphs":"Week "+selectedWeek}</span>)}
      </div>}
      <main style={{maxWidth:680,margin:"0 auto",padding:"20px 16px"}} onClick={view==="day"?handleDayViewClick:undefined}>
        {view==="dashboard"&&<Dashboard progress={progress} onSelectWeek={handleSelectWeek} onRestore={p=>{setProgress(p);saveAllProgress(p,session);}} onLogout={handleLogout} uid={session?.uid}/>}
        {view==="week"&&<WeekView week={selectedWeek} progress={progress} onSelectDay={handleSelectDay}/>}
        {view==="day"&&<DayView dayId={selectedDay} progress={progress} onUpdate={handleUpdate}/>}
      </main>
      <footer style={{textAlign:"center",padding:"20px",fontSize:11,color:"#1e293b",fontFamily:"monospace"}}>Striver A2Z * ICPC Prep * 60-Day Roadmap</footer>
    </div>
  );
}
