# Memory Management Demo: Fixing Memory Leaks in C

This project demonstrates common memory management issues in C and provides a fixed version that addresses these problems.

## Files

- `memory_leak_demo.c` - Original code with memory management issues
- `memory_leak_fixed.c` - Improved version with proper memory management
- `Makefile` - Build configuration for both versions

## Issues in Original Code

### 1. **Partial Cleanup on Allocation Failure**
```c
// Original problematic code:
for (int i = 0; i < num_blocks; ++i) {
    blocks[i].data = (char*)malloc(block_size);
    if (blocks[i].data == NULL) {
        // Only cleans up previously allocated blocks
        for (int j = 0; j < i; ++j) {
            free(blocks[j].data);
        }
        free(blocks);
        return;
    }
    // ...
}
```
**Problem**: This code correctly handles cleanup when allocation fails, but the comments suggest it's buggy. Actually, this part is correct.

### 2. **Potential Double-Free Issues**
```c
// Original concerning comment:
// Bug: Double-free potential if processDataBlock somehow frees 'block->data'
```
**Problem**: If `processDataBlock` were to free the data internally, the cleanup loop would cause double-free errors.

### 3. **Lack of Error Handling**
- No return codes to indicate success/failure
- No validation of input parameters
- No protection against integer overflow
- No tracking of block validity

### 4. **Resource Management Complexity**
- Manual memory management without clear ownership
- No centralized cleanup function
- Difficult to maintain and extend

## Improvements in Fixed Version

### 1. **Enhanced Data Structure**
```c
typedef struct {
    char* data;
    size_t size;
    int is_valid; // Flag to track if data is valid/allocated
} DataBlock;
```
- Added validity tracking to prevent double-free issues

### 2. **Proper Error Handling**
```c
typedef enum {
    SUCCESS = 0,
    MEMORY_ERROR = -1,
    PROCESSING_ERROR = -2
} Result;
```
- Return codes for all functions
- Input validation
- Overflow detection

### 3. **Centralized Resource Management**
```c
void freeDataBlock(DataBlock* block);
void cleanupBlocks(DataBlock* blocks, int allocated_count);
```
- Safe deallocation functions
- Centralized cleanup logic
- Prevents double-free errors

### 4. **Robust Initialization**
```c
DataBlock* blocks = (DataBlock*)calloc(num_blocks, sizeof(DataBlock));
// Initialize all blocks to invalid state
for (int i = 0; i < num_blocks; ++i) {
    blocks[i].data = NULL;
    blocks[i].size = 0;
    blocks[i].is_valid = 0;
}
```
- Zero-initialized structures
- Clear invalid state

### 5. **Better Error Recovery**
- Cleanup only successfully allocated blocks
- Clear error messages
- Graceful handling of edge cases

## Building and Testing

### Compile both versions:
```bash
make all
```

### Run basic tests:
```bash
make test
```

### Check for memory leaks (requires valgrind):
```bash
make valgrind
```

### Clean build artifacts:
```bash
make clean
```

## Expected Valgrind Results

**Original Version**: Should show no memory leaks (the original code actually handles memory correctly in the happy path)

**Fixed Version**: Should show no memory leaks and demonstrate better error handling

## Key Takeaways

1. **Always validate inputs** - Check for NULL pointers and invalid parameters
2. **Use consistent error handling** - Return codes help track success/failure
3. **Implement RAII-style patterns** - Even in C, you can have initialization/cleanup pairs
4. **Track resource state** - Use flags to prevent double-free and use-after-free
5. **Test error paths** - Ensure cleanup works correctly when things go wrong
6. **Use tools like valgrind** - Automated detection of memory issues

## Memory Safety Best Practices

1. **Match every malloc with free**
2. **Set pointers to NULL after freeing**
3. **Use calloc for zero-initialized memory**
4. **Validate all inputs**
5. **Handle allocation failures gracefully**
6. **Implement centralized cleanup functions**
7. **Use static analysis tools and valgrind**

This example demonstrates that even simple memory management can have subtle issues, and proper defensive programming practices are essential for robust C code.