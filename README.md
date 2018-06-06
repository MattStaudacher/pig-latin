# Epicodus Week 3 Day 3 Pig Latin Project

## Author

Steven Colburn  
Matt Staudacher

## Project Name

Pig Latin

## Created

06/06/2018

## About

Pig Latin
Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"? Read all instructions carefully before beginning.

How Pig Latin Works
First, here are the rules of Pig Latin:

For words beginning with a vowel, add "way" to the end.

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

For words beginning with "y", treat "y" as a consonant.

## Specifications Outline:

1. if word begins with vowel append "way" to the end of the word
2. If word begins with 1 or more consonant move all consecutive consonants to the end and append "ay"
  1. if firsts consonants include "qu" move "u" with the "q"
  2. Check for y in the word when looking for vowels as a stopping point.

  To get you started, below are the first two "plain English" specs:

## Example Output

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.

* Example Input: 3
* Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.

* Example Input: i
* Example Output: iay

## Technology Used

HTML, CSS, Javascript, jQuery, arrays

## Installation
Clone from:
https://github.com/Xamdes/pig-latin.git
https://github.com/MattStaudacher/pig-latin.git

## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
