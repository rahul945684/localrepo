CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -g -O0
LDFLAGS = 

# Targets
TARGETS = memory_leak_demo memory_leak_fixed

.PHONY: all clean test valgrind

all: $(TARGETS)

memory_leak_demo: memory_leak_demo.c
	$(CC) $(CFLAGS) -o $@ $< $(LDFLAGS)

memory_leak_fixed: memory_leak_fixed.c
	$(CC) $(CFLAGS) -o $@ $< $(LDFLAGS)

test: all
	@echo "=== Testing Original Version ==="
	./memory_leak_demo
	@echo "\n=== Testing Fixed Version ==="
	./memory_leak_fixed

valgrind: all
	@echo "=== Running Original Version with Valgrind ==="
	valgrind --tool=memcheck --leak-check=full --show-leak-kinds=all --track-origins=yes ./memory_leak_demo
	@echo "\n=== Running Fixed Version with Valgrind ==="
	valgrind --tool=memcheck --leak-check=full --show-leak-kinds=all --track-origins=yes ./memory_leak_fixed

clean:
	rm -f $(TARGETS)