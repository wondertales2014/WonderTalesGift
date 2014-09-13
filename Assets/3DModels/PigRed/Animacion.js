#pragma strict

var anim : Animator;

function Start () {

anim = GetComponent(Animator);

}

function Update () {
	
	
//	anim.SetBool("caminar", false);
	print("caminar: " + anim.GetBool("caminar"));
	
	if (Input.touchCount > 0)
		{
		for (var i = 0; i < Input.touchCount; ++i)
			{
			if (Input.GetTouch(i).phase == TouchPhase.Began)
				{
				anim.SetBool("caminar", true);
				}
		
			if (Input.GetTouch(i).phase == TouchPhase.Ended)
				{
				anim.SetBool("caminar", false);
				}
			}
		}
 }