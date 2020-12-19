import time
from flask import Flask
from boss import Item, Boss
from item_simulator import Simulator
import sys
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': 'vafoen', 'skim':'ajajajajaj'}


@app.route('/test')
def get_boss():
    itemlist = []
    itemlist.append(Item("Pegasian Crystal",30000000))
    itemlist.append(Item("Eternal Crystal",2654963))
    boss = Boss('Cerberus', itemlist)
    print(boss.jsoned(), file=sys.stderr)
    return boss.jsoned()

@app.route('/testlist')
def get_bosses():
    itemlist = []
    bosslist = []
    itemlist.append(Item("Twisted Bow",20000000))
    itemlist.append(Item("Elder Maul",2000000))
    bosslist.append(Boss('Chambers of Xeric', itemlist).jsoned())
    itemlist=[]
    itemlist.append(Item("Scythe of Vitur",20000000))
    itemlist.append(Item("Ghrazi Rapier",2000000))
    bosslist.append(Boss('Theater of Blood', itemlist).jsoned())
    itemlist=[]
    itemlist.append(Item("Pegasian Crystal",20000000))
    itemlist.append(Item("Primordial Crystal",2000000))
    bosslist.append(Boss('Cerberus', itemlist).jsoned())
    itemlist=[]
    itemlist.append(Item("Smoke Battlestaff",20000000))
    itemlist.append(Item("Amulet",2000000))
    bosslist.append(Boss('Thermonuclear Smoke Devil', itemlist).jsoned())
    itemlist=[]
    itemlist.append(Item("Hydra Leather",20000000))
    itemlist.append(Item("Hydras Claw",2000000))
    bosslist.append(Boss('Alchemical Hydra', itemlist).jsoned())
    

    sim = Simulator()
    print({'bosses' : bosslist}, file=sys.stderr)
    total = 0
    trials=1
    #for i in range(trials):
    print(sim.simulate(bosslist[0]['items']))
    #    total+=i1
    #print(total/trials)

    return {'bosses' : bosslist}
