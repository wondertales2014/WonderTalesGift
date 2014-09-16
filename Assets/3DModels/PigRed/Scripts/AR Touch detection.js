#pragma strict

function Start () {

}

function Update () {

	if (Input.touchCount > 0)
		{
		for (var i = 0; i < Input.touchCount; ++i)
			{
			var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
			var hit:RaycastHit;		

			if (Physics.Raycast (ray, hit,Mathf.Infinity)) 
				{
				if (Input.GetTouch(i).phase == TouchPhase.Began)
					{
					hit.transform.gameObject.SendMessage("OnTouchDown", 1);
					}
				if (Input.GetTouch(i).phase == TouchPhase.Ended)
					{
					hit.transform.gameObject.SendMessage("OnTouchDown", 2);
					}
				}
			}
		}
}