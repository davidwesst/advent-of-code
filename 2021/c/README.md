# AoC 2021 in C

To build this you will need:
- A C compiler (GCC, Clang or MSVC)
- CMake v3.18 or later

On Linux/Unix type the following into the command line:
```
$ mkdir build
$ cd build
$ cmake ..
$ cmake --build .
```

To run any file you must provide your input file on stdin either by cat-ing:
```
$ cat ../inputs/2101.txt | ./2101
```
...or via redirection:
```
$ ./2101 < ../inputs/2101.txt
```

Bon appetit!

