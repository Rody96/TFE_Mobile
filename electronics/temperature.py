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

tempSensor = board.get_pin('a:0:i')
while True:
  time.sleep(3.0)
  r = requests.post("http://localhost:8080/api/temperature/add", data = {'temperature': tempSensor.read() * 5.0 * 100, 'userId':1})
  print(r.text)
  print(tempSensor.read() * 5.0 * 100)