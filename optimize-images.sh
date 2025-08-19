#!/bin/bash

# Image Optimization Script for Mick's Guitars Website
# This script downscales images to web-appropriate sizes

echo "🎸 Optimizing images for Mick's Guitars website..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ Error: ImageMagick is not installed"
    echo "💡 Install with: brew install imagemagick"
    exit 1
fi

# Create optimized directory if it doesn't exist
mkdir -p images/guitars/optimized

# Image optimization settings
MAX_WIDTH=1200
MAX_HEIGHT=1200
QUALITY=85

echo "📏 Target size: ${MAX_WIDTH}x${MAX_HEIGHT}px"
echo "🎯 Quality: ${QUALITY}%"

# Counter for processed images
PROCESSED=0
SKIPPED=0

# Process all images in the guitars directory
for img in images/guitars/*.jpg images/guitars/*.jpeg images/guitars/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output_path="images/guitars/optimized/$filename"
        
        echo "🔄 Processing: $filename"
        
        # Get original dimensions
        dimensions=$(identify -format "%wx%h" "$img" 2>/dev/null)
        if [ $? -ne 0 ]; then
            echo "⚠️  Skipping $filename (not a valid image)"
            ((SKIPPED++))
            continue
        fi
        
        width=$(echo $dimensions | cut -d'x' -f1)
        height=$(echo $dimensions | cut -d'x' -f2)
        
        echo "   Original: ${width}x${height}px"
        
        # Check if image needs resizing
        if [ "$width" -gt "$MAX_WIDTH" ] || [ "$height" -gt "$MAX_HEIGHT" ]; then
            # Resize image maintaining aspect ratio
            convert "$img" -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" -quality $QUALITY "$output_path"
            
            # Get new dimensions
            new_dimensions=$(identify -format "%wx%h" "$output_path")
            new_width=$(echo $new_dimensions | cut -d'x' -f1)
            new_height=$(echo $new_dimensions | cut -d'x' -f2)
            
            echo "   ✅ Optimized: ${new_width}x${new_height}px"
            ((PROCESSED++))
        else
            # Just copy and optimize quality if no resize needed
            convert "$img" -quality $QUALITY "$output_path"
            echo "   ✅ Copied (already optimal size)"
            ((PROCESSED++))
        fi
        
        # Get file sizes
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        optimized_size=$(stat -f%z "$output_path" 2>/dev/null || stat -c%s "$output_path" 2>/dev/null)
        
        if [ "$original_size" -gt 0 ] && [ "$optimized_size" -gt 0 ]; then
            savings=$((original_size - optimized_size))
            savings_percent=$((savings * 100 / original_size))
            echo "   💾 Size: ${original_size}KB → ${optimized_size}KB (${savings_percent}% smaller)"
        fi
        
        echo ""
    fi
done

echo "🎉 Image optimization complete!"
echo "✅ Processed: $PROCESSED images"
echo "⚠️  Skipped: $SKIPPED images"
echo ""
echo "📁 Optimized images saved to: images/guitars/optimized/"
echo ""
echo "💡 To use optimized images:"
echo "   1. Update gallery-loader.js to use 'images/guitars/optimized/' path"
echo "   2. Or replace original images: cp images/guitars/optimized/* images/guitars/"
echo ""
echo "🔍 To check file sizes:"
echo "   ls -lh images/guitars/optimized/" 