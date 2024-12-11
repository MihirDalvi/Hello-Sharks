package com.Hello_Shark.register.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hello_Shark.register.model.Startup;
import com.Hello_Shark.register.service.StartupService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/startups")
public class StartupController {
	@Autowired
    private StartupService startupService;
	
	public StartupController() {
		System.out.println("in ctor" + getClass());
	}

//  
	@PostMapping("/add")
	public ResponseEntity<?> addNewStartup(@RequestBody Startup startup) {
	    // Assuming startupService.addNewStartup() successfully adds a new startup
	    try {
	        String newStartup = startupService.addNewStartup(startup);
	        // Return a JSON object with a message and the added startup details
	        return ResponseEntity.status(HttpStatus.CREATED)
	                .body(Map.of(
	                        "message", "Added new startup successfully",
	                        "startup", newStartup // Return the startup data as part of the response
	                ));
	    } catch (RuntimeException e) {
	        // Handle error and return as JSON
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                .body(Map.of(
	                        "error", e.getMessage()
	                ));
	    }
	}

//    
	 
	 
	 @GetMapping("/getAllStarups")
		public ResponseEntity<?> getAllStartup() {
			System.out.println("in get all startups");
			List<Startup> startup = startupService.getAllStartups();
			if (startup.isEmpty())
				return ResponseEntity
						.status(HttpStatus.NO_CONTENT)
						.build();
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(startup);
		}
	 
	 
	 
	 //status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
	 @PutMapping("/updateStartup")
		public Startup updateStartup(@RequestBody Startup startup) {
			return startupService.updateStartup(startup);
		}
	 
	 @DeleteMapping("/deleteStartup/{id}")
		public Boolean deleteStartup(@PathVariable Long id)
		{
			return startupService.deleteStartup(id);
		}
	 
	 
	 //  
	 @PostMapping("/login")
	 public ResponseEntity<?> login(@RequestBody Startup loginDetails) {
	     try {
	         Startup startup = startupService.getByDetails(loginDetails.getEmail(), loginDetails.getPassword());
	         // Return a structured JSON response
	         return ResponseEntity.ok(Map.of(
	             "message", "Login successful",
	             "companyName", startup.getCompanyName()
	         ));
	     } catch (RuntimeException e) {
	         // Return error message in JSON format
	         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
	             "error", e.getMessage()
	         ));
	     }
	 }


}
