import numpy as np
from boss import Item

class Simulator:

    def dejsoned(self,json):
        print(json)
        values = json.split(':')
        return Item(values[0],values[1],values[2],values[3])
    def simulate(self, items, trials=100):
        amounts = []
        for i in items:
            #print(float(i['prob']))
            sim = np.random.randint(1/float(i['prob']), size=trials)
            amounts.append(np.sum(np.where(sim==0,1,0)))
        
        return amounts


