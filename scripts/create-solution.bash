#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo "Error: No solution specified." 1>&2
  exit 1
fi

if [ ! -d "exercises/$1" ]; then
  echo "Error: Exercise \"$1\" does not exist." 1>&2
  exit 1
fi

exercise_name="$1"
exercise_path="exercises/$exercise_name"
solution_path="solutions/$exercise_name"

mkdir -p $solution_path
find $exercise_path -type f -not -iname 'README.md' -exec cp {} $solution_path \;
