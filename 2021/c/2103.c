#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <string.h>

// Read input
enum { BUFFMAX = 16 };

struct Report {
	uint16_t* data;
	int size;
	int bits;
	int mask;
};

struct Report* read_report(FILE* stream, struct Report* r)
{
	int cap = 12;
	r->data = malloc(sizeof(*r->data) * cap);

	char buff[BUFFMAX];
	for (; fgets(buff, BUFFMAX, stream); ) {
		if (r->size == cap) {
			cap *= 2;
			r->data = realloc(r->data, sizeof(*r->data) * cap);
		}
		r->data[r->size++] = strtol(buff, NULL, 2);
	}
	r->data = realloc(r->data, sizeof(*r->data) * r->size);
	r->bits = strlen(buff) - 1;	// fgets saves '\n'
	r->mask = (1U << r->bits) - 1;

	return r;
}

// Part 1
int most_common_bit_at_pos(struct Report* r, int pos)
{
	int count[2] = { 0, 0 };
	for (int i = 0; i < r->size; ++i) {
		++count[(r->data[i] >> pos) & 1U];
	}
	return count[1] > count[0];
}

uint16_t calculate_gamma(struct Report* r)
{
	uint16_t out = 0;
	for (int i = 0; i < r->bits; ++i)
		if (most_common_bit_at_pos(r, i))
			out |= 1U << i;
	return out;
}

int main()
{
	printf("Advent of Code 2021\n");
	printf("Day 03: Binary Diagnostic\n");

	struct Report r = { 0 };
	if (!read_report(stdin, &r)) {
		fprintf(stderr, "Failed to read input\n");
		return EXIT_FAILURE;
	}

	uint16_t gamma = calculate_gamma(&r);
	uint16_t epsilon = (~gamma) & r.mask;

	printf("Part 1: %u\n", gamma * epsilon);
	printf("Part 2: \n");

	return EXIT_SUCCESS;
}

