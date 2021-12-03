#include <stdlib.h>
#include <stdio.h>
#include <limits.h>	// INT_MAX

int main()
{
	printf("Advent of Code 2021\n");
	printf("Day 1: Sonar Sweep\n");

	int part1 = 0;
	for (int prev = INT_MAX, n; scanf("%d", &n) == 1; prev = n)
		part1 += n > prev;

	printf("Part 1: %d\n", part1);
	printf("Part 2: \n");

	return EXIT_SUCCESS;
}

