#pragma strict

var anim : Animator;

function Start () {

	anim = GetComponent(Animator);
}

function Update () {

	var fwd = transform.TransformDirection (Vector3.forward);
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
	if (valor == 3)
		{
		print("object to zero init");
		print(this.transform.position.x);
		print(this.transform.position.y);
		print(this.transform.position.z);
		//transform.position.Set (0, 0, 0);
		this.transform.position.x = 0;
		this.transform.position.y = 0;
		this.transform.position.z = 0;
		print(this.transform.position.x);
		print(this.transform.position.y);
		print(this.transform.position.z);
		print("object to zero");
		}
}
