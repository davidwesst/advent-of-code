cmake_minimum_required(VERSION 3.18)

project(aoc-2021-c VERSION 0.1 LANGUAGES C)

set(CMAKE_C_STANDARD 99)
set(CMAKE_C_STANDARD_REQUIRED ON)

# Compiler flags
if (MSVC)
	add_compile_options(/W4)
else()
	add_compile_options(-Wall -Wextra -O2)
endif()

# Selected solutions
set(solutions
	"2101.c"
	"2102.c"
	"2103.c"
)

# Build all selected solutions
foreach(file IN LISTS solutions)
	get_filename_component(exe "${file}" NAME_WE)
	add_executable("${exe}" "${file}")
endforeach()

