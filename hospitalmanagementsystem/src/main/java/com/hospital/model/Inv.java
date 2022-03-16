package com.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="INV")
public class Inv {
	@Id
	@GeneratedValue
	 @Column(name="invoice_id")
	 private int invoice_id;
	 @Column(name="p_id")
	 private int p_id;
	 @Column(name="product")
	 private String product;
	 @Column(name="price")
	 private float price;
	 @Column(name="quantity")
	 private float quantity;
	public Inv() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Inv(int invoice_id, int p_id, String product, float price, float quantity) {
		super();
		this.invoice_id = invoice_id;
		this.p_id = p_id;
		this.product = product;
		this.price = price;
		this.quantity = quantity;
	}
	public int getId() {
		return invoice_id;
	}
	public void setId(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	public int getpId() {
		return p_id;
	}
	public void setpId(int pId) {
		this.p_id = pId;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public float getQuantity() {
		return quantity;
	}
	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}
	 
	 
}
