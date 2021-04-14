float temp;
void setup() {
  
  Serial.begin(9600);
  
}

void loop() {
  temp = analogRead(A0);
  temp = temp * 0.48828125;
  Serial.println("TEMPERATURE");
  Serial.println(temp);
  Serial.print("°C");
  Serial.println();
  delay(1000);
}
