#pragma strict

function Start () {
	BulletSpawner.FireBullet(transform.position, transform.forward);
}

function Update () {
	
}

static var bulletVel : float = 5;
static var bulletDens : float = 10;

static function FireBullet(pos : Vector3, dir : Vector3) {
	var bulletObj = new GameObject("bullet");
	bulletObj.transform.position = pos;
	var bullet = bulletObj.AddComponent.<Bullet>();
	bullet.vel = dir * bulletVel;
}