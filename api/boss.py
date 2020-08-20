from flask import Flask

class Boss:
    def __init__(self, name, items=[]):
        self.items = items
        self.name = name


    def jsoned(self):
        items = []
        for i,item in enumerate(self.items):
            idx = 'item'+str(i)
            items.append(item.jsoned())

        return {
            "name":str(self.name),
            "items":items
        }



class Item:
    def __init__(self, name, value=0):
        self.name = name
        self.value=value

    def jsoned(self):
        return {
            "name":str(self.name),
            "value":str(self.value)
         }