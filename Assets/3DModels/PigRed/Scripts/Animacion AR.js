#pragma strict

var anim : Animator;

function Start () {

	anim = GetComponent(Animator);
}

function Update () {

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