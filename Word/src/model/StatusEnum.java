package model;

public enum StatusEnum {
		CORRECT("1"),PRESENT("2"),WRONG("3");
	
		
		private String number;
		StatusEnum(String number) {
			this.number=number;
		}

	
}
