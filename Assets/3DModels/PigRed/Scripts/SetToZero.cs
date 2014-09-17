using UnityEngine;
using System.Collections;

public class SetToZero : MonoBehaviour {

		public void ObjectToZero() {
		transform.position.Set (0, 0, 0);
		print("object to zero");
		}
}
