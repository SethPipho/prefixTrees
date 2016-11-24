# prefixTrees

**Prefix trees**, also known as **Tries**, are a type of data tree normally used to store and retireve text.

Each node of a Prefix Tree contains and array of 26 pointers, corresponding to each letter of the alphabet. All
decendents of node share a common prefix. In addtion, each node cotains a boolean field which determines if the node
represents the ending for a valid word. See [wikipedia] (https://en.wikipedia.org/wiki/Trie)

![Trie] (https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Trie_example.svg/250px-Trie_example.svg.png "Example")

**Prefix Trees** are very useful for applications involving exstensive word searching. 

Below are three demos of  three common applications of Tries implemented in javascript. Each example uses a Trie constructed 
from a work bank of roughly 10,000 english words.

* [Anagram Generato] (https://sethpipho.github.io/prefixTrees/demos/anagram.html)
* [Autocomplete] (https://sethpipho.github.io/prefixTrees/demos/autoComplete.html)
* [Words Combos] (https://sethpipho.github.io/prefixTrees/demos/wordCombos.html)
