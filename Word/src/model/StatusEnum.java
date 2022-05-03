package model;

public enum StatusEnum {
		CORRECT,PRESENT,WRONG;
	
		public static StatusEnum valueOf(int e) {
			return (e==1)?StatusEnum.CORRECT:(e==2)?StatusEnum.PRESENT:StatusEnum.WRONG;
		}

	
}
