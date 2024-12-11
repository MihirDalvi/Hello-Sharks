package com.Hello_Shark.register.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Sharks")
public class Shark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    public Shark(Long id, 
    			String name, 
    			String companyName, 
    			String title, 
    			String bio, 
    			Boolean status, 
    			String gmail,
    			String password, 
    			String gstNumber, 
    			Double revenue) {
		super();
		this.id = id;
		this.name = name;
		this.companyName = companyName;
		this.title = title;
		this.bio = bio;
		this.status = status;
		this.gmail = gmail;
		this.password = password;
		this.gstNumber = gstNumber;
		this.revenue = revenue;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public String getGmail() {
		return gmail;
	}
	public void setGmail(String gmail) {
		this.gmail = gmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGstNumber() {
		return gstNumber;
	}
	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}
	public Double getRevenue() {
		return revenue;
	}
	public void setRevenue(Double revenue) {
		this.revenue = revenue;
	}
	
	@NotBlank
	private String companyName;
    private String title;
    public Shark() {
		super();
	}
	@Column(length = 500)
    private String bio;
    private Boolean status = false; // Default value
    
    @NotBlank(message = "Gmail must not be blank")
    //@Email
    private String gmail;
    
    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
    
    @NotBlank(message = "GST Number must not be blank")
    @Size(min = 15, max = 15, message = "GST Number must be 15 characters")
    private String gstNumber;
    
    //@NotNull
    private Double revenue;

    // Getters and Setters
    // No-args and All-args Constructors
}

