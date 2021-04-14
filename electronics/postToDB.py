try:
  from pyfirmata import Arduino, util
except:
  import pip
  pip.main(["install",'pyfirmata'])
  from pyfirmata import Arduino, util  
import time
import requests


board = Arduino('COM3')

iterator = util.Iterator(board)
iterator.start()

Tv1 = board.get_pin('a:0:i')
while True:
  time.sleep(3.0)
  r = requests.post("http://localhost:8080/api/mesures/new", data = {'temperature': Tv1.read() * 5.0 * 100})
  print(r.text)
  print(Tv1.read() * 5.0 * 100)