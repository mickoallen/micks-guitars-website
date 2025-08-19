#!/bin/bash

# Update YouTube Thumbnail Script for Mick's Guitars Website
# This script fetches the latest video from @micksguitarsarecool and updates the HTML

echo "🎸 Updating YouTube thumbnail for Mick's Guitars website..."

# Fetch the latest video info from YouTube channel
echo "📡 Fetching latest video from @micksguitarsarecool..."

# Get the latest video thumbnail URL
THUMBNAIL_URL=$(curl -s "https://www.youtube.com/@micksguitarsarecool" | grep -o 'https://i.ytimg.com/vi/[^?]*' | head -1)

if [ -z "$THUMBNAIL_URL" ]; then
    echo "❌ Error: Could not fetch thumbnail URL"
    exit 1
fi

# Extract video ID from thumbnail URL
VIDEO_ID=$(echo "$THUMBNAIL_URL" | sed 's|https://i.ytimg.com/vi/||' | sed 's|/hqdefault.jpg||')

if [ -z "$VIDEO_ID" ]; then
    echo "❌ Error: Could not extract video ID"
    exit 1
fi

echo "✅ Found video ID: $VIDEO_ID"
echo "✅ Thumbnail URL: $THUMBNAIL_URL"

# Create the video URL
VIDEO_URL="https://www.youtube.com/watch?v=$VIDEO_ID"

# Backup the original file
cp index.html index.html.backup
echo "💾 Created backup: index.html.backup"

# Update the HTML file
echo "📝 Updating index.html..."

# Use sed to replace the video link and thumbnail
sed -i '' "s|https://www.youtube.com/watch?v=[^\"]*|$VIDEO_URL|g" index.html
sed -i '' "s|https://i.ytimg.com/vi/[^\"]*|$THUMBNAIL_URL|g" index.html

echo "✅ Successfully updated YouTube video and thumbnail!"
echo "🎥 New video URL: $VIDEO_URL"
echo "🖼️  New thumbnail: $THUMBNAIL_URL"
echo ""
echo "💡 To revert changes, run: cp index.html.backup index.html" 