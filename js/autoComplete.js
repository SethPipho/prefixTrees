function autoComplete(tree, prefix)
    {
        var root = tree.getNode(prefix)
        if (root == null) {return []}
        var foundWords = []
        var prefixArr =  prefix.toLowerCase().split("").map(function(c) {return c.charCodeAt(0) - 97})
        findAllWords(root,prefixArr,foundWords)
        return foundWords
    }


function findAllWords(root, curWord, wordArr)
{
    if (root.wordEnd)
    {
        wordArr.push(curWord.map(function (c) {return String.fromCharCode(c + 97)}).join(""))
    }

    for (var i = 0; i < root.children.length; i++)
    {
        if (root.children[i] != undefined)
        {
            curWord.push(i)
            this.findAllWords(root.children[i], curWord, wordArr)
            curWord.pop() 
        } 
    }
    return
}
