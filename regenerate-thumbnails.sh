#!/bin/bash

get_filename_without_extension() {
  local filepath="$1"
  local filename=$(basename "$filepath")
  echo "${filename%.*}"
}

clear_thumbnails() {
  rm -rf ./public/certs/thumbnails/*
}

input_dir=./public/certs/pdf
output_dir=./public/certs/thumbnails

$(clear_thumbnails)

for input_file in ${input_dir}/*; do
  convert -thumbnail x1500 "${input_file}[0]" "./${output_dir}/$(get_filename_without_extension "$input_file").jpg"
done

echo "Thumbnails generated"
