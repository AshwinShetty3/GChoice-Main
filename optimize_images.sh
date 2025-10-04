#!/bin/bash

# Image Optimization Script for G-Choice Website
echo "Starting image optimization..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Installing via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "Please install ImageMagick manually or install Homebrew first"
        exit 1
    fi
fi

# Create optimized directories
mkdir -p img/optimized/banner
mkdir -p img/optimized/product
mkdir -p img/optimized/certificates
mkdir -p img/optimized/icon-img

echo "Optimizing banner images..."
# Optimize banner images (reduce quality to 80% and resize if > 1920px)
find img/banner -name "*.jpg" -exec sh -c '
    for file; do
        filename=$(basename "$file")
        echo "Processing: $filename"
        # Get image dimensions
        width=$(identify -format "%w" "$file")
        height=$(identify -format "%h" "$file")
        
        if [ $width -gt 1920 ]; then
            # Resize large images to max width 1920px
            convert "$file" -resize 1920x -quality 80 "img/optimized/banner/$filename"
        else
            # Just compress without resizing
            convert "$file" -quality 80 "img/optimized/banner/$filename"
        fi
    done
' _ {} +

echo "Optimizing product images..."
# Optimize product images
find img/product -name "*.jpg" -exec sh -c '
    for file; do
        filename=$(basename "$file")
        dirname=$(dirname "$file" | sed "s|img/product/||")
        mkdir -p "img/optimized/product/$dirname"
        echo "Processing: $filename"
        convert "$file" -quality 85 -resize 800x600\> "img/optimized/product/$dirname/$filename"
    done
' _ {} +

echo "Optimizing certificate images..."
# Optimize certificate images (keep high quality for certificates)
find img/certificates -name "*.jpg" -exec sh -c '
    for file; do
        filename=$(basename "$file")
        echo "Processing: $filename"
        convert "$file" -quality 90 -resize 600x600\> "img/optimized/certificates/$filename"
    done
' _ {} +

echo "Optimizing icon images..."
# Optimize icon images (PNG optimization)
find img/icon-img -name "*.png" -exec sh -c '
    for file; do
        filename=$(basename "$file")
        echo "Processing: $filename"
        convert "$file" -strip -quality 95 "img/optimized/icon-img/$filename"
    done
' _ {} +

echo "Image optimization complete!"
echo "Optimized images are saved in img/optimized/ directory"
echo "You can now replace the original images with optimized ones"
