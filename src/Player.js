var that = {};

class Player
{
  constructor() {

  }
  init() {
      //  Initialise game objects here
      that = this;
      this.collision = false;
      this.circle = new CircleCollider(new Vector2(500,100), 50);

      this.gravity = new Vector2(0, .098);
      this.resitution = new Vector2(1.2, .50);
      this.friction = new Vector2(.97, .97); // x represents ground friction and y air friction
      this.velocity = new Vector2(0,0);
      this.acceleration = new Vector2(0,0);

      this.previousV = new Vector2(0,0);
  }

  playerKeys(keys) {
    keys.forEach(function(element) {
      if(element == "a") {
        that.acceleration.x -= 6;
      }
      if(element == "d") {
        that.acceleration.x += 6;
      }
      if(element == "w") {
        that.acceleration.y -= 6;
      }
    });
  }

  handleCollision(entity)
  {
    if(entity != undefined){
      // colliding with the right side of the entity
      if(this.circle.shape.position.x < entity.shape.position.x){
        // if coming up
          if(this.circle.shape.position.y - this.circle.shape.radius < entity.shape.position.y + entity.shape.height
            && this.circle.shape.position.y + this.circle.shape.radius > entity.shape.position.y){
              this.velocity.x *= -this.resitution.x;
            }
        }
      // colliding with the left side of the entity
      if(this.circle.shape.position.x > entity.shape.position.x + entity.shape.width){
        if(this.circle.shape.position.y - this.circle.shape.radius < entity.shape.position.y + entity.shape.height
          && this.circle.shape.position.y + this.circle.shape.radius > entity.shape.position.y + 1){
            this.velocity.x *= -this.resitution.x;
          }
      }

      // colliding with the bottom side of the entity
      if(this.circle.shape.position.y > entity.shape.position.y + entity.shape.height){
        this.circle.shape.position.y = entity.shape.position.y + entity.shape.height + this.circle.shape.radius;
          this.velocity.y *= -this.resitution.y;
      }
      // colliding with the top side of the entity
      if(this.circle.shape.position.y  < entity.shape.position.y){
        this.circle.shape.position.y = entity.shape.position.y - this.circle.shape.radius;
        this.velocity.y *= -this.resitution.y;
      }
    }
  }

  update() {
    this.acceleration.y += this.gravity.y;

    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;

    this.velocity.x *= this.friction.x;
    this.velocity.y *= this.friction.y;

    if(this.velocity.y < .05 && this.velocity.y > -.05){
      this.velocity.y = 0;
    }
    if(this.velocity.x < .005 && this.velocity.x > -.005){
      this.velocity.x = 0;
    }

    this.circle.shape.position.x += this.velocity.x;
    this.circle.shape.position.y += this.velocity.y;

    this.previousV = this.velocity;
    this.acceleration = new Vector2(0,0);
  }


  render() {
  }
}
