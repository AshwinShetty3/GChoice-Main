#!/bin/bash

# Script to fix external pisumfoods.com links to local paths
echo "Fixing external links in HTML files..."

# Find all HTML files and fix the links
find . -name "*.html" -type f | while read -r file; do
    echo "Processing: $file"
    
    # Get the directory depth to calculate relative path to root
    dir_depth=$(echo "$file" | tr -cd '/' | wc -c)
    relative_path=""
    
    # Build relative path to root (index.html)
    for ((i=1; i<dir_depth; i++)); do
        relative_path="../$relative_path"
    done
    
    # Fix the links
    # Replace logo links
    sed -i '' "s|href=\"https://pisumfoods\.com/\" title=\"Pisum logo\"|href=\"${relative_path}index.html\" title=\"Pisum logo\"|g" "$file"
    
    # Replace Home navigation links
    sed -i '' "s|href=\"https://pisumfoods\.com/\" title=\"Home\"|href=\"${relative_path}index.html\" title=\"Home\"|g" "$file"
    
    # Replace other navigation links that should be relative
    sed -i '' "s|href=\"https://pisumfoods\.com/about-us/\"|href=\"${relative_path}about-us/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/certificates/\"|href=\"${relative_path}certificates/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/blog\"|href=\"${relative_path}blog.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/careers/\"|href=\"${relative_path}careers/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/contact-us/\"|href=\"${relative_path}contact-us/index.html\"|g" "$file"
    
    # Replace product category links
    sed -i '' "s|href=\"https://pisumfoods\.com/grains-and-cereal/\"|href=\"${relative_path}grains-and-cereal/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/pulses/\"|href=\"${relative_path}pulses/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/spices/\"|href=\"${relative_path}spices/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/fruits/\"|href=\"${relative_path}fruits/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/vegetables/\"|href=\"${relative_path}vegetables/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/oilseeds/\"|href=\"${relative_path}oilseeds/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/floriculture/\"|href=\"${relative_path}floriculture/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/herbs/\"|href=\"${relative_path}herbs/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/dry-fruits/\"|href=\"${relative_path}dry-fruits/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/beverages/\"|href=\"${relative_path}beverages/index.html\"|g" "$file"
    sed -i '' "s|href=\"https://pisumfoods\.com/dehydrated-products/\"|href=\"${relative_path}dehydrated-products/index.html\"|g" "$file"
    
    # Fix any remaining simple pisumfoods.com links to home
    sed -i '' "s|href=\"https://pisumfoods\.com/\"|href=\"${relative_path}index.html\"|g" "$file"
done

echo "Link fixing completed!" 