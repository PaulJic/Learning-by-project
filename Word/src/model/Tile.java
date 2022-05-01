package model;

public class Tile {
	private char text;
	private StatusEnum state;
	public char getText() {
		return text;
	}
	public void setText(char text) {
		this.text = text;
	}
	public StatusEnum getState() {
		return state;
	}
	public void setState(StatusEnum state) {
		this.state = state;
	}
	public Tile(char text, String state) {
		this.text = text;
		this.state = StatusEnum.valueOf(state);
	}
	
}
