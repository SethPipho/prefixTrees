//implentation of a prefix tree in js

function node() {
    this.children = [] //array of node refrences for each letter of alphabet
    this.wordEnd = false //determines if word ending at this node is valid
}

function prefixTree() {
    this.root = new node()

    this.addWord = function (word) {
        var charArr = word.toLowerCase().split("");
        //converts each letter into number between 0-26
        charArr = charArr.map(function (c) { return c.charCodeAt(0) - 97})

        var curNode = this.root

        for (i in charArr) {
            if (curNode.children[charArr[i]] == undefined) {
                curNode.children[charArr[i]] = new node()
            }
            curNode = curNode.children[charArr[i]]
        }
        curNode.wordEnd = true
    }

    this.addWords = function (arr) {
        for (word in arr) {
            this.addWord(arr[word])
        }
    }

    this.getNode = function (string) {

        var curNode = this.root
        var charArr = string.toLowerCase().split("")
          //converts each letter into number between 0-26
        charArr = charArr.map(function (c) { return c.charCodeAt(0) - 97})

        for (i in charArr) {
            if (curNode.children[charArr[i]] != undefined) {
                curNode = curNode.children[charArr[i]]
            } else {
                return null;
            }
        }

        return curNode
    }
}