 function findCombosRec(root, arr, end, curWord, foundWords)
{
    if (root.wordEnd)
    {
        foundWords.push(curWord.map(function (c) {return String.fromCharCode(c + 97)}).join(""))
    }

    for (var i = 0; i < end; i++)
    {
        if (root.children[arr[i]] == undefined) { continue }

        //prevents same word being found twice
        if (i > 0 && arr[i - 1] == arr[i]){  continue }
        
        nextNode = root.children[arr[i]]
        
        curWord.push(arr[i])
        swap(arr, i, end - 1)

        findCombosRec(nextNode, arr, end -1, curWord, foundWords )

        swap(arr, i, end - 1)
        curWord.pop()
    }
}

function findCombos(letters, tree)
{
    var arr = letters.toLowerCase().split("").map(function(c) {return c.charCodeAt(0) - 97})
    arr.sort()
    var foundWords = []
    findCombosRec(tree.root, arr, arr.length, [], foundWords)
    return foundWords
}

function swap(arr, a, b)
{
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}