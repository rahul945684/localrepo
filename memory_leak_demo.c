#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Represents a data block
typedef struct {
    char* data;
    size_t size;
} DataBlock;

// Function to process a data block (simplified)
void processDataBlock(DataBlock* block) {
    // Simulate some processing
    printf("Processing data of size: %zu\n", block->size);
    // Potential bug: If processing fails, 'data' might not be freed here, leading to a leak.
    // For simplicity, assume processing always succeeds for now.
}

// Function that simulates reading and processing multiple data blocks
void handleLargeDataSet(int num_blocks, size_t block_size) {
    DataBlock* blocks = (DataBlock*)malloc(num_blocks * sizeof(DataBlock));
    if (blocks == NULL) {
        perror("Failed to allocate memory for blocks array");
        return;
    }

    for (int i = 0; i < num_blocks; ++i) {
        blocks[i].data = (char*)malloc(block_size);
        if (blocks[i].data == NULL) {
            perror("Failed to allocate memory for data block");
            // Bug: Memory leak if allocation fails mid-loop and previously allocated blocks are not freed.
            for (int j = 0; j < i; ++j) {
                free(blocks[j].data); // Free already allocated data
            }
            free(blocks); // Free the blocks array itself
            return;
        }
        memset(blocks[i].data, 0, block_size); // Initialize data
        blocks[i].size = block_size;
        processDataBlock(&blocks[i]);
    }

    // Bug: Double-free potential if processDataBlock somehow frees 'block->data'
    // and then this loop also attempts to free it.
    // In this example, processDataBlock does not free the data, so this is the correct place.
    for (int i = 0; i < num_blocks; ++i) {
        free(blocks[i].data);
    }
    free(blocks);
}

int main() {
    // Simulate handling a large dataset with 1000 blocks, each 1MB
    handleLargeDataSet(1000, 1024 * 1024);

    // Another call, demonstrating potential cumulative leaks if not handled correctly
    handleLargeDataSet(50, 512 * 1024);

    return 0;
}