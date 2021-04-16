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

gasSensor = board.get_pin('a:5:i')
while True:
  time.sleep(2)
  result = int(gasSensor.read() * 1000)
  r = requests.post("http://localhost:8080/api/airquality/add", data = {'ppm':result, 'userId':1})
  print(r.text)
  print(result)