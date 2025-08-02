#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>

// Represents a data block
typedef struct {
    char* data;
    size_t size;
    int is_valid; // Flag to track if data is valid/allocated
} DataBlock;

// Return codes for better error handling
typedef enum {
    SUCCESS = 0,
    MEMORY_ERROR = -1,
    PROCESSING_ERROR = -2
} Result;

// Function to initialize a data block
Result initDataBlock(DataBlock* block, size_t size) {
    if (block == NULL || size == 0) {
        return MEMORY_ERROR;
    }
    
    block->data = (char*)malloc(size);
    if (block->data == NULL) {
        block->size = 0;
        block->is_valid = 0;
        return MEMORY_ERROR;
    }
    
    memset(block->data, 0, size);
    block->size = size;
    block->is_valid = 1;
    return SUCCESS;
}

// Function to safely free a data block
void freeDataBlock(DataBlock* block) {
    if (block != NULL && block->is_valid && block->data != NULL) {
        free(block->data);
        block->data = NULL;
        block->size = 0;
        block->is_valid = 0;
    }
}

// Function to process a data block with proper error handling
Result processDataBlock(DataBlock* block) {
    if (block == NULL || !block->is_valid || block->data == NULL) {
        fprintf(stderr, "Invalid data block passed to processDataBlock\n");
        return PROCESSING_ERROR;
    }
    
    // Simulate some processing
    printf("Processing data of size: %zu\n", block->size);
    
    // Simulate potential processing failure (uncomment to test error handling)
    // if (block->size > 500 * 1024) {
    //     fprintf(stderr, "Processing failed for large block\n");
    //     return PROCESSING_ERROR;
    // }
    
    return SUCCESS;
}

// Helper function to clean up allocated blocks on error
void cleanupBlocks(DataBlock* blocks, int allocated_count) {
    if (blocks == NULL) return;
    
    for (int i = 0; i < allocated_count; ++i) {
        freeDataBlock(&blocks[i]);
    }
    free(blocks);
}

// Function that simulates reading and processing multiple data blocks
Result handleLargeDataSet(int num_blocks, size_t block_size) {
    // Input validation
    if (num_blocks <= 0 || block_size == 0) {
        fprintf(stderr, "Invalid parameters: num_blocks=%d, block_size=%zu\n", 
                num_blocks, block_size);
        return MEMORY_ERROR;
    }
    
    // Check for potential overflow
    size_t total_memory = (size_t)num_blocks * block_size;
    if (total_memory / block_size != (size_t)num_blocks) {
        fprintf(stderr, "Memory requirement too large (overflow detected)\n");
        return MEMORY_ERROR;
    }
    
    printf("Allocating %d blocks of %zu bytes each (total: %zu bytes)\n", 
           num_blocks, block_size, total_memory);
    
    DataBlock* blocks = (DataBlock*)calloc(num_blocks, sizeof(DataBlock));
    if (blocks == NULL) {
        perror("Failed to allocate memory for blocks array");
        return MEMORY_ERROR;
    }
    
    // Initialize all blocks to invalid state
    for (int i = 0; i < num_blocks; ++i) {
        blocks[i].data = NULL;
        blocks[i].size = 0;
        blocks[i].is_valid = 0;
    }
    
    // Allocate and initialize each block
    for (int i = 0; i < num_blocks; ++i) {
        Result result = initDataBlock(&blocks[i], block_size);
        if (result != SUCCESS) {
            fprintf(stderr, "Failed to allocate memory for data block %d\n", i);
            // Clean up all previously allocated blocks
            cleanupBlocks(blocks, i); // Only clean up successfully allocated blocks
            return MEMORY_ERROR;
        }
        
        // Process the block
        result = processDataBlock(&blocks[i]);
        if (result != SUCCESS) {
            fprintf(stderr, "Failed to process data block %d\n", i);
            // Clean up all allocated blocks including the current one
            cleanupBlocks(blocks, i + 1);
            return PROCESSING_ERROR;
        }
    }
    
    printf("Successfully processed %d blocks\n", num_blocks);
    
    // Clean up all blocks
    cleanupBlocks(blocks, num_blocks);
    
    return SUCCESS;
}

int main() {
    printf("=== Memory Leak Demo - Fixed Version ===\n\n");
    
    // Test with smaller dataset first
    printf("Test 1: Small dataset\n");
    Result result1 = handleLargeDataSet(10, 1024);
    if (result1 != SUCCESS) {
        fprintf(stderr, "Test 1 failed with error code: %d\n", result1);
    }
    printf("\n");
    
    // Test with medium dataset
    printf("Test 2: Medium dataset\n");
    Result result2 = handleLargeDataSet(50, 512 * 1024);
    if (result2 != SUCCESS) {
        fprintf(stderr, "Test 2 failed with error code: %d\n", result2);
    }
    printf("\n");
    
    // Test with large dataset (may fail on systems with limited memory)
    printf("Test 3: Large dataset (may fail on limited memory systems)\n");
    Result result3 = handleLargeDataSet(100, 1024 * 1024);
    if (result3 != SUCCESS) {
        fprintf(stderr, "Test 3 failed with error code: %d\n", result3);
    }
    printf("\n");
    
    // Test error conditions
    printf("Test 4: Error conditions\n");
    Result result4 = handleLargeDataSet(0, 1024); // Invalid num_blocks
    if (result4 != MEMORY_ERROR) {
        fprintf(stderr, "Expected MEMORY_ERROR for invalid num_blocks\n");
    }
    Result result5 = handleLargeDataSet(10, 0);   // Invalid block_size
    if (result5 != MEMORY_ERROR) {
        fprintf(stderr, "Expected MEMORY_ERROR for invalid block_size\n");
    }
    printf("Error condition tests completed\n\n");
    
    printf("All tests completed. Check for memory leaks with valgrind if available.\n");
    return 0;
}