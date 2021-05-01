class Trie:
    def __init__(self):
        # make sure empty string will return true
        self.root = {"*": "*"}
