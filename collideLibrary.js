function colliding(object1,object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2 && object1.y - object2.y <= object2.height/2 + object1.height/2
    && object2.y - object1.y <= object2.height/2 + object1.height/2
    ) {
      object1.velocityX = 0;
      object1.velocityY = 0;
      object2.velocityX = 0;
      object2.velocityY = 0;
      wall.visible = false;
      deformation = (0.5 * weight * speed * speed)/22500;
      if(deformation < 100){
        car.shapeColor = "green";
      }

      if(deformation >= 100 && deformation < 180){
        car.shapeColor = "yellow";
      }

      if(deformation >= 180){
        car.shapeColor = "red";
      }
  }
}