#!/bin/bash

echo "🚀 Optimizing banner images for faster loading..."

# Check if sips is available (macOS built-in image optimizer)
if command -v sips &> /dev/null; then
    echo "Using macOS sips for image optimization..."
    
    cd img/banner/
    
    for img in home*.png; do
        if [ -f "$img" ]; then
            echo "Optimizing $img..."
            
            # Get original size
            original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
            original_size_mb=$((original_size / 1024 / 1024))
            
            # Create optimized version
            optimized_name="${img%.png}_optimized.jpg"
            
            # Resize and convert to JPEG with 80% quality
            sips -s format jpeg -s formatOptions 80 -Z 1920 "$img" --out "$optimized_name" > /dev/null 2>&1
            
            if [ -f "$optimized_name" ]; then
                new_size=$(stat -f%z "$optimized_name" 2>/dev/null || stat -c%s "$optimized_name" 2>/dev/null)
                new_size_mb=$((new_size / 1024 / 1024))
                
                echo "  ✅ $img: ${original_size_mb}MB -> ${new_size_mb}MB (${optimized_name})"
            else
                echo "  ❌ Failed to optimize $img"
            fi
        fi
    done
    
    echo ""
    echo "🎉 Banner image optimization complete!"
    echo "📝 Next steps:"
    echo "   1. Update HTML to use the _optimized.jpg files"
    echo "   2. Test the page loading speed"
    echo "   3. Replace original files if satisfied with results"
    
else
    echo "❌ sips not available. Please install ImageMagick or use online tools:"
    echo "   - https://tinypng.com/ (for PNG compression)"
    echo "   - https://compressor.io/ (for general compression)"
    echo ""
    echo "🔧 Manual optimization recommended:"
    echo "   - Resize images to max 1920px width"
    echo "   - Convert PNG to JPEG with 80% quality"
    echo "   - Expected reduction: 10MB -> ~500KB per image"
fi
