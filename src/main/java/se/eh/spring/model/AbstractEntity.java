package se.eh.spring.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class AbstractEntity
{
	@Id @GeneratedValue
	private int id;

	protected AbstractEntity() {}

	public int getId() {
		return id;
	}
}
