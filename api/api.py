import time
from flask import Flask
from boss import Item, Boss
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
    itemlist.append(Item("Pegasian Crystal",30000000))
    itemlist.append(Item("Eternal Crystal",2654963))
    bosslist.append(Boss('Cerberus', itemlist).jsoned())
    itemlist=[]
    itemlist.append(Item("Abyssal Whip",20000000))
    itemlist.append(Item("Abyssal Bludgeon",2000000))
    bosslist.append(Boss('Abyssal Sire', itemlist).jsoned())

    print({'bosses' : bosslist}, file=sys.stderr)
    return {'bosses' : bosslist}
