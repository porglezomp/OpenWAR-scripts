#pragma strict

var vel : Vector3;

function Start () {

}

function Update () {
	print(transform.position);
	Debug.DrawRay(transform.position, vel * Time.deltaTime);
	var hit : RaycastHit;
	if (Physics.Raycast(transform.position, vel * Time.deltaTime, hit, (vel*Time.deltaTime).magnitude)) {
		Debug.DrawRay(hit.point, Vector3.up);
	} else {
		transform.Translate(vel * Time.deltaTime, Space.World);
	}
}