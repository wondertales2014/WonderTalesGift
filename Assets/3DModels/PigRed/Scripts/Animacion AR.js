#pragma strict

var anim : Animator;

function Start () {

	anim = GetComponent(Animator);
}

function Update () {

	var fwd = transform.TransformDirection (Vector3.forward);
	print("fwd: " + fwd);
	var hit:RaycastHit;
	if (Physics.Raycast (transform.position, fwd, hit, Mathf.Infinity)) 
		{
		print("hit");
		anim.SetBool("miraCentro", true);
		}
}

function OnTouchDown (valor : int) {
	
	if (valor == 1)	
		{
		anim.SetBool("caminar", true);
		}
	if (valor == 2)	
		{
		anim.SetBool("caminar", false);
		}
		
}