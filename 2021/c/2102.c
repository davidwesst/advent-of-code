#include <stdlib.h>
#include <stdio.h>

enum { BUFFSIZE = 8, FORWARD = 'f', UP = 'u', DOWN = 'd' };

int main()
{
	printf("Advent of Code 2021\n");
	printf("Day 2: Dive!\n");

	int horiz = 0;
	int depth = 0;		// same as 'aim'
	int depth2 = 0;
	char buff[BUFFSIZE] = { 0 };
	for (int n; scanf("%s %d", buff, &n) == 2; )
		switch (buff[0]) {
		case FORWARD:
			horiz += n;
			depth2 += depth * n;
			break;
		case UP:	depth -= n;	break;
		case DOWN:	depth += n;	break;
		}

	printf("Part 1: %d\n", horiz * depth);
	printf("Part 2: %d\n", horiz * depth2);

	return EXIT_SUCCESS;
}

