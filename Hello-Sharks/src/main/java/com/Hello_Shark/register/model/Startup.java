package com.Hello_Shark.register.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "startups")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Startup {
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @Column(name = "email" , unique = true , length = 50)
	    private String email;
	    
	    
	    
	    @NotBlank(message = "Password is required")
	    @Size(min = 6, message = "Password must be at least 6 characters long")
	    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$", 
	             message = "Password must contain at least one letter, one number, and be at least 6 characters long")
	    private String password;
          
	    @Column(name = "company_name", unique = true, length = 30)
	    private String companyName;

	   
	    private String designation;

	   
	    private String founder;

	    private String description;

	  
	    private Double revenue;


		public Startup(Long id, String companyName, String designation, String founder, String description,
				Double revenue, String email, @NotBlank(message = "Password is required") 
		@Size(min = 6, message = "Password must be at least 6 characters long")
		@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$",
		message = "Password must contain at least one letter, one number, and be at least 6 characters long") String password) {
			super();
			this.id = id;
			this.email = email;
			this.password = password;
			this.companyName = companyName;
			
			this.designation = designation;
			this.founder = founder;
			this.description = description;
			this.revenue = revenue;
		}

      
		
}
