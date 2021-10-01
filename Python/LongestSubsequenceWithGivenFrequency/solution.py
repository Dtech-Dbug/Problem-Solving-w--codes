from collections import Counter
import itertools


#function to check if pattern occurs as a subsequence in string
def isSubsequence(string: str, pattern: str) -> bool:
    iterable = iter(pattern)
    return all(char in iterable for char in string)


def longestSubsequenceRepeatedK(string: str, k: int) -> str:
    counts = Counter(string)
    temp = "".join(char * (counts[char] // k)
                   for char in sorted(counts, reverse=True))

    combination = set()
    for l in reversed(range(1, len(temp) + 1)):
        for candidate in itertools.combinations(temp, l):
            for perm in itertools.permutations(candidate):
                c = "".join(perm)

                if c not in combination:
                    combination.add(c)

                    if isSubsequence(c * k, string):
                        return c
    return ''