#!/bin/bash
# Example script to sanitize data using `shred`
echo "Starting data sanitization..."
shred -n 3 -z -u /path/to/file  # Replace with your actual file or device
echo "Data sanitization completed."