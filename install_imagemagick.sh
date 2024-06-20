#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install ImageMagick on macOS
install_imagemagick_mac() {
    if command_exists brew; then
        echo "Homebrew found. Installing ImageMagick..."
        brew install imagemagick
    else
        echo "Homebrew not found. Please install Homebrew first."
        exit 1
    fi
}

# Function to install ImageMagick on Debian/Ubuntu-based Linux
install_imagemagick_debian() {
    echo "Installing ImageMagick using apt..."
    sudo apt-get update
    sudo apt-get install -y imagemagick
}

# Function to install ImageMagick on Red Hat-based Linux
install_imagemagick_redhat() {
    echo "Installing ImageMagick using yum..."
    sudo yum install -y imagemagick
}

# Function to install ImageMagick on Windows using Chocolatey
install_imagemagick_windows() {
    if command_exists choco; then
        echo "Chocolatey found. Installing ImageMagick..."
        choco install imagemagick
    else
        echo "Chocolatey not found. Please install Chocolatey first."
        exit 1
    fi
}

# Check if ImageMagick is installed
if command_exists convert; then
    echo "ImageMagick is already installed."
else
    echo "ImageMagick is not installed."

    # Determine the platform and install ImageMagick
    case "$(uname -s)" in
        Darwin)
            install_imagemagick_mac
            ;;
        Linux)
            if [ -f /etc/debian_version ]; then
                install_imagemagick_debian
            elif [ -f /etc/redhat-release ]; then
                install_imagemagick_redhat
            else
                echo "Unsupported Linux distribution. Please install ImageMagick manually."
                exit 1
            fi
            ;;
        CYGWIN*|MINGW32*|MSYS*|MINGW*)
            install_imagemagick_windows
            ;;
        *)
            echo "Unsupported OS. Please install ImageMagick manually."
            exit 1
            ;;
    esac
fi
