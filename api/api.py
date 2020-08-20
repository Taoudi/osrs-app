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