function findAnagrams(letters, tree, maxWords) {
    var arr = letters.toLowerCase().split("")
    arr = arr.filter(function (c) { return (c != " ") }) //filter out spaces 
    arr.sort()
    arr = arr.map(function (c) { return c.charCodeAt(0) - 97}) //convert char in num 0 to 26

    var foundWords = []

    findAnagramsRec(tree, tree.root, arr, arr.length, [], foundWords, maxWords, 1)

    return foundWords
}

function findAnagramsRec(tree, root, arr, end, curWord, foundWords, maxWords, numWords) {

    if (numWords > maxWords) {
        return
    }

    if (root.wordEnd && end == 0) {
        foundWords.push(curWord.map(function (c) { return String.fromCharCode(c + 97) }).join(""))
        return
    } else if (root.wordEnd) //if valid word, add space to curWord, start recursive branch at top
    {
        curWord.push(" ".charCodeAt() - 97)
        findAnagramsRec(tree, tree.root, arr, end, curWord, foundWords, maxWords, numWords + 1)
        curWord.pop()
    }


    for (var i = 0; i < end; i++) {
        
        if (root.children[arr[i]] == undefined) {
            continue
        }
        
        if (i > 0 && arr[i - 1] == arr[i]) {
            continue
        }

        var nextNode = root.children[arr[i]]

        curWord.push(arr[i])
        swapAndShift(arr, i, end - 1)

        findAnagramsRec(tree, nextNode, arr, end - 1, curWord, foundWords, maxWords, numWords)

        unSwapAndShift(arr, i, end - 1)
        curWord.pop()
    }
}


function swapAndShift(arr, a, b) {
    var temp = arr[a]
    for (var i = a; i < b; i++) {
        arr[i] = arr[i + 1]
    }
    arr[b] = temp
}

function unSwapAndShift(arr, a, b) {
    var temp = arr[b]

    for (var i = b; i > a; i--) {
        arr[i] = arr[i - 1];
    }

    arr[a] = temp
}